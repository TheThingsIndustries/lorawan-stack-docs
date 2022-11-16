---
title: "Mutual TLS"
description: "Mutual TLS authentication"
weight: 9
new_in_version: 3.22.2
---

{{% tts %}} supports mutual TLS authentication via a supported proxy (Envoy).

<!--more-->

## Mechanism

{{% tts %}} does not terminate mTLS connections. This is done by the proxy. The proxy is expected to forward the sanitized client certificate chain as an HTTP header.

{{% tts %}} verifies this header with a pre-configured list of CAs.

{{% tts %}} supports mTLS authentication for {{% lbs %}} CUPS and {{% lbs %}} LNS connections (LNS-only mode) that present a client certificate.

### TLS termination 

In the standard deployment model, AWS Network Load Balancer (NLB) terminates TLS, and then forwards unencrypted packets to {{% tts %}} via AWS internal network.

Since the NLB does not support verifying client TLS certificates, the responsibility for terminating TLS is promoted to the proxy (only) for the the ports **443** (HTTPS) and **8887** (Web Socket with TLS).

The other ports will have TLS terminated by the NLB.

### Certificate Requirements

The `CN` (Common Name) field of the certificate must be the 16 digit gateway EUI. Example: `1111111111111111`

## Update Instructions

The `SupportProxyTLS` option is available in all the following templates and controls where TLS is terminated.

Make sure to set it to `true` in **all** the templates if the proxy should terminate TLS.

If not, it should be set to `false` in **all** the templates (this is the default). Setting it `true` in one and `false` in another will lead to to errors.

### Step 1: Configuration of the CA Certificate Store

First, deploy template `2-4c-mtls-s3`. This generates an S3 bucket to store CA certificates.

After this template has been deployed, navigate to S3 and find the bucket that was created. You can check the **Resources** tab in Cloud Formation to find the bucket.

Create an `index.yml` file that contains the CA store configuration and upload it to the root of the bucket.

The contents of this file are as below.

```yaml
common:
- common.pem
tenants:
  test:
  - test.pem
```
Create a `common` folder at the root of this repository.
This folder contains the default certificates that are used to verify the client certificate, in case there are no tenant-specific matches.

Create a folder called `tenants` in the root of the bucket. This bucket contains CA certificates per tenant.
You can now create as many folders inside `tenants` with the folder name being the ID of a {{% tts %}} tenant. These folders would contain CA Certificates specific to that tenant.

{{< note >}}
If you want to set the certificates later, create an empty `index.yml` file.
{{</ note >}}

### Step 2: Fetch and Store Server TLS Credentials

{{% tts %}} AWS ECS deployment uses Certbot to query Server TLS credentials from Let's Encrpyt and store it in the AWS Certificate Manager.

But since credentials once stored in ACM cannot be retrieved (can only be referenced by NLB), we need to store a copy of these credentials in the AWS Secrets Manager.

Deploy the updated `4-1-secrets` template to create a new secret in ACM. This also generates additional keys in the KeyVault for {{% tts %}} components to exchange auth information.

Then deploy the updated `5-7a-certs-le` to update the Certbot task and fetch new certificates using the [instructions]({{< relref "#lets-encrypt-certificates-optional" >}}).

### Step 3: Update the Load Balancer and the Proxy

{{< warning >}}
This step requires brief downtime. Make sure to inform your customers.
{{</ warning >}}

The AWS NLB used by {{% tts %}} AWS ECS deployment binds listeners to Target Groups. 

AWS NLB requires that the target groups and the listeners have the same protocol type (TCP/TLS/UDP).

We are now modifying the protocol of the NLB ports `443` and `8887` to TCP. This means that the target groups that these ports use must be modified.

Since the Proxy service is already bound to these target groups, CloudFormation would error if you try to update this.

First, make a copy of the configuration parameters in the `5-6-ecs-proxy` CloudFormation stack.

Next, delete the `5-6-ecs-proxy` stack.

{{< note >}}
This will only delete the Proxy ECS containers and its related alarms. This can be easily reverted by re-deploying `5-6-ecs-proxy`.
{{</ note >}}

Deploy the `3-2-load-balancer-rules` template. AWS will now create the proper target groups with the `TCP` protocol type.

Once completed, redeploy `5-6-ecs-proxy` and make sure to set `SupportProxyTLS` to `true`.

At this point, if all the configuration is right, the proxy (Envoy) will handle TLS termination for ports `443` and `8887`.

### Step 4: Update {{% tts %}} Components

Since mTLS is supported for {{% lbs %}} CUPS and {{% lbs %}} LNS connections, {{% tts %}} Gateway Server, Identity Server and Gateway Configuration Server components require additional configuration.

First deploy `4-2a-configuration` which contains new configuration and then deploy `5-4-ecs-services` to use those changes.

## Additional Operator Notes

### Reloading Certificates

Envoy (proxy) supports reloading TLS certificates without dropping active connections. 

This is done by using the [static SDS configuration](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#example-three-certificate-rotation-for-xds-grpc-connection).

The `5-7b-ecs-certbot-scheduled-task` runs a periodic task to fetch new server TLS credentials.

If there are new credentials, they will also be stored in Secrets Manager.

The `-aws-proxy` images used for the proxy contain a cronjob that queries Secrets Manager (daily by default) and updates the proxy configuration.

### Testing mTLS authentication

In order to test mTLS authentication, you can generate self-signed certificates.

{{< warning >}}
This is only for testing. Do not use this process in production.
{{</ warning >}}

1. Create a client gateway private key. Note you can choose any length of the key.

```bash
$ openssl genrsa -des3 -out client.key 2048
```

Unlock the key:

```bash
$ openssl rsa -in client.key -out gateway.key
```

2. Create a Root CA:

```bash
$ openssl req -x509 -sha256 -days 1825 -newkey rsa:2048 -keyout root-ca.key -out root-ca.crt
```

3. Create a Certificate Signing Request for your client (Gateways):

{{< note >}}
The `CN` (Common Name) field must be the 16 digit gateway EUI. Example: `1111111111111111`
{{</ note >}}

```bash
$ openssl req -key client.key -new -out gateway.csr
```

4. Generate the client certificate. The following generates a gateway certificate signed by the Root CA valid for 365 days.

```bash
$ openssl x509 -req -CA root-ca.crt -CAkey root-ca.key -in gateway.csr -out gateway.crt -days 365 -CAcreateserial -sha256 -days 365
```

5. In the S3 bucket generated in Step 1, add the `root-ca.crt` in either the `common` folder or the target tenant folder where your gateway is registered. 

Now restart the Gateway Server, Identity Server and Gateway Configuration Servers.

6. Connect using a client (e.g. `cURL`)

```bash
curl -v --cert <path>/gateway.crt --key <path>/gateway.key --cacert <path>/root-ca.crt https://<domain>:443/update-info -d '{"router":"<EUI in ID6>"}'
```

## Troubleshooting

#### How do I check which certificates are being used?

On most web browsers, next to the server address, there would be a lock symbol. Clicking on this would lead to a menu that shows the certificates.

Alternatively, this can be done via command line.

```bash
$ openssl s_client -showcerts -connect <server>:<port>
```

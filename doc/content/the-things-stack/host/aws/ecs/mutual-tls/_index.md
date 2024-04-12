---
title: "Mutual TLS"
description: "Mutual TLS authentication"
weight: 9
new_in_version: 3.29.0
aliases: [/getting-started/aws/ecs/mutual-tls]
---

{{% tts %}} supports mutual TLS authentication via a supported proxy (Envoy).

<!--more-->

## Mechanism

{{% tts %}} does not terminate mTLS connections. This is done by the proxy. The proxy is expected to forward the sanitized client certificate chain as an HTTP header.

{{% tts %}} verifies this header with a pre-configured list of CAs.

{{% tts %}} supports mTLS authentication for {{% lbs %}} CUPS connections.

### TLS termination

In the standard deployment model, AWS Network Load Balancer (NLB) terminates TLS, and then forwards unencrypted packets to {{% tts %}} via AWS internal network.

Since the NLB does not support verifying client TLS certificates, the responsibility for terminating TLS is promoted to the proxy (only) for the the ports **8987** (CUPS mTLS) port.

### Certificate Requirements

The `CN` (Common Name) field of the certificate must be the 16 digit gateway EUI. Example: `1111111111111111`

## Update Instructions

The `SupportProxyTLS` and `LBSCUPSmTLSEnabled` options are available in multiple templates. Make sure to set it to `true` in **all** the templates if the proxy should terminate CUPS mTLS Connections.

If not, it should be set to `false` in **all** the templates (this is the default). Setting it `true` in one and `false` in another will lead to to errors.

### Preparation

- If you are deploying TTS for the first time, complete the steps with `SupportProxyTLS` and `LBSCUPSmTLSEnabled` set to false (this is the default).
- If you are updating to a version with `mTLS` support from a previous version, first deploy the following templates in this exact order with `SupportProxyTLS` and `LBSCUPSmTLSEnabled` set to false.
  - `3-1-security-group-rules`: The template will be deployed with no changes.
  - `3-2-load-balancer-rules`: The template will be deployed with no changes.
  - `4-1-secrets`: The template will be deployed with no changes.
  - `4-2a-configuration`: CloudFormation will mark `GSConfiguration` for a change but this is only on the template. No resources will be changed.
  - `5-4-ecs-services`: There will be changes to the GS and GCS Task roles. The GS/GCS services/tasks will not be updated.
  - `5-7-ecs-proxy`: The template will be deployed with no changes.
  - `5-8a-certs-le`: The template will be deployed with no changes.

### Enabling mTLS Support

Once the preparation step is complete, run the following steps in the _exact same order_ as described here.

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

In `4-1-secrets` template with `SupportProxyTLS` set to `true`.

This creates a `ProxyTLSSecret` for the TLS server certificate/key secrets and also a `GCS token hash key secret`, which is used by the Gateway Configuration Server and the Identity Server.

Next, update `5-8a-certs-le` with the following settings:

- Set ` SupportProxyTLS` to true. If `ExistingCertARN` is set, clear this before running the update.
- Fetch new certificates by manually requesting it using the [instructions]({{< ref "the-things-stack/host/aws/ecs/deployment/#lets-encrypt-certificates-optional" >}}).
- When fetching the certificates, make note of the `CertificateArn` field from the logs where the new certificates are written.
- Once the certificates are successfully queried, rerun the same `5-8a-certs-le` template but this time set, the `ExistingCertARN` with the `CertificateArn` value. This ensures that Certbot renews these certificates and doesn't replace them.

### Step 3: Update the Load Balancer and the Proxy

We now forward traffic from `8987` on the AWS NLB to `8987` on Envoy.

First update `3-1-security-group-rules`. Set `LBSCUPSmTLSEnabled` to `true`. This will allow traffic from `8987` to flow into the cluster.

Next Update `3-2-load-balancer-rules`.

- Set `SupportProxyTLS` to true.
- Set `TLSCertificateARN` with the ARN from the previous step and update.
- Set `LBSCUPSmTLSEnabled` to true.

The new certificate is picked up by all TLS listeners and new listener and target group for CUPS mTLS is created.

Now, update `5-7-ecs-proxy`. Set `SupportProxyTLS` and `LBSCUPSmTLSEnabled` to true.

Make sure that the image of the proxy is minimum `v3.30.0`. Images from earlier releases do not contain changes necessary for mTLS support.

You can check if the connection is successful by querying the certificates presented by the `8987` listener.

```bash
$ openssl s_client -connect <domain>:8987
```

### Step 4: Update {{% tts %}} Components

Since mTLS is supported for {{% lbs %}} CUPS , {{% tts %}} Identity Server and Gateway Configuration Server components require additional configuration.

In `4-2a-configuration`, set `SupportProxyTLS` to true and deploy it.

Once that is completed, deploy `5-4-ecs-services` with `SupportProxyTLS` set to true.

### Step 5: Testing

Now that the above setup is complete, we can now test if everything worked. For testing instructions check the [mTLS Authentication]({{< ref "/gateways/concepts/lora-basics-station/mtls-authentication" >}}) page.

## Additional Operator Notes

### Reloading Certificates

Envoy (proxy) supports reloading TLS certificates without dropping active connections.

This is done by using the [static SDS configuration](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#example-three-certificate-rotation-for-xds-grpc-connection).

The `5-8b-ecs-certbot-scheduled-task` runs a periodic task to fetch new server TLS credentials.

If there are new credentials, they will also be stored in Secrets Manager.

The `-aws-proxy` images used for the proxy contain a cronjob that queries Secrets Manager (daily by default) and updates the proxy configuration.

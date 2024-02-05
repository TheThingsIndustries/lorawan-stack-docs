---
title: "mTLS Authentication"
description: ""
---

{{% tts %}} supports mutual TLS to authenticate {{% lbs %}} CUPS connections in selected deployments.

<!--more-->

{{% tts %}} does not natively terminate mTLS connections. This is done by a proxy. The proxy is expected to forward the sanitized client certificate chain as an HTTP header. To check if your deployment supports it, contact the operator.

## Procedure

1. The gateway vendor or user generates a CA (Certificate Authority) credentials in a secure environment. This usually consists of a public x509 certificate and a private key.

- Usually, a Root CA and one or many intermediate CAs are generated. The Root CA is never exposed externally, while the intermediate is used for singing client certificates.

2. The gateway vendor generates _unique mTLS client credentials for each gateway_. This involves a public certificate and private key.

- The public certificate uniquely identifies the gateway. The Common Name (CN) field of the certificate should be **exactly** equal to the 16-digit EUI. The other fields are left to the user.
- The private key is the counterpart of the public certificate and is used for cryptographic operations while connecting to {{% tts %}}. Gateway vendors must ensure that this key is not easily accessible from the gateway. Anyone in possession of this key can impersonate the gateway.
- While {{% tts %}} does not currently enforce which ciphers can be used to generate the CA and certificates and this is outside the scope of this documentation, we highly recommend picking secure ciphers.

3. The gateway vendor/user sends the public certificate(s) of the CA(s) used for signing the gateway credentials to the operator of {{% tts %}} deployment. The operator will configure these CAs in {{% tts %}}. See [Mutual TLS]({{< ref "/the-things-stack/host/aws/ecs/mutual-tls" >}}) as an example.

4. The user of the gateway registers it on a {{% tts %}} deployment. See instructions for in the [Adding Gateways]({{< ref "/gateways/concepts/adding-gateways" >}}) guide.

5. When this gateway make a CUPS `/update-info` request to {{% tts %}}, it presents the client certificate. {{% tts %}} verifies this certificate against the configured CA certificate. If the cryptographic check is successful, {{% tts %}} will check rest of the CUPS request and respond with the LNS credentials.

6. The gateway can now be connected to the LNS endpoint with the credentials sent by the CUPS server and if everything is successful, the gateway will connect to {{% tts %}}.

## Testing

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

5. This CA certificate `root-ca.crt` should be added in either the `common` or the target tenant folder where your gateway is registered in {{% tts %}}'s mTLS configuration. See the [Mutual TLS]({{< ref "/the-things-stack/host/aws/ecs/mutual-tls" >}}) page for reference.

Now restart the Gateway Server, Identity Server and Gateway Configuration Servers.

6. Connect using a client (e.g. `cURL`):

```bash
curl -v --cert <path>/gateway.crt --key <path>/gateway.key --cacert <path>/root-ca.crt https://<domain>:8987/update-info -d '{"router":"<EUI in ID6>"}'
```

7. If the request is successful, you will receive an HTTP `200` response code with a binary blob containing the LNS credentials.

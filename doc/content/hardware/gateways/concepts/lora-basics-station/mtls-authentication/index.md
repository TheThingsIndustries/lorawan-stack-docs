---
title: "mTLS Authentication"
description: ""
---

{{% tts %}} supports mutual TLS to authenticate {{% lbs %}} CUPS connections in selected deployments. This guide explains how gateway vendors/resellers and users can leverage

<!--more-->

To check if your deployment supports it, contact the operator.

## Procedure

1. The gateway vendor or user generates a CA (Certificate Authority) credentials in a secure environment. This usually consists of a public X.509 certificate and a private key.

- Usually, a Root CA and one or many intermediate CAs are generated. The Root CA is typically only used generate intermediate CAs and the intermediate CAs are used to sign client/leaf certificates.

2. The gateway vendor generates _unique TLS client certificates for each gateway_.

- The public certificate uniquely identifies the gateway. The Common Name (CN) field of the certificate should be **exactly** equal to the hex encoded EUI-64 (16 digits). The other fields are left to the user.
- The private key is the counterpart of the public certificate and is used for cryptographic operations while connecting to {{% tts %}}. Gateway vendors must ensure that this key is not easily accessible from the gateway. Anyone in possession of this key can impersonate the gateway.
- If using RSA to generate key pairs, we recommend a minimum size of 2048 bits.

3. The gateway vendor/user sends the CA certificate used for signing the gateway credentials to the operator of {{% tts %}} deployment. The operator will configure these CAs in {{% tts %}}.

4. The user of the gateway registers it on a {{% tts %}} deployment. See instructions for in the [Adding Gateways]({{< ref "/hardware/gateways/concepts/adding-gateways" >}}) guide.

5. When this gateway make a CUPS `/update-info` request to {{% tts %}}, it presents the client certificate. {{% tts %}} verifies this certificate against the configured CA certificate. If the cryptographic check is successful, {{% tts %}} will check rest of the CUPS request and respond with the LNS credentials.

6. The gateway can now be connected to the LNS endpoint with the credentials sent by the CUPS server and if everything is successful, the gateway will connect to {{% tts %}}.

## Testing

In order to test mTLS authentication, you can generate self-signed certificates.

{{< warning >}}
This is only for testing. Do not use this process in production.
{{</ warning >}}

1. Create a client gateway private key. Note you can choose any length of the key.

```bash
$ openssl genrsa -out gateway.key 2048
```

2. Create a Root CA:

```bash
$ openssl req -x509 -sha256 -days 1825 -newkey rsa:2048 -keyout root-ca.key -out root-ca.crt
```

3. Create a Certificate Signing Request for your client (Gateways):

{{< note >}}
The `CN` (Common Name) field must be the hex encoded EUI64 (16 digits). Example: `0123456789ABCDEF`
{{</ note >}}

```bash
$ openssl req -key gateway.key -new -out gateway.csr
```

4. Generate the client certificate. The following generates a gateway certificate signed by the Root CA valid for 365 days.

```bash
$ openssl X.509 -req -CA root-ca.crt -CAkey root-ca.key -in gateway.csr -out gateway.crt -days 365 -CAcreateserial -sha256 -days 365
```

5. Send this CA certificate `root-ca.crt` to the operator of the desired {{% tts %}} deployment.

6. Connect using a client (e.g. `cURL`):

```bash
curl -v --cert <path>/gateway.crt --key <path>/gateway.key --cacert <path>/root-ca.crt https://<domain>:8987/update-info -d '{"router":"<EUI in ID6>"}'
```

7. If the request is successful, you will receive an HTTP `200` response code with a binary blob containing the LNS credentials.

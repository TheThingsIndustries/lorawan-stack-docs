---
title: "Interoperability"
description: "LoRaWAN Backend Interfaces"
weight: 3
---

{{% tts %}} offers support for LoRaWAN Backend Interfaces. Interoperability can be turned on on JoinServer or IdentityServer, but not both at once, as they use the same port.

# JoinServer interoperability

## Architecture

Support for LoRaWAN Backend Interfaces requires certain extensions to the typical AWS ECS deployment architecture. First, we need to include CryptoServer in the deployment. This component is responsible for cryptographic operations in the context of Microchip secure element. Since it needs access to highly sensitive data, {{% tts %}} assumes that it's not deployed together with the rest of the stack, but in a separate account. In this way regular ops team can have access to the most part of the stack, while CryptoServer, together with highly sensitive Microchip secure element encryption keys, would be accessed only by selected members of your organization.

In order to provide this, {{% tts %}} uses VPC peering functionality of AWS.

Moreover, JoinServer needs to validate the client certificate when establishing TLS connections. This means that, while the rest of the stack has its TLS terminated by the AWS Load Balancer, JoinServer needs access to the TLS certificate of your server and of connecting clients.

## Deployment

### Step 1: deploy {{% tts %}}

Deploy {{% tts %}} normally. For the `PeerRequesterAccountId` parameter in `1-1-vpc`, use the ID of the account where you want to deploy CryptoServer. Do not enable interop and assume that {{% tts %}} doesn't connect to the CryptoServer.

### Step 2: add certificates

For the server certificate, use the certbot task. It will request a certificate and put it into AWS Secrets Manager. If you do not want to use the certbot task, but prefer to provide your own certificate, look up the relevant secret created in template `4-1-secrets` and substitute the dummy value. Certificates are expected to be in PEM format.

Client certificates are stored in the interop config bucket, created in template `2-4b-routing-s3`. In this bucket you need to place a file `config.yml`, which contains a dictionary `NetID -> filename_with_certificate_in_pem_format`. Example configuration:

```
000000: ca-000000.pem
000009: ca-000009.pem
```

### Step 3: deploy the CryptoServer

Deploy the template `200-1-crypto`. This template is designed to be deployed in a separate account, but same region. No other templates are needed for CryptoServer, this is a self-contained deployment.

- the tuple `{NetworkName}.${Environment}.${Cluster}` should NOT be identical. We suggest using the same `NetworkName` and `Environment`, but different `Cluster`
- the `CidrBlock` parameter should NOT be identical
- the `ClusterSecretValue` parameter MUST be identical
- the `DefaultTenantID` parameter MUST be identical
- the `Domain` parameter MUST be identical
- skip the `ServicesDNSZone` parameter
- refer to outputs of the `1-1-vpc` template for the `Peer*` parameters

### Step 4: peer networks

Deploy the template `6-1-vpc-peering` where you had deployed the JoinServer to create the peering association. Refer to the CryptoServer stack for inputs of `6-1-vpc-peering`.

{{% tts %}} uses Route53 for service discovery. In order to enable the JoinServer <-> CryptoServer service discovery, you need to associate the `${NetworkName}.${Environment}.${Cluster}.cluster.local` hosted zone of JoinServer with the VPC of CryptoServer and vice versa. For details on how to do it, refer to the [AWS Documentation](https://aws.amazon.com/premiumsupport/knowledge-center/route53-private-hosted-zone/).

### Step 5: activate the connection

Go through the JoinServer stack and turn on switches for Interop and CryptoServer connection. The `CryptoServerDNSName` parameter in template `5-4-services` is expected to be in format `cs.${NetworkName}.${Environment}.${Cluster}.cluster.local`.

Go through the CryptoServer template and turn on switches for JoinServer connection. The `ServicesDNSZone` parameter is expected to be in format `${NetworkName}.${Environment}.${Cluster}.cluster.local`.

### Step 6: encrypt key values for secure element parts

Go to the CryptoServer stack and encrypt secure element parts keys using the AWS KMS key from stack output `MicrochipPartsTableKey` and put them into the DynamoDB table from output `MicrochipPartsTable`. You can do it in the following way:
1. Create a file `input.json` with the following contents: `{"KeyId": "<MicrochipPartsTableKey>", "Plaintext": "<SecureElementKeyValueInBase64>"}`
2. `aws kms encrypt --cli-input-json file://input.json`. It is important to use the input json file so that secret value doesn't stay in history
3. Change the contents of `input.json` to `{"TableName": "<MicrochipPartsTableKey>", "Item": {"part_number": {"S": "<PartNumber>"}, "psk_root_keys_encrypted": {"S": "<CiphertextBlobFromKMSEncrypt>"}}}`
4. `aws dynamodb put-item --cli-input-json file://input.json`
5. `rm input.json`

At this point interoperability should be working. It might be required to restart the containers before they pick up new configuration.

# IdentityServer interoperability

IdentityServer interoperability doesn't need CryptoServer, therefore you don't need to set up two accounts and peer networks. Still, you need to set up TLS certificates in a similar fasion.

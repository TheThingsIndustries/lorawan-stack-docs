---
title: "Interoperability"
description: "LoRaWAN Backend Interfaces"
weight: 3
---

{{% tts %}} exposes the Join Server API defined by LoRaWAN Backend Interfaces 1.0 and 1.1. This is used for interoperability between LoRaWAN networks.

<!--more-->

The functionality can be exposed either by the Join Server or by the Identity Server, but not both at once. Join Server is capable of handling the join flow, that is `HomeNSReq`, `JoinReq` and `AppSKeyReq` requests. Identity Server can only answer to `HomeNSReq`. Typically, you should enable interoperability if you want to use device activations through Packet Broker. You can use Join Server interoperability if you want to expose the entire join flow to other LoRaWAN network servers.

# TLS

Normally, AWS Load Balancer terminates TLS, and then forwards unencrypted packets to {{% tts %}} via AWS internal network. This assures that all clients connecting to {{% tts %}} are certain of its authenticity.

This doesn't work the other way around though, as AWS Load Balancer doesn't verify client certificates. It is up to you where you choose to terminate TLS:

## TLS termination by the AWS Load Balancer

When parameters `InteropEnabled`, `InteropEnabledIS` and `InteropEnabledJS` in templates `3-2-load-balancer`, `5-3a-ecs-is-service` and `5-4-ecs-services` are set to `server-only-authentication`, TLS is terminated by the AWS Load Balancer, just like any other connection. This is only suitable for use cases where you don't need to verify client authenticity.

## TLS termination by {{% tts %}}

When parameters `InteropEnabled`, `InteropEnabledIS` and `InteropEnabledJS` in templates `3-2-load-balancer`, `5-3a-ecs-is-service` and `5-4-ecs-services` are set to `mutual-authentication`, TLS-encrypted connections are forwarded to {{% tts %}}, which terminates the encryption. This allows the stack to verify client certificates stored in the S3 bucket.

# Join Server interoperability

## Deployment

In this setup, you are assumed to use two accounts: one account for {{% tts %}}, and another one only for the Crypto Server.

### Step 1: deploy {{% tts %}}

Deploy {{% tts %}} normally. For the `PeerRequesterAccountId` parameter in `1-1-vpc`, use the ID of the account where you want to deploy Crypto Server. Do not enable interop and assume that {{% tts %}} doesn't connect to the Crypto Server.

### Step 2: add certificates

For the server certificate:
- if you use `server-only-authentication`, AWS Load Balancer will use existing certificate
- if you use `mutual-authentication`, then use the certbot task to request a certificate. It will be put into AWS Secrets Manager, and then fetched by {{% tts %}}

If you're using `mutual-authentication`, you need to populate client certificates stored in the interop config bucket, created in template `2-4b-routing-s3`. In this bucket you need to place a file `config.yml`, which contains a map `<net-id>: <ca.pem>`. Example configuration:

```yaml
000000: ca-000000.pem
000009: ca-000009.pem
```

### Step 3: deploy the Crypto Server

Deploy the template `200-1-crypto`. This template is designed to be deployed in a separate account, but same region. No other templates are needed for Crypto Server, this is a self-contained deployment.

- the tuple `${Cluster}.${Environment}.${NetworkName}` should NOT be identical. We suggest using the same `NetworkName` and `Environment`, but different `Cluster`
- the `CidrBlock` parameter should NOT be identical
- the `ClusterSecretValue` parameter MUST be identical
- the `DefaultTenantID` parameter MUST be identical
- the `Domain` parameter MUST be identical
- skip the `ServicesDNSZone` parameter
- refer to outputs of the `1-1-vpc` template for the `Peer*` parameters

### Step 4: peer networks

Deploy the template `6-1-vpc-peering` where you had deployed the Join Server to create the peering association. Refer to the Crypto Server stack for inputs of `6-1-vpc-peering`.

{{% tts %}} uses Route53 for service discovery. In order to enable the Join Server <-> Crypto Server service discovery, you need to associate the `${Cluster}.${Environment}.${NetworkName}.cluster.local` hosted zone of Join Server with the VPC of Crypto Server and vice versa. For details on how to do it, refer to the [AWS Documentation](https://aws.amazon.com/premiumsupport/knowledge-center/route53-private-hosted-zone/).

### Step 5: activate the connection

Go through the Join Server stack and turn on switches for Interop:
- `3-2-load-balancer`: set `InteropEnabled` to value other than `disabled`
- `5-3a-ecs-is-service`: since you're setting up Join Server, not Identity Server interoperability, leave `InteropEnabledIS` as `disabled`
- `5-4-ecs-services`:
    - set `InteropEnabledJS` to the same value as previously `InteropEnabled`
    - set `CryptoServerDNSName` to `cs.${Cluster}.${Environment}.${NetworkName}.cluster.local`, where values for tuple `${Cluster}.${Environment}.${NetworkName}` come from the Crypto Server deployment
    - set `InteropPacketBrokerEnabled` to a value relevant for your use case
    - set `InteropPacketBrokerTokenIssuer` to a value relevant for your use case

Set the `ServicesDNSZone` parameter in the Crypto Server deployment. The value is expected to be in format `${Cluster}.${Environment}.${NetworkName}.cluster.local`, where where values for the tuple `${Cluster}.${Environment}.${NetworkName}` come from the Join Server deployment

### Step 6: encrypt key values for secure element parts

Go to the Crypto Server stack and encrypt secure element parts keys using the AWS KMS key from stack output `MicrochipPartsTableKey` and put them into the DynamoDB table from output `MicrochipPartsTable`. You can do it in the following way:
1. Create a file `input.json` with the following contents: `{"KeyId": "<MicrochipPartsTableKey>", "Plaintext": "<SecureElementKeyValueInBase64>"}`
2. `aws kms encrypt --cli-input-json file://input.json`. It is important to use the input json file so that secret value doesn't stay in history
3. Change the contents of `input.json` to `{"TableName": "<MicrochipPartsTableKey>", "Item": {"part_number": {"S": "<PartNumber>"}, "psk_root_keys_encrypted": {"S": "<CiphertextBlobFromKMSEncrypt>"}}}`
4. `aws dynamodb put-item --cli-input-json file://input.json`
5. `rm input.json`

At this point interoperability should be working. It might be required to restart the containers before they pick up new configuration.

# Identity Server interoperability

As opposed to Join Server interoperability, this setup doesn't expect you to use two accounts.

### Step 1: deploy {{% tts %}}

Deploy {{% tts %}} normally.

### Step 2: add certificates

For the server certificate:
- if you use `server-only-authentication`, AWS Load Balancer will use existing certificate
- if you use `mutual-authentication`, then use the certbot task to request a certificate. It will be put into AWS Secrets Manager, and then fetched by {{% tts %}}

If you're using `mutual-authentication`, you need to populate client certificates stored in the interop config bucket, created in template `2-4b-routing-s3`. In this bucket you need to place a file `config.yml`, which contains a map `<net-id>: <ca.pem>`. Example configuration:

```yaml
000000: ca-000000.pem
000009: ca-000009.pem
```

### Step 3: activate the connection

Go through the stack and turn on switches for Interop:
- `3-2-load-balancer`: set `InteropEnabled` to value other than `disabled`
- `5-3a-ecs-is-service`: set `InteropEnabledIS` to the same value as previously `InteropEnabled`
- `5-4-ecs-services`:
    - leave `InteropEnabledJS` as `disabled`, since you're setting up Identity Server, not Join Server interoperability
    - leave `CryptoServerDNSName` empty, as Crypto Server is not used by the Identity Server
    - set `InteropPacketBrokerEnabled` to a value relevant for your use case
    - set `InteropPacketBrokerTokenIssuer` to a value relevant for your use case

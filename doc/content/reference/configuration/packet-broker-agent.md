---
title: "Packet Broker Agent Options"
description: ""
---

## Registration Options

- `pba.registration.name`: Friendly name to register with Packet Broker
- `pba.registration.administrative-contact.email`: Email address of the administrative contact person or mailing group
- `pba.registration.technical-contact.email`: Email address of the technical contact person or mailing group
- `pba.registration.listed`: Indicates whether the Home Network is listed in the Packet Broker catalog. Set this to `false` to connect to Packet Broker but to stay private to other networks

## Connection Options

- `pba.iam-address`: Address of Packet Broker IAM
- `pba.control-plane-address`: Address of Packet Broker Control Plane
- `pba.data-plane-address`: Address of Packet Broker Data Plane. See [Packet Broker Clients](https://github.com/packetbroker/pb) for available cluster addresses
- `pba.insecure`: Connect without using TLS (only for test environments)
- `pba.net-id`: LoRa Alliance NetID
- `pba.tenant-id`: Tenant ID within the NetID
- `pba.cluster-id`: Cluster ID uniquely identifying this cluster within a NetID and tenant. The cluster ID is used for shared subscriptions (i.e. splitting traffic over multiple Packet Broker Agents) and as Forwarder ID to route downlink traffic to the right cluster
- `pba.home-network-cluster-id`: Home Network Cluster ID, if different from the Cluster ID. Leave empty to fallback to `cluster-id`

Gateway identity, status, antennas, frequency plan, location, Tx and Rx rates can be reported to Packet Broker Mapper. Mapping is enabled when the Forwarder role is enabled.

- `pba.mapper-address`: Address of Packet Broker Mapper

## Authentication Options

- `pba.authentication-mode`: Set this to `oauth2`
- `pba.oauth2.client-id`: Packet Broker API key ID, used to fetch an OAuth 2.0 token via client credentials
- `pba.oauth2.client-secret`: Corresponding secret API key
- `pba.oauth2.token-url`: URL to fetch the OAuth 2.0 token

## Forwarder Options

- `pba.forwarder.enable`: Enable Forwarder role
- `pba.forwarder.worker-pool.limit`: Limit of active workers concurrently forwarding uplink messages and processing downlink message
- `pba.forwarder.token-key`: AES 128 or 256-bit key for encrypting uplink token
- `pba.forwarder.include-gateway-eui`: Indicates whether to include the gateway EUI in forwarded uplink messages
- `pba.forwarder.include-gateway-id`: Indicates whether to include the gateway ID (plain or hashed) in forwarded uplink messages
- `pba.forwarder.hash-gateway-id`: Indicates whether the forwarded gateway ID should be hashed. This setting is ineffective if `include-gateway-id` is `false`
- `pba.forwarder.gateway-online-ttl`: TTL of online status reported to Packet Broker

## Home Network Options

- `pba.home-network.enable`: Enable Home Network role
- `pba.home-network.dev-addr-prefixes`: DevAddr prefixes to subscribe to
- `pba.home-network.worker-pool.limit`: Limit of active workers concurrently processing uplink messages and publishing downlink messages
- `pba.home-network.include-hops`: Include hops in the metadata. This option is disabled by default

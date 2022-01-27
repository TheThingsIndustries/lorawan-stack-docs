---
title: "Network Server Options"
description: ""
---

## General Options

- `ns.dev-addr-prefixes`: Device address prefixes of this Network Server
- `ns.net-id`: NetID of this Network Server
- `ns.cluster-id`: ClusterID of this Network Server. This is purely informative and is added as metadata to messages forwarded to the Application Server
- `ns.device-kek-label`: Label of KEK used to encrypt device keys at rest

## Uplink Options

- `ns.cooldown-window`: Time window starting right after deduplication window, during which, duplicate messages are discarded
- `ns.deduplication-window`: Time window during which, duplicate messages are collected for metadata
- `ns.application-uplink-queue.buffer-size`: Application uplink queue buffer size (default 1000)
- `ns.application-uplink-queue.num-consumers`: Number of consumers for the application uplink queue (default 1)

## Downlink Options

The `ns.downlink-priorities` options configure priorities Network Server assigns downlinks when scheduling them on Gateway Server. In case when several downlinks are available for scheduling, Gateway Server will schedule higher priority downlink first.

- `ns.downlink-priorities.join-accept`: Priority for join-accept messages (lowest, low, below_normal, normal, above_normal, high, highest)
- `ns.downlink-priorities.mac-commands`: Priority for messages carrying MAC commands (lowest, low, below_normal, normal, above_normal, high, highest)
- `ns.downlink-priorities.max-application-downlink`: Maximum priority for application downlink messages (lowest, low, below_normal, normal, above_normal, high, highest)

Network Server downlink queue capacity is configurable. 

- `ns.downlink-queue-capacity`: Maximum downlink queue size per session (default 10000)

Network Server maintains an internal downlink task queue, where tasks have an execution time associated with them.

- `ns.downlink-task-queue.num-consumers`: Number of consumers for the downlink task queue (default 1)

## MAC Options

The `ns.default-mac-settings` options configure default device MAC configuration parameters Network Server uses if not configured in device's MAC settings.

- `ns.default-mac-settings.adr-margin`: The default margin Network Server should add in ADR requests
- `ns.default-mac-settings.class-b-timeout`: Deadline for a device in class B mode to respond to requests from the Network Server
- `ns.default-mac-settings.class-c-timeout`: Deadline for a device in class C mode to respond to requests from the Network Server
- `ns.default-mac-settings.desired-adr-ack-delay-exponent`: The desired ADR ACK delay exponent (`ADR_ACK_DELAY_<X>`). Not set by default
- `ns.default-mac-settings.desired-adr-ack-limit-exponent`: The desired ADR ACK limit exponent (`ADR_ACK_LIMIT_<X>`). Not set by default
- `ns.default-mac-settings.desired-max-duty-cycle`: The desired maximum Duty Cycle, (`DUTY_CYCLE_<X>`). Not set by default
- `ns.default-mac-settings.desired-rx1-delay`: Desired Rx1Delay value Network Server should use (`RX_DELAY_<X>`)
- `ns.default-mac-settings.status-count-periodicity`: Number of uplink messages after which a DevStatusReq MACCommand shall be sent by Network Server
- `ns.default-mac-settings.status-time-periodicity`: The interval after which a DevStatusReq MACCommand shall be sent by Network Server

## Interoperability

The `ns.interop` options configure how Network Server performs interoperability with other LoRaWAN Backend Interfaces-compliant servers.

- `ns.interop.config-source`: Source of the interoperability client configuration (directory, url, blob)
- `ns.interop.blob.bucket`: Blob bucket, which contains interoperability client configuration
- `ns.interop.blob.path`: Blob path, which contains interoperability client configuration
- `ns.interop.directory`: OS filesystem directory, which contains interoperability client configuration
- `ns.interop.url`: URL, which contains interoperability client configuration

## Peering

{{< distributions "Cloud" "Enterprise" >}} In multi-tenant deployments, the Network Server maintains strict isolation of traffic for different tenants. When it also has peering configured, Packet Broker is typically configured with the correct tenant ID for the DevAddr ranges of each tenant. It is also possible to accept traffic from Packet Broker without a tenant ID, and let the Network Server match devices without strict tenant isolation.

- `ns.switch-peering-tenant-context` {{< distributions "Cloud" "Enterprise" >}}: Switch tenant context in peering

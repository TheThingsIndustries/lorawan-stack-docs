---
title: Packet Broker
description: ""
summary: Exchange traffic with other LoRaWAN networks via peering to share coverage and improve the overall network performance.
aliases:
  - "/integrations/peering"
  - "/reference/peering"
---

## What is it?

Packet Broker can be used to exchange traffic with other LoRaWAN networks to share coverage and improve the overall network performance.

![Overview](overview.png)

Packet Broker supports class A and C downlink as well as device activations (over-the-air activation).

## Who is it for?

Exchanging traffic can be beneficial for all public and private LoRaWAN network operators: it can improve overall network performance by increasing resilience against gateway failures, expanding coverage area and optimizing end device battery life by communicating with the nearest gateways.

### Typical Use Cases

1. Forward uplink traffic received by your gateways from devices to their home network. The home network may also use your gateways to transmit downlink traffic to their devices. You can also put commercial agreements in place to monetize coverage.
2. Receive uplink traffic for your devices from other networks, and use those other networks to transmit downlink traffic to your end devices.

## How Does it Work?

Packet Broker distinguishes two types of networks: Forwarders and Home Networks. Forwarders are networks with gateways: they simply forward uplink messages from the gateways to Packet Broker, and downlink messages from Packet Broker back to the gateways. Home Networks are networks with end devices.

Packet Broker routes uplink messages from Forwarders to Home Networks based on the 32-bit `DevAddr` in the uplink message. The first part of the `DevAddr` is the `NetID`, a globally unique identifier of a LoRaWAN network. Packet Broker uses the `NetID` to lookup the Home Network. Besides identifying Home Networks by `NetID`, Packet Broker also supports tenants. Tenants use a `DevAddr` block of a Home Network host.

> For example, a message with `DevAddr` `27ABCD12` has `NetID` `000013` (owned by The Things Network Foundation). The `DevAddr` block `27ABCD00` to `27ABCDFF` might be assigned to a private network `tti`. That `DevAddr` block is noted as `27ABCD00/24`: 24 significant bits. Packet Broker identifies the Home Network then as `NetID` `000013` and tenant ID `tti`.

Your {{% tts %}} deployment can be a Forwarder, a Home Network or both. This means that you can make your physical gateway infrastructure available to other networks without having end devices. Likewise, you can deploy end devices as a Home Network, without physical gateway infrastructure.

### Routing Policies

Routing policies define rules that Forwarders configure for routing messages to Home Networks. Routing policies are peer-to-peer: a Forwarder can define policies with each individual Home Network. Forwarders can also define an optional default routing policy that is used as fallback when no specific policy is defined.

Forwarders can configure the following things in a routing policy:

Type | Uplink | Downlink | Description
--- | :---: | :---: | ---
Join | O | O | Join-request (uplink) and join-accept (downlink) messages
MAC payload | O | O | Data messages with `FPort` `0` (for network layer instructions)
Application payload | O | O | Data messages with `FPort` `1` or higher (for application layer payload)
Signal quality | O | | RSSI and SNR information
Localization | O | | Gateway locations, timestamps and signal quality

>For instance, a Forwarder may wish to configure three policies:
>
>1. With `NetID` `000013` and tenant ID `ttn` (The Things Network community network): all message types. That is, join-requests and join-accepts, uplink and downlink MAC and application payload messages, and signal quality and localization information.
>2. With `NetID` `000013` and tenant ID `company-a`: only join-requests, join-accepts and uplink and downlink MAC and application payload messages. That is, no metadata.
>3. A default policy (for all other networks): only uplink MAC and application payload messages. That is, do not forward join-requests and join-accepts, and do not forward metadata.

### LoRaWAN Roaming vs Packet Broker

[Packet Broker](https://www.packetbroker.org) is a global backbone for LoRaWAN traffic. It is designed to securely exchange traffic between LoRaWAN networks.

Packet Broker supports LoRaWAN passive roaming. However, Packet Broker goes beyond that:

- Packet Broker allows for individual packet selection: networks do not get charged for traffic they did not consume. 
- Packet Broker separates traffic routing from billing and clearing: networks are free to put commercial agreements in place to settle balances. 
- Packet Broker separates payload from metadata: networks only get charged for the value they need. 
- {{% tts %}} has native support for Packet Broker and can access the global coverage provided by The Things Network public community network.

The Things Network or {{% tts %}} Cloud is already connected to Packet Broker. {{< distributions "Cloud" "Dedicated Cloud" "The Things Network" >}}

When using {{% tts %}} Enterprise of {{% tts %}} Open Source, learn to [Connect {{% tts %}} to Packet Broker]({{< relref "connect" >}}). {{< distributions "Enterprise" "Open Source" >}}

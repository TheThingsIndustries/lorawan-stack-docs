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

## Who is it for?

Exchanging traffic can be beneficial for all public and private LoRaWAN network operators: it can improve overall network performance by increasing resilience against gateway failures, expanding coverage area and optimizing end device battery life by communicating with the nearest gateways.

### Typical use cases

1. Forward uplink traffic received by your gateways from devices to their home network. The home network may also use your gateways to transmit downlink traffic to their devices. You can also put commercial agreements in place to monetize coverage.
2. Receive uplink traffic for your devices from other networks, and use those other networks to transmit downlink traffic to your end devices.

## How does it work?

In Packet Broker, networks can play the Forwarder and the Home Network role. Forwarder networks have physical gateway infrastructure and Home Networks have end devices. Most LoRaWAN networks typically have gateways and end devices, so they can be configured to play both roles. You can also have networks with only gateway infrastructure, configured as Forwarder only, or only with end devices, configured as Home Network only.

As a Forwarder, your network offloads traffic that has been received by your gateways but that is not intended for your network. The offloading goes to Packet Broker, a LoRaWAN traffic exchange (also known as LoRaWAN roaming hub).

### Packet Broker

[Packet Broker](https://www.packetbroker.org) is a global backbone for LoRaWAN traffic. It is designed to securely exchange traffic between LoRaWAN networks. 

- Packet Broker allows for individual packet selection: networks do not get charged for traffic they did not consume. 
- Packet Broker separates traffic routing from billing and clearing: networks are free to put commercial agreements in place to settle balances. 
- Packet Broker separates payload from metadata: networks only get charged for the value they need. 
- {{% tts %}} has native support for Packet Broker and can access the global coverage provided by The Things Network public community network.

Your network authenticates with its NetID and (optionally) a tenant ID to Packet Broker. NetIDs are issued by the LoRa Alliance. To obtain a NetID for your network, [become a member of the LoRa Alliance](https://lora-alliance.org/become-a-member). If you don't have your own NetID, you can become a tenant of The Things Network's NetID.

Packet Broker routes traffic based on device addresses (DevAddr) which are issued from NetIDs (the most significant bits of a 32-bit DevAddr refers to the NetID). If your network is a tenant of a host NetID, the host can configure one or more DevAddr blocks that point to your network.

The Packet Broker Agent of {{% tts %}} connects as Forwarder and/or Home Network to Packet Broker. Learn to [Configure]({{< relref "enable" >}}) Packet Broker on your LoRaWAN network.

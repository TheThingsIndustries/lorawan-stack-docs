# Packet Forwarders

> This reference describes support for various Packet Forwarders in The Things Stack.

Source: https://www.thethingsindustries.com/docs/hardware/gateways/concepts/packet-forwarder/


This reference describes support for various Packet Forwarders in The Things Stack.

The Things Stack supports [The Things Industries Gateway Protocol](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/ttigw/) and [LoRa Basics™ Station](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/lora-basics-station/). There is also legacy support for the [Semtech UDP Packet Forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/udp/), but it will be removed in the future.

LoRa Basics™ Station is the preferred way of connecting gateways to The Things Stack. The advantages of LoRa Basics™ Station over the legacy UDP Packet Forwarder are centralized update and configuration management for gateway fleets, TLS and token-based authentication, centralized channel plan management, and no dependency on local timekeeping.

The following packet forwarders are **not** supported:

- [The Things Network Packet Forwarder](https://github.com/TheThingsNetwork/packet_forwarder)
- [Kersing Packet Forwarder](https://github.com/kersing/packet_forwarder)
- [Chirpstack Gateway Bridge](https://www.chirpstack.io/gateway-bridge/)


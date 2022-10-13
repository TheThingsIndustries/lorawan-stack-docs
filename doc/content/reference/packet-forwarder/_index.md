---
title: "Packet Forwarders"
---

This reference describes support for various Packet Forwarders in {{% tts %}}.

<!--more-->

{{% tts %}} supports [{{% lbs %}}]({{< ref "/gateways/concepts/lora-basics-station" >}}). There is also legacy support for the [{{% udp-pf %}}]({{< ref "/gateways/udp" >}}), but it will be removed in the future.

{{% lbs %}} is the preferred way of connecting gateways to {{% tts %}}. The advantages of {{% lbs %}} over the legacy UDP Packet Forwarder are centralized update and configuration management for gateway fleets, TLS and token-based authentication, centralized channel plan management, and no dependency on local timekeeping.

The following packet forwarders are **not** supported:

- [The Things Network Packet Forwarder](https://github.com/TheThingsNetwork/packet_forwarder)
- [Kersing Packet Forwarder](https://github.com/kersing/packet_forwarder)
- [Chirpstack Gateway Bridge](https://www.chirpstack.io/gateway-bridge/)


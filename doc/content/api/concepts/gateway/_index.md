---
title: "Gateway specific APIs"
description: ""
weight: 5
---

{{% tts %}} supports multiple gateway protocols which communicate the respective APIs.

<!--more-->

See the [port allocations]({{< ref "/the-things-stack/concepts/networking/#port-allocations" >}}) guide to check which protocol is supported on which port.

#### LoRa Basics™ Station

{{% tts %}} provides {{% lbs %}} [LNS]({{< ref "/gateways/concepts/lora-basics-station/#lorawan-network-server-lns" >}}) and [CUPS]({{< ref "/gateways/concepts/lora-basics-station/#configuration-and-update-server-cups" >}}) end points for gateways to connect.

These protocols follow the {{% lbs %}} [reference specification](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-gateways/?url=cupsproto.html).

{{< note "{{% lbs %}} CUPS API is usually exposed on the HTTP(s) port(s)." />}}

Implementation specific details for clients using the {{% lbs %}} LNS protocol to communicate with {{% tts %}} is documented in the [LoRa Basics Station Implementation Guide]({{< ref "/api/concepts/gateway/lbs/" >}}).

#### MQTT v2

The MQTT v2 gateway APIs follows the [multi packet forwarder](https://github.com/kersing/packet_forwarder) reference.

Check the [protocol reference](https://github.com/kersing/packet_forwarder/blob/master/PROTOCOL.TXT) for more details.

#### MQTT v3

The MQTT v3 protocol uses the {{% tts %}} v3 messages definitions.

Gateways can connect using the username `{gateway-id}@{tenant-id}` and an API key as the password. Check how to [register a gateway and create an API key]({{< ref "http://localhost:1313/gateways/concepts/adding-gateways/">}}).

<div class="fixed-table table-api">

| Topic                                | Message                                           |
| ------------------------------------ | ------------------------------------------------- |
| `v3/{gateway-id}@{tenant-id}/up`     | Publish an uplink message to the network          |
| `v3/{gateway-id}@{tenant-id}/status` | Publish a status message to the network           |
| `v3/{gateway-id}@{tenant-id}/down`   | Subscribe to downlink messages                    |
| `v3/{gateway-id}@{tenant-id}/ack`    | Publish an acknowledgement on emitting a downlink |

</div>

#### Tabs Hubs

The Tabs Hubs APIs are tailored to connect legacy [Tabs Hub gateways](https://pixel-networks.com/shop/tabs-hub-tbhb100-356) that are not compatible with the official LoRa Basics Station spec. The APIs here are undocumented and is not intended for other use.

#### Legacy UDP

The UDP APIs support the [Legacy Semtech UDP packet forwarder](https://github.com/Lora-net/packet_forwarder/blob/master/PROTOCOL.TXT) specifications.

{{< warning >}} This protocol and the code are very out-dated and unmaintained by the upstream. Please use {{% lbs %}}.{{</ warning >}}

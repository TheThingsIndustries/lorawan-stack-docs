---
title: "The Things Network"
description: ""
distributions: "The Things Network"
---

{{< figure src="logo_TTN.svg" class="float plain" width="150px" >}}

The Things Network is a global collaborative Internet of Things ecosystem that creates networks, devices and solutions using LoRaWAN.

The Things Network runs {{% tts %}} Community Edition, which is a crowdsourced, open and decentralized LoRaWAN network. This network is a great way to get started testing devices, applications, and integrations, and get familiar with LoRaWAN.

<!--more-->

[Login or create an account](https://console.cloud.thethings.network/) to get started with The Things Network and start using {{% tts %}} Console.

Once you have an account, get started by following instructions for adding [Devices]({{< ref "/devices" >}}), [Gateways]({{< ref "/gateways" >}}), and [Integrations]({{< ref "/integrations" >}}).

For more information about The Things Network and LoRaWAN, see [The Things Network Documentation](https://thethingsnetwork.org/docs)

For commercial solutions, we strongly recommend using an SLA-backed network provided by The Things Industries. Learn more about the [enterprise offerings](https://thethingsindustries.com/deployment/) of [The Things Industries](https://thethingsindustries.com/).

## Clusters

The Things Stack Community Edition (run by The Things Network) is a multi-cluster deployment. This means that while your account information is stored in a central location, you can connect your gateways to a closer cluster, and route all your IoT traffic in that cluster. This can significantly reduce latency because your traffic would not have to cross half the planet.

{{% tts %}} Community Edition currently has the following clusters:

| **Cluster ID** | **Name**        | **Location**      |
| -------------- | --------------- | ---------------   |
| `au1`          | Australia 1     | Sydney, Australia |
| `eu1`          | Europe 1        | Ireland           |
| `nam1`         | North America 1 | California, USA   |

For links to these clusters, see the [Addresses section]({{< relref "addresses" >}}).

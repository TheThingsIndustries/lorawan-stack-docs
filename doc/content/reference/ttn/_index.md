---
title: "The Things Network"
description: ""
distributions: "Sandbox"
aliases: [/getting-started/ttn]
---

{{< figure src="logo_TTN.svg" class="float plain" width="150px" >}}

[The Things Network](https://www.thethingsnetwork.org/) is a global collaborative Internet of Things ecosystem that creates networks, devices and solutions using LoRaWAN.

The Things Network runs {{% ttss %}}, which is a crowdsourced, open and decentralized LoRaWAN® network. This network is a great way to get started testing devices, applications, and integrations, and get familiar with LoRaWAN.

<!--more-->

[Login or create an account](https://console.cloud.thethings.network/) to get started with The Things Network and start using {{% tts %}} Console.

Once you have an account, get started by following instructions for adding [Devices]({{< ref "/devices" >}}), [Gateways]({{< ref "/gateways" >}}), and [Integrations]({{< ref "/integrations" >}}).

For more information about The Things Network and LoRaWAN, see [The Things Network Documentation](https://thethingsnetwork.org/docs)

For commercial solutions, we strongly recommend using an SLA-backed network provided by The Things Industries. Learn more about the [enterprise offerings](https://thethingsindustries.com/deployment/) of [The Things Industries](https://thethingsindustries.com/).

## Clusters

{{% ttss %}} (run by The Things Industries) is a multi-cluster deployment. This means that while your account information is stored in a central location, you can connect your gateways to a closer cluster, and route all your IoT traffic in that cluster. This can significantly reduce latency because your traffic would not have to cross half the planet.

{{% ttss %}} currently has the following clusters:

| **Cluster ID** | **Name**        | **Location**      |
| -------------- | --------------- | ----------------- |
| `au1`          | Australia 1     | Sydney, Australia |
| `eu1`          | Europe 1        | Ireland           |
| `nam1`         | North America 1 | California, USA   |

If you navigate to [this link](https://console.cloud.thethings.network), you can find out which {{% ttss %}} clusters are recommended for your deployment based on the location of your devices and immediately log into its Console.

{{< figure src="cluster-location.png" alt="Recommended clusters" >}}

See the [Addresses]({{< ref "/reference/ttn/addresses" >}}) for details about cluster, Console, API endpoints and other {{% ttss %}} addresses.

---
title: "The Things Stack Cloud"
description: "Concepts specific to The Things Stack Cloud"
menu:
  main:
    weight: 2
aliases:
  [
    /guides/cloud-hosted/cloud-hosted,
    /getting-started/cloud-hosted,
    /the-things-stack/cloud,
  ]
---

{{% tts %}} Cloud is a fully managed software as a service (SaaS) solution offered by The Things Industries. This is an out-of-the-box simple, scalable LoRaWAN network server solution, 100% managed and maintained by us, recommended for most users building LoRaWAN® solutions.

<!--more-->

{{% tts %}} Cloud includes a [service level agreement](https://www.thethingsindustries.com/document/sla/) which offers an uptime commitment so that you can be assured of the availability of the service.
We offer multiple plans based on your needs including a [free discovery tier](https://www.thethingsindustries.com/stack/plans/) for users to evaluate the product. Signing up to {{% tts %}} Cloud is very easy and within a few minutes, you can [get started]({{< ref "/getting-started/2-prerequisites/" >}}) with a production-grade LoRaWAN network.

#### Multi-tenancy

{{% tts %}} Cloud is a **multi-tenant** environment. This means that while each customer has their own isolated network, the underlying infrastructure is shared with other customers.

#### Clusters

{{% tts %}} Cloud is a multi-cluster deployment. This means that while your account, login and entity information is stored in a central location, you can connect your gateways to a cluster closer to the physical location of your gateways, and route all your IoT traffic in that cluster. Thi significantly reduces latency and improves the performance of your gateways.

{{% tts %}} Cloud currently has the following clusters:

| **Cluster ID** | **Name**        | **Location**      |
| -------------- | --------------- | ----------------- |
| `au1`          | Australia 1     | Sydney, Australia |
| `as1`          | Asia 1          | Tokyo, Japan      |
| `eu1`          | Europe 1        | Dublin, Ireland   |
| `eu2`          | Europe 2        | London, UK        |
| `nam1`         | North America 1 | California, USA   |

You can head over to our cluster picker at [console.cloud.thethings.industries](https://console.cloud.thethings.industries) and find out which {{% tts %}} Cloud clusters are recommended for your deployment based on the location of your devices.

{{< figure src="recommended-locations.png" alt="Recommended clusters" >}}

#### Status Page

Visit [The Things Industries services status page](https://status.thethings.industries/) to check the current status of {{% tts %}} Cloud services. Be up do date with the recent {{% tts %}} Cloud upgrades, scheduled maintenances and reported incidents.

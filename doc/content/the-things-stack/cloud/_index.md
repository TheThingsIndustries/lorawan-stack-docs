---
title: "The Things Stack Cloud"
description: "This section contains concepts specific to The Things Stack Cloud"
weight: 1
aliases: [/guides/cloud-hosted/cloud-hosted, /getting-started/cloud-hosted]
---

The Things Industries offers {{% tts %}} as hosted software as a service (SaaS).

This guide explains how to manage and customize your cloud account.

<!--more-->

## Tenants on Shared Infrastructure

{{% tts %}} Cloud is a multi-tenant environment. This means that while each customer has their own isolated network, the underlying infrastructure is shared with other customers.

After starting your {{% tts %}} Cloud subscription, you will receive an email with the details of your tenant and details of your admin user.

## Clusters

{{% tts %}} Cloud is a multi-cluster deployment. This means that while your account information is stored in a central location, you can connect your gateways to a closer cluster, and route all your IoT traffic in that cluster. This can significantly reduce latency because your traffic would not have to cross half the planet.

{{% tts %}} Cloud currently has the following clusters:

| **Cluster ID** | **Name**        | **Location**      |
| -------------- | --------------- | ---------------   |
| `au1`          | Australia 1     | Sydney, Australia |
| `eu1`          | Europe 1        | Ireland           |
| `eu2`          | Europe 2        | UK           |
| `nam1`         | North America 1 | California, USA   |

If you navigate to [this link](https://console.cloud.thethings.industries), you can find out which {{% tts %}} Cloud clusters are recommended for your deployment based on the location of your devices and immediately log into its Console.

{{< figure src="cluster-location.png" alt="Recommended clusters" >}}

See the [Cloud Addresses]({{< ref "/the-things-stack/cloud/addresses" >}}) for details about cluster, Console, API endpoints and other {{% tts %}} Cloud addresses.

## Status Page

Visit [The Things Industries services status page](https://status.thethings.industries/) to check the current status of {{% tts %}} Cloud services. Be up do date with the recent {{% tts %}} Cloud upgrades, scheduled maintenances and reported incidents.


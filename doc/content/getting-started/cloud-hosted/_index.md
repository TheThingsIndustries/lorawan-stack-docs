---
title: "Cloud Hosted"
description: ""
weight: 50
aliases: [/guides/cloud-hosted/cloud-hosted]
---

The Things Industries offers The Things Enterprise Stack as hosted software as a service (SaaS). 

This guide explains what that means and shows how to work with The Things Industries Cloud Hosted.

<!--more-->

## Tenants on Shared Infrastructure

The Things Industries Cloud Hosted is a multi-tenant environment. This means that while each customer has their own isolated network, the underlying infrastructure is shared with other customers.

After starting your The Things Industries Cloud Hosted subscription, you will receive an email with the details of your tenant and details of your admin user.

## Clusters

The Things Industries Cloud Hosted is a multi-cluster deployment. This means that while your account information is stored in a central location, you can connect your gateways to a closer cluster, and route all your IoT traffic in that cluster. This can significantly reduce latency because your traffic would not have to cross half the planet.

The Things Industries Cloud Hosted currently has the following clusters:

| **Cluster ID** | **Name**        | **Location**      |
| -------------- | --------------- | ---------------   |
| `au1`          | Australia 1     | Sydney, Australia |
| `eu1`          | Europe 1        | Ireland           |
| `nam1`         | North America 1 | California, USA   |


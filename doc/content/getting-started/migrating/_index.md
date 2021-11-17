---
title: "Migrating to The Things Stack"
description: ""
aliases: "/getting-started/migrating-from-networks"
---

This guide documents the process of migrating end devices and gateways to {{% tts %}}.

<!--more-->

End devices from [{{% ttnv2 %}}]({{< relref "migrating-from-v2" >}}) or any other LoRaWAN network (like [Chirpstack]({{< relref "migrate-from-chirpstack" >}})) can be migrated to {{% tts %}}. Migrating devices can be done in two ways - manually via {{% tts %}} Console or by using `ttn-lw-migrate` tool, depending on how many devices and from which network you are migrating from.

In this section, we first consider migrating end devices, then migrating gateways.

---
title: "Migrating End Devices from V2"
description: ""
weight: 2
aliases: ["/getting-started/migrating-from-v2", "/getting-started/migrating-from-v2/configure-ttnctl", "/getting-started/migrating-from-v2/export-v2-devices", "/getting-started/migrating/migrating-from-v2"]
---

This section documents the process of migrating end devices from {{% ttnv2 %}} to {{% tts %}}.

<!--more-->

{{< warning >}} We highly recommend to always test the migration on a single end device or a small batch of end devices in order to make sure the migration process goes as expected. {{</ warning >}}

## Prerequisites

1. User account on The Things Network {{% ttnv2 %}} or The Things Industries {{% ttnv2 %}}.
2. End device(s) and gateway(s) connected to a {{% ttnv2 %}} network.
3. User account in {{% tts %}}.

{{< note >}} We **highly recommend** using {{% tts %}} version `3.12.0` or higher. Some of the features (like session migration) from this guide might not be available for prior versions. {{</ note >}}

## Add Application in {{% tts %}}

Since end devices are being created within applications, you first need to add a new application in {{% tts %}}.

{{< note >}} When adding an application in {{% tts %}}, the **Application ID** does not have to be the same as the one in {{% ttnv2 %}}. {{</ note >}}

> See [Adding Applications]({{< ref "/integrations/adding-applications" >}}) for detailed instructions.

## Add Payload Formatters and Integrations in {{% tts %}}

After creating an application, you need to add the associated elements like application-level payload formatters and integrations.

{{< note >}} The payload formatters can be uplink and downlink, and they are what was known in {{% ttnv2 %}} as coders and decoders. The format of payload coders and decoders is still supported in {{% tts %}}.

In {{% tts %}}, it is also possible to add payload formatters per end device, which override application payload formatters. However, before devices are migrated to {{% tts %}} it is only possible to add a payload formatter per application. {{</ note >}}

> See [Payload Formatters]({{< ref "/integrations/payload-formatters" >}}) guide for detailed instructions on how to add payload formatters and which types are supported by {{% tts %}}. 

> For detailed tutorials on the integrations that are available in {{% tts %}}, see [Integrations]({{< ref "/integrations/payload-formatters" >}}).

## Migrate End Devices

When you have added your application and elements associated with it, it is time to migrate your end device(s) from {{% ttnv2 %}} to {{% tts %}}.

{{< info >}} End devices connected to The Things Network V2 can be migrated to {{% tts %}} Cloud and {{% tts %}} Community Edition without the need for migrating a gateway, thanks to the default connection with [Packet Broker]({{< ref "/reference/packet-broker" >}}). The Things Industries V2 (SaaS) can also be connected to Packet Broker by contacting [support](mailto:support@thethingsindustries.com), while {{% tts %}} Enterprise or Open Source can be [configured]({{< ref "/reference/packet-broker/connect" >}}) manually.

If you are using deployments connected to Packet Broker, the traffic from your end device(s) will be routed to {{% tts %}} after migrating your device(s). However, there are certain requirements that your devices need to meet for Packet Broker to route their traffic to {{% tts %}} correctly. See [Packet Broker Requirements for End Device Migration]({{< ref "/getting-started/migrating/migrating-from-v2/packet-broker-requirements" >}}) for detailed information.

If you are using deployments that are not connected to Packet Broker, you will have to [migrate your gateway]({{< ref "/getting-started/migrating/gateway-migration" >}}) to receive traffic from your end device in {{% tts %}}. {{</ info >}}

{{< note >}} We recommend The Things Network community members to keep their gateways registered on The Things Network V2 for as long as possible (i.e. to migrate their devices via Packet Broker), or to agree on performing coordinated migration to {{% tts %}} together with the local community to ensure reliable LoRaWAN network coverage. {{</ note >}}

There are two approaches for migrating devices, depending on how many end devices you intend to migrate and if you wish to migrate with or without active sessions, described in the following guides:

- [Using {{% tts %}} Console]({{< relref "migrate-using-console" >}}) - this method is convenient only for small number of devices. Migrating active device sessions is not supported.
- [Using `ttn-lw-migrate` tool]({{< relref "migrate-using-migration-tool" >}}) - this method allows migrating devices in bulk, optionally with active device sessions.

## Migration decision tree
Migrating from V2 to The Things Stack Cloud or The Things Stack Community Edition (click on the image to enlarge).

[![migration decision tree](migration-decision-tree.jpg "migration decision tree")](migration-decision-tree.jpg)
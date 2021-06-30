---
title: Migrating Gateways
weight: 6
aliases: "/getting-started/migrating-from-v2/gateway-migration"
---

Migrating gateways to {{% tts %}} is an easy, two step process.

{{< info >}} Migrating **The Things Indoor Gateway (TTIG)** from {{% ttnv2 %}} to {{% tts %}} via CLI and Console is now fully supported! [Read more]({{< ref "/gateways/thethingsindoorgateway" >}}) {{</ info >}}

### Step 1

Add the Gateway in the {{% tts %}}. 

> For detailed instructions on adding gateways to {{% tts %}} using the CLI or Console, see [Adding Gateways]({{< ref "gateways/adding-gateways" >}}).

### Step 2

Update the server address in the gateway configuration settings.
- When using the Semtech UDP Packet Forwarder, make sure to update the `server_address` in the gateway configuration settings to the address of the Gateway Server. For examples, see [The Things Network Addresses]({{< ref "/getting-started/ttn/addresses" >}}) if you are using {{% tts %}} Community Edition, or [Cloud Addresses]({{< ref "/getting-started/cloud-hosted/addresses" >}}) if you are using {{% tts %}} Cloud. See [Semtech UDP Packet Forwarder]({{< ref "/gateways/udp" >}}) documentation for more info.
- When using the LoRa Basics Station protocol, refer to the [LoRa Basics Station]({{< ref "gateways/lora-basics-station" >}}) documentation.

Once your gateways are migrated, the traffic will be routed directly to {{% tts %}}.

{{< note >}} If you migrated your end devices and gateways from {{% ttnv2 %}} (The Things Network V2 or The Things Industries V2 (SaaS), their traffic might still end up in {{% ttnv2 %}}. If this occurs, disable the devices in {{% ttnv2 %}} by deleting their session keys, or deleting the application completely. {{</ note >}}

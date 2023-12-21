---
title: Migrating Gateways
weight: 7
aliases:
  [
    /the-things-stack/migrating-from-v2/gateway-migration,
    /getting-started/migrating/gateway-migration,
  ]
---

Migrating gateways to {{% tts %}} is an easy, two step process.

{{< note >}} Migrating **The Things Indoor Gateway (TTIG)** from {{% ttnv2 %}} to {{% tts %}} via CLI and Console is now fully supported! Do not follow the instructions below if you are using The Things Indoor Gateway, simply follow instructions for [Claiming The Things Indoor Gateway]({{< ref "/gateways/models/thethingsindoorgateway" >}}) and your TTIG will connect automatically. {{</ note >}}

### Step 1

Add the Gateway in the {{% tts %}}.

For detailed instructions on adding gateways to {{% tts %}} using the CLI or Console, see [Adding Gateways]({{< ref "/gateways/concepts/adding-gateways" >}}).

### Step 2

Update the server address in the gateway configuration settings.

- When using the Semtech UDP Packet Forwarder, make sure to update the `server_address` in the gateway configuration settings to the address of the Gateway Server. For examples, see [The Things Network Addresses]({{< ref "/reference/ttn/addresses" >}}) if you are using {{% ttss %}}, or [Cloud Addresses]({{< ref "/the-things-stack/cloud/addresses" >}}) if you are using {{% tts %}} Cloud. See [Semtech UDP Packet Forwarder]({{< ref "/gateways/concepts/udp" >}}) documentation for more info.
- When using the LoRa Basics Station protocol, refer to the [LoRa Basics Station]({{< ref "gateways/concepts/lora-basics-station" >}}) documentation.

Once your gateways are migrated, the traffic will be routed directly to {{% tts %}}.

If you migrated your end devices and gateways from The Things Industries {{% ttnv2 %}} (SaaS), their traffic might still end up in {{% ttnv2 %}}. If this occurs, disable the devices in {{% ttnv2 %}} by deleting their session keys, or deleting the application completely.

---
title: Migrating Gateways
weight: 7
aliases:
  [
    /migration-from-v2/gateway-migration,
    /getting-started/migrating/gateway-migration,
    /the-things-stack/migrating/gateway-migration,
  ]
---

This guide explains how to migrate gateways to {{% tts %}}.

<!--more-->

Migrating gateways to {{% tts %}} is a two step process.

### Step 1

Add the Gateway in the {{% tts %}}.

For detailed instructions on adding gateways to {{% tts %}} using the CLI or Console, see [Adding Gateways]({{< ref "/hardware/gateways/concepts/adding-gateways" >}}).

### Step 2

Update the server address in the gateway configuration settings.

- When using the Semtech UDP Packet Forwarder, make sure to update the `server_address` in the gateway configuration settings to the address of the Gateway Server. For examples, see [The Things Network Addresses]({{< ref "/concepts/ttn/addresses" >}}) if you are using {{% ttss %}}, or [Cloud Addresses]({{< ref "/cloud/addresses" >}}) if you are using {{% tts %}} Cloud. See [Semtech UDP Packet Forwarder]({{< ref "/hardware/gateways/concepts/udp" >}}) documentation for more info.
- When using the LoRa Basics Station protocol, refer to the [LoRa Basics Station]({{< ref "/hardware/gateways/concepts/lora-basics-station" >}}) documentation.

Once your gateways are migrated, the traffic will be routed directly to {{% tts %}}. See [Troubleshooting Gateways]({{< ref "/hardware/gateways/troubleshooting" >}}) for common errors.

If you migrated your end devices and gateways from The Things Industries {{% ttnv2 %}} (SaaS), their traffic might still end up in {{% ttnv2 %}}. If this occurs, disable the devices in {{% ttnv2 %}} by deleting their session keys, or deleting the application completely.

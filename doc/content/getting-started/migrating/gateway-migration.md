---
title: Migrating Gateways
weight: 2
aliases: "/getting-started/migrating-from-v2/gateway-migration"
---

Migrating gateways is a two step process.

### Step 1

Add the Gateway in the {{% tts %}}. For instructions on adding gateways to {{% tts %}} using the CLI or Console, see [Adding Gateways]({{< ref "gateways/adding-gateways" >}}).

### Step 2

Update the server address in the gateway configuration settings.
- When using the Semtech UDP Packet Forwarder, make sure to update the `server_address` in the gateway configuration settings to the address of the ateway Server (e.g. `my-tts-network.nam1.cloud.thethings.industries`).
- When using the LoRa Basics Station protocol refer to [LoRa Basics Station document]({{< ref "gateways/lora-basics-station" >}})

Once your gateways are migrated, data will be routed to {{% tts %}}.

{{< note >}} If you are within range of The Things Network, data might still end up in {{% ttnv2 %}}. If this occurs, consider disabling the devices in {{% ttnv2 %}} by deleting session keys, or completely deleting the application. {{</ note >}}

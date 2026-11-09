# Migrating Gateways

> This guide explains how to migrate gateways to The Things Stack.

Source: https://www.thethingsindustries.com/docs/concepts/migration/gateway-migration/


This guide explains how to migrate gateways to The Things Stack.

Migrating gateways to The Things Stack is a two step process.

### Step 1

Add the Gateway in the The Things Stack.

For detailed instructions on adding gateways to The Things Stack using the CLI or Console, see [Adding Gateways](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/adding-gateways/).

### Step 2

Update the server address in the gateway configuration settings.

- When using the Semtech UDP Packet Forwarder, make sure to update the `server_address` in the gateway configuration settings to the address of the Gateway Server. For examples, see [The Things Network Addresses](https://www.thethingsindustries.com/docs/concepts/ttn/addresses/) if you are using The Things Stack Sandbox, or [Cloud Addresses](https://www.thethingsindustries.com/docs/cloud/addresses/) if you are using The Things Stack Cloud. See [Semtech UDP Packet Forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/udp/) documentation for more info.
- When using the LoRa Basics Station protocol, refer to the [LoRa Basics Station](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/lora-basics-station/) documentation.

Once your gateways are migrated, the traffic will be routed directly to The Things Stack. See [Troubleshooting Gateways](https://www.thethingsindustries.com/docs/hardware/gateways/troubleshooting/) for common errors.

If you migrated your end devices and gateways from The Things Industries V2 (SaaS), their traffic might still end up in V2. If this occurs, disable the devices in V2 by deleting their session keys, or deleting the application completely.


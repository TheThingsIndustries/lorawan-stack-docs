---
title: Migration FAQ
---

This section answers frequently asked questions regarding migration to {{% tts %}}.

### What is Packet Broker and what does it have to do with migrating to {{% tts %}}? 

[Packet Broker](https://packetbroker.net) is a neutral and open LoRaWAN packet broker developed by The Things Industries. Packet Broker adopts the Passive Roaming specifications, as defined by the LoRa Alliance, so it can be used to exchange traffic with other LoRaWAN networks to share coverage and improve overall network performance.

This means that you can migrate end devices between {{% tts %}} deployments which are connected to Packet Broker without having to migrate your gateway.

See {{% tts %}} [Packet Broker documentation]({{< ref "/getting-started/packet-broker" >}}) for detailed info about connecting {{% tts %}} to Packet Broker.

### Can I migrate my device without having to re-program it or trigger it to perform a new join?

Yes, devices can be migrated with their existing session via Packet Broker, i.e. without having to re-program them (ABP) or trigger them to perform a new join (OTAA), and without having to migrate the gateway. For deployments that aren't connected to Packet Broker, to migrate an active device session you would have to have the gateway migrated to the desired {{% tts %}} deployment as well.

You can check out the example of migrating a device from {{% tts %}} Community Edition to {{% tts %}} Cloud while persisting its active session in the [Migrate Active Device Session]({{< ref "/getting-started/migrating/migrating-between-tts-distributions/migrate-active-session" >}}) section.

{{< note >}} Please keep in mind that migrating active sessions is not recommended. If you cannot access your device to trigger it to perform a new join, you can try contacting your device's manufacturer as the device might have "secret" options to enable remote access. {{</ note >}}

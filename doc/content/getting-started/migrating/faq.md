---
title: Migration FAQ
---

This section answers frequently asked questions regarding migration to {{% tts %}}.

### Why should I migrate my devices and gateways to {{% tts %}}? 

{{% tts %}} is more scalable, more secure, and supports more of the LoRaWAN specification than {{% ttnv2 %}}. The end of life for {{% ttnv2 %}} environment is planned for December 1, 2021.

### When should I migrate my devices and gateways to {{% tts %}}? 

Start migrating your devices and gateways as soon as possible! {{% ttnv2 %}} is now read-only so you cannot add new gateways, devices and applications anymore, and the final deadline for migrating is December 1, 2021, when {{% ttnv2 %}} will be shut down.

> Reading the [complete Migrating to {{% tts %}} guide]({{< ref "/getting-started/migrating" >}}) can help you with the migration process.

### Will I still be able to register my devices and gateways on {{% tts %}} if I do not migrate them from {{% ttnv2 %}} until the migration deadline (December 1, 2021)?

Yes, you will be able to normally register devices and gateways on {{% tts %}} after December 1, 2021, but you might lose some data because of the {{% ttnv2 %}} shutdown if you do not migrate on time. Also, keep in mind that after this deadline, you will no longer be able to transfer your devices to {{% tts %}} in bulk, nor to preserve existing device sessions.

### What is Packet Broker and what does it have to do with migrating to {{% tts %}}? 

[Packet Broker](https://packetbroker.net) is a neutral and open LoRaWAN packet broker developed by The Things Industries. Packet Broker adopts the Passive Roaming specifications, as defined by the LoRa Alliance, so it can be used to exchange traffic with other LoRaWAN networks to share coverage and improve overall network performance.

> See {{% tts %}} [Packet Broker documentation]({{< ref "/getting-started/packet-broker" >}}) for detailed info about connecting {{% tts %}} to Packet Broker.

{{% ttnv2 %}}, {{% tts %}} Community Edition and {{% tts %}} Cloud are connected to Packet Broker by default. {{% tts %}} Open Source and {{% tts %}} Enterprise can also be [connected]({{< ref "/getting-started/packet-broker/connect" >}}) to Packet Broker. Traffic is then automatically exchanged between these networks. See [default Packet Broker routing tables]({{< ref "/reference/pb-routing" >}}).

For example, this means that you can migrate an end device from The Things Network V2 to {{% tts %}} Community Edition without immediately (or previously) having to migrate your gateway, because both of these deployments are connected to Packet Broker by default. However, there are certain requirements that need to be fulfilled in order for Packet Broker to route traffic from and to these devices properly and timely. [Read more about DevAddr and RX1 Delay requirements]({{< ref "/getting-started/migrating/migrating-from-v2/packet-broker-requirements" >}}).

### I tried migrating my The Things Indoor Gateway (TTIG) to {{% tts %}}, but the Console shows status `Disconnected`. Does {{% tts %}} support connecting TTIGs?

Yes, TTIG can be migrated from {{% ttnv2 %}} to {{% tts %}}. Make sure you are not using the regular option of [adding gateways]({{< ref "/gateways/adding-gateways" >}}), but [gateway claiming]({{< ref "/gateways/gateway-claiming" >}}).

> Read the full guide on how to [connect TTIG to {{% tts %}}]({{< ref "/gateways/thethingsindoorgateway" >}}). This guide also contains a troubleshooting section for common errors.

### Can I delete my TTIG from {{% ttnv2 %}} Console after I have migrated it to {{% tts %}}?

Yes, you can delete your TTIG from {{% ttnv2 %}}, but keep in mind that you are no longer able to add new gateways on {{% ttnv2 %}} as this environment is already in read-only mode.

### Can I migrate my device to {{% tts %}} without having to re-program it or trigger it to perform a new join?

In a special case of migrating devices from The Things Industries V2 (SaaS) environment to {{% tts %}} Cloud, devices can be migrated with their existing session via Packet Broker, i.e. without having to re-program them (ABP) or trigger them to perform a new join (OTAA), and without having to migrate the gateway to {{% tts %}}. For all other migration scenarios, to migrate an active device session you would have to have the gateway migrated to {{% tts %}} as well.

> Learn how to [Migrate Active Sessions]({{< ref "/getting-started/migrating/migrating-from-v2/migrate-using-migration-tool/migrate-active-session" >}}).

{{< warning >}} Please keep in mind that migrating active sessions is not recommended. If you cannot access your device to trigger it to perform a new join, you can try contacting your device's manufacturer as the device might have "secret" options to enable remote access. {{</ warning >}}

### I cannot access my gateway remotely, so I cannot migrate it to {{% tts %}} at this time. Is there anything I can do so I do not lose data after December 1, 2021?

At this time you can make use of Packet Broker to route your data from {{% ttnv2 %}} to {{% tts %}}, but you will have to find a way to access your gateway and migrate it to {{% tts %}} by December 1, 2021.

### Can I use the AppKey from {{% ttnv2 %}} when registering an OTAA device on {{% tts %}}?

Having the device registered with the same AppKey on {{% ttnv2 %}} and {{% tts %}} can lead to serious conflicts.

You can use the same AppKey you used on {{% ttnv2 %}} when registering the OTAA device on {{% tts %}}, but in that case we strongly recommend to either change the AppKey in {{% ttnv2 %}} Console or to completely delete the device from {{% ttnv2 %}}, in order to prevent the device from re-joining the {{% ttnv2 %}} network. 

You can also generate a new AppKey on {{% tts %}} while registering the device. In that case, you will have to program your OTAA device with the newly generated AppKey.

In case of migrating active sessions using the `ttn-lw-migrate` tool, security keys are automatically cleared from {{% ttnv2 %}}, so you do not have to take any of above mentioned actions.

### Exporting devices on {{% ttnv2 %}} using `ttnctl` does not work for me. What am I doing wrong?

To export end device and/or application descriptions from {{% ttnv2 %}} and import them into {{% tts %}}, you cannot use `ttnctl` tool (command line tool for {{% ttnv2 %}}), but you need to use the `ttn-lw-migrate` migration tool.

> Learn to work with the [migration tool]({{< ref "/getting-started/migrating/migration-tool" >}}).

### Do all integrations from {{% ttnv2 %}} work with {{% tts %}} as well? Can I use integration guides for {{% ttnv2 %}} to implement integrations on {{% tts %}}?

The short answer to this is - no. Not all integrations that were available for {{% ttnv2 %}} are available for {{% tts %}} at the moment, but they are a work in progress. All integrations that are enabled for {{% tts %}} are built from scratch and have new endpoints, so old integration guides (for {{% ttnv2 %}}) are not relevant anymore.

> See [Integrations section]({{< ref "/integrations" >}}) for a complete documentation on available integrations and step-by-step guides for implementing them.

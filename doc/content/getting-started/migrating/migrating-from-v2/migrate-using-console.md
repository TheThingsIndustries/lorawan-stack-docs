---
title: "Migrate using the Console"
description: ""
weight: 2
---

This section describes migrating end devices to {{% tts %}} by using [{{% tts %}} Console]({{< ref "/getting-started/console" >}}).

<!--more-->

Migrating your end devices using {{% tts %}} Console is simple, but devices must be migrated one-by-one, so it is convenient only for migrating a few devices. 

Follow the steps below to migrate your end device from {{% ttnv2 %}} to {{% tts %}} by using the Console.

{{< note >}} It is not possible to migrate groups of devices, or to migrate devices with active sessions, using the Console only. To import groups of devices, or learn to export device sessions, see [Migrate using the Migration Tool]({{< ref "/getting-started/migrating/migrating-from-v2/migrate-using-migration-tool"  >}}) guide. {{</ note >}}

## Add an End Device in {{% tts %}}

The first step is to add your end device in {{% tts %}}. See [Adding Devices]({{< ref "/devices/adding-devices" >}}) section for more details on adding devices in {{% tts %}}.

There are two ways to add devices in {{% tts %}} Console - **Manually** and via the **LoRaWAN Device Repository**. Configuring settings for end devices depends on their type - OTAA or ABP. We strongly recommend using OTAA over ABP. Read [why using OTAA is better than ABP]({{< ref "/devices/abp-vs-otaa" >}}).

{{< tabs/container "OTAA" "ABP" >}}

{{< tabs/tab "OTAA" >}}

If you want to add an OTAA end device manually, follow these steps:

- Select **Over the air actiovation (OTAA)**
- Choose **LoRaWAN version** `MAC V1.0.2` (this is the version used in {{% ttnv2 %}})
- Create an **End device ID** (does not have to match the **Device ID** in {{% ttnv2 %}})
- Enter your end device’s **AppEUI** and **DevEUI** (these have to be the same as the ones in {{% ttnv2 %}}, as this info is provided by the device manufacturer)
- Select your **Frequency plan**
- Select **Regional Parameters version** `PHY V1.0.2 REV B` (this is the version used in {{% ttnv2 %}})
- Do not check the boxes **Supports class B/C**
- Keep the default Advanced settings as OTAA devices commonly negotiate about these with {{% tts %}} Network Server
- Enter your end device’s **AppKey** (see the note below)

{{< note >}} The **AppKey** value can match the one used in {{% ttnv2 %}}, as this info is usually provided by the device manufacturer. The **AppKey** can also be generated in the Console as the last step of the OTAA device registration process. If you decide to generate it, do not forget to program your OTAA device to use the new **AppKey** issued by {{% tts %}}.

If you are migrating an active OTAA device session, the **AppKey** must match the one used on {{% ttnv2 %}}, otherwise you can choose to keep one from {{% ttnv2 %}} or not.{{</ note >}}

{{< /tabs/tab >}}

{{< tabs/tab "ABP" >}}

If you still have a good reason to use ABP device, you can add it in {{% tts %}} by following next few steps:

- Select **Activation by personalization (ABP)**
Choose **LoRaWAN version** `MAC V1.0.2` (this is the version used in {{% ttnv2 %}})
- Create an **End device ID** (does not have to match the **Device ID** in {{% ttnv2 %}})
- The **DevEUI** field is optional
- Select your **Frequency plan**
- Select **Regional Parameters version** `PHY V1.0.2 REV B` (this is the version used in {{% ttnv2 %}})
- Do not check the boxes **Supports class B/C**
- Enter your device’s **DevAddr** and **NwkSKey** (see the note below)
- Advanced settings must be set on registration (beware that changing these settings might not work later)
    - Set **Frame counter width** to `32 bit` (this is the value used in {{% ttnv2 %}})
    - Set **RX1 Delay** to `1` (see the note below)
    - Set **RX1 Data Rate Offset** to `0`
    - Your device probably resets frame counters, so check the **Resets Frame Counters** box
    - Set **RX2 Data Rate Index** to `3` if your frequency plan is EU868
    - Set **RX2 Frequency** to `869525000` if your frequency plan is EU868
    - Set **Factory Preset Frequencies** for EU868 devices to `868100000, 868300000, 868500000` for all devices, or to `867100000, 867300000, 867500000, 867700000, 867900000, 868100000, 868300000, 868500000` for 8-channel devices

{{< note >}} The **DevAddr** and **RX1 Delay** values depend on your specific use case.

If you want your end device traffic to be routed via Packet Broker to {{% tts %}}, the **DevAddr** must be routable by the Packet Broker and the **RX1 Delay** value must be set to 5 seconds. Note that the **DevAddr** is routable only if you are using **The Things Industries V2** and migrating to **{{% tts %}} Cloud**, and even that is being achieved only on customer request by contacting [The Things Industries support](mailto:support@thethingsindustries.com).

If the existing **DevAddr** is not routable by the Packet Broker (i.e. you are not migrating from **The Things Industries V2** to **The Things Stack Cloud**), and/or **RX1 Delay** is different than 5 seconds (for {{% ttnv2 %}} the default is 1 second), you will need to auto-generate new **DevAddr** during device registration on {{% tts %}}, then re-program the device to assign it with that new **DevAddr** and **RX1 Delay** of 5 seconds. Otherwise, the traffic from your device will not be properly routed by the Packet Broker or will never reach your end device in time.

Re-programming the ABP device to change **DevAddr** to the one issued by {{% tts %}} and **RX1 Delay** to 5 seconds is **recommended**. Re-programming the ABP device to do this might also be a good time to reconsider switching it to OTAA by flashing the firmware and adopting some [best practices]({{< ref "/devices/best-practices" >}}). [Check why using OTAA is recommended]({{< ref "/devices/abp-vs-otaa" >}}).

If you do not want your traffic to be routed by the Packet Broker, i.e. you want to migrate your gateway to {{% tts %}} too, you do not have to re-program your device. You can keep the existing **DevAddr** and **RX1 Delay** of 1 second, and use these values when adding the device to {{% tts %}}. Be aware that if you are using a high-latency backhaul, keeping the **RX1 Delay** of 1 second might cause latency issues.

The **NwkSKey** has to match the one used on {{% ttnv2 %}} if you are migrating an active ABP device session. If not, you can choose to keep the one used on {{% ttnv2 %}}, or to generate a new one in {{% tts %}} Console during the device registration process. {{</ note >}}

{{< /tabs/tab >}}

{{< /tabs/container >}}

If your end device is a part of the [LoRaWAN Device Repository]({{< ref "/integrations/payload-formatters/device-repo" >}}), you will need to select its **Brand**, **Model** and provide other device-specific information.

## Prevent the End Device from Joining {{% ttnv2 %}} Network

When your end device is registered in {{% tts %}}, it is necessary to prevent it from re-joining {{% ttnv2 %}} network. 

{{< tabs/container "OTAA" "ABP">}}

{{< tabs/tab "OTAA" >}}

To prevent OTAA devices from re-joining {{% ttnv2 %}}, the recommended practice is to change the **AppKey** in {{% ttnv2 %}}. By changing the **AppKey**, the existing session on {{% ttnv2 %}} will not be terminated yet, but the end device will not be able to re-join because {{% ttnv2 %}} cluster will reject its new Join Requests. Swapping the last two bytes of the **AppKey** will prevent it from rejoining, and allow you to revert easily if you need to.

## Let the OTAA End Device Join {{% tts %}} Network

Next, your end device needs to join {{% tts %}} network. 

Some OTAA devices ocasionally perform new joins - with these end devices, you can only wait for them to do this on their own. Depending on the end device, you can also:

- Send a downlink message from {{% ttnv2 %}} Console to trigger a new join
- Delete the end device from {{% ttnv2 %}} Console so it loses the connection to {{% ttnv2 %}} and triggers a re-join
- Power cycle the end device

{{< /tabs/tab >}}

{{< tabs/tab "ABP" >}}

ABP devices must be completely deleted from {{% ttnv2 %}}, especially if you have not re-programmed it for a new **DevAddr**. Having the device registered in both {{% ttnv2 %}} and {{% tts %}}  introduces serious conflicts, including race conditions for Joins and unpredictable, out-of-spec operation.

{{< /tabs/tab >}}

{{< /tabs/container >}}

## Next Step - Migrate Gateways

{{< tabs/container "OTAA" "ABP">}}

{{< tabs/tab "OTAA" >}}

Since we assume you have not migrated your gateway from {{% ttnv2 %}} yet, new Join Requests sent by your OTAA device are still being received by the {{% ttnv2 %}} network. However, if you have prevented your device from joining {{% ttnv2 %}} network (as recommended above), these Join Requests are not going to be accepted by the {{% ttnv2 %}} Network Server. 

Instead, these Join Requests are going to be routed to {{% tts %}} via Packet Broker and {{% tts %}} will accept them. Your OTAA device will negotiate with {{% tts %}} Network Server to obtain a new **DevAddr**, channel settings and other MAC parameters. The traffic from your end device can from now on be routed to {{% tts %}} thanks to the newly assigned **DevAddr** and **RX1 Delay** of 5 seconds, which fulfills the Packet Broker requirements.

{{< /tabs/tab >}}

{{< tabs/tab "ABP" >}}

ABP devices do not perform the join procedure, so they do not get assigned with a new **DevAddr**, **RX1 Delay** and some other parameters like OTAA devices do. These values must be coded in the device itself. 

If you are not specifically migrating from **The Things Industries V2** to **{{% tts %}} Cloud**, your ABP device's **DevAddr** will not be routable by the Packet Broker. If the **RX1 Delay** of your device is not equal to 5 seconds, the device traffic will probably never reach {{% tts %}}. 

If you want your traffic to be routed via Packet Broker, you will need to re-program your ABP device to use a **DevAddr** issued by {{% tts %}} and **RX1 Delay** of 5 seconds. 

If you want to keep **DevAddr** and **RX1 Delay** as they were in {{% ttnv2 %}}, you will need to [migrate your gateway to {{% tts %}}]({{< ref "/getting-started/migrating/gateway-migration" >}}).

{{< /tabs/tab >}}

{{< /tabs/container >}}

{{< note >}} Starting from {{% tts %}} `v3.13.0` release, The Things Network community members can freely migrate their gateways from The Things Network {{% ttnv2 %}} to {{% tts %}} Community Edition, while still providing uplink and downlink coverage to The Things Network {{% ttnv2 %}}. Even if you manage to get your end device traffic routed to {{% tts %}} by Packet Broker, we recommend to migrate your gateways as soon as possible. {{</ note >}}

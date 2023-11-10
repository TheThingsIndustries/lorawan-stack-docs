---
title: "Migrate using the Console"
description: ""
weight: 2
aliases: ["/getting-started/migrating/migrating-from-v2/migrate-using-console"]
---

This section describes migrating end devices to {{% tts %}} by using [{{% tts %}} Console]({{< ref "/the-things-stack/interact/console" >}}).

<!--more-->

Migrating your end devices using {{% tts %}} Console is simple, but devices must be migrated one-by-one, so it is convenient only for migrating a fewer number of devices. This method also does not support migrating active device sessions. To learn to export device sessions and groups of devices from {{% ttnv2 %}}, see [Migrate using the Migration Tool]({{< ref "/the-things-stack/migrating/migrating-from-v2/migrate-using-migration-tool"  >}}) guide.

Follow the steps below to migrate your end device from {{% ttnv2 %}} to {{% tts %}} by using the Console.

## Add an End Device in {{% tts %}}

The first step is to add your end device in {{% tts %}}. See [Adding Devices]({{< ref "/devices/adding-devices" >}}) section for more details on adding devices in {{% tts %}}.

There are two ways to add devices in {{% tts %}} Console - **Manually** and via the **LoRaWAN Device Repository**.

Configuring settings for end devices depends on their type - OTAA or ABP. We strongly recommend using OTAA over ABP. Read [why using OTAA is better than ABP]({{< ref "/devices/concepts/abp-vs-otaa" >}}).

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
- Enter your end device’s **AppKey** (see considerations below)

The **AppKey** value can match the one used in {{% ttnv2 %}}, as this info is usually provided by the device manufacturer. The **AppKey** can also be generated in the Console as the last step of the OTAA device registration process. If you decide to generate it, do not forget to program your OTAA device to use the new **AppKey** issued by {{% tts %}}.

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
- Enter your device’s **DevAddr** and **NwkSKey** (see considerations below)
- Advanced settings must be set on registration (beware that changing these settings might not work later)
  - Set **Frame counter width** to `32 bit` (this is the value used in {{% ttnv2 %}})
  - Set **RX1 Delay** to `1` (see considerations below)
  - Set **RX1 Data Rate Offset** to `0`
  - Your device probably resets frame counters, so check the **Resets Frame Counters** box
  - Set **RX2 Data Rate Index** to `3` if your frequency plan is EU868
  - Set **RX2 Frequency** to `869525000` if your frequency plan is EU868
  - Set **Factory Preset Frequencies** for EU868 devices to `868100000, 868300000, 868500000` for all devices, or to `867100000, 867300000, 867500000, 867700000, 867900000, 868100000, 868300000, 868500000` for 8-channel devices

The **DevAddr** and **RX1 Delay** values depend on your specific use case.

If you want your end device traffic to be routed via Packet Broker to {{% tts %}}, [Packet Broker Requirements for End Device Migration]({{< ref "/the-things-stack/migrating/migrating-from-v2/packet-broker-requirements" >}}) need to be fulfilled. If you are migrating from **The Things Industries {{% ttnv2 %}}** to **{{% tts %}} Cloud**, you might be able to keep the existing **DevAddr** (please contact [The Things Industries support](mailto:support@thethingsindustries.com)). If the existing **DevAddr** is not routable by the Packet Broker (i.e. you are not migrating from **The Things Industries V2** to **The Things Stack Cloud**), you will need to auto-generate new **DevAddr** during device registration on {{% tts %}}, then re-program the device to assign it with the new **DevAddr**. Note that in both of these cases, you will have to adjust your device's **RX1 Delay** to 5 seconds using MAC commands, otherwise your device's traffic might not reach {{% tts %}} in time.

Re-programming the ABP device to change **DevAddr** to the one issued by {{% tts %}} and **RX1 Delay** to 5 seconds is **recommended**. Re-programming the ABP device to do this might also be a good time to reconsider switching it to OTAA by flashing the firmware and adopting some [best practices]({{< ref "/devices/concepts/best-practices" >}}). [Check why using OTAA is recommended]({{< ref "/devices/concepts/abp-vs-otaa" >}}).

If you do not want your traffic to be routed by the Packet Broker, i.e. you want to migrate your gateway to {{% tts %}} too, you do not have to re-program your device. You can keep the existing **DevAddr** and **RX1 Delay** of 1 second, and use these values when adding the device to {{% tts %}}. Be aware that if you are using a high-latency backhaul, keeping the **RX1 Delay** of 1 second still might cause latency issues, even if you migrate your gateway.

For the **NwkSKey**, you can choose to keep the one used on {{% ttnv2 %}}, or to generate a new one in {{% tts %}} Console during the device registration process.

{{< /tabs/tab >}}

{{< /tabs/container >}}

If your end device is a part of the [LoRaWAN Device Repository]({{< ref "/integrations/payload-formatters/device-repo" >}}), you will need to select its **Brand**, **Model** and provide other device-specific information.

## Prevent the End Device from Joining {{% ttnv2 %}} Network

When your end device is registered in {{% tts %}}, it is necessary to prevent it from re-joining the {{% ttnv2 %}} network.

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

ABP devices must be completely deleted from {{% ttnv2 %}}, especially if they are not re-programmed for a new **DevAddr**. Having the device registered in both {{% ttnv2 %}} and {{% tts %}} introduces serious conflicts, including race conditions for Joins and unpredictable, out-of-spec operation.

{{< /tabs/tab >}}

{{< /tabs/container >}}

## Next Step - Migrate Gateways

{{< tabs/container "OTAA" "ABP">}}

{{< tabs/tab "OTAA" >}}

Since we assume you have not migrated your gateway from {{% ttnv2 %}} yet, new Join Requests sent by your OTAA device are still being received by the {{% ttnv2 %}} network. However, if you have prevented your device from joining {{% ttnv2 %}} network (as recommended above), these Join Requests are not going to be accepted by the {{% ttnv2 %}} Network Server.

Instead, if your devices respect the previously mentioned Packet Broker requirements, these Join Requests are going to be routed to {{% tts %}} via Packet Broker and {{% tts %}} will accept them. Upon Join Request acceptance, your OTAA device will negotiate with {{% tts %}} Network Server to obtain a new **DevAddr**, channel settings and other MAC parameters. The traffic from your end device can from now on be routed to {{% tts %}} thanks to the newly assigned **DevAddr** and **RX1 Delay** of 5 seconds.

{{< /tabs/tab >}}

{{< tabs/tab "ABP" >}}

ABP devices do not perform the join procedure, so they do not get assigned with a new **DevAddr**, **RX1 Delay** and some other parameters like OTAA devices do. These values must be coded in the device itself.

As previously mentioned, routing traffic from your ABP devices to {{% tts %}} via Packet Broker will be possible only if Packet Broker requirements are met. If you want your traffic to be routed via Packet Broker, you will need to re-program your ABP device to use a **DevAddr** issued by {{% tts %}} and **RX1 Delay** of 5 seconds. Please note that this is a recommended practice. An exception to this rule is the case of migrating from **The Things Industries {{% ttnv2 %}}** to **{{% tts %}} Cloud** deployment - here you might be able to keep your device's **DevAddr**, but you will still have to adjust your device's **RX1 Delay** to 5 seconds.

If you want to keep **DevAddr** and **RX1 Delay** as they were in {{% ttnv2 %}}, you will need to [migrate your gateway to {{% tts %}}]({{< ref "/the-things-stack/migrating/gateway-migration" >}}). Please note that this is not a recommended practice, because using an **RX1 Delay** of 1 second in a combination with high latency backhauls might cause your device's traffic to not reach {{% tts %}} in time, even if you migrate your gateway.

{{< /tabs/tab >}}

{{< /tabs/container >}}

Even if you manage to get your end device traffic routed to {{% tts %}} by Packet Broker, we still recommend to migrate your gateways as soon as possible.

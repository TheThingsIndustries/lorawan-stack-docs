---
title: "Migrate without Persisting Active Sessions"
description: ""
weight: 1
---

This section explains how to export one or more of your end devices from {{% ttnv2 %}} to a [JSON file]({{< ref "/getting-started/migrating/device-json" >}}), without persisting their session.

<!--more-->

{{< info >}} We strongly recommend migrating end devices without persisting active sessions. {{</ info >}}

{{< tabs/container "OTAA" "ABP" >}}

{{< tabs/tab "OTAA" >}}

When migrating OTAA devices without persisting active sessions, a new join needs to be performed on {{% tts %}} to establish a new session. 

By establishing the new session with {{% tts %}}, an OTAA device gets assigned a new **DevAddr** and default values of some other parameters (like 5 seconds **RX1 Delay**). This ensures that the traffic sent by these end devices can be properly routed by the Packet Broker to and from {{% tts %}}.

{{< /tabs/tab >}}

{{< tabs/tab "ABP" >}}

The **DevAddr** and some other parameters (like **RX1 Delay**) are hardcoded for ABP devices. If you do not re-program the device to change these values, you can migrate it to {{% tts %}} without its security keys, network parameters, etc. which basically means you are migrating it without its active session.

{{< note >}} If you want your end device traffic to be routed via Packet Broker to {{% tts %}}, the **DevAddr** must be routable by the Packet Broker and the **RX1 Delay** value must be 5 seconds. Note that the **DevAddr** is routable only if you are using **The Things Industries V2 (SaaS)** and migrating to **{{% tts %}} Cloud**, and even that is being achieved only on customer request by contacting [The Things Industries support](mailto:support@thethingsindustries.com). 

If you are not migrating from **The Things Industries V2 (SaaS)** to **{{% tts %}} Cloud**, Packet Broker will not be able to route your ABP device's traffic properly, so you will have to [migrate your gateway]({{< ref "/getting-started/migrating/gateway-migration" >}}) to {{% tts %}} too. Be aware that in this case, even if you do migrate your gateway, you could still be experiencing latency issues if your gateway has a high latency backhaul. {{</ note >}}

{{< warning >}} Note that this is **not a recommended practice**. We advise re-programming the ABP device to change the **DevAddr** to the one issued by The Things Stack and **RX1 Delay** to 5 seconds, even if you do not want your traffic to be routed by Packet Broker. 

If you re-program the device, you will have to follow the [Migrate using the Console]({{< ref "/getting-started/migrating/migrating-from-v2/migrate-using-console" >}}) guide. The reason for this is that when you re-program your ABP device, its **DevAddr** and other parameters will no longer match the device description stored in {{% ttnv2 %}}, so you will not be able to export the current device description using the `ttn-lw-migrate` tool. {{</ warning >}}

{{< /tabs/tab >}}

{{< /tabs/container >}}

{{< note >}} Before exporting end devices, you can first test the execution by appending the `--dry-run` and `--verbose` flags to the commands presented in the sections below. {{</ note >}} 

### Export a Single End Device

To export a single end device from {{% ttnv2 %}}:

```bash
$ ttn-lw-migrate device --source ttnv2 "v2-end-device-ID" --ttnv2.with-session=false > devices.json
```

### Export a Batch of End Devices

First, create a text file `device_ids.txt`. This file needs to contain a {{% ttnv2 %}} `Device ID` for every end device you want to export from {{% ttnv2 %}}. 

The format of this file is one `Device ID` per one line, i.e.:

```
dev1
dev2
dev3
```

To export a batch of end devices from {{% ttnv2 %}}:

```bash
$ ttn-lw-migrate device --source ttnv2 --ttnv2.with-session=false < device_ids.txt > devices.json
```

### Export All End Devices Associated With {{% ttnv2 %}} Application

To export all devices contained in {{% ttnv2 %}} application:

```bash
$ ttn-lw-migrate application --source ttnv2 "ttn-v2-application-ID" --ttnv2.with-session=false > devices.json
```

## Prevent the End Device from Joining {{% ttnv2 %}} Network

Exporting end devices without their active sessions does not clear root and session keys on {{% ttnv2 %}}. Hence, you need to prevent your devices from re-joining the {{% ttnv2 %}} network.

{{< tabs/container "OTAA" "ABP" >}}

{{< tabs/tab "OTAA" >}}

To prevent OTAA device from re-joining the {{% ttnv2 %}} network, the recommended practice is to change the **AppKey** in the {{% ttnv2 %}}. By changing the **AppKey**, the existing session on {{% ttnv2 %}} will not be terminated yet, but the end device will not be able to re-join because the {{% ttnv2 %}} cluster will reject its new Join Requests. 

{{< /tabs/tab >}}

{{< tabs/tab "ABP" >}}

{{< warning >}} For ABP device, you need to completely delete it from V2, especially because this section assumes that you have not re-programmed it for a new **DevAddr**. Having this device registered in V2 and The Things Stack would introduce some serious conflicts. {{</ warning >}}

{{< /tabs/tab >}}

{{< /tabs/container >}}

## Import End Devices in {{% tts %}} Application

Now that you have exported one or more of your devices to a `devices.json` file, you can continue by importing this file in {{% tts %}} via Console or via CLI. 

> See [Import End Devices in The Things Stack]({{< ref "/getting-started/migrating/import-devices" >}}) for detailed instructions on how to do this.

{{< tabs/container "OTAA" "ABP" >}}

{{< tabs/tab "OTAA" >}}

## Let the OTAA End Device Join {{% tts %}} Network

Next, your OTAA end device needs to join {{% tts %}} network. Since you have not migrated your device with its active session, it will need to perform a new join.

Some OTAA devices ocasionally perform new joins - with these end devices, you can only wait for them to do this on their own. 

You could also send a downlink message from the {{% ttnv2 %}} Console to trigger a new join if your device supports this - contact your device maker for detailed instructions. 

Some devices are also triggered when power cycled, or when deleted from {{% ttnv2 %}}.

## Next Step - Migrate Gateways

Since we assume that you have not migrated your gateway from {{% ttnv2 %}} yet, new Join Requests sent by your OTAA device are still being received by the {{% ttnv2 %}} network. However, if you have prevented your device from joining {{% ttnv2 %}} network (as recommended above), these Join Requests are not going to be accepted by the {{% ttnv2 %}} Network Server. 

Instead, these Join Requests are going to be routed to {{% tts %}} via Packet Broker and {{% tts %}} will accept them. Your OTAA device will negotiate with {{% tts %}} Network Server to obtain a new **DevAddr**, channel settings and other MAC parameters. The traffic from your end device can from now on be routed to {{% tts %}} thanks to the newly assigned **DevAddr** and **RX1 Delay** of 5 seconds, which fulfills the Packet Broker requirements.

{{< /tabs/tab >}}

{{< tabs/tab "ABP" >}}

## Next Step - Migrate Gateways

This section implies that you are keeping the **DevAddr** and **RX1 Delay** values from {{% ttnv2 %}}, which means Packet Broker will be able to route the traffic properly only if you are migrating from **The Things Industries {{% ttnv2 %}}** to **{{% tts %}} Cloud**. This can be only achieved on a customer request, so if this is the case please contact [The Things Industries support](mailto:support@thethingsindustries.com) for more information.

If you are not migrating from **The Things Industries {{% ttnv2 %}}** to **{{% tts %}} Cloud**, please follow the guide to [migrate your gateway]({{< ref "/getting-started/migrating/gateway-migration" >}}) to {{% tts %}}. 

{{< /tabs/tab >}}

{{< /tabs/container >}}

{{< note >}} Starting from {{% tts %}} `v3.13.0` release, The Things Network community members can freely migrate their gateways from The Things Network {{% ttnv2 %}} to {{% tts %}} Community Edition, while still providing uplink and downlink coverage to The Things Network {{% ttnv2 %}}. Even if you manage to get your end device traffic routed to {{% tts %}} by Packet Broker, we recommend to migrate your gateways as soon as possible. {{</ note >}}

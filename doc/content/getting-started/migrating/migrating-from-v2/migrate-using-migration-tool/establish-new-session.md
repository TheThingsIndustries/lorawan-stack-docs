---
title: "Migrate without Persisting Active Sessions"
description: ""
weight: 1
---

This section explains how to export one or more of your end devices from {{% ttnv2 %}} to a [JSON file]({{< ref "/getting-started/migrating/device-json" >}}), without persisting their session.

<!--more-->

{{< note >}} Migrating end devices without their active session with `ttn-lw-migrate` tool is not applicable to ABP devices. To achieve this, see [how to migrate ABP device to {{% tts %}} using Console]({{< ref "/getting-started/migrating/migrating-from-v2/migrate-using-console" >}}). 

This section only applies to OTAA devices.{{</ note >}}

{{< info >}} We strongly recommend migrating end devices without persisting active sessions {{</ info >}}

When migrating OTAA devices without persisting active sessions, a new join needs to be performed on {{% tts %}} to establish a new session. 

By establishing the new session with {{% tts %}}, an OTAA device gets assigned a new **DevAddr** and default values of some other parameters (like 5 seconds **RX1 Delay**). This ensures that the traffic sent by these end devices can be properly routed by the Packet Broker to and from {{% tts %}}.

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

To prevent OTAA device from re-joining the {{% ttnv2 %}} network, the recommended practice is to change the **AppKey** in the {{% ttnv2 %}}. By changing the **AppKey**, the existing session on {{% ttnv2 %}} will not be terminated yet, but the end device will not be able to re-join because the {{% ttnv2 %}} cluster will reject its new Join Requests. 

## Import End Devices in {{% tts %}} Application

Now that you have exported one or more of your devices to a `devices.json` file, you can continue by importing this file in {{% tts %}} via Console or via CLI. 

> See [Import End Devices in The Things Stack]({{< ref "/getting-started/migrating/import-devices" >}}) for detailed instructions on how to do this.

## Let the OTAA End Device Join {{% tts %}} Network

Next, your OTAA end device needs to join {{% tts %}} network. Since you have not migrated your device with its active session, it will need to perform a new join.

Some OTAA devices ocasionally perform new joins - with these end devices, you can only wait for them to do this on their own. 

You could also send a downlink message from the {{% ttnv2 %}} Console to trigger a new join if your device supports this - contact your device maker for detailed instructions. 

Some devices are also triggered when power cycled, or when deleted from {{% ttnv2 %}}.

## Next Step - Migrate Gateways

Since we assume that you have not migrated your gateway from {{% ttnv2 %}} yet, new Join Requests sent by your OTAA device are still being received by the {{% ttnv2 %}} network. However, if you have prevented your device from joining {{% ttnv2 %}} network (as recommended above), these Join Requests are not going to be accepted by the {{% ttnv2 %}} Network Server. 

Instead, these Join Requests are going to be routed to {{% tts %}} via Packet Broker and {{% tts %}} will accept them. Your OTAA device will negotiate with {{% tts %}} Network Server to obtain a new **DevAddr**, channel settings and other MAC parameters. The traffic from your end device can from now on be routed to {{% tts %}} thanks to the newly assigned **DevAddr** and **RX1 Delay** of 5 seconds, which fulfills the Packet Broker requirements.

{{< note >}} Even if you manage to get your end device traffic routed to {{% tts %}} via Packet Broker, we still recommend you get in touch with your local The Things Network community and coordinate the migration of gateways, so you do not loose the LoRaWAN network coverage. See how to [migrate your gateway to {{% tts %}}]({{< ref "/getting-started/migrating/gateway-migration" >}}). {{</ note >}}

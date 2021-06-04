---
title: "Migrate Active Sessions"
description: ""
weight: 2
new_in_version: "3.12.0"
---

Starting from {{% tts %}} version `3.12.0`, it is possible to migrate end devices together with their active sessions using the `ttn-lw-migrate` tool. This section explains how to export one or more of your end devices from {{% ttnv2 %}} to a [JSON file]({{< ref "/getting-started/migrating/device-json" >}}), with persisting their active sessions.

<!--more-->

{{< warning >}} Active device sessions can be migrated via Packet Broker only from **The Things Industries V2 (SaaS)** to **{{% tts %}} Cloud**, and this is achievable only on a customer request. Contact [The Things Industries support](mailto:support@thethingsindustries.com) for more information. 

For all other scenarios, migrating active session is achievable only if you [migrate your gateway to {{% tts %}}]({{< ref "/getting-started/migrating/gateway-migration" >}}) too. {{</ warning >}}

{{< info >}} We strongly recommend migrating end devices without persisting active sessions. {{</ info >}}

{{< tabs/container "OTAA" "ABP" >}}

{{< tabs/tab "OTAA" >}}

In the case of persisting active sessions during migration, OTAA devices do not need to perform a new join on {{% tts %}} network, but their existing session will be transferred from {{% ttnv2 %}}.

{{< /tabs/tab >}}

{{< tabs/tab "ABP" >}}

The **DevAddr** and some other parameters (like **RX1 Delay**) are hardcoded for ABP devices. If you do not re-program the device to change these values, you can migrate it to {{% tts %}} with its active session. 

Remember that if you are not migrating specifically from **The Things Industries V2 (SaaS)** to **{{% tts %}} Cloud**, you will have to [migrate your gateway]({{< ref "/getting-started/migrating/gateway-migration" >}}) to successfully migrate your end device with its active session.

{{< /tabs/tab >}}

{{< /tabs/container >}}

{{< warning >}} Exporting end devices with their active sessions will clear their root and session keys from {{% ttnv2 %}}, so these devices will automatically no longer work on {{% ttnv2 %}}. {{</ warning >}}

{{< note >}} Before exporting end devices, you can first test the execution by appending the `--dry-run` and `--verbose` flags to the commands presented in the sections below. {{</ note >}}

### Export a Single End Device

To export a single end device from {{% ttnv2 %}} and clear its security keys:

```bash
$ ttn-lw-migrate device --source ttnv2 "v2-end-device-ID" > devices.json
```

### Export a Batch of End Devices

First, create a text file `device_ids.txt`. This file needs to contain a {{% ttnv2 %}} **Device ID** for every end device you want to export from {{% ttnv2 %}}. 

The format of this file is one **Device ID** per one line, i.e.:

```
dev1
dev2
dev3
```

To export a batch of end devices from {{% ttnv2 %}} and clear their security keys:

```bash
$ ttn-lw-migrate device --source ttnv2 < device_ids.txt > devices.json
```

### Export All End Devices Associated With {{% ttnv2 %}} Application

To export all devices contained in {{% ttnv2 %}} application and clear their security keys:

```bash
$ ttn-lw-migrate application --source ttnv2 "ttn-v2-application-ID" > devices.json
```

## Import End Devices in {{% tts %}} Application

Now that you have exported one or more of your devices to a `devices.json` file, you can continue by importing this file in {{% tts %}} via Console or via CLI. 

> See [Import End Devices in The Things Stack]({{< ref "/getting-started/migrating/import-devices" >}}) for detailed instructions on how to do this.

## Next Step - Migrate Gateways

{{< tabs/container "OTAA" "ABP" >}}

{{< tabs/tab "OTAA" >}}

Migrating your OTAA device from **The Things Industries V2 (SaaS)** to **{{% tts %}} Cloud** with its active session means it will keep its **DevAddr**, channel settings and MAC parameters from {{% ttnv2 %}}. It will not send new Join Requests, but the uplink traffic from your device should automatically show up in {{% tts %}}, because it will be routed via Packet Broker thanks to preserving your device's existing session. 

{{< /tabs/tab >}}

{{< tabs/tab "ABP" >}}

Migrating your ABP device from {{% ttnv2 %}} to {{% tts %}} with its active session means it will keep its **DevAddr**, channel settings and MAC parameters from {{% ttnv2 %}}, i.e. the existing session will be preserved.

{{< /tabs/tab >}}

{{< /tabs/container >}}

If you are migrating an end device with its active session via Packet Broker (from **The Things Industries V2** to **{{% tts %}} Cloud**), you might need to set the **RX1 Delay** of the device to 5 seconds by [configuring MAC settings]({{< ref "/getting-started/migrating/configure-mac-settings" >}}), otherwise the traffic might not reach {{% tts %}} in time via Packet Broker. 

In any case, you can leave the **RX1 Delay** value as is (1 second from {{% ttnv2 %}}), but then you will need to [migrate your gateway to {{% tts %}}]({{< ref "/getting-started/migrating/gateway-migration" >}}) too.

{{< note >}} Starting from {{% tts %}} `v3.13.0` release, The Things Network community members can freely migrate their gateways from The Things Network {{% ttnv2 %}} to {{% tts %}} Community Edition, while still providing uplink and downlink coverage to The Things Network {{% ttnv2 %}}. Even if you manage to get your end device traffic routed to {{% tts %}} by Packet Broker, we recommend to migrate your gateways as soon as possible. {{</ note >}}

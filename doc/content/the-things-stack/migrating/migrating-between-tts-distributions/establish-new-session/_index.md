---
title: "Migrate Without Persisting Active Session"
description: ""
weight: 2
aliases:
  [
    /getting-started/migrating/migrating-between-tts-distributions/establish-new-session,
  ]
---

This section explains how to migrate end devices from {{% tts %}} Community Edition to {{% tts %}} Cloud without persisting sessions that were established between those devices and {{% tts %}} Community Edition. This is the way to go if you cannot migrate your gateway from {{% tts %}} Community Edition to {{% tts %}} Cloud.

<!--more-->

{{< note >}} Migrating devices without persisting active sessions is the preferred migration method. {{</ note >}}

### Note on temporarily preserving uplink traffic on {{% tts %}} Community Edition

In this section, we consider migrating your devices in cases when you don't want to migrate your gateway from {{% tts %}} Community Edition to {{% tts %}} Cloud, or when your gateway is inaccessible for this migration. In those cases, devices are migrated from {{% tts %}} Community Edition to {{% tts %}} Cloud without persisting their active session, i.e. devices need to establish a new session with {{% tts %}} Cloud in order for a gateway (that wasn't migrated from {{% tts %}} Community Edition) to be able to route traffic from those devices to {{% tts %}} Cloud. More information about this is available in subsections below.

For a new session to be established between device (that's currently connected to {{% tts %}} Community Edition) and {{% tts %}} Cloud, device has to perform a [join procedure]({{< ref "/reference/components/join-server#join-procedure" >}}) to register on {{% tts %}} Cloud. In order not to lose any uplink traffic during this join procedure, we suggest to disable scheduling downlink messages on {{% tts %}} Community Edition Network Server using the following [CLI]({{< ref "/the-things-stack/interact/cli" >}}) command:

```bash
ttn-lw-cli dev set --application-id <app-id> --device-id <device-id> \
    --mac-settings.schedule-downlinks=false
```

When the end device gets triggered to perform a new join on {{% tts %}} Cloud, the uplink traffic will still reach {{% tts %}} Community Edition until device is actually registered on Cloud. Using the command above, we make sure that we disable {{% tts %}} Community Edition Network Server to send Join Accept messages, data downlinks or MAC commands to device, i.e. we make sure that device doesn't get re-registered on {{% tts %}} Community Edition, but registered on {{% tts %}} Cloud.

{{< note >}} The [migration tool]({{< ref "/the-things-stack/migrating/migration-tool" >}}) does this automatically when migrating devices so you don't need to worry about disabling the downlinks of exported devices. {{</ note >}}

Now, you can proceed with migrating your device. Read the instructions below to migrate your OTAA or ABP devices.

When your device is finally migrated, it will be assigned with a DevAddr issued by {{% tts %}} Cloud, so the old session between device and {{% tts %}} Community Edition will no longer exist, i.e. uplinks will no longer reach {{% tts %}} Community Edition, just {{% tts %}} Cloud.

## Migrate OTAA Devices

Migrating an OTAA device without persisting its active session means the device will establish a new session with {{% tts %}} Cloud, i.e. it will have to perform a new join on {{% tts %}} Cloud network after migration. The device will negotiate about network parameters with {{% tts %}} Cloud Network Server, and during that negotiation, the device will be assigned with a new DevAddr from {{% tts %}} Cloud DevAddr block.

Since {{% tts %}} Community Edition and {{% tts %}} Cloud are both connected to Packet Broker, Packet Broker will be able to route your device's traffic to {{% tts %}} Cloud even if your gateway stays connected to {{% tts %}} Community Edition, i.e. you don't have to migrate your gateway to {{% tts %}} Cloud, only your device. However, if you want to migrate your gateway to {{% tts %}} Cloud too, see [Migrating Gateways]({{< ref "/the-things-stack/migrating/gateway-migration" >}}) for instructions.

To migrate your OTAA device from {{% tts %}} Community Edition to {{% tts %}} Cloud without an active session, choose your preferred method and follow the steps described below.

{{< tabs/container "Migration tool" "Console" "CLI">}}

{{< tabs/tab "Migration tool" >}}

For detailed instructions on how to configure the migration tool before exporting your device and how to adjust the following command for migrating multiple devices or whole applications, head over to [Export Devices from {{% tts %}}]({{< ref "/the-things-stack/migrating/migration-tool/export-from-tts" >}}).

To export device using the [migration tool]({{< ref "/the-things-stack/migrating/migration-tool" >}}) without persisting active session, use the `--tts.no-session` flag:

```bash
ttn-lw-migrate device --source tts 'my-device' --tts.no-session > devices.json
```

Next, you need to import the `devices.json` file in your {{% tts %}} Cloud application. See instructions on how to [add end devices in bulk in {{% tts %}}]({{< ref "/devices/adding-devices/adding-devices-in-bulk" >}}). Keep in mind that if you are using the CLI to import devices, you have to configure it to connect to {{% tts %}} Cloud. See [Configuring the CLI]({{< ref "/the-things-stack/interact/cli/configuring-cli" >}}) guide for instructions.

The process of migrating OTAA devices using the migration tool ends here and you can ignore the info below the line.

{{< /tabs/tab >}}

{{< tabs/tab "Console" >}}

Using the Console is convenient only when you have a few devices to migrate. For larger groups of devices, we highly recommend using the [migration tool]({{< ref "/the-things-stack/migrating/migration-tool" >}}) or CLI.

First step is to recreate your device on {{% tts %}} Cloud through the Console. See [Adding Devices]({{< ref "/devices/adding-devices" >}}) for instructions on creating a device. You can reuse the DevEUI, AppEUI/JoinEUI and AppKey values from {{% tts %}} Community Edition. You can also generate new values for these parameters on {{% tts %}} Cloud, but then you will need to re-program your OTAA device using those values.

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

First, configure your CLI to connect to {{% tts %}} Community Edition. See [Configuring the CLI]({{< ref "/the-things-stack/interact/cli/configuring-cli" >}}) guide for instructions. Make sure you also perform a [Login with the CLI]({{< ref "/the-things-stack/interact/cli/login" >}}) to {{% tts %}} Community Edition.

{{< note >}} We recommend to use the latest version of the CLI. Instructions for upgrading the CLI if you already have it installed are available in the [Installing the CLI]({{< ref "/the-things-stack/interact/cli/installing-cli" >}}) guide. {{</ note >}}

Now, use the CLI to export your device's description from {{% tts %}} Community Edition:

```bash
ttn-lw-cli end-devices get --application-id <app-id> --device-id <device-id> \
    --name \
    --description \
    --lorawan-version \
    --lorawan-phy-version \
    --frequency-plan-id \
    --supports-join \
    --root-keys \
    --mac-settings > device-description.json
```

The command above will export your device's description to the `device-description.json` file in the current folder. Open the file with a text editor and remove the following fields: `join_server_address`, `network_server_address` and `application_server_address`.

Next, you need to import the `device-description.json` file in your {{% tts %}} Cloud application. See instructions on how to [add end devices in bulk in {{% tts %}}]({{< ref "/devices/adding-devices/adding-devices-in-bulk" >}}). Keep in mind that if you are using the CLI to import devices, you first have to re-configure it to connect to {{% tts %}} Cloud. Again, see [Configuring the CLI]({{< ref "/the-things-stack/interact/cli/configuring-cli" >}}) guide for instructions.

{{< /tabs/tab >}}

{{< /tabs/container >}}

---

When your device is registered in {{% tts %}} Cloud, you need to prevent it from re-joining {{% tts %}} Community Edition network. To do so, you can change your OTAA device's AppKey on {{% tts %}} Community Edition (under device's **General settings &#8594; Join Settings &#8594; AppKey**) or completely delete your device from {{% tts %}} Community Edition.

Finally, your device needs to perform a new join on {{% tts %}} Cloud network. Some OTAA devices will perform an automatic re-join after they are deleted from {{% tts %}} Community Edition, but some devices need to be triggered, e.g. by sending a downlink to it, by power cycling it, etc. You should see a Join Request from your device coming in {{% tts %}} Cloud.

After joining {{% tts %}} Cloud network, you will see uplinks arriving from your device.

## Migrate ABP Devices

Migrating an ABP device without persisting its active session means its session and MAC state parameters will be reset, or the device will be completely re-programmed with new session parameters.

{{< note >}} For ABP devices, we advise to re-program the device using session parameters that are newly generated on {{% tts %}} Cloud, if possible. For devices that can be re-programmed, it is also recommended to change their activation method from ABP to OTAA. {{</ note >}}

Let's first assume that you are able to re-program your ABP device with new DevAddr, NwkSKey and AppSKey issued by {{% tts %}} Cloud.

Since {{% tts %}} Community Edition and {{% tts %}} Cloud are both connected to Packet Broker, and your ABP device will be re-programmed with a new DevAddr from {{% tts %}} Cloud DevAddr block, Packet Broker will be able to route your device's traffic to {{% tts %}} Cloud even if your gateway stays connected to {{% tts %}} Community Edition, i.e. you don't have to migrate your gateway to {{% tts %}} Cloud, only your device. However, if you want to migrate your gateway to {{% tts %}} Cloud too, see [Migrating Gateways]({{< ref "/the-things-stack/migrating/gateway-migration" >}}) for instructions.

The process of migrating your ABP device from {{% tts %}} Community Edition to {{% tts %}} Cloud without its active session by re-programming it is the most straightforward if you use the {{% tts %}} Console.

First create a new ABP device on {{% tts %}} Cloud. See [Adding Devices]({{< ref "/devices/adding-devices" >}}) for instructions on creating a device. Generate new DevAddr, AppSKey and NwkSKey values while creating the device.

Now re-program your ABP device with newly created DevAddr, AppSKey and NwkSKey values from {{% tts %}} Cloud. You should immediately see uplinks arriving from your device to {{% tts %}} Cloud.

However, if you don't want to re-program your device, i.e. you want to keep the DevAddr, AppSKey and NwkSKey from {{% tts %}} Community Edition, read the instructions below.

---

Now let's assume that you want to migrate your ABP device to {{% tts %}} Cloud in such manner that it keeps its DevAddr, NwkSKey and AppSKey it was programmed with upon its registration on {{% tts %}} Community Edition network.

Note that {{% tts %}} Community Edition and {{% tts %}} Cloud use different DevAddr blocks. Since Packet Broker routes traffic according to the DevAddr blocks, in this case it won't be able to route your device's traffic properly, because of the Community Edition-related DevAddr. To successfully migrate your ABP device while keeping these parameters, you also need to migrate your gateway to {{% tts %}} Cloud. See instructions for [Migrating Gateways]({{< ref "/the-things-stack/migrating/gateway-migration" >}}). The ideal scenario would be to migrate your gateway and your device simultaneously.

To migrate your ABP device with preserving its DevAddr, NwkSKey and AppSKey, from {{% tts %}} Community Edition to {{% tts %}} Cloud, follow the steps described below. Keep in mind that the existing session will be violated because you will need to reset frame counters for your device, hence we refer to this as migrating without an active session.

{{< tabs/container "Migration tool" "Console" "CLI">}}

{{< tabs/tab "Migration tool" >}}

For detailed instructions on how to configure the migration tool before exporting your device and how to adjust the following commands for migrating multiple devices or whole applications, head over to [Export Devices from {{% tts %}}]({{< ref "/the-things-stack/migrating/migration-tool/export-from-tts" >}}).

To export devices using the [migration tool]({{< ref "/the-things-stack/migrating/migration-tool" >}}) without persisting active session, use the `--tts.no-session` flag:

```bash
ttn-lw-migrate device --source tts 'my-device' \
    --tts.no-session > devices.json
```

Next, you need to import the `devices.json` file in your {{% tts %}} Cloud application. See instructions on how to [add end devices in bulk in {{% tts %}}]({{< ref "/devices/adding-devices/adding-devices-in-bulk" >}}). Keep in mind that if you are using the CLI to import devices, you first have to configure it to connect to {{% tts %}} Cloud. See [Configuring the CLI]({{< ref "/the-things-stack/interact/cli/configuring-cli" >}}) guide for instructions.

You will also need to reset your ABP device.

When your device is finally registered in {{% tts %}} Cloud, you need to completely delete it from {{% tts %}} Community Edition network to prevent conflicts. You can do this by running the following command with `--tts.delete-source-device` flag:

```bash
ttn-lw-migrate device --source tts 'my-device' \
    --tts.delete-source-device
```

{{</ tabs/tab >}}

{{< tabs/tab "Console" >}}

Using the Console is covenient only when you have a few devices to migrate. For larger groups of devices, we highly recommend using the migration tool or the CLI.

First, recreate your device on {{% tts %}} Cloud. See [Adding Devices]({{< ref "/devices/adding-devices" >}}) for instructions on creating a device. Reuse the DevEUI, DevAddr, AppSKey and NwkSKey values from {{% tts %}} Community Edition.

Navigate to **General settings &#8594; Network Layer &#8594; Advanced MAC settings** and enable the **Resets frame counters** option.

When your device is registered in {{% tts %}} Cloud, you need to completely delete it from {{% tts %}} Community Edition network to prevent conflicts. You will also need to reset your ABP device.

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

First, configure your CLI to connect to {{% tts %}} Community Edition. See [Configuring the CLI]({{< ref "/the-things-stack/interact/cli/configuring-cli" >}}) guide for instructions. Make sure you also perform a [Login with the CLI]({{< ref "/the-things-stack/interact/cli/login" >}}) to {{% tts %}} Community Edition.

{{< note >}} We recommend to use the latest version of the CLI. Instructions for upgrading the CLI if you already have it installed are available in the [Installing the CLI]({{< ref "/the-things-stack/interact/cli/installing-cli" >}}) guide. {{</ note >}}

Now, use the CLI to export your device's description from {{% tts %}} Community Edition:

```bash
ttn-lw-cli end-devices get --application-id <app-id> --device-id <device-id> \
    --name
    --description
    --lorawan-version \
    --lorawan-phy-version \
    --frequency-plan-id \
    --supports-join \
    --root-keys \
    --mac-settings \
    --session.dev-addr \
    --session.keys > device-description.json
```

The command above will export your device's description to the `device-description.json` file in the current folder. Open the file with a text editor and remove the following fields: `join_server_address`, `network_server_address` and `application_server_address`. Also, set the `mac-settings.resets-f-cnt` field value to `true`.

Next, you need to import the `device-description.json` file in your {{% tts %}} Cloud application. See instructions on how to [add end devices in bulk in {{% tts %}}]({{< ref "/devices/adding-devices/adding-devices-in-bulk" >}}). Keep in mind that if you are using the CLI to import devices, you first have to re-configure it to connect to {{% tts %}} Cloud. Again, see [Configuring the CLI]({{< ref "/the-things-stack/interact/cli/configuring-cli" >}}) guide for instructions.

When your device is registered in {{% tts %}} Cloud, you need to completely delete it from {{% tts %}} Community Edition network to prevent conflicts. You will also need to reset your ABP device.

{{< /tabs/tab >}}

{{< /tabs/container >}}

If you also migrated your gateway, you will immediately see uplinks arriving from your device.

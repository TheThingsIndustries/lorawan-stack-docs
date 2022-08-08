---
title: "Migrate Without Persisting Active Session"
description: ""
---

This section explains how to migrate end devices from {{% tts %}} Community Edition to {{% tts %}} Cloud without persisting sessions that were established between those devices and {{% tts %}}. 

<!--more-->

### Note on temporarily preserving uplink traffic on {{% tts %}} Community Edition

In this section, we consider migrating your devices in cases when you don't want to migrate your gateway from {{% tts %}} Community Edition to {{% tts %}} Cloud, or when your gateway is inaccessible for this migration. In those cases, devices are migrated from {{% tts %}} Community Edition to {{% tts %}} Cloud without persisting their active session, i.e. devices need to establish a new session with {{% tts %}} Cloud. More information about this will be available in subsections below.

For a new session to be established between device (that's connected to {{% tts %}} Community Edition) and {{% tts %}} Cloud, device has to perform a [join procedure]({{< ref "/reference/components/join-server#join-procedure" >}}) to register on {{% tts %}} Cloud. In order not to lose any uplink traffic during this join procedure, we suggest to disable scheduling downlink messages on {{% tts %}} Community Edition Network Server using the following [CLI]({{< ref "/getting-started/cli" >}}) command:

```bash
ttn-lw-cli dev set --application-id <app-id> --device-id <device-id> \
    --mac-settings.schedule-downlinks=false
```

This way, {{% tts %}} Community Edition Network Server will not be able to send Join Accept messages, data downlinks or MAC commands anymore. The end device will be triggered to perform a new join on {{% tts %}} Cloud, but the uplink traffic will still reach  {{% tts %}} Community Edition before device is actually registered on Cloud.

Now, you can proceed with migrating your device. Read the instructions below for your specific device.

When your device is finally migrated, it will be assigned with a DevAddr issued by {{% tts %}} Cloud, so the old session between device and {{% tts %}} Community Edition will no longer exist, i.e. uplinks will no longer reach {{% tts %}} Community Edition, just {{% tts %}} Cloud.

## OTAA

Migrating an OTAA device without persisting its active session means the device will establish a new session with {{% tts %}} Cloud, i.e. it will have to perform a new join on {{% tts %}} Cloud network after migration. The device will negotiate about network parameters with {{% tts %}} Cloud Network Server, and during that negotiation, the device will be assigned with a new DevAddr from {{% tts %}} Cloud DevAddr block.

Since {{% tts %}} Community Edition and {{% tts %}} Cloud are both connected to Packet Broker, Packet Broker will be able to route your device's traffic to {{% tts %}} Cloud even if your gateway stays connected to {{% tts %}} Community Edition, i.e. you don't have to migrate your gateway to {{% tts %}} Cloud, only your device. However, if you want to migrate your gateway to {{% tts %}} Cloud too, see [Migrating Gateways]({{< ref "/getting-started/migrating/gateway-migration" >}}) for instructions.

To migrate your OTAA device from {{% tts %}} Community Edition to {{% tts %}} Cloud without an active session, follow the steps described below.

{{< tabs/container "Console" "CLI">}}

{{< tabs/tab "Console" >}}

Using the Console is covenient only when you have a few devices to migrate. For larger groups of devices, we recommend using the CLI or the migration tool. Migration tool support will be available soon.

Recreate your device on {{% tts %}} Cloud. See [Adding Devices]({{< ref "/devices/adding-devices" >}}) for instructions on creating a device. You can reuse the DevEUI, AppEUI/JoinEUI and AppKey values from {{% tts %}} Community Edition. You can also generate new values for these parameters on {{% tts %}} Cloud, but then you will need to re-program your OTAA device using those values.

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

First, configure your CLI to connect to {{% tts %}} Community Edition. See [Configuring the CLI]({{< ref "/getting-started/cli/configuring-cli" >}}) guide for instructions. Make sure you also perform a [Login with the CLI]({{< ref "/getting-started/cli/login" >}}) to {{% tts %}} Community Edition.

{{< note >}} We recommend to use the latest version of the CLI. Instructions for upgrading the CLI if you already have it installed are available in the [Installing the CLI]({{< ref "/getting-started/cli/login" >}}) guide. {{</ note >}}

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

Next, you need to import the `device-description.json` file in your {{% tts %}} Cloud application. See instructions on how to [Import End Devices in {{% tts %}}]({{< ref "/getting-started/migrating/import-devices" >}}). Keep in mind that if you are using the CLI to import devices, you first have to re-configure it to connect to {{% tts %}} Cloud.

{{< /tabs/tab >}}

{{< /tabs/container >}}

When your device is registered in {{% tts %}} Cloud, you need to prevent it from re-joining {{% tts %}} Community Edition network. To do so, you can change your OTAA device's AppKey on {{% tts %}} Community Edition (under device's **General settings &#8594; Join Settings &#8594; AppKey**) or completely delete your device from {{% tts %}} Community Edition.

Finally, your device needs to perform a new join on {{% tts %}} Cloud network. Some OTAA devices will perform an automatic re-join after they are deleted from {{% tts %}} Community Edition, but some devices need to be triggered, e.g. by sending a downlink to it, by power cycling it, etc. You should see a Join Request from your device coming in {{% tts %}} Cloud.

After joining {{% tts %}} Cloud network, you will see uplinks arriving from your device.

## ABP

Migrating an ABP device without persisting its active session means its session and MAC state parameters will be reset, or the device will be completely re-programmed with new session parameters.

{{< note >}} Migrating devices without persisting active sessions is the preferred migration method. For ABP devices, we also advise to re-program the device using session parameters generated on {{% tts %}} Cloud, if possible. For devices that can be re-programmed, it is also recommended to change their activation method from ABP to OTAA. {{</ note >}}

Let's first assume that you are able to re-program your ABP device with new DevAddr, NwkSKey and AppSKey issued by {{% tts %}} Cloud.

Since {{% tts %}} Community Edition and {{% tts %}} Cloud are both connected to Packet Broker, and your ABP device will be re-programmed with a new DevAddr from {{% tts %}} Cloud DevAddr block, Packet Broker will be able to route your device's traffic to {{% tts %}} Cloud even if your gateway stays connected to {{% tts %}} Community Edition, i.e. you don't have to migrate your gateway to {{% tts %}} Cloud, only your device. However, if you want to migrate your gateway to {{% tts %}} Cloud too, see [Migrating Gateways]({{< ref "/getting-started/migrating/gateway-migration" >}}) for instructions.

The process of migrating your ABP device from {{% tts %}} Community Edition to {{% tts %}} Cloud without its active session and by re-programming it is the most straightforward if you use the {{% tts %}} Console.

Create a new ABP device on {{% tts %}} Cloud. See [Adding Devices]({{< ref "/devices/adding-devices" >}}) for instructions on creating a device. Generate new DevAddr, AppSKey and NwkSKey values while creating the device.

Now re-program your ABP device with newly created DevAddr, AppSKey and NwkSKey values from {{% tts %}} Cloud. You should immediately see uplinks arriving from your device to {{% tts %}} Cloud.

However, if you don't want to re-program your device, i.e. you want to keep the DevAddr, AppSKey and NwkSKey from {{% tts %}} Community Edition, read the instructions below.

---

Now let's assume that you want to migrate your ABP device to {{% tts %}} Cloud in such manner that it keeps its DevAddr, NwkSKey and AppSKey it was programmed with upon its registration on {{% tts %}} Community Edition network.

Note that {{% tts %}} Community Edition and {{% tts %}} Cloud use different DevAddr blocks. Since Packet Broker routes traffic according to the DevAddr blocks, in this case it won't be able to route your device's traffic properly, because of the Community Edition-related DevAddr. To successfully migrate your ABP device while keeping these parameters, you also need to migrate your gateway to {{% tts %}} Cloud. See instructions for [Migrating Gateways]({{< ref "/getting-started/migrating/gateway-migration" >}}). The ideal scenario would be to migrate your gateway and your device simultaneously.

To migrate your ABP device with preserving its DevAddr, NwkSKey and AppSKey, from {{% tts %}} Community Edition to {{% tts %}} Cloud, follow the steps described below. Keep in mind that the existing session will be violated because you will need to reset frame counters for your device, hence we refer to this as migrating without an active session.

{{< tabs/container "Console" "CLI">}}

{{< tabs/tab "Console" >}}

Using the Console is covenient only when you have a few devices to migrate. For larger groups of devices, we recommend using the CLI or the migration tool. Migration tool support will be available soon.

Recreate your device on {{% tts %}} Cloud. See [Adding Devices]({{< ref "/devices/adding-devices" >}}) for instructions on creating a device. Reuse the DevEUI, DevAddr, AppSKey and NwkSKey values from {{% tts %}} Community Edition.

Navigate to **General settings &#8594; Network Layer &#8594; Advanced MAC settings** and enable the **Resets frame counters** option.

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

First, configure your CLI to connect to {{% tts %}} Community Edition. See [Configuring the CLI]({{< ref "/getting-started/cli/configuring-cli" >}}) guide for instructions. Make sure you also perform a [Login with the CLI]({{< ref "/getting-started/cli/login" >}}) to {{% tts %}} Community Edition.

{{< note >}} We recommend to use the latest version of the CLI. Instructions for upgrading the CLI if you already have it installed are available in the [Installing the CLI]({{< ref "/getting-started/cli/login" >}}) guide. {{</ note >}}

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

Next, you need to import the `device-description.json` file in your {{% tts %}} Cloud application. See instructions on how to [Import End Devices in {{% tts %}}]({{< ref "/getting-started/migrating/import-devices" >}}). Keep in mind that if you are using the CLI to import devices, you first have to re-configure it to connect to {{% tts %}} Cloud.

{{< /tabs/tab >}}

{{< /tabs/container >}}

When your device is registered in {{% tts %}} Cloud, you need to completely delete it from {{% tts %}} Community Edition network to prevent conflicts. You will also need to reset your ABP device.

If you also migrated your gateway, you will immediately see uplinks arriving from your device.

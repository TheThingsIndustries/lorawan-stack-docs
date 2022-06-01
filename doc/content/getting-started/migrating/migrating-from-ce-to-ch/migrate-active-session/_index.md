---
title: "Migrate Active Device Session"
description: ""
---

This section explains how to migrate end devices from {{% tts %}} Community Edition to {{% tts %}} Cloud while persisting sessions that were already established between those devices and {{% tts %}}. 

<!--more-->

Since migrating an active session implies migrating a large number of parameters that cannot be configured manually, it is possible to do it only using the CLI or the migration tool. Migration tool support will soon be available.

{{< note >}} Migrating devices without persisting active sessions is the preferred migration method. {{</ note >}}

Read the instructions below for migrating your specific device type.

## Note on Gateway Migration

Even though they are both connected to [Packet Broker]({{< ref "/getting-started/packet-broker" >}}), {{% tts %}} Community Edition and {{% tts %}} Cloud use different DevAddr blocks.

When an active device session is migrated from {{% tts %}} Community Edition to {{% tts %}} Cloud, the DevAddr that the device was assigned with (OTAA) or programmed with (ABP) when it joined {{% tts %}} Community Edition will be preserved. Since Packet Broker routes traffic according to the DevAddr blocks, in case of migrating an active session to {{% tts %}} Cloud it won't be able to route your device's traffic properly, because your device still has its Community Edition-related DevAddr.

Hence, to successfully migrate an active device session from {{% tts %}} Community Edition to {{% tts %}} Cloud, you also need to migrate your gateway to {{% tts %}} Cloud. See instructions for [Migrating Gateways]({{< ref "/getting-started/migrating/gateway-migration" >}}). The ideal scenario would be to migrate your gateway and your device simultaneously, in order to not loose any traffic.

## OTAA

Migrating an active OTAA device session means the OTAA device won't have to perform a join on {{% tts %}} Cloud network after its migration, i.e. the existing session that was established between the device and {{% tts %}} Community Edition will just be transferred to {{% tts %}} Cloud.

To migrate active OTAA device sessions from {{% tts %}} Community Edition to {{% tts %}} Cloud, follow the steps described below.

<!-- placeholder for migration tool info -->

First, configure your CLI to connect to {{% tts %}} Community Edition. See [Configuring the CLI]({{< ref "/getting-started/cli/configuring-cli" >}}) guide for instructions. Make sure you also perform a [Login with the CLI]({{< ref "/getting-started/cli/login" >}}) to {{% tts %}} Community Edition.

{{< note >}} We recommend to use the latest version of the CLI. Instructions for upgrading the CLI if you already have it installed are available in the [Installing the CLI]({{< ref "/getting-started/cli/login" >}}) guide. {{</ note >}}

Now, use the CLI to export your device's session from {{% tts %}} Community Edition:

```bash
ttn-lw-cli end-devices get --application-id <app-id> --device-id <device-id> \
    --name \
    --description \
    --lorawan-version \
    --lorawan-phy-version \
    --frequency-plan-id \
    --supports-join \
    --root-keys \
    --mac-settings \
    --mac-state \
    --session > device-session.json
```

The command above will export your device's session to the `device-session.json` file in the current folder. Open the file with a text editor and remove the following fields: `join_server_address`, `network_server_address` and `application_server_address`.

Keep reading below the line at the end of the [ABP]({{< ref "/getting-started/migrating/migrating-from-ce-to-ch/migrate-active-session#abp" >}}) section.

## ABP

Migrating an active ABP device session means the existing session that was established between the ABP device and {{% tts %}} Community Edition will just be transferred to {{% tts %}} Cloud.

To migrate active ABP device sessions from {{% tts %}} Community Edition to {{% tts %}} Cloud, follow the steps described below.

<!-- placeholder for migration tool info -->

First, configure your CLI to connect to {{% tts %}} Community Edition. See [Configuring the CLI]({{< ref "/getting-started/cli/configuring-cli" >}}) guide for instructions. Make sure you also perform a [Login with the CLI]({{< ref "/getting-started/cli/login" >}}) to {{% tts %}} Community Edition.

{{< note >}} We recommend to use the latest version of the CLI. Instructions for upgrading the CLI if you already have it installed are available in the [Installing the CLI]({{< ref "/getting-started/cli/login" >}}) guide. {{</ note >}}

Now, use the CLI to export your device's session from {{% tts %}} Community Edition:

```bash
ttn-lw-cli end-devices get --application-id <app-id> --device-id <device-id> \
    --name \
    --description \
    --lorawan-version \
    --lorawan-phy-version \
    --frequency-plan-id \
    --supports-join \
    --mac-settings \
    --mac-state \
    --session > device-session.json
```

The command above will export your device's session to the `device-session.json` file in the current folder. Open the file with a text editor and remove the following fields: `join_server_address`, `network_server_address` and `application_server_address`.

---

Before importing your device's session in {{% tts %}} Cloud, you need to completely delete your device from {{% tts %}} Community Edition to prevent conflicts.

Next, you need to import the JSON file generated above in your {{% tts %}} Cloud application. See instructions on how to [Import End Devices in {{% tts %}}]({{< ref "/getting-started/migrating/import-devices" >}}). Keep in mind that if you are using the CLI for import, you first have to re-configure it to connect to {{% tts %}} Cloud.

When your device's session is imported in {{% tts %}} Cloud, assuming that your gateway is also migrated to {{% tts %}} Cloud, you will see uplinks arriving from your device.
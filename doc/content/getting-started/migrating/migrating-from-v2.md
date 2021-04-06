---
title: "Migrating from The Things Network Stack V2"
description: ""
weight: 3
aliases: ["/getting-started/migrating-from-v2", "/getting-started/migrating-from-v2/configure-ttnctl", "/getting-started/migrating-from-v2/export-v2-devices"]
---

This section documents the process of migrating end devices from {{% ttnv2 %}} to {{% tts %}}.

<!--more-->

For a breakdown of differences between {{% ttnv2 %}} and {{% tts %}}, see the [Major Changes]({{< relref "major-changes" >}}) section.

## Suggested Migration Process

**First**: Update your integrations to support the {{% tts %}} [Data Format]({{% ref "/reference/data-formats" %}}). If you are using [Payload Formatters]({{% ref "/integrations/payload-formatters" %}}), make sure to set them correctly from the Application settings page.

**Second**: Follow this guide in order to migrate a single end device (and gateway, if needed) to {{% tts %}}. Continue by gradually migrating your end devices in small batches. Avoid migrating production workloads before you are certain that they will work as expected.

**Finally**: Once you are confident that your end devices are working properly, migrate the rest of your devices and gateways to {{% tts %}}.

## Migrating Active Sessions {{< distributions "Cloud" >}}

When migrating devices from the public {{< ttnv2 >}} to {{< tts >}} Cloud, you may choose to transfer the active device sessions as well, which means that your devices will continue to work with {{% tts %}} without rejoining.

When migrating from a private {{% ttnv2 %}}, devices that are outside of the DevAddr address block supported by {{% tts %}} Cloud will have to rejoin the network, otherwise {{% tts %}} will be unable to route their uplink and downlink traffic.

{{< warning >}} Migrating device sessions will be available in {{% tts %}} `v3.12` release. {{</ warning >}}

## Pre-requisites

1. User account in {{% ttnv2 %}}.
2. User account in {{% tts %}} V3.
3. Install [LoRaWAN stack migrate](#ttn-lw-migrate-tool) tool.

## `ttn-lw-migrate` Tool

End devices and applications can easily be migrated from {{% ttnv2 %}} to {{% tts %}} with the [`ttn-lw-migrate`](https://github.com/TheThingsNetwork/lorawan-stack-migrate) tool. This tool is used for exporting end devices and applications to a [JSON file]({{< ref "getting-started/migrating/device-json.md" >}}) containing their description. This file can later be imported in {{% tts %}} as described in the [Import End Devices in The Things Stack]({{< ref "getting-started/migrating/import-devices.md" >}}) section.

### Installation
Binaries are available on [GitHub](https://github.com/TheThingsNetwork/lorawan-stack-migrate/releases). Download the latest version asset according to your OS.

### Configuration

Configure the environment with the following variables modified according to your setup:

```bash
$ export TTNV2_APP_ID="my-ttn-app"                    # TTN App ID
$ export TTNV2_APP_ACCESS_KEY="ttn-account-v2.a..."   # TTN App Access Key (needs `devices` permissions)
$ export FREQUENCY_PLAN_ID="EU_863_870_TTN"           # Frequency Plan ID for exported devices
```

See [Frequency Plans]({{< ref src="/reference/frequency-plans" >}}) for the list of frequency plans available on {{% tts %}}. Make sure to specify the correct Frequency Plan ID. For example, the ID `EU_863_870_TTN` corresponds to the **Europe 863-870 MHz (SF9 for RX2 - recommended)** frequency plan.

{{< note >}} For Windows OS, while configuring the app_id, app_access_key, frequency_plan_id replace `export` with `set`  and remove double-quotes as shown below. {{</ note >}}
```bash
$ set TTNV2_APP_ID=my-ttn-app                    # TTN App ID
$ set TTNV2_APP_ACCESS_KEY=ttn-account-v2.a...   # TTN App Access Key (needs `devices` permissions)
$ set FREQUENCY_PLAN_ID=EU_863_870_TTN           # Frequency Plan ID for exported devices
```

### Configuration for {{% ttnv2 %}} private deployments

Private {{% ttnv2 %}} deployments are also supported, and require extra configuration. See `ttn-lw-migrate device --help` for more details. For most cases, it is enough to configure `ttn-lw-migrate` to use the Discovery Server of your installation, by setting the following environment variables:

```bash
$ export TTNV2_DISCOVERY_SERVER_ADDRESS="<instance-id>.thethings.industries:1900"
```

{{< note >}} If the Discovery Server is not using TLS, you will need to use the `--ttnv2.discovery-server-insecure` flag when running the `ttn-lw-migrate` commands below. {{</ note >}}

## Export End Devices from {{% ttnv2 %}}

Migration from {{% ttnv2 %}} to {{% tts %}} is one-way. LoRaWAN devices may only be handled by one Network Server at a time. The commands below will clear both the root keys and the session keys from {{% ttnv2 %}} after the devices are exported. **This means that the devices will no longer work in {{% ttnv2 %}}.**

Execute commands with the `--dry-run` flag first to test exporting the devices without deleting the device keys from {{% ttnv2 %}}. When you are ready to migrate, be sure to export the devices **without** the `--dry-run` flag to remove the device keys from {{% ttnv2 %}}, as having the session keys present on both Network Servers is not supported, and will most likely lead to traffic issues and/or a corrupted device MAC state.

In order to export a single device, use the following command. The device with ID `mydevice` will exported and saved to `device.json`.

```bash
# dry run first, verify that no errors occur
$ ttn-lw-migrate devices --dry-run --verbose --source ttnv2 "mydevice" > devices.json
# export device and delete keys from {{% ttnv2 %}}
$ ttn-lw-migrate device --source ttnv2 "mydevice" > devices.json
```

{{< warning >}} The export process will clear the device root keys (**AppKey**) and session (**AppSKey**, **NwkSKey**, **DevAddr**, **FCntUp** and **FCntDown**) from {{% ttnv2 %}} by default. You can disable this by using the  `--ttnv2.with-session=false` flag. {{</ warning >}}

{{< note >}} The export process will halt if any error occurs. {{</ note >}}

In order to export a large number of devices, create a file named `device_ids.txt` with one device ID per line:

```
mydevice
otherdevice
device3
device4
device5
```

And then export with:

```bash
# dry run first, verify that no errors occur
$ ttn-lw-migrate devices --verbose --dry-run --source ttnv2 < device_ids.txt > devices.json
# export devices
$ ttn-lw-migrate devices --source ttnv2 < device_ids.txt > devices.json
```

Alternatively, you can export all the end devices associated with your application, and save them in `all-devices.json`.

```bash
# dry run first, verify that no errors occur
$ ttn-lw-migrate application --verbose --dry-run --source ttnv2 "my-ttn-app" > all-devices.json
# export devices
$ ttn-lw-migrate application --source ttnv2 "my-ttn-app" > all-devices.json
```

{{< note >}} In {{% ttnv2 %}}, underscores ( _ ) are allowed in the end device ID but not in {{% tts %}}. You can refer to [ID And EUI Constraints Document]({{< ref "reference/id-eui-constraints" >}}) for more information. The `ttn-lw-migrate` tool replaces an underscore with a dash ( - ) automagically while exporting the devices. {{</ note >}}

After exporting the end devices in to a json file you can refer to [Import End Devices Document]({{< ref "getting-started/migrating/import-devices.md" >}}) in {{% tts %}} for next steps.

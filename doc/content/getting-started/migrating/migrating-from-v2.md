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

**First**: Update applications to support the {{% tts %}} data format. If you are using payload formatters, make sure to set them correctly from the Application settings page.

**Second**: Follow this guide in order to migrate a single end device (and gateway, if needed) to {{% tts %}}. Continue by gradually migrating your end devices in small batches. Avoid migrating production workloads before you are certain that they will work as expected.

**Finally**: Once you are confident that your end devices are working properly, migrate the rest of your devices and gateways to {{% tts %}}.

## Configure V2 CLI

You will need to use the latest version of `ttnctl`, the CLI for {{% ttnv2 %}}. Follow the [instructions from The Things Network documentation][1]. An overview is given below:

Download `ttnctl` [for your operating system][2].

Update to the latest version:

```bash
$ ttnctl selfupdate
```

Go to [https://account.thethingsnetwork.org][3] and click [ttnctl access code][4].

Use the returned code to login from the CLI with:

```bash
$ ttnctl user login "t9XPTwJl6shYSJSJxQ1QdATbs4u32D4Ib813-fO9Xlk"
```

## Export End Devices from V2

In this step, the end devices from {{% ttnv2 %}} will be exported in a JSON format that can then be parsed and imported by {{% tts %}}.

The exported end devices contain the device name, description, location data, activation mode (ABP/OTAA), root keys and the AppEUI. They also contain the session keys, so your OTAA devices can simply keep working with {{% tts %}}.

To get started, select the **AppID** and **AppEUI** of the application you want to export your end devices from:

```bash
$ ttnctl applications select
```

After selecting the application, make sure that you can list the available end devices:

```bash
$ ttnctl devices list
```

### Exporting Devices

In order to export a single device, use the following command. The device will be saved to `device.json`.

```bash
$ ttnctl devices export "device-id" --frequency-plan-id EU_863_870 > device.json
```

Alternatively, you can export all the end devices with a single command and save them in `all-devices.json`.

```bash
$ ttnctl devices export-all --frequency-plan-id EU_863_870 > all-devices.json
```

>**Note:** Change `EU_863_870` frequency plan from the command above to the frequency plan corresponding to your region. See [Frequency Plans]({{< ref "/reference/frequency-plans" >}}) for a list of supported Frequency Plans and their respective IDs.

>**Note:** Keep in mind that an end device can only be registered in one Network Server at a time. After importing an end device to {{% tts %}}, you should remove it from {{% ttnv2 %}}. For OTAA devices, it is enough to simply change the AppKey, so the device can no longer join but the existing session is preserved. Next time the device joins, the activation will be handled by {{% tts %}}.

### Disable Exported End Devices on V2

After exporting, make sure to clear the AppKey of your OTAA devices. This can be achieved with the following command:

```bash
$ ttnctl devices convert-to-abp "device-id" --save-to-attribute "original-app-key"
```

There is also a convenience command to clear all of your devices at once:

```bash
$ ttnctl devices convert-all-to-abp --save-to-attribute "original-app-key"
```

>**Note:** The AppKey of each device will be printed on the standard output, and stored as a device attribute (with name `original-app-key`). You can retrieve the device attributes with `ttnctl devices info "device-id"`.

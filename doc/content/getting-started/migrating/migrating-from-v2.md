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

## Configure ttn-lw-migrate

End devices and applications can easily be migrated from {{% ttnv2 %}} to {{% tts %}} with the [`ttn-lw-migrate`](https://github.com/TheThingsNetwork/lorawan-stack-migrate) tool. This tool is used for exporting end devices and applications to a [JSON file]({{< ref "getting-started/migrating/device-json.md" >}}) containing their description. This file can later be imported in {{% tts %}} as described in the [Import End Devices in The Things Stack]({{< ref "getting-started/migrating/import-devices.md" >}}) section.

First, configure the environment with the following variables modified according to your setup:

```bash
$ export TTNV2_APP_ID="my-ttn-app"                    # TTN App ID
$ export TTNV2_APP_ACCESS_KEY="ttn-account-v2.a..."   # TTN App Access Key (needs `devices` permissions)
$ export FREQUENCY_PLAN_ID="EU_863_870_TTN"           # Frequency Plan ID for exported devices
```

See [Frequency Plans]({{< ref src="/reference/frequency-plans" >}}) for the list of frequency plans available on {{% tts %}}. Make sure to specify the correct Frequency Plan ID. For example, the ID `EU_863_870_TTN` corresponds to the **Europe 863-870 MHz (SF9 for RX2 - recommended)** frequency plan.

### Private {{% ttnv2 %}} deployments

Private {{% ttnv2 %}} deployments are also supported, and require extra configuration. See `ttn-lw-migrate device --help` for more details. For most cases, it is enough to configure ttn-lw-migrate to use the Discovery Server of your installation, by setting the following environment variables:

```bash
$ export TTNV2_DISCOVERY_SERVER_ADDRESS="discovery.<tenant>.thethings.industries:1900"
```

>**Note:**: If the Discovery Server is not using TLS, you will need to use the `--ttnv2.discovery-server-insecure` flag when running the `ttn-lw-migrate` commands below.

## Export End Devices from {{% ttnv2 %}}

In order to export a single device, use the following command. The device with ID `mydevice` will exported and saved to `device.json`.

```bash
$ ttn-lw-migrate devices --source ttnv2 "mydevice" > devices.json
```

>**Notes:**:
>- Payload formatters are not exported. See [Payload Formatters](https://thethingsstack.io/integrations/payload-formatters/).
>- Active device sessions are exported by default. You can disable this by using the `--ttnv2.with-session=false` flag. It is recommended that you do not export session keys for devices that can instead re-join on The Things Stack.

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
$ ttn-lw-migrate devices --source ttnv2 < device_ids.txt > devices.json
```

Alternatively, you can export all the end devices associated with your application, and save them in `all-devices.json`.

```bash
$ ttn-lw-migrate application --source ttnv2 "my-ttn-app" > all-devices.json
```

>**Note:** Keep in mind that an end device can only be registered in one Network Server at a time. After importing an end device to {{% tts %}}, you should remove it from {{% ttnv2 %}}. For OTAA devices, it is enough to simply change the AppKey, so the device can no longer join but the existing session is preserved. Next time the device joins, the activation will be handled by {{% tts %}}.

## Disable Exported End Devices on V2

It is important that you unset the `AppKey` property of your exported devices, so that they are able to join properly on {{% tts %}}. This can be done from
the {{% ttnv2 %}} Console. If you are migrating a large number of devices, you can automate the process with `ttnctl`, the CLI for {{% ttnv2 %}}.

### Configure V2 CLI

For using `ttnctl` with **The Things Network**, follow [these instructions](https://www.thethingsnetwork.org/docs/network/cli/quick-start.html).

When using a **private V2 network server**, provided by The Things Industries, go through the following steps:

1. [Download](https://www.thethingsnetwork.org/docs/network/cli/quick-start.html) `ttnctl` for your operating system.
2. Update `ttnctl` to the latest version by running:
    ```bash
    $ ttnctl selfupdate
    ```
3. Create a file called `.ttnctl.yml` in your home directory and fill it with the following information:
    ```
    auth-server: https://account.<domain_id>.thethings.industries
    allow-insecure: false
    data: /home/<user_name>/.ttnctl
    router-id: <domain_id>-router
    mqtt-address: <domain_id>.thethings.industries:1883
    handler-id: <domain_id>-handler
    discovery-address: <domain_id>.thethings.industries:1900
    ```

    **For windows users** make sure to use the `--config` flag with the full path to the configuration file:
    ```
    ttnctl.exe --config fullpath/config.yml
    ```
4. Get the access code needed for logging in: `https://<domain_id>.thethings.industries/users/authorize?client_id=ttnctl&redirect_uri=/oauth/callback/ttnctl&response_type=code`
5. Login:
    ```bash
    $ ttnctl user login <access_code>
    ```
6. You are now logged in your private network, you should now see a folder named `/.ttnctl` in your home directory with private files.

    > Optional: define an alias on ttnctl --config /home/<user_name>/.ttnctl/community.yml to go faster


To get started, select the **AppID** and **AppEUI** of the application you want to export your end devices from:

```bash
$ ttnctl applications select
```

To clear the AppKey of an OTAA device, use the following command:

```bash
$ ttn-lw-migrate devices --source ttnv2 < device_ids.txt > devices.json
```

Alternatively, you can export all the end devices associated with your application, and save them in `all-devices.json`.

```bash
$ ttn-lw-migrate application --source ttnv2 "my-ttn-app" > all-devices.json
```

### Disable Exported End Devices on V2

An end device can only be registered in one Network Server at a time. After importing an end device to {{% tts %}}, you should remove it from {{% ttnv2 %}}. For OTAA devices, it is enough to simply change the AppKey, so the device can no longer join but the existing session is preserved. Next time the device joins, the activation will be handled by {{% tts %}}.

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

{{< note >}} Payload formatters are not exported. See [Payload Formatters](https://thethingsstack.io/integrations/payload-formatters/). {{</ note >}}

{{< warning >}} Active device sessions are exported by default. You can disable this by using the `--ttnv2.with-session=false` flag. It is recommended that you do not export session keys for devices that can instead re-join on The Things Stack. {{</ warning >}}

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

### Disable Exported End Devices on V2

An end device can only be registered in one Network Server at a time. After importing an end device to {{% tts %}}, you should remove it from {{% ttnv2 %}}. For OTAA devices, it is enough to simply change the AppKey, so the device can no longer join but the existing session is preserved. Next time the device joins, the activation will be handled by {{% tts %}}.

---
title: "Adding Devices"
description: ""
aliases: [/getting-started/cli/create-end-device, /getting-started/console/create-end-device]
---

This section contains instructions for adding devices in {{% tts %}}.

<!--more-->

Devices are managed under applications. An application can contain an unlimited number of devices, but it can be helpful to sort devices in to applications by function or geographical area, to make the integrations and live data views more useful.

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}

## Adding Devices using the Console

To create a device, first open the application you wish to add the device in. Go to **End devices** in the left menu and click on **+ Add end device** to reach the end device registration page.

{{< figure src="application-overview.png" alt="Application overview" >}}

### Using the LoRaWAN Device Repository

The [LoRaWAN device repository](https://github.com/TheThingsNetwork/lorawan-devices) contains device profiles, LoRaWAN information, codecs, and more, for many LoRaWAN devices. Using the device repository to add devices in {{% tts %}} automatically uses the correct LoRaWAN version and regional parameters version, which means less information for you to find!

To use the device repository, make sure the **From the LoRaWAN Device Repository** tab is selected. Then, select the **Brand**, **Model**, **Hardware Version**, **Software Version**, and **Region** for your device.

{{< note "If your device is not in the device repository, see [Manually Create End Device](#manually-create-end-device) below." />}}

{{< figure src="device-repo.png" alt="Creating a new device with the Device Repository" >}}

Choose a **Frequency plan** appropriate for your region. Your device and gateway must use the same frequency plan to communicate.

Enter a **JoinEUI/AppEUI** if provided by your manufacturer. If your device is programmable, you may use all 0's, and then program the same JoinEUI/AppEUI in the device.

Enter your **DevEUI**.

If your manufacturer provides an **AppKey**, enter it. Otherwise, use the generate button to create one, and program it in to your device.

Finally, give your device a unique **End device ID**, and click the **Register end device** button to create the end device.

{{< note >}}
See [ID and EUI constraints]({{< ref "reference/id-eui-constraints" >}}) for guidelines about choosing a unique ID.
{{</ note >}}

{{< figure src="device-repo-settings.png" alt="Device information" >}}

The device is now activated, and will appear as connected in {{% tts %}} once it sends an uplink.

### Manually Create End Device

If your device is not in the device repository, you may manually register it.

Make sure the **Manually** tab is selected.

Choose the **Activation Mode**.

Select the device **LoRaWAN version**.

If using Over-the-Air-Activation (OTAA) and an External Join Server, tick the **External Join Server** button.

The **Network Server**, **Application Server**, and **Join Server** addresses should correctly point to the address of {{% tts %}} deployment you are using.

Click the **Start** button to proceed to the Basic Settings page.

{{< figure src="manual-settings.png" alt="Register manually" >}}

{{< note >}}
This guide covers adding a device using [OTAA]({{< ref "reference/glossary#over-the-air-activation" >}}) (the most secure and preferred activation method) and [LoRaWAN version]({{< ref "reference/glossary#lorawan-version" >}}) MAC V1.0.2 (the most common LoRaWAN version, although newer versions are better and more secure). Names and keys may vary slightly for other versions.
{{</ note >}}

Give your device a unique **End device ID**.

{{< note >}}
See [ID and EUI constraints]({{< ref "reference/id-eui-constraints" >}}) for guidelines about choosing a unique ID.
{{</ note >}}

Enter a **JoinEUI/AppEUI** if provided by your manufacturer. If your device is programmable, you may use all 0's, and then program the same JoinEUI/AppEUI in the device.

Enter your **DevEUI**.

**Name** and **Description** are optional fields to help you identify your device.

Click **Network Layer Settings** to proceed to the next page.

{{< figure src="basic-settings.png" alt="Basic settings" >}}

Choose a **Frequency plan** appropriate for your region. Your device and gateway must use the same frequency plan to communicate.

Choose the **Regional Parameters version** provided by the manufacturer of your device. This should be specified in the data sheet as Regional Parameters or PHY version.

If your device supports **Class B** or **Class C** features, you may enable them using the checkboxes.

There are also advanced settings to configure **Frame counter width** and **RX2 settings**, but these should not be necessary for most devices.

Click the **Join settings** button to proceed to the next page.

{{< figure src="network-settings.png" alt="Network settings" >}}

If your manufacturer provides an **AppKey**, enter it. Otherwise, use the generate button to create one, and program it in to your device.

There are also advanced settings to configure **Net ID**, **Application Server ID**, and **KEK Labels**, but these are not necessary for most devices.

Finally, click **Add end device** to register the end device.

{{< figure src="join-settings.png" alt="Join settings" >}}

## Set Device Location

Once you have added your end device to {{% tts %}}, you can also set its location to be displayed on a map widget by clicking **Change location settings**. 

The end device location can be manually set by pinning on the map widget, or entering the **Latitude**, **Longitude** and **Altitude** values. 

{{< figure src="device-location.png" alt="Gateway location" >}}

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

## Adding Devices using the CLI

First, list the available frequency plans and LoRaWAN versions:

```bash
$ ttn-lw-cli end-devices list-frequency-plans
$ ttn-lw-cli end-devices create --help
```

### Over-The-Air-Activation (OTAA) Device

To create an end device using over-the-air-activation (OTAA):

```bash
$ ttn-lw-cli end-devices create app1 dev1 \
  --dev-eui 0004A30B001C0530 \
  --app-eui 800000000000000C \
  --frequency-plan-id EU_863_870 \
  --root-keys.app-key.key 752BAEC23EAE7964AF27C325F4C23C9A \
  --lorawan-version 1.0.3 \
  --lorawan-phy-version 1.0.3-a
```

This will create a LoRaWAN 1.0.3 end device `dev1` in application `app1` with the `EU_863_870` frequency plan.

The end device should now be able to join the private network.

{{< note >}} If you do not have a `JoinEUI` or `AppEUI`, it is okay to use `0000000000000000`. Be sure to use the same `JoinEUI` in your device as you enter in {{% tts %}}. {{</ note >}}

{{< note >}} The `AppEUI` is returned as `join_eui` (V3 uses LoRaWAN 1.1 terminology). {{</ note >}}

{{< note >}} You can also pass `--with-root-keys` to have root keys generated. {{</ note >}}

### Activation By Personalization (ABP) Device

It is also possible to register an ABP activated device using the `--abp` flag as follows:

```bash
$ ttn-lw-cli end-devices create app1 dev2 \
  --frequency-plan-id EU_863_870 \
  --lorawan-version 1.0.3 \
  --lorawan-phy-version 1.0.3-a \
  --abp \
  --session.dev-addr 00E4304D \
  --session.keys.app-s-key.key A0CAD5A30036DBE03096EB67CA975BAA \
  --session.keys.nwk-s-key.key B7F3E161BC9D4388E6C788A0C547F255
```

{{< note >}} The `NwkSKey` is returned as `f_nwk_s_int_key` ({{% tts %}} uses LoRaWAN 1.1 terminology). {{</ note >}}

{{< note >}} You can also pass `--with-session` to have a session generated. {{</ note >}}

## Set Device Location 

Once you have added your end device to {{% tts %}}, you can also set its location. 

Set your end device's location with:

```bash
$ APP_ID="your-application-id" 
$ DEVICE_ID="your-device-id"
$ ttn-lw-cli end-devices set $APP_ID $DEVICE_ID \
  --location.latitude 43.84 \
  --location.longitude 18.32 \
  --location.altitude 500 \
```

You can also set the end device location to be updated from various sources with the `--location.source` flag. The source of the location data can be the registry, GPS data, results of the LoRa RSSI geolocation, etc. 

{{< note >}} Use `ttn-lw-cli end-devices set app1 dev1 --help` command to see the full list of the available location sources and other relatable info. 

If you set the alternative location source, the location settings you manually set will be overwritten by the automatic updates from that source. {{</ note >}}

The CLI will return something like:

```json
{
  "ids": {
    "device_id": "dev1",
    "application_ids": {
      "application_id": "app1"
    },
    "dev_eui": "0004A30B001C0530",
    "join_eui": "800000000000000C"
  },
  "created_at": "2020-05-27T15:50:38.567Z",
  "updated_at": "2020-12-25T11:16:20.592Z",
  "locations": {
    "user": {
      "latitude": 43.84,
      "longitude": 18.32,
      "altitude": 500,
      "source": "SOURCE_REGISTRY"
    }
  }
}

```

{{< /tabs/tab >}}

{{< /tabs/container >}}

Once a device has been added, get started with [Integrations]({{< ref "/integrations" >}}) to process and act on data.

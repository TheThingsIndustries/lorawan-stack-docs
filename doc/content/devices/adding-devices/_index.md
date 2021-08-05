---
title: "Adding Devices"
description: ""
aliases: [/getting-started/cli/create-end-device, /getting-started/console/create-end-device]
weight: -1
---

This section contains instructions for adding devices in {{% tts %}}.

<!--more-->

Devices are managed under applications. An application can contain an unlimited number of devices, but it can be helpful to sort devices in to applications by function or geographical area, to make the integrations and live data views more useful.

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}

## Adding Devices using the Console

To create a device, first open the application you wish to add the device in. Go to **End devices** in the left menu and click on **+ Add end device** to reach the end device registration page.

{{< figure src="application-overview.png" alt="Application overview" >}}

## Using the LoRaWAN Device Repository

The [LoRaWAN device repository](https://github.com/TheThingsNetwork/lorawan-devices) contains device profiles, LoRaWAN information, codecs, and more, for many LoRaWAN devices. Using the device repository to add devices in {{% tts %}} automatically uses the correct LoRaWAN version and regional parameters version, which means less information for you to find!

In addition to the written instructions below, a video with instructions for adding a device using the device repository is available on [The Things Network youtube channel](https://youtu.be/bMT9n1-6dCc).

<details><summary>Show video</summary>
{{< youtube "bMT9n1-6dCc" >}}
</details>

To use the device repository, make sure the **From the LoRaWAN Device Repository** tab is selected. Then, select the **Brand**, **Model**, **Hardware Version**, **Software Version**, and **Region** for your device.

{{< note "If your device is not in the device repository, see [Manually Create End Device](#manually-create-end-device) below." />}}

{{< figure src="device-repo.png" alt="Creating a new device with the Device Repository" >}}

Choose a **Frequency plan** appropriate for your region. Your device and gateway must use the same frequency plan to communicate.

Enter a **JoinEUI/AppEUI** if provided by your manufacturer. If your device is programmable, you may use the **Fill with zeros** button, and then program the same JoinEUI/AppEUI (`0000000000000000`) in the device.

Enter your **DevEUI**. This should be provided by your manufacturer for commercial devices. If your device is programmable, you may generate an EUI using the **Generate** button, and program it in your device.

For LoRaWAN version 1.0.x devices, you will see an **AppKey** field. If your manufacturer provides an **AppKey**, enter it. Otherwise, use the generate button to create one, and program it in to your device.

For LoRaWAN version 1.1.x devices, you will also see a **NwkKey** field. If it is provided by your manufacturer, enter it. Otherwise, use the generate button to create one, and program it in to your device.

{{< figure src="device-repo-settings.png" alt="Device information" >}}

Finally, give your device a unique **End device ID**, and click the **Register end device** button to create the end device.

{{< note >}}
See [ID and EUI constraints]({{< ref "reference/id-eui-constraints" >}}) for guidelines about choosing a unique ID.
{{</ note >}}

{{< figure src="device-repo-settings.png" alt="Device information" >}}

The device is now activated, and will appear as connected in {{% tts %}} once it sends an uplink.

## Manually Registering an End Device

If your device is not in the device repository, you may manually register it.

Make sure the **Manually** tab is selected.

{{< figure src="manual-tab.png" alt="Manual tab" >}}

Select the device **LoRaWAN version**. This should be provided with your device as the LoRaWAN version, LoRaWAN specification, or MAC version.

{{< warning >}}
Choosing the incorrect LoRaWAN version can lead to complex errors. Activation may work, but the device will not be able to communicate consistently. Watch the [event log]({{< ref "getting-started/events" >}}) for errors!
{{</ warning >}}

Choose a **Frequency plan** appropriate for your region. Your device and gateway must use the same frequency plan to communicate.

Choose the **Regional Parameters version** provided by the manufacturer of your device. This should be specified in the data sheet as Regional Parameters or PHY version.

{{< figure src="manual.png" alt="Manually create end device" >}}

If you need to use a method of activation other than OTAA, create a multicast group, specify a Class B or Class C device, or change Rx Delay and Frequency plan settings, see the [Advanced settings](#advanced-settings) section below. Otherwise, proceed to [OTAA devices](#otaa-devices).

### OTAA Devices

Over-the-Air-Activation (OTAA) is the secure, scalable way to activate LoRaWAN devices. All commercially available LoRaWAN devices support OTAA, and it is selected by default. If you are using a custom or DIY device, and cannot use OTAA, see the [Activation by Personalisation](#abp-devices) section.

{{< note >}}
The example in this guide covers adding a device using [OTAA]({{< ref "reference/glossary#over-the-air-activation" >}}) (the most secure and preferred activation method) and [LoRaWAN version]({{< ref "reference/glossary#lorawan-version" >}}) MAC V1.0.2 (the most common LoRaWAN version, although newer versions are better and more secure). Names and keys may vary slightly for other versions, but the process is the same and any differences are noted.
{{</ note >}}

Enter your **DevEUI**. This should be provided by your manufacturer for commercial devices. If your device is programmable, you may generate an EUI using the **Generate** button, and program it in your device.

Enter a **JoinEUI/AppEUI** if provided by your manufacturer. If your device is programmable, you may use the **Fill with zeros** button, and then program the same JoinEUI/AppEUI (`0000000000000000`) in the device.

If your manufacturer provides an **AppKey**, enter it. Otherwise, use the generate button to create one, and program it in to your device.

Give your device a unique **End device ID**.

{{< note >}}
See [ID and EUI constraints]({{< ref "reference/id-eui-constraints" >}}) for guidelines about choosing a unique ID.
{{</ note >}}

{{< figure src="manual-network-settings-otaa.png" alt="Manually create OTAA end device" >}}

Click **Register end device** to create the end device.

### Advanced Settings

To modify advanced settings, expand the **Show advanced activation, LoRaWAN class and cluster settings** dropdown.

Here, you may choose your **Activation Mode**.

{{< figure src="advanced.png" alt="Advanced settings" >}}

If your device supports **Class B** or **Class C** features, you may enable them using the dropdown.

{{< figure src="class.png" alt="Choose device class" >}}

To modify **Rx2 data rate** or **Rx2 frequency**, uncheck **Use network's Rx and frequency defaults**. If using **[ABP](#abp-devices)**, this will also allow you to configure **Rx1 settings**.

{{< figure src="default-frequencies.png" alt="Use default frequencies" >}}

To use an external join server or an external network server, check **Use external LoRaWAN backend servers**.

The **Network Server** and **Join Server** addresses should correctly point to the address of {{% tts %}} deployment you are using.

If using an External Join Server, enter its address in the **Join Server** field.

{{< figure src="external-servers.png" alt="Use external backend servers" >}}

### ABP Devices

If your device can not be activated using the more secure OTAA, you may manually activate it by programming security keys in.

In the **Advanced settings** dropdown, select **Activation by Personalization (ABP)**.

{{< figure src="manual-abp.png" alt="ABP" >}}

When using ABP, it is important to make sure that the Rx1 settings in your device match those in {{% tts %}}. Uncheck **Use network's Rx and frequency defaults** to specify settings that match those in your device. {{% tts %}} recommends an Rx1 delay of `5` seconds.

{{< figure src="rx1-settings.png" alt="Rx1 settings" >}}

Enter your **DevEUI**. This should be provided by your manufacturer for commercial devices. If your device is programmable, you may generate an EUI using the **Generate** button, and program it in your device.

Use the **Generate** button to create a **Device address**, and program it in your device.

For LoRaWAN versions 1.0.x, generate an **AppSKey** and **NwkSKey** and program them in your device.

For LoRaWAN versions 1.1.x, generate an **AppSKey**, **FNwkSIntKey**, **SNwkSIntKey**, and **NwkSEncKey**, and program them in your device.

Finally, give your device a unique **End device ID**.

{{< note >}}
See [ID and EUI constraints]({{< ref "reference/id-eui-constraints" >}}) for guidelines about choosing a unique ID.
{{</ note >}}

{{< figure src="manual-network-settings-abp.png" alt="Manually create OTAA end device" >}}

Click **Register end device** to create the end device.

## Adding Devices in Bulk

It is also possible to import end devices in bulk, using a file format defined in the [JSON file reference]({{< ref "getting-started/migrating/device-json" >}}). See the following video from [The Things Network youtube channel](https://youtu.be/ouz-VuiosU4) for instructions.

<details><summary>Show video</summary>
{{< youtube "ouz-VuiosU4" >}}
</details>

## Set Device Location in the Console

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

### Set Device Location with the CLI

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

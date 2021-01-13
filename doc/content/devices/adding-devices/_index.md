---
title: "Adding Devices"
description: ""
aliases: [/getting-started/cli/create-end-device, /getting-started/console/create-end-device]
---

This section contains instructions for adding devices in {{% tts %}}.

<!--more-->

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}

## Adding Devices using the Console

Go to **Devices** in the left menu and click on **+ Add Device** to reach the end device registration page. Fill the device ID, the LoRaWAN MAC and PHY versions and the frequency plan used by the device.

{{< note "The PHY version represents the revision of the LoRAWAN Regional Parameters that the device expects, and must be correlated with the MAC version." />}}

{{< figure src="device-creation-1.png" alt="Creating a new device" >}}

### Over-The-Air-Activation (OTAA) Device

After filling the fields in the **General Settings** section, scroll to the lower part of the device registration page and make sure that **Over The Air Activation** is selected. 

Fill the **JoinEUI** (AppEUI in LoRaWAN versions before 1.1), **DevEUI** and **AppKey**. The **NwkKey** is only needed for LoRaWAN version 1.1 or later. All other fields on the page are optional. 

Press **Create Device** to create the device.

{{< figure src="device-creation-otaa.png" alt="Creating an OTAA device" >}}

You will now reach the device overview page for your device. The end device should now be able to join the private network.

{{< note >}} If you do not have a `JoinEUI` or `AppEUI`, it is okay to use `0000000000000000`. Be sure to use the same `JoinEUI` in your device as you enter in {{% tts %}}. {{</ note >}}

{{< figure src="device-otaa-created.png" alt="OTAA device overview" >}}

### Activation By Personalization (ABP) Device

After filling the fields in the **General Settings** section, scroll to the lower part of the device registration page and make sure that **Activation By Personalization** is selected. 

Fill the **Device Address**, the **FNwkSIntKey** (NwkSKey in LoRaWAN versions before 1.1) and the **AppSKey**. The other key fields are only needed for LoRaWAN version 1.1 or later. All other fields on the page are optional. 

Press **Create Device** to create the device.

{{< figure src="device-creation-abp.png" alt="Creating an ABP device" >}}

You will now reach the device overview page for your device. The end device should now be able to communicate with the private network.

{{< figure src="device-abp-created.png" alt="ABP device overview" >}}

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

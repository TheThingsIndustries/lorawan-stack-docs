---
title: "Device location settings"
description: ""
weight: 1
---

Once you have added your end device to {{% tts %}}, you can also set its location to be displayed on a map widget.

<!--more-->

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}

To do this on the console, click the **Change location settings** option on the end device.

The end device location can be manually set in two ways.

1. Pinning the location on the map widget.
2. Entering the **Latitude**, **Longitude** and **Altitude** values.

{{< figure src="device-location.png" alt="Gateway location" >}}

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

Once you have added your end device to {{% tts %}}, you can also set its location.

Set your end device's location with:

```bash
LAT="43.84"
LONG="18.32"
ALT="500"
ttn-lw-cli end-devices set $APP_ID $DEVICE_ID \
  --location.latitude $LAT \
  --location.longitude $LONG \
  --location.altitude $ALT \
```

You can also set the end device location to be updated from various sources with the `--location.source` flag.

The source of the location data can be the registry, GPS data, results of the LoRa RSSI geolocation, etc. Use `ttn-lw-cli end-devices set $APP_ID $DEVICE_ID --help` command to see the full list of the available location sources and other relatable info. If you set the alternative location source, the location settings you manually set will be overwritten by the automatic updates from that source.

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

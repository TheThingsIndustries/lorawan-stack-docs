---
title: "Messages and Device Twin"
description: ""
weight: 40
---

{{% tts %}} publishes uplink messages to Azure IoT Hub as device telemetry. {{% tts %}} updates the [Device Twin](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-device-twins) reported properties of the device, and schedules downlinks when the [Device Twin](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-device-twins) desired properties are changed.

<!--more-->

> {{% tts %}} automatically creates the end device in Azure IoT Hub in case it is not yet created. See [Managing Devices]({{< relref "devices" >}}) for details.

> See [Architecture]({{< relref "architecture" >}}) for the flow.

{{< note >}} The [Device Twin](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-device-twins) properties functionality depends on the presence of [Payload Formatters]({{< ref "/integrations/payload-formatters" >}}). Devices which are configured using [LoRaWAN Device Repository]({{< ref "/integrations/payload-formatters/device-repo" >}}) will automatically have payload formatters. {{</ note >}}

## Reported Properties

The Azure IoT Hub integration will automatically update the [Device Twin](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-device-twins) reported properties when an uplink message arrives, using [Payload Formatters]({{< ref "/integrations/payload-formatters" >}}).

In the Azure Console, open your Azure IoT Hub resource. In the menu on the left, click **IoT Devices**.

{{< figure src="../device-list.png" alt="IoT Devices" >}}

Click on the device you want to view.

{{< figure src="../device-created.png" alt="Device View" >}}

Click on **Device Twin**. The device reported properties will be visible under the `properties.reported.decodedPayload` key.

{{< figure src="../reported-properties.png" alt="Reported Properties" >}}

## Desired Properties

The Azure IoT Hub integration will automatically schedule a downlink when the [Device Twin](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-device-twins) desired properties are updated.

In the Azure Console, open your Azure IoT Hub resource. In the menu on the left, click **IoT Devices**.

{{< figure src="../device-list.png" alt="IoT Devices" >}}

Click on the device you want to view.

{{< figure src="../device-created.png" alt="Device View" >}}

Click on **Device Twin**. The device reported desired will be visible under the `properties.desired.decodedPayload` key. If the key is missing, you will have to manually create it. The contents of the object should be compatible with the device's payload formatter.

The final JSON `properties.desired` object should look as follows:

```json
{
   "decodedPayload":{
      "color":"red"
   }
}
```

When finished editing the JSON `properties.desired` object, click on **Save** in the top-left corner.

{{< figure src="../desired-properties.png" alt="Desired Properties" >}}

A downlink message will be generated in {{% tts %}}.

## Message Filters

The Azure IoT Hub integration can be configured such that it sends only certain message types to the Azure IoT Hub. There are two message filters available: one for the device events (also known as device to cloud messages), and one for the Device Twin reported properties.

Go to your application in {{% tts %}} Console, navigate to **Integrations &#8594; Azure IoT** on the left hand menu and click on **Expand** next to **Azure IoT Hub**.


{{< figure src="../filters.png" alt="Message Filters" >}}

Click on **Enable/Update Azure IoT Hub integration** in order to save the filters.

## Raw Downlinks

It is possible to schedule "raw" downlinks using the Device Twin desired properties. The `rawDownlink` property allows this behavior using the following object structure:

```json
{
  "rawDownlink": {
    "fPort": 42,
    "framePayload": "BEEF",
    "confirmed": true,
    "operation": "replace"
  }
}
```

The fields have the following semantics:

- `fPort`: the frame port of the downlink. Defaults to 0.
- `framePayload`: the binary frame payload, in base 16. Defaults to an empty frame.
- `confirmed`: if the downlink should be confirmed. Defaults to `false`.
- `operation`: the downlink operation type. Supported values are `push` and `replace`. Defaults to `push`.

Note that the semantics of the `rawDownlink` and `decodedPayload` fields follow the semantics of an application downlink. Specifically, if a decoded payload is provided, and a downlink encoder is available, the frame port may be omitted, as the downlink encoder may output it automatically based on the `decodedPayload`.


If one would like to schedule a downlink only with a binary payload, the `decodedPayload` should be explicitly set to `null`, and the `fPort` should be explicitly provided:


```json
{
  "rawDownlink": {
    "fPort": 42,
    "framePayload": "BEEF",
    "confirmed": true,
    "operation": "replace"
  },
  "decodedPayload": null
}
```

It is also possible to mix and match the two fields. If one would like to schedule a confirmed downlink, replacing the existing downlink queue, with a LED state payload, the following payload may be provided:

```json
{
  "rawDownlink": {
    "fPort": null,
    "framePayload": null,
    "confirmed": true,
    "operation": "replace"
  },
  "decodedPayload": {
    "ledState": "on"
  }
}
```

The explicit `null` values are required in order to signal to Azure IoT Hub that the values should not be present. Otherwise, updating only the relevant fields would cause the two objects to be merged, having unintended side effects.

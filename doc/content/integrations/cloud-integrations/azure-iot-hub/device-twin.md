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

When finished editing the JSON `tags` object, click on **Save** in the top-left corner.

{{< figure src="../desired-properties.png" alt="Desired Properties" >}}

A downlink message will be generated in {{% tts %}}.

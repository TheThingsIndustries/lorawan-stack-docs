---
title: "Managing Devices"
description: ""
weight: 30
---

The Azure IoT Hub integration for {{% tts %}} synchronizes the device registry: you can create devices in Azure IoT Hub which trigger an Azure Function that creates the device in {{% tts %}}.

<!--more-->

{{< note >}} Devices that you create in {{% tts %}} are automatically created as Azure IoT Hub devices as soon as they activate or send their first uplink message.

In Azure IoT Hub, create only devices that are not yet in your {{% tts %}} application. {{</ note >}}

## Device Names

Devices are created automatically as they join the network or send an uplink message. For the name of new devices, the end device ID in {{% tts %}} is used as the device ID in Azure IoT Hub.

## Creating Devices

You can use Azure IoT Hub to create and claim devices in {{% tts %}}. This is useful to manage all your devices in one place, without having to use {{% tts %}} Console, CLI or API.

**Creating** a device allows you to add any LoRaWAN device by manually entering its information and security keys.

In the Azure Console, open your Azure IoT Hub resource. In the menu on the left, click **IoT Devices**.

Click **Add Device**.

{{< figure src="../device-list.png" alt="IoT Devices" >}}

As **Device ID**, enter any device ID you like. Hit **Save**.

{{< note >}}
See [ID and EUI constraints]({{< ref "reference/id-eui-constraints" >}}) for guidelines about choosing a unique ID.
{{</ note >}}

{{< figure src="../add-device.png" alt="Add Device" >}}

You will now have to setup the LoRaWAN specific settings of the device. Click on **Device Twin**.

{{< figure src="../device-created.png" alt="Device Created" >}}

You will now be presented with a JSON document containing the Device Twin. You now have to add a new object called `tags`, which will contain an object called `lorawan` with the LoRaWAN specific tags. You will have to specify the following tags:

- `devEui`: the hexadecimal LoRaWAN DevEUI.
- `joinEui`: the hexadecimal LoRaWAN JoinEUI (or AppEUI).
- `lorawanVersion`: either `1.0`, `1.0.1`, `1.0.2`, `1.0.3` or `1.1`.
- `regionalParametersVersion`: either `1.0`, `1.0.1`, `1.0.2` (or `1.0.2-a`), `1.0.2-b`, `1.0.3-a`, `1.1-a` or `1.1-b`.
- `appKey`: the hexadecimal LoRaWAN AppKey.
- `nwkKey`: the hexadecimal LoRaWAN NwkKey (only when using LoRaWAN 1.1 or higher).
- `frequencyPlanId`: the frequency plan ID. See [Frequency Plans]({{< ref "/reference/frequency-plans" >}}) for the supported values.

If your end device is a part of the [LoRaWAN Device Repository]({{< ref "/integrations/payload-formatters/device-repo" >}}), you may provide the identifiers of the device as part of an optional `versionIdentifiers` object. You can specify the following information as part of the identifiers:

- `bandId`: the band ID.
- `brandId`: the brand ID.
- `firmwareVersion`: the firmware version.
- `hardwareVersion`: the hardware version.
- `modelId`: the model ID.

{{< note >}} If the version identifiers are provided, the end device will automatically load the [Payload Formatters]({{< ref "/integrations/payload-formatters" >}}) from [LoRaWAN Device Repository]({{< ref "/integrations/payload-formatters/device-repo" >}}). {{</ note >}}

The final JSON `tags` object should look as follows:

```json
{
   "lorawan":{
      "devEui":"0004A30B001C5838",
      "joinEui":"0000000000000000",
      "lorawanVersion":"1.0.2",
      "regionalParametersVersion":"1.0.2-b",
      "frequencyPlanId":"EU_863_870_TTN",
      "appKey":"459B77D46A08C427254822A33F6FA1A3",
      "versionIdentifiers":{
         "bandId":"EU_863_870",
         "brandId":"the-things-products",
         "firmwareVersion":"1.0",
         "hardwareVersion":"1.0",
         "modelId":"the-things-node"
      }
   }
}
```

{{< figure src="../add-tags.png" alt="Add Tags" >}}

Click on **Save** in the top-left corner. The end device will now be created in {{% tts %}}.

## Deleting Devices

In the Azure Console, open your Azure IoT Hub resource. In the menu on the left, click **IoT Devices**.

Click on the checkbox in front of the device you want to delete, then click **Delete**.

{{< figure src="../select-device.png" alt="Select Device" >}}

The end device will be deleted from Azure IoT Hub and {{% tts %}}.

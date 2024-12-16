---
title: "TTN Mapper"
description: ""
---

[TTN Mapper](https://ttnmapper.org/) is a convenient tool used for mapping the network coverage of gateways connected to {{% tts %}}.

<!--more-->

Check the official [TTN Mapper documentation site](https://docs.ttnmapper.org/).

## Prerequisites

1. A LoRaWAN® end device transmitting GPS coordinates (latitude, longitude and optionally altitude), and HDOP, GPS accuracy or satellite count.
2. A LoRaWAN gateway with a [public location]({{< ref "/gateways/concepts/adding-gateways#set-gateway-location" >}}).

## Configure {{% tts %}}

Your end device can be sending its GPS coordinates in an uplink message as part of the `frm_payload` field. In that case, before implementing the Webhook integration, you need to create an uplink [payload formatter]({{< ref "/integrations/payload-formatters" >}}) in order for TTN Mapper to be able to parse your data.

- If your end device is sending data in Cayenne LPP format, choose [Cayenne LPP payload formatter](({{< ref "/integrations/payload-formatters/cayenne" >}})) in your device's settings on {{% tts %}}.
- Otherwise, create a custom [JavaScript payload formatter]({{< ref "/integrations/payload-formatters/javascript" >}}). This formatter will have to contain fields `latitude`, `longitude` and `altitude`. If possible, `hdop`, `accuracy` or `sats` fields should also be contained.

<!--- Some devices, for example [LoRa Edge LR1110](https://www.semtech.com/products/wireless-rf/lora-edge/), obtain their location from [LoRa Cloud](https://www.loracloud.com/) platform using {{% tts %}} [LoRa Cloud integration]({{< ref "/integrations/other-integrations/lora-cloud" >}}). As a result, device location solution is contained in the `location` field of the location solved message. In this case, there is no need to set up a payload formatter. --->

The next step is to instantiate the **TTN Mapper** [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}).

<!--- {{< note >}} Both uplink and location solved message types are enabled by default in TTN Mapper webhook template. {{</ note >}} --->

Give a name to your integration by filling in the **Webhook ID** field.

Fill in the **Email address** field with a valid email, needed for your data to be accepted by TTN Mapper. All data sent by your end device will be associated to this email address and it will provide some guarantees of the data quality.

If you are testing some random setups (like launching and tracking an air balloon) and you do not want your mapping results to contribute to the main TTN Mapper network coverage map, provide the **Experiment name** field as well.

To read more about experiments, read the **Experiments** section [here](https://docs.ttnmapper.org/integration/tts-integration-v3.html).

Finish by clicking the **Create ttn mapper webhook** button.

{{< figure src="webhook-template.png" alt="TTN Mapper webhook template" >}}

{{< note >}} To see the values of all parameters of the TTN Mapper integration, click on the integration after you created it with the Webhook template. {{</ note >}}

## Observe The Network Coverage

Now when you have configured the integration, go back to TTN Mapper website and select **Advanced maps** in the top menu.

In the **Device data** section, fill in the **Device ID** field with the device ID from {{% tts %}}. Choose today as the **Start Date** and the **End Date**. Click the **View Map** button to see data points coming from your end device's uplink data.

{{< figure src="ttn-mapper-map.png" alt="TTN Mapper coverage map" >}}

> Read more info about integrating {{% tts %}} with TTN Mapper on [Github](https://github.com/ttnmapper/documentation/blob/master/integration/tts-integration-v3.md) or on [TTN Mapper documentation page](https://docs.ttnmapper.org/integration/tts-integration-v3.html).

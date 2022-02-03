---
title: "Widgelix"
description: ""
weight:
aliases:
  [
    "/integrations/cloud-integrations/widgelix/widgelix-setup",
    "/integrations/cloud-integrations/widgelix/tts-setup",
  ]
---

[Widgelix](https://widgelix.com/) is a flexible IoT service, which supports zero-code and low-code features, helps to connect any device and build custom applications for device management and data visualization.

<!--more-->

## Prerequisites

1. A [user account on Widgelix](https://widgelix.com/register).

## Setup Widgelix

### Create a Data Converter

{{< note >}} Skip this section if you are already decoding data on {{% tts %}} using [payload formatters]({{< ref "/integrations/payload-formatters" >}}). {{</ note >}}

Navigate to **Data Converters** on the left hand menu, then click **Create Data Converter**.
Give a **Name** to your converter, then edit the default JavaScript converter code or create a new one.

Optionally, you may provide a test payload and check the converter. The resulting output of your converter should be a flat JSON object.

{{< figure src="data-converter.png" alt="Create Data Converter" >}}

### Create Device Type

Device types allow to join same devices in a single group, manage simultaneously and assign **Rules**, **Widget Sets**, **Data Converters** and **Data Flows**.

Navigate to **Device Types** on the left hand menu, then click **Create Device Type** button.

Give a **Name** to your device type, and fill the **Description** and **Manufacturer** fields (optional).

If you previously [created a data converter]({{< ref "/integrations/cloud-integrations/widgelix#create-a-data-converter" >}}), you can assign it under **Uplink Data Converter**.
In the **Data Fields** input, you need to provide all required keys from your resulting flat JSON object.

{{< figure src="device-type.png" alt="Create Device Type" >}}

### Add Device

Navigate to **Devices** on the left hand menu, then click the **Create Device** button.

Give a **Name** to your device and provide its **DevEUI**. Assign the previously created **Device Type**.

{{< figure src="create-device.png" alt="Create Device" >}}

### Create Data Flow

Navigate to **Data Flows** on the left hand menu, then click the **Create New Data Flow** button.

Give a **Name** to your data flow, select **LoRaWAN (TTN)** connectivity and assign the previously created **Device Type**.

{{< figure src="create-data-flow.png" alt="Create Data Flow" >}}

The new **Data Flow** will appear in the table of data flows. Click on your data flow and copy the **Webhook path** and the **API key** - you will need these values to set up {{% tts %}} Webhook integration.

{{< figure src="data-flow-credentials.png" alt="Create Data Flow" >}}

## Configure {{% tts %}}

Now you are ready to instantiate the Widgelix [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}). This will allow you to forward data from your {{% tts %}} device to **Widgelix**.

On {{% tts %}}, navigate to **Integrations &#8594; Webhooks** and choose **Widgelix** Webhook template.

Give a **Webhook ID** to your integration. Fill the **Webhook path** and the **API token** with values you previously copied from Widgelix.

{{< figure src="tts-widgelix.png" alt="Widgelix integration on TTS" >}}

Congrats, **Widgelix** is now ready to accept your device's uplinks! Navigate back to **Devices** on Widgelix, click on your device and you will be able to observe all the incoming data from your device.
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

### Create Data Converter

{{< note "If you have a payload decoder on The Things Stack then skip this part" />}}

Navigate to **Data Converters** on the left side menu, then click **Create Data Converter**.
Give a **Name** and edit the default JS code or create a new one.

{{< note "The result output should be a flat JSON object" />}}

Optionally you may provide a test payload and check the converter.

{{< figure src="data-converter.png" alt="Create Data Converter" >}}

### Create Device Type

{{< note "**Device Types** allow to join same devices in a single group, manage simultaneously and assign **Rules**, **Widget Sets**, **Data Converters** and **Data Flows**" />}}

Navigate to **Device Types** on the left side menu, then click **Create Device Type** button.
Give a **Name**, and fill optional fields - **Description** and **Manufacturer**. Then assign previously created **Data Converter**, if required.
In **Data Fields** input provide all required keys from your flat JSON object.

{{< figure src="device-type.png" alt="Create Device Type" >}}

### Add Device

Navigate to **Devices** on the left side menu, then click **Create Device** button.
Give a **Name** for your device and provide **DevEUI**, then assign previously created **Device Type**.

{{< figure src="create-device.png" alt="Create Device" >}}

### Create Data Flow

Navigate to **Data Flows** on the left side menu, then click **Create New Data Flow** button.

Give a **Name**, select LoRaWAN connectivity and assign **Device Type**.

{{< figure src="create-data-flow.png" alt="Create Data Flow" >}}

After that, new **Data Flow** will appear in the table, click on it and copy **Webhook Path** and **API token**, you need it to setup {{% tts %}} webhook.

{{< figure src="data-flow-credentials.png" alt="Create Data Flow" >}}

## Configure {{% tts %}}

Now you are ready to setup {{% tts %}} Webhook template and connect your device with **Widgelix**.
On {{% tts %}}, navigate to **Integrations &#8594; Webhooks** and choose **Widgelix** Webhook template.

Give a **Webhook ID**, then fill **Webhook path** and **API token** with previously saved data.

{{< figure src="tts-widgelix.png" alt="Widgelix integration on TTS" >}}

**Widgelix** is ready to accept your device payloads. Navigate back to **Devices** page, click on the device and all the data are available there.

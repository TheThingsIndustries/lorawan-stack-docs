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

[Widgelix](https://app.widgelix.com/) is a powerful and flexible deep analytics cloud service for IoT device management and data visualization. Widgelix platform allows you to easily integrate devices from various manufacturers into a single platform, making it easier to manage your IoT network and extract valuable insights from your collected data. With Widgelix, you can optimize your device performance, improve your decision-making, and drive business growth.

<!--more-->

## Prerequisites

1. A [user account on Widgelix](https://app.widgelix.com/auth/register).

## Setup Widgelix

### Create a device template from Repository

Navigate to **Device Types** on the left hand menu, then click the **Load From Repository** button.

Select required device, give a **Name** to your template and click **Save** button.

{{< figure src="add-device-type.png" alt="Add device template" >}}

### Add new device based on the template

Navigate to **Devices** on the left hand menu, then click the **Create Device** button.

Give a **Name** to your device, type **DevEUI**, assign previously created **Device Type** template and click **Save** button.

{{< figure src="add-device.png" alt="Add device" >}}

### Configure Connectivity

Navigate to **Devices** on the left hand menu, then click on the created device.

Go to **Settings** tab and click on **Connectivity** section. Then select {{% tts %}}, switch **Secure** option. And finally, copy given API Key.

{{< figure src="add-connectivity.png" alt="Add connectivity" >}}

## Configure {{% tts %}}

Now you are ready to instantiate the Widgelix [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}). This will allow you to forward data from your {{% tts %}} device to **Widgelix**.

On {{% tts %}}, navigate to **Integrations &#8594; Webhooks** and choose **Widgelix** Webhook template.

Give a **Webhook ID** to your integration. Fill the **API Key** with value you previously copied from Widgelix.

{{< figure src="tts-widgelix.png" alt="Widgelix integration on TTS" >}}

Congrats, **Widgelix** is now ready to accept your device's uplinks! Navigate back to **Devices** on Widgelix, click on your device and you will be able to observe all the incoming data from your device.

{{< figure src="dashboard.png" alt="Dashboard" >}}

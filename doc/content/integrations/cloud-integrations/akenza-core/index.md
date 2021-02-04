---
title: "Akenza Core"
description: ""
weight: 
---

[Akenza Core](https://akenza.com/technology) is an IoT system designed to help bind any type of device and technology into a real-time connected solution.

<!--more-->

## Prerequisites

1. A user account on Akenza Core.

## Setup Akenza Core

Log in to Akenza Core and navigate to the **Quick Start** tab in the **Environment** to see the steps to be taken to connect a device and manipulate the data coming from it. 

{{< figure src="quick-start.png" alt="Steps to connect a device" >}}

Set up a domain by selecting the **Add Domain** button in the **Domains** submenu. 

Give a **Name** to your domain and choose **HTTP** for **Technology** to create a Webhook integration. The **Domain Secret** is auto-generated, while **Uplink Function** and **Downlink Function** may retain a **Passthrough** value. 

Select **Save** to finish.

{{< figure src="creating-domain.png" alt="Creating a new domain" >}}

Next, create a new device type in the **Device Types** submenu. Select the **Add Device Type** button, provide a **Name** and click **Save**.

{{< figure src="creating-device-type.png" alt="Creating a device type" >}}

After defining a domain and a device type, you can create a new device by selecting **Add Device** button in the **Inventory** submenu. 

Provide a **Name** for your device, select the previously created device type and domain, and do not forget to generate a **Device ID**.

{{< figure src="creating-device.png" alt="Creating a new device" >}}

The device you created can be found in the **Inventory** on the left hand menu.

## Configure {{% tts %}}

Name your Webhook integration in the **Webhook ID** field. 

Fill in the **Domain Secret** and **Device ID** fields with domain secret and device ID values you generated previously on Akenza Core. 

{{< figure src="creating-webhook.png" alt="Akenza Core webhook" >}}

Finish with creating the integration by clicking the **Create akenza core webhook** button.

{{< note >}} To see the values of all parameters of the Akenza Core integration, click on the integration after you created it with the Webhook template. {{</ note >}}

After creating the integration, go back to Akenza Core and you will be able to see the uplink messages in JSON format in your device's **Data** tab.

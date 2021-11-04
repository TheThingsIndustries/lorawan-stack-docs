---
title: "Cayenne"
description: ""
---

[Cayenne](https://cayenne.mydevices.com/) is a drag-and-drop IoT platform, developed by [myDevices](https://mydevices.com/about/), that empowers users to quickly prototype and share their connected IoT solutions.

<!--more-->

Check the [official Cayenne documentation page](https://developers.mydevices.com/cayenne/docs/intro/) for more info.

## Prerequisites

1. A [user account on Cayenne](https://cayenne.mydevices.com).
2. Message payload in [Cayenne Low Power Payload (LPP)](https://docs.mydevices.com/docs/lorawan/cayenne-lpp) format.

## Setup Cayenne

Log in to the Cayenne platform.

First, you need to **Choose a device to start a project**. Choose **LoRa**.

{{< figure src="start-screen.png" alt="Choose a device" >}}

You will be presented with a list of LoRaWAN networks you can connect your devices from and a list of device models you can connect to Cayenne. Scroll through the list of networks on the left and choose **The Things Network**, then select the model of your end device.

You can choose the device model, but you can also choose **Cayenne LPP**. If you choose a device model and you start experiencing issues, try using the **Cayenne LPP** instead. In this guide, we chose **Cayenne LPP**.

{{< figure src="choose-ttn-device.png" alt="Choose network and device model" >}}

To add your device, you will need to give it a **Name** (you can leave the pre-defined one) and provide its **DevEUI**. 

Since in this guide we assume your end device is already connected to {{% tts %}}, choose **Already Registered** for the **Activation Mode**. If your device is not connected to {{% tts %}}, see [Adding Devices]({{< ref "/devices/adding-devices" >}}) section for instructions on how to register it.

What you choose under **Tracking &#8594; Location** depends on the model of your device, i.e. if it can provide location coordinates or not. If you choose **This device doesn't move**, you will need to provide a static location of your device.

Click **Add device** to finish.

{{< figure src="add-device.png" alt="Adding device info" >}}

Once you finish creating a new device, you will be presented with its dashboard.

The **Overview** tab usually contains a map showing the device location (static or dynamic), and widgets showing sensor data. These widgets will be automatically loaded once data from {{% tts %}} reaches Cayenne.

The **Data** tab will show the incoming live data, and you will be able to see historic data as well.

{{< figure src="device-overview.png" alt="Device overview" >}}

Note the **Last data packet sent: - -** in the bottom of the image below, indicating that {{% tts %}} data still has not reached Cayenne.

## Configure {{% tts %}}

After preparing the setup on Cayenne, use the Cayenne [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}) to create a Webhook integration on {{% tts %}}.

To integrate, you only need to fill out the **Webhook ID** field. The **Client ID** field is optional, so you can leave it empty.

{{< figure src="cayenne-webhook-template.png" alt="Cayenne Webhook template" >}}

To see the values of all parameters of the Cayenne integration, click on the integration after you created it with the Webhook template.

## Monitor Your Data

As soon as new uplink message containing CayenneLPP-encoded sensor data is sent from your end device, the widgets showing this data will automatically load on your device's Cayenne dashboard, enabling you to monitor your data in a user friendly way.

**RSSI** and **SNR** are loaded from uplink message metadata.

You can see the time of the arrival of the last message in the bottom.

{{< figure src="monitor-data.png" alt="Monitor your data" >}}

Now you can switch to **Data** tab to see full incoming data records, create new widgets, events, triggers, etc. Have fun!
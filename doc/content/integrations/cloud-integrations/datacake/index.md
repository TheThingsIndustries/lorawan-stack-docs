---
title: "Datacake"
description: ""
weight: 
---

[Datacake](https://datacake.co/) is a multi-purpose IoT platform, which provides the possibility of building custom IoT applications, without requiring programming skills. 

<!--more-->

## Prerequisites

1. A user account on Datacake.

## Setup Datacake

First, create a **Workspace** on Datacake by navigating to the **Create Workspace** button in the upper left corner. 

{{< figure src="datacake-workspace.png" alt="Add workspace on Datacake" >}}

On the left hand menu, click **Devices**. To add a new device, click the **Add Device** button on the right. 

In the **Add Device** pop-up menu, choose **LoRaWAN** &#8594; **Generic LoRa Device**. When asked **Which device are you missing?**, just click **Skip** and then select **The Things Industries** adapter.

{{< figure src="datacake-tti-adapter.png" alt="Datacake TTI adapter" >}}

After selecting your subscription plan, fill in **Name** and **DevEUI** for your device, then click on **Add Device** to finish.

Once the device is created, you can click on it in the **Devices** menu to enter its settings.

In the **Configuration** tab, you can find the **LoRaWAN** section, where you can configure **Network** settings, choose to **Authenticate Webhook** or define **Payload Decoder**. 

Under **Network**, choose **The Things Industries** from the drop-down menu.

Paste your device's **End device ID** from {{% tts %}} in the **TTI Dev Id** field.

The **TTI Server Url** field should contain the URL of your {{% tts %}} deployment.

Paste your **Application ID** from {{% tts %}} in the **TTI App Id** field. 

In {{% tts %}}, navigate to **API keys** on the left hand menu, click the **Add API key** button, give it a **Name** and confirm that you have copied it to finish. Paste the copied API key into the **TTI Api Key** field on Datacake. 

{{< figure src="lorawan-settings.png" alt="LoRaWAN settings" >}}

## Configure {{% tts %}}

After finishing Datacake setup, use the **Datacake** [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}) to create a Webhook integration on {{% tts %}}.

To integrate, you only need to fill out the **Webhook ID** field and provide an [API token](https://docs.datacake.de/api/generate-access-token) from Datacake for the authorization.

{{< figure src="tts-datacake-webhook.png" alt="Datacake webhook" >}}

{{< note >}} To see the values of all parameters of the Datacake integration, click on the integration after you created it with the Webhook template. {{</ note >}}

Once the setup is finished, you can navigate to device's **Debug** tab on Datacake, where you can see the incoming messages and manipulate or monitor your data.

{{< note >}} Check the official Datacake documentation to learn how to [decode the payload](https://docs.datacake.de/lorawan/payload-decoders) received from {{% tts %}}. {{</ note >}}

## Scheduling Downlinks

In addition to forwarding messages from {{% tts %}} to Datacake, you can also schedule downlink messages to be sent from Datacake to your end device.

Enter your device's settings page on Datacake and go to the **Downlinks** tab.

Click the **Add Downlink** button.

Next, fill in the **Name** field, define the **Payload encoder** and click **Save Downlink**. 

{{< note >}} Learn to write payload decoders in the [official Datacake documentation](https://docs.datacake.de/lorawan/downlinks#writing-a-downlink-encoder). {{</ note >}}

{{< figure src="downlink-configuration.png" alt="Configuring downlink" >}}

Now simply click the **Send Downlink** button to schedule a downlink and check your device's logs to see the incoming message.

---
title: "akenza"
description: ""
weight: 
aliases: ["/integrations/cloud-integrations/akenza-core/akenza-setup", "/integrations/cloud-integrations/akenza-core/tts-setup", "/integrations/cloud-integrations/akenza-core"]
---

[akenza](https://akenza.io/) is an IoT platform designed to help you develop your own smart solutions. It connects your sensors, manages the connectivity layer, processes your data and makes it accessible to your cloud application.

<!--more-->

This guide will help you set up an integration between {{% tts %}} and akenza.

## Prerequisites

1. A [user account on akenza](https://auth.akenza.io/login), with an organizationa and a workspace set up.

## akenza integration setup

If you are a new akenza user, and you just set up your organization and your workspace, you will be presented with two options to continue, as shown on the image below. Choose the **Import existing LoRa Devices** option.

If you had an akenza organization and workspace set up before, then navigate to the **Integrations** tab on the left hand menu in your akenza workspace.

{{< figure src="import-lora-devices.png" alt="Import LoRa devices" >}}

Next step is to create the integration, so hit the **+ Create Integration** button.

In the **Connectivity provider** menu, choose **{{% tts %}}**. 

{{< figure src="connectivity-provider.png" alt="Choosing connectivity provider" >}}

To configure {{% tts %}} integration, you first have to choose the host, i.e. {{% tts %}} cluster, depending on your region.

Then, choose the desired **Authentication** method. If you choose the **Application ID / API Key** authentication for example, you will need to provide your {{% tts %}} application ID in the **Application ID** field. You will also need to provide an **API key** from {{% tts %}} that you have previously created in your {{% tts %}} application.

{{< figure src="tts-integration.png" alt="Set up The Things Stack integration" >}}

Finally, just fill in the **Integration name**, click **Next** and finish with **Done** button.

After this process is completed, the initial synchronization will start, and after a few minutes (depending on how many devices your {{% tts %}} application contains), the devices will automatically become available on akenza. If you look under **Integrations &#8594; Webhooks** in your {{% tts %}} application, you will see that an akenza Webhook was automatically created.

{{< figure src="tts-webhook.png" alt="akenza Webhook on The Things Stack" >}}

If you navigate to the **Assets** tab on the left hand menu in akenza, you will a list of devices, which are now available for management via akenza. Select a desired device to see its **Connectivity Details** or to send a **Downlink** to it.

Next time your device sends an uplink to {{% tts %}}, you will be able to observe it in the **Logs** tab on the left hand menu in akenza.

{{< figure src="observe-uplink.png" alt="Observing uplinks" >}}
---
title: "UnaConnect"
description: ""
weight:
---

[UnaConnect](https://docs.unaconnect.io/) is a middleware cloud platform for IoT device management from [UnaBiz](https://www.unabiz.com/). It allows onboarding large fleets of devices, collecting and processing their data, and integrating with various end platforms in a secure and efficient manner.

<!--more-->

This guide will help you set up an integration between {{% tts %}} and UnaConnect.

## Prerequisites

1. A [user account on UnaConnect](https://docs.unaconnect.io/docs/uc-docs/Getting%20Started#before-you-start). 

## UnaBiz setup

Before creating the integration on {{% tts %}}, you first need to [add your device on UnaConnect](https://docs.unaconnect.io/docs/uc-docs/Getting%20Started/adding-device).

## Configure {{% tts %}}

Now you are ready to instantiate the UnaConnect [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}). This will allow you to forward data from your {{% tts %}} device to the UnaConnect device you created in the previous step.

On {{% tts %}}, navigate to **Integrations &#8594; Webhooks** and choose **UnaConnect** Webhook template.

Give a **Webhook ID** to your integration. Enter the **UnaConnect server region** (`aps-1` for Asia-Pacific, `euw-1` for Europe).

{{< figure src="unaconnect-webhook-template.png" alt="UnaConnect integration on TTS" >}}

Congrats, your integration is ready! Navigate to your device on UnaConnect and observe the incoming data from your {{% tts %}} device.

Visit [UnaConnect](https://docs.unaconnect.io/docs/uc-docs/Getting%20Started/Setting%20up%20the%20Networks/tti) for more info.
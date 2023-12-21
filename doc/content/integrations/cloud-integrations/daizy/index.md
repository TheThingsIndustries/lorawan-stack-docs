---
title: "Daizy"
description: ""
distributions: ["Cloud", "Dedicated Cloud", "Enterprise", "Sandbox"]
---

Use [Daizy](https://daizy.io) to rapidly build, deploy and scale Internet of Things applications and stay in control of your data.

Daizy enables rapid scaling by making it easy to design, configure, install and operate your IoT projects and delivers data directly to your business systems.

Devices are automatically enrolled at point of activation, with full support for downlinks to configure and control the device. Daizy will decode all device-specific payloads and deliver data directly to your data lake.

{{% tts %}} licenses can be purchased from Daizy, and in this case there is no additional configuration required. Simply enrol and activate devices in the Daizy platform and they will be automatically enrolled and managed in {{% tts %}}.

<!--more-->

## Use Daizy to manage devices in your own instance

Daizy can be configured to manage devices in your own {{% tts %}} Cloud tenancy or private instance via API.

Devices will be automatically enrolled at point of activation, with full support for downlinks to configure and control the device.

In {{% tts %}}, go to the organisation where you would like Daizy to load and manage devices. Select **API keys** on the menu and then **+Add API key.**

{{< figure src="tts-api-key.png" alt="Creating TTS API Key" >}}

Give the new API key a name and suitable expiry, and under Rights, select **Grant all current and future rights**.

Copy or save the API key.

In the Daizy portal, go to the **Compose &#8594; Connectivity &#8594; LoRa Settings**.

In the drop-down menu, select **The Things Industries**.

{{< figure src="daizy-tts-settings.png" alt="Daizy TTS Settings" >}}

For {{% tts %}} Cloud, enter your **Tenant ID** and select your **Cluster**.

For a private instance, untick the check box and enter the URL to your server.

Paste the **API key** you created in the previous step and enter the **Organisation ID**. You may optionally enter an **Application ID**.

When you click **Save**, a webhook will be created to deliver data to the data lake in your Daizy organisation.

## Deliver data to Daizy through a webhook

You may also deliver data to your data lake without the Daizy platform managing the lifecycle of your devices in {{% tts %}}. This option is suitable for organisations with an existing deployed project looking to make use of payload decoding and universal sensor metrics in Daizy.

The details required for creating the webhook on Daizy can be found under **Compose &#8594; Connectivity &#8594; IoT Endpoint**.

{{< figure src="connectivity.png" alt="Daizy Connectivity tab" >}}

Copy the **Organisation slug** and **Uplink API key** values.

In {{% tts %}}, create a webhook using the ready-made **Daizy** [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}})

Give your Webhook a name in the **Webhook ID** field.

Paste the **Organisation slug** and **Uplink API key** values you copied in the previous steps to the corresponding fields of the Webhook template.

{{< figure src="creating-webhook.png" alt="Daizy webhook" >}}

Finish by clicking the **Create Daizy webhook** button.

Uplink data from your device can be seen in the **Messages** section of the **Device Details** screen within Daizy.

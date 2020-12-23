---
title: "Webhook Integration with Ubidots"
description: ""
weight: 2
---

This section contains instructions for creating a Webhook integration on {{% tts %}} by using the **Ubidots** [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}).

<!--more-->

{{< note >}} Before implementing the Webhook integration, you need to create an uplink payload formatter in order to decode the uplink payload and set fields in the `decoded_payload` object of the uplink message. This is necessary to allow the Ubidots function to interpret the payload coming from {{% tts %}}. See [Payload Formatters]({{< ref "/integrations/payload-formatters" >}}) for a detailed info. {{</ note >}}

First, fill in the **Webhook ID** field.

Then enter your **Ubidots username** and provide your UbiFunction's name.

{{< note >}} The name of the UbiFunction needs to be modified to use lowercase and dashes only. For example, if the UbiFunction is named **Example Function**, enter `example-function` in the **UbiFunction name** field as shown in the image below. {{</ note >}}

{{< figure src="ubidots-webhook-creation.png" alt="Ubidots webhook" >}}

{{< note >}} To see the values of all parameters of the Ubidots integration, click on the integration after you created it with the Webhook template. {{</ note >}}

Once you have created the integration, navigate to **Devices** tab in Ubidots dashboard and select **Devices**. 

You should see your device listed, as it is automatically added when an uplink is received. Click the device to see variables and their latest values.

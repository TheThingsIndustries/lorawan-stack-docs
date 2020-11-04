---
title: "Creating a Webhook"
description: ""
weight: 2
---

Once you have prepared the setup on ThingSpeak, follow this section to create a Webhook integration on {{% tts %}} by using the **ThingSpeak** [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}).

<!--more-->

>**Note:** To see the values of all parameters of the ThingSpeak integration, click on the integration after you create it with the Webhook template. In case you need to create a **Custom webhook**, see the [Creating Webhooks]({{< ref "/integrations/webhooks/creating-webhooks" >}}) guide.

>**Note:** Before implementing the Webhook integration, you need to create an uplink payload formatter in order to decode the uplink payload and set fields in the `decoded_payload` object of the uplink message. See [Payload Formatters]({{< ref "/integrations/payload-formatters" >}}) for a detailed info.

Give a name to your integration by filling in the **Webhook ID** field. 

Fill in the **Channel ID** field with the ThingSpeak channel ID value, and paste the **Write API Key** from ThingSpeak in the **API Key** field.

Finish by clicking the **Create thingspeak webhook** button.

{{< figure src="creating-a-webhook.png" alt="ThingSpeak webhook" >}}

At this point, you can go back to your channel's page on ThingSpeak and check out the field charts under **Channel Stats** to see the visualization of the sensor data sent from {{% tts %}}.

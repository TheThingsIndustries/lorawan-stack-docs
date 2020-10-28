---
title: "Creating a Webhook"
description: ""
weight: 2
---

Once you have prepared the setup on ThingSpeak, follow this section to create a Webhook integration on {{% tts %}}.

<!--more-->

>**Note:** this section follows the [HTTP Webhooks]({{< ref "/integrations/webhooks" >}}) guide.  

>**Note:** Before implementing the Webhook integration, you need to create an uplink payload formatter in order to decode the uplink payload and set fields in the `decoded_payload` object of the uplink message. See [Payload Formatters]({{< ref "/integrations/payload-formatters" >}}) for a detailed info.

Fill in the **Webhook ID** field. 

Create an `Authorization` header entry and paste the **Write API Key** you copied from ThingSpeak in the value field.

Create another header entry named `Channelid` and paste the **Channel ID** value from ThingSpeak as its value.

Finally, add `Content-Type` header entry with `application/json` value.

Choose **JSON** as a **Webhook format** and set the **Base URL** value to `http://api.thingspeak.com/things_network/v3/update`.

Tick the box next to the uplink message type to trigger this webhook with every new uplink message.

{{< figure src="creating-a-webhook.png" alt="ThingSpeak webhook" >}}

At this point, you can go back to your channel's page on ThingSpeak and check out the field charts under **Channel Stats** to see the visualization of the sensor data sent from {{% tts %}}.
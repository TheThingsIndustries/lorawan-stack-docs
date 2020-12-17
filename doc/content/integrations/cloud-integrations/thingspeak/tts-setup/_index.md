---
title: "Webhook Integration with ThingSpeak"
description: ""
weight: 2
---

Once you have prepared the setup on ThingSpeak, follow this section to create a Webhook integration on {{% tts %}} by using the **ThingSpeak** [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}).

<!--more-->

Before implementing the Webhook integration, you need to create an uplink [payload formatter]({{< ref "/integrations/payload-formatters" >}}) in order to decode the uplink payload and set fields in the `decoded_payload` object of the uplink message. The example uplink payload formatter is shown below.

```js
function decodeUplink(input) {
  return {
    data: {
      field1: input.bytes[0],
      field2: input.bytes[1]
    },
    warnings: [],
    errors: []
  };
}
```

The last step is to instantiate the ThingSpeak Webhook template to create a Webhook integration.

Give a name to your integration by filling in the **Webhook ID** field. 

Fill in the **Channel ID** field with the ThingSpeak channel ID value, and paste the **Write API Key** from ThingSpeak in the **API Key** field.

Finish by clicking the **Create thingspeak webhook** button.

{{< figure src="creating-a-webhook.png" alt="ThingSpeak webhook" >}}

{{< note >}} To see the values of all parameters of the ThingSpeak integration, click on the integration after you created it with the Webhook template. {{</ note >}}

At this point, you can go back to your [channels page](https://thingspeak.com/channels) on ThingSpeak and select the private or public view of your channel to check out the field charts under **Channel Stats**. You can now also write and automate MATLAB&reg; code to analyze and further visualize your data.

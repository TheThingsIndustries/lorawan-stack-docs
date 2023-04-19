---
title: "ThingSpeak"
description: ""
weight: 
aliases: ["/integrations/cloud-integrations/thingspeak/thingspeak-setup", "/integrations/cloud-integrations/thingspeak/tts-setup"]
---

[ThingSpeak](https://thingspeak.com/) is an IoT platform with built-in [MATLAB&reg;](https://www.mathworks.com/products/matlab.html) analytics, which allows preprocessing, analyzing and visualizing data sent by IoT devices, as well as creating actions such as alerts based on your channel data.

<!--more-->

## Prerequisites

1. A [user account](https://thingspeak.com/login) on ThingSpeak.

## Setup ThingSpeak

Log in to your ThingSpeak user account and navigate to the **Channels** section. To create a new channel, click the **New Channel** button.

Enter a **Name** for your channel, give labels to the data fields and enable them by checking the boxes next to them. 

When done, scroll down and click the **Save Channel** button.

You should enable a field for each metric from the `decoded_payload` object of the [uplink message]({{< ref "/the-things-stack/concepts/data-formats#uplink-messages" >}}).

{{< figure src="channel.png" alt="Creating a new channel" >}}

For implementing the webhook integration on {{% tts %}}, you will need the following information from your channel's page on ThingSpeak:

- **Channel ID**, which can be found on the **Channel Settings** tab after channel creation, or under your channel's name on top of the channel page;

- **Write API Key**, which can be found on the **API Keys** tab.

{{< figure src="api-key.png" alt="Channel information" >}}

## Configure {{% tts %}}

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

The last step is to instantiate the **ThingSpeak** [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}) to create a Webhook integration.

Give a name to your integration by filling in the **Webhook ID** field. 

Fill in the **Channel ID** field with the ThingSpeak channel ID value, and paste the **Write API Key** from ThingSpeak in the **API Key** field.

Finish by clicking the **Create thingspeak webhook** button.

{{< figure src="creating-a-webhook.png" alt="ThingSpeak webhook" >}}

To see the values of all parameters of the ThingSpeak integration, click on the integration after you created it with the Webhook template.

At this point, you can go back to your [channels page](https://thingspeak.com/channels) on ThingSpeak and select the private or public view of your channel to check out the field charts under **Channel Stats**. You can now also write and automate MATLAB&reg; code to analyze and further visualize your data.



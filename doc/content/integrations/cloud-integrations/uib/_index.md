---
title: "UIB"
description: ""
weight: 
aliases: []
---

[UIB's](https://www.uib.ai/) technology makes human to machine communications simple.

<!--more-->

## Prerequisites

To send a message via WhatsApp, you need to have a WhatsApp Business Account and the content of the notification message which you need to send to the customer has to be submitted to WhatsApp and approved, before it can be used.

Please send us an email to [support@uib.ai](mailto:support@uib.ai), with the company details, Facebook Business Manager ID and an approximate no. of messages you want to send per month. UIB's support team will revert back with the pricing and next steps.

Please note that the template/notification name, name space, access key etc will be provided once the notification message content is approved by WhatsApp.


## Configure {{% tts %}}

In order for UIB to be able to decode the data coming from {{% tts %}}, you need to create an uplink [payload formatter]({{< ref "/integrations/payload-formatters" >}}) on {{% tts %}} in order to decode the uplink payload and set fields in the `decoded_payload` object of the uplink message. The notification message will be sent to user if the `decoded_payload_warnings` is not empty. You can push a text to the warnings array according to your parameter thresholds (`field1`, `field2` etc can be the data of your device, like temprature or pressure). The example uplink payload formatter is shown below.

```js
function decodeUplink(input) {
  var data = {};
  data.field1 = (input.bytes[0] << 8) + input.bytes[1];
  data.field2 = (input.bytes[2] << 8) + input.bytes[3];
  var warnings = [];
  if (data.field1 < -10) {
    warnings.push("Warning");
  }
  return {
    data: data,
    warnings: warnings
  };
}
```

Next, you can create a Webhook integration by instantiating the **UIB** [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}).

The **Application Key**, **Template Name** and the **Template Namespace** values will be provided by UIB and use them in the respective fields of the UIB template on {{% tts %}}.
The **Receiver Phone Number(s)** to which the notification message has to be sent are to be entered separated by comma. 
The **Template Variables** should be added as comma separated and in the order as they appear in the notification message. Use the same parameter names as you provide in the payload formatter

{{< figure src="uib-template-webhook.png" alt="UIB webhook" >}}



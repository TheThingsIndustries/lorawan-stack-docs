# UIB

> UIB’s technology makes human to machine communications simple. Keep following this guide to find out how to send notifications on data events to WhatsApp.

Source: https://www.thethingsindustries.com/docs/integrations/cloud-integrations/uib/


[UIB's](https://www.uib.ai/) technology makes human to machine communications simple. Keep following this guide to find out how to send notifications on data events to WhatsApp.

## Prerequisites

1. A WhatsApp Business Account.
2. The content of the notification message which you need to send to the customer has to be submitted and approved by WhatsApp, before it can be used.

> **Note:** Please send an email to [info@uib.ai](mailto:info@uib.ai) with your company details, Facebook Business Manager ID and an approximate number of messages you want to send per month. UIB's support team will respond you back with the pricing and the steps to proceed.


> **Note:** Please note that the template/notification name, name space, access key, etc. will be provided once the notification message content is approved by WhatsApp.



## Define the Uplink Payload Formatter

In order for UIB to be able to decode the data coming from The Things Stack, you need to create an uplink [payload formatter](https://www.thethingsindustries.com/docs/integrations/payload-formatters/) on The Things Stack to set fields in the `decoded_payload` object of the uplink message.

The notification message will be sent to the user if the `decoded_payload_warnings` field is not empty. You can push a text to the warnings array according to your parameter thresholds (`field1`, `field2`, etc. can be the data of your device, for example temperature or pressure). 

The example uplink payload formatter is shown below:

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

## Configure The Things Stack

Next, you need to create a Webhook integration by instantiating the **UIB** [Webhook template](https://www.thethingsindustries.com/docs/integrations/webhooks/webhook-templates/).

The **Application Key**, **Template Name** and **Template Namespace** values are provided by UIB, and you need to use them in the respective fields of the UIB Webhook template.

The **Receiver Phone Number(s)**, to which the notification message is to be sent, need to be separated by comma on entry.

The **Template Variables** should also be comma separated, and in the order as they appear in the notification message. Make sure to use the same parameter names which you have provided in the payload formatter above.

![UIB webhook](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/uib/uib-template-webhook.png)





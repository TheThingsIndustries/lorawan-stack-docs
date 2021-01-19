---
title: "Webhook Integration with Qubitro"
description: ""
weight: 2
---

This section helps you create a Webhook integration on {{% tts %}} by using the **Qubitro** [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}).

<!--more--> 

In order for Qubitro to be able to decode the data coming from {{% tts %}}, you need to create an uplink [payload formatter]({{< ref "/integrations/payload-formatters" >}}) on {{% tts %}}. The example uplink payload formatter is shown below.

```js
function decodeUplink(input) {
  return {
    data: {
      temperature: input.bytes[0],
      humidity: input.bytes[1]
    },
    warnings: [],
    errors: []
  };
}
```

Next, you can create a Webhook integration by instantiating the Qubitro Webhook template.

Copy the **Project ID** and the **Webhook Signing Key** values from Qubitro. Paste them to the respectively named fields of the Qubitro template on {{% tts %}}.

{{< figure src="creating-a-webhook.png" alt="Qubitro webhook" >}}

{{< note >}} To see or edit the values of all parameters of the Qubitro integration, click on the integration after you created it with the Webhook template. {{</ note >}}

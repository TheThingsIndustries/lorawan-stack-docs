---
title: "Troubleshooting Webhooks"
description: ""
weight: 0
---

This section provides help for common issues and frequently asked questions you may have when using Webhooks. 

<!--more-->

## I see `as.webhook.fail` events in the Live data view. What does this mean?

When sending an uplink via Webhooks fails, {{% tts %}} generates a failure event `as.webhook.fail`. You can find out about the failure cause by observing the event details. {{% tts %}} will return the request body up to 1KB.

Besides the possibility that the Webhook integration might be misconfigured, the most common failure cause is that the user's upstream endpoint cannot handle all uplinks received from {{% tts %}} fast enough, or cannot process the uplink message in 5 seconds (which is {{% tts %}} default timeout).

An example of a Webhook failure event is shown on the image below.

{{< figure src="../webhook-failed-example.png" alt="Webhook failure" >}}

The event details contain a detailed description of a failure cause:

```
"details":[
    {
        "@type": "type.googleapis.com/google.protobuf.Struct",
        "value": {
            "body": "{\"success\":false,\"error\":{\"message\":\"Alias ed2d46a2-00fc-4b2d-98f8-83a9fe7590c not found\",\"id\":null}}",
            "status_code": 404,
            "url": "https://webhook.site/ed2d46a2-00fc-4b2d-98f8-83a9fe7590c",
            "webhook_id": "test"
        }
    }
]
```

By inspecting details shown above, you can see that the Webhook failed with a status code `404`, indicating that the configured BaseURL is not found. To avoid this error, always make sure to check if the upstream endpoint URL is accessible.
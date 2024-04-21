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

## I see webhooks fail with `x509_unknown_authority` error. What should I do?

The error could occur if the certificates configured to the Webhook endpoint have an incomplete certificate chain. Below is the example error message in {{% tts %}} console application live events:

```
"cause": {
      "namespace": "pkg/errors",
      "name": "request",
      "message_format": "request to `{url}` failed",
      "attributes": {
        "op": "Post",
        "url": "<Webhook Endpoint>"
      },
      "correlation_id": "d8e2065e6b924ed2ac6322979ed14997",
      "cause": {
        "namespace": "pkg/errors",
        "name": "x509_unknown_authority",
        "message_format": "unknown certificate authority",
        "correlation_id": "fc22f122d6a7406ab073925569cb7d00",
        "code": 14
  }
}
```

We recommend checking if the webhook endpoint certificate has been generated correctly. If you face any issues, you can contact the certificate provider for further assistance. You may also use this [tool](https://www.ssllabs.com/ssltest/analyze.html) to test the webhook endpoint certificate's complete chain.

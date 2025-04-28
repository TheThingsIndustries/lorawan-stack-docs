---
title: "Webhook Retries"
description: ""
distributions: ["Enterprise", "Cloud"]
new_in_version: "3.30.1"
weight: -1
---

The webhook retries feature allows webhooks to be enqueued and be retried multiple times if the final endpoint is temporarily unavailable.

<!--more-->

A [{{% tts %}} Cloud Plus subscription](https://www.thethingsindustries.com/stack/plans/) is required to use this feature.
If you would like to evaluate this feature on your {{% tts %}} Cloud tenant without a {{% tts %}} Cloud Plus subscription, please contact `support@thethingsindustries.com`.

By default, webhook HTTP requests are tried at most once for each application uplink. This means that if the endpoint is unavailable temporarily, the HTTP requests done in this period are lost, and so is the associated traffic.

Webhook queuing allows individual HTTP requests to be retried at later times, when the endpoint is hopefully back.

## Enabling webhook retries

{{< tabs/container "Console" "HTTP (REST) API">}}

{{< tabs/tab "Console" >}}

The webhook retries feature can be enabled on both new and existing webhooks via the Console, by ticking the **Retries** checkbox in the webhook settings:

After the checkbox has been ticked, and the webhook has been saved, future requests will be enqueued and retried on failure.

{{< figure src="../webhook-retries.png" alt="Webhook queueing enabled" >}}

{{< /tabs/tab >}}

{{< tabs/tab "HTTP (REST) API" >}}

###### Details

<div class="fixed-table table-api-item">

| Item         | Value                                                                                                                                                                                                                       |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Endpoint     | [`/api/v3/as/webhooks/{webhook.ids.application_ids.application_id}/{webhook.ids.webhook_id}`]({{< ref "/api/reference/http/routes/#aswebhooks{webhook.ids.application_ids.application_id}{webhook.ids.webhook_id}-put" >}}) |
| Request type | `PUT`                                                                                                                                                                                                                       |

</br>
</div>

###### Example

To enable webhook retries option of `my-webhook` associated with application `my-test-app` on `thethings.example.com`, first create a JSON file named `req.json` in the same folder with the following contents. Set the `enabled` field to `false` to disable the same.

```json
{
  "webhook": {
    "queue": {
      "enabled": true
    }
  },
  "field_mask": {
    "paths": ["queue.enabled"]
  }
}
```

The request using `cURL` is as follows.

```bash

 curl -X 'PUT' -v -H "Content-Type: application/json" -H "Authorization: Bearer $API_KEY" \
 -d @./req.json https://thethings.example.com/api/v3/as/webhooks/my-test-app/my-webhook | jq
{"ids":{"application_ids":{"application_id":"my-test-app"},"webhook_id":"my-webhook"},"created_at":"2025-02-26T08:04:08.967052214Z","updated_at":"2025-04-24T07:39:19.381493044Z","base_url":"https://www.example.com","format":"json","queue":{"enabled":true}}

```

{{< /tabs/tab >}}

{{< /tabs/container >}}

## What counts as a failed try ?

If the endpoint is completely unavailable (the host is down, the URL is invalid, the connection attempts time out), the try is considered to be failed.

If the endpoint is returning a HTTP status code which is not between 200 and 299, the try is considered failed.

## What is the request timeout ?

A request must take less than 10 seconds from the moment the connection attempt is started until the full response is received.

If longer processing times are required, a queue should be placed between the endpoint and the processing process.

{{< note >}} This is a deployment configuration setting. The values mentioned above are the default values.{{</ note >}}

## How many times is a request going to be retried ?

A request is going to be retried 7 times, including the initial try.

{{< note >}} This is a deployment configuration setting. The values mentioned above are the default values.{{</ note >}}

## How often is a request going to be retried ?

The retry intervals follow an exponential backoff pattern. The initial try is done as soon as the application uplink arrives. The next try is done 4 minutes after the first try fails, followed by a retry done 8 minutes after the second retry. The subsequent 4 retries are done every 15 minute intervals.

In order to avoid overwhelming the endpoint, a 15% jitter is applied to these intervals. This means that the first retry interval will take between 3.4 and 4.6 minutes.

{{< note >}} This is a deployment configuration setting. The values mentioned above are the default values.{{</ note >}}

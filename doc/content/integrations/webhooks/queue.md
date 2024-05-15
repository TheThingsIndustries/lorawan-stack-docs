---
title: "Webhook Queue"
description: ""
distributions: ["Enterprise", "Cloud"]
new_in_version: "3.30.1"
weight: -1
---

The webhook queue feature allows webhooks to be enqueued and be retried multiple times if the final endpoint is temporarily unavailable.

<!--more-->

{{< note  "The webhook queue feature in The Things Stack is currently in beta. Please contact support@thethingsindustries.com to evaluate this feature on your {{% tts %}} Cloud tenant." />}}

By default, webhook HTTP requests are tried at most once for each application uplink. This means that if the endpoint is unavailable temporarily, the HTTP requests done in this period are lost, and so is the associated traffic.

Webhook queuing allows individual HTTP requests to be retried at later times, when the endpoint is hopefully back.

## Enabling webhook queueing

The webhook queue feature can be enabled on both new and existing webhooks via the Console, by ticking the **Retries** checkbox in the webhook settings:

{{< figure src="../webhook-queue-before.png" alt="Enabling webhook queueing" >}}

After the checkbox has been ticked, and the webhook has been saved, future requests will be enqueued and retried on failure.

{{< figure src="../webhook-queue-after.png" alt="Webhook queueing enabled" >}}

## What counts as a failed attempt ?

If the endpoint is completely unavailable (the host is down, the URL is invalid, the connection attempts time out), the attempt is considered to be failed.

If the endpoint is returning a HTTP status code which is not between 200 and 299, the attempt is considered failed.

## What is the request timeout ?

A request must take less than 10 seconds from the moment the connection attempt is started until the full response is received.

If longer processing times are required, a queue should be placed between the endpoint and the processing process.

{{< note >}} This is a deployment configuration setting. The values mentioned above are the default values.{{</ note >}}

## How many times is a request going to be attempted ?

A request is going to be attempted 7 times, including the initial attempt.

{{< note >}} This is a deployment configuration setting. The values mentioned above are the default values.{{</ note >}}

## How often is a request going to be attempted ?

The retry intervals follow an exponential backoff pattern. The initial attempt is done as soon as the application uplink arrives. The next attempt is done 4 minutes after the first attempt fails, followed by an attempt done 8 minutes after the second attempt. The subsequent 4 attempts are done every 15 minute intervals.

In order to avoid overwhelming the endpoint, a 15% jitter is applied to these intervals. This means that the first retry interval will take between 3.4 and 4.6 minutes.

{{< note >}} This is a deployment configuration setting. The values mentioned above are the default values.{{</ note >}}

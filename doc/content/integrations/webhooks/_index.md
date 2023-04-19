---
title: "Webhooks"
description: ""
---

The Webhooks feature allows {{% tts %}} to send application related messages to specific HTTP(S) endpoints.

<!--more-->

## Who is it for?

Webhooks can be used to build integrations between {{% tts %}} and any third party service. For example, {{% tts %}} can send a webhook every time an uplink is received, which can then be visualized in an external dashboard. See [Webhook Templates]({{< relref "webhook-templates" >}}) for examples of third party services which {{% tts %}} is pre-configured to work with.

### Typical use cases

1. Visualizing or acting on uplink data on another platform.
2. Scheduling downlinks from a third party service.

## How does it work?

Webhooks access an HTTP(S) endpoint and pass relevant data as JSON. The third party service must expose this endpoint and listen for data, or post messages to {{% tts %}}. For uplinks, this is encrypted or unencrypted application data, metadata about gateways and signal strength, timestamps, etc. For downlinks, {{% tts %}} expects an application payload.

See [Data Formats]({{< ref "the-things-stack/concepts/data-formats" >}}) for examples of uplink and downlink JSON messages. 

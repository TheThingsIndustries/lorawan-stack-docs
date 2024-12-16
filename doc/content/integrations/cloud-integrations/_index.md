---
title: "Integrate with popular IoT platforms"
description: ""
weight: 7
---

Here you can find detailed guides for creating integrations with popular IoT platforms.

<!--more-->

Please keep in mind that most cloud integrations are enabled only for uplink messages by default.

This is reflected in most of available [Webhook templates]({{< ref "/integrations/webhooks/webhook-templates" >}}) as well, so if you use Webhook templates to create these integrations, you can enable other message types (like join accept, downlink ack, location solved, etc.) by clicking on the integration in {{% tts %}} Console **after** you created it by following integration guides in this section, and then ticking boxes next to other message types.

However, besides enabling desired message type(s), you might also need to take care of the way that your desired third party IoT platform parses and decodes these messages. Since uplink messages are mostly the only ones enabled by default, the integration guides in this section contain instructions for using integrations only with uplink messages.

Select the IoT platform that you want to learn about for integration with {{% tts %}} from the **left menu**.

---
title: "Creating a Webhook"
description: ""
weight: 2
---

After finishing Datacake setup, use the **Datacake** [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}) to create a Webhook integration on {{% tts %}}.

<!--more-->

To integrate, you only need to fill out the **Webhook ID** field and provide an [API token](https://docs.datacake.de/api/generate-access-token) from Datacake for the authorization.

{{< figure src="tts-datacake-webhook.png" alt="Datacake webhook" >}}

{{< note >}} To see the values of all parameters of the Datacake integration, click on the integration after you created it with the Webhook template. {{</ note >}}

Once the setup is finished, you can navigate to device's **Debug** tab on Datacake, where you can see the incoming messages and manipulate or monitor your data.

{{< info >}} Check the official Datacake documentation to learn how to [decode the payload](https://docs.datacake.de/lorawan/payload-decoders) received from {{% tts %}}. {{</ info >}}

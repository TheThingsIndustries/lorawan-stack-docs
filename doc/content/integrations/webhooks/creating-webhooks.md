---
title: "Creating Webhooks"
description: ""
weight: -1
---

This section provides instructions for creating a webhook in the console.

<!--more-->

In addition to the written instructions linked below, a video with instructions for creating webhooks is available on [The Things Network youtube channel](https://youtu.be/trNIzIf3TZo).

<details><summary>Show video</summary>
{{< youtube "trNIzIf3TZo" >}}
</details>

Creating a webhook requires you to have an HTTP(S) endpoint available. If you don't have an endpoint available for testing, you can test with a free service like [Webhook.site](https://webhook.site).

In your application select the **Webhooks** submenu from the **Integrations** side menu. Clicking on the **+ Add Webhook** button will open the list of Webhook templates. 

{{< figure src="../webhook-templates.png" alt="Webhook templates" >}}

To use a predefined webhook template, choose it. Otherwise, to create your own custom webhook, choose **Custom webhook** and follow the instructions below.

{{< figure src="../add-webhook.png" alt="Webhook creation screen" >}}

Give your webhook a **Webhook ID** so that you can identify it. Choose JSON as the **Webhook Format**. For **Base URL**, provide the endpoint URL that the webhook should call, i.e the URL of your webhook integration.

The **Downlink API key** field allows you to provide an API key which will be sent with all messages to the webhook endpoint. This can be useful to allow your integration to schedule downlinks without requiring you to hardcode an API key in the endpoint.

{{< note >}}
Your integration may also [schedule downlinks using an API key with appropriate rights]({{< relref "scheduling-downlinks" >}}), regardless of the value in the **Downlink API key** field.
{{< /note >}}

To enable messages for different types of events, use the checkboxes in the **Enabled messages** section.

{{< figure src="../enabled-messages.png" alt="Webhook creation screen" >}}

The paths are appended to the **Base URL**. In the example from the images above, the Application Server will perform `POST` requests on the endpoint `https://webhook.site/uplinks` for uplinks, `https://webhook.site/join-accept` for join-accept messages, and `https://webhook.site/downlink-ack` for downlink acknowledgement messages.

See [Data Formats]({{< ref "reference/data-formats" >}}) for examples of uplink and downlink JSON messages. 

Clicking the **Add Webhook** button will create the Webhook.

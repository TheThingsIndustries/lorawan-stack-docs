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

Creating a webhook requires you to have an HTTP(S) endpoint available.

In your application select the **Webhooks** submenu from the **Integrations** side menu. Clicking on the **+ Add Webhook** button will open the Webhook creation screen. 

Fill in your **Webhook ID**, choose **Webhook Format** and provide **Base URL**.

{{< figure src="../webhook-creation.png" alt="Webhook creation screen" >}}

The paths are appended to the base URL. For example, if you follow the example in the picture above, the Application Server will perform `POST` requests on the endpoint `https://app.example.com/lorahooks/join` for join-accepts and `https://app.example.com/lorahooks/up` for uplink messages.

See [Data Formats]({{< ref "reference/data-formats" >}}) for examples of uplink and downlink JSON messages. 

Clicking the **Add Webhook** button will create the Webhook.

{{< note >}} If you don't have an endpoint available for testing, you can test with a free service like [Webhook.site](https://webhook.site). {{</ note >}}

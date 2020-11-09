---
title: "ThingSpeak Setup"
description: ""
weight: 1
---

Follow the steps below to prepare the setup for the integration with {{% tts %}}.

<!--more-->

Log in to your ThingSpeak user account and navigate to the **Channels** section. To create a new channel, click the **New Channel** button.

Enter a **Name** for your channel, give labels to the data fields and enable them by checking the boxes next to them. 

When done, scroll down and click the **Save Channel** button.

>**Note:** You should enable a field for each metric from the `decoded_payload` object of the [uplink message]({{< ref "/integrations/data-formats#uplink-messages" >}}).

{{< figure src="channel.png" alt="Creating a new channel" >}}

For implementing the webhook integration on {{% tts %}}, you will need the following information from your channel's page on ThingSpeak:

- **Channel ID**, which can be found on the **Channel Settings** tab after channel creation, or under your channel's name on top of the channel page;

- **Write API Key**, which can be found on the **API Keys** tab.

{{< figure src="api-key.png" alt="Channel information" >}}

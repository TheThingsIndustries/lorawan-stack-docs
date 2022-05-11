---
title: "Daizy"
description: ""
weight:
---

Use [Daizy](https://daizy.io) to rapidly build, deploy and scale Internet of Things applications and stay in control of your data.

The Daizy platform provides an intuitive management system for IoT devices and projects, and delivers data directly to any existing or future business systems. Daizy enables rapid scaling by reducing time to market for any IoT implementation while minimizing cost, improving flexibility and maintaining security.

<!--more-->

## Prerequisites

1. A user account and organisation created within the [Daizy platform](https://portal.daizy.io/login).
2. LoRa devices enrolled and activated in your Daizy project.

## Set up Daizy

The details required for creating the webhook on Daizy can be found under **Compose &#8594; Connectivity &#8594; IoT Endpoint**.

{{< figure src="connectivity.png" alt="Daizy Connectivity tab" >}}

Copy the **Organisation slug** and **Uplink API key** values.

## Configure {{% tts %}}

In {{% tts %}}, create a webhook using the ready made **Daizy** [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}).

Give your Webhook a name in the **Webhook ID** field.

Paste the **Organisation slug** and **Uplink API key** values you copied in the previous steps to the corresponding fields of the Webhook template.

{{< figure src="creating-webhook.png" alt="Daizy webhook" >}}

Finish by clicking the **Create Daizy webhook** button.

Uplink data from your device can be seen in the **Messages** section of the **Device Details** screen within Daizy.

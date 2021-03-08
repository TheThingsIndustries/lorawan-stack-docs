---
title: "Qubitro"
description: ""
weight: 
aliases: ["/integrations/cloud-integrations/qubitro/qubitro-setup", "/integrations/cloud-integrations/qubitro/tts-setup", "/integrations/cloud-integrations/qubitro/monitor-data"]
---

[Qubitro](https://www.qubitro.com/) is a modern, brand and model agnostic IoT platform for designing and developing IoT projects. Connecting devices can be performed via multiple protocols, while security is based on using TLS/DTLS and a built-in token authentication mechanism. Thanks to its user-friendly portal and programmable APIs, you do not have to worry about the infrustructure management and scalability.

<!--more-->

## Prerequisites

1. A [user account on Qubitro](https://portal.qubitro.com/signup).

## Setup Qubitro

Log in to your Qubitro user account and navigate to **Projects** on the left hand menu. 

Create a new project by choosing **New Project**, then providing a **Project Name** and a **Project Description**.

{{< figure src="create-new-project.png" alt="Creating a new project" >}}

When you have created your project, switch to the **Settings** tab and note down the **Project ID** since you will need it in the later steps. 

{{< figure src="project-settings.png" alt="Project settings" >}}

In the upper right corner, click on your avatar and then select **Account**. You will see a detailed info related to your account. 

In your account settings, find the **Webhook Signing Key** under the **API Keys** tab. You will need this key also to complete the Webhook integration on {{% tts %}}.

{{< figure src="webhook-signing-key.png" alt="Webhook signing key" >}}

## Configure {{% tts %}}

In order for Qubitro to be able to decode the data coming from {{% tts %}}, you need to create an uplink [payload formatter]({{< ref "/integrations/payload-formatters" >}}) on {{% tts %}}. The example uplink payload formatter is shown below.

```js
function decodeUplink(input) {
  return {
    data: {
      temperature: input.bytes[0],
      humidity: input.bytes[1]
    },
    warnings: [],
    errors: []
  };
}
```

Next, you can create a Webhook integration by instantiating the **Qubitro** [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}).

Copy the **Project ID** and the **Webhook Signing Key** values from Qubitro. Paste them to the respectively named fields of the Qubitro template on {{% tts %}}.

{{< figure src="creating-a-webhook.png" alt="Qubitro webhook" >}}

{{< note >}} To see or edit the values of all parameters of the Qubitro integration, click on the integration after you created it with the Webhook template. {{</ note >}}

## Monitor Your Data

Go back to Qubitro and navigate to your project. You will see that a device has been automatically added to your project. 

Click on the device and switch to the **Data** tab to see the incoming decoded data from {{% tts %}}.

{{< figure src="decoded-data.png" alt="The incoming decoded data" >}}

Switch to the **Analytics** tab and click the **Create chart** button to visualize this data.

Enter a **Chart Name**, choose the parameters you wish to visualize on this chart, select the type of chart for each parameter and the color to differentiate them. Finish with **Create**.

{{< figure src="create-a-chart.png" alt="Creating a chart" >}}

Now, you can see the real-time chart showing your data coming from {{% tts %}}!

{{< figure src="real-time-graph.png" alt="Real-time graph showing your data" >}}

For more cool features, see the [official Qubitro documentation](https://docs.qubitro.com/)!

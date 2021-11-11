---
title: "AnyViz"
description: ""
weight: 
---

[AnyViz](https://www.anyviz.io/) offers an easy way to operate, monitor and analyze machine and plant controls remotely. Some of its features are real-time data visualization, data storage, automated reports, etc. 

<!--more-->

## Prerequisites

1. A [user account on AnyViz Portal](https://www.portal.anyviz.io/).

## Setup AnyViz

When you log into your AnyViz account, the only thing you need to do is to create a new project.

In the upper right corner of your AnyViz dashboard, click on the project name (next to the user profile), then click on the small nut icon next to the project name in the list. Your project's settings will appear, and you will be able to see the **Project number** you need in order to complete the integration.

{{< figure src="project.png" alt="AnyViz project" >}}

## Configure {{% tts %}}

Before implementing the Webhook integration, you need to create an uplink [payload formatter]({{< ref "/integrations/payload-formatters" >}}) in order to decode the uplink payload and set fields in the `decoded_payload` object of the uplink message.

Next step is to create a Webhook integration on {{% tts %}} by using the **AnyViz** [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}).

Fill in the **Webhook ID** field. The **AnyViz instance** field is predefined with `portal.anyviz.io`. Provide the **Project number** you found in the previous step on AnyViz and copy it into the **AnyViz project ID** field.

{{< figure src="webhook-template.png" alt="AnyViz webhook" >}}

To see the values of all parameters of the AnyViz integration, click on the integration after you created it with the Webhook template.

As soon as the first uplink is sent from your end device, you will see an object named after your {{% tts %}} application appearing on the left hand menu in AnyViz. If you expand this object, you will see it contains the extracted variables from the `decoded_payload` object, as well as RSSI and SNR from uplink metadata.

You can now continue using AnyViz features to monitor and process your sensor data. Have fun!
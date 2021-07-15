---
title: "Cloud Studio"
description: ""
weight:
---

[Cloud Studio](https://www.cloud.studio/) is an IoT software company that developed an IoT platform which enables monitoring, control and automation of facilities. This platform is code-less and highly customizable, allowing enterprise and government entities to easily manage it in their unique way.

<!--more-->

Under Cloud Studio, you can find three IoT application [sub-platforms](https://www.cloud.studio/products/): Gear Studio, Beam Studio and Bespoke Projects. For integrating {{% tts %}} with Cloud Studio, we use [Gear Studio](https://www.cloud.studio/gear-studio-iot-application-platform/).

> Read more in the [official Gear Studio wiki documentation site](https://wiki.cloud.studio/).

## Prerequisites

1. A [user account on Gear Studio](https://gear.cloud.studio/gear/common/sign-up).

## Setup Gear Studio

When you log in to the Gear Studio, you are presented with the dashboard in the **Monitoring** mode. 

To add a new device, you first need to switch to the **Settings** mode by clicking on the nut icon in the upper left, as shown on the image below.

{{< figure src="dashboard.png" alt="Cloud Studio dashboard" >}}

When you are in the **Settings** mode, navigate to **Devices &#8594; Devices** on the left hand menu and select the **Add** button.

Next, you need to enter a **Description**, and provide the **Model** and the DevEUI of your end device.

{{< note >}} At the time of writing this guide, a user can complete the integration only if using a device model that is available in the **Model** drop-down list.

A scripting engine that will allow the integration to be completed using any end device is expected to be available on Gear Studio soon! {{</ note >}}

{{< figure src="add-device.png" alt="Adding a new device" >}}

To complete the integration on {{% tts %}}, in the next step you will need an access token. You can create an access token by navigating to **Security &#8594; Access tokens** and clicking on the **Add** button.

Provide a **Description** for your token, enter your **E-mail** and set your **Password**. Finish with **Save**, copy the token and store it in a safe place.

{{< figure src="access-token.png" alt="Creating an access token" >}}

{{< figure src="copy-token.png" alt="Copy the access token" >}}

## Configure {{% tts %}}

After finishing Gear Studio setup, use the **Cloud Studio** [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}) to create a Webhook integration on {{% tts %}}.

First, fill in the **Webhook ID**.

Then you need to provide a Gear Studio **Server instance** that is hosting your Gear Studio IoT platform. This depends on your Gear Studio subscription. The default value is `gear.cloud.studio` that is commonly used for free subscriptions.

> See [this page](https://wiki.cloud.studio/en/page/174) for detailed information on other server instances.

As the last step, paste the access token you copied from Gear Studio in the **Access token** field.

{{< figure src="cloud-studio-template.png" alt="Cloud Studio Webhook template" >}}

{{< note >}} To see the values of all parameters of the Cloud Studio integration, click on the integration after you created it with the Webhook template. {{</ note >}}

Now, go back to the **Monitoring** mode of your Gear Studio dashboard, navigate to **Devices** on the left hand menu and start monitoring your sensor data!
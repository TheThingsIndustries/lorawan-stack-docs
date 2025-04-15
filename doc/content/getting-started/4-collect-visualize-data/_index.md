---
title: "Step 4: Collect and visualize data"
description: ""
weight: 4
---

This guide walks you through different options available for you to collect and visualize your LoRaWAN data.

<!--more-->

This guide offers three mutually exclusive options.

1. Store and retrieve messages with {{% tts %}} message storage.
2. Create a dashboard using an external IoT platform.
3. (Advanced) Retrieve data on your local machine using ngrok.

{{< tabs/container "Store and retrieve messages" "Create a dashboard" "Retrieve data locally (Advanced)" >}}

{{< tabs/tab "Store and retrieve messages" >}}

> TODO: ADD

{{< /tabs/tab >}}

{{< tabs/tab "Create a dashboard" >}}

{{% tts %}} does not support building dashboards as they are very specific to the use case and are meant to be very customizable.

Instead, there are many IoT platforms out there on the market which provide various dashboard options. For this example, we are going to use one such platfrom called [Datacake](https://app.datacake.de/login).

#### Datacake

1. Create an account on the [Datacake](https://app.datacake.de/login) platform and login.
2. Select **Add Device** and choose the **LoRaWAN** option.

{{< figure src="lorawan-device.png" alt="LoRaWAN Device" >}}

3. In the search bar after **Device Template**, search for `mClimate Multipurpose Button`. Select **Next**.

{{< figure src="mclimate-button.png" alt="mClimate button" >}}

4. In the **Network Server** tab select, `The Things Stack v3` and click **Next**.

{{< figure src="tts.png" alt="The Things Stack" >}}

5. In the **Add Devices** section, choose **Manual** and enter the Device EUI of the end device. You can find this on the overview page of your device on {{% tts %}} console.

{{< figure src="device-details.png" alt="Device Details" >}}

6. Choose the free plan to proceed.

7. Head over to the **Configuration** tab of your end device and scroll down to the **LoRaWAN** section.

8. Click **Show setup instructions** and copy the URL that starts with `https://api.datacake.co` and save it somewhere.

#### {{% tts %}}

Now head back to {{% tts %}} console and go to your application.

1. Click on the **Webhooks** option from the side panel.

   > TODO: Add screenshot of navigation with webhooks.

2. Click **Add webhook**. Choose **Custom webhook**.

3. Enter the webhook details

- **Wehbook ID**: An identifier for your Webhook. This cannot be changed later.
- **Webhook format**: Keep this as `JSON`.
- **Base URL**: Enter the URL from Datacake's LoRaWAN tab that you copied earlier. This starts with `https://api.datacake.co`.
- The rest of the fields below can be left as it is for now.

{{< figure src="wh-general-settings.png" alt="Webhook general settings" >}}

4. Head down to the **Enabled event types** tab and check **Uplink message** and **Join request**. You can also choose to enable all the message types.

{{< figure src="wh-event-types.png" alt="Webhook event types" >}}

5. The newly created webhook will have the `pending` status.

{{< figure src="wh-created.png" alt="Webhook created" >}}

6.  Click the button on your end device. The uplink message should now be successfully transmitted to the {{% tts %}} and it will be sent to Datacake. If you now refresh the webhooks page, the webhook will be marked as `healthy`.

{{< figure src="wh-healthy.png" alt="Webhook healthy" >}}

> TODO: Add Datacake examples

{{< /tabs/tab >}}

{{< tabs/tab "Retrieve data locally (Advanced)" >}}

## These are console instructions

{{< /tabs/tab >}}

{{< /tabs/container >}}

Now that

---
title: "TagoIO Setup"
description: ""
weight: 1
---

This section helps you to prepare TagoIO setup for integration with {{% tts %}}.

<!--more-->

Log in to your TagoIO user account and click the **Devices** button on the left hand menu. 

The list of available connectors will pop out immediately if you do not own any devices. 

>**Note:** If you already own some devices on TagoIO, select **Add Device** in the upper right to add a new device.

Choose **LoRaWAN TTI** connector and then select **Custom The Things Industries**.

{{< figure src="custom-tti-device.png" alt="Choosing a Custom TTN device" >}}

Give a name to your device by filling the **Device name** field, enter the **Device EUI** and click the **Create my device** button to finish.

{{< figure src="device-settings.png" alt="Configuring a device" >}}

When the device has been succesfully created, you will be presented with a confirmation window, so you can just click **Continue**. 

{{< figure src="confirmation-window.png" alt="Device successfully created" >}}

Now, **Don't forget the [authorization](https://docs.tago.io/en/articles/218)!** Click the **Generate authorization** button. 

{{< figure src="auth-pop-out.png" alt="Generate Authorization pop-out window" >}}

When redirected to the **Service Authorization** page, just fill in the **Name** field and select **Generate**. Copy this value for further steps.

Click **Finish** and select the device you just created in **Devices** to access its features.

{{< figure src="device-features.png" alt="Device features" >}}

Navigate to the **Live Inspector** tab and press the **Start** button to prepare the integration for the incoming messages from {{% tts %}}.

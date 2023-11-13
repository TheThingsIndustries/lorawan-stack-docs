---
title: "Generic Node Sensor Edition"
description: ""
weight:
---

{{< figure src="generic-node-se.png" alt="Generic Node Sensor Edition" class="float plain" >}}

This section explains how to get started with the [Generic Node Sensor Edition](https://www.genericnode.com/docs/sensor-edition/) (GNSE) on {{% tts %}}.

<!--more-->

The Generic Node Sensor Edition comes with a pre-loaded application called [vanilla](https://www.genericnode.com/docs/applications/se-vanilla/) that showcases the device's functions and capabilities. This application utilizes a combination of the onboard components including the LEDs, button, buzzer, accelerometer, secure element, temperature sensor, and humidity sensor. The instructions on how to flash a new application onto the Generic Node SE can be found [here](https://www.genericnode.com/docs/getting-started/se-sw/env-setup/).

# Onboarding GNSE Using the QR Code

The Generic Node can be onboarded to {{% tts %}} using the QR code which is printed on the back of its enclosure.

Sign in to [{{% tts %}}](/getting-started/quick-start/).

In {{% tts %}} **Console**, choose the application to which you want to add the GNSE. See [Adding applications](/integrations/adding-applications/) if you haven't created one yet.

Select the **Register end device** button.

{{< figure src="application-overview.png" alt="Application overview" >}}

In the **Register end device** page select the **Scan end device QR code** button.

{{< figure src="register-end-device.png" alt="Register end device" >}}

The camera will start up and be ready to scan the QR code. To scan the device, bring the QR code close to the camera.

{{< figure src="waiting-for-camera.png" alt="Waiting for camera" >}}

A window with information scanned from the QR code (like **Claim authentication code**, **JoinEUI**, **DevEUI** and **Brand**) should appear on your screen. If the data displayed is correct, select the **Apply** button.

{{< figure src="found-qr-data.png" alt="Found QR data" >}}

To continue with the rest of the registration process you can choose either **LoRaWAN® Device Repository** or **manual registration**.

### Using the LoRaWAN Device Repository

The [LoRaWAN® Device repository](https://github.com/TheThingsNetwork/lorawan-devices) comprises over 600 end-device profiles, including the Generic Node Sensor Edition, which requires less information for registration with {{% tts %}}.

In the **End device type** section, under **Input Method** select **Select the end device in the LoRaWAN device repository**. Then select/enter the following values:

- End device brand: **The Things Industries**
- Model: **Generic Node (Sensor Edition)**
- Hardware Ver.: **1.1**
- Firmware Ver.: **1.1**
- Profile (Region): choose **EU_863_870** for Europe or **US_902_928** for US
- Frequency plan: choose the frequency plan appropriate for your region/country, for example, if you are live in Europe, choose **Europe 863-870 MHz (SF9 for RX2 - recommended)**.

{{< figure src="dev-rep-1.png" alt="Settings for registration through device repository" >}}

- JoinEUI: pre-filled
- DevEUI: pre-filled (this is the secure element’s DevEUI)
- AppKey: select the **Generate** button.
- End device ID: you can continue with the pre-filled value or use any other unique value.

Select the **Register end device** button.

{{< figure src="dev-rep-2.png" alt="Settings for registration through device repository" >}}

The device is now registered and you will be redirected to the **Overview** page of the device.

{{< figure src="gnse-after-register.png" alt="GNSE overview page" >}}

### Manually

The Generic Node Sensor Edition also supports manual registration, but you need to find the required settings from the datasheet and ensure that they are entered correctly.

In the **End device type** section, under **Input Method** select **Enter end device specifics manually**.

Then select/enter the following values:

- Frequency plan: choose the frequency plan appropriate for your region/country, for example, if you are live in Europe, choose **Europe 863-870 MHz (SF9 for RX2 - recommended)**.
- LoRaWAN version: **LoRaWAN Specification 1.0.2**
- Regional parameters version: **RP001 Regional Parameters 1.0.2 revision B**

Select **Show advanced activation, LoRaWAN class and cluster settings** to expand the section. Ensure that the default selection is **Over the Air Activation (OTAA)**.

{{< figure src="manually-1.png" alt="Settings for manual registartion" >}}

Under **Provisioning information** enter the following settings:

- JoinEUI: pre-filled
- DevEUI: pre-filled (this is the secure element’s DevEUI)
- AppKey: select the **Generate** button.
- End device ID: you can continue with the pre-filled value or use any other unique value.

Select the **Register end device** button.

{{< figure src="manually-2.png" alt="Settings for manual registartion" >}}

The device is now registered and you will be redirected to the **Overview** page of the device.

{{< figure src="gnse-after-register.png" alt="GNSE overview page" >}}

---
title: "Moko Smart LW001-BG Pro"
description: ""
weight: 
---

{{< figure src="lw001-bg-pro.png" alt="Moko Smart LW001-BG Pro" class="float plain" width="50%">}}

The Moko Smart [LW001-BG Pro](https://www.mokosmart.com/lorawan-tracker-lw001-bg-pro/) is a LoRaWAN tracker. It integrates GPS positioning, Bluetooth positioning and WiFi positioning and supports multiple detection methods, such as anti-demolition alarm, motion detection and vibration detection.  

The device supports a variety of working modes as well and is suitable for most tracking applications.

<!--more-->

## Turning on the device

To access the provisioning information (the **JoinEUI/AppEUI**, **DevEUI** and **AppKey**) you need to turn on the device first and connect to it. Before continuing make sure to download the **MKLoRa** app on the [Play Store](https://play.google.com/store/apps/details?id=com.moko.mklora) or the [App Store](https://apps.apple.com/us/app/mklora/id1562806152).

To turn on the device, **approach the Hall sensor area with a magnet and quickly move it away 3 times.**
When the power indicator lights up **solid green for 3 seconds**, the device is turned on. The image below illustrates this process.

{{< figure src="lw001-bg-pro-turn-on.jpg" alt="Turning on the LW001-BG Pro" class="plain">}}

{{< note "It may take a few tries for the device to properly register the magnet and turn on. Keep swiping the magnet until the LED stays on for 3 seconds." />}}

## Provisioning Information

Open the **MKLoRa** app, select device type (in this case, the LW001-BG PRO) and you should then see the device show up. If not, click on the refresh icon in the top right and make sure that Bluetooth on your phone is on.

Click on **connect** and enter the default password: `Moko4321`.

{{< figure src="moko-app-list.png" alt="Device showing up inside of the app" width="40%">}}

Once you're on the main page, click on **Connection Settings**. Here you can find the provisioning information and configure other LoRa-related settings. The **DevEUI, AppEUI and AppKey** are needed in the next step when onboarding the device to {{% tts %}}.

{{< figure src="moko-app-connection.png" alt="Provisioning information inside app" width="40%">}}

## Onboarding to {{% tts %}}

The device can be onboarded using the **Device Repository** or **manually**.

{{< note "The LW001-BG Pro does not support onboarding with a QR code." />}}

The [LoRaWAN® Device repository](https://github.com/TheThingsNetwork/lorawan-devices) comprises over 800 end-device profiles, including the Moko Smart LW001-BG Pro, which enables quick and easy registration with {{% tts %}}.

In the **End device type** section, under **Input method**, select either the **Select the end device in the LoRaWAN Device Repository** or **Enter end device specifics manually** option. The [Onboarding devices without QR codes]({{< ref "/devices/adding-devices/#onboarding-devices-without-qr-codes" >}}) section of the [Adding Devices]({{< ref "/devices/adding-devices/" >}}) guide explains this procedure in detail. Following details are LW001-BG Pro-specific:

- End device brand: **Moko Technology Ltd**
- Model: **LW001-BGPRO**
- Hardware Ver.: **2.4**
- Firmware Ver.: **1.0.7**

After configuring your device, select the **Register end device** button.

{{< figure src="lw001-bg-pro-prov-info-stack.png" alt="Settings for registration through device repository" >}}

If you prefer onboarding **manually**, in the **End device type** section, under **Input Method**, select the **Enter end device specifics manually** option. The [Manually adding devices]({{< ref "/devices/adding-devices/manual/" >}}) and [Over the Air Activation (OTAA)]({{< ref "/devices/adding-devices/manual/otaa/" >}}) guides explain this procedure in detail. Following details are specific to the LW001-BG Pro:

- LoRaWAN version: **LoRaWAN Specification 1.0.3**
- Regional parameters version: **RP001 Regional Parameters 1.0.3 revision A** 

After configuring your device, select the **Register end device** button.

{{< figure src="manual-register.png" alt="Settings for manual registration" >}}

## Monitoring Live Data

When your device is registered, select the **Live Data** tab to view all messages exchanged between your end device and {{% tts %}}.

{{< figure src="lw001-bg-pro-live-data.png" alt="Live Data tab" >}}
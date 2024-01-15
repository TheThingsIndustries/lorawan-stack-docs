---
title: "Moko Smart LW001-BG Pro"
description: ""
weight: 
---

{{< figure src="lw001-bg-pro.png" alt="Generic Node Sensor Edition" class="float plain" width="40%">}}

The Moko Smart [LW001-BG Pro](https://www.mokosmart.com/lorawan-tracker-lw001-bg-pro/) is a LoRaWAN Tracker. It integrates GPS positioning, Bluetooth positioning and WiFi positioning, supports a variety of working modes and is suitable for most tracking applications.

<!--more-->

## Provisioning Information

Provisioning information (the **JoinEUI/AppEUI**, **DevEUI** and **AppKey**) can be found on a sticker inside the box. 

{{< figure src="lw001-bg-pro-prov-info.png" alt="LW001-BG Pro provisioning information" width="50%">}}

{{< note "The LW001-BG Pro does not support onboarding with a QR code. You can onboard it in the section below." />}}

## Turning on the device

magnet bla bla expand

## Onboarding to {{% tts %}}

The device can be onboarded using the **Device Repository** or by **manually** entering the specific information.

The [LoRaWAN® Device repository](https://github.com/TheThingsNetwork/lorawan-devices) comprises over 600 end-device profiles, including the Moko Smart LW001-BG Pro, which enables quick and easy registration with {{% tts %}}.

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
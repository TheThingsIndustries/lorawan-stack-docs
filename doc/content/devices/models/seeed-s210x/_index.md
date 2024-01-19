---
title: "Seeed Studio S210x Series"
description: ""
weight: 
---

{{< figure src="s210x.png" alt="Generic Node Sensor Edition" class="float plain" width="80%">}}

The Seeed Studio [S210x Series](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) offers users’ industrial long-distance data acquisition via LoRaWAN. This series is suitable for a wide variety of different industries such as smart agriculture, smart buildings and industrial control. 

<!--more-->

## Sensor Setup

To acquire the provisioning information and properly setup the sensor you must download the **SenseCap Mate** App from the Play Store or the App Store on your phone.

After opening the app follow the instructions EXPAND ON THIS

{{< note "The S210x does not support onboarding with a QR code. You can onboard it in the section below." />}}

## Onboarding to {{% tts %}}

The device can be onboarded using the **Device Repository** or by **manually** entering the specific information.

The [LoRaWAN® Device repository](https://github.com/TheThingsNetwork/lorawan-devices) comprises over 600 end-device profiles, including the Seeed Studio, which enables quick and easy registration with {{% tts %}}.

In the **End device type** section, under **Input method**, select either the **Select the end device in the LoRaWAN Device Repository** or **Enter end device specifics manually** option. The [Onboarding devices without QR codes]({{< ref "/devices/adding-devices/#onboarding-devices-without-qr-codes" >}}) section of the [Adding Devices]({{< ref "/devices/adding-devices/" >}}) guide explains this procedure in detail. Following details are S210x-specific:

- End device brand: **SenseCAP**
- Model: **S210x** *(replace the 'x' with whichever type you have)*
- Hardware Ver.: **1.0**
- Firmware Ver.: **1.0**

After configuring your device, select the **Register end device** button.

{{< figure src="s210x-prov-info-stack.png" alt="Settings for registration through device repository" >}}

If you prefer onboarding **manually**, in the **End device type** section, under **Input Method**, select the **Enter end device specifics manually** option. The [Manually adding devices]({{< ref "/devices/adding-devices/manual/" >}}) and [Over the Air Activation (OTAA)]({{< ref "/devices/adding-devices/manual/otaa/" >}}) guides explain this procedure in detail. Following details are specific to the S210x:

- LoRaWAN version: **LoRaWAN Specification 1.0.2**
- Regional parameters version: **RP001 Regional Parameters 1.0.2 revision B** 

After configuring your device, select the **Register end device** button.

{{< figure src="manual-register.png" alt="Settings for manual registration" >}}

## Monitoring Live Data

When your device is registered, select the **Live Data** tab to view all messages exchanged between your end device and {{% tts %}}.

{{< figure src="s210x-live-data.png" alt="Live Data tab" >}}
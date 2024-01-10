---
title: "Dragino LHT52"
description: ""
weight: 
---

{{< figure src="lht52.png" alt="Generic Node Sensor Edition" class="float plain">}}

The Dragino [LHT52](https://www.dragino.com/products/temperature-humidity-sensor/item/199-lht52.html) is a temperature & humidity sensor. It features a Type-C port for connecting to accessories, such as an external temperature sensor for example.

<!--more-->

## Provisioning Information

Provisioning information (The **JoinEUI/AppEUI**, **DevEUI** and **AppKey**) can be found on a sticker inside the box. 

{{< figure src="lht52-prov-info.png" alt="LHT52 provisioning information" width="50%">}}

{{< note "The LHT52 does not support onboarding with a QR code. You can onboard it in the section below." />}}

## Onboarding to {{% tts %}}

The device can be onboarded using the Device Repository or by manually entering the specific information.
The [LoRaWAN® Device repository](https://github.com/TheThingsNetwork/lorawan-devices) comprises over 600 end-device profiles, including the Dragino LHT52, which enables quick and easy registration with {{% tts %}}.

In the **End device type** section, under **Input method**, select either the **Select the end device in the LoRaWAN Device Repository** or **Enter end device specifics manually** option. The [Onboarding devices without QR codes]({{< ref "/devices/adding-devices/#onboarding-devices-without-qr-codes" >}}) section of the [Adding Devices]({{< ref "/devices/adding-devices/" >}}) guide explains this procedure in detail. Following details are LHT52-specific:

- End device brand: **Dragino Technology Co., Limited**
- Model: **LHT52**
- Hardware Ver.: **Unknown ver.**
- Firmware Ver.: **1.0**

{{< note >}} If you are manually adding the device, enter these details specifically for the LHT52:
- LoRaWAN version: **LoRaWAN Specification 1.0.3**
- Regional parameters version: **RP001 Regional Parameters 1.0.3 revision A** {{</ note >}}

After configuring your device, select the **Register end device** button.

{{< figure src="lht52-prov-info-stack.png" alt="Settings for registration through device repository" >}}

{{< figure src="manual-register.png" alt="Settings for manual registration" >}}

## Monitoring Live Data

When your device is registered, select the **Live Data** tab to view all messages exchanged between your end device and {{% tts %}}.

{{< figure src="lht52-live-data.png" alt="Live Data tab" >}}

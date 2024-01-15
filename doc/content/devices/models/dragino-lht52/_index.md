---
title: "Dragino LHT52"
description: ""
weight: 
---

{{< figure src="lht52.png" alt="Generic Node Sensor Edition" class="float plain">}}

The Dragino [LHT52](https://www.dragino.com/products/temperature-humidity-sensor/item/199-lht52.html) is a temperature & humidity sensor. It features a Type-C port for connecting to accessories, such as an external temperature sensor for example.

<!--more-->

## Provisioning Information

Provisioning information (the **JoinEUI/AppEUI**, **DevEUI** and **AppKey**) can be found on a sticker inside the box. 

{{< figure src="lht52-prov-info.png" alt="LHT52 provisioning information" width="50%">}}

{{< note "The LHT52 does not support onboarding to {{% tts %}} using a QR code." />}}

## Onboarding to {{% tts %}}

The LHT52 can be onboarded to {{% tts %}} using the **Device Repository** or by **manually** entering the device specifics.

The [LoRaWAN® Device repository](https://github.com/TheThingsNetwork/lorawan-devices) comprises over 600 end-device profiles, including the Dragino LHT52, which enables quick and easy onboarding to {{% tts %}}.

In the **End device type** section, under **Input method**, select either the **Select the end device in the LoRaWAN Device Repository** or **Enter end device specifics manually** option. The [Onboarding devices without QR codes]({{< ref "/devices/adding-devices/#onboarding-devices-without-qr-codes" >}}) section of the [Adding Devices]({{< ref "/devices/adding-devices/" >}}) guide explains this procedure in detail. Following details are LHT52-specific:

- End device brand: **Dragino Technology Co., Limited**
- Model: **LHT52**
- Hardware Ver.: **Unknown ver.**
- Firmware Ver.: **1.0**

After configuring your device, select the **Register end device** button.

{{< figure src="lht52-prov-info-stack.png" alt="Settings for registration through device repository" >}}

If you prefer onboarding **manually**, in the **End device type** section, under **Input Method**, select the **Enter end device specifics manually** option. The [Manually adding devices]({{< ref "/devices/adding-devices/manual/" >}}) and [Over the Air Activation (OTAA)]({{< ref "/devices/adding-devices/manual/otaa/" >}}) guides explain this procedure in detail. Following details are specific to the LHT52:

- LoRaWAN version: **LoRaWAN Specification 1.0.3**
- Regional parameters version: **RP001 Regional Parameters 1.0.3 revision A**

After configuring your device, select the **Register end device** button.

{{< figure src="manual-register.png" alt="Settings for manual registration" >}}

## Monitoring Live Data

When your device is registered, select the **Live Data** tab to view all messages exchanged between your end device and {{% tts %}}.

{{< figure src="lht52-live-data.png" alt="Live Data tab" >}}

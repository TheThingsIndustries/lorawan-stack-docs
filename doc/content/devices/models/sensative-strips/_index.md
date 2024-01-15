---
title: "Sensative Strips"
description: ""
weight: 
---

{{< figure src="strip.png" alt="Generic Node Sensor Edition" class="float plain" width="80%">}}

The Sensative [Strips](https://sensative.com/sensors/strips-sensors-for-lorawan/) is a family of sensors with multiple purposes. It contains devices such as humidity, temperature, light (lux), and magnetic open/close sensor.

<!--more-->

## Provisioning Information

Provisioning information (the **JoinEUI/AppEUI**, **DevEUI** and **AppKey**) can be found on a sticker inside the box. 

{{< figure src="strips-prov-info.png" alt="Strips provisioning information" width="50%">}}

{{< note "The Strips does not support onboarding with a QR code. You can onboard it in the section below." />}}

## Onboarding to {{% tts %}}

The device can be onboarded using the **Device Repository** or by **manually** entering the specific information.

The [LoRaWAN® Device repository](https://github.com/TheThingsNetwork/lorawan-devices) comprises over 600 end-device profiles, including the Sensative Strips, which enables quick and easy registration with {{% tts %}}.

In the **End device type** section, under **Input method**, select either the **Select the end device in the LoRaWAN Device Repository** or **Enter end device specifics manually** option. The [Onboarding devices without QR codes]({{< ref "/devices/adding-devices/#onboarding-devices-without-qr-codes" >}}) section of the [Adding Devices]({{< ref "/devices/adding-devices/" >}}) guide explains this procedure in detail. Following details are Strips-specific:

- End device brand: **Sensative AB**
- Model: **Strips**
- Hardware Ver.: **1.0**
- Firmware Ver.: **1.0**

After configuring your device, select the **Register end device** button.

{{< figure src="strips-prov-info-stack.png" alt="Settings for registration through device repository" >}}

If you prefer onboarding **manually**, in the **End device type** section, under **Input Method**, select the **Enter end device specifics manually** option. The [Manually adding devices]({{< ref "/devices/adding-devices/manual/" >}}) and [Over the Air Activation (OTAA)]({{< ref "/devices/adding-devices/manual/otaa/" >}}) guides explain this procedure in detail. Following details are specific to the Strips:

- LoRaWAN version: **LoRaWAN Specification 1.0.3**
- Regional parameters version: **RP001 Regional Parameters 1.0.3 revision A** 

After configuring your device, select the **Register end device** button.

{{< figure src="manual-register.png" alt="Settings for manual registration" >}}

## Turning on the device

When you receive the Strips it comes in "transport mode", and the device will be off. When you remove the magnets for the first time, the device will automatically send a join request.

If you have removed the magnets, and you need to manually join the device, take one of the magnets and slowly move it close to the round edge (Magnet sensor 2) of the strips **3 times**, so that the green LED next to the Sensative logo blinks 3 times. This will trigger the device to send a join request.

{{< figure src="strips-joining.png" alt="Moving magnet to the end of the strips" class="plain" width="100%" >}}

{{< note >}} **One long green LED blink** signals the device has successfully joined to {{% tts %}}. 

**5 red blinks** means the device failed to join to the network. {{</ note >}}

## Monitoring Live Data

When your device is registered, select the **Live Data** tab to view all messages exchanged between your end device and {{% tts %}}.

{{< figure src="strips-live-data.png" alt="Live Data tab" >}}
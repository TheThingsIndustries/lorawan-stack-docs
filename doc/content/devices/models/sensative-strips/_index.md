---
title: "Sensative Strips"
description: ""
weight: 
---

{{< figure src="strip.png" alt="Generic Node Sensor Edition" class="float plain" width="80%">}}

The Sensative [Strips](https://sensative.com/sensors/strips-sensors-for-lorawan/) is a multi-sensor family with multi-purposes, like humidity, temperature, light (LUX) measuring, and magnetic open/close sensor (suitable for windows or door monitoring).

<!--more-->

## Provisioning Information

Provisioning information (The **JoinEUI/AppEUI**, **DevEUI** and **AppKey**) can be found on a sticker inside the box. 

{{< figure src="strips-prov-info.png" alt="Strips provisioning information" width="50%">}}

{{< note "The Strips does not support onboarding with a QR code. You can onboard it in the section below." />}}

## Onboarding to {{% tts %}}

The device can be onboarded using the Device Repository or by manually entering the specific information.
The [LoRaWAN® Device repository](https://github.com/TheThingsNetwork/lorawan-devices) comprises over 600 end-device profiles, including the Sensative Strips, which enables quick and easy registration with {{% tts %}}.

In the **End device type** section, under **Input method**, select either the **Select the end device in the LoRaWAN Device Repository** or **Enter end device specifics manually** option. The [Onboarding devices without QR codes]({{< ref "/devices/adding-devices/#onboarding-devices-without-qr-codes" >}}) section of the [Adding Devices]({{< ref "/devices/adding-devices/" >}}) guide explains this procedure in detail. Following details are Strips-specific:

- End device brand: **Sensative AB**
- Model: **Strips**
- Hardware Ver.: **1.0**
- Firmware Ver.: **1.0**

{{< note >}} If you are manually adding the device, enter these details specifically for the Strips:
- LoRaWAN version: **LoRaWAN Specification 1.0.3**
- Regional parameters version: **RP001 Regional Parameters 1.0.3 revision A** {{</ note >}}

After configuring your device, select the **Register end device** button.

{{< figure src="strips-prov-info-stack.png" alt="Settings for registration through device repository" >}}

{{< figure src="manual-register.png" alt="Settings for manual registration" >}}

## Turning on the device

When you receive the Strips it comes in "transport mode", and the device will be off. When you remove the magnets for the first time, the device will automatically send a join request.

If you have removed the magnets, and you need to manually join the device, take one of the magnets and move it to the round edge (Magnet sensor 2) of the Strips 3 times (3 green LED blinks at the Sensative logo). This will send a join request to the server.

{{< figure src="strips-joining.png" alt="Moving magnet to the end of the strips" class="plain" width="100%" >}}

{{< note >}} **One long green LED blink** signals the device has been successfully joined to the server. 

**5 red blinks** means the device failed to join to the network. {{</ note >}}

## Monitoring Live Data

When your device is registered, select the **Live Data** tab to view all messages exchanged between your end device and {{% tts %}}.

{{< figure src="strips-live-data.png" alt="Live Data tab" >}}
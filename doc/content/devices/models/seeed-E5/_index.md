---
title: "Seeed Studio Wio-E5"
description: ""
weight: 
---

{{< figure src="module.jpg" alt="" class="float plain" width="50%">}}

The [Seeed Studio Wio-E5 module](https://www.seeedstudio.com/LoRa-LoRaWAN-Modules-c-1950.html) is embedded with the ST system-level package chip STM32WLE5JC, ARM Cortex M4 ultra-low power MCU, and Long Range SX126X. It supports EU868, US915 and more, making it suitable for wireless sensor networks and other IoT devices that require battery power, low power consumption and long range.

<!--more-->

We will be using the Wio-E5 mini for this guide, but the process should be the same for the other boards.

## AT Commands

First connect the Wio-E5 mini to your computer via a Type-C cable.

Then open a serial tool (eg. Arudino Serial Monitor), select the right COM port, set baudrate to 9600 and select `Both NL & CR`.

In the serial monitor, type `AT` and press enter and you will see the response.

{{< figure src="AT.png" alt="" >}}

Now to onboard.

{{< note "Quectel KG200ZABTB cannot be onboarded to {{% tts %}} using QR code." />}}

## Onboarding to {{% tts %}}

The Seeed Wio-E5 has to be onboarded [**manually**](https://www.thethingsindustries.com/docs/devices/adding-devices/manual/).

To do this, in the **End device type** section, under **Input Method**, select **Enter end device specifics manually** option. The [Manually adding devices]({{< ref "/devices/adding-devices/manual/" >}}) and [Over the Air Activation (OTAA)]({{< ref "/devices/adding-devices/manual/otaa/" >}}) guides explain this procedure in detail. Following details are Quectel KG200ZABTB-specific:

- LoRaWAN version: **LoRaWAN Specification 1.0.2**
- Regional parameters version: **RP001 Regional Parameters 1.0.2 revision B**

After configuring your device, select the **Register end device** button.

{{< figure src="evk-manual-prov.png" alt="Settings for manual registration" >}}

## Monitoring Live Data

When your device is registered, select the **Live Data** tab to view all messages exchanged between the end device and {{% tts %}}.

{{< figure src="evk-live-data.png" alt="Live data tab" >}}

---
title: "Heltec HTCC-AB01"
description: ""
weight: 
---

{{< figure src="ab01.png" alt="" class="float plain" width="80%">}}

The [Heltec HTCC-AB01 (V2) ](https://heltec.org/project/htcc-ab01-v2/) is a development board based on the ASR6052, which has an integrated PSoC® 4000 series MCU (ARM® Cortex® M0+ Core) and SX1262 transceiver. It features arduino compatibility, an ultra low power design and an onboard SH1.25 for lithium batteries or solar panels.

We will set up the module for usage in arduino, then use an example code to connect it to {{% tts %}}.

<!--more-->

## Installing CubeCell Framework

In order to use the CubeCell in Arduino, we need to install a framework.

Open Arduino IDE, and click `File`->`Preferences`->`Settings` and click the button next to "Additional Boards Manager URLs"

{{< figure src="boards-manager.png" alt="">}}

In a new line, enter: `https://github.com/HelTecAutomation/CubeCell-Arduino/releases/download/V1.5.0/package_CubeCell_index.json` and click **OK**.

{{< figure src="board-url.png" alt="">}}

Click the **second icon in the left-hand menu** or select `Tools`->`Board:`->`Boards Manager...`, then search `Heltec` in the search field, select the latest releases and click **install**.

{{< figure src="install-board.png" alt="">}}

## Example code

Use this code (??? need board first)

Now to onboard it to {{% tts %}}

## Onboarding to {{% tts %}}

The device can be onboarded using the **Device Repository** or **manually**.

The [LoRaWAN® Device repository](https://github.com/TheThingsNetwork/lorawan-devices) comprises over 800 end-device profiles, including the AB01, which enables quick and easy registration with {{% tts %}}.

In the **End device type** section, under **Input method**, select either the **Select the end device in the LoRaWAN Device Repository** or **Enter end device specifics manually** option. The [Onboarding devices without QR codes]({{< ref "/devices/adding-devices/#onboarding-devices-without-qr-codes" >}}) section of the [Adding Devices]({{< ref "/devices/adding-devices/" >}}) guide explains this procedure in detail. Following details are RAK2560-specific:

- **End device brand:** HelTec AutoMation
- **Model:** HTCC-AB01(Class A OTAA)
- **Hardware Ver.:** Unknown ver.
- **Firmware Ver.:** `1.0`

After configuring your device, select the **Register end device** button.

{{< figure src="ab01-register.png" alt="Settings for registration through device repository" >}}

If you prefer onboarding **manually**, in the **End device type** section, under **Input Method**, select the **Enter end device specifics manually** option. The [Manually adding devices]({{< ref "/devices/adding-devices/manual/" >}}) and [Over the Air Activation (OTAA)]({{< ref "/devices/adding-devices/manual/otaa/" >}}) guides explain this procedure in detail. Following details are specific to the AB01:

- **LoRaWAN version:** LoRaWAN Specification 1.0.2
- **Regional parameters version:** RP001 Regional Parameters 1.0.2 revision B

After configuring your device, select the **Register end device** button.

{{< figure src="manual-register.png" alt="Settings for manual registration" >}}

## Monitoring Live Data

When your device is registered, select the **Live Data** tab to view all messages exchanged between the end device and {{% tts %}}.

{{< figure src="evk-live-data.png" alt="Live data tab" >}}

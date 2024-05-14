---
title: "Quectel KG200ZABTB"
description: ""
weight: 
---

{{< figure src="kg200z.png" alt="Quectel KG200ZABTB" class="float plain" width="80%">}}

The [Quectel KG200ZABTB](https://www.quectel.com/product/lora-kg200z) is a devkit.

<!--more-->

{{< note "Quectel KG200ZABTB cannot be onboarded to {{% tts %}} using QR code." />}}

## Onboarding to {{% tts %}}

You can onboard your Quectel KG200ZABTB using the **LoRaWAN Device Repository** or **manually** option.

If you prefer onboarding with the **LoRaWAN Device Repository**, in the **End device type** section, under **Input method**, select the **Select the end device in the LoRaWAN Device Repository** option.

The [Onboarding devices without QR codes]({{< ref "/devices/adding-devices/#onboarding-devices-without-qr-codes" >}}) section of the [Adding Devices]({{< ref "/devices/adding-devices/" >}}) guide explains this procedure in detail. Following details are Quectel KG200ZABTB-specific:

- End device brand: **Quectel**
- Model: **KG200ZABTB**
- Hardware Ver.: **1.0**
- Firmware Ver.: **1.0**

After configuring your device, select the **Register end device** button.

{{< figure src="Quectel-kg200z-device-repository.png" alt="Settings for registration through device repository" >}}

If you prefer onboarding **manually**, in the **End device type** section, under **Input Method**, select **Enter end device specifics manually** option. The [Manually adding devices]({{< ref "/devices/adding-devices/manual/" >}}) and [Over the Air Activation (OTAA)]({{< ref "/devices/adding-devices/manual/otaa/" >}}) guides explain this procedure in detail. Following details are Quectel KG200ZABTB-specific:

- LoRaWAN version: **LoRaWAN Specification 1.0.3**
- Regional parameters version: **RP001 Regional Parameters 1.0.3 revision A**

After configuring your device, select the **Register end device** button.

{{< figure src="Quectel-kg200z-manually.png" alt="Settings for manual registration" >}}

## Monitoring Live Data

When your device is registered, select the **Live Data** tab to view all messages exchanged between the end device and {{% tts %}}.

{{< figure src="Quectel-kg200z-live-data.png" alt="Live data tab" >}}

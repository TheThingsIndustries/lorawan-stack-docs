---
title: "Quectel KG200ZABTB"
description: ""
weight: 
---

{{< figure src="kg200z.png" alt="Quectel KG200ZABTB" class="float plain" width="60%">}}

The [Quectel KG200ZABTB](https://www.quectel.com/product/lora-kg200z) is a high-performance LoRa module launched by Quectel, which supports ultra-low power consumption and long-range wireless transmission applications. It integrates an ARM Cortex-M4 core with the modulations of LoRa,(G)FSK, (G)MSK and BPSK, supporting LoRaWAN standard protocol and 470–510MHz, 862–928MHz LoRa frequency bands. Additionally, it incorporates AES hardware encryption for enhanced security. KG200Z features a compact form factor of 12.0mm × 12.0mm × 1.8mm and an LGA package to ensure seamless embedding of the module into size-constrained applications and reliable connectivity for these applications.

This evaluation board (EVK) allows for programming of the module.

<!--more-->

## Provisioning Information

To get the provisioning information of the EVK we need to connect to the board via serial. On MacOS, you can use the handy `screen` command that is built-in. First though, we need to know the port of our board. You need to do this **without having the board plugged in**.

Open up a terminal, and type `ls /dev/tty.*`. You should see a couple of addresses show up.

{{< figure src="cmd-ls.png" class="plain    ">}}

Then plug in the EVK and turn it on. When you try the command again you should see a new address show up.

{{< figure src="cmd-ls-dev.png" class="plain">}}

Now we are going to use the `screen` command with that address to connect to it. The command you are going to use is `screen <DEVICE-ADDRESS> 115200`.

{{< figure src="cmd-screen.png" class="plain">}}

Once you do that, you should see some lines show up. Now press the reset button on the EVK to have the device show it's provisioning information. Select and copy the **AppKey, DevEUI and AppEUI** and store them somewhere.

{{< figure src="prov-info.png" class="plain">}}

Using these values we can now register it to {{% tts %}}.

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

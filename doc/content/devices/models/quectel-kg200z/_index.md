---
title: "Quectel KG200ZABTB"
description: ""
weight: 
---

{{< figure src="kg200z.png" alt="Quectel KG200ZABTB" class="float plain" width="60%">}}

The [Quectel KG200ZABTB](https://www.quectel.com/product/lora-kg200z) is a high-performance LoRa module launched by Quectel, which supports ultra-low power consumption and long-range wireless transmission applications. It integrates an ARM Cortex-M4 core with the modulations of LoRa,(G)FSK, (G)MSK and BPSK, supporting LoRaWAN standard protocol and 470–510MHz, 862–928MHz LoRa frequency bands. Additionally, it incorporates AES hardware encryption for enhanced security. KG200Z features a compact form factor of 12.0mm × 12.0mm × 1.8mm and an LGA package to ensure seamless embedding of the module into size-constrained applications and reliable connectivity for these applications.

This evaluation board (EVK) allows for programming of the module itself. For this guide though, we are just focussing on connecting it to {{% tts %}}

<!--more-->

## Provisioning Information

To get the provisioning information of the EVK we need to connect to the board via serial. The steps for connecting to it via serial depends on what OS you are using, so we have instructions for both [MacOS / Linux](#macos--linux) and [Windows](#windows).

### MacOS / Linux

On MacOS and Linux, you can use the handy `screen` command that is built-in. First though, we need to know the address of our board. Before we continue though, **make sure your board is not yet plugged in**.

Open up a terminal, and type `ls /dev/tty.*`. You should see a couple of addresses show up.

{{< figure src="cmd-ls.png" class="plain    ">}}

Then plug in the EVK and turn it on. When you try the command again you should see a new address show up.

{{< figure src="cmd-ls-dev.png" class="plain">}}

Now we are going to use the `screen` command with that address to connect to it. The command you are going to use is `screen <DEVICE-ADDRESS> 115200`.

{{< figure src="cmd-screen.png" class="plain">}}

Once you do that, you should see some text show up. Now press the reset button on the EVK to have the device show it's provisioning information. Select and copy the **AppKey, DevEUI and AppEUI** and store them somewhere.

{{< figure src="prov-info.png" class="plain">}}

Using these credentials we can now [onboard it to {{% tts %}}](#onboarding-to--tts-).

### Windows 

To connect to the EVK using Windows we need to install a third party tool that can interface with the EVK. Before we do that though, **make sure your board is not yet plugged in**.

For this tutorial we are going to use [SimpleCom](https://github.com/YaSuenag/SimpleCom/releases/latest), but any UART serial tool should do the trick. Download the ZIP file, unzip it and run **SimpleCom.exe**.

When you open it you will see this screen. If you select the COM dropdown, you will probably see a couple of COM ports. 

{{< figure src="win-com.png" class="plain    ">}}

Now close the program (using the **Cancel** button), then plug in the EVK and turn it on. Run the program again, and when you select the dropdown again you should see a new COM port show up. Select that one and make sure the **Baud Rate is set at 115200**.

{{< figure src="win-com-dev.png" class="plain">}}

Once that is done, hit **Connect** and you should see some text show up in the terminal. Now press the reset button on the EVK to have the device show it's provisioning information. Select and copy the **AppKey, DevEUI and AppEUI** and store them somewhere.

{{< figure src="win-com-prov.png" class="plain">}}

Using these credentials we can now [onboard it to {{% tts %}}](#onboarding-to--tts-).

{{< note "Quectel KG200ZABTB cannot be onboarded to {{% tts %}} using QR code." />}}

## Onboarding to {{% tts %}}

The Quectel KG200ZABTB has to be onboarded **manually**.

To do this, in the **End device type** section, under **Input Method**, select **Enter end device specifics manually** option. The [Manually adding devices]({{< ref "/devices/adding-devices/manual/" >}}) and [Over the Air Activation (OTAA)]({{< ref "/devices/adding-devices/manual/otaa/" >}}) guides explain this procedure in detail. Following details are Quectel KG200ZABTB-specific:

- LoRaWAN version: **LoRaWAN Specification 1.0.2**
- Regional parameters version: **RP001 Regional Parameters 1.0.2 revision B**

After configuring your device, select the **Register end device** button.

{{< figure src="evk-manual-prov.png" alt="Settings for manual registration" >}}

## Monitoring Live Data

When your device is registered, select the **Live Data** tab to view all messages exchanged between the end device and {{% tts %}}.

{{< figure src="evk-live-data.png" alt="Live data tab" >}}

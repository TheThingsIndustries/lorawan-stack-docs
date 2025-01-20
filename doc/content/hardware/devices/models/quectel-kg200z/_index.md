---
title: "Quectel KG200ZABTB"
description: ""
weight:
aliases: [/devices/models/quectel-kg200z]
---

{{< figure src="kg200z.png" alt="Quectel KG200ZABTB" class="float plain" width="60%">}}

The [Quectel KG200ZABTB](https://www.quectel.com/product/lora-kg200z) is a high-performance LoRa module launched by Quectel, which provides ultra-low power consumption and long-range wireless transmission applications.

<!--more-->

The module integrates an ARM Cortex-M4 core with the modulations of LoRa, (G)FSK, (G)MSK and BPSK, supporting LoRaWAN standard protocol, as well as 470–510MHz and 862–928MHz LoRa frequency bands. Additionally, it incorporates AES hardware encryption for enhanced security.

In this guide, we focus on connecting the evaluation board (EVK) to {{% tts %}}. This board can be used for programming the KG200Z module.

<!--more-->

## Provisioning Information

To get the provisioning information of the EVK we need to connect to the board via serial. The steps for connecting to it via serial depends on what OS you are using, [MacOS/Linux](#macos--linux) or [Windows](#windows).

### MacOS / Linux

On MacOS and Linux, you can use the handy built-in `screen` command.

First step is to find out the board address.

Before plugging in the board, open up a terminal and type `ls /dev/tty.*`. You should see a couple of addresses show up.

{{< figure src="cmd-ls.png" class="plain    ">}}

Then plug in the EVK and turn it on. When you try the command again you should see a new address show up.

{{< figure src="cmd-ls-dev.png" class="plain">}}

Now use the newly discovered board address to connect to the board using the `screen <DEVICE-ADDRESS> 115200` command.

{{< figure src="cmd-screen.png" class="plain">}}

Once you do that, you should see some text show up in your terminal. Now press the reset button on the EVK to have the device show its provisioning information. Select and copy the **AppKey**, **DevEUI** and **AppEUI** and store them somewhere.

{{< figure src="prov-info.png" class="plain">}}

Using these values we can now proceed with onboarding the device to {{% tts %}}.

### Windows

To connect to the EVK using Windows, a third party tool that can interface with the EVK needs to be installed first. **Make sure your board isn't yet connected to your computer.**

For this tutorial we use [SimpleCom](https://github.com/YaSuenag/SimpleCom/releases/latest), but any UART serial tool should do the trick. Download the ZIP file, unzip it and run **SimpleCom.exe**.

When you run the tool, you will see the following screen. If you select the COM dropdown, you will probably see a couple of COM ports.

{{< figure src="win-com.png" class="plain    ">}}

Now close the program (using the **Cancel** button), then plug in the EVK and turn it on. Run the program again, and when you select the dropdown again you should see a new COM port show up. Select that one and make sure the **Baud Rate** is set at `115200`.

{{< figure src="win-com-dev.png" class="plain">}}

Once that is done, hit **Connect** and you should see some text show up in the terminal. Now press the reset button on the EVK to have the device show its provisioning information. Select and copy the **AppKey**, **DevEUI** and **AppEUI** and store them somewhere.

{{< figure src="win-com-prov.png" class="plain">}}

Using these values we can now proceed with onboarding the device to {{% tts %}}.

{{< note "Quectel KG200ZABTB cannot be onboarded to {{% tts %}} using QR code." />}}

## Onboarding to {{% tts %}}

The Quectel KG200ZABTB has to be onboarded [**manually**](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/manual/).

To do this, in the **End device type** section, under **Input Method**, select **Enter end device specifics manually** option. The [Manually adding devices]({{< ref "/hardware/devices/adding-devices/manual/" >}}) and [Over the Air Activation (OTAA)]({{< ref "/hardware/devices/adding-devices/manual/otaa/" >}}) guides explain this procedure in detail. Following details are Quectel KG200ZABTB-specific:

- LoRaWAN version: **LoRaWAN Specification 1.0.2**
- Regional parameters version: **RP001 Regional Parameters 1.0.2 revision B**

Then fill in the **Provisioning information**, which were found [in the first steps](#provisioning-information).

After configuring your device, select the **Register end device** button.

{{< figure src="evk-manual-prov.png" alt="Settings for manual registration" >}}

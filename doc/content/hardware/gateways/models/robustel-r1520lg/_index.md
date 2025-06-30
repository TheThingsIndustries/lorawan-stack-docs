---
title: "Robustel R1520LG"
vendor: "Robustel"
vendor_page: "https://www.robustel.com/"
description: "The Robustel® R1520LG is a configurable, scalable LoRaWAN gateway for industrial IoT applications."
ip_rating: "IP30"
backhaul: [Cellular, Ethernet, LoRa, Serial Port, Wi-Fi]
aliases:
  [
    /guides/lorawan-gateways/robustelr1520lg,
    /gateways/robustelr1520lg,
    /gateways/models/robustelr1520lg,
  ]
image: [robustel-r1520lg.png]
---

The [Robustel® R1520LG](https://www.robustel.com/product/r1520lg-indoor-lorawan-gateway/) is a configurable, scalable LoRaWAN gateway for industrial IoT applications.

This guide will help you set up the Robustel R1520LG gateway to communicate over {{%tts%}}.

<!--more-->

The technical specifications of the R1520LG can be found in the datasheet in the [official documentation](https://www.robustel.com/product/r1520lg-indoor-lorawan-gateway/) downloads page.

{{< figure src="robustel-r1520lg.png" alt="Robustel R1520LG Gateway" class="float plain" >}}

## Prerequisites

1. User account on {{% tts %}} with rights to create Gateways.
2. Robustel R1520LG gateway running [RobustOS Pro firmware](https://www.robustel.com/iot-software/robustos-pro-edge-computing-gateway-operating-system/).

## Registration

Create a gateway by following the instructions for [Adding Gateways]({{< ref "/hardware/gateways/concepts/adding-gateways" >}}).

The gateway SN (Serial Number) can be found at the label of the gateway.

## Setting Up the Gateway

For the first-time hardware and software setup, you can refer to the appropriate configuration guide on the [R1520LG documentation](https://www.robustel.com/product/r1520lg-indoor-lorawan-gateway/) downloads page.

We have included a few short steps to help you get started. If your gateway is already configured on your local network, skip ahead to [Connecting The Gateway to {{% tts %}}](#connecting-the-gateway-to-the-things-stack).

## Configuration via Browser

To log in to the management page and view your device's configuration status, please follow the steps below:

- Open a web browser on your PC (e.g., Microsoft Edge, Google Chrome, or Firefox)
- Type the device’s IP address into the address bar and press **Enter**. The default IP address is http://192.168.0.1/; however, the actual address may vary.
**Note**: If a SIM card with a public IP address is inserted into the device , enter the corresponding public IP address in the browser’s address bar to access the device wirelessly.

{{< figure src="router-web-manager.png" alt="Configuration via Browser" >}}

- On the login page, enter the username and password (refer to the device’s label for login information), then click **LOGIN**. 

{{< figure src="login-page.png" alt="Configuration via Browser" >}}

For more information, please refer to Robustel’s official documentation.

## Connecting the Gateway to {{% tts %}}

The Robustel R1520LG supports {{% lbs %}} and the legacy UDP packet forwarder. {{% lbs %}} is more secure and supports configuration of custom channel plans, amongst other improvements. Please follow instructions to [Connect Robustel R1520LG with {{% lbs %}}]({{< relref "lbs" >}}).

If for some reason {{% lbs %}} is not available to you, instructions for connecting with the legacy packet forwarder are [here]({{< relref "udp" >}}).

### Upgrading the Firmware

If you have an issue with the current firmware version, you can use following steps to upgrade the firmware.

Refer to the top of your configuration software window to check your firmware version. You have to upgrade the device&apos;s firmware to the latest version.

You can first register for an Robustel Cloud Manager Service (RCMS) account and then download the firmware upgrades from the RCMS section of the [Robustel website](https://www.robustel.com/iot-software/robustel-cloud-manager-service/).

Do the following to upgrade the firmware on your device:

- Before you upgrade your firmware, save your present configuration as a backup.
- Go to the Robustel RCMS website, locate the firmware upgrade file you want for your device(RobustOS Pro x.x.x in the current case, where x.x.x is the latest version available on the website), and download this file to a known location.
- Navigate to **System -> Software Update -> Firmware Update**.
- Click on **Choose File** button, and
  - Click on **Browse** to find where the firmware file resides that you want to apply.
  - Select the file and click on **Open**. The file name appears next to the **Choose File** button. Make sure you select the correct BIN file; otherwise, your device can become inoperable.
- Click on **Install**.

{{< figure src="firmware-upgrade.png" alt="Gateway firmware upgrade window" >}}

- A message about the time needed to upgrade appears. Click on **OK**.
- A progress bar appears indicating the status of the upgrade. When the upgrade is completed, your device reboots.
- After the firmware upgrade is completed, verify your configuration to ensure that it is same as what you expected.

The new firmware is written into flash memory. It may take up to 10 minutes to upgrade the firmware. Do not interrupt the devices&apos; power or press the reset button during this time.
---
title: "Step 3: Activate the Starter kit for LoRaWAN"
description: "Activate the Starter kit for LoRaWAN"
weight: 3
---

This guide walks you through activating the end device and managed gateway that's part of the Starter Kit for LoRaWAN®.

<!--more-->

Before we can activate an end device to send/receive data, we need to setup a LoRaWAN® gateway to receive messages from end devices and forward them to the {{% tts %}} and vice versa.

The Starter Kit for LoRaWAN contains {{% ttigpro %}}, a fully cloud-managed 8 channel LoRaWAN® gateway. It support true Zero-Touch Provisioning(ZTP) and is fully remotely managed via {{% tts %}}.

### 1. The Things Indoor Gateway Pro

To keep things simple and get started right away, we are going to use the built-in 4G LTE sim card of {{% ttigpro %}} to communicate with {{% tts %}}. You can always later change this to WiFi or Ethernet.

There are only two steps to connecting {{% ttigpro %}}.

##### Step 1: Register in The Things Stack

1. Open the back panel of the gateway, where you will find a QR Code and some information about the gateway.

{{< figure src="ttigpro-qrcode.jpg" alt="TTIG Pro QR Code" width="35%" >}}

1. In {{% tts %}} Console, go to **Gateways**.
1. Click **Register Gateway**.
1. Click **Scan gateway QR code** and scan the QR code on the bottom of the gateway. Alternatively, enter the **Gateway EUI** and **Owner token**. This information is also available in [The Things Industries Account](https://accounts.thethingsindustries.com) if you do not have physical access to your gateway.
1. Enter a **Gateway ID** and select the **Frequency plan** to use.
1. Click **Claim gateway**.

##### Step 2: Connect a power supply cable

Connect the USB-C cable to the power supply slot.
{{< figure src="ttigpro-power-cable.jpg" alt="Connect power"  width="35%">}}

{{< warning >}}Only use the power adapter that comes with {{% ttigpro %}}.{{< /warning >}}

It may take several minutes to activate the SIM card and attach to a mobile network.

After a few minutes, {{% ttigpro %}} should be connected to {{% tts %}}.

{{< figure src="post-claim.png" alt="Connect power">}}

If you would like to learn more about {{% ttigpro %}} or setup WiFi or Ethernet connectivity, you can check the dedicated [{{% ttigpro %}}]({{< ref "/hardware/gateways/models/thethingsindoorgatewaypro/" >}}) page.

Let's now register and activate the end device to send and receive data.

### 2. mClimate Multipurpose Button

### Registration

#### Join

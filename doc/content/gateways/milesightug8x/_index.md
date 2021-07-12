---
title: "Milesight UG8X LoRaWAN Gateway"
description: ""
---

The **Milesight UG8X LoRaWAN Gateway** is a series of 2 robust 8-channel (16-channel optional) LoRaWAN gateways for industrial IoT applications.

{{< figure src="ug8x.jpg" alt="Milesight IoT UG8x" class="plain float" >}}

This page contains information about connecting the Milesight IoT UG8x LoRaWAN Gateway to {{% tts %}}.

<!--more-->

The technical specifications can be found in Milesight's official [document center](https://www.milesight-iot.com/documents-download). The Milesight UG8X LoRaWAN Gateways support two ways to connect with {{% tts %}}, using either the Semtech Packet Forwarder or {{% lbs %}}.

## Requirements

1. User account on {{% tts %}} with rights to create gateways.
2. Milesight UG8X LoRaWAN Gateway connected to the internet via ethernet, Wi-Fi or cellular backhaul.
3. CA certificate for {{% lbs %}} (if using {{% lbs %}}).

## Registration

Create a gateway by following the instructions for the [Console]({{< ref "/getting-started/console#create-gateway" >}}) or the [CLI]({{< ref "/getting-started/cli#create-gateway" >}}).

The **EUI** of the gateway can be found on the configuration web page of the gateway. See the [next section]({{< ref "#configuration-via-browser" >}}) for instructions to access the configuration page.

{{< figure src="eui.png" alt="Gateway EUI" >}}

## Configuration via Browser

Find the IP address of the gateway. The default IP for the Milesight UG6X LoRaWAN Gateway is 192.168.23.150.

Connect your machine to the same local network as that of the gateway, and enter the IP address in your web browser. The default username is **admin** and the default password is **password**. See [Milesight's official documentation](https://www.milesight-iot.com/documents-download) for more information.

{{< figure src="login.png" alt="Login" >}}

### Disable Default Server

In the left menu, choose **Packet Forwarder**. Select the **General** tab.

{{< figure src="eui.png" alt="Packet Forwarder" >}}

Click the pencil icon next to the localhost, and uncheck the **Enabled** button to disable the Embedded NS.

Click **Save** to continue.

{{< figure src="disable.png" alt="Disable default server" >}}

## Connect to {{% tts %}}

After completing basic configuration, follow the instructions for connecting using [{{< lbs >}}]({{< relref "lbs" >}}) or the [UDP Packet Forwarder]({{< relref "packet-forwarder" >}}).

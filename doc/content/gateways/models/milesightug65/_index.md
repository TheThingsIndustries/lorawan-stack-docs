---
title: "Milesight UG65 LoRaWAN Gateway"
vendor: "Milesight"
vendor_page: "https://www.milesight.com/iot/product/lorawan-gateway/ug65"
description: "The Milesight UG65 is a high-performance 8-channel LoRaWAN® gateway that offers reliable connectivity for industrial applications."
ip_rating: "IP65"
backhaul: [Ethernet, Wi-Fi, Cellular (optional)]
aliases: [/gateways/milesightug65]
image: [ug65.png]
---

{{< figure src="ug65.png" alt="Milesight IoT UG65" class="plain float" width="80%" >}}

The **Milesight UG65** is a high-performance 8-channel LoRaWAN® gateway that offers reliable connectivity for industrial applications. This page contains information about connecting the Milesight IoT UG65 LoRaWAN gateway to {{% tts %}}.

<!--more-->

The technical specifications can be found in Milesight's official [UG65](https://www.milesight-iot.com/lorawan/gateway/ug65/) pages.

The Milesight UG65 LoRaWAN gateways support two ways of connecting to {{% tts %}}, using the {{% udp-pf %}} or {{% lbs %}}.

## Requirements

1. User account on {{% tts %}} with rights to create gateways.
2. Milesight IoT UG65 LoRaWAN gateway connected to the Internet via Ethernet, Wi-Fi or Cellular backhaul.
3. CA certificate for {{% lbs %}} (if using {{% lbs %}}).

## Registration

[Add a gateway]({{< ref "/gateways/concepts/adding-gateways" >}}) by following the instructions for the [Console]({{< ref "/the-things-stack/interact/console#create-gateway" >}}) or the [CLI]({{< ref "/the-things-stack/interact/cli#create-gateway" >}}).

The **Gateway EUI** of the gateway can be found on the gateway's configuration web page. See [Configuration via Browser section]({{< ref "#configuration-via-browser" >}}) below for instructions to access the configuration page.

{{< figure src="eui.png" alt="Gateway EUI" >}}

## Configuration via Browser

Find the gateway's IP address. The default IP address for the Milesight UG65 LoRaWAN gateway is `192.168.23.150`.

Connect your machine to the same local network as that of the gateway, and enter the gateway's IP address in your web browser. YOu will be presented with a login screen. The default username is `admin` and the default password is `password`.

{{< figure src="login.png" alt="Login" >}}

See [Milesight's official documentation](https://www.milesight-iot.com/documents-download) for more information.

### Disable Default Server

In the left menu, choose **Packet Forwarder**. Select the **General** tab.

{{< figure src="eui.png" alt="Packet Forwarder" >}}

Click the pencil icon next to the **localhost**, and uncheck the **Enable** button to disable the **Embedded NS**.

Click **Save** to continue.

{{< figure src="disable.png" alt="Disable default server" >}}

## Connect to {{% tts %}}

After completing the basic configuration, follow the instructions to [Connect Milesight UG65 with {{< lbs >}}]({{< relref "lbs" >}}) or to [Connect Milesight UG65 with {{% udp-pf %}}]({{< relref "packet-forwarder" >}}).

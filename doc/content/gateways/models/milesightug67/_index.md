---
title: "Milesight UG67 LoRaWAN Gateway"
vendor: "Milesight"
vendor_page: "https://www.milesight.com/iot/#lorawan-gateway"
description: "The Milesight UG67 is a robust outdoor LoRaWAN® gateway designed for outdoor deployments. Powered by the SX1302 LoRa chip and a high-performance quad-core CPU, the UG67 can support connectivity with over 2000 nodes."
ip_rating: "IP67"
backhaul: ["Ethernet", "Cellular (optional)"]
aliases: [/gateways/milesightug67]
image: [ug67.png]
---

{{< figure src="ug67.png" alt="Milesight IoT UG67" class="plain float" width="80%" >}}

The **Milesight UG67** is a robust outdoor LoRaWAN® gateway designed for outdoor deployments. Powered by the SX1302 LoRa chip and a high-performance quad-core CPU, the UG67 can support connectivity with over 2000 nodes. This page contains information about connecting the Milesight IoT UG67 LoRaWAN gateway to {{% tts %}}.

<!--more-->

The technical specifications can be found in Milesight's official [UG67](https://www.milesight-iot.com/lorawan/gateway/ug67/) pages.

The Milesight UG67 LoRaWAN gateways support two ways of connecting {{% tts %}}, using the {{% udp-pf %}} or {{% lbs %}}.

## Requirements

1. User account on {{% tts %}} with rights to create gateways.
2. Milesight IoT UG67 LoRaWAN gateway connected to the Internet via Ethernet or Cellular backhaul.
3. CA certificate for {{% lbs %}} (if using {{% lbs %}}).

## Registration

[Add a gateway]({{< ref "/gateways/concepts/adding-gateways" >}}) by following the instructions for the [Console]({{< ref "/the-things-stack/interact/console#create-gateway" >}}) or the [CLI]({{< ref "/the-things-stack/interact/cli#create-gateway" >}}).

The **Gateway EUI** of the gateway can be found on the gateway's configuration web page. See [Configuration via Browser section]({{< ref "#configuration-via-browser" >}}) below for instructions to access the configuration page.

{{< figure src="eui.png" alt="Gateway EUI" >}}

## Configuration via Browser

Find the gateway's IP address. The default IP address for the Milesight UG67 LoRaWAN gateway is `192.168.23.150`.

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

After completing the basic configuration, follow the instructions to [Connect Milesight UG67 with {{< lbs >}}]({{< relref "lbs" >}}) or to [Connect Milesight UG67 with {{% udp-pf %}}]({{< relref "packet-forwarder" >}}).

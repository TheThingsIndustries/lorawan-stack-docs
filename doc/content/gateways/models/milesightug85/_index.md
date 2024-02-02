---
title: "Milesight UG85 LoRaWAN Gateway"
vendor: "Milesight"
description: "The Milesight UG85 industrial LoRaWAN gateway delivers tenacious connection over network with full-featured design such as automated failover/failback, extended operating temperature, dual SIM cards, hardware watchdog, VPN, Gigabit Ethernet and beyond."
ip_rating: "IP30"
backhaul: ["Ethernet", "Wi-Fi (optional)", "Cellular (optional)"]
aliases: [/gateways/milesightug85]
image: [ug85.png]
---

{{< figure src="ug85.png" alt="Milesight IoT Ug85" class="plain float" >}}

The **Milesight UG85** industrial LoRaWAN gateway delivers tenacious connection over network with full-featured design such as automated failover/failback, extended operating temperature, dual SIM cards, hardware watchdog, VPN, Gigabit Ethernet and beyond. This page contains information about connecting the Milesight IoT UG85 LoRaWAN gateway to {{% tts %}}.

<!--more-->

Technical specifications can be found in Milesight's official [document center](https://www.milesight-iot.com/documents-download). The Milesight UG85 LoRaWAN gateways support two ways of connecting with {{% tts %}}, using the {{% udp-pf %}} or {{% lbs %}}.

## Requirements

1. User account on {{% tts %}} with rights to create gateways.
2. Milesight UG85 LoRaWAN gateway connected to the Internet via Ethernet, Wi-Fi or cellular backhaul.
3. CA certificate for {{% lbs %}} (if using {{% lbs %}}).

## Registration

[Add a gateway]({{< ref "/gateways/concepts/adding-gateways" >}}) by following the instructions for the [Console]({{< ref "/the-things-stack/interact/console#create-gateway" >}}) or the [CLI]({{< ref "/the-things-stack/interact/cli#create-gateway" >}}).

The **Gateway EUI** can be found on the gateway's configuration web page. See the [Configuration via Browser section]({{< ref "#configuration-via-browser" >}}) below for instructions to access the configuration page.

{{< figure src="eui.png" alt="Gateway EUI" >}}

## Configuration via Browser

Find the gateway's IP address. The default IP address for the Milesight UG6X LoRaWAN gateway is `192.168.23.150`.

Connect your machine to the same local network as that of the gateway, and enter the gateway's IP address in your web browser. You will be presented with a login screen. The default username is `admin` and the default password is `password`.

{{< figure src="login.png" alt="Login" >}}

See [Milesight's official documentation](https://www.milesight-iot.com/documents-download) for more information.

### Disable Default Server

In the left menu, choose **Packet Forwarder**. Select the **General** tab.

{{< figure src="eui.png" alt="Packet Forwarder" >}}

Click the pencil icon next to the **localhost**, and uncheck the **Enable** button to disable the **Embedded NS**.

Click **Save** to continue.

{{< figure src="disable.png" alt="Disable default server" >}}

## Connect to {{% tts %}}

After completing basic configuration, follow the instructions to [Connect Milesight UG85 with {{< lbs >}}]({{< relref "lbs" >}}) or to [Connect Milesight UG85 with {{% udp-pf %}}]({{< relref "packet-forwarder" >}}).

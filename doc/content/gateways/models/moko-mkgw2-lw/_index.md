---
title: "MOKOSMART MKGW2-LW LoRaWAN® Gateway"
vendor: "MOKOSMART"
vendor_page: "https://www.mokosmart.com/lorawan-gateway-mkgw2-lw/"
description: "MOKOSMART's 8 channel MKGW2 gateway is embedded with Semtech’s high performance multi-channel transceiver SX1301/SX1257 and MTK platform. It is for indoor use and is easy to install."
ip_rating: "IP66"
backhaul: [Ethernet, Wi-Fi]
aliases: [/gateways/moko-mkgw2-lw]
image: [mkgw2-lw.jpg]
---

MOKOSMART's 8 channel MKGW2 gateway is embedded with Semtech’s high performance multi-channel transceiver SX1301/SX1257 and MTK platform. It is for indoor use and is easy to install.

{{< figure src="mkgw2-lw.jpg" alt="mkgw2-lw" class="plain float" >}}

## Requirements

1. User account on {{% tts %}} with rights to create gateways.
2. MOKOSMART MKGW2-LW connected to the internet via Ethernet or WiFi. (For Ethernet and WiFi settings, see sections 5 and 6 of the [user manual](https://www.mokosmart.com/lorawan-gateway-mkgw2-lw/))

## Registration

Create a gateway by following [the instructions]({{< ref "/gateways/concepts/adding-gateways" >}}). 

The **EUI** of the gateway can be found on the configuration web page of the gateway or on the device packaging. 

{{< figure src="eui.png" alt="Gateway EUI" >}}

## Configuration via Browser

1. Turn on the gateway and wait for about 60s.
2. Using your PC or phone, connect to the WiFi Access Point exposed by the gateway. The default SSID format is `MKGW2-LW-xxxx`, e.g `MKGW2-LW-91D8`, where `91D8` are the last two bytes of the gateway MAC address. The default password is `Moko4321`.
3. After a successful connection, the web management platform can be accessed through the IP address `192.168.22.1` of the gateway LAN interface.
4. Log in using the default credentials - username `Admin` and password `admin`

It is recommended that the default password is changed for security reasons.

{{< figure src="login-web.png" alt="Login Web" >}}

## Connect to {{% tts %}}

The MOKOSMART MKGW2-LW supports the UDP packet forwarder. Please follow instructions for connecting the [UDP packet forwarder]({{< ref "/gateways/concepts/udp" >}}).

Do not forget to click **SAVE&APPLY** after you fill in the parameters. After a few seconds, your gateway should connect to {{% tts %}}.

For more information, you can refer to the MKGW2-LW user manual or send an email to [support_lora@mokotechnology.com](mailto:support_lora@mokotechnology.com).

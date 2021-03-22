---
title: "MOKOSMART MKGW2-LW LoRaWAN Gateway"
description: ""
---

MOKO 8 channels gateway MKGW2 is based on LoRaWAN protocol, which is embedded with Semtech’s high performance multi-channel transceiver SX1301/SX1257 and MTK platform. It is for
indoor use and easy for installation. 

MKGW2-LW includes 2 modes: AP and STA as router, offers 2.4Ghz Wi-Fi and wired Ethernet forconnecting internet. The gateway built-in OpenWRT operating system, users can flexibly configure
network parameters and LoRaWAN protocol parameters through the Web management platform.The MKGW2-LW Gateway can be connected to LoRaWAN terminals in various application nodes,collects useful information and sends the data to cloud server. And it supports POE, DC, Micro USB to provide power supply.

{{< figure src="mkgw2-lw.jpg" alt="mkgw2-lw" class="plain float" >}}


## Requirements

1. User account on {{% tts %}} with rights to create gateways.
2. MOKOSMART MKGW2-LW connected to the internet via ethernet or WIFI.（For the ethernet and wifi setting, you can refer to the  5.login into the Gateway and 6.Internet Setting of the user maunal)

## Registration

Create a gateway by following the instructions for the [Console]({{< ref "/getting-started/console#create-gateway" >}}) or the [CLI]({{< ref "/getting-started/cli#create-gateway" >}}).

The **EUI** of the gateway can be found on the configuration web page of the gateway. 

{{< figure src="eui.png" alt="Gateway EUI" >}}

## Configuration via Browser
Turn On the gateway and waiting for about 60s.

Using your PC or phone connect the SSID of the gateway. The default SSID format is "MKGW2-LW-xxxx” such as " MKGW2-LW-91D8 ", “91D8” is the last two bytes of the gateway MAC address. verify the password (Default: Moko4321) and connect to the gateway.

After successful connection, the WEB management platform can be accessed through the IP address 192.168.22.1 of the gateway LAN interface.
Log on using the following default credentials, Username: Admin Password: admin
It is recommended that the default password is changed for security reasons.

{{< figure src="login in web.png" alt="Login In Web" >}}


## Connect to {{% tts %}}

The MOKOSMART MKGW2-LW  support  UDP packet forwarder. 
Please follow instructions for connecting the MKGW2-LW with UDP packet forwarder .
After completing basic configuration, turn to server address interface of web.
{{< figure src="eui.png" alt="Gateway EUI" >}}

Edit the server parameters:

- **server_address**: Address of the Gateway Server. If you followed the [Getting Started guide]({{< ref "/getting-started" >}}) this is the same as what you use instead of `thethings.example.com`.
- **serv_port_up**: UDP upstream port of the Gateway Server, typically 1700.
- **serv_port_down**: UDP downstream port of the Gateway Server, typically 1700.

Don't foget to click "SAVE&APPLY" after you  fill in the parameters.

More information and setting, you can refer to the user manual fo mkgw2-lw from moko sales or send email to support_lora@mokotechnology.com.


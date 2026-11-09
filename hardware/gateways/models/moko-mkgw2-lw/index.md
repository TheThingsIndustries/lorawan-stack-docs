# MOKOSMART MKGW2-LW LoRaWAN® Gateway

> MOKOSMART's 8 channel MKGW2 gateway is embedded with Semtech’s high performance multi-channel transceiver SX1301/SX1257 and MTK platform. It is for indoor use and is easy to install.

Source: https://www.thethingsindustries.com/docs/hardware/gateways/models/moko-mkgw2-lw/


MOKOSMART's 8 channel MKGW2 gateway is embedded with Semtech’s high performance multi-channel transceiver SX1301/SX1257 and MTK platform. It is for indoor use and is easy to install.

![mkgw2-lw](https://www.thethingsindustries.com/docs/hardware/gateways/models/moko-mkgw2-lw/mkgw2-lw.jpg)


## Requirements

1. User account on The Things Stack with rights to create gateways.
2. MOKOSMART MKGW2-LW connected to the internet via Ethernet or WiFi. (For Ethernet and WiFi settings, see sections 5 and 6 of the [user manual](https://www.mokosmart.com/lorawan-gateway-mkgw2-lw/))

## Registration

Create a gateway by following [the instructions](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/adding-gateways/).

The **EUI** of the gateway can be found on the configuration web page of the gateway or on the device packaging.

![Gateway EUI](https://www.thethingsindustries.com/docs/hardware/gateways/models/moko-mkgw2-lw/eui.png)


## Configuration via Browser

1. Turn on the gateway and wait for about 60s.
2. Using your PC or phone, connect to the WiFi Access Point exposed by the gateway. The default SSID format is `MKGW2-LW-xxxx`, e.g `MKGW2-LW-91D8`, where `91D8` are the last two bytes of the gateway MAC address. The default password is `Moko4321`.
3. After a successful connection, the web management platform can be accessed through the IP address `192.168.22.1` of the gateway LAN interface.
4. Log in using the default credentials - username `Admin` and password `admin`

It is recommended that the default password is changed for security reasons.

![Login Web](https://www.thethingsindustries.com/docs/hardware/gateways/models/moko-mkgw2-lw/login-web.png)


## Connect to The Things Stack

The MOKOSMART MKGW2-LW supports the UDP packet forwarder. Please follow instructions for connecting the [UDP packet forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/udp/).

Do not forget to click **SAVE&APPLY** after you fill in the parameters. After a few seconds, your gateway should connect to The Things Stack.

For more information, you can refer to the MKGW2-LW user manual or send an email to [support_lora@mokotechnology.com](mailto:support_lora@mokotechnology.com).


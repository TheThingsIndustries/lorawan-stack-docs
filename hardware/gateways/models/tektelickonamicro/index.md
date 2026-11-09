# Tektelic Kona Micro IoT LoRaWAN Gateway

> Tektelic Kona Micro IoT LoRaWAN Gateway is an 8 channel LoRaWAN gateway.

Source: https://www.thethingsindustries.com/docs/hardware/gateways/models/tektelickonamicro/


This page guides you to connect Tektelic Kona Micro IoT LoRaWAN® Gateway to The Things Stack.

![Tektelic Kona Micro IoT LoRaWAN Gateway](https://www.thethingsindustries.com/docs/hardware/gateways/models/tektelickonamicro/kona-micro.jpg)


Tektelic Kona Micro IoT LoRaWAN Gateway is an 8 channel LoRaWAN gateway, whose technical specifications can be found in [the official documentation](https://tektelic.com/products/gateways/kona-micro-iot-gateway/).

## Prerequisites

1. User account on The Things Stack with rights to create Gateways.
2. Tektelic Kona Micro IoT LoRaWAN Gateway with BSP version 3.x.x, connected to the Internet via ethernet.

## Registration

Create a gateway by following the instructions for [Adding Gateways](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/adding-gateways/). The **EUI** of the gateway can be found on the back panel of the gateway under the field **GW ID**.

## Connect to the Gateway

To be able to configure your gateway to connect to The Things Stack, you first need to connect to the gateway itself. There are two ways you can connect to the Tektelic Kona Micro gateway - using the [KonaFT tool](https://support.tektelic.com/portal/en/kb/articles/konaft) and via SSH.

### Using KonaFT Tool

> **Note:** KonaFT application can be installed on Windows OS only, and supports connecting to The Things Stack using Semtech UDP Packet Forwarder only.


**Step 1:** Download the [KonaFT application](https://support.tektelic.com/portal/en/kb/articles/konaft) and complete the installation.

**Step 2:** [Connect your gateway to the KonaFT tool](https://support.tektelic.com/portal/en/kb/articles/kona-ft-faq#1_How_do_I_connect_my_gateway_to_KonaFT).

**Step 3:** [Assign a static IP address to the gateway using KonaFT](https://support.tektelic.com/portal/en/kb/articles/kona-ft-faq#3_How_do_I_set_a_static_IP_on_KonaFT).

**Step 4:** Configure the gateway to connect to The Things Stack using [Semtech UDP Packet Forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/models/tektelickonamicro/udp/).

### SSH into the Gateway

Find the gateway's IP address. This can be done in various ways. You can connect your machine to the same local network as that of the gateway ethernet connection and scan for open SSH ports, or assign a static IP to the gateway and use that one.

Once the gateway IP address is found, SSH into it with the following command:

```bash
ssh root@<GatewayIP>
```

The password for the **root** user can be found on the back panel of the gateway. It is typically a 9 character alphanumeric string starting with **1846XXXXX**.

## Connecting the Gateway to The Things Stack

The Tektelic Kona Micro supports LoRa Basics™ Station and the legacy Semtech UDP Packet Forwarder.

LoRa Basics™ Station is more secure and supports configuration of custom channel plans, amongst other improvements, so please follow instructions for [connecting the Tektelic Kona Micro with LoRa Basics™ Station](https://www.thethingsindustries.com/docs/hardware/gateways/models/tektelickonamicro/lbs/).

If for some reason LoRa Basics™ Station is not available to you, follow instructions for [connecting with the Semtech UDP Packet Forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/models/tektelickonamicro/udp/).


## Pages in this section

- [Connect Tektelic Kona Micro with Lora Basics™ Station](https://www.thethingsindustries.com/docs/hardware/gateways/models/tektelickonamicro/lbs/index.md): This section guides you to connect the Tektelic Kona Micro IoT LoRaWAN® Gateway to The Things Stack using LoRa Basics™ Station.
- [Connect Tektelic Kona Micro with UDP Packet Forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/models/tektelickonamicro/udp/index.md): This section guides you to connect the Tektelic Kona Micro IoT LoRaWAN® Gateway to The Things Stack using the Semtech UDP Packet Forwarder.


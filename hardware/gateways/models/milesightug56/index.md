# Milesight UG56 LoRaWAN Gateway

> The Milesight UG56 is a robust 8-channel indoor LoRaWAN® gateway. Adopting SX1302 chip and high-performance quad-core CPU, UG56 supports connection with more than 2000 nodes.

Source: https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug56/


![Milesight IoT UG56](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug56/ug56.png)


The **Milesight UG56** is a robust 8-channel indoor LoRaWAN® gateway. Adopting SX1302 chip and high-performance quad-core CPU, UG56 supports connection with more than 2000 nodes. This page contains information about connecting the Milesight IoT UG56 LoRaWAN gateway to The Things Stack.

The technical specifications can be found in Milesight's official [UG56](https://www.milesight-iot.com/lorawan/gateway/ug56/) pages.

The Milesight UG56 LoRaWAN gateways support two ways of connecting to The Things Stack, using the Semtech UDP Packet Forwarder or LoRa Basics™ Station.

## Requirements

1. User account on The Things Stack with rights to create gateways.
2. Milesight IoT UG56 LoRaWAN gateway connected to the Internet via Ethernet or Cellular backhaul.
3. CA certificate for LoRa Basics™ Station (if using LoRa Basics™ Station).

## Registration

[Add a gateway](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/adding-gateways/) by following the instructions for the [Console](https://www.thethingsindustries.com/docs/concepts/features/console/#create-gateway) or the [CLI](https://www.thethingsindustries.com/docs/concepts/features/cli/#create-gateway).

The **Gateway EUI** can be found on the gateway's configuration web page. See [Configuration via Browser section](#configuration-via-browser) below for instructions to access the configuration page.

![Gateway EUI](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug56/eui.png)


## Configuration via Browser

Find the gateway's IP address. The default IP address for the Milesight UG56 LoRaWAN gateway is `192.168.23.150`.

Connect your machine to the same local network as that of the gateway, and enter the gateway's IP address in your web browser. You will be presented with a login screen. The default username is `admin` and the default password is `password`.

![Login](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug56/login.png)


See [Milesight's official documentation](https://www.milesight-iot.com/documents-download) for more information.

### Disable Default Server

In the left menu, choose **Packet Forwarder**. Select the **General** tab.

![Packet Forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug56/eui.png)


Click the pencil icon next to the **localhost**, and uncheck the **Enable** button to disable the **Embedded NS**.

Click **Save** to continue.

![Disable default server](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug56/disable.png)


## Connect to The Things Stack

After completing the basic configuration, follow the instructions to [Connect Milesight UG56 with LoRa Basics™ Station](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug56/lbs/) or to [Connect Milesight UG56 with Semtech UDP Packet Forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug56/packet-forwarder/).


## Pages in this section

- [Connect Milesight UG56 with Lora Basics™ Station](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug56/lbs/index.md): This section contains instructions for connecting the Milesight UG56 LoRaWAN® gateway to The Things Stack using LoRa Basics™ Station.
- [Connect Milesight UG56 with UDP Packet Forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug56/packet-forwarder/index.md): This section contains instructions for connecting the Milesight UG56 LoRaWAN® gateway to The Things Stack using the Semtech UDP Packet Forwarder.


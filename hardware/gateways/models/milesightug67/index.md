# Milesight UG67 LoRaWAN Gateway

> The Milesight UG67 is a robust outdoor LoRaWAN® gateway designed for outdoor deployments. Powered by the SX1302 LoRa chip and a high-performance quad-core CPU, the UG67 can support connectivity with over 2000 nodes.

Source: https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug67/


![Milesight IoT UG67](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug67/ug67.png)


The **Milesight UG67** is a robust outdoor LoRaWAN® gateway designed for outdoor deployments. Powered by the SX1302 LoRa chip and a high-performance quad-core CPU, the UG67 can support connectivity with over 2000 nodes. This page contains information about connecting the Milesight IoT UG67 LoRaWAN gateway to The Things Stack.

The technical specifications can be found in Milesight's official [UG67](https://www.milesight-iot.com/lorawan/gateway/ug67/) pages.

The Milesight UG67 LoRaWAN gateways support two ways of connecting to The Things Stack, using the Semtech UDP Packet Forwarder or LoRa Basics™ Station.

## Requirements

1. User account on The Things Stack with rights to create gateways.
2. Milesight IoT UG67 LoRaWAN gateway connected to the Internet via Ethernet or Cellular backhaul.
3. CA certificate for LoRa Basics™ Station (if using LoRa Basics™ Station).

## Registration

[Add a gateway](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/adding-gateways/) by following the instructions for the [Console](https://www.thethingsindustries.com/docs/concepts/features/console/#create-gateway) or the [CLI](https://www.thethingsindustries.com/docs/concepts/features/cli/#create-gateway).

The **Gateway EUI** of the gateway can be found on the gateway's configuration web page. See [Configuration via Browser section](#configuration-via-browser) below for instructions to access the configuration page.

![Gateway EUI](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug67/eui.png)


## Configuration via Browser

Find the gateway's IP address. The default IP address for the Milesight UG67 LoRaWAN gateway is `192.168.23.150`.

Connect your machine to the same local network as that of the gateway, and enter the gateway's IP address in your web browser. YOu will be presented with a login screen. The default username is `admin` and the default password is `password`.

![Login](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug67/login.png)


See [Milesight's official documentation](https://www.milesight-iot.com/documents-download) for more information.

### Disable Default Server

In the left menu, choose **Packet Forwarder**. Select the **General** tab.

![Packet Forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug67/eui.png)


Click the pencil icon next to the **localhost**, and uncheck the **Enable** button to disable the **Embedded NS**.

Click **Save** to continue.

![Disable default server](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug67/disable.png)


## Connect to The Things Stack

After completing the basic configuration, follow the instructions to [Connect Milesight UG67 with LoRa Basics™ Station](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug67/lbs/) or to [Connect Milesight UG67 with Semtech UDP Packet Forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug67/packet-forwarder/).


## Pages in this section

- [Connect Milesight UG67 with Lora Basics™ Station](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug67/lbs/index.md): This section contains instructions for connecting the Milesight UG67 LoRaWAN® gateway to The Things Stack using LoRa Basics™ Station.
- [Connect Milesight UG67 with UDP Packet Forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug67/packet-forwarder/index.md): This section contains instructions for connecting the Milesight UG67 LoRaWAN® gateway to The Things Stack using the Semtech UDP Packet Forwarder.


# Milesight UG65 LoRaWAN Gateway

> The Milesight UG65 is a high-performance 8-channel LoRaWAN® gateway that offers reliable connectivity for industrial applications.

Source: https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug65/


![Milesight IoT UG65](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug65/ug65.png)


The **Milesight UG65** is a high-performance 8-channel LoRaWAN® gateway that offers reliable connectivity for industrial applications. This page contains information about connecting the Milesight IoT UG65 LoRaWAN gateway to The Things Stack.

The technical specifications can be found in Milesight's official [UG65](https://www.milesight-iot.com/lorawan/gateway/ug65/) pages.

The Milesight UG65 LoRaWAN gateways support two ways of connecting to The Things Stack, using the Semtech UDP Packet Forwarder or LoRa Basics™ Station.

## Requirements

1. User account on The Things Stack with rights to create gateways.
2. Milesight IoT UG65 LoRaWAN gateway connected to the Internet via Ethernet, Wi-Fi or Cellular backhaul.
3. CA certificate for LoRa Basics™ Station (if using LoRa Basics™ Station).

## Registration

[Add a gateway](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/adding-gateways/) by following the instructions for the [Console](https://www.thethingsindustries.com/docs/concepts/features/console/#create-gateway) or the [CLI](https://www.thethingsindustries.com/docs/concepts/features/cli/#create-gateway).

The **Gateway EUI** of the gateway can be found on the gateway's configuration web page. See [Configuration via Browser section](#configuration-via-browser) below for instructions to access the configuration page.

![Gateway EUI](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug65/eui.png)


## Configuration via Browser

Find the gateway's IP address. The default IP address for the Milesight UG65 LoRaWAN gateway is `192.168.23.150`.

Connect your machine to the same local network as that of the gateway, and enter the gateway's IP address in your web browser. YOu will be presented with a login screen. The default username is `admin` and the default password is `password`.

![Login](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug65/login.png)


See [Milesight's official documentation](https://www.milesight-iot.com/documents-download) for more information.

### Disable Default Server

In the left menu, choose **Packet Forwarder**. Select the **General** tab.

![Packet Forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug65/eui.png)


Click the pencil icon next to the **localhost**, and uncheck the **Enable** button to disable the **Embedded NS**.

Click **Save** to continue.

![Disable default server](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug65/disable.png)


## Connect to The Things Stack

After completing the basic configuration, follow the instructions to [Connect Milesight UG65 with LoRa Basics™ Station](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug65/lbs/) or to [Connect Milesight UG65 with Semtech UDP Packet Forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug65/packet-forwarder/).


## Pages in this section

- [Connect Milesight UG65 with Lora Basics™ Station](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug65/lbs/index.md): This section contains instructions for connecting the Milesight UG65 LoRaWAN® gateway to The Things Stack using LoRa Basics™ Station.
- [Connect Milesight UG65 with UDP Packet Forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug65/packet-forwarder/index.md): This section contains instructions for connecting the Milesight UG65 LoRaWAN® gateway to The Things Stack using the Semtech UDP Packet Forwarder.


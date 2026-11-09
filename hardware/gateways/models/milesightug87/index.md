# Milesight UG87 LoRaWAN Gateway

> The Milesight UG87 industrial LoRaWAN gateway delivers tenacious connection over network with full-featured design such as automated failover/failback, extended operating temperature, dual SIM cards, hardware watchdog, VPN, Gigabit Ethernet and beyond.

Source: https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug87/


![Milesight IoT Ug87](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug87/ug87.png)


The **Milesight UG87** industrial LoRaWAN gateway delivers tenacious connection over network with full-featured design such as automated failover/failback, extended operating temperature, dual SIM cards, hardware watchdog, VPN, Gigabit Ethernet and beyond. This page contains information about connecting the Milesight IoT UG87 LoRaWAN gateway to The Things Stack.

Technical specifications can be found in Milesight's official [document center](https://www.milesight-iot.com/documents-download). The Milesight UG87 LoRaWAN gateways support two ways of connecting with The Things Stack, using the Semtech UDP Packet Forwarder or LoRa Basics™ Station.

## Requirements

1. User account on The Things Stack with rights to create gateways.
2. Milesight UG87 LoRaWAN gateway connected to the Internet via Ethernet, Wi-Fi or cellular backhaul.
3. CA certificate for LoRa Basics™ Station (if using LoRa Basics™ Station).

## Registration

[Add a gateway](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/adding-gateways/) by following the instructions for the [Console](https://www.thethingsindustries.com/docs/concepts/features/console/#create-gateway) or the [CLI](https://www.thethingsindustries.com/docs/concepts/features/cli/#create-gateway).

The **Gateway EUI** can be found on the gateway's configuration web page. See the [Configuration via Browser section](#configuration-via-browser) below for instructions to access the configuration page.

![Gateway EUI](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug87/eui.png)


## Configuration via Browser

Find the gateway's IP address. The default IP address for the Milesight UG6X LoRaWAN gateway is `192.168.23.150`.

Connect your machine to the same local network as that of the gateway, and enter the gateway's IP address in your web browser. You will be presented with a login screen. The default username is `admin` and the default password is `password`.

![Login](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug87/login.png)


See [Milesight's official documentation](https://www.milesight-iot.com/documents-download) for more information.

### Disable Default Server

In the left menu, choose **Packet Forwarder**. Select the **General** tab.

![Packet Forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug87/eui.png)


Click the pencil icon next to the **localhost**, and uncheck the **Enable** button to disable the **Embedded NS**.

Click **Save** to continue.

![Disable default server](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug87/disable.png)


## Connect to The Things Stack

After completing basic configuration, follow the instructions to [Connect Milesight UG87 with LoRa Basics™ Station](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug87/lbs/) or to [Connect Milesight UG87 with Semtech UDP Packet Forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug87/packet-forwarder/).


## Pages in this section

- [Connect Milesight UG87 with Lora Basics™ Station](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug87/lbs/index.md): This section contains instructions for connecting the Milesight UG87 LoRaWAN® gateway to The Things Stack using LoRa Basics™ Station.
- [Connect Milesight UG87 with UDP Packet Forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/models/milesightug87/packet-forwarder/index.md): This section contains instructions for connecting the Milesight UG87 LoRaWAN® gateway to The Things Stack using the Semtech UDP Packet Forwarder.


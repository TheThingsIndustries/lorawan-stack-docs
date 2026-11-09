# Peplink Balance 20X LoRaWAN (with FlexModule Mini)

> Peplink’s Balance 20X is an SD-WAN branch router with an option to add LoRaWAN® gateway functionality using a LoRaWAN FlexModule Mini.

Source: https://www.thethingsindustries.com/docs/hardware/gateways/models/peplink-20x/


[Peplink’s Balance 20X](https://www.peplink.com/products/balance-20x/) is an SD-WAN branch router with an option to add LoRaWAN® gateway functionality using a LoRaWAN FlexModule Mini.

![Balance 20X with LoRaWAN FlexModule Mini](https://www.thethingsindustries.com/docs/hardware/gateways/models/peplink-20x/B20X_LoRa.png)


The Balance 20X delivers excellent routing throughput with an embedded cellular modem, making it an easy-to-use, all-in-one router for indoor deployments. Its installation and configuration are made simple through a web-based user-friendly interface.

The gateway supports both [LoRa Basics™ Station](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/lora-basics-station/) and the [Semtech UDP Packet Forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/udp/). Keep in mind that using Lora Basics™ Station is preferred.

For scalable deployments, Peplink’s in-house device management system, [InControl](https://www.peplink.com/software/network-management-solution-incontrol-2/) can also be used.

## Prerequisites

1. The Things Stack account with user rights to add gateways.
2. A Balance 20X with the LoRaWAN FlexModule Mini.
3. A computer connected to the Balance 20X for configuration.

> **Note:** Balance 20X must be running 8.3.0 or newer firmware version. Please check [Peplink's download page](https://www.peplink.com/support/downloads/#balance) to download the latest firmware version.


## Registration

Create a gateway by following the instructions for [Adding Gateways](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/adding-gateways/).

In the registration process, you will need the gateway's EUI. The Peplink 20X's EUI can be found in several ways:

1. On the LoRaWAN FlexModule Mini label.
2. On the LoRaWAN FlexModule Mini packing box.
3. Via B20X web-based configuration page, under **LoRaWAN** section on the **Advanced** tab. See image below for a reference.

![Finding EUI on the Balance 20X WEB configuration page](https://www.thethingsindustries.com/docs/hardware/gateways/models/peplink-20x/EUI.png)


## Gateway Setup

This section demonstrates how to set up the Peplink Balance 20X using LoRa Basics™ Station.

On your Peplink router’s web admin page, go to the **Advanced** tab along the top bar.

Find **LoRaWAN** settings on the left and tick the **Enable** checkbox.

Download a [common root SSL certificate](https://www.thethingsindustries.com/docs/concepts/advanced/root-certificates/) used in The Things Stack. For this guide, we used **ISRG Root X1 certificate**.

Now configure the following settings:

- **Protocol: Basics™ Station**
- **Server**: select **Configuration and Update Server (CUPS)** and enter the address of your The Things Stack deployment
- **Server Certificate (pem encoded):** paste the ISRG Root X1 certificate you previously downloaded
- **Gateway Authorization:** select **Token** and paste your gateway's API key (check the [Create Gateway API Key](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/adding-gateways/#create-gateway-api-key) section)
- **Network Mode: Public**
- **Antenna Gain:** enter antenna Gain (**2dBi** for Peplink Balance 20X gateway)
- **Cable Loss:** enter cable loss if there is a cable between antenna and LoRa module

![Balance 20X LoRaWAN Gateway configuration example](https://www.thethingsindustries.com/docs/hardware/gateways/models/peplink-20x/Gateway_setup.png)


Click **Save and Apply Changes**.

## Monitor Event Log

For debugging purposes go to **Dashboard** tab, then click on the **Status** button in the **LoRaWAN** section. This will open **LoRaWAN Status** page.

Next to the **Event log** press **Click to show**. This will open the **LoRaWAN Event Log** page. See images below for reference.

![Viewing LoRaWAN statistics on Balance 20X](https://www.thethingsindustries.com/docs/hardware/gateways/models/peplink-20x/Status.png)


![Viewing LoRaWAN Event log messages on Balance 20X](https://www.thethingsindustries.com/docs/hardware/gateways/models/peplink-20x/Event_log.png)



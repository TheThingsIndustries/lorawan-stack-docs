---
title: "Peplink Balance 20X LoRaWAN (with FlexModule Mini)"
vendor: "Peplink"
vendor_page: "https://www.peplink.com/products/balance-20x/"
description: "Peplink’s Balance 20X is an SD-WAN branch router with an option to add LoRaWAN® gateway functionality using a LoRaWAN FlexModule Mini."
ip_rating:
backhaul: ["Ethernet", "Wi-Fi", "Cellular (optional)"]
aliases: [/gateways/peplink]
image: [B20X_LoRa.png]
---

[Peplink’s Balance 20X](https://www.peplink.com/products/balance-20x/) is an SD-WAN branch router with an option to add LoRaWAN® gateway functionality using a LoRaWAN FlexModule Mini.

{{< figure src="B20X_LoRa.png" alt="Balance 20X with LoRaWAN FlexModule Mini" class="plain" >}}

The Balance 20X delivers excellent routing throughput with an embedded cellular modem, making it an easy-to-use, all-in-one router for indoor deployments. Its installation and configuration are made simple through a web-based user-friendly interface. 

The gateway supports both [LoRa Basics™ Station]({{< ref "/gateways/concepts/lora-basics-station" >}}) and the [Semtech UDP Packet Forwarder]({{< ref "/gateways/concepts/udp" >}}). Keep in mind that using Lora Basics™ Station is preferred.

For scalable deployments, Peplink’s in-house device management system, [InControl](https://www.peplink.com/software/network-management-solution-incontrol-2/) can also be used.

## Prerequisites

1. {{% tts %}} account with user rights to add gateways.
2. A Balance 20X with the LoRaWAN FlexModule Mini.
3. A computer connected to the Balance 20X for configuration.

{{< note "Balance 20X must be running 8.3.0 or newer firmware version. Please check [Peplink's download page](https://www.peplink.com/support/downloads/#balance) to download the latest firmware version." />}}


## Registration

Create a gateway by following the instructions for [Adding Gateways]({{< ref "/gateways/concepts/adding-gateways" >}}). 

In the registration process, you will need the gateway's EUI. The Peplink 20X's EUI can be found in several ways:

1. On the LoRaWAN FlexModule Mini label.
2. On the LoRaWAN FlexModule Mini packing box.
3. Via B20X web-based configuration page, under **LoRaWAN** section on the **Advanced** tab. See image below for a reference.

{{< figure src="EUI.png" alt="Finding EUI on the Balance 20X WEB configuration page" class="plain" >}}

## Gateway Setup

This section demonstrates how to set up the Peplink Balance 20X using LoRa Basics™ Station.

On your Peplink router’s web admin page, go to the **Advanced** tab along the top bar.

Find **LoRaWAN** settings on the left and tick the **Enable** checkbox.

Download a [common root SSL certificate]({{< ref "/reference/root-certificates" >}}) used in {{% tts %}}. For this guide, we used **ISRG Root X1 certificate**.

Now configure the following settings:
- **Protocol: Basics™ Station**
- **Server**: select **Configuration and Update Server (CUPS)** and enter the address of your {{% tts %}} deployment
- **Server Certificate (pem encoded):** paste the ISRG Root X1 certificate you previously downloaded
- **Gateway Authorization:** select **Token** and paste your gateway's API key (check the [Create Gateway API Key]({{< ref "/gateways/concepts/adding-gateways/#create-gateway-api-key" >}}) section)
- **Network Mode: Public**
- **Antenna Gain:** enter antenna Gain (**2dBi** for Peplink Balance 20X gateway)
- **Cable Loss:** enter cable loss if there is a cable between antenna and LoRa module

{{< figure src="Gateway_setup.png" alt="Balance 20X LoRaWAN Gateway configuration example" class="plain" >}}

Click **Save and Apply Changes**.

## Monitor Event Log

For debugging purposes go to **Dashboard** tab, then click on the **Status** button in the **LoRaWAN** section. This will open **LoRaWAN Status** page.

Next to the **Event log** press **Click to show**. This will open the **LoRaWAN Event Log** page. See images below for reference.

{{< figure src="Status.png" alt="Viewing LoRaWAN statistics on Balance 20X" class="plain" >}}

{{< figure src="Event_log.png" alt="Viewing LoRaWAN Event log messages on Balance 20X" class="plain" >}}

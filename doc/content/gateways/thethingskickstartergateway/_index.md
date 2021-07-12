---
title: "The Things Kickstarter Gateway"
description: ""
---

This page guides you to connect The Things Kickstarter Gateway to {{% tts %}}.

<!--more-->

The Things Kickstarter Gateway is a LoRaWAN gateway, whose technical specifications can be found in [the official documentation](https://www.thethingsnetwork.org/docs/gateways/gateway/). 

## Prerequisites

1. User account on {{% tts %}} with rights to create Gateways and API Keys.
2. The Things Gateway running the latest firmware (a minimum of `v1.0.8` is necessary).

## Registration

Create a gateway by following the instructions for [Adding Gateways]({{< ref "/gateways/adding-gateways" >}}). Choose a **Gateway ID**. An **EUI** is not necessary.

Create an API Key with Gateway Link rights for this gateway using the same instructions. Copy the key and save it for later use.

## Configuration

Open the front panel of the gateway casing.

While the gateway is powered on, hold the pink reset button for 5 seconds (until each of the 5 LEDs illuminate). This erases the existing configuration on the gateway.

The gateway will now expose a WiFi Access Point whose SSID is of the form `TheThings-Gateway-xxxxx`, to which you should now connect using password `thethings`.

In a web browser, open the gateway's configuration page by navigating to http://192.168.84.1/

{{< figure src="ttkg-config-window.png" alt="TTKG Configuration Window" >}}

Enter the following fields:

- **Name**: the **Gateway ID** that you chose earlier.
- Choose the WiFi network from the drop down and enter a password if necessary.

{{< note >}} To connect to a Cloud Hosted tenant, the tenant ID must be added to the  **Gateway ID** field in the format **Gateway ID**@**Tenant ID**. {{</ note >}}

Click the **Show Advanced Options** button and enter the following fields:

- **Account Server**: Address of your {{% tts %}} deployment. See [Server Addresses]({{< ref "getting-started/server-addresses" >}}).
- **Gateway Key**: The API Key that you created earlier.
- Click **Save** when done.

This will apply the setting and reboot the gateway. If all the steps have been followed correctly, your gateway will now connect to {{% tts %}}.

## Troubleshooting

Please allow about 5 mins for the gateway to attempt connection before trouble shooting. During this period only 2 or 3 LEDs will be ON with the 3rd LED slowly blinking.

If there only 3 LEDs active for an extended period of time, unplug the gateway, wait for 10s and reconnect. Also try using an Ethernet connection as that improves the network connectivity.

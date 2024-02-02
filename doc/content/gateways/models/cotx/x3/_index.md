---
title: COTX X3
vendor: COTX
vendor_page: "https://www.cotxnetworks.com/hotspot/cotx-x3/"
description: "The COTX X3 gateway has similar characteristics to the COTX X1 gateway, only with additional features like outdoor support, BLE support, a small screen for easy monitoring and more."
ip_rating:
backhaul: ["Ethernet", "Wi-Fi"]
aliases: [/gateways/cotx/x3]
image: [X3_1.png]
---

{{< figure src="X3_1.png" alt="COTX X3" class="plain float" >}}

COTX X3 gateway has similar characteristics to previously described [X1]({{< ref "/gateways/models/cotx/x1" >}}) gateway, only with additional features like:
- Outdoor support
- BLE support
- Small screen for easy monitoring, etc.

## Gateway Setup

Install the LoRa antenna on the **LoRa Antenna Port**.

{{< figure src="X3_2.png" alt="COTX X3 antenna ports" class="plain" >}}

Place the gateway in a proper location (e.g. near a window) to have the optimum coverage and signal reception.

For Ethernet access to WAN/Internet scenario, please connect the **LAN** port on the gateway to an existing router with an Ethernet cable.

{{< figure src="X3_3.png" alt="COTX X3 internet ports" class="plain" >}}

Plug the power adapter to a 110~220V AC power source (socket) and connect the micro USB connector to the **PWR INPUT** port on the gateway.

{{< figure src="X3_4.png" alt="COTX X3 power supply" class="plain" >}} 

After powering up the gateway, the LED indication should light up and turn green when the gateway is ready for further configuration. Click the **BT** button and the Ethernet interface's IP address and device status will show up on the screen. The gateway should now be able to connect to {{% tts %}}.

{{< figure src="X3_5.png" alt="COTX X3 IP settings" class="plain" >}}

## Connecting COTX X3 to {{% tts %}}

Register the COTX gateway by following instructions for [Adding Gateways]({{< ref "/gateways/concepts/adding-gateways" >}}).

For **Gateway ID** and **Gateway EUI**, enter the 8 byte **ID** available on the label at the bottom of the gateway.

---
title: COTX X5
vendor: COTX
vendor_page: "https://www.cotxnetworks.com/hotspot/cotx-x5/"
description: "The COTX X5 gateway is an outdoor gateway intended for industrial IoT use cases, with a water and dust proof aluminium case."
aliases: [/gateways/cotx/x5]
ip_rating: "IP67"
backhaul: [Ethernet, Wi-Fi, Cellular]
image: [X5_1.png]
---

{{< figure src="X5_1.png" alt="COTX X5" class="plain float" >}}

COTX X5 gateway has similar characteristics to previously described [X1]({{< ref "/gateways/models/cotx/x1" >}}) and [X3]({{< ref "/gateways/models/cotx/x3" >}}) gateways, but unlike them is an outdoor gateway intended for industrial IoT use cases, with a water and dust proof aluminium case.

## Gateway Setup 

First, carefully connect the LoRa antenna to the **Lora** port of the gateway  the Wi-Fi antenna to the **WiFi/BLE** port and the LTE antenna to the **LTE** port.

{{< figure src="X5_2.png" alt="COTX X5 antenna connections" class="plain" >}}

Next find a suitable location for your gateway to be positioned. Make sure it provides the best coverage.

To connect the gateway to the Ethernet network, use a network cable and connect the gateway to a router.

The default gateway setting is Power over Ethernet (PoE). Connect the **Ethernet** port of the gateway to a switch with PoE function.

{{< figure src="X5_3.png" alt="COTX X5 PoE connection" class="plain" >}}

If the PoE function is unavailable unavailable, use a PoE injector and power it up. 

{{< figure src="X5_4.png" alt="COTX X5 PoE injector connection" class="plain" >}}

After powering the gateway up, the system LED lights up. When the system is ready, that system LED will turn green. The gateway should now be able to connect to {{% tts %}}.

## Connecting COTX X3 to {{% tts %}}

Register the COTX gateway by following instructions for [Adding Gateways]({{< ref "/gateways/concepts/adding-gateways" >}}).

For **Gateway ID** and **Gateway EUI**, enter the 8 byte **ID** available on the label at the bottom of the gateway.

# COTX X5

> The COTX X5 gateway is an outdoor gateway intended for industrial IoT use cases, with a water and dust proof aluminium case.

Source: https://www.thethingsindustries.com/docs/hardware/gateways/models/cotx/x5/


![COTX X5](https://www.thethingsindustries.com/docs/hardware/gateways/models/cotx/x5/X5_1.png)


COTX X5 gateway has similar characteristics to previously described [X1](https://www.thethingsindustries.com/docs/hardware/gateways/models/cotx/x1/) and [X3](https://www.thethingsindustries.com/docs/hardware/gateways/models/cotx/x3/) gateways, but unlike them is an outdoor gateway intended for industrial IoT use cases, with a water and dust proof aluminium case.

## Gateway Setup

First, carefully connect the LoRa antenna to the **Lora** port of the gateway the Wi-Fi antenna to the **WiFi/BLE** port and the LTE antenna to the **LTE** port.

![COTX X5 antenna connections](https://www.thethingsindustries.com/docs/hardware/gateways/models/cotx/x5/X5_2.png)


Next find a suitable location for your gateway to be positioned. Make sure it provides the best coverage.

To connect the gateway to the Ethernet network, use a network cable and connect the gateway to a router.

The default gateway setting is Power over Ethernet (PoE). Connect the **Ethernet** port of the gateway to a switch with PoE function.

![COTX X5 PoE connection](https://www.thethingsindustries.com/docs/hardware/gateways/models/cotx/x5/X5_3.png)


If the PoE function is unavailable unavailable, use a PoE injector and power it up.

![COTX X5 PoE injector connection](https://www.thethingsindustries.com/docs/hardware/gateways/models/cotx/x5/X5_4.png)


After powering the gateway up, the system LED lights up. When the system is ready, that system LED will turn green. The gateway should now be able to connect to The Things Stack.

## Connecting COTX X3 to The Things Stack

Register the COTX gateway by following instructions for [Adding Gateways](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/adding-gateways/).

For **Gateway ID** and **Gateway EUI**, enter the 8 byte **ID** available on the label at the bottom of the gateway.


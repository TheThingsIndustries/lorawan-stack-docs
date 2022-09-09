---
title: COTX X1
---

COTX X1 is a standard LoRaWAN indoor gateway. It is easy to install and deploy, highly compatible and has a user-friendly interface. COTX offers rich software tools, powerful back office management and technical support.

<!--more-->

{{< note >}} You can also follow these instructions for registering COTX X1 Lite version of the gateway. {{</ note >}}

## Gateway Setup 

First  insert the male SMA connector of the antenna feeder into the **LoRa Antenna Port** on the device and tighten it.

{{< figure src="X1_1.png" alt="COTX antenna ports" class="plain" >}}

Place  your gateway to a suitable location (e.g. near a window) to provide the best coverage for devices. 

If you are using a wired Ethernet connection, connect an Ethernet cable between a router or switch and the **Ethernet Port** on the gateway, so the gateway can connect to the Internet.

{{< figure src="X1_2.png" alt="COTX internet ports" class="plain" >}}

Finally, insert the power adapter into the 110~220VAC mains socket and connect the power supply into the **PWR INPUT** on the gateway.

If the device indicator is green after powering the gateway up, the system is running properly. The gateway should now be able to connect to {{% tts %}}.

## Connecting COTX X1 (Lite) to {{% tts %}}

Register the COTX gateway by following instructions for [Adding Gateways]({{< ref "/gateways/adding-gateways" >}}).

For **Gateway ID** and **Gateway EUI**, enter the 8 byte **ID** available on the label at the bottom of the gateway.

{{< figure src="X1_3.png" alt="COTX X3 TTS config" class="plain" >}}

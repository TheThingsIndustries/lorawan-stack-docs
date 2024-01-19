---
title: "Confirmed Uplinks Behavior"
description: ""
---

This section describes LoRaWAN network behavior upon receiving confirmed uplink messages.

<!--more-->

Confirmed uplink messages have a distinct frame type, i.e. have MType (first 3 bits of [MHDR field](https://www.thethingsnetwork.org/docs/lorawan/message-types#data-messages) set to value `4` (binary `100`).

Let's consider the Network Server has received a confirmed uplink. The end device that sends this uplink requests to receive a confirmation upon its reception by the Network Server.

To confirm a reception of the above mentioned uplink, the Network Server generates a downlink message with a confirmation `ACK` flag set to `1`. The confirmation flag is part of the standard LoRaWAN® frame header. This downlink is always a class A downlink. The Network Server will send a confirmation downlink after receiving every confirmed uplink message.

If the confirmation downlink successfully reaches the end device, the device considers the uplink message confirmed.

If the end device doesn't receive the confirmation downlink or if the Network Server doesn't receive the previously mentioned confirmed uplink, the end device behavior might differ depending on the LoRaWAN version:
- Devices with LoRaWAN version lower than 1.0.4 may retry sending the confirmed uplink unlimited number of times.
- Devices with LoRaWAN version greater or equal to 1.0.4 will retry sending the confirmed uplink at most `NbTrans` humber of times.
Regardless of which LoRaWAN version device has, the same frame counter will be used, so {{% tts %}} application will see the confirmed uplink message at most once, but the Network Server might see it multiple times if it has been resent.

As mentioned in the [Best Practices]({{< ref "/devices/concepts/best-practices#limit-transmission-length-payload-size-and-duty-cycle" >}}) section, it is advised to avoid using confirmed uplink messages except in cases where 100% assurance of transmission is required, i.e. in applications such as alarms. This especially applies to large fleets of devices. This is because in LoRaWAN deployments there's commonly a lot less gateways than devices, and if too many end devices send confirmed uplinks very often, there's a possibility of consuming the gateway's entire duty cycle. As a consequence of gateway not confirming confirmed uplinks, the end devices will try retransmitting confirmed uplinks which again won't be confirmed and so on.

Using confirmed uplinks is left to the user's responsibility since the Network Server cannot force end devices to stop using confirmed uplinks, but some end devices have application layer commands which allow confirmed uplinks to be disabled.
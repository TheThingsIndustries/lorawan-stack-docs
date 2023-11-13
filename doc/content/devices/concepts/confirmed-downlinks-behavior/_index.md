---
title: "Confirmed Downlinks Behavior"
description: ""
aliases: ["/devices/confirmed-downlinks-behavior"]
---

This section describes differences in behavior of class A, B and C devices when scheduling confirmed downlink messages.

<!--more-->

Let's consider scheduling a confirmed downlink message from the Network Server. The end device that receives this downlink is requested to send a confirmation upon its reception.

To confirm a reception of the above mentioned downlink, a confirmation flag is attached to device's next uplink message. The confirmation flag is part of the standard LoRaWAN® frame header. If the flag is an NACK, the end device indicates that it has not previously received a downlink message that required acknowledgement. If the flag is a ACK, the end device indicates that it wants to provide the acknowledgement for the previously received downlink message that requested it. This applies to all [device classes](https://www.thethingsnetwork.org/docs/lorawan/classes/).

In general, upon receiving the next uplink message with an ACK flag, the Network Server decrypts the uplink message and generates the `downlink ack` message. The Application Server receives the `downlink ack` message and forwards it further to the integrations.

Similar to that, if the next uplink message with a NACK flag is received, the Network Server decrypts the uplink, generates the `downlink nack` message and sends it to the Application Server. The Application Server then forwards the `downlink nack` to integrations and regenerates the downlink.

Sending a downlink happens only after an uplink for class A devices. If a NACK is received from a class A device, the downlink will automatically be re-encrypted and resent.

On the other hand, for class B and class C devices, the server behavior for confirmed downlinks is a bit different. The difference arises from the fact that downlinks for class B and class C devices can be sent as part of the network-initiated downlink slot, without previously receiving an uplink. Uplinks, that carry the ACK/NACK flag, can be sent by these devices at irregular intervals. After the confirmed downlink is transmitted to the end device, the Network Server will not generate the `downlink ack/nack` message until the next uplink arrives, so the downlink will not be automatically resent in case the end device does not reply to the transmission.

Re-attempting downlinks without constraint for class B and class C devices is a bad practice, because it might cause an infinite loop if the end device is powered off or out of the gateway range. Consequences of this practice would be creating noise in the area for no good reason, and consuming gateway's duty cycle.

Whether a confirmed downlink will be resent and how many times depends on the application. The application can conclude if the Network Server has generated the `downlink ack/nack` message using dedicated message paths - see [MQTT]({{< ref "/integrations/mqtt#subscribing-to-upstream-traffic" >}}) or [Webhooks]({{< ref "/integrations/webhooks/webhook-templates/format#endpoint" >}}) documentation. If the Application Server has received the `downlink nack` message, no action is required, because the Application Server will try to resend the downlink on its own. However, if the Application Server has not received the `downlink ack/nack`, it can not decide on its own if it should retry the downlink.

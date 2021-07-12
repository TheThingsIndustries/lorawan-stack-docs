---
title: "LoRa Basics Station Implementation Guide"
description: ""
---

This guide contains implementation details primarily for gateway manufacturers intending to implement the {{% lbs %}} protocol.

<!--more-->

## Use of DevEui field in Downlink Messages

Gateways using the {{% lbs %}} protocol report the successful transmission of downlink messages via the Transmit Confirmation (`dntxed`) message. In order to correlate the confirmation message to a downlink, the {{% lbs %}} protocol provides two options to the LNS. The LNS is offered the flexibility to implement either of these mechanisms.

a. Using the `DevEui` and the `diid` fields
- In this mode, the LNS uses a per-device downlink counter. Gateways echo the `DevEui` and `diid` fields sent on the downlink message on the corresponding Transmit Confirmation message.
- The LNS then forwards the transmit confirmation upstream.
- This is useful for debugging using {{% lbs %}} gateway logs since the `DevEui` will be printed. However, this exposes the DevEui of end devices to gateways which is not desirable in cases where the gateway is not owned/operated by the device owner.
- {{% tts %}} does not use this method to correlate Transmit Confirmations.

b. Using only the `diid` field
- The LNS can choose to make the `diid` field globally unique per gateway (per session). The LNS can then maintain a correlation of the `diid` values to downlink messages.
- When the gateway sends a Transmit Confirmation message, the LNS can then use the echoed `diid` value to look up the downlink message and retrieve information on the end device and forward the transmit confirmation upstream.
- In this mode, the `DevEui` field of the downlink message is not used by the LNS but should be set to a non-zero value.
- This is the approach used by {{% tts %}}, where the `DevEui` is set to `0000000000000001` for all downlink messages.


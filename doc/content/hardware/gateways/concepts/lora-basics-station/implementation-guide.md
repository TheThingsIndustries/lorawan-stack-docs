---
title: "Implementation Guide"
description: ""
aliases:
  [/reference/lbs-implementation-guide/implementation-details/, /reference/lbs]
---

This guide contains implementation details primarily for gateway manufacturers intending to implement the {{% lbs %}} protocol.

<!--more-->

{{< note >}}

The standard implementation of the {{% lbs %}} protocol found at the [Github page](https://github.com/lorabasics/basicstation) is already compatible with the behaviour mentioned in this guide. Custom implementations must be aware of the following items and must ensure that these are accounted for.

{{</ note >}}

## Downlink Scheduling

The Gateway Server component of {{% tts %}} contains a native downlink scheduler, that optimizes downlink capacity of gateways. Implementations of the {{% lbs %}} also contain a scheduler.
{{% tts %}} prefers its own scheduler over the {{% lbs %}} scheduler for the following reasons:

- Only the {{% tts %}} has knowledge of all the possible downlink paths to a device via multiple gateways. An individual gateway has no knowledge of other gateways. If downlinks fail on a particular gateway, then the server will retry via a different gateway.
- Only the {{% tts %}} can effectively enforce duty cycling and make sure that gateways operate within regional limits. This prevents operators from manipulating gateways to circumvent regulations.

{{% tts %}} enforces the use of its scheduler over the {{% lbs %}} scheduler by manipulating the downlink parameters.

#### XTime

{{% lbs %}} uses the [`xtime`](https://doc.sm.tc/station/tcproto.html#single-frame-downlink) value to calculate the time a downlink is put on air. According to the {{% lbs %}} specification, the `xtime` value has to be echoed unchanged by the server to the gateway. However, {{% tts %}} deviates from this expectation by manipulating the `xtime` to force the gateway to schedule downlinks based on the server's scheduler instead of the gateway scheduler.

The `xtime` parameter is encoded as follows. {{% tts %}} only manipulates bits `47-0`, based on an internal clock that is maintained for each gateway. The rest of the upper bits are returned as-is.

<div class="fixed-table table-lbs-xtime">

| Bit(s) | Description                                                                             |
| ------ | --------------------------------------------------------------------------------------- |
| 63     | Sign (always positive)                                                                  |
| 62-56  | Radio unit where the time stamp originated from (max 128)                               |
| 55-48  | Session ID; Random value to disambiguate different SX1301 sessions (should never be 0). |
| 47-0   | Microseconds since SX1301 start (rollover every 9y >> uptime of sessions).              |

</div>
<br>

Custom implementations of {{% lbs %}} working with {{% tts %}} must ensure that the `Session ID` bits (55-48) are never zero and take into account the fact that the bits 47-0 are modified.

#### Downlink Windows

{{% lbs %}} allows the server to provide both the RX1 and RX2 parameters of the downlink message, [`dnmsg`](https://doc.sm.tc/station/tcproto.html#single-frame-downlink). This is so that the gateway can retry downlinks in RX2, if it failed in RX1. {{% tts %}} however only sets the RX1 values (`RX1DR` and `RX1Freq`), thereby forcing the gateway to schedule only once. Errors in scheduling and subsequent retries are handled in {{% tts %}} and not on the gateway. If {{% tts %}} wants to force the gateway to schedule in the RX2 window, it sends the RX2 parameters in the same RX1 fields of the `dnmsg` but offsets the downlink time (`xtime`) to make the gateway schedule in the correct window.

Custom implementations of {{% lbs %}} working with {{% tts %}} only need to schedule downlink messages that are sent by the {{% tts %}} and let the latter handle retries and conflicts.

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

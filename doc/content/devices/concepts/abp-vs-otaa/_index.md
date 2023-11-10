---
title: "ABP vs OTAA"
description: ""
weight: 1
aliases: ["devices/abp-vs-otaa"]
---

This section can help you understand the differences between ABP and OTAA activation modes for LoRaWAN® end devices, and comprehend why using OTAA is recommended.

<!--more-->

Learn more about device activation in general and details about OTAA and ABP flow in [The Things Network LoRaWAN documentation](https://www.thethingsnetwork.org/docs/lorawan/end-device-activation/).

A `DevEUI` is a 64-bit unique ID assigned to an end device by the manufacturer. This value is linked to the hardware and it cannot be altered.

Unlike `DevEUI`, which identifies an end device globally, a 32-bit `DevAddr` identifies the end device within the current network and all communication after joining the network is done with it. A `DevAddr` value consists of `NwkAddr` (end device address within network) prefixed by a `NwkID` (network identifier).

Please keep in mind that the `DevAddr` value is not unique - multiple devices can have the same `DevAddr`.

A `DevAddr` and session keys are assigned to an end device during a procedure called **activation**. LoRaWAN supports two modes of activating an end device: **ABP (Activation By Personalization)** and **OTAA (Over-The-Air Activation)**.

## ABP

In ABP activation, a **fixed** `DevAddr` and **session keys** for a pre-selected network are hardcoded into the end device, and they remain the same throughout the lifetime of an ABP end device. With this mode, an end device skips the join procedure which seems to be simpler, but there are quite a few limitations of using ABP, which are explained below.

## OTAA

OTAA end devices are provisioned with **root keys**. In OTAA activation, an end device performs a join procedure with a LoRaWAN network, during which a **dynamic** `DevAddr` is assigned to an end device, and root keys are utilized to derive **session keys**. Hence, `DevAddr` and session keys change as each new session is established.

## Why is OTAA better than ABP?

ABP's drawbacks are arising as consequences of its main characteristics.

1. **ABP end devices use a fixed `DevAddr`.**

Taking the structure of `DevAddr` into the account and the fact that, with ABP, `NwkID` is fixed, we come to the conclusion that this device can work correctly only in its predefined network. Even if a network or a cluster allows registering end devices with different `DevAddr` values than the ones that were assigned to that network/cluster, the [Packet Broker]({{< ref "/the-things-stack/packet-broker#packet-broker" >}}) will not route the traffic from those end devices to the right network/cluster.

Also, even if the network/cluster is assigned with additional address blocks, the Network Server will not be able to perform optimization of `DevAddr` allocation, hence the device matching procedure for ABP end devices will not be improved.

OTAA end devices are assigned a new `DevAddr` at establishing each new session. This allows them to move to different networks/clusters.

2. **ABP end devices use a fixed security session.**

Frame counters associated with ABP devices should not be reset during their lifetime, otherwise the messages from those end devices may end up being dropped. When an ABP end device runs out of frame counters, it is the end of its lifetime.

Session keys are hardcoded into an ABP device, meaning that even if they leak, they cannot be rotated, which is a serious security threat.

Unlike ABP, OTAA end devices re-negotiate frame counters and session keys at establishing each new session. Hence, the lifetime of an OTAA device is not conditioned by the width of the frame counter.

Read more about LoRaWAN security in [The Things Network LoRaWAN documentation](https://www.thethingsnetwork.org/docs/lorawan/security/).

For enhancing security, you can use [The Things Join Server]({{< ref "/the-things-stack/host/join-server" >}}) to handle the join flow, Network Server and Application Server authentication, store root keys and generate session keys. Another option is using Hardware Secured Elements (see [Microchip ATECC608 secure elements]({{< ref "/devices/adding-devices/atecc608a" >}})) which prevent the exposure of keys to software, firmware, manufacturing sites, and other third parties.

3. **ABP end devices use fixed network parameters.**

When registering an ABP device on {{% tts %}}, you will need to provide the **RX1 Delay**, **RX1 Data Rate Offset**, **RX2 Data Rate Index**, **RX2 Frequency** and a list of **Factory Preset Frequencies**. If these values are not correctly configured, uplinks and/or downlinks might not work.

OTAA end devices re-negotiate network parameters at establishing each new session, meaning you do not have to worry about them being misconfigured.

## OTAA Requirements

In general, there are no drawbacks in using OTAA over using ABP, but there are certain requirements that need to be met when using OTAA.

The only thing to keep in mind is that an OTAA join requires the end device to be within the coverage of the network it is registered on. The reason for this is that the OTAA join procedure requires the end device to be able to receive the Join Accept downlink message from the Network Server.

In case the end device does not have the network coverage when it is switched on, the Join procedure will fail. Depending on the firmware and LoRaWAN stack used in the device, a failed OTAA join may result in the device not going into sleep mode, or using a lot of energy on endless attempts to rejoin the network.

If the network coverage for the end device can not be guaranteed, it does not mean that OTAA can not be used. If the firmware in the device is smart enough to handle failed OTAA joins properly, the device can retry the join at a later stage.

A naive approach that has been used in the past to avoid this was to use ABP. ABP allows a device to start transmitting messages immediately when it is switched on, regardless of whether it has the network coverage or not.

A better approach is to perform an OTAA join in a factory or workshop where the network coverage and working downlinks can be guaranteed. There are no drawbacks to this approach as long as the device follows the LoRaWAN [best practices]({{< ref "/devices/concepts/best-practices" >}}).

One more thing to take into account is persisting network parameters between device restarts. For example, an ABP device uses a non-volatile storage to persist frame counters between restarts. A better approach would be to switch to using OTAA and store the OTAA session rather than frame counters.

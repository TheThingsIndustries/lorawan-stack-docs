---
title: "Class C"
description: ""
weight: 5
---

Class C end devices continuously listen for downlink messages. This allows applications to send messages to devices at any time, instead of having to wait for a Class A uplink. When combined with [multicast groups]({{< ref "/devices/multicast" >}}), this allows applications to send immediate downlinks to many devices at the same time.

This guide shows how to enable or disable Class C for an and device, and how to work with multicast groups.

<!--more-->

Read more about device classes in [The Things Network LoRaWAN documentation]](https://www.thethingsnetwork.org/docs/lorawan/classes/).

## Enabling and Disabling Class C

In order to send Class C downlink messages to a single device, enable Class C support for the end device when creating or updating it with the `--supports-class-c` flag.

For example, when enabling Class C for an existing device:

```bash
$ ttn-lw-cli end-devices set app1 dev1 --supports-class-c
```

This will enable the Class C downlink scheduling of the device. That's it! Downlink messages are now scheduled as soon as possible.

For unicast devices, Class C downlink scheduling starts after the end device sends an uplink in the session. This means that an OTAA end device should send an uplink message after receiving the join-accept in order to enable Class C downlink scheduling.

To disable Class C scheduling, reset with `--supports-class-c=false`.

## Multicast Group

See [Multicast]({{< ref "devices/multicast" >}}) for instructions for creating and using multicast groups.

## Class C Message Settings

{{% tts %}} supports optional settings for Class C downlink messages: the downlink path and the time to send the message.

The downlink path is defined by one or more gateways IDs. The Network Server and Gateway Server schedules only on the specified gateways in the specified order. This is useful for multicast (where no downlink path is known because there is no uplink). A scheduling attempt on can fail when the gateway is not connected, if there is a scheduling conflict or if duty-cycle regulations prohibit transmission. See the [Example]({{< relref "#example" >}}) section below.

The time to transmit is an absolute timestamp in ISO 8601 format to send the message. This requires gateways either with GPS lock, or gateways that use a protocol that provide round-trip times (RTT). See the [Example]({{< relref "#example" >}}) section below.

## Example

{{< cli-only >}}

First, create a Class C device:

```bash
$ ttn-lw-cli end-devices create app1 dev1 \
  --frequency-plan-id EU_863_870 \
  --lorawan-version 1.0.3 \
  --lorawan-phy-version 1.0.3-a \
  --session.dev-addr 00E4304D \
  --session.keys.app-s-key.key A0CAD5A30036DBE03096EB67CA975BAA \
  --session.keys.nwk-s-key.key B7F3E161BC9D4388E6C788A0C547F255 \
  --supports-class-c
```

Then, schedule the following message to the [Application Server MQTT server]({{< ref "/integrations/mqtt" >}}) or [HTTP webhooks]({{< ref "/integrations/webhooks" >}}):

```json
{
  "downlinks": [{
    "frm_payload": "vu8=",
    "f_port": 42,
    "priority": "NORMAL",
    "class_b_c": {
      "gateways": [
        {
          "gateway_ids": {
            "gateway_id": "gtw1"
          },
        },
        {
          "gateway_ids": {
            "gateway_id": "gtw2"
          },
        }
      ],
      "absolute_time": "2019-07-23T13:05:00Z"
    }
  }]
}
```

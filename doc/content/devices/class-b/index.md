---
title: "Class B"
description: ""
weight: 4
---

Class B end devices listen for downlink messages during ping slots. This allows applications to send messages to devices at predefined time slots, rather than waiting for a Class A uplink. When combined with [multicast groups]({{< ref "/devices/multicast" >}}), this allows applications to send periodic downlinks to many devices at the same time.

<!--more-->

Read more about device classes in [The Things Network LoRaWAN documentation](https://www.thethingsnetwork.org/docs/lorawan/classes/).

{{< note >}} See the [Confirmed Downlinks Behavior]({{< ref "/devices/confirmed-downlinks-behavior" >}}) section to learn how confirmed downlinks behavior for class B devices differs from confirmed downlinks behavior for class A devices. {{</ note >}}

We define some user parameters that will be used below:

```bash
APP_ID="app1" 
DEVICE_ID="dev1"
FREQUENCY_PLAN="EU_863_870"
LORAWAN_VERSION="1.0.3"
LORAWAN_PHY_VERSION="1.0.3-a"
DEV_ADDR="00E4304D"
APP_SESSION_KEY="A0CAD5A30036DBE03096EB67CA975BAA"
NWK_SESSION_KEY="B7F3E161BC9D4388E6C788A0C547F255"
```

Make sure to modify these according to your setup.

## Enabling and Disabling Class B

In order to send Class B downlink messages to a single device, enable Class B support for the end device when creating or updating it with the `--supports-class-b` flag.

For example, when enabling Class B for an existing device:

```bash
ttn-lw-cli end-devices set $APP_ID $DEVICE_ID --supports-class-b
```

This will enable the Class B downlink scheduling of the device. Downlink messages are now scheduled during the next available ping slot.

For unicast devices, Class B downlink scheduling starts when the end device sends an uplink with the Class B bit set. This means that an OTAA device should send an uplink message with the Class B bit set after receiving the join-accept in order to enable Class B downlink scheduling.

To disable Class B scheduling, reset with `--supports-class-b=false`.

## Multicast Group

See [Multicast]({{< ref "devices/multicast" >}}) for instructions for creating and using multicast groups.

## Class B Message Settings

{{% tts %}} supports optional settings for Class B downlink messages: the downlink path and the time to send the message.

The downlink path is defined by one or more gateways IDs. The Network Server and Gateway Server schedules only on the specified gateways in the specified order. This is useful for multicast (where no downlink path is known because there is no uplink). A scheduling attempt can fail when the gateway is not connected, if there is a scheduling conflict or if duty-cycle regulations prohibit transmission. 

The time to transmit is an absolute timestamp in ISO 8601 format to send the message. This requires gateways either with GPS lock, or gateways that use a protocol that provide round-trip times (RTT). See the [Example]({{< relref "#example" >}}) section below.

## Example

{{< cli-only >}}

First, create a Class B device:

```bash
ttn-lw-cli end-devices create $APP_ID $DEVICE_ID \
  --frequency-plan-id $FREQUENCY_PLAN \
  --lorawan-version $LORAWAN_VERSION \
  --lorawan-phy-version $LORAWAN_PHY_VERSION \
  --session.dev-addr $DEV_ADDR \
  --session.keys.app-s-key.key $APP_SESSION_KEY \
  --session.keys.nwk-s-key.key $NWK_SESSION_KEY \
  --supports-class-b
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


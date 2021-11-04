---
title: "Multicast"
description: ""
aliases: ["devices/class-c-multicast"]
weight: 6
---

It is also possible to create a [Class B]({{< ref "devices/class-b" >}}) or [Class C]({{< ref "devices/class-c" >}}) multicast group to send downlink messages to a group of end devices. A multicast group is a virtual ABP device (i.e. shared session keys), does not support uplink, confirmed downlink nor MAC commands.

<!--more-->

## Class B and Multicast

Since there are no uplinks in multicast groups, there is no MAC layer communication between the end device and {{% tts %}}. Therefore, it is necessary to specify the ping slot periodicity by setting the following parameter:

- `mac-settings.ping-slot-periodicity.value`

See the [MAC Settings]({{< ref "devices/mac-settings" >}}) guide for more information about configuring MAC layer parameters.

## Creating a Multicast Group

When creating a device, you can specify in the Console and CLI whether it's a multicast group.

CLI example:

```bash
$ ttn-lw-cli end-devices create app1 mc1 \
  --frequency-plan-id EU_863_870 \
  --lorawan-version 1.0.3 \
  --lorawan-phy-version 1.0.3-a \
  --session.dev-addr 00E4304D \
  --session.keys.app-s-key.key A0CAD5A30036DBE03096EB67CA975BAA \
  --session.keys.nwk-s-key.key B7F3E161BC9D4388E6C788A0C547F255 \
  --multicast \
  --supports-class-c # or --supports-class-b
```

Please note that a multicast group cannot be converted to a normal unicast device or the other way around.

{{< note >}} Since multicast does not support uplink, the Network Server does not know a downlink path. Therefore, you need to specify a downlink path when scheduling a downlink message. {{</ note >}}

## Example

{{< cli-only >}}

First, create a multicast group:

```bash
$ ttn-lw-cli end-devices create app1 mc1 \
  --frequency-plan-id EU_863_870 \
  --lorawan-version 1.0.3 \
  --lorawan-phy-version 1.0.3-a \
  --session.dev-addr 00E4304D \
  --session.keys.app-s-key.key A0CAD5A30036DBE03096EB67CA975BAA \
  --session.keys.nwk-s-key.key B7F3E161BC9D4388E6C788A0C547F255 \
  --multicast \
  --supports-class-c
```

Then, schedule the following message to the [Application Server MQTT server]({{< ref "/integrations/mqtt" >}}) or [HTTP webhooks]({{< ref "/integrations/webhooks" >}}). A downlink path must be specified because none is known, as there is no uplink in multicast:

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


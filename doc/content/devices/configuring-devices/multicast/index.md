---
title: "Multicast Groups"
description: ""
aliases: ["devices/multicast"]
weight: 5
---

It is also possible to create a [Class B]({{< ref "devices/configuring-devices/class-b" >}}) or [Class C]({{< ref "devices/configuring-devices/class-c" >}}) multicast group to send downlink messages to a group of end devices. A multicast group is a virtual ABP device, where multiple physical devices share the same DevAddr and session keys. It does not support uplink, confirmed downlink nor MAC commands.

<!--more-->

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

## Class B and Multicast

Since there are no uplinks in multicast groups, there is no MAC layer communication between the end device and {{% tts %}}. Therefore, it is necessary to specify the ping slot periodicity by setting the following parameter:

- `mac-settings.ping-slot-periodicity.value`

See the [MAC Settings]({{< ref "/devices/configuring-devices/mac-settings" >}}) guide for more information about configuring MAC layer parameters.

## Creating a Multicast Group

When creating a device, you can specify in the Console and CLI whether it's a multicast group.

CLI example:

```bash
ttn-lw-cli end-devices create $APP_ID $DEVICE_ID \
  --frequency-plan-id $FREQUENCY_PLAN \
  --lorawan-version $LORAWAN_VERSION \
  --lorawan-phy-version $LORAWAN_PHY_VERSION \
  --session.dev-addr $DEV_ADDR \
  --session.keys.app-s-key.key $APP_SESSION_KEY \
  --session.keys.nwk-s-key.key $NWK_SESSION_KEY \
  --multicast \
  --supports-class-c # or --supports-class-b
```

Please note that a multicast group cannot be converted to a normal unicast device or the other way around.

{{< note >}} Since multicast does not support uplink, the Network Server does not know a downlink path. Therefore, you need to specify a downlink path when scheduling a downlink message. {{</ note >}}

## Example

{{< cli-only >}}

First, create a multicast group:

```bash
ttn-lw-cli end-devices create $APP_ID $DEVICE_ID \
  --frequency-plan-id $FREQUENCY_PLAN \
  --lorawan-version $LORAWAN_VERSION \
  --lorawan-phy-version $LORAWAN_PHY_VERSION \
  --session.dev-addr $DEV_ADDR \
  --session.keys.app-s-key.key $APP_SESSION_KEY \
  --session.keys.nwk-s-key.key $NWK_SESSION_KEY \
  --multicast \
  --supports-class-c
```

Then, schedule the following message to the [Application Server MQTT server]({{< ref "/integrations/mqtt" >}}) or [HTTP webhooks]({{< ref "/integrations/webhooks" >}}). A downlink path must be specified because none is known, as there is no uplink in multicast:

```json
{
  "downlinks": [
    {
      "frm_payload": "vu8=",
      "f_port": 42,
      "priority": "NORMAL",
      "class_b_c": {
        "gateways": [
          {
            "gateway_ids": {
              "gateway_id": "gtw1"
            }
          },
          {
            "gateway_ids": {
              "gateway_id": "gtw2"
            }
          }
        ],
        "absolute_time": "2019-07-23T13:05:00Z"
      }
    }
  ]
}
```

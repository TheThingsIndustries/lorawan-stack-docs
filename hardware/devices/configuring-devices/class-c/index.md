# Class C Settings

> Class C end devices continuously listen for downlink messages. This allows applications to send messages to devices at any time, instead of having to wait for a …

Source: https://www.thethingsindustries.com/docs/hardware/devices/configuring-devices/class-c/


Class C end devices continuously listen for downlink messages. This allows applications to send messages to devices at any time, instead of having to wait for a Class A uplink. When combined with [multicast groups](https://www.thethingsindustries.com/docs/hardware/devices/configuring-devices/multicast/), this allows applications to send immediate downlinks to many devices at the same time.

This guide shows how to enable or disable Class C for an and device, and how to work with multicast groups.

Read more about device classes in [The Things Network LoRaWAN® documentation](https://www.thethingsnetwork.org/docs/lorawan/classes/).

> **Note:** See the [Confirmed Downlinks Behavior](https://www.thethingsindustries.com/docs/hardware/devices/concepts/confirmed-downlinks-behavior/) section to learn how confirmed downlinks behavior for class C devices differs from confirmed downlinks behavior for class A devices.


We define some user parameters that will be used below:

```bash
APP_ID="app1"
DEVICE_ID="dev1"
FREQUENCY_PLAN="EU_863_870"
LORAWAN_VERSION="1.0.3"
LORAWAN_PHY_VERSION="1.0.3-a"
DEV_EUI="70B3D57ED004E201"
JOIN_EUI="0000000000000000"
APP_KEY="E307CC06F5B60B2C9E11BF640B1BF5D3"
```

Make sure to modify these according to your setup.

## Enabling and Disabling Class C

In order to send Class C downlink messages to a single device, enable Class C support for the end device when creating or updating it with the `--supports-class-c` flag.

For example, when enabling Class C for an existing device:

```bash
ttn-lw-cli end-devices set --application-id $APP_ID --device-id $DEVICE_ID --supports-class-c
```

This will enable the Class C downlink scheduling of the device. That's it! Downlink messages are now scheduled as soon as possible.

For unicast devices, Class C downlink scheduling starts after the end device sends an uplink in the session. This means that an OTAA end device should send an uplink message after receiving the join-accept in order to enable Class C downlink scheduling.

To disable Class C scheduling, reset with `--supports-class-c=false`.

## Multicast Group

See [Multicast](https://www.thethingsindustries.com/docs/hardware/devices/configuring-devices/multicast/) for instructions for creating and using multicast groups.

## Class C Message Settings

The Things Stack supports optional settings for Class C downlink messages: the downlink path and the time to send the message.

The downlink path is defined by one or more gateways IDs. The Network Server and Gateway Server schedules only on the specified gateways in the specified order. This is useful for multicast (where no downlink path is known because there is no uplink). A scheduling attempt on can fail when the gateway is not connected, if there is a scheduling conflict or if duty-cycle regulations prohibit transmission. See the [Example](#example) section below.

The time to transmit is an absolute timestamp in ISO 8601 format to send the message. This requires gateways either with GPS lock, or gateways that use a protocol that provide round-trip times (RTT). See the [Example](#example) section below.

## Example

<div class="notification is-info">
  <p class="title">Command-line interface only</p>
  <p>The instructions below use the command-line interface (CLI).</p>
  
  
  <div class="buttons">
    <a class="button is-primary is-outlined" href="https://www.thethingsindustries.com/docs/concepts/features/cli/installing-cli/">Learn how to install the CLI</a>
  </div>
</div>


First, create a Class C OTAA device:

```bash
ttn-lw-cli end-devices create --application-id $APP_ID --device-id $DEVICE_ID \
  --dev-eui $DEV_EUI \
  --join-eui $JOIN_EUI \
  --frequency-plan-id $FREQUENCY_PLAN \
  --lorawan-version $LORAWAN_VERSION \
  --lorawan-phy-version $LORAWAN_PHY_VERSION \
  --root-keys.app-key.key $APP_KEY \
  --supports-class-c
```

Then, schedule the following message to the [Application Server MQTT server](https://www.thethingsindustries.com/docs/integrations/other-integrations/mqtt/) or [HTTP webhooks](https://www.thethingsindustries.com/docs/integrations/webhooks/):

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


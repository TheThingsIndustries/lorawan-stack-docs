---
title: "Update Shadows with Payloads"
description: ""
weight: 80
---

By default, Things Shadows do not get updated with uplink payloads. This section contains instructions for manually updating Things Shadows with uplink payloads.

<!--more-->


Add new Lambda in your favorite language that's configured as an IoT rule action. See the [IoT Lambda Rule Reference](https://docs.aws.amazon.com/iot/latest/developerguide/iot-lambda-rule.html).

Configure the rule as `select end_device_ids.dev_eui, up.frm_payload, up.decoded_payload from lorawan/+/uplink`, in order to receive a JSON object with keys `dev_eui` (hex), `frm_payload` (base64) and `decoded_payload` (JSON object)

In the Lambda, update the thing shadow state. This Lambda therefore needs a policy that allows the action `iot:UpdateThingShadow`. This is essentially reporting a shadow state with the payload from the event data. See [The Things Shadow Class SDK example](https://github.com/aws/aws-iot-device-sdk-js#thing-shadow-class).

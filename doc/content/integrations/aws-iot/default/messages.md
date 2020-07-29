---
title: "Messages"
description: ""
weight: 40
---

{{% tts %}} publishes uplink messages to AWS IoT Core MQTT. An IoT Core rule triggers a Lambda function which processes the message, creates a new IoT Core thing if it doesn't exist, and updates the shadow state with metrics. Device activations and uplink messages get republished so your application can act on them.

<!--more-->

Your application can schedule downlink messages by publishing a JSON object to an AWS IoT Core MQTT topic. An IoT Core rule triggers a Lambda function which performs an API call to {{% tts %}} to enqueue the downlink message.

See [Architecture]({{< relref "architecture" >}}) for the flow.

## Activations and Uplink Messages

The AWS IoT Integration for {{% tts %}} uses the following topics for upstream traffic:

- Activations: `lorawan/<thing>/join`
- Uplink: `lorawan/<thing>/uplink`

See [Manage Things]({{< relref "things" >}}) to learn about the thing names.

> Use [**Rules for AWS IoT**](https://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html) to act on these messages for storage, analytics, alarms and API calls.
>
> This guide uses AWS IoT Core MQTT client for demonstration purposes only.

In the AWS Console, open **Services** and go to **IoT Core**.

In the menu on the left, click **Test**. This opens the **MQTT client**.

{{< figure src="../subscribe-uplink.png" alt="Subscribe Uplink" >}}

In **Subscription topic**, enter `lorawan/#` to subscribe to all events from all LoRaWAN things in your account.

Click **Subscribe to topic**.

{{< figure src="../uplink-message.png" alt="Uplink Message" >}}

## Downlink Messages

The AWS IoT Integration for {{% tts %}} uses the following topic for downstream traffic:

- `lorawan/downlink`

> Publish downlink messages from your application to IoT Core using [**AWS IoT Data Plane**](https://docs.aws.amazon.com/iot/latest/apireference/Welcome.html#Welcome_AWS_IoT_Data_Plane) using the [**Publish**](https://docs.aws.amazon.com/iot/latest/apireference/API_iotdata_Publish.html) action.
>
> This guide uses AWS IoT Core MQTT client for demonstration purposes only.

Still in the AWS IoT **MQTT client**, enter the downlink topic `lorawan/downlink`.

The message is a JSON object with the following format:

```js
{
  "thingName": "<stack>_<device-id>",

  "bytes": "AQ==", // Base64 encoded FRMPayload
  // or
  "payload": {     // JSON encoded payload (requires payload encoder)
    "field1": 42
  },

  // Optional fields
  "fPort": 10,         // FPort (default: 1)
  "confirmed": true,   // Confirmed data downlink (default: false)
  "highPriority": true // High priority (default: false)
}
```

See [Manage Things]({{< relref "things" >}}) to find the `thingName` for the end device.

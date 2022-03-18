---
title: "Downlink Encoder"
description: ""
weight: 2
---

The `encodeDownlink()` function is called when a downlink message, with a payload in JSON format, is scheduled to be sent to the end device. The `encodeDownlink()` function encodes the JSON object of the downlink message to binary payload that gets transmitted to the end device.

<!--more-->

The function takes an input object and returns an output object:

```js
function encodeDownlink(input) {
  return {
    bytes: [1, 2, 3],
    fPort: 1
  }
}
```

The input object has the following structure:

```json
{
  "field": "value"
}
```

The output object has the following structure:

```json
{
  "bytes": [1, 2, 3],
  "fPort": 1,
  "warnings": ["warning 1", "warning 2"],
  "errors": ["error 1", "error 2"]
}
```

The function's input and output shown above are incorporated in the [`as.down.data.receive`]({{< ref "/reference/api/events#event:as.down.data.receive" >}}) event, where the `data` object contains:

```json
{
  "f_port": 1,
  "frm_payload": "AQID",
  "decoded_payload": {
    "field": "value"
  }
}
```

One can clearly see that the JSON payload (input) is contained in the `decoded_payload` field, while the output of the `encodeDownlink()` function is translated from hexadecimal to Base64 and as such contained in the `frm_payload` field. When the downlink reaches end device, it gets translated vice versa, from Base64 to hexadecimal, e.g. for example shown above, the received payload on the end device side is `01 02 03`.

If an error is present in `errors`, the payload is invalid and the message will be dropped. Any warnings in `warnings` are informative.

{{< note >}} Keep in mind that you can test your downlink encoder, as well as schedule downlinks from {{% tts %}} Console. {{</ note >}}

## Encode Downlink Example: The Things Node

Here is an example of an encoder function that uses the `color` field to send a byte on a specific FPort:

```js
function encodeDownlink(input) {
  var colors = ["red", "green", "blue"];
  return {
    bytes: [colors.indexOf(input.data.color)],
    fPort: 4,
  };
}
```

If the downlink with the following JSON payload is sent by the application on any FPort:

```json
{
  "color": "green"
}
```

The output of the `encodeDownlink()` function will have the following structure:

```json
{
  "bytes": [1],
  "fPort": 4
}
```

{{< figure src="downlink-encoder.png" alt="Testing a downlink encoder" >}}

The `data` object of the `as.down.data.receive` event will therefore contain:

```json
{
  "f_port": 4,
  "frm_payload": "AQ==",
  "decoded_payload": {
    "color": "green"
  }
}
```

From the output above, you can see that the JSON payload of the scheduled downlink is contained in the `decoded_payload` field. The `encodeDownlink()` function takes this value as input and outputs the index of the color `green` in the `colors` array. The index of `green` in `colors` is `01` in bytes, so that value is Base64-encoded to `AQ==` and stored in the `frm_payload` field. When the downlink reaches the end device, the payload gets translated from Base64 back to hexadecimal, so you will see the payload in bytes (`01`). Note also that, in this example, the message is always sent on the FPort 4 because this is explicitly defined in the downlink encoder function.

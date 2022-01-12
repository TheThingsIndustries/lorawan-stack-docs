---
title: "Uplink Decoder"
description: ""
weight: 1
---

The Javascript `decodeUplink()` function is called when a data uplink message is received from a device. This function decodes the binary payload received from the end device to a human-readable JSON object that gets send upstream to the application.

<!--more-->

The function takes an input object and returns an output object:

```js
function decodeUplink(input) {
  return {
    data: {
      bytes: input.bytes
    }
  };
}
```

The input object has the following structure:

```json
{
  "bytes": [1, 2, 3],
  "fPort": 1
}
```

The output object has the following structure:

```json
{
  "data": {
    "bytes": [1, 2, 3]
  },
  "warnings": ["warning 1", "warning 2"],
  "errors": ["error 1", "error 2"]
}
```

The function's output shown above is incorporated in the [`as.up.data.forward`]({{< ref "/reference/api/events#event:as.up.data.forward" >}}) event, where the `data.uplink_message` object contains:

```json
{
  "f_port": 1,
  "frm_payload": "AQID",
  "decoded_payload": {
    "bytes": [1, 2, 3]
  }
}
```

Uplink payload is constructed as an array of bytes on end device side. Before sending, the payload gets encoded with Base64 scheme. The object shown above contains this Base64-encoded value in the `frm_payload` field, because that is the format in which the payload is received on the server side. The result of the `decodeUplink()` function is contained in the `decoded_payload` field.

If an error is present in `errors`, the payload is invalid and the message will be dropped. Any warnings in `warnings` are informative.

{{< note >}} Keep in mind that you can test your uplink decoder, as well as simulate uplinks from {{% tts %}} Console. {{</ note >}}

## Decode Uplink Example: The Things Node

Here is an example `decodeUplink()` function from The Things Node:

```js
function decodeUplink(input) {
  var data = {};
  var events = {
    1: "setup",
    2: "interval",
    3: "motion",
    4: "button"
  };
  data.event = events[input.fPort];
  data.battery = (input.bytes[0] << 8) + input.bytes[1];
  data.light = (input.bytes[2] << 8) + input.bytes[3];
  data.temperature = (((input.bytes[4] & 0x80 ? input.bytes[4] - 0x100 : input.bytes[4]) << 8) + input.bytes[5]) / 100;
  var warnings = [];
  if (data.temperature < -10) {
    warnings.push("it's cold");
  }
  return {
    data: data,
    warnings: warnings
  };
}
```

Let's assume that the end device performed event selection and some measurements (battery, light, temperature levels) and needs to send associated decimal values to {{% tts %}}: `12, 178, 4, 128, 247, 174`. Decimal values are first converted to bytes on the end device side, so we consider the following hexadecimal payload: `0C B2 04 80 F7 AE`. We can also assume that the message was sent on FPort 4. The payload is Base64-encoded before uplink transmission.

The `data.uplink_message` object of the `as.up.data.forward` event will contain:

```json
{
  "uplink_message": {
    "f_port": 4,
    "frm_payload": "DLIEgPeu",
    "decoded_payload": {
      "battery": 3250,
      "event": "setup",
      "light": 1152,
      "temperature": -21.3
    },
    "decoded_payload_warnings": ["it's cold"]
  }
}
```

From the object shown above, one can see that the Base64-encoded uplink payload is contained in the `frm_payload` field, while the result of the `decodeUplink()` function is contained in the `decoded_payload` field. You can also observe how warnings are mapped to the `decoded_payload_warnings` object if certain conditions are met.

{{< figure src="uplink-decoder.png" alt="Testing an uplink decoder" >}}

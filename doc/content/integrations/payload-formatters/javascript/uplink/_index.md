---
title: "Uplink"
description: ""
weight: 1
aliases:
  - "/integrations/payload-formatters/javascript/uplink-decoder"
---

The Javascript `decodeUplink()` function is called when a data uplink message is received from a device. This function decodes the binary payload received from the end device to a human-readable JSON object that gets send upstream to the application.

<!--more-->

The function takes an input object and returns an output object:

```js
function decodeUplink(input) {
  // input has the following structure:
  // {
  //   "bytes": [1, 2, 3], // FRMPayload (byte array)
  //   "fPort": 1
  // }
  return {
    data: {
      bytes: input.bytes
    },
    warnings: ["warning 1", "warning 2"],
    errors: ["error 1", "error 2"]
  };
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

Uplink payload is transmitted as binary payload by the end device. {{% tts %}} shows this binary payload in the `frm_payload` field (Base64 encoded). The result of the `decodeUplink()` function is contained in the `decoded_payload` field.

If an error is present in `errors`, the payload is invalid and the message will be dropped. Any warnings in `warnings` are informative.

{{< note >}} You can test your uplink decoder, as well as simulate uplinks from {{% tts %}} Console. {{</ note >}}

## Uplink Example: The Things Node

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

Let's assume that the end device observed an event and performed some measurements. The end device transmitted the following binary payload: `0C B2 04 80 F7 AE` (hex encoded) on FPort 4. The Base64 equivalent of that binary payload is `DLIEgPeu` and the JavaScript byte array is `[ 12, 178, 4, 128, 247, 174 ]`. This is all the same, just a different representation.

The uplink decoder gets the JavaScript byte array of the binary payload and FPort as input. {{% tts %}} sets `frm_payload` to the Base64 representation of the binary payload, and `decoded_payload` to the output `data` of the uplink decoder. If there are warnings, they are set in `decoded_payload_warnings`.

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

{{< figure src="uplink-decoder.png" alt="Testing an uplink decoder" >}}

---
title: "Downlink Decoder"
description: ""
---

The `decodeDownlink()` function is called to decode a downlink message to JSON format, if it was scheduled with payload as bytes, or if it was scheduled with human-readable JSON payload but also was encoded with the [`encodeDownlink()` function]({{< ref "/integrations/payload-formatters/javascript/downlink-encoder" >}}).

<!--more-->

Downlink messages sent upstream as part of events or downlink queue operations are therefore decoded, just like uplink messages (see [Uplink Decoder]({{< ref "/integrations/payload-formatters/javascript/uplink-decoder" >}})).

The function takes an input object and returns an output object:

```js
function decodeDownlink(input) {
  return {
    data: { ... } // JSON object
  }
}
```

The input object has the following structure:

```js
{
  "bytes": [1, 2, 3], // FRMPayload as byte array as returned by encodeDownlink()
  "fPort": 1 // LoRaWAN FPort as returned by encodeDownlink()
}
```

The output object has the following structure:

```js
{
  "data": { ... } // JSON object
}
```

`decodeDownlink()` must be symmetric with the `encodeDownlink()` and should therefore not return any errors.

## Decode Downlink Example: The Things Node

Here is an example of a function that decodes the output of `encodeDownlink()` (see above):

```js
function decodeDownlink(input) {
  switch (input.fPort) {
  case 4:
    return {
      data: {
        color: ["red", "green", "blue"][input.bytes[0]]
      }
    }
  default:
    throw Error("unknown FPort");
  }
}
```

The output of a previous call to `encodeDownlink()`:

```json
{
  "fPort": 4,
  "bytes": [2]
}
```

Yields the following data in the downlink message:

```json
{
  "downlink_message": {
    "f_port": 4,
    "f_cnt": 7825,
    "frm_payload": "Ag==",
    "decoded_payload": {
      "color": "blue"
    }
  }
}
```

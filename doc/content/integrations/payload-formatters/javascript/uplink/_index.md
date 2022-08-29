---
title: "Uplink"
description: ""
weight: 1
aliases:
  - "/integrations/payload-formatters/javascript/uplink-decoder"
---

The JavaScript `decodeUplink()` function is called when a data uplink message is received from a device. This function decodes the binary payload received from the end device to a human-readable JSON object that gets send upstream to the application. If present, the `normalizeUplink()` function is called to normalize the decoded payload in a common data structure.

<!--more-->

The decoder function takes an input object and returns an output object:

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
    warnings: ["warning 1", "warning 2"], // optional
    errors: ["error 1", "error 2"] // optional (if set, the decoding failed)
  };
}
```

The decoder function's output shown above is incorporated in the [`as.up.data.forward`]({{< ref "/reference/api/events#event:as.up.data.forward" >}}) event, where the `data.uplink_message` object contains:

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

If an error is present in `errors`, the payload is invalid. If the decoder or the normalizer return an error, applications still receive the message but only the binary payload in `frm_payload`. Any warnings in `warnings` are informative.

{{< note >}} You can test your uplink decoder, as well as simulate uplinks from {{% tts %}} Console. {{</ note >}}

## Normalized Payload {{< new-in-version "3.21.2" >}}

The uplink decoder can return any data structure. This provides full flexibility: a decoder can return any measurement in any unit as well as any additional information.

However, developers building applications that combine data from various device types may find it difficult to work with different data structures.

This is what the normalization step is for: the decoded payload gets normalized to a data structure that is common for all device types. Normalized payload is complementary to decoded payload: some measurements or some information may not fit in the normalized payload data structure. Therefore, some application may use normalized payload while others use decoded payload carrying device specific information.

The normalizer function takes the output from the decoder function and returns an output object:

```js
function normalizeUplink(input) {
  // input has the following structure:
  // {
  //   "data": {
  //     "temperature": 50, // Fahrenheit
  //     "windSpeed": 17.5 // knots
  //   }
  // }
  return {
    data: {
      air: {
        temperature: (input.data.temperature - 32) * 5/9 // Fahrenheit to Celsius 
      },
      wind: {
        speed: input.data.windSpeed * 0.5144 // knots to m/s
      }
    },
    warnings: ["warning 1", "warning 2"], // optional
    errors: ["error 1", "error 2"] // optional (if set, the normalization failed)
  }
}
```

The normalizer function's output shown above is incorporated in the [`as.up.data.forward`]({{< ref "/reference/api/events#event:as.up.data.forward" >}}) event, where the `data.uplink_message` object contains:

```json
{
  "decoded_payload": {
    "temperature": 50,
    "windSpeed": 17.5
  },
  "normalized_payload": [
    {
      "air": {
        "temperature": 10
      },
      "wind": {
        "speed": 9.002
      }
    }
  ]
}
```

The Application Server also publishes an event for each returned normalized payload, in the [`as.up.normalized.forward`]({{< ref "/reference/api/events#event:as.up.normalized.forward" >}}) event, where the `data.uplink_normalized` object contains:

```json
{
  "normalized_payload": {
    "air": {
      "temperature": 10
    },
    "wind": {
      "speed": 9.002
    }
  }
}
```

{{< note >}} The uplink message data contains an array of normalized payload measurements (`normalized_payload` is an array) while the normalized uplink data contains a single normalized payload measurement. See [below](#multiple-measurements) why and how this is useful. {{< /note >}}

### Normalized Payload Schema

The normalized payload schema is continuously being extended to support more fields. You can find the latest JSON Schema definition in the [LoRaWAN Device Repository](https://github.com/TheThingsNetwork/lorawan-devices/blob/master/lib/payload.json).

```js
{
  "time": "2022-08-29T13:50:15Z", // Timestamp (RFC 3339)
  "air": {
    "pressure": 1032,         // Atmospheric pressure (hPa): [900..1100]
    "relativeHumidity": 43.9, // Relative humidity (%): [0..100]
    "temperature": 21.5       // Temperature (Celsius): [-273.15..)
  },
  "wind": {
    "direction": 321, // Direction (degrees): [0..360)
    "speed": 5.2      // Speed (m/s): [0..)
  }
}
```

### Advanced: Return Multiple Measurements {#multiple-measurements}

Multiple measurements can be encoded by the end device in a single LoRaWAN uplink message. This is a good practice as it is more battery efficient. Therefore, the uplink decoder may find multiple measurements from the same sensor. The normalizer function can therefore return an array of measurements, as an alternative to a single measurement:

```js
function normalizeUplink(input) {
  // input has the following structure:
  // {
  //   "data": {
  //     "readings": [
  //       { "temperature": 51.4 },
  //       { "temperature": 50.1 },
  //       { "temperature": 56.8 }
  //     ]
  //   }
  // }
  var data = [];
  for (var i = 0; i < input.data.readings.length; i++) {
    data.push({
      air: {
        temperature: (input.data.readings[i].temperature - 32) * 5/9
      }
    });
  }
  return {
    data: data // this is now an array: [ { air: { temperature: ... } }, ... ]
  }
}
```

When the normalizer function returns an array of measurements, Application Server publishes a normalized uplink event for each measurement, while there is still one uplink message event.

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

function normalizeUplink(input) {
  return {
    data: {
      air: {
        temperature: input.data.temperature
      }
    }
  }
}
```

For example, the end device observed an event and performed some measurements. The end device transmitted the following binary payload: `0C B2 04 80 F7 AE` (hex encoded) on FPort 4. The Base64 equivalent of that binary payload is `DLIEgPeu` and the JavaScript byte array is `[ 12, 178, 4, 128, 247, 174 ]`. This is all the same, just a different representation.

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
    "decoded_payload_warnings": ["it's cold"],
    "normalized_payload": [
      {
        "air": {
          "temperature": -21.3
        }
      }
    ]
  }
}
```

Since there is `normalized_payload`, there will also be a `as.up.normalized.forward` event published:

```json
{
  "uplink_normalized": {
    "f_port": 4,
    "frm_payload": "DLIEgPeu",
    "normalized_payload": {
      "air": {
        "temperature": -21.3
      }
    }
  }
}
```

{{< figure src="uplink-decoder.png" alt="Testing an uplink decoder" >}}

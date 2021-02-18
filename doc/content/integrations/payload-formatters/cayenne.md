---
title: "CayenneLPP"
---

The [Cayenne Low Power Payload (LPP)](https://developers.mydevices.com/cayenne/docs/lora/#lora-cayenne-low-power-payload) provides a convenient and easy way to send data over LPWAN networks such as LoRaWAN. The Cayenne LPP is compliant with the payload size restriction, which can be lowered down to 11 bytes, and allows the end device to send multiple sensor data at one time.

<!--more-->

## Configure Your Device

In order to use the CayenneLPP Payload Formatter, your device must send Cayenne compatible binary payloads. For Arduino compatible boards, documentation about altering your Arduino Sketch to encode data with CayenneLPP can be found at The Things Network [Cayenne Documentation](https://www.thethingsnetwork.org/docs/devices/arduino/api/cayennelpp.html). General information about the CayenneLPP Payload is available in the [CayenneLPP Github Repository](https://github.com/myDevicesIoT/CayenneLPP).

## Decoded Payload

Once you have configured your device to send CayenneLPP compatible payloads, enabling the CayenneLPP Payload Formatter will add a `decoded_payload` object to uplink messages from your device.

For example, the following binary data:

```
[0x3, 0x67, 0x01, 0x10, 0x05, 0x67, 0x00, 0xFF]
```

will produce the following `uplink_message`:

```json
{
  "uplink_message": {
    "f_port": 8,
    "f_cnt": 113,
    "frm_payload": "A2cBEAVnAP8=",
    "decoded_payload": {
      "temperature_3": 27.200000762939453,
      "temperature_5": 25.5
    },
  }
}
```

## Translating Sensor Types to `decoded_payload` Fields

A description of the Cayenne LPP sensor types is available in the Cayenne documentation [here](https://developers.mydevices.com/cayenne/docs/lora/#lora-cayenne-low-power-payload-reference-implementation-cayenne-lpp-cc-constants-definitions). 

{{% tts %}} uses the sensor names to create the `decoded_payload` fields, so a Cayenne payload with one `LPP_TEMPERATURE` and one `LPP_BAROMETRIC_PRESSURE` sensor reading will produce the following decoded payload:

```json
{
  "uplink_message": {
    "f_port": 8,
    "f_cnt": 113,
    "frm_payload": "AHMnvwBnAN4=",
    "decoded_payload": {
      "barometric_pressure_0": 1017.5,
      "temperature_0": 22.200000762939453
    },
  }
}
```

The `decoded_payload` entries are formed from the lowercase sensor constant and channel, i.e. a `LPP_TEMPERATURE` reading on channel 0 becomes `temperature_0`.

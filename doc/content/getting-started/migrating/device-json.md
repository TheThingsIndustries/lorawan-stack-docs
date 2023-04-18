---
title: "JSON File Reference"
description: ""
weight: 8
aliases: "/getting-started/migrating-from-networks/device-json"
---

{{% tts %}} allows you to import end devices from {{% ttnv2 %}}, ChirpStack and other LoRaWAN networks using a JSON file describing those devices.

Using JSON file with device descriptions, you can migrate end devices with or without their existing sessions.

Here is an example of an OTAA device description in the `devices.json` file:

```json
{
  "ids": {
    "device_id": "my-device",
    "dev_eui": "0102030405060708",
    "join_eui": "0102030405060708"
  },
  "name": "My Device",
  "description": "Living room temperature sensor",
  "lorawan_version": "MAC_V1_0_2",
  "lorawan_phy_version": "PHY_V1_0_2_REV_B",
  "frequency_plan_id": "EU_863_870_TTN",
  "supports_join": true,
  "root_keys": {
    "app_key": {
      "key": "01020304050607080102030405060708"
    }
  }
}
```

Multiple end devices can also be contained in a single `devices.json` file like so:

```js
{
  /* device 1 */
}
{
  /* device 2 */
}
```

The format above is considered by the Console and CLI as a JSON stream, processing one object at a time.
For more details in how to use the file, please refer to [Import End Devices]({{< ref "/getting-started/migrating/import-devices" >}}).


## JSON End Device Format

The full specification of the JSON format is defined in the API protos. See the [EndDevice]({{< ref "/reference/api/end_device#message:EndDevice" >}}) message definition for details.

The linked specification is quite extensive, and contains a lot of fields that are not required, or are only set and used internally by the Network Server. Below, the required and most commonly used fields are discussed.

<div class="fixed-table table-device-json">

| Field | Required | Type | Example | Description |
|---|---|---|---|---|
| **`ids.device_id`** | **Always** | string | `"sensor-1"` | [More info]({{< ref "reference/glossary#device-id" >}}) |
| **`ids.dev_eui`** | **Always** | string | `"0102030405060708"` | [More info]({{< ref "reference/glossary#deveui" >}}) |
| **`ids.join_eui`** | **Always** | string | `"0102030405060708"` | Also referred to as **AppEUI**. [More info]({{< ref "reference/glossary#joineui" >}}) |
| **`name`** | No | string | `"My Sensor"` | Optional, a name for the device |
| **`description`** | No | string | `"Situated in living room"` | Optional, description of the device |
| **`lorawan_version`** | **Always** | string | `"MAC_V1_0_2"` | See [MACVersion]({{< ref "reference/api/end_device#enum:MACVersion" >}}) for supported versions. See [LoRaWAN Version]({{< ref "reference/glossary#lorawan-version" >}}) for more information. |
| **`lorawan_phy_version`** | **Always** | string | `"PHY_V1_0_2_REV_B"` | See [PHYVersion]({{< ref "reference/api/end_device#enum:PHYVersion" >}}) for supported versions. See [LoRaWAN Version]({{< ref "reference/glossary#regional-parameters" >}}) for more information. |
| **`frequency_plan_id`** | **Always** | string | `"EU_863_870_TTN"` | See [Frequency Plans]({{< ref "reference/frequency-plans" >}}) for a list of supported frequency plans (The frequency plan `ID` is needed). See [Frequency Plan]({{< ref "reference/glossary#frequency-plan" >}}) for more information. |
| **`supports_join`** | **Always** | boolean | `true` | `true` for OTAA devices, `false` for ABP. |
| **`supports_class_c`** | No | boolean | `true` | `true` for Class C devices, `false` otherwise. |
| **`root_keys.app_key.key`** | **For OTAA devices** | string | `"01020304050607080102030405060708"` | See [Application Key]({{< ref "reference/glossary#application-key" >}}) for more information. |
| **`root_keys.nwk_key.key`** | **For OTAA devices** | string | `"01020304050607080102030405060708"` | For LoRaWAN version 1.1 and later only. See [Network Key]({{< ref "reference/glossary#network-key" >}}) for more information. |
| **`mac_settings.rx1_delay`** | No | string | `"RX_DELAY_5"` | Delay for the first Class A receive window (Rx1). Typical values are `"RX_DELAY_1"` (1 second) and `"RX_DELAY_5"` (5 seconds). See [MACSettings]({{< ref "reference/api/end_device#message:MACSettings" >}}) for more information. |
| **`mac_settings.supports_32_bit_f_cnt`** | No | boolean | `false` | `true` if device supports 32-bit frame counters, `false` if device only supports 16-bit frame counters. |
| **`session.dev_addr`** | **For existing session** | string | `"01020304"` | **Needed for ABP devices or when migrating OTAA devices with an existing session**. See [Device Address]({{< ref "/reference/glossary#device-address" >}}) for more information. |
| **`session.keys.app_s_key.key`** | **For existing session** | string | `"01020304050607080102030405060708"` | **Needed for ABP devices or when migrating OTAA devices with an existing session**. See [Application Session Key]({{< ref "reference/glossary#application-session-key" >}}) for more information. |
| **`session.keys.f_nwk_s_int_key.key`** | **For existing session** | string | `"01020304050607080102030405060708"` | Forwarding Network Session Integrity Key, also referred to as **Network Session Key** in LoRaWAN v1.0.x compatibility mode. See [SessionKeys]({{< ref "reference/api/end_device#message:SessionKeys" >}}) and [Forwarding Network Session Integrity Key]({{< ref "/reference/glossary#forwarding-network-session-integrity-key" >}}) for more information. |
| **`session.last_f_cnt_up`** | **For existing session** | uint | `12` | Last uplink frame counter used. |
| **`session.last_n_f_cnt_down`** | **For existing session** | uint | `12` | Last network downlink frame counter used. |
| **`session.last_a_f_cnt_down`** | **For existing session** | uint | `12` | Last application downlink frame counter used. |

</div>
<br>

Note that the dots in the **Field** column imply an embedded object. For example, `root_keys.nwk_key.key` must be set as:
```
"root_keys": {
  "nwk_key:": {
  "key": "<NWK_KEY_HERE>"
  }
}
```

---
title: "CSV File Reference"
description: ""
weight: 9
---

{{% tts %}} has support for importing end devices from CSV (comma-separated values) files. This is useful when batches of end devices are managed in Microsoft Excel or any other spreadsheet or database that can export to CSV file.

The CSV import in {{% tts %}} uses the following settings:

- Semicolon (`;`) as field delimiter. This makes working with Microsoft Excel and other spreadsheets convenient
- Header row is required
- On each row, the same number of fields as on the header line
- Use quotes to use `;` in a field value
- Use double quotes to escape quotes
- Unknown header columns are permitted and ignored

The following columns are recognized:

Column | Required | Alias | Format | Meaning
--- | --- | --- | --- | ---
`dev_eui` | **Yes** | | Hexadecimal string | LoRaWAN DevEUI
`join_eui` | **Yes** | `app_eui` | Hexadecimal string | LoRaWAN JoinEUI (or AppEUI)
`id` | No | | Alphanumeric string, lowercase with hyphens | Device ID (falls back to DevEUI if not set)
`name` | No | | Free form | Name
`frequency_plan_id` | No * | | See [Frequency Plans]({{< ref "/reference/frequency-plans" >}}) | Frequency plan ID
`lorawan_version` | No * | | See [`MACVersion`]({{< ref "/reference/api/end_device#enum:MACVersion" >}}) | LoRaWAN version
`lorawan_phy_version` | No * | | See [`PHYVersion`]({{< ref "/reference/api/end_device#enum:PHYVersion" >}}) | LoRaWAN Regional Parameters version
`app_key` | **Yes** | | Hexadecimal string | LoRaWAN AppKey
`nwk_key` | No | | Hexadecimal string | LoRaWAN NwkKey
`brand_id` | No | | Vendor ID string from [Device Repository]({{< ref "/integrations/payload-formatters/device-repo" >}}) | Device brand ID
`model_id` | No | | Model ID from [Device Repository]({{< ref "/integrations/payload-formatters/device-repo" >}}) | Device model ID
`firmware_version` | No | | Firmware version from [Device Repository]({{< ref "/integrations/payload-formatters/device-repo" >}}) | Firmware version
`hardware_version` | No | | Hardware version from [Device Repository]({{< ref "/integrations/payload-formatters/device-repo" >}}) | Hardware version
`band_id` | No | | See [Frequency Plans]({{< ref "/reference/frequency-plans" >}}) | LoRaWAN Band ID

\* If you don't set this, you must set the fallback value when importing the CSV file. See [Importing devices]({{< ref "/getting-started/migrating/import-devices" >}}).

## Example

Minimal example:

```csv
dev_eui;join_eui;frequency_plan_id;lorawan_version;lorawan_phy_version;app_key
1111111111111111;1111111111111111;EU_863_870_TTN;MAC_V1_0_4;RP002_V1_0_3;11111111111111111111111111111111
2222222222222222;2222222222222222;EU_863_870_TTN;MAC_V1_0_4;RP002_V1_0_3;22222222222222222222222222222222
3333333333333333;3333333333333333;EU_863_870_TTN;MAC_V1_0_4;RP002_V1_0_3;33333333333333333333333333333333
```

All columns for a LoRaWAN 1.0.4 device:

```csv
id;dev_eui;join_eui;name;frequency_plan_id;lorawan_version;lorawan_phy_version;brand_id;model_id;hardware_version;firmware_version;band_id;app_key
test-one;1111111111111111;1111111111111111;Device 1;EU_863_870_TTN;MAC_V1_0_4;RP002_V1_0_3;the-things-industries;generic-node;1.0.4;1.0;EU_863_870;11111111111111111111111111111111
test-two;2222222222222222;2222222222222222;Device 2;EU_863_870_TTN;MAC_V1_0_4;RP002_V1_0_3;the-things-industries;generic-node;1.0.4;1.0;EU_863_870;22222222222222222222222222222222
test-three;3333333333333333;3333333333333333;Device 3;EU_863_870_TTN;MAC_V1_0_4;RP002_V1_0_3;the-things-industries;generic-node;1.0.4;1.0;EU_863_870;33333333333333333333333333333333
```

## Excel Template

[Download the Excel template](../tts-end-devices-csv-template.xlsx). You can remove all columns that are not required (see above).

To export for {{% tts %}}, go to **File**, **Save As** and select **Comma Separated Values** as file format.

---
title: "Generating a QR Code"
description: ""
---

{{% tts %}} can generate QR codes for your devices, which can help you identify or claim those devices.

This guide shows how to list QR code formats supported by {{% tts %}} and generate QR codes using the CLI.

<!--more-->

{{< cli-only >}}

## List QR Code Formats

To show QR code formats for end devices that {{% tts %}} supports:

```bash
ttn-lw-cli end-devices list-qr-formats
```

<details><summary>Output</summary>

```json
{
  "formats": {
    "tr005": {
      "name": "LoRa Alliance TR005",
      "description": "Standard QR code format defined by LoRa Alliance.",
      "field_mask": {
        "paths": [
          "claim_authentication_code.value",
          "ids.dev_eui",
          "ids.join_eui"
        ]
      }
    }
  }
}
```
</details>

The `paths` object from the output shows the end device fields that are used to generate the QR code. 

## Generate an Identification QR Code

To generate a QR code to help you easily identify your device:

```
ttn-lw-cli end-devices generate-qr <application-id> <device-id> --format-id <qr-code-format>
```

The generated QR code will automatically be saved to the current directory with the device ID as a file name, in PNG format with a default size of 300 pixels. Use the `--folder` and `--size` flags to change the save location and image size.

<details><summary>Example of a generated identification QR code</summary>

{{< figure src="qr-identification.png" alt="Device QR Code for Identification" >}}

</details>

If you scan the generated identification QR code, you will see that it stores the information in the following format: `LW:<schema-id>:<join-eui>:<dev-eui>:<profile-id>`.

The SchemaID value will be `D0` as it is the only device schema version described by the [LoRaWAN Device Identification QR Codes for Automated Onboarding Technical Recommendation (TR005)](https://lora-alliance.org/wp-content/uploads/2020/11/TR005_LoRaWAN_Device_Identification_QR_Codes.pdf).

The ProfileID encodes a VendorID, assigned by the LoRa Alliance prior to commercial production of a device, and a VendorProfileID, assigned by the device manufacturer for commercial products. Read more in the [TR005 document](https://lora-alliance.org/wp-content/uploads/2020/11/TR005_LoRaWAN_Device_Identification_QR_Codes.pdf).

For the example identification QR code presented above, the stored information is: `LW:D0:0000000000000000:1122334455667789:00000000`.

---
title: "Generating a QR Code"
description: ""
---

{{% tts %}} can generate QR codes for your devices, which helps identifying the devices and allows for claiming the device.

This guide shows how to list QR code formats and generate QR codes with the CLI.

<!--more-->

{{< cli-only >}}

## List QR Code Formats

To show supported QR code formats for end devices:

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

The formats show the fields of the end device that are used in the QR code.

## Generate QR Code for Identification

To generate a QR code for identification:

```
ttn-lw-cli end-devices generate-qr <application-id> <device-id> --format-id <qr-code-format>
```

<details><summary>Example of a generated identification QR code</summary>

{{< figure src="qr-identification.png" alt="Device QR Code for Identification" >}}

</details>

This saves the QR code to the current directory with the device ID as file name, in PNG format with a default size of 300 pixels. Use `--folder` and `--size` to change the save location and image size.

## Generate QR Code for Claiming

Device claiming is a mechanism to transfer devices securely from one application to another. For example, from a device maker to a device owner, or transferring ownership to new device owner. Learn how to [make a device claimable]({{< relref "../device-claiming/make-device-claimable" >}}).

When a device is claimable (it contains a claim authentication code), you can use the same command as above to generate a QR code:

```bash
ttn-lw-cli end-devices generate-qr <application-id> <device-id> --format-id <qr-code-format>
```

<details><summary>Example of a generated claiming QR code</summary>

{{< figure src="qr-claiming.png" alt="Device QR Code for Claiming" >}}

</details>

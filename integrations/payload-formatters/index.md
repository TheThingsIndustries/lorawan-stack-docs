# Payload Formatters

> Payload formatters allow you to process data going to and from end devices. This is useful for converting binary payloads to human readable fields, or for doing …

Source: https://www.thethingsindustries.com/docs/integrations/payload-formatters/


Payload formatters allow you to process data going to and from end devices. This is useful for converting binary payloads to human readable fields, or for doing any other kind of data conversion on uplinks and downlinks.

This section explains how to set up payload formatters for a specific end device or an entire application.

In addition to the written instructions linked below, a video with instructions for creating JavaScript and device repository payload formatters is available on [The Things Industries youtube channel](https://youtu.be/4tii7MiD-yM).

<details><summary>Show video</summary>
[Video: YouTube](https://www.youtube.com/watch?v=4tii7MiD-yM)

</details>

## Types of Payload Formatters

The Things Stack supports three types of payload formatters: JavaScript, CayenneLPP, and Repository payload formatters.

### JavaScript

The Things Stack allows you to write your own custom payload formatters in JavaScript. To find out how to write a custom JavaScript payload formatter, see the [JavaScript Payload Formatters](https://www.thethingsindustries.com/docs/integrations/payload-formatters/javascript/) section.

### CayeneLPP

The Things Stack can automatically decode CayenneLPP formatted payloads, no custom code neccessary. To find out how to use CayenneLPP payload formatters, see the [CayenneLPP](https://www.thethingsindustries.com/docs/integrations/payload-formatters/cayenne/) section.

### Repository

Device manufacturers may submit payload formatters designed to work with their devices. These are publicly available in The Things Stack [Device Repository](https://github.com/TheThingsNetwork/lorawan-devices).

Device repository payload formatters work right out of the box – no customization needed!

## Application and Device Specific Payload Formatters

Payload formatters can be applied to an entire application, or to a specific end device. Application payload formatters are useful if all devices use the same binary payload format, or as a fallback when no device specific payload formatter is set.

Device payload formatters allow you to specify a unique payload formatter for each device.

> **Note:** Device payload formatters override application payload formatters.


## Working with Bytes

To work with payload formatters, it is important to understand how payload data is encoded as binary bytes, and how to convert it to meaningful fields.

To see how your device encodes environmental data, see your product datasheet.

See [The Things Network Learn](https://www.thethingsnetwork.org/docs/devices/bytes.html) for an introduction to working with bytes.


## Pages in this section

- [Creating Payload Formatters](https://www.thethingsindustries.com/docs/integrations/payload-formatters/create/index.md): This section explains how to set up Payload Formatters using the Console or CLI.
- [CayenneLPP](https://www.thethingsindustries.com/docs/integrations/payload-formatters/cayenne/index.md): The Cayenne Low Power Payload (LPP) provides a convenient and easy way to send data over LPWAN networks such as LoRaWAN. The Cayenne LPP is compliant with the …
- [Device Repository](https://www.thethingsindustries.com/docs/integrations/payload-formatters/device-repo/index.md): Device manufacturers may submit payload formatters designed to work with their devices. The data and code are publicly available in the Github Repository. You …
- [JavaScript](https://www.thethingsindustries.com/docs/integrations/payload-formatters/javascript/index.md): JavaScript payload formatters allow you to write functions to encode or decode messages. JavaScript functions are executed using an JavaScript ECMAScript 5.1 …


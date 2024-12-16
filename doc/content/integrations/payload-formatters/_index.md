---
title: "Payload Formatters"
description: ""
weight: 4
---

Payload formatters allow you to process data going to and from end devices. This is useful for converting binary payloads to human readable fields, or for doing any other kind of data conversion on uplinks and downlinks.

This section explains how to set up payload formatters for a specific end device or an entire application.

<!--more-->

In addition to the written instructions linked below, a video with instructions for creating JavaScript and device repository payload formatters is available on [The Things Network YouTube channel](https://youtu.be/4tii7MiD-yM).

<details><summary>Show video</summary>
{{< youtube "4tii7MiD-yM" >}}
</details>

## Types of Payload Formatters

{{% tts %}} supports three types of payload formatters: JavaScript, CayenneLPP, and Repository payload formatters.

### JavaScript

{{% tts %}} allows you to write your own custom payload formatters in JavaScript. To find out how to write a custom JavaScript payload formatter, see the [JavaScript Payload Formatters]({{< ref "/integrations/payload-formatters/javascript" >}}) section.

### CayeneLPP

{{% tts %}} can automatically decode CayenneLPP formatted payloads, no custom code neccessary. To find out how to use CayenneLPP payload formatters, see the [CayenneLPP]({{< relref "cayenne" >}}) section.

### Repository

Device manufacturers may submit payload formatters designed to work with their devices. These are publicly available in {{% tts %}} [Device Repository](https://github.com/TheThingsNetwork/lorawan-devices).

Device repository payload formatters work right out of the box – no customization needed!

## Application and Device Specific Payload Formatters

Payload formatters can be applied to an entire application, or to a specific end device. Application payload formatters are useful if all devices use the same binary payload format, or as a fallback when no device specific payload formatter is set.

Device payload formatters allow you to specify a unique payload formatter for each device.

{{< note >}} Device payload formatters override application payload formatters. {{</ note >}}

## Working with Bytes

To work with payload formatters, it is important to understand how payload data is encoded as binary bytes, and how to convert it to meaningful fields.

To see how your device encodes environmental data, see your product datasheet.

See [The Things Network Learn](https://www.thethingsnetwork.org/docs/devices/bytes.html) for an introduction to working with bytes.

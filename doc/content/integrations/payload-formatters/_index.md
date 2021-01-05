---
title: "Payload Formatters"
description: ""
---

Payload formatters allow you to process data going to and from end devices. This is useful for converting binary payloads to human readable fields, or for doing any other kind of data conversion on uplinks and downlinks.

This section explains how to set up payload formatters for a specific end device or an entire application.

<!--more-->

## Types of Payload Formatters

{{% tts %}} supports three types of Payload Formatters: Javascript, CayenneLPP, and Device Repo payload formatters.

### Javascript

{{% tts %}} allows you to write your own custom Payload Formatters in Javascript. To find out how to write your own custom payload formatters, see the [Javascript Payload Formatters section]({{< relref "javascript" >}}).

### CayeneLPP

{{% tts %}} can automatically decode CayenneLPP formatted payloads, no custom code neccessary. To find out how to use CayenneLPP Payload Formatters, see the [CayenneLPP section]({{< relref "cayenne" >}}).

### Device Repository

Device manufacturers may submit payload formatters designed to work with their devices. These are publicly available in {{% tts %}} [Device Repository](https://github.com/TheThingsNetwork/lorawan-devices/tree/master).

Device repository payload formatters work right out of the box - no customization needed!

## Application and Device Specific Payload Formatters

Payload formatters can be applied to an entire application, or to a specific end device. Application payload formatters are useful if all devices use the same binary payload format, or as a fallback when no device specific payload formatter is set.

Device payload formatters allow you to specify a unique payload formatter for each device. 

{{< note >}} Device payload formatters override application payload formatters. {{</ note >}}

## Working with Bytes

To work with payload formatters, it is important to understand how payload data is encoded as binary bytes, and how to convert it to meaningful fields.

To see how your device encodes environmental data, see your product datasheet.

See [The Things Network Learn](https://www.thethingsnetwork.org/docs/devices/bytes.html) for an introduction to working with bytes.

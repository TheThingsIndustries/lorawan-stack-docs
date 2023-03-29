---
title: "Getting Started"
description: ""
weight: -2
menu:
  main:
    weight: 2
aliases: [/guides/getting-started, /guides/getting-started/running-the-stack, /guides/getting-started/quick-start]
---

This guide briefly introduces the basic concepts to help the reader get started. For more information, look at the [additional information]({{< relref "additional-information" >}})  section.

If you are already familiar with LoRaWAN, skip ahead to the [{{% tts %}}]({{< relref "the-things-stack" >}}) section.

## LoRaWAN

LoRa is a wireless modulation technique derived from Chirp Spread Spectrum (CSS) technology. It encodes information on radio waves using chirp pulses - similar to the way dolphins and bats communicate! LoRa modulated transmission is robust against disturbances and can be received across great distances.

LoRaWAN is a Media Access Control (MAC) layer protocol built on top of LoRa modulation. It is a software layer which defines how devices use the LoRa hardware, for example when they transmit, and the format of messages.

The LoRaWAN protocol is developed and maintained by the LoRa Alliance. The first LoRaWAN specification was released in January 2015. The table below shows the version history of the LoRaWAN specifications. At the time of this writing the latest specifications are 1.0.4 (in 1.0 series) and 1.1 (1.1 series).

### Architecture

Sensor networks in LoRaWAN are deployed in a star-of-stars topology.

{{< figure src="architecture.png" alt="LoRaWAN architecture" >}}

A typical LoRaWAN network consists of the following basic parts.

**End Devices**
  - Sensors or actuators send LoRa modulated wireless messages to the gateways or receive messages wirelessly back from the gateways. .

**Gateways**
  - Specialized evices that receive messages from end devices and forward them to the Network Server.

**Network Server**
  - A piece of software running on a server that manages the end devices.
  - Also referred to as LoRaWAN Network Server/LNS or simply Network software.

**Application servers**
  -  A piece of software running on a server that is responsible for securely processing application data.

### Message Flow

End devices communicate with nearby gateways and each gateway is connected to the network server.

LoRaWAN networks use an ALOHA based protocol, so end devices don’t need to pair with specific gateways. Messages sent from end devices travel through all gateways within range.

These messages are received by the Network Server. If the Network Server has received multiple copies of the same message, it keeps a single copy of the message and discards others. This is known as message deduplication.

The Network Server separates the network settings related data from the separately-encrypted application (sensor) data and forwards the latter to the application server.

The Application Server decrypts the application data and makes is available to the user via a multitude of options.

The messages that originates from an end device are called an Uplinks.

Messages flowing in the opposite direction (originating from the Network Server and/or Application Server and sent to end devices) are called Downlinks.

### Security

All LoRaWAN data is encrypted AES-128 symmetric keys.

Application data is encrypted using a particular key. This key is only shared between the Application Server and the End Device.

Network (settings) data is encrypted using a different key. This key is only shared between the Network Server and the End Device.

All devices have a key called the "Root Key" associated with them. The separate keys for the application data and network data are derived from this root key.

{{< note "These keys are called Session Keys since they are rotated when a device session changes. Device sessions are a much deeper topic and is omitted from this basic guide in the interest of simplicity. See the linked references for more information." />}}

## {{% tts %}}

{{% tts %}} an enterprise grade LoRaWAN server (that includes both the Network Server and Application Server functions mentioned above). In addition, {{% tts %}} contains services and tools to securely manage millions of LoRaWAN devices in production.

- Users can easily get started by signing up for `{{% tts %}} Cloud`, [a fully-managed SLA-backed cloud subscription]({{< relref "cloud" >}}). The Things Stack Cloud also offers a free discovery tier to get started and then seamlessly upgrade later to a different tier. Check [available plans](https://www.thethingsindustries.com/stack/plans/).

- Alternatively, the full customization options of {{% tts %}} can be leveraged by and [run {{% tts %}}]({{< relref "setup" >}}) on your own hardware or cloud infrastructure.

- A free but limited version of {{% tts %}} called `{{% tts %}} Community Edition` is available to [The Things Network]({{< relref "ttn" >}}) community for simple proof-of-concepts and community projects.

- For the DIY’ers, the core features of The Things Stack are [open source](https://github.com/thethingsnetwork/lorawan-stack) and is available for local testing.

{{% tts %}} is developed and maintained by [The Things Industries](https://thethingsindustries.com/).

## Quick Start

To get started with your LoRaWAN journey, you'd need the following

1. A LoRaWAN end device
2. A LoRaWAN gateway
3. An account on any {{% tts %}} deployment. In this guide we show an example of creating a {{% tts %}} Cloud discovery account.

TODO: Add getting started guide with a TTSC discovery tenant.

## Next Steps

- Learn to [add gateways]({{< ref "/gateways/concepts/adding-gateways" >}}), [add devices]({{< ref "devices/adding-devices" >}}), and [create integrations]({{< ref "integrations" >}})
- Learn how you can scale your LoRaWAN deployments and the best practices for a well architected LoRaWAN deployment.
- Learn how to get the most of [{{% tts %}}]({{< ref "/the-things-stack/" >}})

---
title: "Getting Started"
description: ""
weight: -2
menu:
  main:
    weight: 2
aliases: [/guides/getting-started, /guides/getting-started/running-the-stack, /guides/getting-started/quick-start]
---

{{% tts %}} is an enterprise-grade LoRaWAN Network Server that provides services and tools to securely install and manage millions of LoRaWAN devices in production.

This guide first introduces basic LoRaWAN concepts and then proceeds to briefly describe {{% tts %}}.

If you are already familiar with LoRaWAN, you can skip ahead and [setup your first LoRaWAN network]({{< relref "setup-first-network" >}}).

## LoRaWAN

LoRa is a wireless modulation technique derived from Chirp Spread Spectrum (CSS) technology. It encodes information on radio waves using chirp pulses - similar to the way dolphins and bats communicate! LoRa modulated transmission is robust against disturbances and can be received across great distances.

LoRaWAN is a Media Access Control (MAC) layer protocol built on top of LoRa modulation. It is a software layer which defines how devices use the LoRa hardware, for example when they transmit, and the format of messages.

The LoRaWAN protocol is developed and maintained by the LoRa Alliance. The first LoRaWAN specification was released in January 2015. The table below shows the version history of the LoRaWAN specifications. At the time of this writing the latest specifications are 1.0.4 (in 1.0 series) and 1.1 (1.1 series).

### Architecture

{{< figure src="architecture.png" alt="LoRaWAN architecture" >}}

A typical LoRaWAN network consists of the following basic elements.

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

End devices communicate with nearby gateways and each gateway is connected to the Network Server.

LoRaWAN networks use an ALOHA based protocol, so end devices don’t need to pair with specific gateways. Messages sent from end devices travel through all gateways within range.

These messages are received by the Network Server. If the Network Server has received multiple copies of the same message, it keeps a single copy of the message and discards others. This is known as message deduplication.

The Network Server separates the network settings related data from the separately-encrypted application (sensor) data and forwards the latter to the application server.

The Application Server decrypts the application data and makes is available to the user via a multitude of options.

The messages that originates from an end device are called an Uplinks.

Messages flowing in the opposite direction (originating from the Network Server and/or Application Server and sent to end devices) are called Downlinks.

{{< note "Sensor networks in LoRaWAN are deployed in a star-of-stars topology." />}}

### Security

All LoRaWAN data is encrypted AES-128 symmetric keys. All devices have a unique AES-128 key called the "Root Key" associated with them.

This root key is used to derive separate keys for the application data and network data.

Application data is encrypted using one of these derived keys. This key is known only to the Application Server and the End Device.

Network (settings) data is encrypted using different key(s). These keys are known only to the Network Server and the End Device.

{{< note "These keys are called Session Keys since they are rotated when a device session changes. Device sessions are a much deeper topic and is omitted from this basic guide in the interest of simplicity. See the linked references for more information." />}}

## {{% tts %}}

{{% tts %}} is an enterprise grade LoRaWAN server (that includes both the Network Server and Application Server functions mentioned above). In addition, {{% tts %}} contains services and tools to securely manage millions of LoRaWAN devices in production.

{{% tts %}} offers the following options for LoRaWAN deployments in production.

- The quickest way to get started with LoRaWAN is to sign up to [{{% tts %}} Cloud]({{< relref "cloud" >}}) a fully-managed SLA-backed cloud subscription. By using {{% tts %}} Cloud, you can focus on scaling your LoRaWAN deployments while leaving the complexity of managing a production LoRaWAN Network Server to us. The Things Stack Cloud offers a [free discovery tier](https://www.thethingsindustries.com/stack/plans/) to get started and is the recommended option for most new users.

- Alternatively, if you prefer to take on the responsibility of installing and maintaining {{% tts %}} in addition to managing your LoRaWAN device fleet, {{% tts %}} is available to be [installed on your own hardware or cloud infrastructure]({{< relref "setup" >}}).

For simple community projects and local testing, there are a few options.

- A free and limited version of {{% tts %}} called [{{% tts %}} Community Edition]{{< relref "ttn" >}} is available to [The Things Network](https://www.thethingsnetwork.org/) community for simple proof-of-concepts and community projects. This service comes with no guarantees and is entirely at the risk of the users.

- For the DIY’ers, the core features of The Things Stack are [open source](https://github.com/thethingsnetwork/lorawan-stack) and is available for local testing.

{{% tts %}} is developed and maintained by [The Things Industries](https://thethingsindustries.com/).

Now that we've covered some basics, let's go ahead and setup your first LoRaWAN network.

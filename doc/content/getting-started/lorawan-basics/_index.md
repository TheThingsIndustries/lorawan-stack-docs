---
title: "LoRaWAN"
description: ""
weight: 1
---

This guide briefly explains the architecture and key concepts of a LoRaWAN® network.

<!--more-->

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


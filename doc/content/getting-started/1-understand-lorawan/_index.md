---
title: "Step 1: Understanding LoRaWAN Fundamentals"
description: ""
weight: 1
---

This guide briefly explains the architecture and key concepts of a LoRaWAN® network.

Start with LPWAN characterics, data size and typical use cases.

- Low data rate, battery

#### LoRa

LoRa is a wireless modulation technique derived from Chirp Spread Spectrum (CSS) technology. It encodes information on radio waves using chirp pulses - similar to the way dolphins and bats communicate! LoRa modulated transmission is robust against disturbances and can be received across great distances.

#### LoRaWAN

LoRaWAN is a Media Access Control (MAC) layer protocol built on top of LoRa modulation. It is a _software layer_ which defines how devices use the LoRa hardware, for example when they transmit, and the format of messages.

The LoRaWAN protocol is developed and maintained by the [LoRa Alliance](https://lora-alliance.org/). The first [LoRaWAN specification](https://resources.lora-alliance.org/technical-specifications) was released in January 2015. At the time of this writing the latest specifications are 1.0.4 (in 1.0 series) and 1.1 (1.1 series).

### Architecture

> TODO: Add new image

A typical LoRaWAN network consists of the following basic elements.

- **End Devices**: Sensors or actuators send LoRa modulated wireless messages to the gateways or receive messages wirelessly back from the gateways.

- **Gateways**: Specialized devices that receive messages from end devices and forward them to the Network Server, as well as forward messages from the Network Server to the end devices.

- **Network Server**: Software running on a server that manages the entire network. Also referred to as LoRaWAN Network Server/LNS or simply Network software.

- **Application**: Software running on a server that is responsible for securely processing application data.

### Simple message flow

#### Uplinks

The messages that originates from an end device and are sent to the server via gateways are called an Uplinks.

> TODO: Add a simple diagram. Update the content below based on the diagram.

End devices communicate with nearby gateways and each gateway is connected to the Network Server.

LoRaWAN networks use an ALOHA based protocol, so end devices don’t need to pair with specific gateways. Messages sent from end devices travel through all gateways within range.

These messages are received by the Network Server. If the Network Server has received multiple copies of the same message, it keeps a single copy of the message and discards others. This is known as message deduplication.

The Network Server separates the network settings related data from the separately-encrypted application (sensor) data and forwards the latter to the application server.

The Application Server decrypts the application data and makes is available to the user via a multitude of options.

#### Downlinks

Messages that originate in the server (Network Server or Application) and are sent to the end device via gateways are called downlinks.

> TODO: Add a simple diagram. Update the content below based on the diagram.

### Security

> TODO: Add some diagrams that show the two level security.

All LoRaWAN data is encrypted using symmetric keys. All devices have one or two unique keys called the “root keys” associated with them, depending on the version of LoRaWAN they use.

These root keys are used to derive separate keys for the application data and network data.

Application data is encrypted using one of these derived keys. This key is known only to the Application Server and the End Device.

Network (settings) data is encrypted using different key(s). These keys are known only to the Network Server and the End Device.
Note:
These keys are called Session Keys since they are rotated when a device session changes. Device sessions are a much deeper topic and is omitted from this basic guide in the interest of simplicity. See LoRaWAN Security for more information.

## The Things Stack

The Things Stack is a LoRaWAN® Network Server stack which is the critical component for any LoRaWAN solution. This guide quickly gets the reader up to speed with the basics of The Things Stack.

The Things Stack is an enterprise grade LoRaWAN server (that includes both the Network Server and Application Server functions mentioned in the LoRaWAN Reference architecture). In addition, The Things Stack contains services and tools to securely manage millions of LoRaWAN devices in production.

> TODO: Add TTS block diagram and show how this is more than just a LNS. Also add a note to tell the readers to not worry too much about the details as we'll get to that in the next steps.

> TODO: ADD Features

> TODO: ADd deployment options.

## The Things Industries

> TODO: Add a simple intro to TTI and our role in the LW ecosystem.

Know more about us at https://www.thethingsindustries.com/about/.

> TODO: Add a lead in to step 2

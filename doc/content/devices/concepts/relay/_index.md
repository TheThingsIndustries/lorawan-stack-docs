---
title: "Relay"
description: ""
aliases: ["/devices/relay"]
---

This section describes the basic concepts and limitations related to [LoRaWAN® Relay](https://resources.lora-alliance.org/technical-specifications/ts011-1-0-0-relay).

<!--more-->

The relay functionality is introduced as an additional technical specification of the LoRaWAN® protocol, which enables end devices to communicate with a Network Server using another end device as an intermediate hop.

Under normal operations, an end device communicates with a Network Server via one or more gateways. In certain circumstances gateways cannot be installed efficiently in the vicinity of the end devices. An intermediate end device, called a _relay_, can be used to bridge the gap between the end device which is out of reach for gateway coverage, and the nearest gateway.

The relay device is a standard end device, possibly battery powered, which periodically listens on a dedicated channel for a Wake On Radio (WOR) message. The wake on radio message signals to the relay that an end device wants to transmit a message which the relay may re-transmit in order for it to be picked up by a gateway.

The Network Server may also choose to transmit a downlink message to the end device served by the relay, in a dedicated window called RX relay (RXR). As such, bidirectional communication is possible while using relays.

## Concepts

### Relay Mode

End devices can choose to operate in two different relay modes - transmit and receive. A transmitting end device is an end device which wants to use another end device in order communicate with the Network Server. A receiving end device is listening for messages and re-transmits them.

A receiving end device is not forced to operate strictly as a relay. It may conduct its own operations and sends its own messages. As such, the receiving end device is not forced to be a dedicated relay.

Due to overloaded meaning of the word relay (as it refers to the specification, the operation mode of the receiving end device, the capability of the transmitting end device to communicate with a relay, and generally the receive and transmit behavior), {{% tts %}} prefers to call the end device which sends messages to be retransmitted by an intermediary a _served end device_, as it is served by an intermediary end device. An end device which retransmits messages for a served end device is called a _serving end device_.

### Wake On Radio

Traditional gateways can listen on multiple radio channels at the same time, and also on multiple data rates. This capability requires additional hardware and processing power which is generally not available to a standard end device. On the other hand, forcing all communication to take place on a fixed radio channel with fixed transmission parameters is inefficient and can lead to congestion and collisions.

In order to counter balance the limitations above, end devices implementing the relay specification use a dedicated channel called the Wake On Radio (WOR) channel, to signal that a transmission will take place. The signal, called a Wake On Radio message, is sent by the served end device, to be picked up by the serving end device. The serving end device decrypts the Wake On Radio message, and if it decides that it should forward the upcoming message, sends back a Wake On Radio Acknowledgement (WOR-ACK).

The Wake On Radio message does not contain the actual message data - it only contains metadata regarding the upcoming transmission, such as the frequency and the data rate. It is encrypted with a session key which exists between the serving and served end device.

If the served end device receives the WOR-ACK message, or the message to be transmitted is a Join Request, it may choose to transmit the message. Both the serving end device and other gateways may receive this message, and the Network Server can choose which path to use in order to send a downlink message back, if required.

### Channel Activity Detection

Listening continuously for Wake On Radio messages is not suitable for every serving end device, as they may be battery powered. In order to deal with this limitation, serving end devices listen _periodically_ for Wake On Radio messages, using Channel Activity Detection (CAD). The serving end device can sleep between two CAD instances.

### RX Relay

If the end device has received an uplink via a serving end device, it can choose to transmit back a downlink message to the served end device. In order to achieve this, the Network Server wraps the downlink to be sent to the served end device and sends it to the serving end device in the RX1 or RX2 windows of the transmission done by the serving end device. The serving end device then transmits this downlink back to the served end device in the RX relay (RXR) window, which is fixed and occurs 18 seconds after the transmission done by the served end device.

### Additional Channels

If multiple serving end devices are operating in the same area, it may be possible that a single Wake On Radio message 'wakes up' multiple serving end devices at the same time, thus forcing them to listen and process the Wake On Radio message even though it is not addressed to them.

In order to deal with this limitation, an additional channel, sometimes called a secondary channel, can be configured between the served and serving end device, in order to ensure that Wake On Radio messages wake up only the designated serving end device.

### Uplink Forwarding Rules

A standard gateway device will forward all messages received from the end devices to the Network Server. In a sense, a gateway is a transparent component of a LoRaWAN deployment, as it does not do any dedicated processing of the messages.

In contrast, a serving end device will forward only messages from a predefined set of served end devices. This is achieved using uplink forwarding rules, which allow the serving end device to decrypt and process the Wake On Radio messages sent by the served end devices.

### Join Request Forwarding Rules

As Join Request messages occur before a session is in place between an end device and the Network Server, we cannot talk about a way for the serving end device to decide cryptographically if it is should forward the Join Request or not.

In order to deal with this limitation, serving end devices can have a whitelist of DevEUIs and JoinEUIs for which they should forward join requests.

### Forwarding Limits

Served end devices which are configured erroneously, or outright bugged, may transmit LoRaWAN messages very often. Also, Join Requests from malicious devices may mimic real end devices and convince the serving end device to transmit fake Join Requests.

In order to deal with these problems, the serving end device has a system of forwarding limits in place. The limits control how often the serving end device may choose to retransmit messages from served end devices. The limits operate on a refillable bucket basis: every hour new tokens are added into a dedicated bucket, and transmitting a message consumes a token. Without a token, no transmission takes place.

The limits can be configured both on a local and global basis. Local limits apply on a per uplink forwarding rule basis, while global rules apply for the serving end device as a whole.

## Limitations

### Wake On Radio Requirement

Because the serving end device learns about the upcoming transmission via a Wake On Radio message, it logically follows that the served end device must be capable of transmitting such messages. As such, LoRaWAN end devices which do not implement the relay specification cannot participate in the relay protocol.

### Uplink Forwarding Rules Limit

The current relay specification allows at most 16 uplink forwarding rules. As such, at most 16 served end devices may be attached to a serving end device.

### Join Request Forwarding Rules Limit

The current relay specification allows at most 15 join request forwarding rules. In certain circumstances this may mean that a whitelist approach cannot be used.


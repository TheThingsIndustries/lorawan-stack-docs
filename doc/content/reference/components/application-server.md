---
title: "Application Server"
description: ""
---

The Application Server handles the LoRaWAN® application layer, including uplink data decryption and decoding, downlink queuing and downlink data encoding and encryption.

It hosts an MQTT server for streaming application data, supports HTTP webhooks as well as pub/sub integrations.

<!--more-->

## Connectivity

Applications can connect to Application Server over multiple protocols and mechanisms.

### MQTT Protocol

Applications can connect to an Application Server by exchanging JSON messages over MQTT. MQTT is available over TLS, providing confidentiality of messages exchanged between applications and the Application Server.

The upstream messages do not only contain data uplink messages, but also join-accepts and downlink events, on separate topics.

See [Application Server MQTT server]({{< ref "/integrations/mqtt" >}}) for more information.

### HTTP Webhooks

Applications can get streaming JSON messages via HTTP webhooks, and schedule downlink messages by making an HTTP request to the Application Server.

Like MQTT, all upstream messages can be configured, including uplink messages, join-accepts and downlink events, each to separate URL paths.

See [HTTP webhooks]({{< ref "/integrations/webhooks" >}}) for more information.

### Pub/Sub Integrations

Applications can also use pub/sub integrations to work with streaming data. This includes connecting to an external MQTT server and [NATS server](https://www.nats.io).

## Message Processing

The Application Server can decode and encode binary payload sent and received by end devices. This allows for working with structured streaming data, such as JSON objects using MQTT and HTTP webhooks, yet using compact binary data that is transmitted over the air.

Message processors can be well-known formats or custom scripts, and can be set on the device level, or for the entire application.

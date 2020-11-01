---
title: Storage Integration
description: ""
summary: Persistent storage for upstream messages.
---

{{< new-in-version "3.10" >}}

The Storage Integration allows storing received upstream messages in a persistent database, and retrieving them at a later time.

<!--more-->

The Storage Integration is implemented as an Application Package, and can be enabled per application or end device.

## How it works

The Storage Integration runs on the Application Server and watches for upstream traffic (join requests, data uplink message, data downlink message, etc). When an upstream message is received from an end device for which the integration has been configured, the message data (Payload, FPort, Decoded Fields, as well as all relevant metadata) are written in a persistent database.

A gRPC service and an HTTP API is exposed so that stored messages can then be retrieved.

## Typical use cases

- Long-term storage of historical data for end-devices.
- No need to maintain a connection with {{% tts %}} at all times, e.g. for end devices that send messages infrequently.

---
title: Storage Integration
description: ""
summary: Persistent storage for upstream messages.
distributions:
  ["Cloud", "Dedicated Cloud", "Enterprise", "AWS Launcher", "Sandbox"]
---

The Storage Integration allows storing received upstream messages in a persistent database, and retrieving them at a later time.

<!--more-->

The Storage Integration is implemented as an Application Package, and can be enabled per application or end device.

## How it works

The Storage Integration runs on the Application Server and watches for upstream traffic (join requests, data uplink message, data downlink message, etc). When an upstream message is received from an end device for which the integration has been configured, the message data (Payload, FPort, Decoded Fields, as well as all relevant metadata) are written in a persistent database.

Data retention period is 30 days for {{% tts %}} Cloud and 24 hours for {{% ttss %}} distributions. For {{% tts %}} Enterprise distributions, data retention period can be [configured]({{< ref "/integrations/storage/configuration" >}}).

A gRPC service and an HTTP API are exposed so that stored messages can then be retrieved.

{{< note >}} {{% tts %}} Cloud stores only uplink messages. {{</ note >}}

{{< warning >}}
The Storage Integration should not be used for querying realtime data. For scalability reasons, writes to the Storage Integration database are performed in batches and there may be a delay after an uplink is received, before it is available. For realtime alerts, use [Webhooks]({{< ref "integrations/webhooks" >}}).
{{</ warning >}}

## Typical use cases

- Long-term storage of historical data for end-devices.
- No need to maintain a connection with {{% tts %}} at all times, e.g. for end devices that send messages infrequently.

Detailed instructions about storage integration are in the topics below.

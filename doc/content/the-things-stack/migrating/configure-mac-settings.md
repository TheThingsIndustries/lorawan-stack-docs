---
title: Fine-tuning MAC Settings for End Devices
weight: 6
aliases:
  [
    /the-things-stack/migrating-from-v2/configure-mac-settings,
    /getting-started/configure-mac-settings,
    /getting-started/migrating/configure-mac-settings,
  ]
---

MAC settings on {{% tts %}} are configurable per end device. See the [MAC settings guide]({{< ref "/devices/configuring-devices/mac-settings" >}}) for instructions.

Devices migrated from {{% ttnv2 %}} (The Things Network V2 or The Things Industries V2) are configured with an RX1 delay of 1 second, by default. In all {{% tts %}} deployments, the recommended RX1 delay is 5 seconds to accommodate for high latency backhauls and/or [peering with Packet Broker]({{< ref "/the-things-stack/packet-broker" >}}).

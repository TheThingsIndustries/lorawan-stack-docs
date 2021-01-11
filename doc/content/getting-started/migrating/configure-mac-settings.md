---
title: Fine-tuning MAC Settings for End Devices
weight: 60
aliases: "/getting-started/migrating-from-v2/configure-mac-settings"
---

MAC settings on {{% tts %}} are configurable per end device. See the [MAC settings guide]({{< ref "/devices/mac-settings" >}}) for instructions.

{{< warning >}} Devices imported from {{% ttnv2 %}} are configured with an `Rx1Delay` of 1 second, by default. In {{% tts %}} we recommend using an `Rx1Delay` of 5 seconds to accommodate for high latency backhauls and/or [peering with Packet Broker]({{< ref "/reference/peering" >}}). Devices added to {{% tts %}} Cloud use an `Rx1Delay` of 5 seconds by default. {{</ warning >}}

---
title: Fine-tuning MAC Settings for End Devices
weight: 60
aliases: "/getting-started/migrating-from-v2/configure-mac-settings"
---

MAC settings on {{% tts %}} are configurable per end device - see the [MAC settings guide]({{< ref "reference/api/end_device#message:MACSettings" >}}) for instructions.

{{< warning >}} The RX1 delay of end devices is set to 1 second by default. For some end devices, this may lead to downlink messages not being scheduled in time. Therefore, it is recommended that the RX1 delay be increased to 5 seconds. {{</ warning >}}

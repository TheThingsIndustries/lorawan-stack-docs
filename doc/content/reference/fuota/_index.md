---
title: "FUOTA"
description: ""
---

This section contains information on using FUOTA with {{% tts %}}.

<!--more-->

Firmware Update Over the Air (FUOTA) is a standard for distributing firmware updates using unicast or multicast. Its greatest benefit is delivering updates over the air to many devices at the same time in an efficient and secure manner.

{{% tts %}} containts the fundamental blocks for FUOTA support, though it is still in an early adoption phase.

Native FUOTA server is planned to be added to {{% tts %}} in the near future. We recommend to stay tuned for updates on this topic in our social media channels ([YouTube](https://www.youtube.com/c/TheThingsNetworkCommunity), [LinkedIn](https://www.linkedin.com/company/the-things-network/), etc.).

{{< note >}}Remote Multicast Setup (RMS) and Fragmented Data Block Transport (FDBT) protocols are not supported by {{% tts %}}. {{</ note >}}

## FUOTA Process

See the [FUOTA Process Summary document from LoRa Alliance](https://lora-alliance.org/wp-content/uploads/2020/11/tr002-fuota_process_summary-v1.0.0.pdf).

On a high level, a FUOTA process implies the following steps:

- Server enables [class C]({{< ref "/devices/class-c" >}}) and joins a [multicast]({{< ref "/devices/multicast" >}}) group
- Server signs the firmware update and splits it in chunks
- Server schedules each update chunk as a [downlink message]({{< ref "/integrations/mqtt#publishing-downlink-traffic" >}}) to the multicast group 
- Server verifies that the device has received all chunks, synthesizes them and verifies the update signature
- Device applies the firmware update
- Device sends a `firmware update complete` uplink message
- Server disables class C

## Best Practices when Using FUOTA

### File Size

There are two types of FUOTA - full firmware update and incremental firmware update. Incremental update is always preferred, but you first have to make sure that your end device supports it and that you know which firmware version your end device is running.

### Fragment Size

The preferred fragment size depends on the available data rate, which depends on the selected group of end devices. A common practice is to allow the lowest common data rate denominator to reach all devices in a multicast group. However, if for example 80% of devices are nearby and are reachable with SF7 and large fragment sizes, transmitting all data in SF12 would quickly burn those devices' batteries.

### Duty Cycle

Using multiple gateways for updating firmware on the same group of end devices is recommended because of duty cycle restrictions and to avoid packet loss. It is also recommended to use [class B]({{< ref "/devices/class-b" >}}), which takes longer to update but it is likely better for duty cycle distribution.

## Useful Links

A test FUOTA server compatible with {{% tts %}} can be found [here](https://github.com/elsalahy/test-fuota-server).

For a beginners guide on using multicast and FUOTA, check out [this video](https://www.youtube.com/watch?v=UIF5cOpLZxE).

Regarding devices that implement FUOTA, we recommend you to check out our [Generic Node](https://www.genericnode.com/docs/).

See [this link](https://github.com/ARMmbed/mbed-os-example-lorawan-fuota) for an example application that implements multicast FUOTA for MBed OS 5.
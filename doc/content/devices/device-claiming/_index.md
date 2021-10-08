---
title: "Device Claiming"
description: ""
distributions: ["Enterprise", "Cloud"]
--- 

Device claiming is a mechanism that transfers devices securely from one application to another. This section provides guides for making devices claimable and claiming them.

<!--more-->

## Who is it for?

It is used to transfer ownership from a device maker to a device owner, or to a new device owner.

### Typical use cases

1. Purchasing a new device and registering it to the Console in an easy and secure way.
2. Transferring ownership to a new device owner.

Devices can be transferred from one application to another within a single {{% tts %}} Cloud or Enterprise cluster, or between two Cloud or Enterprise clusters.

{{< note >}} Device claiming for other deployments than {{% tts %}} Cloud and {{% tts %}} Enterprise is not possible. For example, you will not be able to transfer a device from {{% tts %}} Cloud application to {{% tts %}} Community Edition application, and vice versa. Transferring devices from {{% tts %}} Cloud to {{% tts %}} Enterprise and vice versa is also not possible. {{</ note >}}

## How does it work?

After pre-provisioning a device, device makers register it on The Things Join Server or on their Cloud cluster, generate a QR code for claiming and stick it to the device. When purchasing a device, new device owners scan this QR code to claim it to their application. 

[Learn how to claim a device]({{< ref "/devices/device-claiming/claim-devices" >}})

{{< note >}} Device claiming does not transfer a security session for a device, it only transfers ownership. The original LoRaWAN session is deleted. The device needs to join the network again for traffic to appear. {{</ note >}}

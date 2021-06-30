---
title: "LoRa Cloud"
description: ""
weight: 60
---

[LoRa Cloud™](https://www.loracloud.com/) platform offers value-added APIs that enable simple solutions for common tasks related to LoRaWAN networks and LoRa-based devices. {{% tts %}} supports integrations with [LoRa Cloud Device & Application Services]({{< ref "/integrations/lora-cloud/das" >}}) and [LoRa Cloud Geolocation API]({{< ref "/integrations/lora-cloud/geolocation" >}}).

<!--more-->

Keep reading to learn how to integrate and make use of LoRa Cloud features.

{{< note >}} The [LoRa Edge™ LR1110](https://www.semtech.com/products/wireless-rf/lora-edge/) solution was used for writing this guide.

This device is running the LoRa Basics Modem-E Firmware and the LoRa Basics Modem-E Demo Application, which provide the device with enough capabilities to perform operations that are of interest in this guide, like WiFi and GNSS assisted scanning. To install the aforementioned firmware and the demo application, follow [this guide](https://lora-developers.semtech.com/learning-center/hands-on-labs/build-end-to-end-solution-using-lorawan-and-loraedge/install-nucleo-and-lr1110-software/).

The device is claimed using the [LoRa Cloud Device Join Service](https://www.loracloud.com/documentation/join_service?url=index.html). That operation is out of the scope of this guide and {{% tts %}} documentation in general, but you can find the detailed documentation on how to claim your device at [Semtech's Learning Center site](https://lora-developers.semtech.com/learning-center/hands-on-labs/build-end-to-end-solution-using-lorawan-and-loraedge/claim-your-device-on-the-lora-cloud-portal/). 

In this guide, we assume you already [added the device]({{< ref "/devices/adding-devices" >}}) in {{% tts %}} Console. Please keep in mind that in case of using the LoRa Cloud Device Join Service for claiming, you have to tick the **External Join Server** box when adding the device in {{% tts %}} Console, as described [here]({{< ref "/devices/adding-devices#manually-create-end-device" >}}). {{</ note >}}

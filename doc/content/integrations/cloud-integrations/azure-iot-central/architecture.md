---
title: "Architecture"
description: ""
weight: 10
---

The Azure IoT Central integration does not require any additional physical resources in your Azure account. It connects to the Azure IoT Central Application using the underlying Azure IoT Device Provisioning Service, then submits traffic using the Azure IoT Hub in which the application has been provisioned.

<!--more-->

{{< figure src="../architecture.svg" alt="Default integration architecture" class="plain" >}}

The single resource deployed in your Azure Account is the Azure IoT Central Application. All permissions are the minimum permissions for the integration to function.


### Implementation details

<div style="text-align: justify">

Azure IoT Hub is designed around standalone end devices communicating directly with the hub. Each end device must connect to the hub via one of the supported communication protocols ([MQTT](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support) / [AMQP](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-amqp-support)). These protocols are inherently stateful - each individual end device must have one connection always open in order to send and receive messages from the Azure IoT Hub.

LoRaWAN end devices are in general low power, low resources devices with distinct traffic patterns. Communication in the LoRaWAN world also does not have the concept of a connection, in the TCP sense, but instead focuses on a communication session. Downlink traffic, which would map to IoT Hub cloud-to-device messages, occurs rarely at application layer for most use cases. As such, keeping a connection open per end device is both wasteful and hard to scale, as both communication protocols mentioned above enforce that each end device has its own individual connection, and no subscription groups semantics are available.

Based on the above arguments, the Azure IoT Central integration prefers to use an asynchronous, stateless communication style. When uplink messages are received from an end device, the integration connects on demand to the Azure IoT Hub and submits the message, and also updates the Device Twin. The data plane protocol used between {{% tts %}} and Azure IoT Hub is [MQTT](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support), and the connections are always secure using [TLS 1.2](https://datatracker.ietf.org/doc/html/rfc5246).

Device Twin desired properties updates and device creation or deletion events are received by {{% tts %}} using an [IoT Central Data Export](https://docs.microsoft.com/en-us/azure/iot-central/core/howto-export-to-webhook?tabs=javascript). The Data Export submits the data via HTTP requests which are authenticated using the API key provided during the integration provisioning, and connections are always done over TLS. This pipeline allows {{% tts %}} to avoid long running connections to the Azure IoT Hub.

</div>

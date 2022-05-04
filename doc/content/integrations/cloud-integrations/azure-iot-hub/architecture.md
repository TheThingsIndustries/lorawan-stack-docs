---
title: "Architecture"
description: ""
weight: 10
---

The Azure IoT Hub integration is a serverless deployment that scales automatically as your deployment grows.

<!--more-->

{{< figure src="../architecture.svg" alt="Default integration architecture" class="plain" >}}

The key resources deployed in your Azure account are:

- IoT Hub to manage your end devices and their Device Twins
- IoT Hub Shared Access Policy that allows {{% tts %}} to register devices, submit traffic and update Device Twins
- EventHub Namespace and EventHub for {{% tts %}} communication
- Azure Function to submit events to {{% tts %}}
- Storage Account used by the Azure Functions for trigger management

This is a serverless deployment: there are no compute resources being deployed. The only continuous charges are by the Azure IoT Hub and the EventHub Namespace. All permissions are the minimum permissions for the integration to function.


### Implementation details

<div style="text-align: justify">

Azure IoT Hub is designed around standalone end devices communicating directly with the hub. Each end device must connect to the hub via one of the supported communication protocols ([MQTT](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support) / [AMQP](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-amqp-support)). These protocols are inherently stateful - each individual end device must have one connection always open in order to send and receive messages from the Azure IoT Hub.

LoRaWAN end devices are in general low power, low resources devices with distinct traffic patterns. Communication in the LoRaWAN world also does not have the concept of a connection, in the TCP sense, but instead focuses on a communication session. Downlink traffic, which would map to IoT Hub cloud-to-device messages, occurs rarely at application layer for most use cases. As such, keeping a connection open per end device is both wasteful and hard to scale, as both communication protocols mentioned above enforce that each end device has its own individual connection, and no subscription groups semantics are available.

Based on the above arguments, the Azure IoT Hub integration prefers to use an asynchronous, stateless communication style. When uplink messages are received from an end device, the integration connects on demand to the Azure IoT Hub and submits the message, and also updates the Device Twin. The data plane protocol used between {{% tts %}} and Azure IoT Hub is [MQTT](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support), and the connections are always secure using [TLS 1.2](https://datatracker.ietf.org/doc/html/rfc5246).

Device Twin desired properties updates and device creation or deletion events are received by {{% tts %}} using an Azure Event Hub. The Azure IoT Hub pipes these lifecycle events to the deployed Event Hub, which in turn submits them (via an HTTP request) to {{% tts %}} using an Azure Function. The HTTP request is authenticated using the API key provided during the integration provisioning, and connections are always done over TLS. This pipeline allows {{% tts %}} to avoid long running connections to the Azure IoT Hub.

Control plane operations such as creating an end device in the Azure IoT Hub are done using the [service protocol](https://docs.microsoft.com/en-us/rest/api/iothub/service/devices), via HTTP requests.

</div>

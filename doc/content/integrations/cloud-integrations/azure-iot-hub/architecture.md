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

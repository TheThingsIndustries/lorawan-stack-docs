---
title: "Azure IoT Central"
description: ""
distributions: ["Cloud", "Dedicated Cloud", "Enterprise", "Community"]
---

This guide will help you setup the [Azure IoT Central](https://azure.microsoft.com/en-us/services/iot-central/) integration.

The key features of the Azure IoT Hub integration are:

- **Handling uplink messages**: {{% tts %}} publishes uplink messages to an Azure IoT Central Application
- **Automatic device provisioning**: end devices are automatically created into the Azure IoT Central Application, using the [LoRaWAN device repository](https://github.com/TheThingsNetwork/lorawan-devices) information in order to provision the end device template
- **Updating device state in Device Twin**: update the device reported properties based on the decoded payloads, and schedule downlinks based on the device desired properties

{{< figure src="overview.svg" alt="Default integration overview" class="plain" >}}

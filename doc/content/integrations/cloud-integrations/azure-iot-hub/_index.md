---
title: "Azure IoT Hub"
description: ""
distributions: ["Cloud", "Dedicated Cloud", "Enterprise", "Sandbox"]
---

This guide will help you setup the [Azure IoT Hub](https://azure.microsoft.com/en-us/services/iot-hub/) integration.

The key features of the Azure IoT Hub integration are:

- **Handling uplink messages**: {{% tts %}} publishes uplink messages to an Azure IoT Hub
- **Creating and deleting devices**: manage end device in Azure IoT Hub, using the [LoRaWAN® device repository](https://github.com/TheThingsNetwork/lorawan-devices)
- **Updating device state in Device Twin**: update the device reported properties based on the decoded payloads, and schedule downlinks based on the device desired properties

{{< note >}} This integration comes with a [Azure Resource Manager Template](https://azure.microsoft.com/en-us/services/arm-templates/) template to deploy in your Azure account. {{</ note >}}

{{< figure src="overview.svg" alt="Default integration overview" class="plain" >}}

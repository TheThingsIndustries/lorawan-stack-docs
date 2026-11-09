# Azure IoT Hub

> This guide will help you setup the Azure IoT Hub integration. The key features of the Azure IoT Hub integration are: Handling uplink messages: The Things Stack …

Source: https://www.thethingsindustries.com/docs/integrations/cloud-integrations/azure-iot-hub/


This guide will help you setup the [Azure IoT Hub](https://azure.microsoft.com/en-us/services/iot-hub/) integration.

The key features of the Azure IoT Hub integration are:

- **Handling uplink messages**: The Things Stack publishes uplink messages to an Azure IoT Hub
- **Creating and deleting devices**: manage end device in Azure IoT Hub, using the [LoRaWAN® device repository](https://github.com/TheThingsNetwork/lorawan-devices)
- **Updating device state in Device Twin**: update the device reported properties based on the decoded payloads, and schedule downlinks based on the device desired properties

> **Note:** This integration comes with a [Azure Resource Manager Template](https://azure.microsoft.com/en-us/services/arm-templates/) template to deploy in your Azure account.


![Default integration overview](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/azure-iot-hub/overview.svg)



## Pages in this section

- [Architecture](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/azure-iot-hub/architecture/index.md): The Azure IoT Hub integration is a serverless deployment that scales automatically as your deployment grows.
- [Deployment Guide](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/azure-iot-hub/deployment/index.md): Learn how to deploy the Azure IoT Hub integration for The Things Stack.
- [Managing Devices](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/azure-iot-hub/devices/index.md): The Azure IoT Hub integration for The Things Stack synchronizes the device registry: you can create devices in Azure IoT Hub which trigger an Azure Function …
- [Messages and Device Twin](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/azure-iot-hub/device-twin/index.md): The Things Stack publishes uplink messages to Azure IoT Hub as device telemetry. The Things Stack updates the Device Twin reported properties of the device, and …
- [Update](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/azure-iot-hub/update/index.md): You can update the Azure IoT Hub integration for The Things Stack using Azure Resource Manager easily. In most cases, this is without service interruptions.
- [Uninstall](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/azure-iot-hub/uninstall/index.md): You can uninstall the Azure IoT Hub integration for The Things Stack by deleting the Resource Group in which the Deployment was done.


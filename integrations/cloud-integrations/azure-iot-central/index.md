# Azure IoT Central

> This guide will help you setup the Azure IoT Central integration. The key features of the Azure IoT Hub integration are: Handling uplink messages: The Things …

Source: https://www.thethingsindustries.com/docs/integrations/cloud-integrations/azure-iot-central/


This guide will help you setup the [Azure IoT Central](https://azure.microsoft.com/en-us/services/iot-central/) integration.

The key features of the Azure IoT Hub integration are:

- **Handling uplink messages**: The Things Stack publishes uplink messages to an Azure IoT Central Application
- **Automatic device provisioning**: end devices are automatically created into the Azure IoT Central Application, using the [LoRaWAN® device repository](https://github.com/TheThingsNetwork/lorawan-devices) information in order to provision the end device template
- **Updating device state in Device Twin**: update the device reported properties based on the decoded payloads, and schedule downlinks based on the device desired properties

![Default integration overview](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/azure-iot-central/overview.svg)



## Pages in this section

- [Architecture](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/azure-iot-central/architecture/index.md): The Azure IoT Central integration does not require any additional physical resources in your Azure account. It connects to the Azure IoT Central Application …
- [Deployment Guide](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/azure-iot-central/deployment/index.md): Learn how to deploy the Azure IoT Central integration for The Things Stack.
- [Telemetry and Device Twin](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/azure-iot-central/device-twin/index.md): The Things Stack publishes uplink messages to Azure IoT Central as device telemetry. The Things Stack updates the Device Twin reported properties of the device, …
- [Device Templates](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/azure-iot-central/device-templates/index.md): Azure IoT Central allows users to model the telemetry and device properties using the Digital Twin Definition Language (DTDL) in order to manipulate the data …


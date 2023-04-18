---
title: "Kaa"
---

This section shows how to implement an integration between {{% tts %}} and [Kaa IoT platform](https://www.kaaiot.com/) in order to create a digital twin of your LoRa device and observe your device's telemetry in the Kaa web interface.

## Prerequisites

1. A user account in the [Kaa cloud](https://cloud.kaaiot.com/login).

## Setup Kaa

First, create an application in the Kaa cloud that will correspond your {{% tts %}} application. Let's name it `smart-home-application`.

{{< figure src="kaa-create-application.png" alt="Create Kaa cloud app" >}}

Next, create the application version by clicking on the **+** button as shown on the image below.

{{< figure src="kaa-create-app-version.png" alt="Create Kaa cloud app version" >}}

Navigate to **MQTT** under **Integrations** on the left hand menu in {{% tts %}} to obtain MQTT connection details needed to proceed with building the integration.

{{< figure src="ttn-connection-information.png" alt="Integration connection information" >}}

Now you can configure the integration in Kaa. You can add it if you navigate to **Device management** on the left hand menu, then to **Integrations**. Fill in the following fields when registering the integration:

- **TTN Username** - the MQTT **Username** from your {{% tts %}} application
- **TTN API key** - the MQTT **Password** from your {{% tts %}} application
- **Identity Server Host** - {{% tts %}} Identity Server host address (see the [Server Addresses section]({{< ref "/getting-started/server-addresses" >}}))
- **MQTT Server Host** - the MQTT **Public address** from your {{% tts %}} application

{{< figure src="kaa-create-app-integration.png" alt="Create Kaa cloud app integration" >}}

Press the **Create** button to finish creating the integration.

After application integration is created, it is possible to create device integrations, i.e. mappings between {{% tts %}} devices and Kaa endpoints.

Go to the created application integration and create a device integration by choosing the application version and {{% tts %}} device that you want to integrate.

{{< figure src="kaa-create-dev-integration.png" alt="Device integration creation" >}}

On the image below, you can see that the device integration has been created and it appeared in the **Devices** list.

{{< figure src="kaa-dev-integrations.png" alt="Device integrations" >}}

By navigating to **Device management &#8594; Devices**, you will find the endpoint that was automatically created during the integration creation. All incoming data from {{% tts %}} device will from now on be ingested under that endpoint.

{{< figure src="kaa-created-endpoint.png" alt="Created endpoint" >}}

## Visualize Your Data

Next, we want visualize some data from {{% tts %}} on Kaa UI. To do so, the Kaa application must first be prepared first.

Edit the application configuration for the [Endpoint Time Series service (EPTS)][EPTS]. EPTS is a Kaa platform component responsible for transforming raw [data samples][data-sample] into well-structured time series. It also stores the time series data and provides access to API for other services, including the [Web Dashboard][WD].

Enable the [time series auto-extraction][EPTS time series auto extraction] from data samples for the previously specified Kaa application.

{{< figure src="kaa-epts-autoextract-config.png" alt="Enable time series auto extract" >}}

With this function enabled, Kaa will automatically create a time series for each numeric field that it encounters at the root of data samples submitted by your endpoints.
You will then be able to view these time series in the Kaa UI, with no extra configuration required.

Now navigate to the device details page of the endpoint created in previous steps. To do that, click on the corresponding row in the device table on the **Devices** dashboard. The data coming from {{% tts %}} device will be available on the **Device telemetry** widget.

{{< figure src="kaa-endpoint-no-data.png" alt="Device telemetry - no data" >}}

Let's assume that {{% tts %}} device is sending temperature measurements. You will need to use a [payload formatter]({{< ref "/integrations/payload-formatters" >}}) in order to get the data into a format recognizable by the Kaa platform, such as:

```json
{
    "temperature":20
}
```

When some uplinks are sent from {{% tts %}} device, the visualized data on Kaa will look like on the image below.

{{< figure src="kaa-endpoint-data.png" alt="Device telemetry - data" >}}

Congratulations, you have successfully integrated {{% tts %}} with Kaa and visualized your data in the Kaa UI!

[the-things-network]: https://www.thethingsnetwork.org
[the-things-stack-community-edition]: https://www.thethingsindustries.com/docs/getting-started/console/#the-things-stack-community-edition
[the-things-stack-cloud-hosted]: https://www.thethingsindustries.com/docs/getting-started/cloud-hosted
[ttn-applications]: https://eu1.cloud.thethings.network/console/applications
[ttn-note-on-using-the-tenant-id]: https://www.thethingsindustries.com/docs/integrations/mqtt/#note-on-using-the-tenant-id
[ttn-api-key-creation]: https://www.thethingsindustries.com/docs/integrations/mqtt/#creating-an-api-key
[ttn-addresses-community]: https://www.thethingsindustries.com/docs/getting-started/ttn/addresses/#api-endpoints
[ttn-addresses-industries]: https://www.thethingsindustries.com/docs/getting-started/cloud-hosted/addresses/

[Kaa cloud]:                              https://cloud.kaaiot.com
[application]:                            https://docs.kaaiot.io/KAA/docs/current/Kaa-concepts/#applications-and-application-versions
[data-sample]:                            https://docs.kaaiot.io/KAA/docs/current/Kaa-concepts/#data-sample
[endpoint]:                               https://docs.kaaiot.io/KAA/docs/current/Kaa-concepts/#endpoints
[EPTS]:                                   https://docs.kaaiot.io/KAA/docs/current/Features/Data-collection/EPTS
[EPTS time series auto extraction]:       https://docs.kaaiot.io/KAA/docs/current/Features/Data-collection/EPTS/Configuration/#time-series-auto-extraction
[EPTS time series configuration]:         https://docs.kaaiot.io/KAA/docs/current/Features/Data-collection/EPTS/Configuration/#time-series-configuration
[WD]:                                     https://docs.kaaiot.io/KAA/docs/current/Features/Visualization/WD

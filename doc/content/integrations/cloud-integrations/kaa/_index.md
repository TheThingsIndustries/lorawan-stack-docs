---
title: "Kaa"
description: "Kaa IoT platform"
---

[Kaa][kaa site] is an IoT platform that provides device management, data collection, data processing and analytics, alerts, data visualization, configuration management, command execution, over-the-air updates and more. Kaa provides comprehensive multi-tenancy with full isolation of each tenant's data, users, permissions, dashboards, solutions, etc. It is modular by design and built upon cloud-native microservices that you can easily swap, customize, or integrate with third-party solutions. Also, Kaa features a modern-looking, intuitive, and fully customizable web dashboard.

<!--more-->

This tutorial shows how to integrate {{% tts %}} with the Kaa platform for observing your device's telemetry on the Kaa UI.

## Prerequisites

1. A user account in the [Kaa Cloud][kaa cloud login]. Click [here][kaa cloud registration] to register for free.

## Setup {{% tts %}}

Go to the **MQTT** integration section on the left hand menu in {{% tts %}} and generate an API key to access {{% tts %}} application from Kaa.

{{< figure src="ttn-generate-api-key.png" alt="Generate API key" >}}

Set the rights for the API key by selecting **Grant all current and future rights**. The Kaa platform requires this level of access in order to be able to query {{% tts %}} for application parameters and information on registered devices in that application.

After that, go to the **Payload formatters** section on the left hand menu in {{% tts %}}, select **Uplink** and choose the **Custom Javascript formatter**. Leave the formatter code as it is suggested by default:

```js
function decodeUplink(input) {
  return {
    data: {
      bytes: input.bytes
    },
    warnings: [],
    errors: []
  };
}
```

## Setup Kaa

### Create Application

First, you need to create an application in the Kaa Cloud, that will correspond to the application inside {{% tts %}}.

To do so, navigate to the **Device management &#8594; Applications** and add a new application by clicking the **Add application** button.

Next, create at least one version of that application by clicking the plus button.

{{< figure src="kaa-create-application.png" alt="Create Kaa application" >}}

### Create Application Integration

Next, you can create the integration between Kaa and {{% tts %}} applications.

Navigate to the **Device management &#8594; Integrations** and click the **Add integration** button. Fill in the following fields:

- TTN username - {{% tts %}} MQTT username 
- TTN API key - the API key that you created in steps above
- Identity Server Host - {{% tts %}} Identity Server host address (see the [Server Addresses section]({{< ref "/getting-started/server-addresses" >}}) for more info)
- MQTT Server Host - {{% tts %}} MQTT public address

{{< figure src="kaa-create-app-integration.png" alt="Create application integration" >}}

### Create Device Integration

Now, you need to create device integration, i.e. mappings between {{% tts %}} devices and Kaa [endpoints][endpoint].

Go to the created application integration and create a device integration by choosing the application version and {{% tts %}} device that you want to integrate. You can see the device integration in the **Devices** list after its creation.

{{< figure src="kaa-dev-integration.png" alt="Device integrations" >}}

By navigating to **Device management &#8594; Devices**, you will find the Kaa endpoint that was automatically created during the device integration creation. 
All incoming data from {{% tts %}} device will be ingested under that endpoint.

{{< figure src="kaa-created-endpoint.png" alt="Created endpoint" >}}

## Visualize Device Data

Next, you can visualize data coming from {{% tts %}} on Kaa UI. 

Edit the application configuration for the [Endpoint Time Series service (EPTS)][EPTS]. EPTS is a Kaa platform component responsible for transforming raw [data samples][data-sample] into well-structured time series. It also stores the time series data and provides access to API for other services, including the [Web Dashboard][WD].

Go to the **Device management &#8594; Applications**, expand the application used for integration, click on EPTS and enable auto-extraction.

{{< figure src="kaa-epts-enable-auto-extraction.png" alt="Enable time series auto extract" >}}

With this function enabled, Kaa will automatically create a time series for each numeric field that it encounters at the root of data samples submitted by your endpoints.
You will then be able to view these time series in the Kaa UI, with no extra configuration required.

Now navigate to the device details page of the endpoint created in previous steps. To do that, go to the **Devices** page in the **Device management** section and click on the corresponding row. The data coming from {{% tts %}} device will be displayed on the **Device telemetry** widget.

{{< figure src="kaa-endpoint-no-data.png" alt="Endpoint with no telemetry data" >}}

Let's assume that {{% tts %}} device is sending temperature measurements in the next format:

```json
{"temp":20}
```

Convert this payload to a byte array in HEX (`7B 22 74 65 6D 70 22 3A 32 30 7D`), go to the **End devices &#8594; your device's Overview page &#8594; Messaging** in {{% tts %}} Console and paste the byte array into the **Payload** field. 

As a result, you should be able to see the data on Kaa UI.

{{< figure src="kaa-endpoint-data.png" alt="Endpoint with telemetry data" >}}

Congratulations, you have successfully integrated {{% tts %}} with Kaa and visualized your data on the Kaa UI!

## Next Steps

Explore more Kaa features by completing the [Getting Started tutorials cycle][Getting Started tutorials] with short tutorials on the main Kaa features.

[kaa site]:                         https://www.kaaiot.com/
[kaa cloud login]:                  https://cloud.kaaiot.com/login
[kaa cloud registration]:           https://www.kaaiot.com/free-trial

[data-sample]:                      https://docs.kaaiot.io/KAA/docs/v1.4.0/Kaa-concepts/#data-sample
[endpoint]:                         https://docs.kaaiot.io/KAA/docs/v1.4.0/Kaa-concepts/#endpoints
[EPTS]:                             https://docs.kaaiot.io/KAA/docs/v1.4.0/Features/Data-collection/EPTS
[EPTS time series auto extraction]: https://docs.kaaiot.io/KAA/docs/v1.4.0/Features/Data-collection/EPTS/Configuration/#time-series-auto-extraction
[EPTS time series configuration]:   https://docs.kaaiot.io/KAA/docs/v1.4.0/Features/Data-collection/EPTS/Configuration/#time-series-configuration
[WD]:                               https://docs.kaaiot.io/KAA/docs/v1.4.0/Features/Visualization/WD
[Getting Started tutorials]:        https://docs.kaaiot.io/KAA/docs/v1.4.0/Tutorials/getting-started/

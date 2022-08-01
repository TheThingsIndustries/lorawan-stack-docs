---
title: "Blockbax"
description: ""
weight:
aliases: ["/integrations/blockbax"]
---

[Blockbax](https://blockbax.com/) is a fully configurable and scalable cloud IoT platform which requires no programming.

<!--more-->

The most important concept in the Blockbax Platform is a **subject**. Typically this is the business object you want to monitor such as a building, but it can be a device in its own right as well. You can also relate subjects together, for example to create composite structure like a building with floors. A subject can have **metrics** which are the things being measured. Besides a subject can also have **properties** to provide extra information (metadata) about the subject. These can be used throughout the platform for filtering, creating slices, drilldowns and aggregations. In order to enforce structure and make it easy to scale there are **subject types** which are the templates / blueprints of your subjects.

Check the [Blockbax documentation page](https://blockbax.com/docs/) for more info and the short video below for an impression.

{{< figure src="subject-composition.gif" alt="Subject composition" >}}

## Prerequisites

1. Own a Blockbax project or [request one](https://blockbax.com/about#contact) if you do not have an account yet.

## Preparing an inbound connector in Blockbax

[Login](https://login.blockbax.com/) to the Blockbax Platform. Go to **Settings** and **Inbound connectors**.

Create an [inbound connector](https://blockbax.com/docs/project-settings/#inbound-connectors) accepting HTTP JSON payloads. The payload conversion script depends on the way the payload is formatted before it is being sent to Blockbax. By default when you add a known device in {{% tts %}} it comes with a payload formatter submitted by the device manufacturer from the [device repository]({{< ref "/integrations/payload-formatters/device-repo" >}}). In most cases data is returned as a simple JavaScript object containing numeric and text values as properties.

In this case everything will work with the simple conversion script below. If not, you need to align the payload conversion script to the way your device formatter(s) output the payload. We will explain how to do this later. In any case it is a good starting point to start with the following script in your inbound connector.

```javascript
/**
 * @param {JsonPayload} payload
 * @param {Context} context
 */
function convertPayload(payload, context) {
    const timestamp = date(payload.received_at);
    const subjectExternalId = payload.end_device_ids.device_id;
    for (const [metricExternalId, value] of Object.entries(payload.uplink_message.decoded_payload)) {
        if (value != null) {
            context.addMeasurement(subjectExternalId + "$" + metricExternalId, value, timestamp);
        }
    }
}
```

Optionally you can check 'Automatically create subjects'. This will create a subject automatically if a subject does not exist.

## Create a webhook in {{% tts %}}

Use the Blockbax [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}) to create a Webhook integration on {{% tts %}}. Select **Integrations &#8594; Webhooks** on the left hand menu. Click **Add webhook** and select the **Blockbax** tile.

{{< figure src="webhook.png" alt="Setting up the webhook" >}}

Enter an arbitrary **Webhook ID**, enter your **[Access token](https://blockbax.com/docs/project-settings/#access-tokens)** and **Endpoint**. The endpoint you can copy from the inbound connector settings.

## Further set up your Blockbax project

Once you've added the webhook, payload are sent to Blockbax. Make sure your {{% tts %}} device is connected and has sent at least one payload. Now we are going to create a subject type which matches your device type(s) and further align your inbound connector if necessary. As an example we use the Oyster from Digital Matter, but the process is similar for other devices. 

When you expand the executions in your inbound connector you should see something similar to the execution logs below.

{{< figure src="execution-logs" alt="Example execution logs from an Oyster device from Digital Matter" >}}

In Blockbax ingestion IDs are used to map {{% tts %}} data to your subjects and metrics. By default ingestion IDs are derived from the subjects' external IDs and metrics' external IDs (e.g. `subjectExternalId$metricExternalId`) but you can also override these with custom ones. The inbound connector script configured in the previous step combines your device ID from {{% tts %}} and the property name returned by the payload formatter(s) into an ingestion ID (e.g. `example-device$type`). This allows for easy setup if you make sure your subject external IDs and metric external IDs match the ones you configure in Blockbax.

Now in order to set up your Blockbax project create a [subject type](https://blockbax.com/docs/subjects/#managing-subject-types) with a metric of the correct type for each external ID in your execution logs. For this example you would need to create ingested metrics with the following types and external IDs (highlighted also in the screenshot of the execution logs above):

| Type     | External ID   |
| -------- | ------------- |
| Text     | `type`        |
| Number   | `inTrip`      |
| Number   | `batV`        |
| Number   | `fixFailed`   |
| Location | `latLonDeg`\* |
| Number   | `headingDeg`  |
| Number   | `speedKmph`   |

If you have enabled the setting to automatically create subjects in the inbound connector they will be created automatically when measurements are received and the metric external ID can be linked to one subject type. If you wish to [create subjects](https://blockbax.com/docs/subjects/#creating-subjects) manually the subject's external IDs need to match the device IDs configured in The Things Stack. For this example that would be a subject with external ID `example-device`.

(\*) As you might have noted the `latLonDeg` external ID is not highlighted in the execution logs. This is because we do not to have the `latitudeDeg` and `longitudeDeg` as separate number metrics but as a location metric. In this way you are able to use the full location-based functionality in the Blockbax Platform such as viewing routes and setting geofences. You can do this by changing the conversion script to the one below.

```javascript
/**
 * @param {JsonPayload} payload
 * @param {Context} context
 */
function convertPayload(payload, context) {
    const timestamp = date(payload.received_at);
    const subjectExternalId = payload.end_device_ids.device_id;
    const location = {};
    for (const [metricExternalId, value] of Object.entries(payload.uplink_message.decoded_payload)) {
        if (value != null) {
            if (metricExternalId === "latitudeDeg") {
                location.lat = value;
            } else if (metricExternalId === "longitudeDeg") {
                location.lon = value;
            } else {
                context.addMeasurement(subjectExternalId + "$" + metricExternalId, value, timestamp);
            }
        }
    }
    if (location.lat && location.lon) {
        context.addMeasurement(subjectExternalId + "$" + "latLonDeg", location, timestamp);
    }
}
```

Now you are all set up, check your Blockbax project to see the measurements coming in!

{{< figure src="digital-matter-example.png" alt="Digital Matter Oyster2 in Blockbax" >}}

{{< note >}}
If you are familiar with JavaScript another option to determine the external IDs for the ingested metrics is to look at the source code of the device specific payload formatter. In this case you are also sure you do not miss any metrics which are only sent under certain conditions. In our example we used the Oyster from Digital Matter. 

The source code for the related payload formatter can be found [here](https://github.com/TheThingsNetwork/lorawan-devices/blob/master/vendor/digital-matter/oyster.js). The property names of the `decoded` object should be set as metric external IDs.
{{</ note >}}
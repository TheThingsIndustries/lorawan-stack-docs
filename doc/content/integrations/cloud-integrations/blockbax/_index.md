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

## Blockbax Setup

[Login](https://login.blockbax.com/) to the Blockbax Platform.

Create a [subject type](https://blockbax.com/docs/subjects/#managing-subject-types) and configure metrics. External IDs for these metrics  need to match the property names returned by the uplink payload formatter that will be [configured on {{% tts %}}]({{< ref "/integrations/cloud-integrations/blockbax#configure-the-things-stack" >}}).

{{< figure src="blockbax-metric-external-id-in-payload.png" alt="Relating Blockbax metrics to the Things Stack" >}}

Additionally, you can choose to [create subjects](https://blockbax.com/docs/subjects/#creating-subjects) manually with external IDs matching the device IDs. You can also set the `autoCreateSubjects` option in {{% tts %}} payload formatter function to `true`, so in case a subject does not exist, an automatic subject creation will be performed.

## Configure {{% tts %}}

Make sure your device is added to {{% tts %}}. See [Adding Devices](https://www.thethingsindustries.com/docs/devices/adding-devices/) for more info.

On the left menu of your {{% tts %}} application, select **Payload formatters &#8594; Uplink**.

Select **Javascript** payload formatter type.

Paste the following contents in the **Formatter parameter** window:

```javascript
function decodeUplink(input) {
    decoded = decoder(input.bytes)
    return {
        data: {
            options: {
                // Set this option to true to create subjects automatically
                autoCreateSubjects: false
            },

            // For numeric metrics
            <Blockbax-external-metric-ID>: decoded.exampleNumber,

            // For text metrics
            <Blockbax-external-metric-ID>: decoded.exampleText,

            // For location metrics
            <Blockbax-external-metric-ID>: {
                lat: decoded.exampleLatitude,
                lon: decoded.exampleLongitude
            }
        }
    };
}

function decoder(bytes) {
    // Add the logic that decodes the bytes from your device.
    return decodedBytes
}
```

The functions presented above need to be modified against your setup. See example below.

<details><summary>Uplink payload formatter example</summary>

```javascript
    function decodeUplink(input) {
      decoded = decoder(input.bytes)
      return {
        data: {
          options: {
          // Set this option to true to create subjects automatically
            autoCreateSubjects: false
          },
          battery: decoded.battery,
          temperature: decoded.temperature,
          humidity: decoded.humidity,
          door: decoded.door
        }
      };
    }

    function decoder(bytes) {
        var decoded = {};

        for (var i = 0; i < bytes.length;) {
            var channel_id = bytes[i++];
            var channel_type = bytes[i++];
            // BATTERY
            if (channel_id === 0x01 && channel_type === 0x75) {
                decoded.battery = bytes[i];
                i += 1;
            }
            // TEMPERATURE
            else if (channel_id === 0x03 && channel_type === 0x67) {
                // ℃
                decoded.temperature = readInt16LE(bytes.slice(i, i + 2)) / 10;
                i += 2;

                // ℉
                // decoded.temperature = readInt16LE(bytes.slice(i, i + 2)) / 10 * 1.8 + 32;
                // i +=2;
            }
            // HUMIDITY
            else if (channel_id === 0x04 && channel_type === 0x68) {
                decoded.humidity = bytes[i] / 2;
                i += 1;
            }
            // DOOR
            else if (channel_id === 0x06 && channel_type === 0x00) {
                decoded.door = (bytes[i] === 0) ?  0 :  1;
                i += 1;
            } else {
                break;
            }
        }

        return decoded;
    }

    function readUInt16LE(bytes) {
        var value = (bytes[1] << 8) + bytes[0];
        return value & 0xffff;
    }

    function readInt16LE(bytes) {
        var ref = readUInt16LE(bytes);
        return ref > 0x7fff ? ref - 0x10000 : ref;
    }
```
</details>

When done, click **Save changes**.

{{< figure src="payload-formatter.png" alt="Setting up the payload formatter" >}}

After preparing the payload formatter, use the Blockbax [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}) to create a Webhook integration on {{% tts %}}. Select **Integrations &#8594; Webhooks** on the left hand menu. Click **Add webhook** and select the **Blockbax** tile.

Enter an arbitrary **Webhook ID**, enter your **Project ID** and **[Access token](https://blockbax.com/docs/project-settings/#access-tokens)**. The project ID is contained in your project's URL, e.g. if the project URL is `app.blockbax.com/projects/40edc099-7a41-4af3-9fa4-2fa4bc23a87a/`, the project ID is `40edc099-7a41-4af3-9fa4-2fa4bc23a87a`.

To see the values of all parameters of the Blockbax integration, click on the integration after you created it with the Webhook template.

Once you have added the integration, check your Blockbax project to see the measurements coming in!

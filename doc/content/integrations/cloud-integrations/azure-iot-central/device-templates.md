---
title: "Device Templates"
description: ""
weight: 40
---

Azure IoT Central allows users to model the telemetry and device properties using the [Digital Twin Definition Language (DTDL)](https://docs.microsoft.com/en-us/azure/digital-twins/concepts-models) in order to manipulate the data and build powerful views and dashboards of your device fleet. These templates can be automatically be associated with the end devices in your Azure IoT Central Application.

<!--more-->

As part of this tutorial we will build a small DTDL model for [The Things Uno]({{< ref "/devices/models/the-things-uno" >}}) which allows us to control the built in LED of the device.

## Prerequisites

1. A [The Things Uno]({{< ref "/devices/models/the-things-uno" >}}) registered in your end device, with the end device version identifiers set, and using the `quickstart` sketch.

> You can check if the end device version identifiers are set by checking the Console end device overview, under the **Hardware** section.

{{< figure src="../the-things-uno-version-identifiers.png" alt="The Things Uno Version Identifiers" >}}

## Digital Twin Modeling Identifier

When the Azure IoT Central integration provisions an end device using the underlying Azure Device Provisioning Service, it will provide a DTDL model ID to the provisioning service in order to allow Azure IoT Central to automatically assign the DTDL model to the end device.

A DTDL model ID is a [**_Digital Twin Modeling Identifier_**](https://github.com/Azure/digital-twin-model-identifier). {{% tts %}} generates this model ID using the following rules:

1. The base model ID template is `dtmi:ttnlwstack:brand:{brandID}:model:{modelID}:hwversion:{hwVersion}:fwversion:{fwVersion}:band:{bandID};{generation}`
2. `{brandID}` is replaced by the normalized form of the end device version identifiers `brand_id` field.
3. `{modelID}` is replaced by the normalized form of the end device version identifiers `model_id` field.
4. `{hwVersion}` is replaced by the normalized form of the end device version identifiers `hardware_version` field, prepended by `hw` (as versions may start with numeric values, but DTMI segments cannot start with a numeric value).
5. `{fwVersion}` is replaced by the normalized form of the end device version identifiers `firmware_version` field,
   prepended by `fw` (using the same reasoning as above).
6. `{bandID}` is replaced by the normalized form of the end device version identifiers `{band_id}` field.
7. `{generation}` is currently always replaced by `1`.

> Normalization in this context refers to the process of replacing any non-alphanumeric character with a `_` character. The normalized form of `The Things Industries` is `The_Things_Industries`.

Following the end device version identifiers associated with the `quickstart` sketch mentioned above, we obtain the following values:

1. `{brand_id}` is replaced by `the_things_products`.
2. `{model_id}` is replaced by `the_things_uno`.
3. `{hwVersion}` is replaced by `hw1.0`.
4. `{fwVersion}` is replaced by `fwquickstart`.
5. `{bandID}` is replaced by `EU_863_870`.
6. `{generation}` is replaced by `1`.

Following this, the resulting DTMI is:

```
dtmi:ttnlwstack:brand:the_things_products:model:the_things_uno:hwversion:hw1_0:fwversion:fwquickstart:band:EU_863_870;1
```

## Base Model

{{< note >}} Please consult the official [**_Digital Twin Definition Language Version 2_**](https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md) specification if you have any questions about DTDL semantics. {{</ note >}}

The top level object of a DTDL model is an [_Interface_](https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md#interface). We will define the top level `Interface` for our _The Things Uno_ device, before adding properties and telemetry, as follows:

```json
{
  "@id": "dtmi:ttnlwstack:brand:the_things_products:model:the_things_uno:hwversion:hw1_0:fwversion:fwquickstart:band:EU_863_870;1",
  "@type": "Interface",
  "contents": [],
  "displayName": {
    "en": "The Things Uno"
  },
  "@context": ["dtmi:iotcentral:context;2", "dtmi:dtdl:context;2"]
}
```

## Modeling Properties

As described in the [Device Twin]({{< relref "device-twin" >}}) section, {{% tts %}} will automatically publish certain properties on behalf of the device. A generic property which is applicable to any device is `lastSeenAt`. Let us model this property as follows:

```json
{
  "@id": "dtmi:ttnlwstack:lastSeenAt;1",
  "@type": "Property",
  "displayName": {
    "en": "Last Seen At"
  },
  "name": "lastSeenAt",
  "schema": "dateTime"
}
```

We can see that the `@type` is set to [Property](https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md#property), and that the `schema` is `dateTime`, as the field represents a timestamp. The `@id` is a DTMI, and by convention we have prepended the name of the field by `ttnlwstack` for the purpose of this example. Similarly, one may define the `joinedAt` property of the end device as follows:

```json
{
  "@id": "dtmi:ttnlwstack:joinedAt;1",
  "@type": "Property",
  "displayName": {
    "en": "Joined At"
  },
  "name": "joinedAt",
  "schema": "dateTime"
}
```

We can now put together our intermediate model, by providing the two properties to the base model `contents` field, resulting in the following model:

```json
{
  "@id": "dtmi:ttnlwstack:brand:the_things_products:model:the_things_uno:hwversion:hw1_0:fwversion:fwquickstart:band:EU_863_870;1",
  "@type": "Interface",
  "contents": [
    {
      "@id": "dtmi:ttnlwstack:joinedAt;1",
      "@type": "Property",
      "displayName": {
        "en": "Joined At"
      },
      "name": "joinedAt",
      "schema": "dateTime"
    },
    {
      "@id": "dtmi:ttnlwstack:lastSeenAt;1",
      "@type": "Property",
      "displayName": {
        "en": "Last Seen At"
      },
      "name": "lastSeenAt",
      "schema": "dateTime"
    }
  ],
  "displayName": {
    "en": "The Things Uno"
  },
  "@context": ["dtmi:iotcentral:context;2", "dtmi:dtdl:context;2"]
}
```

## Model Registration

Go to your Azure IoT Central Application, navigate to **Device templates** on the left hand menu and click on **+ New**.

{{< figure src="../create-device-template.png" alt="Create Device Template" >}}

You can now select the **_IoT Device_** custom device template, then click on **Next: Customize**.

{{< figure src="../custom-device-template.png" alt="Custom Device Template" >}}

You can now enter the template name and then click on **Next: Review** at the bottom of the page. You will be presented with the device review screen. Check the details one last time and click on **Create**.

{{< figure src="../device-template-overview.png" alt="Device Template Overview" >}}

We can now input our DTDL model into the device template that we have just created. Select **_Custom model_** in the _Create a model_ screen.

{{< figure src="../custom-device-model.png" alt="Custom Device Model" >}}

Click on the **Edit DTDL** button.

{{< figure src="../edit-dtdl-button.png" alt="Edit DTDL Button" >}}

You can now input the DTDL model that we have defined in the previous step, then click on **Save**.

{{< figure src="../add-dtdl-model.png" alt="Add DTDL Model" >}}

Click on the **X** in the corner of the model editing dialogue. You will now see the two properties in the model overview.

{{< figure src="../initial-dtdl-overview.png" alt="Initial DTDL Overview" >}}

Click **Publish** on the top level menu, then click **Publish** again in the publish device template dialogue.

The model is now published and can be automatically assigned on device provisioning. We can now plug in our _The Things Uno_ and allow it to send its first uplink. This will cause the integration to provision the end device using our newly registered template.

We can navigate to **Device groups** on the left hand side menu. A group for all of the _The Things Uno_ devices will appear.

{{< figure src="../device-group.png" alt="Device Group" >}}

We can now open the group and see the newly provisioned end device in the device list.

{{< figure src="../device-group-list.png" alt="Device Group List" >}}

Click on the end device. The raw data screen will now contain the modeled properties.

{{< figure src="../modeled-initial-properties.png" alt="Modeled Initial Properties" >}}

{{< note >}} Note that the `joinedAt` property is not set in any of the recent messages as the join accept message has triggered the device provisioning process. Messages that occur while the end device is provisioning are not sent to IoT Central, as we cannot act on behalf of the end device yet. One can simply reset _The Things Uno_ in order to force the end device to join again, thus populating the property. {{</ note >}}

As the data is now modeled, we may build a short view in order to visualize the properties themselves. Click on **Device templates &#8594; The Things Uno**.

{{< figure src="../device-templates-ttuno.png" alt="Device Templates The Things Uno" >}}

You may now click on **View**, under the **_Model_** menu.

{{< figure src="../device-template-ttuno-views.png" alt="The Things Uno Views" >}}

You may now select the **Visualizing the device** view type.

{{< figure src="../device-template-ttuno-visualize.png" alt="Visualizing The Device" >}}

Under the **View name** enter the name of your view, such as _Status_.

{{< figure src="../device-template-ttuno-view-name.png" alt="View name" >}}

You can now drag-and-drop a **Property** tile from the left hand side menu. The property will appear in the right hand side canvas.

{{< figure src="../device-template-ttuno-empty-property.png" alt="Empty Property" >}}

Click on the crayon button (**Edit**) in the newly addded tile. The configuration dialogue will open. Click on **+Capability** and then select the two properties we have modeled so far, then click on **Update** in order to save the updated tile.

{{< figure src="../device-template-ttuno-tile-edit.png" alt="Edit Tile" >}}

Click on **Save** in order to save the view. You can now click on **Configure preview device**, then select **Select from a running device**. Select your end device and click **Apply**.

{{< figure src="../device-template-ttuno-preview-device.png" alt="Preview Device" >}}

You can now see the view with values populated from your preview device.

{{< figure src="../device-template-ttuno-post-preview.png" alt="Post Preview" >}}

You may now click on **Back**. This will bring you back to the main device template overview page. Click on **Publish**, then click on **Publish** again in order to publish the updated model.

You may now open the end device view once again, and the _Status_ view you have added will now be visible.

{{< figure src="../device-status-view.png" alt="Device Status View" >}}

## Modeling Non-primitive Schemas

As part of our previous example, we have modeled two _primitive_ properties. Specifically, the data types (`schema`) were primitive types - timestamps. Yet the `decodedPayload` property is an object. As such, we need to model the data type of the `decodedPayload` object using a separate schema.

The `decodedPayload` property, which is tied to the output of the uplink payload decoder in {{% tts %}} has a singular field called `ledState`, which may take two possible values: `on` and `off`.

We start with the following property definition:

```json
{
  "@id": "dtmi:ttnlwstack:decodedPayload;1",
  "@type": "Property",
  "displayName": {
    "en": "Decoded Payload"
  },
  "name": "decodedPayload",
  "schema": {
    "@id": "dtmi:ttnlwstack:decodedPayload:schema;1",
    "@type": "Object",
    "fields": [],
    "writable": true
  },
  "writable": true
}
```

You can observe that the `schema` of the property is now an object in itself, with the type marked as [Object](https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md#object). Another important thing is that we have marked both the property, and the object inside of it, as `writeable`. This field allows us to consider the `decodedPayload` as a _reported_ and _desired_ property.

_Desired_ properties represent the state in which we would like the end device to be in, while _reported_ properties capture the state in which the device is right now. By having the `decodedPayload` and its contents as a _desired_ property, we can schedule changes to the end device state.

The `quickstart` firmware makes _The Things Uno_ report its current (LED) state as part of the uplink decoded payload, while the downlink payload formatter allows us to change the (LED) state. Another useful property to be observed here is that the payloads are symmetric - we use the same object format to both report the current state (_reported_ properties), and to change the state itself (_desired_ properties).

Moving on, let us look at the (partial) definition of the `ledState` field:

```json
{
  "@id": "dtmi:ttnlwstack:decodedPayload:schema:ledState;1",
  "displayName": {
    "en": "LED"
  },
  "name": "ledState",
  "schema": {
    "@id": "dtmi:ttnlwstack:decodedPayload:schema:ledState:schema;1",
    "@type": "Enum",
    "enumValues": [],
    "valueSchema": "string"
  }
}
```

As we can see, the `ledState` can be modeled as an `Enum`. We now have to provide the two possible options, `on` and `off` as `enumValues`.

```json
[
  {
    "@id": "dtmi:ttnlwstack:decodedPayload:schema:ledState:schema:off;1",
    "displayName": {
      "en": "Off"
    },
    "enumValue": "off",
    "name": "off"
  },
  {
    "@id": "dtmi:ttnlwstack:decodedPayload:schema:ledState:schema:on;1",
    "displayName": {
      "en": "On"
    },
    "enumValue": "on",
    "name": "on"
  }
]
```

We can now put everything together and thus obtain the following updated model:

```json
{
  "@id": "dtmi:ttnlwstack:brand:the_things_products:model:the_things_uno:hwversion:hw1_0:fwversion:fwquickstart:band:EU_863_870;1",
  "@type": "Interface",
  "contents": [
    {
      "@id": "dtmi:ttnlwstack:decodedPayload;1",
      "@type": "Property",
      "displayName": {
        "en": "Decoded Payload"
      },
      "name": "decodedPayload",
      "schema": {
        "@id": "dtmi:ttnlwstack:decodedPayload:schema;1",
        "@type": "Object",
        "fields": [
          {
            "@id": "dtmi:ttnlwstack:decodedPayload:schema:ledState;1",
            "displayName": {
              "en": "LED"
            },
            "name": "ledState",
            "schema": {
              "@id": "dtmi:ttnlwstack:decodedPayload:schema:ledState:schema;1",
              "@type": "Enum",
              "enumValues": [
                {
                  "@id": "dtmi:ttnlwstack:decodedPayload:schema:ledState:schema:off;1",
                  "displayName": {
                    "en": "Off"
                  },
                  "enumValue": "off",
                  "name": "off"
                },
                {
                  "@id": "dtmi:ttnlwstack:decodedPayload:schema:ledState:schema:on;1",
                  "displayName": {
                    "en": "On"
                  },
                  "enumValue": "on",
                  "name": "on"
                }
              ],
              "valueSchema": "string"
            }
          }
        ],
        "writable": true
      },
      "writable": true
    },
    {
      "@id": "dtmi:ttnlwstack:joinedAt;1",
      "@type": "Property",
      "displayName": {
        "en": "Joined At"
      },
      "name": "joinedAt",
      "schema": "dateTime"
    },
    {
      "@id": "dtmi:ttnlwstack:lastSeenAt;1",
      "@type": "Property",
      "displayName": {
        "en": "Last Seen At"
      },
      "name": "lastSeenAt",
      "schema": "dateTime"
    }
  ],
  "displayName": {
    "en": "The Things Uno"
  },
  "@context": ["dtmi:iotcentral:context;2", "dtmi:dtdl:context;2"]
}
```

We can now update the DTDL model with our new model. Navigate to **Device templates &#8594; The Things Uno** then click on the **Edit DTDL**. Input the updated model and click on **Save**. You will now see the `decodedPayload` field.

{{< figure src="../device-template-ttuno-updated.png" alt="Updated Properties" >}}

We would like to visualize this property as part of our earlier view. Click on the `Status` view on the left hand side menu, then click on the pencil button on the tile. Click on the **+ Capability** button and select the `LED` property.

{{< figure src="../device-template-ttuno-add-new-property.png" alt="Add Property" >}}

You may now click on **Update** in order to update the tile. The property will now be visible.

{{< figure src="../device-template-ttuno-updated-property-visible.png" alt="Updated Property Visible" >}}

Click on **Save**, then click on **Back**. Let us now add a form which would allow us to edit the LED state. Click on **Views** on the left hand side menu, then click on **Editing device and cloud data**.

{{< figure src="../device-template-ttuno-raw-form.png" alt="Raw Form" >}}

You may now give a name, such as _Edit_, to your form under the **Form name**. Drag-and-drop the _Decoded Payload_ property on the canvas found on the right hand side. Click on **Save** in order to save your form.

{{< figure src="../device-template-ttuno-updated-form.png" alt="Updated Form" >}}

Click on **Back** in the top side menu. You may now publish the updated model by click on **Publish** on the top level menu, then clicking on the **Publish** button in the newly open dialogue. You can now see the updated view, and form, in your device view.

{{< figure src="../device-template-ttuno-updated-status.png" alt="Updated Status View" >}}

{{< figure src="../device-template-ttuno-view-form.png" alt="Edit Form" >}}

We can now change the _desired_ state of the end device by updating the LED status from `off` to `on`. We can select the `On` option from the LED dropdown, then click on **Save**. This will generate a downlink in {{% tts %}}.

{{< figure src="../device-template-ttuno-tts-downlink.png" alt="Generated Downlink" >}}

On the next uplink, which will still report that the LED state is `off`, the downlink will be transmitted to the end device. On the subsequent uplink, the end device will report the LED state as `on`, and the form will report the property as _accepted_.

{{< figure src="../device-template-ttuno-state-updated.png" alt="State Accepted" >}}

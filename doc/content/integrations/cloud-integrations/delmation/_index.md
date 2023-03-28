---
title: "Delmation Products"
description: ""
---

With the **Delmation Products | Docksters** integration, data from your LoRaWAN devices can easily be sent to the **Docksters IoT portal**. 

Built on the latest cloud-based technology, Docksters can help you excel your business model with the power of IoT data. Using Docksters, you can convert your business into a future proof, data driven company.

<!--more-->

This section takes you quickly through the process of adding a new LoRaWAN device to your Docksters environment. For a new user, this takes approximately 30 minutes. Basic scripting/coding knowledge is useful, but not required.

## Prerequisites

1. A [Docksters user account](https://app.docksters.io/login)

### Docksters security notes

Securing Docksters account using 2FA/MFA is strongly recommended.

You can find your user settings by clicking on your name in the top right, and selecting account settings, or by clicking [here](https://app.docksters.io/account). 

You can customize your account and optionally configure MFA by clicking the **Enable MFA** button. You will need an authentication app, e.g.: 

- Google Authenticator
- Microsoft Authenticator
- Duo Mobile

## Creating an API Key on Docksters

To be able to send data to your Docksters instance, you will instantiate the Delmation webhook template on {{% tts %}}, but to do that, you'll need to use an **API key**.

{{< note >}} Keep in mind that API keys should be kept private, as anyone with access to these keys can send data to your Docksters environment. {{</ note >}}

Login to your Docksters account. Go to **Developer** &#8594; **API Keys** and copy your API key.

{{< figure src="docksters_api_key.png" alt="API Key" >}}

## Creating a Delmation Webhook on {{% tts %}}

Use the Delmation [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}) to create a Webhook integration on {{% tts %}}. 

Select **Integrations** &#8594; **Webhooks** on the left hand menu. Click **Add webhook** and select the **Delmation** template.

Now paste the API key that you copied from the Docksters IoT portal into the **API Key** field.

{{< figure src="tts_webhook.png" alt="TTS Webhook" >}}

## Setting up Delmation | Docksters Project

Once you’ve created the webhook integration, payloads are sent from {{% tts %}} to the Docksters IoT portal. Make sure your {{% tts %}} device is connected and has successfully sent at least one payload. 

### Device Definitions

Docksters platform can handle any form of JSON data, be it plain text, encrypted or encoded. You can create your own Device Definition to handle and parse the incoming data.

{{< note >}} Do you want to create your own device definition, but you are not quite sure how to? Be sure to [contact Delmation](https://delmation.nl/contact) and they will help you build your own device definition. {{</ note >}}

In this tutorial we guide you through the process of creating a Device Definition.

Go to the [Definition Store](https://app.docksters.io/developer), navigate to the **Private tab**, and press the **New definition** button.

You will be redirected to an empty Device Definition. First, enter some information for your Definition, such as name, manufacturer and version. You can also add a FontAwesome icon, which will be displayed on all devices that will use this definition.

{{< figure src="tutorial_emptydefinition.png" alt="Device definitions" >}}

Next, you need to add your **Data Points**, e.g. `Temperature`, `Humidity`, etc. Data Points are used to link the JSON data to your device in a recognizable form. For each Data Point you will need to select a Data Type, e.g. string, integer or one of many custom formats such as temperature, CO2, occupancy, or GPS.

{{< figure src="tutorial_newsensor.png" alt="New data point" >}}

### Data Parsing

When you add a new Device Definition, a default JavaScript code for data parsing is automatically provided. The code block below can help you understand this default data parsing function.

```js
function parsePayload(payloadStr, payloadRaw) {
  // When data is posted to Docksters, a pre-parser determines the device
  // name in order to match the posted data to a device definition.
  //
  // The pre-parser also determines what payloadStr will be set to.
  // Typically, this will either be some hex data as a string or
  // a JSON object converted to a string but it depends on what type of
  // device/gateway you are using.
  //
  // You can use payloadRaw if you prefer to work with the entire unparsed payload.
  // PayloadRaw is a string.
  //
  // This parsePayload() function needs to interpret payloadStr to get the sensor data.

  // For this example we use the following JSON data:
  //  {
  //    "deviceName": "ExampleDevice1",
  //    "Temperature": 19.3,
  //    "Humidity": 45.2
  //  }

  // We use the variable 'sensorData' to store the sensor data:
  let sensorData = {}

  // In this example, payloadStr is a JSON object converted to a string.
  // Let's turn it back into JSON by calling 'JSON.parse' and parsing in the payload string:
  const data = JSON.parse(payloadStr)

  // You can check if the incoming JSON data contains a certain key.
  // In this example, we check to see if there is any humidity data:
  if (data.humidity !== undefined) {
    // We have some, so set the data point data using the data point name (not the display name).
    // In our example we would need a data point called "Humidity" (case is important).
    sensorData['Humidity'] = parseInt(data.humidity)
  }

  // If you are certain that your incoming JSON data always contains
  // a certain key/value, you can skip the if statement
  // and add the data directly to sensorData.
  sensorData['Humidity'] = parseInt(data.humidity)

  // If the name of your data point does not contain
  // any special characters or spaces, you can also add with the point notation.
  // Same goes for the incoming data.
  sensorData.Humidity = data.humidity

  // Some notes:
  // - you don't have to have data for every data point
  // - Docksters will try to convert data point data to the data type the sensor is set to
  // - payloadStr is guaranteed to be a string

  // Lastly, the 'sensorData' variable is returned to Docksters
  return sensorData
}
```

{{< note >}} If you want to take a peek at a fully configured Device Definition, you can upload [this](https://s3.eu-west-1.amazonaws.com/downloads.docksters.io/example_definition.docksters) Definition file to your environment. {{</ note >}}

### What's next?

Congrats, you have configured the integration and now you can easily monitor your data!

{{< figure src="docksters.png" alt="Docksters Smart Building" >}}

If you want to explore further functionalities, check out the [Delmation Products | Docksters IoT docs page](https://documentation.docksters.io/reports).

---
title: "Thinger.io"
description: ""
weight: 
---

[Thinger.io](https://thinger.io/) is a cloud IoT Platform that provides every needed tool to prototype, scale and manage connected products in a very simple way. Its goal is to democratize the use of IoT making it accessible to the whole world, and streamlining the development of big IoT projects.

[Thinger.io](https://thinger.io/) wants to offer an improved integration to {{% tts %}} users by providing easy to configure tools for the storing, analyzing and showing devices data in a simple way. [The plugin](https://docs.thinger.io/plugins/the-things-stack) allows to retrieve {{% tts %}} webhook messages to enhance the integration with some interesting features such as:

- Uplink data payload processing
- Downlink data payload processing
- Automatic device and data buckets provisioning


<!--more-->

## Requirements

1. Have an active subscription of Thinger.io Private Cloud Solution. Check [this link](https://thinger.io/pricing) to create your own private instance within minutes.
2. Install [{{% tts %}} Plugin](https://docs.thinger.io/plugins/the-things-stack) in the instance.

## Plugin Configuration

This section describes the different interfaces that can be used to configure the [{{% tts %}} Plugin](https://docs.thinger.io/plugins/the-things-stack).

### Integrating {{% tts %}} Applications

The first step to perform the integration, is to create a new plugin configuration on [Thinger.io](https://thinger.io/) Cloud. It is possible to create multiple configuration profiles with custom behavior for each application deployed in {{% tts %}}. To create a new application profile, just type the **Application ID** and press the green **Add Application** button. Note that this ID must exactly match the application ID defined in your {{% tts %}} application.

{{< figure src="thingerio_default_settings.png" alt="[Thinger.io](https://thinger.io/) {{% tts %}} Plugin default settings" >}}

The `Application Id` dropdown allows to select and configure a particular application profile, but if the `Default` profile is selected, the configuration will be applied to all the applications integrated with the plugin.

### Uplink Settings

{{< figure src="thingerio_uplink_behaviour.png" alt="Thinger.io {{% tts %}} Plugin uplink behaviour tab" >}}

As shown in the image above, the parameters can be used to configure the plugin's behavior:
- **Auto provision resources**: Enable or disable automatic resource provisioning while receiving messages for non-created devices.
- **Device Connection Timeout**: When creating a new device, establish the device connection timeout in minutes, so the platform can consider the device as disconnected after a fixed time without receiving a message.
- **Device Identifier Prefix**: When creating a new device, create it with a custom prefix + the original device id.
- **Bucket Identifier Prefix**: When creating a new data bucket associated to the device, create it with a custom prefix + the original device id.
- **Assign Asset Type**: Associate the autoprovisioned device and bucket with a given Asset Type.
- **Assign Asset Group**: Associate the autoprovisioned device and bucket with a given Asset Group.
- **Update device location**: Use the location provided in the gateways information to update de current device location.
- **Save metadata**: Store the metadata information provided by {{% tts %}} as a device property that can be retrieved later.
- **Initialize Downlink Data**: When creating a new device, initialize a custom downlink data, that can be modified and processed in further downlink requests.

### Downlink Settings

{{% tts %}} Downlink processes can be configured from [Thinger.io](https://thinger.io/) in order to select the behavior in some parameters as shown below:

{{< figure src="thingerio_downlink_behaviour.png" alt="[Thinger.io](https://thinger.io/) {{% tts %}} Plugin downlink behaviour tab" >}}
- **Confirmed Downlink**: Set to enabled if downlink messages must be confirmed by the device.
- **Push To Downlink Queue**: Enable to push downlink messages instead of replace previous ones.
- **Downlink Priority**: Specify the downlink priority.

### Payload Processing

This tab is used to configure the payload data treatment in order to transform from binary payload received from {{% tts %}} webhook into user-friendly variables and the Downlink JSON into a binary buffer that will be transmitted to {{% tts %}}.

The interface provides a code editor for Node.js scripts, where it is possible to define the codification / decodification processes and also provides a testing tool that allows to verify the behavior of both `uplink` and `downlink` processes.

{{< figure src="thingerio_payload_processing.png" alt="[Thinger.io](https://thinger.io/) {{% tts %}} Plugin payload processing tab" >}}
The following sections provide additional information about how to configure the uplink and downlink methods.

{{< tabs/container "Uplink" "Downlink" >}}

{{< tabs/tab "Uplink" >}}

The uplink method will be called after a gateway sends a new message over {{% tts %}} network. Depending on the configuration done in {{% tts %}} application, this function will receive different inputs:

- **Base64 String**: If {{% tts %}} application defines `Custom Javascript formatter` for the payload but does not provide a decoder function, this method will receive the raw payload encoded in base64. In this case, it will be necessary to write a function to transform this base64 data to a JSON object.
- **JSON Object from Cayene LPP**: If {{% tts %}} application defines a `Cayene LPP` payload formatter, {{% tts %}} will automatically convert the binary data to a JSON object that can be used directly by the platform. In this case, it is not necessary to define custom uplink method unless you want to do some extra processing like incorporate calculated fields.
- **JSON Object from Custom Decoder**: If {{% tts %}} application defines `Custom Javascript Formatter` payload format and provides a decoder function, this function will receive the output from {{% tts %}} function. In this case, creating a custom uplink method will be redundant, so create the function in {{% tts %}}, or in the plugin.

The output of this method must be always a JSON object containing the information that is necessary to be used by the platform. In the following, there is an uplink method that converts base64 data into a JSON object with `temperature` and `humidity` parsed from the binary data.

```javascript
/* convert a base64 payload to a JSON object that can be used by Thinger.io */
module.exports.uplink = function(payload){
    const buffer = Buffer.from(payload, 'base64');
    let processed = {};
    processed.temperature = buffer.readInt16LE(0)/100.0;
    processed.humidity = buffer.readInt16LE(2)/100.0;
    return processed;
};
```

{{< note >}}
The uplink method must always return a JSON object.
{{</ note >}}

{{< /tabs/tab >}}

{{< tabs/tab "Downlink" >}}

The downlink method will be called before the plugin issues a downlink request to {{% tts %}}. To issue a downlink request to {{% tts %}}, this plugin must receive an HTTP POST call, indicating the Thinger.io device identifier, and it will automatically issue the request to the required {{% tts %}} endpoint and its specific protocol. Check out the next sections for more details.
This function will receive different inputs depending on how the plugin is called over its REST API.

- **JSON Object**: If the downlink call is done for a [Thinger.io](https://thinger.io) device that defines a `downlink` property (that is automatically initialized if `Initialize Downlink Data` is configured in the plugin), this method will receive the JSON content of this property. It usually consists on a user-friendly device configuration that should be later encoded to binary in base64.
- **JSON Object**: If the plugin downlink request contains a JSON payload in the POST call, this function will receive this payload instead of the one configured in the device `downlink` property.

The output of this method should be one of the following:

- **Base64 String**: With binary information that can be sent directly to {{% tts %}} network. It is required if your {{% tts %}} application is not defining a converter.
- **JSON Object**: If {{% tts %}} application provides a converter for your payloads, this method can return a JSON object that will be accesible in the converter method. In this case, creating a custom downlink method will be redundant, so create the funtion in {{% tts %}}, or in the plugin.

Example of a downlink method converting a JSON device configuration into base64 as required by {{% tts %}}:

```javascript
/* convert a JSON object with the device configuration in a base64 string expected by {{% tts %}} */
module.exports.downlink = function(payload){
    let bytes = [];
    bytes[0] = payload.enabled ? 1 : 0;
    bytes[1] = payload.frequency;
    bytes[2] = payload.threshold;
    return Buffer.from(bytes).toString('base64');
};
```

{{< note >}}
The downlink method should return a base64 string if {{% tts %}} application does not define a converter.
{{</ note >}}

{{< /tabs/tab >}}

{{< /tabs/container >}}

## {{% tts %}} Console Configuration

### Uplink Configuration

The last tab of the plugin configuration interface is called **Webhook Settings**, it has been created to help the developers to complete the integration in {{% tts %}} Console, by providing all the information required to setup the webhook profile.

{{< figure src="thingerio_webhook_settings.png" alt="[Thinger.io](https://thinger.io/) {{% tts %}} Plugin webhook settings tab" >}}

{{< note >}}
The REST API does not define the application ID, this parameter will be checked by the plugin software to manage the payload according to the configuration.
{{</ note >}}

To create a new webhook integration follow the next steps in {{% tts %}} web console:

1. Select the Application to be integrated.
2. In the main menu open the **Integrations** section and click the **Webhooks** option. The webhooks list will be shown.

{{< figure src="thingerio_tts_sidebar.png" alt="{{% tts %}} sidebar" >}}

3. Clicking the **+Add webhook** blue button in the right top corner of the interface allows choosing between different webhooks integration templates. Select [Thinger.io](https://thinger.io/) template. Then, configure the webhook only requires filling the form with the information provided by [Thinger.io](https://thinger.io/) **Webhook Settings** tab and selecting JSON webhook format.

{{< figure src="thingerio_tts_webhook.png" alt="[Thinger.io](https://thinger.io/) {{% tts %}} webhook settings" >}}

{{< note >}}
The **Authorization header** must be set up using the access token including `Bearer` command
{{</ note >}}

### Downlink Configuration

As part of the webhook template, the Download API key is automatically created, so no further configuration is required.

## Executing Downlink Processes

[Thinger.io](https://thinger.io/)'s [{{% tts %}} Plugin](https://docs.thinger.io/plugins/the-things-stack) has been prepared to automatically manage sending downlink messages to {{% tts %}} server. [Thinger.io](https://thinger.io/) Cloud takes the data from the device downlink property, autogenerated during device provisioning, and inserts it as a response to the next HTTP request from the system. Therefore, allowing the creation of device configurations and being able to control processes by just modifying the value of this property by means of a [Dashboard widget](https://docs.thinger.io/features/dashboards), [Node-RED](https://docs.thinger.io/plugins/node-red), or direct API integration.

1. Configure the plugin's downlink settings at [Thinger.io](https://thinger.io/)
2. Write a codification script if required using the plugin's `downlink payload processing`
3. Modify the value of the property to launch the execution of the downlink process

After this, the plugin will execute the payload processing and send it in response of the next {{% tts %}} API request to your server. It is possible to follow the trace of this communication by accessing the plugin's log going to `Plugins > Plugin profile > Logs`.


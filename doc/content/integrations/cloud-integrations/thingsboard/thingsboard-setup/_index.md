---
title: "ThingsBoard Setup"
description: ""
weight: 2
---

After configuring the uplink payload formatter on {{% tts %}}, follow the steps in this section to prepare the setup on ThingsBoard. 

<!--more-->

Log in to your ThingsBoard account. 

## Defining Data Converters

Before creating an integration, you need to define uplink and downlink data converters. To do so, first navigate to **Data converters** on the left hand menu.

Click the **+** icon in the upper right and then select **Create new converter** to create a new uplink converter.

Give a **Name** to your uplink converter, select **Uplink** as a **Type** and paste the following code in the decoder function field:

```js
var data = decodeToJson(payload);
var deviceName = data.end_device_ids.device_id;
var deviceType = data.end_device_ids.application_ids.application_id;

var result = {
    deviceName: deviceName,
    deviceType: deviceType,
    telemetry: {
        temperature: data.uplink_message.decoded_payload.temperature
    }
};

function decodeToString(payload) {
    return String.fromCharCode.apply(String, payload);
}

function decodeToJson(payload) {
    var str = decodeToString(payload);
    var data = JSON.parse(str);
    return data;
}

return result;
```

{{< info >}} You can test the decoder by clicking the **Test decoder function** and submitting an uplink message from {{% tts %}} manually. {{</ info >}}

{{< figure src="uplink-converter.png" alt="Creating the uplink converter" >}}

Finish by selecting **Add**.

Follow the same procedure to create a converter with **Downlink** as a **Type** and a following encoder function:

```js
var data = {
        downlinks: [{
            f_port: 2,
            confirmed: false,
            frm_payload: btoa(msg.version),
            priority: "NORMAL"
        }]
    };

var result = {
    contentType: "JSON",
    data: JSON.stringify(data),
    metadata: {
        devId: 'device_id'     //enter your device's ID here
    }
};
return result;
```

{{< note >}} Replace the `device_id` in the downlink converter function with the **End device ID** value from {{% tts %}}. {{</ note >}}

{{< figure src="downlink-converter.png" alt="Creating a downlink converter" >}}

## Creating MQTT Integration

When you have defined data converters, navigate to the **Integrations** section on the left hand menu. Add a new integration by clicking the **+** button in the upper right corner.

Give a name to your integration by filling in the **Name** field. For **Type**, choose **The Things Stack**.

{{< note >}} Make sure the **Enabled** and **Allow create devices or assets** checkboxes are left ticked. {{</ note >}}

For **Uplink data converter** and **Downlink data converter** choose the uplink and downlink converters you created in the previous step.

Depending on your {{% tts %}} deployment, choose **Host type**.

If you want to use TLS, enter `8883` for **Port**. Otherwise, enter `1883`.

Use the credentials of your {{% tts %}} MQTT Server as **Username** and **Password**.

{{< note >}} You can check the connection with your host via port you specified using credentials you provided by pressing the **Check connection** button. If it fails, make sure you fix it. {{</ note >}}

{{< figure src="creating-integration.png" alt="Creating the integration" >}}

Click the **Add** button on the bottom to finish creating the integration. 

A new device with your end device's ID will be created automatically. You can find it if you navigate to **Device groups &#8594; All** and search the end devices list. Select your device and switch to the **Latest telemetry** tab to see the telemetry data your device is sending, and use it to explore the further ThingsBoard features.

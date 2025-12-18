---
title: "Zoho IoT"
description: ""
weight:
aliases: ["/integrations/cloud-integrations/zohoiot/zohoiot-setup", "/integrations/cloud-integrations/zohoiot/tts-setup", "/integrations/cloud-integrations/zohoiot"]
---

[Zoho IoT](https://www.zoho.com/iot/) is a low-code platform for building cloud based web applications tailored to IoT use cases. It lets you securely connect, monitor, and automate IoT enabled devices with ease.

<!--more-->

This guide will help you set up an integration between {{% tts %}} and Zoho IoT.

## Prerequisite ##

1. A valid and active [Zoho IoT platform account](https://help.zoho.com/portal/en/kb/iot/getting-started/user-onboarding/sign-up-and-sign-in-to-zoho-iot/articles/zoho-iot-signup-signin-signout).
2. Access to The Things Stack Console.

## Step 1: Setting up the Data Stream in Zoho IoT ##

A Zoho IoT Data Stream contains the credentials required to securely connect and integrate with The Things Stack LoRa Network Server. It enables the ingestion of uplink data from connected LoRa devices, allowing seamless monitoring and management within the Zoho IoT application.

i. Sign into [Zoho IoT](https://help.zoho.com/portal/en/kb/iot/getting-started/user-onboarding/sign-up-and-sign-in-to-zoho-iot/articles/zoho-iot-signup-signin-signout) and [create an application](https://help.zoho.com/portal/en/kb/iot/getting-started/user-onboarding/working-with-applications/articles/working-with-applications#Creating_an_Application).

ii.  Access the End Application.

{{< figure src="end-applicatuion-zoho-iot.png" alt="End Application Zoho IoT" >}}

iii. Click the **Settings** icon at the top right.

{{< figure src="click-settings.png" alt="Click Settings" >}}

iv. Click **Data Streams** under the INTEGRATIONS section.

{{< figure src="click-datastreams.png" alt="Click Data Streams" >}}

v. Click **Add Data Stream**.

{{< figure src="click-add-datastreams.png" alt="Click Add Data Streams" >}}

vi. Choose **The Things Stack** and click **Proceed**.

{{< figure src="select-ttn.png" alt="Select TTN" >}}

vii. Provide a name for the data stream and the Keep Alive interval. For this illustration, The Things Stack is given as the name and 10 minutes is set as the Keep Alive Interval.

{{< figure src="fill-datastream-form.png" alt="Fill Data Stream Form" >}}

>Note: The Keep Alive Interval tells the application how long to wait for data from the LoRa Network Server (LNS). If no data is received within this time, the data stream’s connection status changes to Disconnected. The interval is measured in minutes.

viii. Click **Add**. The data stream will now be added to the application, and the connection credentials will be displayed.

{{< figure src="save-datastream-form.png" alt="Save Data Stream Form" >}}

ix. Click **Ok** in the addition successful pop-up dialog box. This will open the data stream's information page.

{{< figure src="click-ok-successful-dialog-box.png" alt="Click Ok Successful in Dialog Box" >}}

x. Click **Proceed** in the Onboarding wizard that appears.

{{< figure src="click-proceed-oboarding-assistant.png" alt="Click Proceed Onboarding Assistant" >}}

The connection details required to establish a secure integration with The Things Stack application will be displayed.

{{< figure src="datastream-connection-details.png" alt="Data Stream Connection Details" >}}

>Do not close this window or tab. Open The Things Stack Console in a new tab to continue the integration process.

## Step 2: Configuring The Things Stack application ##

LoRa devices registered in The Things Stack can be monitored in Zoho IoT through data stream integration. The data stream connects to The Things Stack using a webhook, which forwards uplink messages from the device to Zoho IoT for monitoring. In this step, you’ll learn how to integrate the data stream with The Things Stack using the credentials generated while adding the data stream.

> Note: If you’ve closed the Onboarding Assistant, follow this guide to view the connection credentials of your data stream.

i. Open the The Things Stack Console.

{{< figure src="things_stack_console.png" alt="The Things Stack Console" >}}

ii. Toggle to **Applications** and select the application you want to integrate with the Zoho IoT application. For this illustration, the Parking Monitoring application is selected.

{{< figure src="select_application.png" alt="Toggle and Select Application" >}}

iii. Select **Webhooks** and click **Add Webhook**.

{{< figure src="add_webhook.png" alt="Add Webhook" >}}

iv. Scroll down and click on **Zoho IoT**.

{{< figure src="select_zoho_iot.png" alt="Select Zoho IoT" >}}

v. Provide a **Webhook ID** for your reference. For this illustration, zoho-iot-parking-solution is used.

{{< figure src="provide_webhook_id.png" alt="Provide Webhook ID" >}}

vi. Provide the **URL Param Implementation** value from the datastreams connection credentials in the **Base URL** filed.

{{< figure src="provide-url-param-implementation-value.png" alt="Provide URL Param Implementation Value" >}}

>The authentication token required for secure connection is include in the URL Param value.

vii. Click **Create Zoho IoT Webhook**.

{{< figure src="create-zoho-iot-webhook.png" alt="Create Zoho IoT Webhook" >}}

The Things Stack application will now be integrated with the Zoho IoT application via the Data Stream.

With this step completed, you can now view The Things Stack (TTN) data within Zoho IoT. When a device managed by The Things Stack LNS sends a message, it will also be received by your Zoho IoT application.

## Step 3: Viewing the Data in Zoho IoT ##

Once the Zoho IoT webhook is created for your data stream, you can view messages sent from The Things Stack.

After updating the credentials in The Things Stack console, switch back to the Zoho IoT application tab and click **Proceed** in the Data Stream Onboarding Assistant. The message sent by the device will then be displayed.

{{< figure src="proceed-datastream-onboarding.png" alt="Proceed Data Stream Onboarding " >}}

{{< figure src="message-viewer-onboarding-assistant.png" alt="Message Viewer in Onboarding Assistant" >}}

> Note: If you’ve closed the Onboarding Assistant, follow this [guide](https://help.zoho.com/portal/en/kb/iot/devices/working-with-datastreams/articles/viewing-messages-of-a-datastream) to view the messages received by your data stream.

## Step 4: Adding a Device in the Zoho IoT application ##

With the data stream added and integrated, The Things Stack application will now forward all uplink data from the connected devices. You can add a corresponding device in Zoho IoT to represent each LoRa device. This ensures that the data sent from the device is stored as datapoints in Zoho IoT and can be monitored within the application.

To add a LoRa device,

i. If you are in the Data Stream Onboarding Assistant, close it by clicking the **X** button.

{{< figure src="close-datastream-onboarding-assistant.png" alt="Close Data Stream Onboarding Assistant" >}}

ii. Close the Data Stream Information page by clicking the **X Close** button.

{{< figure src="close-datastream-info-page.png" alt="Close Data Stream Information Page" >}}

iii. In the left navigation panel, select **Devices > Devices**.

{{< figure src="go-to-devices.png" alt="Go To Devices" >}}

iv. Click **Add Device**.

{{< figure src="click-add-device.png" alt="Add Device" >}}

v. Select **Add Using Product Gallery (Devices)** and click **Proceed**.

{{< figure src="select-add-using-product-gallery.png" alt="Add Using Device Product" >}}

vi. Search for, browse, or filter your LoRa device.

{{< figure src="browse-for-device-product.png" alt="Browse Device" >}}

vii. Click the required device. For this example, the AM319 L device is selected.

{{< figure src="click-required-device-product.png" alt="Click on Required Device" >}}

viii. In the device product information page, click **Import and Proceed**.

{{< figure src="click-import-and-proceed.png" alt="Import and Proceed" >}}

ix. Enter the required details in the fields provided. Here’s an example set of values you can refer to:
- **Model Type**: Create New Model
- **Model Name**: Parking IAQ
- **Name**: MyAM319L
- **Type**: Smart Sensor
- **Device Connectivity**: LoRaWAN via LoRaWAN Datastream
- **DevEUI**: 2E4xxxxxxxxxxx7F3 (the 16-digit DevEUI of your device; this is how Zoho IoT identifies which payload belongs to which device)
- **Data Stream**: The Things Stack (select the data stream you integrated earlier)
- **Keep Alive Interval**: 10 minutes

{{< figure src="fill-device-product-form.png" alt="Fill Device Product Form" >}}

x. Click **Proceed**. The device will now be added to the Zoho IoT application.

{{< figure src="proceed-device-product-form.png" alt="Proceed Device Product Form" >}}

xi. Click **View Device** to open the added device's information page.

{{< figure src="view-device.png" alt="View Device" >}}

The device is now added. It will extract and store its data from the payload forwarded by The Things Stack.

## Step 5: Visualizing the Data. ##

With the data now stored in the device, you can begin visualising it in Zoho IoT.

### Using the Data Explorer ###

The Data Explorer lets you view and analyse the datapoints stored for a device.

To view data using the Data Explorer:

i. On the device information page, **Close** the Onboarding Assistant.

{{< figure src="close-device-onboarding-assistant.png" alt="Close Onboarding Assistant" >}}

ii. Select the **Data Explorer** tab.

{{< figure src="select-data-explorer.png" alt="Data Explorer Tab" >}}

iii. In the left pane, choose the datapoints you want to visualise. For example, select PM10, Temperature, CO₂, and Humidity.

{{< figure src="choose-datapoint.png" alt="Choose Datapoints" >}}

The graph will update automatically based on the data forwarded from The Things Stack for these datapoints.

### Using the Global Dashboard ###

Since the device data is now stored as datapoints, you can also create a global dashboard to monitor multiple parameters at once. This allows you to build visualisations similar to the example shown below.

{{< figure src="iot-dashbaord.png" alt="IAQ Dashboard" >}}

Follow this [guide](https://help.zoho.com/portal/en/kb/iot/dashboards/dashboards/working-with-dashboards/articles/working-with-iot-dashboards) to learn how to create dashboards in Zoho IoT.

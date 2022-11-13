---
title: "InfluxDB Cloud Native MQTT Integration"
description: ""
weight: 
---

InfluxDB Cloud now allows ingesting MQTT data via native subscriptions, which makes it capable of listening, parsing and post-processing uplink messages sent from {{% tts %}} and published by its [MQTT Server]({{< ref "/integrations/mqtt ">}}).

Generally, creating a native MQTT subscription in InfluxDB Cloud is easily done through three steps:
- Connecting to an MQTT Broker
- Subscribing to a Topic
- Defining data parsing rules

This section will help you set up the native MQTT integration. See the official [InfluxDB Native MQTT Subscriptions documentation](https://docs.influxdata.com/influxdb/cloud/write-data/no-code/native-subscriptions/) for more info.

## Prerequisites

1. A [user account on InfluxDB Cloud with a **usage-based** plan](https://docs.influxdata.com/influxdb/cloud/account-management/pricing-plans/#usage-based-plan). Check out [this section](https://docs.influxdata.com/influxdb/cloud/account-management/billing/) to learn how to upgrade your InfluxDB Cloud account.

## InfluxDB Cloud Native MQTT Integration Setup

Log in to your InfluxDB Cloud account and explore the left hand menu.

On the **Native Subscriptions** tab, click the **Create Subscription** button to create a new native subscription.

First, enter a **Subscription Name** and optionally a **Description**.

Then enter your {{% tts %}} MQTT Server details in the **Hostname or IP Address** and **Port** fields. Depending on {{% tts %}} deployment you're using, this step might slightly vary. In this example, we're using {{% tts %}} Community Edition instance.

{{< note >}} In case you want to **Enable SSL**, you would need to use the **Port** 8883 (public {{% tts %}} MQTT Server TLS address) and configure TLS certificates in the **Security Details** section below. {{</ note >}}

{{< figure src="connect-to-broker.png" alt="Connect to the MQTT Server" >}}

Proceed to the **Security Details** section and switch to the **Basic** tab. In the **Username** and **Password** fields you need to enter your [{{% tts %}} MQTT connection credentials]({{< ref "/integrations/mqtt#creating-an-api-key" >}}).

In the **Subscribe to a Topic** section you need to define a topic that the MQTT subscription should be listening on. A full list of topics that {{% tts %}} is publishing to is available [here]({{< ref "/integrations/mqtt#subscribing-to-upstream-traffic" >}}). In order to keep the section easy to follow, in this example we use a wildcard `#` to listen to all topics.

{{< figure src="security-and-topic.png" alt="Security and topic configuration" >}}

Next, you need to configure a **Write Destination**. If you haven't set up a bucket previously, you can do it by clicking on the **Create Bucket** button. Just give your bucket a **Name**, choose how long it will retain the data and finish with **Create**.

{{< figure src="create-a-bucket.png" alt="Creating a bucket" >}}

The final step is to define data parsing rules. Proceed to the **Data Format** section and switch to the **JSON** tab, since messages sent from {{% tts %}} are in JSON format.

Under **Timestamp**, define a JSON path to the timestamp field of {{% tts %}} uplink message.

Under **Measurement**, you can define a JSON path to `device_id` of the device you're picking up measurements from, or you can manually define its **Name**.

{{< figure src="data-format-settings.png" alt="Data format settings" >}}

Next, in the **Field** section, you need to define JSON paths to the fields that contain data you want to monitor.

{{< note >}} We assume here that the uplink data is formatted using {{% tts %}} [uplink payload formatter]({{< ref "/integrations/payload-formatters/javascript/uplink/" >}}), so we define JSON paths to variables in the `decoded_payload` object of {{% tts %}} uplink message. {{</ note >}}

{{< figure src="data-fields.png" alt="Defining data fields" >}}

Finish by clicking the **Save Subscription** button.

## Monitor Your Data

When you have created your subscription, just click the **View Data** button in the top right corner and you can start monitoring your data using graphs, alarms, etc.
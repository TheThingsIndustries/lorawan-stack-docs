---
title: "InfluxDB Cloud"
description: ""
weight: 
aliases: ["/integrations/cloud-integrations/influxdb-cloud/influxdb-cloud-setup", "/integrations/cloud-integrations/influxdb-cloud/telegraf-setup/telegraf-mqtt-setup", "/integrations/cloud-integrations/influxdb-cloud/telegraf-setup/telegraf-http-setup"]
---

[InfluxDB Cloud](https://v2.docs.influxdata.com/v2.0/get-started/) is a serverless real-time monitoring platform specifically created for working with time series data. It combines data storage, user interface, visualization, processing, monitoring and alerting into one cohesive system. 

<!--more-->

There are two available methods for integrating {{% tts %}} with InfluxDB Cloud, using:
- Native MQTT subscription
- Telegraf

Native MQTT subscription is the newest, sleek way to integrate these two platforms. Check the [InfluxDB Cloud Native MQTT Integration]({{< ref "/integrations/cloud-integrations/influxdb-cloud/native-mqtt" >}}) for detailed steps. 

The second method is using the [Telegraf agent](https://www.influxdata.com/time-series-platform/telegraf/). Check the [InfluxDB Cloud Integration using Telegraf]({{< ref "/integrations/cloud-integrations/influxdb-cloud/telegraf" >}}) for detailed steps. 
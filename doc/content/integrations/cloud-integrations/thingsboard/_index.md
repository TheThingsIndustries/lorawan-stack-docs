---
title: "ThingsBoard"
description: ""
weight: 
---

[ThingsBoard](https://thingsboard.io/) is an open-source IoT platform for data collection, processing, visualization, and device management. It supports cloud and on-premises deployments, and it combines scalability, fault-tolerance and performances to nullify the chances of getting your IoT data lost.

<!--more-->

The integration between {{% tts %}} and ThingsBoard is an example of an MQTT integration. ThingsBoard embeds an MQTT Broker, which is configured with the ThingsBoard **Integrations** functionality to subscribe or publish to {{% tts %}} [MQTT Server]({{< ref "/integrations/mqtt" >}}).

## Prerequisites

1. Access to [ThingsBoard Professional Edition](https://thingsboard.io/products/thingsboard-pe/) deployment. You can [sign up](https://cloud.thingsboard.io/signup) for a trial account on ThingsBoard PE Cloud server.

>**Note:** Only ThingsBoard PE supports the **Platform Integrations** feature that is needed for this integration. 

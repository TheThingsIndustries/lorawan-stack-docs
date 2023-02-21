---
title: "Architecture"
description: ""
weight: 10
aliases:
  - /integrations/aws-iot/default/architecture/
  - /integrations/cloud-integrations/aws-iot/default/architecture/
---

The AWS IoT Core integration is a serverless deployment that scales automatically as your deployment grows.

<!--more-->

{{< figure src="../architecture.svg" alt="Default integration architecture" class="plain" >}}

The key resources deployed in your AWS account are:

- Cross-account role for {{% tts %}} to connect to your AWS IoT Core MQTT endpoint
- AWS Lambda functions to create the thing type and configure the integration as pub/sub in {{% tts %}}
- AWS Lambda functions for creating devices and for handling uplink and downlink messages
- Secret with key encryption key (KEK) to leverage LoRaWAN end-to-end encryption
- IoT Core rules to trigger the Lambda functions based on topics and attributes

This is a serverless deployment: there are no compute resources being deployed. AWS only charges for usage, which is driven by traffic. All permissions are the minimum permissions for the integration to function.

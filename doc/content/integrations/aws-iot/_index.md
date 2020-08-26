---
title: "AWS IoT"
description: ""
---

{{% tts %}} integrates directly with AWS IoT via a default integration that you deploy in your AWS account via CloudFormation.

You can also configure {{% tts %}} to connect to your AWS IoT Core endpoint via AWS access keys and role-based access control using custom configuration.

<!--more-->

Finally, when running {{% tts %}} in your AWS account, you can publish Application Server telemetry to your IoT Core endpoint.

## Default Integration

The recommended way to integrate with AWS IoT is by using the **Default Integration** for {{% tts %}}. This integration is the most feature rich and supports all deployments of {{% tts %}}. The Default Integration comes with a AWS CloudFormation template to deploy in your AWS account.

[Learn how to set up the default AWS IoT integration]({{< relref default >}})

## Custom IoT Core Settings

Apart from the default integration which comes with a AWS CloudFormation template, you can also just let {{% tts %}} publish uplink messages and subscribe to downlink messages to AWS IoT Core. You can configure any AWS IoT Core endpoint, AWS access key, provide role-based access control (RBAC), configure the AWS IoT Core MQTT topic structure and which messages to publish.

## Application Server Telemetry

This is a simple integration that only supports publishing uplink messages and requires {{% tts %}} to run in your AWS account. This is typically only used for [AWS Marketplace AMI]({{< ref "/getting-started/aws/ami" >}}) deployments.

[Learn how to use Application Server Telemetry]({{< relref "application-server-telemetry" >}})

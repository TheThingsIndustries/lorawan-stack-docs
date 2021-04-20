---
title: "AWS IoT"
description: ""
weight: -1
---

{{% tts %}} integrates directly with AWS IoT via a default integration that you deploy in your AWS account via CloudFormation.

You can also configure {{% tts %}} to connect to your AWS IoT Core endpoint via AWS access keys and role-based access control using custom configuration.

<!--more-->

When running {{% tts %}} in your AWS account, you can publish Application Server telemetry to your IoT Core endpoint.

## Prerequisites

1. You need to have {{% tts %}} deployed in AWS. See the [AWS]({{< ref "/getting-started/aws" >}}) guide to learn how.

## Default Integration {{< distributions "Cloud" "Dedicated Cloud" "Enterprise" "Community" >}} {#default-integration}

The recommended way to integrate with AWS IoT is by using the **Default Integration** for {{% tts %}}. This integration is the most feature rich and supports all deployments of {{% tts %}}. The Default Integration comes with a AWS CloudFormation template to deploy in your AWS account.

[Learn how to set up the default AWS IoT integration]({{< relref default >}})

## Application Server Telemetry {{< distributions "AWS Launcher" >}} {{< deprecated-in-version "3.11.1" >}} {#application-server-telemetry}

This is a simple integration that only supports publishing uplink messages and requires {{% tts %}} to run in your AWS account. This is typically only used for [AWS Marketplace AMI]({{< ref "/getting-started/aws/ami" >}}) deployments.

[Learn how to use Application Server Telemetry]({{< relref "application-server-telemetry" >}})

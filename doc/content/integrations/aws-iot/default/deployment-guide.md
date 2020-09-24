---
title: "Deployment Guide"
description: ""
weight: 20
---

Learn how to deploy the AWS IoT integration for {{% tts %}}.

<!--more-->

## Prerequisites

1. Access to an AWS account. [Create a new account](https://aws.amazon.com/resources/create-account/)
2. An application in {{% tts %}}. [See instructions]({{< ref "/integrations/adding-applications" >}})

## Create API Key

Go to your application in {{% tts %}} Console, go to **API keys** and click **+ Add API key**.

Enter a name, like **AWS IoT integration**, and grant at least the following individual rights:

- View devices in application
- View device keys in application
- Create devices in application
- Edit device keys in application
- Edit basic application settings
- Write downlink application traffic
- Read application traffic (uplink and downlink)

{{< figure src="../create-api-key.png" alt="Create API key" >}}

Click **Create API key**, copy the key and store it in a safe place. You need the API key in the next section.

## Deploy AWS CloudFormation Template

{{% aws-region-selector %}}

{{% aws-deploy-cloudformation name="Deploy for Cloud Hosted" bucket="thethingsindustries" path="integration-aws/latest/cloudhosted.template.json" %}}
{{% aws-deploy-cloudformation name="Deploy for Self Hosted" bucket="thethingsindustries" path="integration-aws/latest/selfhosted.template.json" %}}

> If you want to examine the AWS CloudFormation template before deploying, download the [Cloud Hosted template](https://s3.amazonaws.com/thethingsindustries/integration-aws/latest/cloudhosted.template.json) or [Self Hosted template](https://s3.amazonaws.com/thethingsindustries/integration-aws/latest/selfhosted.template.json).

### Settings

The **Stack name** is the unique name identifying the integration in your AWS account.

The parameters configure the integration:

- **Principal Account ID** (only in Self Hosted): AWS Account ID that The Things Stack authenticates with.
- **Thing Type Name**: The unique AWS IoT Core thing type name for this integration.
- **Thing Shadow Metrics**: Enable or disable updating the thing shadow with metrics.
- **Cluster Address**: The cluster address of your {{% tts %}} deployment. See [Cloud Hosted Addresses]({{< relref "/getting-started/cloud-hosted/addresses" >}}).
- **Application ID**: The application ID for which you configure the integration.
- **Application API Key**: The application API key that you generated before.

> If you use The Things Network Stack V2 integration for AWS IoT, you must change the **Thing Type Name** to something other than `lorawan` to avoid conflicts.

{{< figure src="../create-cloudformation-stack.png" alt="Create AWS CloudFormation Stack" >}}

Check **I acknowledge that AWS CloudFormation might create IAM resources**.

Click **Create stack**.

> Creating all resources can take up to five minutes ☕

When the deployment is done, you'll see the status `CREATE_COMPLETE`.

> Congratulations 🎉 You have now setup the AWS IoT integration for {{% tts %}}!

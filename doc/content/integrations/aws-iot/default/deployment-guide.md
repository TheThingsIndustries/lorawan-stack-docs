---
title: "Deployment Guide"
description: ""
weight: 20
---

Learn how to deploy the AWS IoT integration for {{% tts %}}.

<!--more-->

## Prerequisites

1. Access to an AWS account. [Create a new account](https://aws.amazon.com/resources/create-account/)
2. An application in The Things Industries Cloud Hosted. [See instructions]({{< ref "/getting-started/console/create-application" >}})

## Create API Key

Go to your application in {{% tts %}} Console, go to **API keys** and click **+ Add API key**.

Enter a name, like **AWS IoT integration**, and grant at least the following individual rights:

- View devices in application
- View device keys in application
- Create devices in application
- Edit device keys in application
- Write downlink application traffic
- Read application traffic (uplink and downlink)

{{< figure src="../create-api-key.png" alt="Create API key" >}}

Click **Create API key**, copy the key and store it in a safe place. You need the API key in the next section.

## Deploy AWS CloudFormation Template

{{% aws-region-selector %}}

{{% aws-deploy-cloudformation name="Deploy for Cloud Hosted" bucket="thethingsindustries" path="integration-aws/latest/cloudhosted.template.json" %}}

> If you want to examine the AWS CloudFormation template before deploying, [download the template](https://s3.amazonaws.com/thethingsindustries/integration-aws/latest/cloudhosted.template.json).

### Settings

The **Stack name** is the unique name identifying the integration in your AWS account. The stack name is case sensitive. You need this stack name later.

The parameters configure the integration:

- **Thing Type Name**: The unique AWS IoT Core thing type name for this integration.
- **Cluster Address**: The domain name of your {{% tts %}} deployment.
- **Application ID**: The application ID for which you configure the integration.
- **Application API Key**: The application API key that you generated before.

> If you use The Things Network Stack V2 integration for AWS IoT, you must change the **Thing Type Name** to something other than `lorawan` to avoid conflicts.

{{< figure src="../create-cloudformation-stack.png" alt="Create AWS CloudFormation Stack" >}}

Check **I acknowledge that AWS CloudFormation might create IAM resources**.

Click **Create stack**.

> Creating all resources can take up to five minutes ☕

When the deployment is done, you'll see the status `CREATE_COMPLETE`. Go to the **Outputs** tab and copy the value of **CrossAccountRoleArn**. You need this in the next step.

{{< figure src="../cloudformation-outputs.png" alt="AWS CloudFormation outputs" >}}

## Enable Integration

In your application in {{% tts %}} Console, select the **Pub/Subs** submenu from the **Integrations** side menu. Clicking on the **+ Add Pub/Sub** button will open the Pub/Sub creation screen.

Give your AWS IoT integration and **ID** (e.g. `aws-iot`) and select **AWS IoT** as provider.

Make sure that **Use default integration** is checked.

Select your **AWS region**. This must be the same as the AWS region where you deployed the CloudFormation template.

Enter the **CloudFormation stack name**. This must be the same as the stack name that you entered in the previous step. Note that the stack name is case sensitive.

Paste the **Cross-account role ARN** from the previous step (the CloudFormation output value of **CrossAccountRoleArn**).

{{< figure src="../enable-integration.png" alt="Enable integration" >}}

Click **Add Pub/Sub**.

Any errors connecting to your AWS IoT Core endpoint are reported in the **Data** view of your application in {{% tts %}} Console.

> Congratulations 🎉 You have now setup the AWS IoT integration for {{% tts %}}!

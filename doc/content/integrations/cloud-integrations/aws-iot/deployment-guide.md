---
title: "Deployment Guide"
description: ""
weight: 20
aliases:
  - /integrations/aws-iot/default/deployment-guide
  - /integrations/cloud-integrations/aws-iot/default/deployment-guide/
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
- View and edit application packages and associations
- Write downlink application traffic
- Read application traffic (uplink and downlink)

{{< figure src="../create-api-key.png" alt="Create API key" >}}

Click **Create API key**, copy the key and store it in a safe place. You need the API key in the next section.

## Deploy AWS CloudFormation Template

{{% aws-region-selector %}}

{{< tabs/container "Cloud" "Enterprise" "Sandbox" >}}
{{< tabs/tab "Cloud" >}}
{{% aws-deploy-cloudformation name="Deploy for The Things Stack Cloud" bucket="thethingsindustries" path="integration-aws/latest/cloudhosted.template.json" %}}

[View template](https://s3.amazonaws.com/thethingsindustries/integration-aws/latest/cloudhosted.template.json)
{{< /tabs/tab >}}

{{< tabs/tab "Enterprise" >}}
{{% aws-deploy-cloudformation name="Deploy for The Things Stack Enterprise" bucket="thethingsindustries" path="integration-aws/latest/selfhosted.template.json" %}}

[View template](https://s3.amazonaws.com/thethingsindustries/integration-aws/latest/selfhosted.template.json)
{{< /tabs/tab >}}

{{< tabs/tab "Sandbox" >}}
{{% aws-deploy-cloudformation name="Deploy for The Things Network" bucket="thethingsindustries" path="integration-aws/latest/community.template.json" %}}

[View template](https://s3.amazonaws.com/thethingsindustries/integration-aws/latest/community.template.json)
{{< /tabs/tab >}}
{{< /tabs/container >}}

{{< warning >}} Make sure to select the template related to your deployment only. {{</ warning >}}

### Settings

The **Stack name** is the unique name identifying the integration in your AWS account.

The parameters configure the integration:

- **Principal Account ID** {{< distributions "Enterprise" >}}: AWS Account ID that The Things Stack authenticates with.
- **Thing Type Name**: The unique AWS IoT Core thing type name for this integration.
- **Thing Name Scheme**: The name that is given to AWS IoT things when they are created by the integration.
  - When using `DevEUI`, the name will appear as the numeric DevEUI, i.e 1122334455667788.
  - When using `DeviceID`, the thing name will be a combination of the CloudFormation stack name and the device ID as registered in {{% tts %}}, i.e. `<stackName>_<DeviceID>`.
- **Thing Shadow Metrics**: Enable or disable updating the thing shadow with metrics.
- **Cluster Address**: The cluster address of your {{% tts %}} deployment.
  - When using **The Things Stack Cloud**, go to [The Things Stack Cloud Addresses]({{< relref "/the-things-stack/cloud/addresses" >}}) to find your cluster address
  - When using **The Things Stack Enterprise**, enter your cluster address
  - When using **The Things Network**, select the community cluster from the dropdown
- **Application ID**: The application ID for which you configure the integration.
- **Application API Key**: The application API key that you generated before.

{{< note >}} If you use The Things Network Stack V2 integration for AWS IoT, you must change the **Thing Type Name** to something other than `lorawan` to avoid conflicts. {{</ note >}}

{{< figure src="../create-cloudformation-stack.png" alt="Create AWS CloudFormation Stack" >}}

Check **I acknowledge that AWS CloudFormation might create IAM resources**.

Click **Create stack**.

{{< note >}} Creating all resources can take up to five minutes. ☕ {{</ note >}}

When the deployment is done, you'll see the status `CREATE_COMPLETE`.

> Congratulations! 🎉 You have now set up the AWS IoT integration for {{% tts %}}!

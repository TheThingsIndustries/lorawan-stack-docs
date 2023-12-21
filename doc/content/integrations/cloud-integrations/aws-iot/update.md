---
title: "Update"
description: ""
weight: 60
aliases:
  - /integrations/aws-iot/default/update/
  - /integrations/cloud-integrations/aws-iot/default/update/
---

You can update the AWS IoT integration for {{% tts %}} using AWS CloudFormation easily. In most cases, this is without service interruptions.

<!--more-->

In the AWS Console, open **Services** and go to **CloudFormation**.

In the list of stacks, go to the stack that you created when deploying the integration. See [Deployment Guide]({{< relref "deployment-guide" >}}).

{{< figure src="../update-stack-1.png" alt="Update Stack" >}}

In the top-right, click **Update**.

Select **Replace current template**.

In the **Amazon S3 URL** enter the following URL depending on your deployment:

{{< tabs/container "Cloud" "Enterprise" "Sandbox" >}}
{{< tabs/tab "Cloud" >}}
`https://s3.amazonaws.com/thethingsindustries/integration-aws/latest/cloudhosted.template.json`
{{< /tabs/tab >}}

{{< tabs/tab "Enterprise" >}}
`https://s3.amazonaws.com/thethingsindustries/integration-aws/latest/selfhosted.template.json`
{{< /tabs/tab >}}

{{< tabs/tab "Sandbox" >}}
`https://s3.amazonaws.com/thethingsindustries/integration-aws/latest/community.template.json`
{{< /tabs/tab >}}
{{< /tabs/container >}}

This URL always contain the latest version.

{{< figure src="../update-stack-2.png" alt="Update Stack" >}}

Click **Next**.

Review the parameters. Unless new functionality adds new parameters, you can leave the current values unchanged.

{{< figure src="../update-stack-3.png" alt="Update Stack" >}}

Click **Next** and click **Next** again.

Review the update and changes. Scroll down.

{{< figure src="../update-stack-4.png" alt="Update Stack" >}}

Check **I acknowledge that AWS CloudFormation might create IAM resources.**.

Click **Update stack**.

{{< note >}} Updating all resources can take up to 5 minutes. {{</ note >}}

When the deployment is updated, you'll see the status `UPDATE_COMPLETE`.

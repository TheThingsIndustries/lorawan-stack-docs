---
title: "Update"
description: ""
weight: 60
---

You can update the AWS IoT integration for {{% tts %}} using AWS CloudFormation easily. In most cases, this is without service interruptions.

<!--more-->

In the AWS Console, open **Services** and go to **CloudFormation**.

In the list of stacks, go to the stack that you created when deploying the integration. See [Deployment Guide]({{< relref "deployment-guide" >}}).

{{< figure src="../update-stack-1.png" alt="Update Stack" >}}

In the top-right, click **Update**.

Select **Replace current template**.

In the **Amazon S3 URL** enter `https://s3.amazonaws.com/thethingsindustries/integration-aws/latest/cloudhosted.template.json`. This URL contains always the latest version.

{{< figure src="../update-stack-2.png" alt="Update Stack" >}}

Click **Next**.

Review the parameters. Unless new functionality adds new parameters, you can leave the current values unchanged.

{{< figure src="../update-stack-3.png" alt="Update Stack" >}}

Click **Next** and click **Next** again.

Review the update and changes. Scroll down.

{{< figure src="../update-stack-4.png" alt="Update Stack" >}}

Check **I acknowledge that AWS CloudFormation might create IAM resources.**.

Click **Update stack**.

> Updating all resources can take up to 5 minutes.

When the deployment is updated, you'll see the status `UPDATE_COMPLETE`.

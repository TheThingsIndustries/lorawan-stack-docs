---
title: "Uninstall"
description: ""
weight: 70
---

You can uninstall the AWS IoT integration for {{% tts %}} using AWS CloudFormation.

<!--more-->

## Delete AWS CloudFormation Stack

In the AWS Console, open **Services** and go to **CloudFormation**.

In the list of stacks, go to the stack that you created when deploying the integration. See [Deployment Guide]({{< relref "deployment-guide" >}}).

{{< figure src="../update-stack-1.png" alt="Uninstall Stack" >}}

In the top-right, click **Delete**.

Double check that you are deleting the right AWS CloudFormation stack. Proceed with **Delete stack**.

> Deleting all resources may take a few minutes.

When the stack is deleted, the AWS CloudFormation stack disappears from the list.

> This deletes the integration in {{% tts %}} automatically. You might want to verify that the AWS IoT Pub/Sub integration of your application under **Integrations** in {{% tts %}} Console is gone.

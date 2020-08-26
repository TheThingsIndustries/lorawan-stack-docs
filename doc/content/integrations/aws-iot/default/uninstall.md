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

## Disable AWS IoT Integration

In your application in {{% tts %}} Console, select the **Pub/Subs** submenu from the **Integrations** side menu.

Open your AWS IoT integration. Click **Delete Pub/Sub**.

{{< figure src="../delete-stack.png" alt="Delete Pub/Sub" >}}

Double check that you are deleting the right Pub/Sub. Proceed with **Delete Pub/Sub**.

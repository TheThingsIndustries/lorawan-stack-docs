---
title: "Troubleshooting"
description: ""
weight: 80
---

The AWS IoT Integration for {{% tts %}} puts logs to AWS CloudWatch where you can find detailed traces and errors.

<!--more-->

In the AWS Console, open **Services** and go to **CloudWatch**.

In the menu on the left, under **Logs**, go to **Log Groups**.

{{< figure src="../troubleshooting-log-groups.png" alt="Log Groups" >}}

> Not seeing all log groups? The log groups are created automatically as log entries are written to an underlying log streams.

First place to look for issues with thing creation or claiming is the `/thethings/lorawan/<stack-name>/things` log group. Each thing has its own log stream in this log group. For example, if you [created or claimed a thing]({{< relref "things" >}}) but it doesn't show up in {{% tts %}}, you can find the cause in the thing's log stream.

For further details, you can look at the log entries of the Lambda functions:

- `/aws/lambda/<stack-name>-ClaimThingFunction...`: thing claiming
- `/aws/lambda/<stack-name>-CreateThingFunction...`: thing creation
- `/aws/lambda/<stack-name>-HandleDownlinkFunction...`: downlink handling
- `/aws/lambda/<stack-name>-HandleUplinkFunction...`: uplink handling

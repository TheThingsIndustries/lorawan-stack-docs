---
title: "Scheduling Downlinks on ThingsBoard"
description: ""
weight: 3
---

Learn to schedule a downlink message to be sent to your end device from ThingsBoard by following the steps in this section.

<!--more-->

{{< note >}} This example shows the steps to create a setup that schedules a downlink message when the device attributes change. This requires modifying the **Root Rule Chain**. For more details, visit the [Getting Started with Rule Engine](https://thingsboard.io/docs/user-guide/rule-engine-2-0/re-getting-started/) section of the official ThingsBoard documentation page. {{</ note >}}

First, navigate to **Rule chains** on the left hand menu.

Open the **Root Rule Chain** by clicking the **Open rule chain** icon next to it.

In the nodes library on the left, find **integration downlink** node and place it on the dashboard. Give a **Name** to this node, choose the integration you created previously as **Integration** and click **Add** to finish.

{{< figure src="integration-downlink-node.png" alt="Adding integration downlink node" >}}

Connect the output port of the **Message Type Switch** node with the input port of the **integration downlink** node you just created, and choose **Attributes Updated** link label.

{{< figure src="adding-link.png" alt="Adding Attributes Updated link" >}}

Click **Apply changes** in the bottom right corner.

Go back to your device's settings by navigating to **Device groups &#8594; All** and selecting your device. 

Switch to the **Attributes** tab, choose **Shared attributes** in the **Entity attributes scope** list, then click the **+** in the upper right corner to add a new shared attribute.

Enter `version` in the **Key** field and `v.0.11` in the **String value** field. Click **Add** to finish.

{{< figure src="shared-attribute.png" alt="Shared attribute" >}}

By updating the **Value** of the shared attribute, you are scheduling a downlink message to be sent to your end device. To validate this, go to {{% tts %}} and find downlink message appearing in the **Live data** tab of your end device. The `frm_payload` attribute inside the `data` object of this message will contain Base64 encoded value of the shared attribute. For example, the `frm_payload` will be `di4wLjEx` for the shared attribute value `v.0.11`.

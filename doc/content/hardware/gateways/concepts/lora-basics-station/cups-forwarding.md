---
title: "Using CUPS to redirect to a different LNS"
description: ""
weight: -1
aliases: [/gateways/concepts/lora-basics-station/cups-forwarding]
---

This section explains how redirect your gateway from one {{% tts %}} instance to another using CUPS, thus facilitating remote gateway management.

<!--more-->

If your gateway is using [CUPS]({{< relref "cups" >}}) to connect to {{% tts %}}, and you want to redirect it from one {{% tts %}} instance to another, just follow the steps below. As an example, we consider redirecting a gateway from {{% ttss %}} to {{% tts %}} Cloud.

First, register your gateway in the target instance ({{% tts %}} Cloud in our example). You can choose to **Generate API key for LNS** upon registering, or to follow steps to create an [LNS key]({{< relref "cups#create-separate-cups-and-lns-api-keys" >}}) (gateway API key with linking rights) in the target instance after registering.

{{< figure src="../target-instance-registration.png" alt="Registering gateway in the target The Things Stack instance" >}}

Copy the LNS key from the target instance (that you created in previous step). In the source instance ({{% ttss %}} in our example), navigate to your gateway's **General settings** tab and paste the LNS key you've copied in the **LoRa Basics Station LNS Authentication Key** field.

Navigate to your gateway's **General settings** tab in the target instance, copy the **Gateway Server address** and paste it in the **Gateway Server address** field of the source instance.

{{< figure src="../change-lns-key-and-gs-addr.png" alt="Changing LNS key and GS address in the source instance" >}}

You can optionally invalidate the old LNS key in the source instance, either by deleting it or by removing the linking right.

Upon the next CUPS request, the gateway will connect to the target {{% tts %}} instance and stop sending packets to the source instance. Usually, a CUPS request is sent every 24h, but in this case, it will happen sooner. Changing the Gateway Server address forces the gateway to reconnect in about 10 minutes on average. Also, invalidating the old LNS key in the source instance results in CUPS lookup being done before the 24h window finishes, during which the gateway will redirect to the target instance.

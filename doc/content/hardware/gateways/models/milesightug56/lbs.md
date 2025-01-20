---
title: "Connect Milesight UG56 with Lora Basics™ Station"
description: ""
aliases: [/gateways/models/milesightug56/lbs]
---

This section contains instructions for connecting the Milesight UG56 LoRaWAN® gateway to {{% tts %}} using [{{% lbs %}}]({{< ref "/hardware/gateways/concepts/lora-basics-station" >}}).

<!--more-->

In the **Packet Forwarder** menu and **General** tab, click the little **+** button to create a new server.

{{< figure src="../plus.png" alt="Create new server" >}}

In the server configuration options, check the **Enable** box. Choose **Basic Station** as the **Type**.

Follow the instructions for [Connecting LNS]({{< ref "/hardware/gateways/concepts/lora-basics-station/lns" >}}). If using CUPS, following the instructions for [Connecting CUPS]({{< ref "/hardware/gateways/concepts/lora-basics-station/cups" >}}).

Click **Save** to continue.

{{< figure src="../basic-station.png" alt="Basic Station Configuration" >}}

If your configuration was successful, your gateway will connect to {{% tts %}} after a couple of seconds.

---
title: "Configure LoRa Basics™ Station"
description: ""
---

This section contains instructions for connecting the Multitech Conduit AEP to {{% tts %}} using {{% lbs %}}.

<!--more-->

To set up LoRa packet forwarding on the gateway, follow these steps.

Click the **LoRaWAN** tab in the left menu.

Choose **Basic Station** in the **LoRa Mode** dropdown.

{{< figure src="../lbs-menu.png" alt="LoRaWAN Menu" >}}

On Multitech gateways, only CUPS **or** LNS can be configured. Configuring CUPS will automatically configure LNS, so to use {{% tts %}}, just follow the instructions for [Connecting CUPS]({{< ref "/gateways/lora-basics-station/cups" >}}).

Be sure to select **CUPS** in the **Credentials** dropdown.

{{< figure src="../lbs-cups.png" alt="LoRa Basics Station" >}}

After entering the CUPS configuration, click the **Submit** button, and then click **Save and Apply**. The gateway will apply the changes.

{{< figure src="../lbs-save.png" alt="LoRa Basics Station" >}}

If your configuration was successful, your gateway will connect to {{% tts %}} after a couple of seconds.


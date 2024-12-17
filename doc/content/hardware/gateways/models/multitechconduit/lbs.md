---
title: "Connect Multitech Conduit with LoRa Basics™ Station"
description: ""
aliases: [/gateways/models/multitechconduit/lbs]
---

This section contains instructions for connecting the Multitech Conduit AEP to {{% tts %}} using [{{% lbs %}}]({{< ref "/hardware/gateways/concepts/lora-basics-station" >}}).

<!--more-->

## Prerequisites

1. Multitech Conduit AEP gateway running [mPower 5.3.0 firmware or later](http://www.multitech.net/developer/downloads/).
2. Hardware required: MTCDT with `MTAC-LORA-H mCard`

{{< warning >}}{{% lbs %}} is not supported on Multitech Conduit gateways with [**MTAC-LORA-1.0**](http://www.multitech.net/developer/software/lora/running-basic-station-on-conduit/) USB cards. Please follow instructions for connecting with the [{{% udp-pf %}}]({{< relref "udp" >}}) {{</ warning >}}

To set up LoRa packet forwarding on the gateway, follow these steps.

Click the **LoRaWAN** tab in the left menu.

Choose **Basic Station** in the **LoRa Mode** dropdown.

{{< figure src="../lbs-menu.png" alt="LoRaWAN Menu" >}}

On Multitech gateways, only CUPS **or** LNS can be configured. Configuring CUPS will automatically configure LNS, so to use {{% tts %}}, just follow the instructions for [Connecting CUPS]({{< ref "/hardware/gateways/concepts/lora-basics-station/cups" >}}).

Be sure to select **CUPS** in the **Credentials** dropdown.

The entire configuration should look like:

- Credentials: CUPS
- URI: See [Server Addresses]({{< ref "/concepts/server-addresses" >}})
- Station Config: Leave it as-is (will be overwritten by CUPS)
- Server Cert: Use the [ISRG Root X1 Certificate]({{< ref "/concepts/advanced/root-certificates#isrg-root-x1" >}})
- Gateway Cert: Leave blank
- Gateway Key: [Create a CUPS API key]({{< ref "/hardware/gateways/concepts/lora-basics-station/cups#create-separate-cups-and-lns-api-keys" >}}). Copy the API key and paste it to this field in the following format: `Authorization: Bearer <cups-api-key>`. Be sure you have also configured CUPS to [transmit an LNS API Key]({{< ref "/hardware/gateways/concepts/lora-basics-station/cups#configure-cups-to-send-the-lns-api-key" >}}).

{{< figure src="../lbs-cups.png" alt="LoRa Basics Station" >}}

After entering the CUPS configuration, click the **Submit** button, and then click **Save and Apply**. The gateway will apply the changes.

{{< figure src="../lbs-save.png" alt="LoRa Basics Station" >}}

If your configuration was successful, your gateway will connect to {{% tts %}} after a couple of seconds.

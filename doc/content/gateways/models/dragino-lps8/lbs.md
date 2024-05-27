---
title: "Connect Dragino LPS8N with Lora Basics™ Station"
description: ""
---

This section contains instructions for connecting the Dragino LPS8N LoRaWAN® gateway to {{% tts %}} using [{{% lbs %}}]({{< ref "/gateways/concepts/lora-basics-station" >}}).

<!--more-->

Before proceeding with the next step, we assume you have set up internet access for the LPS8N using one of the following methods:

- Using the WAN port of the LPS8N
- As a WiFi client
- Using the built-in 4G modem

## Registering Gateway

In the The Things Stack console, go to the 'Gateways' tab and click the '**Register Gateway**' button to register the gateway and make sure to select these three settings below:

{{< figure src="../register-lbs.png" alt="" width="80%">}}

When the keys popup shows after registering, download the keys, and click "I have downloaded the keys".

{{< figure src="../register-lbs-keys.png" alt="" >}}

{{< note >}}
If you have already registered your gateway and forgot to check the boxes, or if you have been using UDP and want to switch to {{% lbs %}}, [create API keys manually](https://www.thethingsindustries.com/docs/gateways/concepts/lora-basics-station/cups/#create-separate-cups-and-lns-api-keys).
{{< /note >}}

### Configuring Gateway

In the Gateway's Web UI, navigate to **LoRaWAN > LoRaWAN** in the top menu.

On this page, configure the following settings:

- **Service Provider**: `The Things Network -- Basic Station`
- **CUPS Server URI**: your server address with :443 (e.g. `https://eu1.cloud.thethings.network:443`)
- **CUPS Authorization Key**: The CUPS key you just downloaded.
- **LNS Authorization Key**: the LNS key you just downloaded.
- **CUPS Certificate Authority**: Install a certificate by clicking on the `DEFAULT-CERTIFICATE` button.

**Note**: When entering the keys, the **"Authorization: Bearer"** field should not be entered in the TTN Basics Station configuration of the gateway.

{{< figure src="../lbs-key.png" alt="" >}}

{{< figure src="../lbs-config.png" alt="" >}}

Once you've done all that, click **Save & Apply**.

Finally, test your connection by going to the LPS8N's **Overview** page. You should see the gateway status changed to **connected** (indicated by a blue dot) or observe the frequently updating **Last seen** time. Also, see the **Live data** section for various gateway related activities.

{{< figure src="../gateway-add-ok.png" alt="Gateway add OK" >}}

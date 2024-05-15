---
title: "Connect Dragino LPS8N with Lora Basics™ Station"
description: ""
---

This section contains instructions for connecting the Dragino LPS8N LoRaWAN® gateway to {{% tts %}} using [{{% lbs %}}]({{< ref "/gateways/concepts/lora-basics-station" >}}).

If you have not yet registered your gateway, follow [Registering Gateway](#registering-gateway)

If you have already registered your gateway, follow [Registering with API key](#registering-with-api-key)

<!--more-->

## Registering Gateway

In the The Things Stack console, go to the 'Gateways' tab and click the '**Register Gateway**' button to register the gateway and make sure to select the three settings below:

{{< figure src="../register-lbs.png" alt="" width="80%">}}

When the keys popup shows, download the keys, and click "I have downloaded the keys".

{{< figure src="../register-lbs-keys.png" alt="" >}}

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

## Registering with API key

If you have forgotten to check the checkboxes for Basics Station at register or if you already have the gateway registered you can still change from UDP to LBS by manually creating the API keys.

In the Stack console, on the Gateway's page, go to **API Keys** in the left-hand menu.

Create an API key for CUPS with the following rights:

{{< figure src="../api-cups.png" alt="" >}}

And create an API key for LNS with the following rights: 

{{< figure src="../api-lns.png" alt="" >}}

Once you have created the API keys, go to **General Settings** in the left-hand menu, and in the **LoRa Basics Station LNS Authentication Key** field, paste the LNS API key you generated in the previous step and click on **Save Changes**.

{{< figure src="../gw-lns.png" alt="" >}}

### Configuring Gateway

In the Gateway's Web UI, navigate to **LoRaWAN > LoRaWAN** in the top menu.

On this page, configure the following settings:

- **Service Provider**: `The Things Network -- Basic Station`
- **CUPS Server URI**: your server address with :443 (e.g. `https://eu1.cloud.thethings.network:443`)
- **CUPS Authorization Key**: The CUPS key you just created.
- **LNS Authorization Key**: the LNS key you just created.

Finally, install a certificate by clicking on `DEFAULT-CERTIFICATE`

{{< figure src="../lbs-config.png" alt="" >}}

Once you've done all that, click **Save & Apply**.

Finally, test your connection by going to the LPS8N's **Overview** page. You should see the gateway status changed to **connected** (indicated by a blue dot) or observe the frequently updating **Last seen** time. Also, see the **Live data** section for various gateway related activities.

{{< figure src="../gateway-add-ok.png" alt="Gateway add OK" >}}
---
title: "Connect the Wifx L1 with Lora Basics™ Station"
description: ""
---

This section contains instructions for connecting the Wifx L1 gateway to {{% tts %}} using [{{% lbs %}}]({{< ref "/gateways/concepts/lora-basics-station" >}}).

<!--more-->

## Enable the Basic Station

Go to the **LoRa > Forwarder** page.

{{< figure src="../wifx-l1-lora-settings-forwarder.png" alt="Wifx L1 LoRa forwarder page" >}}

On the top right, click the **Edit** button to choose a forwarder.

{{< figure src="../wifx-l1-lora-settings-forwarder-change-list.png" alt="Wifx L1 LoRa forwarder selection" class="plain" >}}

In the list, select **LoRa Basic Station** and press **Apply**.

{{< figure src="../wifx-l1-lora-settings-forwarder-change-bs.png" alt="Wifx L1 LoRa forwarder Basic Station selection" class="plain" >}}

## Configure the LNS

Scroll down to the **Configuration** section and enable the **LoRaWAN Network Server** option.

{{< figure src="../wifx-l1-lora-settings-bs.png" alt="Wifx L1 LoRa forwarder Basic Station LNS" >}}

Configure the **Address** with the [Server Address]({{< ref "/concepts/server-addresses" >}}) of your deployment, and **Port** with LNS port `8887`.

Enable the **Secured TLS connection** and select the **Use local root certificates** option. If you need to use a certificate specific to your infrastructure (for on-premise installations), use the **Use certificate file** option instead and upload the certificate.

Enable the **Client authentication**, select **Use token**, and set the previously saved API key in the **Authentication token** field. This key was shown to you as you created it when [registering the gateway]({{< ref "/gateways/concepts/adding-gateways#create-gateway-api-key" >}}). If you did not copy the key, you can delete it and create a new one.

{{< figure src="../wifx-l1-lora-settings-bs-lns.png" alt="Wifx L1 LoRa forwarder Basic Station LNS" class="plain" >}}

Press the **SAVE** button. In the **Control** pane above, press **START** and check the logs in the dedicated pane.

{{< figure src="../wifx-l1-lora-settings-bs-control-logs.png" alt="Wifx L1 LoRa forwarder Basic Station start" >}}

You should see a bunch of messages, one of which indicates success :

```log
[TCE:INFO] Infos: fcc2:3dff:feab:cdef muxs-::0 wss://wifx.eu1.cloud.thethings.industries:8887/traffic/eui-FCC23DFFFEABCDEF
```

If the connection fails, you will get this kind of message:

```log
[AIO:ERRO] [-1] WS connect failed: NET - Failed to get an IP address for the given hostname
[TCE:ERRO] TC connect failed - URI: wss://wrong-tenant.eu1.cloud.thethings.industries:8887
```

Please check the configuration and the **LoRa Network Server** status. After a configuration change, always restart the Basic Station with the **Restart** button to make it effective.

If the Basic Station crashes for any reason, it will be automatically restarted if the **Auto-start** option is enabled.

## CUPS

Go to the **Configuration** section and enable **Configuration and Update Server**.

{{< figure src="../wifx-l1-lora-settings-bs.png" alt="Wifx L1 LoRa forwarder Basic Station LNS" >}}

To connect the gateway via CUPS protocol, follow the instructions for [Connecting CUPS]({{< ref "/gateways/concepts/lora-basics-station/cups" >}}).

Press the **SAVE** button. In the **Control** pane above, press **START** and check the logs in the dedicated pane.

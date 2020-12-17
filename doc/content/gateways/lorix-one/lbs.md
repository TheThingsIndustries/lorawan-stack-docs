---
title: "Connect LORIX One with Lora Basics™ Station"
description: ""
---

This section contains instructions for connecting to {{% tts %}} using {{% lbs %}}.

<!--more-->

Go to the **LoRa > Settings page > Forwarder tab**.

{{< figure src="../lorix-one-lora-settings-forwarder.png" alt="LORIX One LoRa forwarder page" >}}

On the top right, click the **Edit** button to choose a forwarder.

{{< figure src="../lorix-one-lora-settings-forwarder-change-list.png" alt="LORIX One LoRa forwarder selection" class="plain" >}}

In the list, select **LoRa Basic Station** and press apply.

{{< figure src="../lorix-one-lora-settings-forwarder-change-bs.png" alt="LORIX One LoRa forwarder Basic Station selection" class="plain" >}}

On the new page, scroll down to the **LoRaWAN Network Server** section and enable it.

{{< figure src="../lorix-one-lora-settings-bs.png" alt="LORIX One LoRa forwarder Basic Station LNS" >}}

Follow the instructions for [Connecting LNS]({{< ref "/gateways/lora-basics-station/lns" >}}).

If using CUPS, following the instructions for [Connecting CUPS]({{< ref "/gateways/lora-basics-station/cups" >}}).

{{< figure src="../lorix-one-lora-settings-bs-lns.png" alt="LORIX One LoRa forwarder Basic Station LNS" class="plain" >}}

Press the **save** button. In the **Control** pane above, press **start** and check the logs in the dedicated pane.

{{< figure src="../lorix-one-lora-settings-bs-control-logs.png" alt="LORIX One LoRa forwarder Basic Station start" >}}

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

{{< note >}} If the Basic Station crashes for any reason, it will be automatically restarted if the **Auto-start** option is enabled. {{</ note >}}

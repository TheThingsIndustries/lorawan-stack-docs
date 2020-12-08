---
title: "Configure UDP Packet Forwarder"
description: ""
---

This section contains instructions for connecting the Multitech Conduit AEP to {{% tts %}} using the UDP Packet Forwarder.

<!--more-->

{{< note >}} The UDP Packet Forwarder does not correctly handle unstable connectivity and has no security. It also does not support configuration of frequency plans from the Network Server. {{% tts %}} supports {{% lbs %}}, which solves all of these problems, so please [use that instead]({{< relref "lbs" >}}). {{</ note >}}

## Configuration

To configure the gateway for the correct channel plans, you need a `global_conf.json`.

The Gateway Configuration Server can be used to retrieve a proper `global_conf.json` configuration file for your gateway. Follow instructions [here]({{< relref src="../semtech-udp-packet-forwarder" >}}).

Once the `global_conf.json` file is generated, you will need to add this to your gateway. In a web browser, open the gateway’s configuration page by navigating to its IP Address obtained from the network it is connected to. Once logged in, you can configure the gateway to connect to {{%tts%}} by following the steps below:

Click on **LoRaWAN<sup>®</sup>** in the menu on the left. It opens the Gateway&apos;s configuration page.

{{< figure src="../main-menu.png" alt="MultiTech Conduit gateway home page" >}}

Under **Network Settings**, select the mode as &quot;Packet Forwarder&quot;.

{{< figure src="../packet-forwarder-menu.png" alt="MultiTech Conduit packet forwarder settings" >}}

On the right side of the &quot;LoRa Packet Forwarder Configuration&quot; section, you can find &quot;Manual Configuration &quot;. Click on it to setup the channel plan manually.

{{< figure src="../manual-config.png" alt="Switch to manual configuration mode" >}}

The above step will lead you to the gateway configuration editor tagged as &quot;Config&quot;.

{{< figure src="../manual-config-2.png" alt="Manual Configuration" >}}

Copy the contents of the `global_conf.json` file downloaded earlier and paste them in the gateway console configuration editor.

Once pasted, modify the value of `clksrc` to set it to `0`.

Click on **Submit** to save the configuration.

Now, click on **Save and Restart** from the menu.

{{< figure src="../save-and-restart.png" alt="Saving the Network Interfaces Configuration" >}}

You will be prompted to confirm the restart. Choose **OK** to proceed.

{{< figure src="../confirm.png" alt="Configuration restart prompt" >}}

This will apply the custom settings and reboot the gateway. If all the steps have been followed correctly, your gateway will now connect to {{%tts%}}.

{{< note >}} To know more about other features of the MultiTech Conduit gateway, you can refer to the **mPower Edge AEP software guide** on the [Multitech Website](http://www.multitech.net/developer/products/multiconnect-conduit-platform/conduit/). {{</ note >}}

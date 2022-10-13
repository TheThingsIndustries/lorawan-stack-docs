---
title: "Connect Laird Sentrius™ RG1xx with LoRa Basics™ Station"
description: ""
---

This section contains instructions for connecting to {{% tts %}} using [{{% lbs %}}]({{< ref "/gateways/concepts/lora-basics-station" >}}).

<!--more-->

To set up LoRa packet forwarding on the gateway, follow these steps.

Click the **LoRa** tab in the main menu.

Click on the **Forwarder** tab.

Choose **Semtech Basic Station** as the **Mode**.

{{< figure src="../basic-station.png" alt="Create new server" class="plain" >}}

## CUPS

To connect the gateway via CUPS protocol, follow the instructions for [Connecting CUPS]({{< ref "/gateways/concepts/lora-basics-station/cups" >}}).

Fill the **CUPS Server** in the **Server Configuration** with the [CUPS Server Address]({{< ref "/gateways/concepts/lora-basics-station/cups#cups-server-address" >}}).

{{< figure src="../cups-server-configuration.png" alt="Create new server" class="plain" >}}

Click on the **Choose File** button to upload the **Server Certificate File** and **key File** with the [CUPS Server Certificate]({{< ref "/gateways/concepts/lora-basics-station/cups#cups-server-certificate--cups-trust" >}}) and [CUPS Key File]({{< ref "/gateways/concepts/lora-basics-station/cups#cups-key-file" >}}) respectively.

{{< figure src="../cups-certificate-configuration.png" alt="Create new server" class="plain" >}}

Click on the **Upload Certificates** button.

Click **Update**. If your configuration was successful, your gateway will connect to {{% tts %}} after a couple of seconds.

## LNS

To connect the gateway via LNS protocol, follow the instructions for [Connecting LNS]({{< ref "/gateways/concepts/lora-basics-station/lns" >}}).

Fill the **LNS Server** in the **Server Configuration** with the [LNS Server Address]({{< ref "/gateways/concepts/lora-basics-station/lns#lns-server-address" >}}).

{{< figure src="../lns-server-configuration.png" alt="Create new server" class="plain" >}}

Click on the **Choose File** button to upload the **Server Certificate File** and **key File** with the [LNS Server Certificate]({{< ref "/gateways/concepts/lora-basics-station/lns#lns-server-certificate--lns-trust" >}}) and [LNS Key File]({{< ref "/gateways/concepts/lora-basics-station/lns#lns-key-file" >}}) respectively.

{{< figure src="../lns-certificate-configuration.png" alt="Create new server" class="plain" >}}

Click on the **Upload Certificates** button.

Click **Update**. If your configuration was successful, your gateway will connect to {{% tts %}} after a couple of seconds.

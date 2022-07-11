---
title: "Connect RAK7240 in Basic Station Mode"
description: ""
weight: 2
aliases: ["/gateways/rak-7240/bs.md"]
---

RAK7240's **Basic Station** mode utilizes the [{{% lbs %}}]({{< ref "/gateways/concepts/lora-basics-station" >}}) protocol. As part of the Basic Station mode, RAK7240 supports two {{% lbs %}} subprotocols - [LNS]({{< ref "/gateways/concepts/lora-basics-station/lns" >}}) and [CUPS]({{< ref "/gateways/concepts/lora-basics-station/cups" >}}). Follow this section to learn how to connect to {{% tts %}} Network Server using this mode.

<!--more-->

To configure the gateway to use LNS or CUPS, first navigate to **LoRa Network &#8594; Network Settings &#8594; LoRa Basic Station**.

## CUPS

To connect the gateway to via CUPS protocol, follow the instructions for [Connecting CUPS]({{< ref "/gateways/concepts/lora-basics-station/cups" >}}).

Select **TLS Server Authentication and Client Token** for the **Authentication Mode**. Copy your CUPS Server Certificate and paste it in the **trust** field. Copy the [CUPS Key File]({{< ref "/gateways/concepts/lora-basics-station/cups#cups-key-file" >}}) and paste it in the **token** field. 

## LNS

To connect the gateway to via LNS protocol, fill in the info in the **LNS Server** section instead.

Follow the instructions for [Connecting LNS]({{< ref "/gateways/concepts/lora-basics-station/lns" >}}).

Select **TLS Server Authentication and Client Token** for the **Authentication Mode**. Copy your LNS Server Certificate and paste it in the **trust** field. Copy the [LNS Key File]({{< ref "/gateways/concepts/lora-basics-station/lns#lns-key-file" >}}) and paste it in the **token** field.

Whichever subprotocol you have configured, press **Save & Apply** and your gateway should appear as connected in {{% tts %}} Console. 

{{< figure src="../cups-lns.png" alt="Configuring CUPS and LNS" class="plain" >}}

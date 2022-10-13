---
title: "Connect RAK7240 in Packet Forwarder Mode"
description: ""
weight: 3
---

RAK7240's **Packet Forwarder** mode utilizes the [{{% udp-pf %}}]({{< ref "/gateways/concepts/udp" >}}) protocol. Follow this section to learn how to connect to {{% tts %}} Network Server using this mode.

<!--more-->

{{< note >}} Packet Forwarder mode also includes an option to use the gateway as an MQTT bridge. This allows RAK7240 to connect to its built-in LoRa Network Server, or to an external server. However, {{% tts %}} is not supported (yet) as an external LoRaWAN network server by this gateway. {{</ note >}}

To configure the gateway to use the {{% udp-pf %}}, navigate to **LoRa Network &#8594; Network Settings &#8594; Packet Forwarder Settings**.

## Semtech UDP GWMP Protocol

To use the legacy {{% udp-pf %}}, select **Semtech UDP GWMP Protocol** in the **Protocol** drop-down list. 

Enter {{% tts %}} address in the **Server Address** field. 

Fill in the **Server Port Up** and **Server Port Down** fields with value `1700`.

Other settings can retain their default values. For more information about these parameters, please visit the [Packet Forwarder mode documentation](https://docs.rakwireless.com/Knowledge-Hub/Learn/WEB-Management-Platform/#packet-forwarder).

{{< figure src="../udp-pf.jpg" alt="Semtech UDP GWMP Protocol" class="plain" >}}

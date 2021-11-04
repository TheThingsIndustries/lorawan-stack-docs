---
title: "Connect LORIX One with UDP Packet Forwarder"
description: ""
---

This section contains instructions for connecting to {{% tts %}} using the [{{% udp-pf %}}]({{< ref "/gateways/udp" >}}).

<!--more-->

Select the **UDP Packet Forwarder** in the forwarder selection list

In the **Configuration** pane, click **Edit** (blue button with a pencil)

On the **Global** tab of the configuration editor, set the following configuration:

- **Address**: Address of your {{% tts %}} deployment. See [Server Addresses]({{< ref "getting-started/server-addresses" >}}).
- **Up port**: UDP upstream port of the Gateway Server, typically `1700`.
- **Down port**: UDP downstream port of the Gateway Server, typically `1700`.


Save the configuration and start the packet forwarder.

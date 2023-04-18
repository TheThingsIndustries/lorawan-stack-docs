---
title: Troubleshooting
description: ""
---


This section provides help for common issues and frequently asked questions you may have when using Packet Broker. 

<!--more-->

## My tenant is not receiving traffic from Packet Broker.

We recommend the following:

- Check if there are any incidents on the Packet Broker end. See [Packet Broker Status Page]({{< ref "/getting-started/packet-broker#status-page" >}}).
- Make sure your tenant is registered in Packet Broker. See [Configure Packet Broker section]({{< ref "/getting-started/packet-broker/configure" >}}).
- Double check if routing policies are properly configured. See [Routing Policies]({{< ref "/getting-started/packet-broker/configure/routing-policies" >}}).

## My gateway is not visible in the Packet Broker Mapper API.

For self-hosted deployments ({{% tts %}} Enterprise and Open Source), users need to configure the Packet Broker Mapper address in the [Packet Broker Agent]({{< ref "/getting-started/packet-broker/connect#configure-packet-broker-agent" >}}). Also, the Gateway Server needs to be configured to forward traffic to upstream hosts (see [Gateway Server Forwarding Options]({{< ref "/reference/configuration/gateway-server#forwarding-options" >}})).

Double check that your [Gateway Visibility Settings]({{< ref "/getting-started/packet-broker/configure/gateway-visibilities" >}}) are properly configured.

Your gateway's status and location have to be publicly available. To configure this in {{% tts %}} Console, navigate to the **General settings** tab in your gateway's overview page, and check the **Make status public** and **Make location public** boxes.

{{< figure src="../status-location-public.png" alt="Set gateway status and location to public" >}}

To set gateway status and location to public using the CLI, use the following commands:

```bash
ttn-lw-cli gateways set $GTW_ID --status-public --location-public
```

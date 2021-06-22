---
title: "Troubleshooting Gateways"
description: ""
aliases: "/gateways/adding-gateways/troubleshooting"
weight: -2
---

This section provides help for common issues and frequently asked questions you may have when adding gateways. 

<!--more-->

## How do I see gateway events?

Gateway event logs can be found in the console in the gateway's general information page. See [Working with Events]({{< ref "getting-started/events" >}}) for other ways of subscribing to events.

## How does {{% tts %}} console know whether a gateway is connected?

For both [UDP]({{< ref "gateways/udp" >}}) and [{{% lbs %}}]({{< ref "gateways/lora-basics-station" >}}) gateways, {{% tts %}} creates a `GatewayConnectionStats` database entry when a gateway connects and removes that entry when the gateway disconnects. The console checks whether this database entry exists and shows the gateway as connected or disconnected accordingly.

The mechanism for determining whether a gateway remains connected differs for UDP and LBS gateways:

**For LBS gateways:**

LBS uses a TCP keepalive to indicate that the connection is still alive.

**For UDP gateways:**

UDP is a connectionless protocol. {{% tts %}} expects a UDP gateway to occasionally send a `pull_data` message. This is typically every 5 seconds. By default, if a gateway misses 3 of these consecutively (15s) then the gateway is shown as disconnected and this indicates there’s potentially an issue with gateway connectivity.

## My gateway is shown as connected in the console but I don’t see any events (including the gateway connection stats) in the live data. What do I do?

We have observed this with **UDP gateways only**. As the {{% udp-pf %}} has many security and scalability drawbacks, we recommend using [{{% lbs %}}]({{< ref "gateways/lora-basics-station" >}}) if possible.

Otherwise, first try restarting the gateway. Sometimes, the gateway reports status while failing to forward packets, and this may fix that.

Finally, check the following in the {{% tts %}} console:

- Did you select **Require authenticated connection** in gateway settings? This prevents UDP gateways from working (and for gateways connected with Basic Station or MQTT, this prevents unauthenticated connections)

## My gateway is offline, but still shows as connected in the console. Why?

If you are using a UDP gateway, it is possible that another gateway with the same EUI is transmitting data. UDP has no authentication, so there is no way to prevent this from happening, although it is unlikely that another gateway with the same EUI will be registered on the same network server. If this is the case, the solutions are

- Use the {{% lbs %}} packet forwarder
- Change your gateway EUI

## My gateway won't connect. What do I do?

Check the following in **{{% tts %}} console:**

- Does the Gateway EUI in the console match with the EUI of the gateway?
- Does the Frequency Plan selected match with the configuration in the gateway? Refer to the [Frequency Plans section]({{< ref "/reference/frequency-plans" >}}) for plans that are officially supported by The Things Stack
- Did you select **Require authenticated connection** in gateway settings? This prevents UDP gateways from working (and for gateways connected with Basic Station or MQTT, this prevents unauthenticated connections)
- Do you see any warnings/errors in the Gateway live data section?

Check the following in your **Gateway configuration:**

**For UDP gateways:**

- Does the Gateway Server address match with the address mentioned in the gateway overview in {{% tts %}} Console?
- Are the upstream and downstream ports set to 1700?

**For LoRa Basics™ Station Gateways:**

- Are the CUPS Server Address and LNS Server Address correctly configured?
- Are the CUPS and LNS ports configured with 443 and 8887 respectively?
- Are API Keys assigned with necessary rights?
- Did you select the relevant root certificates to configure?
- Is the Backhaul used in the Gateway stable?
- Does the Gateway run with the latest firmware?
- Does the Frequency Plan selected match with the configuration in the gateway? Refer to the [Frequency Plans section]({{< ref "/reference/frequency-plans" >}}) for plans that are officially supported by The Things Stack

## My gateway is shown as disconnected after recreating with the same Gateway EUI. What do I do?

If a gateway is deleted when it’s still connected, the connection statistics for the gateway will continue to exist under the old ID until the gateway actually reconnects.

If you are using **{{% lbs %}} or another TCP based gateway** then a simple restart/reconnection of the gateway will clear the statistics of the old ID and you create an entry for the new ID.

If you are using a **UDP gateway** then there is no concept of a connection. {{% tts %}} assumes the connection is alive until no messages are received for the duration of the `DownlinkPathExpires`and `ConnectionExpires` settings. In this case, your gateway must be turned off for at least as long as the `ConnectionExpires` interval (default 1 minute) for {{% tts %}} to mark the gateway as disconnected clear the statistics for the old ID.

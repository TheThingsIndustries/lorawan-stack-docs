---
title: "Troubleshooting Gateways"
description: ""
aliases: "/gateways/adding-gateways/troubleshooting"
weight: -2
---

This section provides help for common issues and frequently asked questions you may have when adding gateways. 

<!--more-->

## What is my server address?

This is the address you use to access {{% tts %}}. See [Server Addresses]({{< ref "getting-started/server-addresses" >}}).

For **{{% lbs %}}:**

CUPS uses the URI: `https://<server-address>:443`

LNS uses the URI: `wss://<server-address>:8887`

For **{{% udp-pf %}}:**:

Use `<server-address>`. The **Up Port** and **Down Port** are typically **1700**.

## How do I find the CA Trust?

See the [Root Certificates Reference]({{< ref "/reference/root-certificates" >}}).

## How do I use an API Key for LBS gateways?

Use the following commands to generate a `api.key` file which is correctly formatted ({{% lbs %}} requires that `.key` files end with a CRLF character).

```bash
$ export API_KEY="your-api-key"
$ echo "Authorization: Bearer $API_KEY" | perl -p -e 's/\r\n|\n|\r/\r\n/g'  > api.key
```

Upload or copy the contents of this file in to your gateway as the **Gateway Key**.

See the [{{% lbs %}} Authorization documentation](https://lora-developers.semtech.com/resources/tools/lora-basics/lora-basics-for-gateways/?url=authmodes.html) or your manufacturers guidelines for additional information.

## Is an API Key required?

**{{% lbs %}} CUPS** requires an API key for your gateway with the following rights:

- View gateway information
- Edit basic gateway settings
- Retrieve secrets associated with a gateway

**{{% lbs %}} LNS** requires an API Key with the following rights:

- Link as Gateway to a Gateway Server for traffic exchange, i.e. write uplink and read downlink

**UDP gateways** are unsecured and require no API key.

## How do I see gateway events?

Gateway event logs can be found in the console in the gateway's general information page. See [Working with Events]({{< ref "getting-started/events" >}}) for other ways of subscribing to events.

## How does {{% tts %}} console know whether a gateway is connected?

For both [UDP]({{< ref "gateways/udp" >}}) and [{{% lbs %}}]({{< ref "gateways/lora-basics-station" >}}) gateways, {{% tts %}} creates a `GatewayConnectionStats` database entry when a gateway connects and removes that entry when the gateway disconnects. The console checks whether this database entry exists and shows the gateway as connected or disconnected accordingly.

The mechanism for determining whether a gateway remains connected differs for UDP and LBS gateways:

**For LBS gateways:**

LBS uses a TCP keepalive to indicate that the connection is still alive.

**For UDP gateways:**

UDP is a connectionless protocol. {{% tts %}} expects a UDP gateway to occasionally send a `pull_data` message. This is typically every 5 seconds. By default, if a gateway misses 3 of these consecutively (15s) then the gateway is shown as disconnected and this indicates there’s potentially an issue with gateway connectivity.

## My gateway is shown as connected in the console but I don’t see any events (including the gateway connection stats). What do I do?

We have observed this with **UDP gateways only**. We recommend using [{{% lbs %}}]({{< ref "gateways/lora-basics-station" >}}) instead if possible, as the {{% udp-pf %}} has many security and scalability drawbacks.

Check the following in the {{% tts %}} console:

- Did you select **Require authenticated connection** in gateway settings? This prevents UDP gateways from working (and for gateways connected with Basic Station or MQTT, this prevents unauthenticated connections)

Otherwise, try restarting the gateway. Sometimes, the gateway reports its status but still fails to forward packets, and this may fix that.

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

- Are the CUPS server address and LNS server address correctly configured? See [What's my server address](#whats-my-server-address).
- Are the CUPS and LNS ports configured with 443 and 8887 respectively? See [What's my server address](#whats-my-server-address).
- Are API keys assigned with necessary rights? See [Is an API key required](#is-an-api-key-required)
- Did you select the correct root certificates? See the [Root Certificates Reference]({{< ref "/reference/root-certificates" >}}).
- Is the backhaul used in the Gateway stable?
- Does the Gateway run with the latest firmware?
- Does the Frequency Plan selected match with the configuration in the gateway? Refer to the [Frequency Plans section]({{< ref "/reference/frequency-plans" >}}) for plans that are officially supported by The Things Stack
- Are both CUPS and LNS are configured? There is no need to configure both, as CUPS will automatically configure LNS. Follow the instructions for [configuring CUPS]({{< relref "cups" >}}).

Check your manufacturer's documentation to access the gateway logs on your gateway, which will help to diagnose the issue.

## My gateway is shown as disconnected after recreating with the same Gateway EUI. What do I do?

If a gateway is deleted when it’s still connected, the connection statistics for the gateway will continue to exist under the old ID until the gateway actually reconnects.

If you are using **{{% lbs %}} or another TCP based gateway** then a simple restart/reconnection of the gateway will clear the statistics of the old ID and you create an entry for the new ID.

If you are using a **UDP gateway** then there is no concept of a connection. {{% tts %}} assumes the connection is alive until no messages are received for the duration of the `DownlinkPathExpires`and `ConnectionExpires` settings. In this case, your gateway must be turned off for at least as long as the `ConnectionExpires` interval (default 1 minute) for {{% tts %}} to mark the gateway as disconnected clear the statistics for the old ID.

## No downlinks are reaching my UDP gateway. Why?

With UDP gateways, if uplink messages are reaching {{% tts %}}, that does not mean the downlink messages are going to be received correctly by the gateway. 

The {{% udp-pf %}} sends a `PULL_DATA` request every ~5 seconds to pull the data scheduled for a downlink transmission on {{% tts %}}.

If downlink messages are reaching your gateway, the {{% udp-pf %}} should be sending `PULL_ACK` messages with a reasonable latency, usually way lower than 500 ms. If this latency is high, pulling the downlink data will fail. One of the drawbacks of using the {{% udp-pf %}} is that it does not have an implemented mechanism to detect if pulling the downlink data fails, so your data might end up lost. 

Common reasons for having latency issues between the gateway and {{% tts %}} cluster are that the gateway is geographically far from the cluster, and using cellular or satellite backhauls for gateways.

Try solving this issue by: 

- Checking your internet connection
- Using {{% tts %}} cluster closest to the location of your gateway

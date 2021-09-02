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

## I Get a "ID Already Taken" Error When Adding a Gateway.

Another gateway is already registered with this ID. This gateway may have been deleted already, but {{% tts %}} reserves previously used IDs for [security reasons]({{< ref "reference/id-eui-constraints" >}}).

This gateway may also be registered by another user, but you are not able to see gateways registered by other users if you are not an administrator (e.g. if you are using {{% tts %}} Community Edition).

To solve this, use a different gateway ID. If you are an administrator and wish to reuse a deleted ID, see [Purging Entities]({{< ref "reference/purge" >}}).

## I Get a "Gateway with EUI is Already Registered" Error When Adding a Gateway.

Another gateway is already registered with the same Gateway EUI. This gateway may be registered by another user, but if you are not an administrator (e.g if you are using The Things Stack Community Edition) you will not be able to see gateways registered by other users.

If the gateway is registered with the same EUI in some other tenant, the error will reflect that as well.

First, double check that you have entered the EUI correctly. Then, double check that you have not already registered the gateway. Finally, if you have purchased the gateway secondhand, it is possible someone before you registered the gateway. Contact them to unregister it. If they are unavailable, contact [The Things Industries](mailto:info@thethingsindustries.com).

## What is Radio Configuration?

There are three types of radio configuration. All types are typically defined in the same `station.conf` file.

**Hardware Specific**: configuration unique to the hardware. This is defined in a file shipped with the gateway and should not be modified. Examples are `clksrc` and RSSI offset.

**LoRaWAN Regional**: configuration according to LoRaWAN Regional Parameters. This is common to all gateways using the same Regional Parameters, and is provided by the network server automatically when using {{% lbs %}}. It must be configured manually for UDP gateways. Examples are data rates and mandatory channels.

**User Defined**: configuration which the user is free to choose. Examples are non-mandatory channels and sub-bands.

For an example configuration file, see [Semtech's {{% lbs %}} documentation](https://doc.sm.tc/station/gw_v1.5.html#single-board-sample-configuration).

## What modes of authentication are supported?

{{% lbs %}} defines bi-directional authentication at the server ({{% tts %}}) and client (gateway). The server is authenticated with a trusted certificate and the client is authenticated either by HTTP token or certificate. See [Semtech's documentation](https://doc.sm.tc/station/authmodes.html#authentication-modes).

## How is the server authenticated?

The server is authenticated by a certificate signed by a Root Certificate Authority. The Root CA certificate is installed in the client (gateway). This is set using the `cups.trust` or `tc.trust` file for CUPS or LNS respectively.

## How is my gateway authenticated?

Currently, {{% tts %}} only supports [TLS Server Authentication and Client Token](https://doc.sm.tc/station/authmodes.html#tls-server-authentication-and-client-token). The gateway is authenticated using an HTTP header containing an API key generated in {{% tts %}}. See [Configure CUPS]({{< ref "gateways/lora-basics-station/cups#configure-gateway" >}}) for instructions for setting this API key for CUPS.

## Should I set CUPS or LNS credentials?

These are two different types of {{% lbs %}} connections. Since CUPS automatically also configures LNS, we recommend you configure CUPS and leave LNS blank.

## Where can I learn more about {{% lbs %}}

**Gateway Demo**: https://www.youtube.com/watch?v=LGFFxPOuSJw

**Official {{% lbs %}} documentation**: https://doc.sm.tc/station/

**Forum**: https://www.thethingsnetwork.org/forum/

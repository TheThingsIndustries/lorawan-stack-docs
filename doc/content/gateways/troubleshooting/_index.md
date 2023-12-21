---
title: "Troubleshooting Gateways"
description: ""
aliases: "/gateways/adding-gateways/troubleshooting"
weight: -1
---

This section provides help for common issues and frequently asked questions you may have when adding gateways.

<!--more-->

## What is my server address?

This is the address you use to access {{% tts %}}. See [Server Addresses]({{< ref "the-things-stack/concepts/server-addresses" >}}).

For {{% lbs %}}:

- CUPS uses the URI: `https://<server-address>:443`

- LNS uses the URI: `wss://<server-address>:8887`

For {{% udp-pf %}} use `<server-address>`. The **Up Port** and **Down Port** are typically **1700**.

## Which packet forwarders does {{% tts %}} support?

Read the [Packet Forwarders section]({{< ref "/reference/packet-forwarder" >}}).

## Where can I learn more about {{% lbs %}}?

**Gateway Demo**: https://www.youtube.com/watch?v=LGFFxPOuSJw

**Official {{% lbs %}} documentation**: https://doc.sm.tc/station/

**Forum**: https://www.thethingsnetwork.org/forum/

## What is {{% lbs %}} Radio Configuration?

There are three types of radio configuration. All types are typically defined in the same `station.conf` file.

**Hardware Specific** is a configuration unique to the hardware. This is defined in a file shipped with the gateway and should not be modified. Examples are `clksrc` and RSSI offset.

**LoRaWAN Regional** is a configuration according to LoRaWAN® Regional Parameters. This is common to all gateways using the same Regional Parameters, and is provided by the network server automatically when using {{% lbs %}}. It must be configured manually for UDP gateways. Examples are data rates and mandatory channels.

**User Defined** is a configuration which the user is free to choose. Examples are non-mandatory channels and sub-bands.

For an example configuration file, see [Semtech's {{% lbs %}} documentation](https://doc.sm.tc/station/gw_v1.5.html#single-board-sample-configuration).

## How do I see gateway events?

Gateway event logs can be found in the Live Data tab in the gateway's general information page. See [Working with Events]({{< ref "the-things-stack/management/events" >}}) for other ways of subscribing to events.

## How does {{% tts %}} Console know whether a gateway is connected?

For both [{{% udp-pf %}}]({{< ref "/gateways/concepts/udp" >}}) and [{{% lbs %}}]({{< ref "gateways/concepts/lora-basics-station" >}}) gateways, {{% tts %}} creates a `GatewayConnectionStats` database entry when a gateway connects and removes that entry when the gateway disconnects. The Console checks whether this database entry exists and shows the gateway as connected or disconnected accordingly.

The mechanism for determining whether a gateway remains connected differs for UDP and {{% lbs %}} gateways.

{{% lbs %}} uses a TCP keepalive to indicate that the connection is still alive.

UDP is a connectionless protocol. {{% tts %}} expects a UDP gateway to occasionally send a `PULL_DATA` message. This is typically every 5 seconds. By default, if a gateway misses 3 of these consecutively (15s) then the gateway is shown as disconnected and this indicates there’s potentially an issue with gateway connectivity.

## My gateway won't connect. What do I do?

Check the following in {{% tts %}} Console:

- Does the Gateway EUI in the console match with the EUI of the gateway?
- Does the Frequency Plan selected match with the configuration in the gateway? Refer to the [Frequency Plans section]({{< ref "/reference/frequency-plans" >}}) for plans that are officially supported by {{% tts %}}.
- Did you select **Require authenticated connection** in gateway settings? This prevents UDP gateways from working (and for gateways connected with Basic Station or MQTT, this prevents unauthenticated connections).
- Do you see any warnings/errors in the Gateway live data section?

Check the following in your gateway configuration.

For {{% udp-pf %}} gateways:

- Does the Gateway Server address match with the address mentioned in the gateway overview in {{% tts %}} Console?
- Are the upstream and downstream ports set to 1700?

For {{% lbs %}} gateways:

- Are the CUPS server address and LNS server address correctly configured? See [What's my server address](#whats-my-server-address).
- Are the CUPS and LNS ports configured with 443 and 8887 respectively? See [What's my server address](#whats-my-server-address).
- Are API keys assigned with necessary rights? See [Is an API key required](#is-an-api-key-required).
- Did you select the correct root certificates? See the [Root Certificates Reference]({{< ref "/reference/root-certificates" >}}).
- Is the backhaul used in the Gateway stable?
- Does the Gateway run with the latest firmware?
- Does the Frequency Plan selected match with the configuration in the gateway? Refer to the [Frequency Plans section]({{< ref "/reference/frequency-plans" >}}) for plans that are officially supported by {{% tts %}}.
- Are both CUPS and LNS are configured? There is no need to configure both, as CUPS will automatically configure LNS. Follow the instructions for [configuring CUPS]({{< relref "cups" >}}).

Check your manufacturer's documentation to access the gateway logs on your gateway, which will help to diagnose the issue.

## My gateway's packet forwarder logs show "ERROR: [main] failed to start the concentrator".

This error indicates that there might be a hardware issue at the gateway level. It is recommended to contact the gateway manufacturer for further support in this case.

## When the connection on the main interface goes down, my gateway gets disconnected and it does not reconnect through the backup interface.

Please try restarting your gateway's packet forwarder.

## My gateway is shown as connected in the Console but I don’t see any events (including the gateway connection stats). What do I do?

We have observed this with {{% udp-pf %}} gateways only. We recommend using [{{% lbs %}}]({{< ref "gateways/concepts/lora-basics-station" >}}) instead if possible, as the {{% udp-pf %}} has many security and scalability drawbacks.

Check if you have selected **Require authenticated connection** in the gateway settings in the Console. This prevents UDP gateways from working (and for gateways connected with Basic Station or MQTT, this prevents unauthenticated connections)

Otherwise, try restarting the gateway. Sometimes, the gateway reports its status but still fails to forward packets, and this may fix that.

## My gateway is shown as disconnected after recreating with the same Gateway EUI. What do I do?

If a gateway is deleted when it’s still connected, the connection statistics for the gateway will continue to exist under the old ID until the gateway actually reconnects.

If you are using {{% lbs %}} or another TCP based gateway then a simple restart/reconnection of the gateway will clear the statistics of the old ID and you create an entry for the new ID.

If you are using a UDP gateway then there is no concept of a connection. {{% tts %}} assumes the connection is alive until no messages are received for the duration of the `DownlinkPathExpires`and `ConnectionExpires` settings. In this case, your gateway must be turned off for at least as long as the `ConnectionExpires` interval (default 1 minute) for {{% tts %}} to mark the gateway as disconnected clear the statistics for the old ID.

## My gateway is offline, but still shows as connected in the Console. Why?

If you are using a {{% udp-pf %}} gateway, it is possible that another gateway with the same EUI is transmitting data. UDP has no authentication, so there is no way to prevent this from happening, although it is unlikely that another gateway with the same EUI will be registered on the same network server. If this is the case, the solutions are:

- Use the {{% lbs %}} packet forwarder
- Change your gateway EUI

## My UDP gateway is connected, but the Console persistently shows it as offline. What do I do?

As explained [here]({{< ref "/gateways/troubleshooting#how-does-the-things-stack-console-know-whether-a-gateway-is-connected" >}}), {{% tts %}} Console shows UDP gateway as offline if it doesn't receive 3 consecutive `PULL_DATA` messages from it. This might be due to gateway connectivity issues, but it can also be due to high keep alive interval that is configured in the gateway packet forwarder. To make sure that the latter isn't causing gateway to appear offline in the Console, you should configure your gateway's keep alive interval to recommended value of 5 seconds. For further questions regarding this, we recommend contacting your gateway's manufacturer.

## Why do I still see connection stats of a gateway I previously disconnected?

After disconnecting a gateway, the connection stats will still be available for 48 hours. The HTTP endpoint will return the status code `200 OK` and the connection stats will contain the `disconnected_at` field. If the gateway remains inactive for more than 48 hours, the HTTP endpoint will then return the `404 Not Found (gateway <gtw_id> not connected)` status.

## My gateway shows an "Other cluster" status. Why?

If a gateway appears in the Console with the status of "Other cluster", it means that this gateway has been setup with a `Gateway Server address` that the Console determines as not belonging to the current deployment. This could mean that you accidentally visited the Console of a different cluster of this deployment (e.g. {{% tts %}} Community `au1` cluster instead of `eu1`). Make sure you either use the correct cluster (usually the one located closest to you), or to change the `Gateway Server address` of the Gateway to match the cluster that you want to use. You can do that via the Gateway's `General settings` page in the Console.

## I get an "ID Already Taken" error when adding a gateway.

Another gateway is already registered with this ID. This gateway may have been deleted already, but {{% tts %}} reserves previously used IDs for [security reasons]({{< ref "reference/id-eui-constraints" >}}).

This gateway may also be registered by another user, but you are not able to see gateways registered by other users if you are not an administrator (e.g. if you are using {{% ttss %}}).

To solve this, use a different gateway ID. If you are an administrator and wish to reuse a deleted ID, see [Purging Entities]({{< ref "/the-things-stack/management/purge" >}}).

If you are using {{% tts %}} Cloud or Enterprise, ask the admin of your tenant to purge this ID for you.

## I get a "Gateway with EUI is Already Registered" error when adding a gateway.

Another gateway is already registered with the same Gateway EUI. This gateway may be registered by another user, but if you are not an administrator (e.g if you are using {{% ttss %}}) you will not be able to see gateways registered by other users.

If the gateway is registered with the same EUI in some other tenant, the error will reflect that as well.

First, double check that you have entered the EUI correctly. Then, double check that you have not already registered the gateway. Finally, if you have purchased the gateway secondhand, it is possible someone before you registered the gateway. Contact them to unregister it. If they are unavailable, we recommend you to contact the gateway manufacturer, who can help you configure your gateway with a new EUI or trace the supply chain.

If you are using {{% tts %}} Cloud or Enterprise, ask the admin of your tenant if they can release this EUI. You may have to show proof that you own this gateway.

A temporary workaround would be to define a custom Gateway EUI in physical gateway settings (if the gateway allows it), and register the gateway on {{% tts %}} using the new EUI. Note that a custom Gateway EUI should be issued from an IEEE block owned by the user.

## Which {{% lbs %}} authentication modes are supported by {{% tts %}}?

{{% lbs %}} defines bi-directional authentication at the server ({{% tts %}}) and client (gateway). The server is authenticated with a trusted certificate and the client is authenticated either by HTTP token or certificate. See [Semtech's documentation](https://doc.sm.tc/station/authmodes.html#authentication-modes).

## How is the server authenticated?

The server is authenticated by a certificate signed by a Root Certificate Authority. The Root CA certificate is installed in the client (gateway). This is set using the `cups.trust` or `tc.trust` file for CUPS or LNS respectively.

## How is my gateway authenticated?

Currently, {{% tts %}} only supports [TLS Server Authentication and Client Token](https://doc.sm.tc/station/authmodes.html#tls-server-authentication-and-client-token). The gateway is authenticated using an HTTP header containing an API key generated in {{% tts %}}. See [Configure CUPS]({{< ref "/gateways/concepts/lora-basics-station/cups#configure-gateway" >}}) for instructions for setting this API key for CUPS.

## Should I set CUPS or LNS credentials?

These are two different types of {{% lbs %}} connections. Since CUPS automatically also configures LNS, we recommend you configure CUPS and leave LNS blank.

## How do I find the CA Trust?

See the [Root Certificates Reference]({{< ref "/reference/root-certificates" >}}).

## Is an API Key required?

{{% lbs %}} CUPS requires an API key for your gateway with the following rights:

- View gateway information
- Edit basic gateway settings
- Retrieve secrets associated with a gateway

{{% lbs %}} LNS also requires an API Key, with the following rights:

- Link as Gateway to a Gateway Server for traffic exchange, i.e. write uplink and read downlink

{{% udp-pf %}} gateways are unsecured and require no API key.

## How do I use an API Key for LBS gateways?

Use the following commands to generate a `api.key` file which is correctly formatted ({{% lbs %}} requires that `.key` files end with a CRLF character).

On Linux and macOS:

```bash
API_KEY="your-api-key"
echo "Authorization: Bearer $API_KEY" | perl -p -e 's/\r\n|\n|\r/\r\n/g'  > api.key
```

On Windows, you can use Command Prompt:

```
set LNS_KEY=your-lns-api-key
echo Authorization: Bearer %LNS_KEY% > lns.key
```

or PowerShell:

```shell
$env:LNS_KEY='your-lns-api-key'
write-output "Authorization: Bearer $env:LNS_KEY" | set-content lns.key
```

Upload or copy the contents of this file in to your gateway as the **Gateway Key**.

See the [{{% lbs %}} Authorization documentation](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-gateways/?url=authmodes.html) or your manufacturers guidelines for additional information.

## I see the "API key not found" error in gateway live events. What do I do?

This error is shown when the API key associated with the gateway has been deleted. Generate a [new API key]({{< ref "/gateways/concepts/adding-gateways#create-gateway-api-key" >}}), configure the gateway with it and reboot it to apply changes.

## There is "Failed to retrieve TCURI from CUPS: (404) Not Found" error on my Basics Station gateway's logs.

This error occurs due to the incorrect API key configuration in the [**LoRa Basics Station LNS Authentication Key** field]({{< ref "/gateways/concepts/lora-basics-station/cups#configure-cups-to-send-the-lns-api-key" >}}) available in your gateway's settings in the Console. Make sure you've followed instructions to [Configure CUPS to Send the LNS API Key]({{< ref "/gateways/concepts/lora-basics-station/cups#configure-cups-to-send-the-lns-api-key" >}}).

## {{% lbs %}} packet forwarder logs mention the "Send failed: X509 - Certificate verification failed, e.g. CRL, CA, or signature check failed" error. What does it mean?

The cause of this issue is that the gateway is configured with a server certificate that {{% tts %}} does not support. It is recommended to use the [Let's Encrypt ISRG Root X1 Trust certificate](https://letsencrypt.org/certs/isrgrootx1.pem.txt). Make sure to restart your gateway after changing the certificate.

## I'm seeing "Radio is not emitting frame - abandoning TX, trying alternative" error in the {{% lbs %}} gateway's packet forwarder logs. What is causing this?

If you are seeing something like:

```
[S2E:WARN] ::0 diid=34946 [ant#0] - unable to place frame
[S2E:VERB] ::0 diid=34946 [ant#0] - class A has no more alternate TX time
[S2E:ERRO] ::0 diid=34946 [ant#0] - radio is not emitting frame - abandoning TX, trying alternative
```

in the packet forwarder logs on your {{% lbs %}} gateway, your gateway might have a hardware level issue.

## I'm seeing "No DC in band" error in the {{% lbs %}} gateway's packet forwarder logs. What is causing this?

If there is no direct channel in the band to send the downlink and no alternative downlink opportunities (RX2, back-off mechanism, etc.), the downlink will be dropped and the following messages will be printed in the logs:

```
[S2E:VERB] ::0 diid=2207 [ant#0] 867.5MHz - no DC in band: txtime=12:40:34.479 free=12:40:47.903
[S2E:VERB] ::0 diid=2207 [ant#0] - class A has no more alternate TX time
[S2E:WARN] ::0 diid=2207 [ant#0] - unable to place frame
```

If the gateway sends back a NACK, {{% tts %}} will retry sending in the next downlink window. This can also be caused by a hardware issue.

## {{% lbs %}} packet forwarder logs mention the "HTTP connect failed: NET - Failed to get an IP address for the given hostname" error. What does it mean?

This error indicates that the gateway was unable to resolve the CUPS URI. Please double check that your network is not blocking the CUPS URI and ports.

## I'm noticing some errors in my UDP gateway's packet forwarder logs. What do they represent?

The [`PULL_RESP` downlink packet](https://github.com/Lora-net/packet_forwarder/blob/master/PROTOCOL.TXT#L310) is used by the server to send RF packets and associated metadata that will have to be emitted by the gateway towards devices. When this packet is received by the gateway, the gateway sends a `TX_ACK` packet to the server to inform if a downlink request has been accepted or rejected by the gateway.

If there has been an error, i.e. the downlink is rejected, `TX_ACK` packet will contain a JSON `txpx_ack` object that carries the status information concerning the associated `PULL_RESP` request. If there has been no errors and the packet is successfully programmed for downlink, no JSON object will be present, but an empty string.

This JSON object will contain an `error` field describing the cause of the downlink rejection and the possible values are:

- `TOO_LATE` - too late to program the packet for downlink
- `TOO_EARLY` - downlink packet timestamp too much in advance
- `COLLISION_PACKET` - there is already a packet programmed in the requested timeframe
- `COLLISION_BEACON` - there is already a beacon planned in the requested timeframe
- `TX_FREQ` - requested frequency not supported by the TX RF chain
- `TX_POWER` - requested power not supported by the gateway
- `GPS_UNLOCKED` - GPS is unlocked and GPS timestamp cannot be used

Example:

```json
{ "txpk_ack": { "error": "COLLISION_PACKET" } }
```

If you are facing `TX_FREQ` or `TX_POWER` errors, please make sure that your gateway's `global_conf.json` file is properly configured. See [{{% udp-pf %}} Configuration]({{< ref "/gateways/concepts/udp#configuration" >}}) section for more info.

For the rest of errors in the list above, please create an issue in [{{% tts %}} GitHub repository](https://github.com/TheThingsNetwork/lorawan-stack) or contact [The Things Industries support](mailto:support@thethingsindustries.com).

## I'm seeing the "Gateway missed too many pongs” warnings in the Gateway Live data events. What's causing this?

The Gateway Server disconnects LoRa Basics Station gateways that stop sending pongs to pings that the server is sending, so the gateway might get disconnected after failing to send two or more pongs. Gateways that don't send pongs to server pings will probably face this issue.

## I do not see the downlink being scheduled by the Network Server. What do I do?

If you notice your downlink is not being scheduled, check your gateway's Live data tab for the [`gs.down.send` event]({{< ref "/reference/api/events#event:gs.down.send" >}}). If you do not see this event, it means that the Network Server failed to schedule the downlink message to Gateway Server.

You can simply try re-scheduling the downlink, and if the issue persists, check if the downlink is being properly scheduled from the Application Server to the Network Server.

## When I schedule a downlink, I see the downlink transmission failed event in the Live data tab and the downlink message fails to be transmitted. Why?

Seeing the [`gs.down.tx.fail` event]({{< ref "/reference/api/events#event:gs.down.tx.fail" >}}) in the gateway's Live data tab means the downlink message has been scheduled from the Gateway Server to the gateway, but the Gateway Server did not receive the ACK for that downlink. Some common causes and solutions for this issue:

- High latency in the gateway backhaul - high latency usually occurs if the gateway and {{% tts %}} cluster are not geographically close, or the gateway is using a cellular or satellite backhaul. Always use {{% tts %}} cluster that is closest to your gateway's location, and make sure to check your gateway's Internet connection.
- Gateway hardware issue - if the problem persists, your gateway could be malfunctioning. Try using another gateway or contacting the gateway manufacturer.

## No downlinks are reaching my UDP gateway. Why?

With UDP gateways, if uplink messages are reaching {{% tts %}}, that does not mean the downlink messages are going to be received correctly by the gateway.

The {{% udp-pf %}} sends a `PULL_DATA` request every ~5 seconds to pull the data scheduled for a downlink transmission on {{% tts %}}.

The server reponds with a `PULL_ACK` message to confirm that the network route is open and that the data can be sent through `PULL_RESP` packets any time. In order to pull the data, `PULL_ACK` messages have to reach the gateway with a reasonable latency, usually way lower than 500 ms. If this latency is high, pulling the downlink data will fail. One of the drawbacks of using the {{% udp-pf %}} is that it does not have an implemented mechanism to detect if pulling the downlink data fails, so your data might end up lost.

Common reasons for having latency issues between the gateway and {{% tts %}} cluster are that the gateway is geographically far from the cluster, and using cellular or satellite backhauls for gateways.

Try solving this issue by:

- Checking your internet connection
- Using {{% tts %}} cluster closest to the location of your gateway

## Sending a downlink fails with the "Invalid fixed paths set in application downlink" error. Why?

This error might occur if the gateway mentioned in the downlink path is not connected or is unavailable for scheduling a downlink message. Make sure that the gateway is connected to {{% tts %}}.

## Why are my gateway's GPS location details not shown in {{% tts %}} Console?

[{{% lbs %}}]({{< ref "/gateways/concepts/lora-basics-station" >}}) protocol currently does not support GPS fields in Uplink messages, so the GPS location in {{% tts %}} Console for {{% lbs %}}-based gateways cannot be updated from status messages.

Updating gateway location from status messages in supported only for gateways that establish authenticated connections (Basic Station and MQTT gateways), i.e. it is not supported for [UDP]({{< ref "/gateways/concepts/udp" >}}) gateways.

Keep in mind that you can still set the gateway location [manually]({{< ref "/gateways/concepts/adding-gateways#set-gateway-location" >}}) from {{% tts %}} Console.

## I set the gateway location manually in {{% tts %}} Console. Why can I not see it in the gateway connection statistics?

The connection statistics ([Gateway Server service API]({{< ref "/reference/api/gateway_server#a-namegsthe-gs-servicea" >}})) do not store the gateway locations.

The gateway location is stored in the Identity Server instead. The updated location can be found by querying the Identity Server [GetGateway API]({{< ref "/reference/api/gateway" >}}).

For example, you can query the location with:

```bash
curl -H "Authorization: Bearer <api-key>" https://example.thethings.com/api/v3/gateways/<gateway-id>?field_mask=antennas
```

## My gateway backhaul consumes a lot of data. Is there any way I can optimize it?

Gateway's data consumption is influenced by many factors, and some of them can allow some optimization. Here are some common high data consumption causes:

- A high number of LoRaWAN devices nearby and their traffic volume
- A way that the gateway protocol is implemented. For example, a gateway might be sending a status update every N seconds, polling the network server for downstream messages (look for `pull_data` and `pull_ack` in the packet forwarder logs), etc. You can check the factors that consume data in your gateway protocol's documentation.
- A gateway management system running on the gateway
- Other applications or integrations configured in the gateway, such as automatic data recovery, MQTT bridge, etc.. Check if you have any additional features (that are unnecessary for your use case) enabled and optimize accordingly.
- Firmware upgrades

We recommend contacting your gateway's manufacturer to gather insights on data consumption and an advice on how it can be optimized.

## My gateway is receiving all LoRaWAN and non-LoRaWAN traffic from devices in its surrounding. Can I filter unwanted sensor data at the gateway level?

In general, a gateway will receive all other LoRaWAN and non-LoRaWAN traffic from neighbouring devices, and it will forward that traffic to the Network Server. When it comes to filtering unwanted sensor data at the gateway level, users might consider using a gateway with a whitelisting function. This function can effectively reduce data traffic and operational costs. Please contact your gateway's manufacturer for additional info.

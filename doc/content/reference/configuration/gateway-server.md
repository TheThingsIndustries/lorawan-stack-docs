---
title: "Gateway Server Options"
description: ""
---

## General Options

- `gs.update-version-info-delay`

Gateways are disconnected from {{% tts %}} when settings affecting the connection with the Gateway Server change. You can configure how often the gateway gets fetched from the entity registry.

- `gs.fetch-gateway-interval`: Update gateway fetching interval
- `gs.fetch-gateway-jitter`: Jitter to apply to the update interval to randomize intervals

## Forwarding Options

The Gateway Server forwards traffic to upstream hosts based on the `gs.forward` parameter.

- `gs.forward`: Forward the DevAddr prefixes to the specified hosts. This parameter accepts a list of strings in the format `"target=dev-addr-prefix1 target=dev-addr-prefix2"`

Enter your NetID to view recommended forwarding settings:

{{< dev-addr-prefix >}}

- <code>"cluster=00000000/0"</code>: Forward all traffic to the Network Server in the cluster (default)
- <code>"cluster=<span data-content="dev-addr-prefix"></span>"</code>: Forward only traffic for your NetID to the Network Server
- <code>"cluster=00000000/6 cluster=<span data-content="dev-addr-prefix"></span>"</code>: Forward only traffic for the experimental NetIDs `000000` and `000001`, and your NetID to the Network Server in the cluster
- <code>"cluster=00000000/6 cluster=<span data-content="dev-addr-prefix"></span> packetbroker=00000000/0"</code>: Forward only traffic for the experimental NetIDs `000000` and `000001`, and your NetID to the Network Server in the cluster, and all traffic to Packet Broker (see [configuration]({{< relref "packet-broker-agent.md" >}}))

## Location Update Options

The Gateway Server can be configured to update the location of gateway antennas from incoming status messages.

- `gs.update-gateway-location-debounce-time`: Debounce time for gateway location updates from status messages.

## Security Options

- `gs.require-registered-gateways`: Require the gateways to be registered in the Identity Server
- `gs.basic-station.allow-unauthenticated`: Allow unauthenticated Basic Station connections. This is set to `false` by default. Set to disable auth check for testing.

## Basic Station Options

The Gateway Server supports connection of gateways using the Basic Station protocol.

- `gs.basic-station.listen`: Address for the Basic Station frontend to listen on
- `gs.basic-station.listen-tls`: Address for the Basic Station frontend to listen on (with TLS)
- `gs.basic-station.use-traffic-tls-address`: Use WSS for the traffic address regardless of the TLS setting

The frequency plan to use for unregistered gateways can be set using `gs.basic-station.fallback-frequency-plan-id`. Note that `gs.require-registered-gateways` must be set to false for this to take effect.

- `gs.basic-station.fallback-frequency-plan-id`: Fallback frequency plan ID for non-registered gateways

{{% tts %}} provides RTT recording for {{% lbs %}} gateways.

- `gs.basic-station.max-valid-round-trip-delay`: Defines the maximum valid round trip delay to qualify for RTT calculations

{{% tts %}} offers a WebSocket Ping-Pong support for {{% lbs %}} gateways. The Gateway Servers sends pings to {{% lbs %}} gateway, and the gateway responds with a pong. The gateway that stops sending pongs to server pings gets disconnected by the Gateway Server after a configurable time period. This does not apply for gateways that don't support pongs.

- `gs.basic-station.missed-pong-threshold`: Defines a number of consecutive missed pongs before disconnection. This value is used only if the gateway sends at least one pong.
- `gs.basic-station.time-sync-interval`: Interval to send time transfer messages
- `gs.basic-station.ws-ping-interval`: Interval to send WS ping messages

## MQTT Options

The Gateway Server exposes an MQTT server for connecting gateways via MQTT.

- `gs.mqtt.listen`: Address for the MQTT frontend to listen on
- `gs.mqtt.listen-tls`: Address for the MQTTS frontend to listen on
- `gs.mqtt.public-address`: Public address of the MQTT frontend
- `gs.mqtt.public-tls-address`: Public address of the MQTTs frontend

## MQTT V2 Options

The Gateway Server exposes an second MQTT server for connecting gateways that use the V2 MQTT format.

- `gs.mqtt-v2.listen`: Address for the MQTT frontend to listen on
- `gs.mqtt-v2.listen-tls`: Address for the MQTTS frontend to listen on
- `gs.mqtt-v2.public-address`: Public address of the MQTT frontend
- `gs.mqtt-v2.public-tls-address`: Public address of the MQTTs frontend

## UDP Options

The Gateway Server supports the connection of gateways using the Semtech UDP protocol.

- `gs.udp.listeners`: Listen addresses with (optional) fallback frequency plan ID for non-registered gateways. This parameter accepts as string in the format `listen-address=frequency-plan-id`
- `gs.udp.schedule-late-time`: Time in advance to send downlink to the gateway when scheduling late

Options are available to configure connection behavior of UDP gateways.

- `gs.udp.connection-expires`: Time after which a connection of a gateway expires
- `gs.udp.connection-error-expires`: Time after which a connection error of a gateway expires
- `gs.udp.downlink-path-expires`: Time after which a downlink path to a gateway expires
- `gs.udp.addr-change-block`: Time to block traffic when a gateway's address changes

Using the `packet-buffer` and `packet-handlers` options, the throughput of UDP packets can be configured.

- `gs.udp.packet-buffer`: Buffer size of unhandled packets
- `gs.udp.packet-handlers`: Number of concurrent packet handlers

## Statistics Options

Specify options for gateway connection statistics:

- `gs.update-connection-stats-debounce-time`: Time before repeated refresh of the gateway connection stats
- `gs.connection-stats-disconnect-ttl`: TTL of the gateway connection stats after disconnecting

## UDP Rate Limiting Options

The Gateway Server supports rate limiting traffic for gateways that are using the Semtech UDP protocol.

- `gs.udp.rate-limiting.enable`: Enable rate limiting for gateways
- `gs.udp.rate-limiting.messages`: Number of past messages to check timestamp for
- `gs.udp.rate-limiting.threshold`: Filter packet if timestamp is not newer than the older timestamps of the previous messages by this threshold

## Packet Broker Options

- `gs.packetbroker.online-ttl-margin`: Time to extend the online status before it expires
- `gs.packetbroker.update-gateway-interval`: Update gateway interval
- `gs.packetbroker.update-gateway-jitter`: Jitter (fraction) to apply to the update interval to randomize intervals

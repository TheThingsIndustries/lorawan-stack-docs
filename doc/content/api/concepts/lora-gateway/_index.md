---
title: "LoRa® Gateway specific APIs"
description: ""
weight: 5
---

{{% tts %}} supports multiple LoRa® gateway protocols which communicate the respective APIs.

<!--more-->

See the [port allocations]({{< ref "/the-things-stack/concepts/networking/#port-allocations" >}}) guide to check which protocol is supported on which port.

## LoRa Basics™ Station

{{% tts %}} provides {{% lbs %}} [LNS]({{< ref "/gateways/concepts/lora-basics-station/#lorawan-network-server-lns" >}}) and [CUPS]({{< ref "/gateways/concepts/lora-basics-station/#configuration-and-update-server-cups" >}}) end points for gateways to connect.

These protocols follow the {{% lbs %}} [reference specification](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-gateways/?url=cupsproto.html).

{{< note "{{% lbs %}} CUPS API is usually exposed on the HTTP(s) port(s)." />}}

Implementation specific details for clients using the {{% lbs %}} LNS protocol to communicate with {{% tts %}} is documented in the [LoRa Basics Station Implementation Guide]({{< ref "/reference/lbs" >}}).

This reference describes the MQTT protocol used by the Gateway Server. Packet forwarders implementing the MQTT protocols are specific for {{% tts %}}.

The MQTT protocol can be used to develop custom packet forwarders or gateway bridges for exchanging traffic between a gateway and {{% tts %}}, or easily simulating gateway traffic for testing purposes. It is an alternative to the [Basic Station](https://lora-developers.semtech.com/resources/tools/lora-basics/lora-basics-for-gateways/) and the [Semtech UDP](https://github.com/Lora-net/packet_forwarder/blob/master/PROTOCOL.TXT) protocols.

## MQTT

MQTT is a server-client protocol for exchanging messages. Clients can connect to the server and **publish** messages (data) under a specific **topic**. They can also **subscribe** to a **topic**, and thus receive all messages that are published under that topic (by other clients, or the MQTT server itself).

The Gateway Server is the MQTT server, and gateways connect to the Gateway Server as MQTT clients. The gateway that connects is identified by the username that is used for authentication.

On multi-tenant environments such as Cloud, endpoints include the tenant id, e.g `gateway1@tenant1`. On single tenant environments such as Open Source, the tenant id can be removed, i.e `gateway1`.

To communicate with the MQTT protocol, the Gateway Server and the gateway are exchanging [Protocol Buffers](https://developers.google.com/protocol-buffers). The definitions of the Protocol Buffers can be found at the [GitHub repository](https://github.com/TheThingsNetwork/lorawan-stack) of {{% tts %}}, under [**messages.proto**]({{< tts-repo-file-url "blob" "api/messages.proto" >}}) and [**lorawan.proto**]({{< tts-repo-file-url "blob" "api/lorawan.proto" >}}).

### MQTT v2

The MQTT v2 gateway APIs are used by [The Things Kickstarter Gateway]({{< ref "/gateways/models/thethingskickstartergateway">}}) and use the [TTN v2 MQTT](https://github.com/TheThingsNetwork/lorawan-stack/blob/master/pkg/gatewayserver/io/mqtt/format_protobufv2.go) format.

### MQTT v3

The MQTT v3 protocol uses the {{% tts %}} v3 messages definitions.

Gateways can connect using the username `{gateway-id}@{tenant-id}` and an API key as the password. Check how to [register a gateway and create an API key]({{< ref "/gateways/concepts/adding-gateways/">}}).

<div class="fixed-table table-api">

| Topic                                | Message                                           |
| ------------------------------------ | ------------------------------------------------- |
| `v3/{gateway-id}@{tenant-id}/up`     | Publish an uplink message to the network          |
| `v3/{gateway-id}@{tenant-id}/status` | Publish a status message to the network           |
| `v3/{gateway-id}@{tenant-id}/down`   | Subscribe to downlink messages                    |
| `v3/{gateway-id}@{tenant-id}/ack`    | Publish an acknowledgement on emitting a downlink |

</div>

#### Connecting to the Gateway Server

See [Networking]({{< ref "/the-things-stack/concepts/networking" >}}) for the default port of the MQTT server.

The username is `<gateway-id>@<tenant-id>` (e.g. `gtw1@tenant1`), and the password is a gateway API key with the `RIGHT_GATEWAY_LINK` right enabled. You can generate this API key by following instructions in the [Creating Gateways]({{< ref "/gateways/concepts/adding-gateways#create-gateway-api-key" >}}) section.

Authenticated clients get **write-only** access to the following topics:

- `v3/<gateway-id>@<tenant-id>/up`: Used for sending uplink traffic to the Gateway Server.
- `v3/<gateway-id>@<tenant-id>/status`: Used for sending gateway status messages to the Gateway Server.
- `v3/<gateway-id>@<tenant-id>/down/ack`: Used for sending TxAck messages to the Gateway Server.

Clients also get **read-only** access and should subscribe to the following topic:

- `v3/<gateway-id>@<tenant-id>/down`: The Gateway Server publishes downlink message that the gateway should transmit.

#### Disconnect from the Gateway Server

The gateway can disconnect by terminating the MQTT client connection.

#### Uplink Messages

To forward uplink traffic to the Gateway Server, the MQTT client must publish a Protocol Buffer of type `ttnpb.UplinkMessage` under the topic `v3/<gateway-id>@<tenant-id>/up`.

Below is an example that connects to the Gateway Server as `$GATEWAY_ID`, publishes an uplink message (Protocol Buffer stored as binary file `test-uplink-message`) and disconnects:

```bash
GATEWAY_ID="test-gtw@my-tenant"
GATEWAY_API_KEY="NNSXS.VEEBURF3KR77ZR..." # API key with RIGHT_GATEWAY_LINK rights
mosquitto_pub \
    -h "thethings.example.com" -p 1882 \
    -u "$GATEWAY_ID" -P "$GATEWAY_API_KEY" \
    -t "v3/$GATEWAY_ID/up" -f test-uplink-message
```

{{< warning >}} Port 1882 is insecure. The TLS-enabled port 8882 should be used in a production setting. {{</ warning >}}

{{< note >}} The file `test-uplink-message` contains a Protocol Buffer of type `ttnpb.UplinkMessage` (binary, not JSON). {{</ note >}}

#### Downlink Messages

The Gateway Server instructs the gateway to send a downlink packet by publishing a Protocol Buffer of type `ttnpb.GatewayDown` under the topic `v3/<gateway-id>@<tenant-id>/down`.

The MQTT client must subscribe to this topic after connecting to the Gateway Server. It must also listen for incoming `ttnpb.GatewayDown` messages (which contain both the packet data payload as well as any desired transmission settings). Upon receiving a scheduling request, it must trasmit that message, and [send back a `TxAck` packet]({{< ref "#txack-messages" >}}) on success.

```bash
GATEWAY_ID="test-gtw@my-tenant"
GATEWAY_API_KEY="NNSXS.VEEBURF3KR77ZR..." # API key with RIGHT_GATEWAY_LINK rights
mosquitto_sub \
    -h "thethings.example.com" -p 1882 \
    -u "$GATEWAY_ID" -P "$GATEWAY_API_KEY" \
    -t "v3/$GATEWAY_ID/down" -v
```

{{< warning >}} Port 1882 is insecure. The TLS-enabled port 8882 should be used in a production setting. {{</ warning >}}

{{< note >}} The example above is not complete (as it does nothing with the scheduled downlink requests). It is only meant to showcase the MQTT client subscribing to the downlink topic. {{</ note >}}

#### Gateway Status Messages

To forward a gateway status message to the Gateway Server, the MQTT client must publish a Protocol Buffer of type `ttnpb.GatewayStatus` under the topic `v3/<gateway-id>@<tenant-id>/status`.

Below is an example that connects to the Gateway Server as `$GATEWAY_ID`, publishes a gateway status message (Protocol Buffer stored as binary file `test-gateway-status`) and disconnects:

```bash
GATEWAY_ID="test-gtw@my-tenant"
GATEWAY_API_KEY="NNSXS.VEEBURF3KR77ZR..." # API key with RIGHT_GATEWAY_LINK rights
mosquitto_pub \
    -h "thethings.example.com" -p 1882 \
    -u "$GATEWAY_ID" -P "$GATEWAY_API_KEY" \
    -t "v3/$GATEWAY_ID/status" -f test-gateway-status
```

{{< warning >}} Port 1882 is insecure. The TLS-enabled port 8882 should be used in a production setting. {{</ warning >}}

{{< note >}} The file `test-gateway-status` contains a Protocol Buffer of type `ttnpb.GatewayStatus` (binary, not JSON). {{</ note >}}

#### TxAck Messages

To forward a `TxAck` packet to the Gateway Server, the MQTT client must publish a Protocol Buffer of type `ttnpb.TxAcknowledgement` under the topic `v3/<gateway-id>@<tenant-id>/down/ack`.

```bash
GATEWAY_ID="test-gtw@my-tenant"
GATEWAY_API_KEY="NNSXS.VEEBURF3KR77ZR..." # API key with RIGHT_GATEWAY_LINK rights
mosquitto_pub \
    -h "thethings.example.com" -p 1882 \
    -u "$GATEWAY_ID" -P "$GATEWAY_API_KEY" \
    -t "v3/$GATEWAY_ID/down/ack" -f example-tx-ack
```

{{< warning >}} Port 1882 is insecure. The TLS-enabled port 8882 should be used in a production setting. {{</ warning >}}

{{< note >}} The example above is not complete (the TxAck should be sent in response to a successful downlink transmission). It is only meant to showcase the MQTT client sending a TxAck packet (contents of the `example-tx-ack` file) to the Gateway Server. {{</ note >}}

## Tabs Hubs

The Tabs Hubs APIs are tailored to connect legacy [Tabs Hub gateways](https://pixel-networks.com/shop/tabs-hub-tbhb100-356) that are not compatible with the official LoRa Basics Station spec. The APIs here are undocumented and is not intended for other use.

## Legacy UDP

The UDP APIs support the [Legacy Semtech UDP packet forwarder](https://github.com/Lora-net/packet_forwarder/blob/master/PROTOCOL.TXT) specifications.

{{< warning >}} This protocol and the code are very out-dated and unmaintained by the upstream. Please use {{% lbs %}}.{{</ warning >}}

---
title: Connect
description: ""
weight: 1
distributions: ["Enterprise", "Open Source"]
aliases:
  - "/integrations/peering/enable"
  - "/reference/peering/enable"
  - "/reference/packet-broker/enable"
  - "/reference/packet-broker/connect"
  - "/getting-started/packet-broker/connect"
---

This section explains how to connect {{% tts %}} to Packet Broker.

{{% tts %}} Cloud and {{% ttss %}} are already connected to Packet Broker. If your deployment is already connected, proceed to [configure Packet Broker]({{< relref "configure" >}}).

## Prerequisites

1. A LoRa Alliance NetID or a tenant of a host NetID

- To obtain a NetID, [become a member of the LoRa Alliance](https://lora-alliance.org/become-a-member)
- To obtain a DevAddr block, [contact The Things Industries sales](mailto:sales@thethingsindustries.com)

2. Access to Packet Broker with an API key

- To obtain access to Packet Broker, [contact The Things Industries sales](mailto:sales@thethingsindustries.com)

3. {{% tts %}} installed and configured. See [Getting Started]({{< ref "/getting-started" >}})
4. Packet Broker CLI installed and configured. See [Packet Broker CLI](https://github.com/packetbroker/pb)

## Define DevAddr Prefix by NetID

This guide uses The Things Network NetID `000013` as example, which has DevAddr prefix `26000000/7`.

If you own a NetID, enter your NetID to obtain your DevAddr prefix:

{{< dev-addr-prefix >}}

Your DevAddr prefix is: <code><span data-content="dev-addr-prefix"></span></code>

See a full list of NetIDs, DevAddr Prefix assignments, operators, and regions they are allocated to in [The Things Network LoRaWAN® documentation](https://www.thethingsnetwork.org/docs/lorawan/prefix-assignments/).

## Configure Packet Broker Agent

The Packet Broker Agent component of {{% tts %}} connects to Packet Broker. The Packet Broker Agent can be configured as Forwarder and as Home Network in your `ttn-lw-stack.yaml` configuration file:

```yaml
# Add Packet Broker configuration to your configuration file:

# Packet Broker Agent configuration
pba:
  # See https://packetbroker.net for available hosts
  data-plane-address: "eu.packetbroker.io:443"
  net-id: "000013"
  tenant-id: "my-tenant" # Leave empty if you own the NetID and you don't use tenants
  cluster-id: "my-cluster" # Unique identifier of your routing cluster
  authentication-mode: "oauth2"
  oauth2:
    client-id: "" # API key ID
    client-secret: "" # Secret API key value
  forwarder:
    enable: true
    # generate 16 bytes (openssl rand -hex 16)
    token-key: "00112233445566770011223344556677"
  home-network:
    enable: true
```

See [Packet Broker Agent configuration]({{< ref "/reference/configuration/packet-broker-agent" >}}) for all configuration options.

## Configure Gateway Server

Configure the Gateway Server to forward traffic for the current network to the Network Server in the cluster, and route all traffic to Packet Broker (via Packet Broker Agent):

```yaml
# Edit the Gateway Server configuration in your configuration file:

# Gateway Server configuration
gs:
  forward:
    # Forward traffic to the Network Server in the cluster
    - "cluster=26000000/7" # Enter your DevAddr range
    # Forward all traffic also to Packet Broker
    - "packetbroker=00000000/0"
```

See [Gateway Server configuration]({{< ref "/reference/configuration/gateway-server" >}}) for all configuration options.

## Configure Network Server

Configure the Network Server to issue device addresses (DevAddr) that fall within your NetID:

```yaml
# Edit the Network Server configuration in your configuration file:

# Network Server configuration.
ns:
  net-id: "000013"
```

If you are using a NetID tenant with one or more DevAddr blocks, configure the Network Server to use those blocks:

```yaml
# Network Server configuration.
ns:
  net-id: "000013"
  dev-addr-prefixes:
    - "27111100/16"
    - "27222200/16"
```

By default, the Network Server uses NetID `000000` which is intended for experimentation purposes. Only devices that are activated with a DevAddr that refers to a NetID will have their traffic routed by Packet Broker to your network.

See [Network Server configuration]({{< ref "/reference/configuration/network-server" >}}) for all configuration options.

## Configure Packet Broker

When {{% tts %}} is connected to Packet Broker, you can proceed with [Packet Broker Configuration]({{< relref "configure" >}}).

## Advanced: Test Uplink and Downlink

See [Publish and Subscribe Traffic](https://github.com/packetbroker/pb#publish-and-subscribe-traffic) on how to publish test messages and subscribe to traffic using Packet Broker CLI.

{{< note >}} Packet Broker Agent uses the configured `cluster-id` as Forwarder ID and subscription group. {{</ note >}}

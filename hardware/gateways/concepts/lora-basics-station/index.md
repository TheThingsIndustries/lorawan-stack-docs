# LoRa Basics™ Station

> The LoRa Basics™ Station protocol simplifies management of large scale LoRaWAN® networks. LoRa Basics™ Station is the preferred way of connecting Gateways to …

Source: https://www.thethingsindustries.com/docs/hardware/gateways/concepts/lora-basics-station/


The [LoRa Basics™ Station](https://lora-developers.semtech.com/resources/tools/lora-basics/lora-basics-for-gateways/) protocol simplifies management of large scale LoRaWAN® networks. LoRa Basics™ Station is the preferred way of connecting Gateways to The Things Stack.

This section contains information for connecting your gateway to The Things Stack using LoRa Basics™ Station and its subprotocols.

These are general instructions for all LoRa Basics™ Station gateways. For specific instructions for your gateway, look in the [Gateways](https://www.thethingsindustries.com/docs/hardware/gateways/) section.

## Advantages of LoRa Basics™ Station

Some of the advantages of LoRa Basics™ Station over the legacy UDP Packet Forwarder are:

- Centralized Update and Configuration Management
- TLS and Token-based Authentication
- Centralized Channel-Plan Management
- No Dependency on Local Time Keeping

## Authentication

The Things Stack supports [TLS server authentication and client token](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-gateways/?url=authmodes.html). This requires a `*.trust` file and a `*.key` file. See the [LNS](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/lora-basics-station/lns/) and [CUPS](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/lora-basics-station/cups/) sections for information about getting these files. The Things Stack does not support TLS client authentication and does not provide a `*.cert` file.

## LNS and CUPS Sub Protocols

LoRa Basics™ Station contains two sub protocols for connecting Gateways to Network Servers, LoRaWAN Network Server (LNS) and Configuration and Update Server (CUPS).

### LoRaWAN Network Server (LNS)

LNS establishes a data connection between a LoRa Basics™ Station gateway and a Network Server (in this case, The Things Stack). LoRa® uplink and downlink frames are exchanged through this data connection. The LNS protocol is **required** for sending and receiving LoRaWAN data.

### Configuration and Update Server (CUPS)

CUPS allows a Network Server to configure gateways remotely, and to update gateway firmware. CUPS is **not required** for sending and receiving LoRaWAN data, but it can greatly simplify the management of gateways. Configuring CUPS will also automatically retrieve LNS credentials and configure LNS on your gateway.

More information about LoRa Basics™ Station is available at [Semtech's Developer Portal](https://lora-developers.semtech.com/resources/tools/lora-basics/lora-basics-for-gateways/)


## Pages in this section

- [Configuration and Update Server (CUPS)](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/lora-basics-station/cups/index.md): LoRa Basics™ Station can regularly connect to a Configuration and Update Server (CUPS) server to check for configuration and software updates. This page …
- [LoRaWAN Network Server (LNS)](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/lora-basics-station/lns/index.md): LNS establishes a data connection between a LoRa Basics™ Station and The Things Stack. This page contains information about connecting your gateway to The …
- [Using CUPS to redirect to a different LNS](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/lora-basics-station/cups-forwarding/index.md): This section explains how redirect your gateway from one The Things Stack instance to another using CUPS, thus facilitating remote gateway management.
- [Implementation Guide](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/lora-basics-station/implementation-guide/index.md): This guide contains implementation details primarily for gateway manufacturers intending to implement the LoRa Basics™ Station protocol.
- [mTLS Authentication](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/lora-basics-station/mtls-authentication/index.md): The Things Stack supports mutual TLS to authenticate LoRa Basics™ Station CUPS connections in selected deployments. This guide explains how gateway …


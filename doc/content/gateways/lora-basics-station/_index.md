---
title: "LoRa Basics™ Station"
description: ""
weight: -1
---

The [{{% lbs %}}](https://lora-developers.semtech.com/resources/tools/lora-basics/lora-basics-for-gateways/) protocol simplifies management of large scale LoRaWAN networks. {{% lbs %}} is the preferred way of connecting Gateways to {{% tts %}}.

This section contains information for connecting your gateway to {{% tts %}} using {{% lbs %}} and its subprotocols.

<!--more-->

These are general instructions for all {{% lbs %}} gateways. For specific instructions for your gateway, look in the [Gateways]({{< ref "gateways" >}}) section.

## Advantages of {{% lbs %}}

Some of the advantages of {{% lbs %}} over the legacy UDP Packet Forwarder are:

- Centralized Update and Configuration Management
- TLS and Token-based Authentication
- Centralized Channel-Plan Management
- No Dependency on Local Time Keeping

## Authentication

{{% tts %}} supports [TLS server authentication and client token](https://lora-developers.semtech.com/resources/tools/lora-basics/lora-basics-for-gateways/?url=authmodes.html). This requires a `*.trust` file and a `*.key` file. See the [LNS]({{< relref "lns" >}}) and [CUPS]({{< relref "cups" >}}) sections for information about getting these files. {{% tts %}} does not support TLS client authentication and does not provide a `*.cert` file.

## LNS and CUPS Sub Protocols

{{% lbs %}} contains two sub protocols for connecting Gateways to Network Servers, LoRaWAN Network Server (LNS) and Configuration and Update Server (CUPS).

### LoRaWAN Network Server (LNS)

LNS establishes a data connection between a {{% lbs %}} gateway and a Network Server (in this case, {{% tts %}}). LoRa® uplink and downlink frames are exchanged through this data connection. The LNS protocol is **required** for sending and receiving LoRaWAN data.

### Configuration and Update Server (CUPS)

CUPS allows a Network Server to configure gateways remotely, and to update gateway firmware. CUPS is **not required** for sending and receiving LoRaWAN data, but it can greatly simplify the management of gateways. Configuring CUPS will also automatically retrieve LNS credentials and configure LNS on your gateway.

More information about {{% lbs %}} is available at [Semtech's Developer Portal](https://lora-developers.semtech.com/resources/tools/lora-basics/lora-basics-for-gateways/)

---
title: "LoRaWAN Network Server (LNS)"
description: ""
weight: -1
aliases: [/gateways/lora-basics-station/lns]
---

LNS establishes a data connection between a {{% lbs %}} and {{% tts %}}. This page contains information about connecting your gateway to {{% tts %}} using the {{% lns %}} (LNS) protocol.

<!--more-->

These are general instructions for all {{% lbs %}} gateways. For specific instructions for connecting your gateway via LNS, look in the [Gateways]({{< ref "gateways" >}}) section.

{{< note >}} The LNS protocol is **required** for sending and receiving LoRaWAN® data with {{% lbs %}}, while the CUPS protocol is not. However, configuring CUPS will automatically retrieve LNS credentials and configure LNS on your gateway, so there is no need to configure both. {{</ note >}}

## Requirements

1. User account on {{% tts %}} with rights to create gateways.
2. A gateway which support {{% lbs %}}.

## Create a Gateway

To connect a gateway using the LNS protocol, you must first add the gateway in {{% tts %}}. This can be done either in the console, or via the command line. See instructions for [Adding Gateways]({{< ref "/gateways/concepts/adding-gateways" >}}). 

## Create an API Key

LNS requires an API Key with the following rights:

- Link as Gateway to a Gateway Server for traffic exchange, i.e. write uplink and read downlink

{{< figure src="../lns-rights.png" alt="LNS API Key Rights" >}}

To create this API key for your gateway, follow instructions for [Creating a Gateway API key ]({{< ref "/gateways/concepts/adding-gateways#create-gateway-api-key" >}}).

## Configure Gateway

All {{% lbs %}} gateways support the following configuration options. Consult your gateway documentation for more information about configuring your specific gateway. 

### LNS Server Address

The server address is the network endpoint of {{% tts %}} LNS. It is a combination of the **protocol** (wss), the **server address**, and the **port**.

Enter the following in your gateway as the LNS Server Address: `wss://<server-address>:8887`.

The `<server-address>` is the address of your {{% tts %}} deployment. See [Server Addresses]({{< ref "the-things-stack/concepts/server-addresses" >}}) for more info.

### LNS Server Certificate / LNS Trust

This is the [CA certificate](https://en.wikipedia.org/wiki/Certificate_authority) which secures your domain. A `.pem` file containing common certificates is available in the [Root Certificates Reference]({{< ref "/reference/root-certificates" >}}).

Upload the `.pem` file in your gateway as the LNS Server Certificate, i.e. LNS Trust.

### LNS Key File

This is a file which {{% tts %}} uses to verify the identity of your gateway.

Instructions below show how to create a file called `lns.key`, replacing `"your-lns-api-key"` with the [LNS API key]({{< ref "/gateways/concepts/lora-basics-station/lns#create-an-api-key" >}}) you created above.

On Linux or macOS use the following commands:

```bash
LNS_KEY="your-lns-api-key"
echo "Authorization: Bearer $LNS_KEY" | perl -p -e 's/\r\n|\n|\r/\r\n/g'  > lns.key
```

On Windows, you can use Command Prompt:

```bash
set LNS_KEY=your-lns-api-key
echo Authorization: Bearer %LNS_KEY% > lns.key
```

or PowerShell:

```powershell
$env:LNS_KEY='your-lns-api-key'
write-output "Authorization: Bearer $env:LNS_KEY" | set-content lns.key
```

The commands above create a file called `lns.key`, terminated with a Carriage Return Line Feed (`0x0D0A`) character. Upload this file in your gateway as the LNS key.

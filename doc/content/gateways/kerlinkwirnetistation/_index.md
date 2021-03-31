---
title: "Kerlink Wirnet iStation"
description: ""
aliases: [/guides/connecting-gateways/kerlinkwirnetistation]
---

{{< figure src="Kerlink-Wirnet-iStation.png" alt="Kerlink Wirnet iStation" class="float plain" >}}

The [Kerlink Wirnet iStation](https://www.kerlink.com/product/wirnet-istation/) is an outdoor LoRaWAN gateway that represents an evolution of the legacy [Kerlink Wirnet Station]({{< ref "/gateways/kerlinkwirnetstation" >}}) gateway. It offers cellular (4G with 3G/2G fallback) and Ethernet backhauls, as well as fully integrated internal GPS, 4G and LoRa antennas.

<!--more-->

This page guides you to connect Kerlink Wirnet iStation to {{% tts %}}.

## Prerequisites

1. User account on {{% tts %}} with rights to create Gateways.
2. Kerlink Wirnet iStation gateway connected to the Internet via Ethernet or cellular network.

Before registering a gateway in {{% tts %}}, you also need to find out the gateway's EUI. You can do so if you connect to the iStation by SSH-ing into it using `root` login and `pdmk-XXXXXX` passoword. `XXXXXX` represents the last six hexadecimal digits of the **Board ID** printed on the gateway's bottom. 

> For example, if the **Board ID** is `921CHa010001`, the root password will be `pdmk-010001`.

To print the gateway's EUI, use the following command: 

```bash 
$ grep EUI /tmp/board_info.json
```

## Registration

Create a gateway by following the instructions for [Adding Gateways]({{< ref "/gateways/adding-gateways" >}}) via Console or CLI. Choose a **Gateway ID** and paste the **Gateway EUI** you printed in the previous step.

Create an API Key with **View gateway information** rights for this gateway using the same instructions. Copy the API key and save it for later use.

## Configuration

All further steps assume the gateway is available at `<gateway-ip>`, {{% tts %}} is available at `<server-address>`, gateway ID is `<gateway-id>` and gateway API key is `<gateway-api-key>`. For Wirnet iStation gateway, the `<gateway-model>` has value `'wirnet-istation'`.

{{< note >}} Make sure to replace these with the values appropriate for your setup. {{</ note >}}

### Provisioning

In order to ease the process of connecting Wirnet iStation to {{% tts %}}, we provide the provisioning script `provision.sh` you can configure your gateway with. This script is compatible with any Wirnet iStation gateway.

To provision the iStation gateway at `<gateway-ip>` to use the configuration of `<gateway-id>` provided by {{% tts %}} deployed at `<server-address>`, execute: 

```bash
$ curl -sL 'https://raw.githubusercontent.com/TheThingsNetwork/kerlink-wirnet-firmware/v0.0.3/provision.sh' | bash -s -- <gateway-model> <gateway-ip> <server-address> <gateway-id> <gateway-api-key>
```

{{< note >}} Please refer to [Kerlink Wirnet Firmware provisioning documentation](https://github.com/TheThingsNetwork/kerlink-wirnet-firmware/tree/v0.0.3#provisioning) for more detailed information on provisioning the Wirnet iStation. {{</ note >}}

{{< note >}} To avoid being prompted for `root` user password several times, you may add your SSH public key as authorized for `root` user on the gateway, for example, by `ssh-copy-id root@192.168.4.155`. {{</ note >}}

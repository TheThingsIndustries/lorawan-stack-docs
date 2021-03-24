---
title: "Kerlink Wirnet iStation"
description: ""
aliases: [/guides/connecting-gateways/kerlinkwirnetistation]
---

This page guides you to connect Kerlink Wirnet iStation to {{% tts %}}.

<!--more-->

You can find technical specifications for this gateway in [the official Kerlink documentation](https://www.kerlink.com/product/wirnet-istation/). 

## Prerequisites

1. User account on {{% tts %}} with rights to create Gateways.

## Registration

Create a gateway by following the instructions for [Adding Gateways]({{< ref "/gateways/adding-gateways" >}}). Choose a **Gateway ID** and set **EUI** equal to the one on the gateway.

Create an API Key with Gateway Info rights for this gateway using the same instructions. Copy the key and save it for later use.

## Configuration

All further steps will assume the gateway is available at `<gateway-ip>`, {{% tts %}} is `<server-address>`, gateway ID is `<gateway-id>` and gateway API key is `<gateway-api-key>`, please replace these by the values appropriate for your setup.

{{< note >}} Replace these with the values appropriate for your setup. {{</ note >}}

### Provisioning

Execute: 

```bash
$ curl -sL 'https://raw.githubusercontent.com/TheThingsNetwork/kerlink-wirnet-firmware/v0.0.3/provision.sh' | bash -s -- 'wirnet-istation' <gateway-ip> <server-address> <gateway-id> <gateway-api-key>
```

Please refer to [Kerlink Wirnet provisioning documentation](https://github.com/TheThingsNetwork/kerlink-wirnet-firmware/tree/v0.0.3#provisioning) if more detailed up-to-date documentation is necessary.

{{< note >}} To avoid being prompted for `root` user password several times, you may add your SSH public key as authorized for `root` user on the gateway, for example, by `ssh-copy-id root@192.168.4.155`. {{</ note >}}

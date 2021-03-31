---
title: "Kerlink Wirnet Station"
description: ""
---

{{< warning >}} Kerlink announced the [Product End of Life](https://www.kerlink.com/wp-content/uploads/2020/01/Product-End-of-Life-Wirnet-Station.pdf) in January 2020 for Wirnet Station, so using [Kerlink Wirnet iStation]({{< ref "/gateways/kerlinkwirnetistation" >}}) is highly recommended. {{</ warning >}}

{{< figure src="wirnet-station.png" alt="Kerlink Wirnet Station" class="float plain" >}}

The [Kerlink Wirnet Station](https://www.kerlink.com/product/wirnet-station/) is a robust and highly reliable outdoor LoRaWAN gateway. It was the first commercially available LoRaWAN gateway on the global market. It offers Ethernet and cellular (3G/2G) backhauls.

<!--more-->

This page guides you to connect Kerlink Wirnet Station to {{% tts %}}.

## Prerequisites

1. User account on {{% tts %}} with rights to create Gateways.
2. Kerlink Wirnet Station gateway connected to the Internet via Ethernet or cellular network. 

{{< note >}} Wirnet Station should be running firmware `v3.0` or higher. {{</ note >}}

## Registration

Create a gateway by following the instructions for [Adding Gateways]({{< ref "/gateways/adding-gateways" >}}). Choose a **Gateway ID**, and fill in the **Gateway EUI** field with value `7276FF0000XXXXXXX`. `XXXXXXX` represents the last 7 characters of the gateway's serial number.

> For example, the **Gateway EUI** could be `7276ff00080E0000`.

Create an API Key with **View gateway information** rights for this gateway using the same instructions. Copy the API key and save it for later use.

## Configuration

All further steps assume the gateway is available at `<gateway-ip>`, {{% tts %}} is available at `<server-address>`, gateway ID is `<gateway-id>` and gateway API key is `<gateway-api-key>`. For Wirnet Station, the `<gateway-model>` has value `'wirnet-station'`.

{{< note >}} Make sure to replace these with the values appropriate for your setup. {{</ note >}}

### Provisioning

In order to ease the process of connecting Wirnet Station to {{% tts %}}, we provide the provisioning script `provision.sh` you can configure your gateway with. This script is compatible with Wirnet Station gateways running firmware `v3.0` and above.

{{< note >}} In case the CPF (Common Packet Forwarder) is not installed on the Wirnet Station, this script will try to install it. If the gateway is running an outdated firmware version, the script will attempt to update the firmware first and install the CPF after. {{</ note >}}

To provision the Wirnet Station gateway at `<gateway-ip>` to use the configuration of `<gateway-id>` provided by {{% tts %}} deployed at `<server-address>`, execute: 

```bash
$ curl -sL 'https://raw.githubusercontent.com/TheThingsNetwork/kerlink-wirnet-firmware/v0.0.3/provision.sh' | bash -s -- <gateway-model> <gateway-ip> <server-address> <gateway-id> <gateway-api-key>
```

{{< note >}} Please refer to [Kerlink Wirnet Firmware provisioning documentation](https://github.com/TheThingsNetwork/kerlink-wirnet-firmware/tree/v0.0.3#provisioning) for more detailed information on provisioning the Wirnet Station. {{</ note >}}

{{< note >}} To avoid being prompted for `root` user password several times, you may add your SSH public key as authorized for `root` user on the gateway, for example, by `ssh-copy-id root@192.168.4.155`. {{</ note >}}

## Troubleshooting

CPF logs are located at `/mnt/fsuser-1/lora/var/log/lora.log`. You can access them by e.g.:

```bash
ssh root@192.168.4.155 'tail -f /mnt/fsuser-1/lora/var/log/lora.log'
```

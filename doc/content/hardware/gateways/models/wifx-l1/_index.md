---
title: "Wifx L1"
vendor: "Wifx"
vendor_page: "https://iot.wifx.net/en/products/wifx-l1/"
description: "The Wifx L1 is a robust and professional grade outdoor LoRaWAN® gateway in an ultra compact form factor, designed and assembled in Switzerland. It is the successor of the Wifx LORIX One."
ip_rating: "IP65"
backhaul: [Ethernet]
aliases: [/gateways/models/wifx-l1]
image: [wifx-l1.png]
---

{{< figure src="wifx-l1.png" alt="Wifx L1" class="plain float" >}}

The Wifx L1 is a robust and professional grade outdoor LoRaWAN® gateway in an ultra compact form factor, designed and assembled in Switzerland. It is the successor of the Wifx LORIX One.

This page will guide you through the steps required to connect the gateway to {{% tts %}}.

<!--more-->

For additional help and technical specifications, please refer to [Wifx's official documentation](https://iot.wifx.net/docs).

## Requirements

1. User account on {{% tts %}} with rights to create Gateways
2. A Wifx L1 running LORIX OS connected to the network
3. A computer, tablet or mobile phone connected to the network (to configure the gateway)

## Get the gateway EUI

To register the gateway, you will need its Gateway EUI/UID. This can be found in the Manager UI. Connect to your gateway and check the **LoRa > Forwarder** page. Under the **Gateway information** section you will see the 'Gateway UID'.

## Registration

Create a gateway in the {{% tts %}} Console by following the instructions for [Adding Gateways]({{< ref "/hardware/gateways/concepts/adding-gateways" >}}). Copy the API Key to a notepad, as you will need it later.

## Configuration

To connect to the Wifx L1, open a web browser on your computer and enter either the gateway hostname or the gateway IP address.

The hostname is `gwXXXXXXX.local` where `XXXXXXX` is the serial number of the gateway (without the intermediate dashes) that can be read from the gateway back sticker. Hostname access is only available on networks that have mDNS enabled. On networks without mDNS, enter the IP address of the gateway in the web browser.

You will land on the login page. Log on using the following default username **admin** and default password **lorix4u**.

{{< figure src="wifx-l1-login.png" alt="Wifx L1 login page" >}}

### Configure the antenna type

Go to the **LoRa > Settings** page.

{{< figure src="wifx-l1-lora-settings-antenna.png" alt="Wifx L1 LoRa hardware page" >}}

In the **Antenna** field, select the antenna you have connected.

- 3dBi is the small antenna (~20cm)
- 5dBi is the big antenna (~40cm)

{{< warning >}} If the antenna type is not configured, the packet forwarder will fail to start. {{</ warning >}}

## Configure the Packet Forwarder

After completing basic configuration, follow the instructions for connecting using [{{% lbs %}}]({{< relref "lbs" >}}).
It is also possible to connect the gateway using the legacy [UDP Packet Forwarder]({{< relref "udp" >}}) if necessary.

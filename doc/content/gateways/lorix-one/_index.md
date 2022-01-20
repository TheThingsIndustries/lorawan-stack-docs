---
title: "Wifx LORIX One"
description: ""
---

{{< figure src="lorix-one.png" alt="LORIX One" class="plain float" >}}

The LORIX One is a robust and professional grade outdoor LoRaWAN® gateway in an ultra compact form factor, designed and assembled in Switzerland.

This page will guide you through the steps required to connect the gateway to {{% tts %}}.

<!--more-->

For additional help and technical specifications, please refer to [Wifx's official documentation](https://iot.wifx.net/docs).

## Requirements

  1. User account on {{% tts %}} with rights to create Gateways
  2. A Wifx LORIX One running LORIX OS connected to the network
  3. A computer, tablet or mobile phone connected to the network (to configure the gateway)

If your gateway is running legacy software, please refer to [the official documentation](https://iot.wifx.net/docs) for upgrade instructions.

## Get the gateway EUI

To register the gateway, you will need its Gateway EUI. This can be found either on the gateway's sticker or by software in the Manager UI.

### From the sticker

To get the Gateway EUI from the sticker, find the MAC address printed on the sticker under the gateway. The gateway EUI corresponds to the MAC address, removing the `;` and adding `FFFE` in the middle.

For example the MAC address

```
FC:C2:3D:AB:CD:EF
```

corresponds to a Gateway EUI of

```
FCC23DFFFEABCDEF
```

The full process for conversion is:
```
FC:C2:3D:AB:CD:EF => FCC23DABCDEF => FCC23D FFFE ABCDEF => FCC23DFFFEABCDEF
```

### From the Manager UI

To get the Gateway EUI from the Manager UI, connect to your gateway and check the **System > Information** page. Under the System section you will see the 'Serial number'. This serial number is the EUI.

## Registration

Create a gateway in the TTN console by following the instructions for [Adding Gateways]({{< ref "/gateways/adding-gateways" >}}). Copy the API Key to a notepad, we will need it later.

## Configuration

To connect to the LORIX One, open a web browser on your computer or device and enter the either the gateway hostname or the gateway IP address.

The hostname is `lorix-one-abcdef.local` where `abcdef` are the 6 last digits of the Gateway EUI. Hostname access is only available on networks that have mDNS enabled. On networks without mDNS, enter the IP address of the gateway in the web browser.

You will land on the login page. Log on using the following the default username **admin** and default password **lorix4u**.

{{< figure src="lorix-one-login.png" alt="LORIX One login page" >}}

### Configure the antenna type

Go to the **LoRa > Settings page > Hardware tab**.

{{< figure src="lorix-one-lora-settings-antenna.png" alt="LORIX One LoRa hardware page" >}}

In the **Antenna** field, select the antenna you have connected.

- 2dBi is the small antenna (~20cm)
- 4dBi is the big antenna (~40cm)

{{< warning >}} If the antenna type is not configured, the packet forwarder will fail to start. {{</ warning >}}

## Configure the Packet Forwarder

After completing basic configuration, follow the instructions for connecting using [{{% lbs %}}]({{< relref "lbs" >}}).
It is also possible to connect the gateway usgin the legacy [UDP Packet Forwarder]({{< relref "udp" >}}) if necessary.

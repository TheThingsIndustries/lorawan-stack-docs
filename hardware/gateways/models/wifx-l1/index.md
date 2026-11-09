# Wifx L1

> The Wifx L1 is a robust and professional grade outdoor LoRaWAN® gateway in an ultra compact form factor, designed and assembled in Switzerland. It is the successor of the Wifx LORIX One.

Source: https://www.thethingsindustries.com/docs/hardware/gateways/models/wifx-l1/


![Wifx L1](https://www.thethingsindustries.com/docs/hardware/gateways/models/wifx-l1/wifx-l1.png)


The Wifx L1 is a robust and professional grade outdoor LoRaWAN® gateway in an ultra compact form factor, designed and assembled in Switzerland. It is the successor of the Wifx LORIX One.

This page will guide you through the steps required to connect the gateway to The Things Stack.

For additional help and technical specifications, please refer to [Wifx's official documentation](https://iot.wifx.net/docs).

## Requirements

1. User account on The Things Stack with rights to create Gateways
2. A Wifx L1 running LORIX OS connected to the network
3. A computer, tablet or mobile phone connected to the network (to configure the gateway)

## Get the gateway EUI

To register the gateway, you will need its Gateway EUI/UID. This can be found in the Manager UI. Connect to your gateway and check the **LoRa > Forwarder** page. Under the **Gateway information** section you will see the 'Gateway UID'.

## Registration

Create a gateway in the The Things Stack Console by following the instructions for [Adding Gateways](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/adding-gateways/). Copy the API Key to a notepad, as you will need it later.

## Configuration

To connect to the Wifx L1, open a web browser on your computer and enter either the gateway hostname or the gateway IP address.

The hostname is `gwXXXXXXX.local` where `XXXXXXX` is the serial number of the gateway (without the intermediate dashes) that can be read from the gateway back sticker. Hostname access is only available on networks that have mDNS enabled. On networks without mDNS, enter the IP address of the gateway in the web browser.

You will land on the login page. Log on using the following default username **admin** and default password **lorix4u**.

![Wifx L1 login page](https://www.thethingsindustries.com/docs/hardware/gateways/models/wifx-l1/wifx-l1-login.png)


### Configure the antenna type

Go to the **LoRa > Settings** page.

![Wifx L1 LoRa hardware page](https://www.thethingsindustries.com/docs/hardware/gateways/models/wifx-l1/wifx-l1-lora-settings-antenna.png)


In the **Antenna** field, select the antenna you have connected.

- 3dBi is the small antenna (~20cm)
- 5dBi is the big antenna (~40cm)

> **Warning:** If the antenna type is not configured, the packet forwarder will fail to start.


## Configure the Packet Forwarder

After completing basic configuration, follow the instructions for connecting using [LoRa Basics™ Station](https://www.thethingsindustries.com/docs/hardware/gateways/models/wifx-l1/lbs/).
It is also possible to connect the gateway using the legacy [UDP Packet Forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/models/wifx-l1/udp/) if necessary.


## Pages in this section

- [Connect the Wifx L1 with Lora Basics™ Station](https://www.thethingsindustries.com/docs/hardware/gateways/models/wifx-l1/lbs/index.md): This section contains instructions for connecting the Wifx L1 gateway to The Things Stack using LoRa Basics™ Station.
- [Connect the Wifx L1 with UDP Packet Forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/models/wifx-l1/udp/index.md): This section contains instructions for connecting the Wifx L1 gateway to The Things Stack using the Semtech UDP Packet Forwarder.


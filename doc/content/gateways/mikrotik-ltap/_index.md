---
title: "MikroTik LtAP"
description: ""
weight: 1
---

{{< figure src="LtaP.jpg" alt="LtAP" class="plain float" >}}

The LtAP LTE kit is a compact weatherproof wireless access point with a built-in cellular modem that supports 4G (LTE) connectivity.

Connect to the LtAP’s built-in high power 2.4 GHz 802.11B/G/N wireless and access the LTE network from your phone or any other wireless device. The LtAP LTE kit also has one Gigabit Ethernet LAN port for wired devices.

<!--more-->

For more info, see Mikrotik's [official product page](https://mikrotik.com/product/ltap_lte_kit)

**Features:**

* 2.4 GHz AP in a rugged case
* LTE installed in miniPCIe slot
* Second miniPCIe slot for expansions
* Three Mini SIM slots
* Gigabit Ethernet port
* Built-in GPS
* Many powering options (DC jack, POE-in, automotive)
* Serial port and full size USB for other devices
* Perfect for cars or outdoor mobile applications

{{< warning >}} Currently, this gateway does not support changing Frequency Plans. {{</ warning >}}

## Prerequisites

1. User account on {{% tts %}} with rights to create Gateways.
2. MikroTik LtAP kit connected via ethernet, LTE or LTE-M.
3. A web browser (see section [Configuration via Browser](#configuration-via-browser)), or the [MikroTik Mobile App](https://mikrotik.com/mobile_app) installed on a smartphone.

## Registration

Create a gateway by following the instructions for [Adding Gateways]({{< ref "/gateways/adding-gateways" >}}). The **EUI** of the gateway can be found on the back panel of the gateway under the field **GW ID**, or under the **Gateway ID** in the LoRa tab of the MikroTik web GUI.

## Configuration via Browser

The MikroTik Routerboard exposes a WiFi Access Point (AP) with SSID `MikroTik-xxxxxx`, where `xxxxxx` are the last 6 digits of the device's MAC Address.

Use your PC, tablet or smartphone to connect to this AP. You will not need a password to connect to this AP.

Open a browser to `http://192.168.88.1/webfig/#Interfaces`.

![MikroTik-portal.png](portal.png)

In the left hand menu select **LoRa**. Make sure the status is set to *Disabled*, if needed press the **D** to disable the LoRa Device.

![MikroTik-portal-lora.png](portal-lora.png)

{{< note >}}
If you don't see any Devices listed in the LoRa tab, you first need to enable the LoRa interface. To do so, go to the **Terminal** (top-right button) and enter the command:
```
system routerboard usb set type=mini-PCIe
```
{{</ note >}}

{{< note >}}
The Gateway ID you see here is the Gateway EUI you need to register the gateway in The Things Stack.
{{</ note >}}

From the top menu, select the **Servers** Tab and press the **Add New** button.

![MikroTik-server](servers.png)

Edit the server parameters.

- **Name**: A distinct name 
- **Address**: Address of the Gateway Server. If you followed the [Getting Started guide]({{< ref "/getting-started" >}}) this is the same as what you use instead of `thethings.example.com`.
- **Up port**: UDP upstream port of the Gateway Server, typically `1700`.
- **Down port**: UDP downstream port of the Gateway Server, typically `1700`.

Press **OK** to save the parameters.

![MikroTik-paramters](parameters.png)

From the top menu, select the **Devices Tab**. Click the **Gateway ID** to configure it.

![MikroTik-Devices](portal-lora-disable.png)

In the device settings, click the **Network Servers Dropdown** to view available servers. Choose the server you just created.

Select **Public** for the Network.

Click **OK** to save the parameters.

Press the **E** to enable the gateway device. It will become a **D** and the device status will update.

If your configuration was successful, your gateway will connect to {{% tts %}} after a couple of seconds.

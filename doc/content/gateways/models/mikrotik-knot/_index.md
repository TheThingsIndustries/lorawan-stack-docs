---
title: "MikroTik KNOT"
vendor: "MikroTik"
vendor_page: "https://mikrotik.com/product/knot"
description: "The MikroTik KNOT LR8/LR9 kit is a universal device with exceptional connectivity options and protocol support. It is an IoT Gateway which can use ethernet or LTE-M (also known as CAT-M) technology as the gateway backhaul."
ip_rating: "IP20"
backhaul: [Ethernet, Wi-Fi, Cellular]
aliases: ["/gateways/mikrotik-knot"]
image: [mikrotik-knot.jpeg]
---

{{< figure src="mikrotik-knot.jpeg" alt="Ltmikrotik-knotAP" class="plain float" >}}

The MikroTik KNOT LR8/LR9 kit is a universal device with exceptional connectivity options and protocol support. It is an IoT Gateway which can use ethernet or LTE-M (also known as CAT-M) technology as the gateway backhaul.

<!--more-->

For more info, see Mikrotik's [official product page](https://mikrotik.com/product/knot).

## Prerequisites

1. User account on {{% tts %}} with rights to create Gateways.
2. MikroTik KNOT connected to Internet via Ethernet or LTE-M.
3. A web browser (see section [Configuration via Browser](#configuration-via-browser)), or the [MikroTik Mobile App](https://mikrotik.com/mobile_app) installed on a smartphone.

{{< warning >}} Currently, this gateway does not support changing frequency channels. {{</ warning >}}

## Registration

Create a gateway by following the instructions for [Adding Gateways]({{< ref "/gateways/concepts/adding-gateways" >}}). The **EUI** of the gateway can be found on the back panel of the gateway under the field **GW ID**, or under the **Gateway ID** in the LoRa tab of the MikroTik web GUI.

## Configuration via Browser

The MikroTik Routerboard exposes a WiFi Access Point (AP) with SSID `MikroTik-xxxxxx`, where `xxxxxx` are the last 6 digits of the device's MAC address. Use your PC, tablet or smartphone to connect to this AP. You will not need a password to connect to this AP. 

By opening your browser to `http://192.168.88.1/webfig` you will be able to access the RouterOS web interface and configure your gateway device.

{{< figure src="portal.png" alt="MikroTik portal" class="plain" >}}

Select **LoRa** on the left hand menu. The status of the gateway should be **Disabled** - if needed, press the **D** button to disable it.

{{< figure src="portal-lora.png" alt="MikroTik LoRa portal" class="plain" >}}

The **Gateway ID** you see here is the **Gateway EUI** you need to register the gateway in The Things Stack.

From the top menu, select the **Servers** tab and press the **Add New** button.

{{< figure src="servers.png" alt="Servers" class="plain" >}}

Edit the server parameters.

- **Name**: A distinct name which you can define yourself
- **Address**: The address of your {{% tts %}} deployment. See [Server Addresses]({{< ref "the-things-stack/concepts/server-addresses" >}}).
- **Up port**: UDP upstream port of the Gateway Server, typically `1700`.
- **Down port**: UDP downstream port of the Gateway Server, typically `1700`.

Press **OK** to save the parameters.

{{< figure src="parameters.png" alt="MikroTik parameters" class="plain" >}}

From the top menu, select the **Devices** tab. Click the **Gateway ID** to configure the gateway.

{{< figure src="portal-lora-disable.png" alt="MikroTik devices" class="plain" >}}

In the device settings, click the **Network Servers** drop-down menu to view available servers. Choose the server you created in the previous step.

Select **Public** for the **Network** and click **OK** to save these parameters.

Press the **E** button to enable the gateway device (it is enabled when **E** becomes **D**) and the device status will update.

If your configuration was successful, your gateway will connect to {{% tts %}} after a couple of seconds.

{{< figure src="KNOT-antenna.png" alt="KNOT antennas" class="plain float" >}}

## Set up LTE-M

Connect an external antenna to the LTE-M antenna connector.

Go to [**Interfaces**](http://192.168.88.1/webfig/#Interfaces), click on **PPP-out1** and fill out the **APN settings** of your operator.

To test whether a connection with your LTE-M network is established, go to the **Terminal** tab in the RouterOS web interface and run the command:

```
/interface ppp-client info ppp-out1
```
If the gateway is set up correctly, it will respond with a message like:

```
modem-status: ready
pin-status: no password required
functionality: full
manufacturer: Quectel
  model: BG77
  revision: BG77LAR02A04
current-operator: LMT (n/a)
signal-strength: -67 dBm
```

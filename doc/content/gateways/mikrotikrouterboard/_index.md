---
title: "MikroTik Routerboard wAP LoRa8 kit"
description: ""
weight: 1
---

MikroTik Routerboard wAP LoRa8 kit is a LoRaWAN gateway that contains a pre-installed UDP packet forwarder and an outdoor weatherproof wireless access point with 2.4 GHz WLAN interface and Ethernet port that could be used as a backend. 

This guide shows how to connect this gateway to {{% tts %}}.

<!--more-->

Its technical specifications can be found in [the MikroTik official documentation](https://mikrotik.com/product/wap_lora8_kit). 

{{< warning >}} Currently, this gateway does not support changing frequency channels. {{</ warning >}}

There are multiple interfaces to configure the gateway parameters. This page guides you to connect it to {{% tts %}} using a web browser or the [MikroTik Mobile App](https://mikrotik.com/mobile_app) for Android/iOS.

{{< figure src="mikrotik-routerboard-connections.jpg" alt="MikroTik Routerboard wAP LoRa8 kit connections" class="float" >}}

## Physical Connections

The MikroTik Routerboard wAP LoRa8 kit comes with a PoE adapter. The image on the right shows the proper connections to the device.

## Prerequisites

1. User account on {{% tts %}} with rights to create Gateways.
2. MikroTik Routerboard wAP LoRa8 kit connected via ethernet.
3. A web browser (see section [Configuration via Browser](#configuration-via-browser)), or the [MikroTik Mobile App](https://mikrotik.com/mobile_app) installed on a smartphone (see section [Configuration via App](#configuration-via-app)).

## Registration

Create a gateway by following the instructions for [Adding Gateways]({{< ref "/gateways/adding-gateways" >}}). The **EUI** of the gateway can be found on the back panel of the gateway under the field **GW ID**.

## Configuration via Browser

The MikroTik Routerboard exposes a WiFi Access Point (AP) with SSID `MikroTik-xxxxxx`, where `xxxxxx` are the last 6 digits of the device's MAC Address (printed on the sticker of the box, under **W01**).

Connect to this AP. By default, there's no password.

Open a browser to `http://192.168.88.1/webfig/#Interfaces`.

{{< figure src="portal.png" alt="Portal" class="plain" >}}

In the left hand menu select **LoRa**. Make sure the status is set to *Disabled*, if needed press the **D** to disable the LoRa Device.

{{< figure src="portal-lora.png" alt="LoRa" class="plain" >}}

From the top menu, select the **Servers** Tab and press the **Add New** button.

{{< figure src="servers.png" alt="Servers" class="plain" >}}

Edit the server parameters.

- **Name**: A distinct name 
- **Address**: Address of your {{% tts %}} deployment. See [Server Addresses]({{< ref "getting-started/server-addresses" >}}).
- **Up port**: UDP upstream port of the Gateway Server, typically `1700`.
- **Down port**: UDP downstream port of the Gateway Server, typically `1700`.

Press **OK** to save the parameters.

{{< figure src="parameters.png" alt="Server Parameters" class="plain" >}}

From the top menu, select the **Devices Tab**. Click the **Gateway ID** to configure it.

{{< figure src="portal-lora-disable.png" alt="Devices" class="plain" >}}

In the device settings, click the **Network Servers Dropdown** to view available servers. Choose the server you just created.

{{< figure src="device-parameters.png" alt="Device parameters" class="plain" >}}

{{< figure src="device-parameters-selected.png" alt="Device parameters selected" class="plain" >}}

Select **Public** for the Network.

{{< figure src="public.png" alt="Network public" class="plain" >}}

Click OK to save the parameters.

Press the **E** to enable the gateway device. It will become a **D** and the device status will update.

{{< figure src="portal-lora-enable.png" alt="Device enable" class="plain" >}}

If your configuration was successful, your gateway will connect to {{% tts %}} after a couple of seconds.

## Configuration via App

The MikroTik Routerboard exposes a WiFi Access Point (AP) with SSID `MikroTik-xxxxxx`, where `xxxxxx` are the last 6 digits of the device's MAC Address (printed on the back panel).

Using the device where the **MikroTik Mobile App** is installed, connect to this AP. By default, there's no password.

Open the **MikroTik Mobile App**. The connection address is prefilled (ex: `192.168.88.1`). Enter the username and password in the login window. By default, the username is **admin** and there is no password. Select **Connect**.

{{< figure src="mikrotik-routerboard-login.png" alt="MikroTik Routerboard wAP LoRa8 kit Login window" >}}

Once logged in, select the **Gear Box Icon** on the top-right corner of the home page.

{{< figure src="mikrotik-routerboard-home-page.png" alt="MikroTik Routerboard wAP LoRa8 kit Home page window" >}}

Scroll down and click on **LoRa**. In the **LoRa** config window select **Devices**. Select the **LoRa Device** and disable it.

{{< figure src="mikrotik-routerboard-lora-settings.jpeg" alt="MikroTik Routerboard wAP LoRa8 kit LoRa Settings" >}}

{{< figure src="mikrotik-routerboard-lora-disable.jpeg" alt="MikroTik Routerboard wAP LoRa8 kit LoRa disable" >}}

Back in the **LoRa** section, select the **Servers** section. Select the **+** button to add a new server. 

Edit the server parameters.

- **Name**: A distinct name 
- **Address**: Address of your {{% tts %}} deployment. See [Server Addresses]({{< ref "getting-started/server-addresses" >}}).
- **Up port**: UDP upstream port of the Gateway Server, typically `1700`.
- **Down port**: UDP downstream port of the Gateway Server, typically `1700`.

Now back in the **LoRa** section, select **Devices** and select the **LoRa Device**. Click on **Network Servers** and select the server based on the name in the previous step. 

Go back and click on the device and enable it.

{{< figure src="mikrotik-routerboard-lora-enable.png" alt="MikroTik Routerboard wAP LoRa8 kit LoRa enable" >}}

If your configuration was successful, your gateway will connect to {{% tts %}} after a couple of seconds.

## Troubleshooting

If the gateway does not connect to {{% tts %}} after a few minutes, disconnect and reconnect the power supply to power-cycle the gateway. The traffic packets can be observed by going to **LoRa** > **Traffic** to check if the gateway is seeing traffic (Rx/Tx) packets.

If no WiFi Access Point is found by the gateway, hold the **Reset** button for 5 seconds during boot time. This will reset the router OS configuration.

# MikroTik Routerboard wAP LoRa8 kit

> MikroTik Routerboard wAP LoRa8 kit is a LoRaWAN® gateway that contains a pre-installed UDP packet forwarder and an outdoor weatherproof wireless access point with 2.4 GHz WLAN interface and Ethernet port that could be used as a backend.

Source: https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotikrouterboard/


![lr8 Kit](https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotikrouterboard/lr8_kit.png)


MikroTik Routerboard wAP LoRa8 kit is a LoRaWAN® gateway that contains a pre-installed UDP packet forwarder and an outdoor weatherproof wireless access point with 2.4 GHz WLAN interface and Ethernet port that could be used as a backend.

This guide shows how to connect this gateway to The Things Stack.

Its technical specifications can be found in [the MikroTik official documentation](https://mikrotik.com/product/wap_lr8_kit).

> **Warning:** Currently, this gateway does not support changing frequency channels.


There are multiple interfaces to configure the gateway parameters. This page guides you to connect it to The Things Stack using a web browser or the [MikroTik Mobile App](https://mikrotik.com/mobile_app) for Android/iOS.

![MikroTik Routerboard wAP LoRa8 kit connections](https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotikrouterboard/mikrotik-routerboard-connections.jpg)


## Physical Connections

The MikroTik Routerboard wAP LoRa8 kit comes with a PoE adapter. The image on the right shows the proper connections to the device.

## Prerequisites

1. User account on The Things Stack with rights to create Gateways.
2. MikroTik Routerboard wAP LoRa8 kit connected via ethernet.
3. A web browser (see section [Configuration via Browser](#configuration-via-browser)), or the [MikroTik Mobile App](https://mikrotik.com/mobile_app) installed on a smartphone (see section [Configuration via App](#configuration-via-app)).

## Registration

Create a gateway by following the instructions for [Adding Gateways](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/adding-gateways/). The **EUI** of the gateway can be found on the back panel of the gateway under the field **GW ID**.

## Configuration via Browser

The MikroTik Routerboard exposes a WiFi Access Point (AP) with SSID `MikroTik-xxxxxx`, where `xxxxxx` are the last 6 digits of the device's MAC Address (printed on the sticker of the box, under **W01**).

Connect to this AP. By default, there's no password.

Open a browser to `http://192.168.88.1/webfig/#Interfaces`.

![Portal](https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotikrouterboard/portal.png)


In the left hand menu select **LoRa**. Make sure the status is set to _Disabled_, if needed press the **D** to disable the LoRa Device.

![LoRa](https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotikrouterboard/portal-lora.png)


From the top menu, select the **Servers** Tab and press the **Add New** button.

![Servers](https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotikrouterboard/servers.png)


Edit the server parameters.

- **Name**: A distinct name
- **Address**: Address of your The Things Stack deployment. See [Server Addresses](https://www.thethingsindustries.com/docs/concepts/server-addresses/).
- **Up port**: UDP upstream port of the Gateway Server, typically `1700`.
- **Down port**: UDP downstream port of the Gateway Server, typically `1700`.

Press **OK** to save the parameters.

![Server Parameters](https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotikrouterboard/parameters.png)


From the top menu, select the **Devices Tab**. Click the **Gateway ID** to configure it.

![Devices](https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotikrouterboard/portal-lora-disable.png)


In the device settings, click the **Network Servers Dropdown** to view available servers. Choose the server you just created.

![Device parameters](https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotikrouterboard/device-parameters.png)


![Device parameters selected](https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotikrouterboard/device-parameters-selected.png)


Select **Public** for the Network.

![Network public](https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotikrouterboard/public.png)


Click OK to save the parameters.

Press the **E** to enable the gateway device. It will become a **D** and the device status will update.

![Device enable](https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotikrouterboard/portal-lora-enable.png)


If your configuration was successful, your gateway will connect to The Things Stack after a couple of seconds.

## Configuration via App

The MikroTik Routerboard exposes a WiFi Access Point (AP) with SSID `MikroTik-xxxxxx`, where `xxxxxx` are the last 6 digits of the device's MAC Address (printed on the back panel).

Using the device where the **MikroTik Mobile App** is installed, connect to this AP. By default, there's no password.

Open the **MikroTik Mobile App**. The connection address is prefilled (ex: `192.168.88.1`). Enter the username and password in the login window. By default, the username is **admin** and there is no password. Select **Connect**.

![MikroTik Routerboard wAP LoRa8 kit Login window](https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotikrouterboard/mikrotik-routerboard-login.png)


Once logged in, select the **Gear Box Icon** on the top-right corner of the home page.

![MikroTik Routerboard wAP LoRa8 kit Home page window](https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotikrouterboard/mikrotik-routerboard-home-page.png)


Scroll down and click on **LoRa**. In the **LoRa** config window select **Devices**. Select the **LoRa Device** and disable it.

![MikroTik Routerboard wAP LoRa8 kit LoRa Settings](https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotikrouterboard/mikrotik-routerboard-lora-settings.jpeg)


![MikroTik Routerboard wAP LoRa8 kit LoRa disable](https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotikrouterboard/mikrotik-routerboard-lora-disable.jpeg)


Back in the **LoRa** section, select the **Servers** section. Select the **+** button to add a new server.

Edit the server parameters.

- **Name**: A distinct name
- **Address**: Address of your The Things Stack deployment. See [Server Addresses](https://www.thethingsindustries.com/docs/concepts/server-addresses/).
- **Up port**: UDP upstream port of the Gateway Server, typically `1700`.
- **Down port**: UDP downstream port of the Gateway Server, typically `1700`.

Now back in the **LoRa** section, select **Devices** and select the **LoRa Device**. Click on **Network Servers** and select the server based on the name in the previous step.

Go back and click on the device and enable it.

![MikroTik Routerboard wAP LoRa8 kit LoRa enable](https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotikrouterboard/mikrotik-routerboard-lora-enable.png)


If your configuration was successful, your gateway will connect to The Things Stack after a couple of seconds.

## Troubleshooting

If the gateway does not connect to The Things Stack after a few minutes, disconnect and reconnect the power supply to power-cycle the gateway. The traffic packets can be observed by going to **LoRa** > **Traffic** to check if the gateway is seeing traffic (Rx/Tx) packets.

If no WiFi Access Point is found by the gateway, hold the **Reset** button for 5 seconds during boot time. This will reset the router OS configuration.


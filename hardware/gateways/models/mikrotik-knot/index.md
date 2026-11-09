# MikroTik KNOT

> The MikroTik KNOT LR8/LR9 kit is a universal device with exceptional connectivity options and protocol support. It is an IoT Gateway which can use ethernet or LTE-M (also known as CAT-M) technology as the gateway backhaul.

Source: https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotik-knot/


![Ltmikrotik-knotAP](https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotik-knot/mikrotik-knot.jpeg)


The MikroTik KNOT LR8/LR9 kit is a universal device with exceptional connectivity options and protocol support. It is an IoT Gateway which can use ethernet or LTE-M (also known as CAT-M) technology as the gateway backhaul.

For more info, see Mikrotik's [official product page](https://mikrotik.com/product/knot).

## Prerequisites

1. User account on The Things Stack with rights to create Gateways.
2. MikroTik KNOT connected to Internet via Ethernet or LTE-M.
3. A web browser (see section [Configuration via Browser](#configuration-via-browser)), or the [MikroTik Mobile App](https://mikrotik.com/mobile_app) installed on a smartphone.

> **Warning:** Currently, this gateway does not support changing frequency channels.


## Registration

Create a gateway by following the instructions for [Adding Gateways](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/adding-gateways/). The **EUI** of the gateway can be found on the back panel of the gateway under the field **GW ID**, or under the **Gateway ID** in the LoRa tab of the MikroTik web GUI.

## Configuration via Browser

The MikroTik Routerboard exposes a WiFi Access Point (AP) with SSID `MikroTik-xxxxxx`, where `xxxxxx` are the last 6 digits of the device's MAC address. Use your PC, tablet or smartphone to connect to this AP. You will not need a password to connect to this AP.

By opening your browser to `http://192.168.88.1/webfig` you will be able to access the RouterOS web interface and configure your gateway device.

![MikroTik portal](https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotik-knot/portal.png)


Select **LoRa** on the left hand menu. The status of the gateway should be **Disabled** - if needed, press the **D** button to disable it.

![MikroTik LoRa portal](https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotik-knot/portal-lora.png)


The **Gateway ID** you see here is the **Gateway EUI** you need to register the gateway in The Things Stack.

From the top menu, select the **Servers** tab and press the **Add New** button.

![Servers](https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotik-knot/servers.png)


Edit the server parameters.

- **Name**: A distinct name which you can define yourself
- **Address**: The address of your The Things Stack deployment. See [Server Addresses](https://www.thethingsindustries.com/docs/concepts/server-addresses/).
- **Up port**: UDP upstream port of the Gateway Server, typically `1700`.
- **Down port**: UDP downstream port of the Gateway Server, typically `1700`.

Press **OK** to save the parameters.

![MikroTik parameters](https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotik-knot/parameters.png)


From the top menu, select the **Devices** tab. Click the **Gateway ID** to configure the gateway.

![MikroTik devices](https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotik-knot/portal-lora-disable.png)


In the device settings, click the **Network Servers** drop-down menu to view available servers. Choose the server you created in the previous step.

Select **Public** for the **Network** and click **OK** to save these parameters.

Press the **E** button to enable the gateway device (it is enabled when **E** becomes **D**) and the device status will update.

If your configuration was successful, your gateway will connect to The Things Stack after a couple of seconds.

![KNOT antennas](https://www.thethingsindustries.com/docs/hardware/gateways/models/mikrotik-knot/KNOT-antenna.png)


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


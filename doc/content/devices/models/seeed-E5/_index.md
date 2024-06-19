---
title: "Seeed Studio Wio-E5"
description: ""
weight: 
---

{{< figure src="wio-e5-mini.jpg" alt="" class="float plain" width="70%">}}

The [Seeed Studio Wio-E5 module](https://www.seeedstudio.com/LoRa-LoRaWAN-Modules-c-1950.html) is embedded with the ST system-level package chip STM32WLE5JC, ARM Cortex M4 ultra-low power MCU, and Long Range SX126X. It supports EU868, US915 and more, making it suitable for wireless sensor networks and other IoT devices that require battery power, low power consumption and long range.

<!--more-->

We will be using the Wio-E5 mini for this guide, but the process should be the same for the other boards.

## AT Commands

First connect the Wio-E5 mini to your computer via a Type-C cable.

Then open a serial tool (eg. Arudino Serial Monitor), select the right COM port, set baudrate to `9600` and select `Both NL & CR`.

In the serial monitor, type `AT` and press enter and you will see the response.

{{< figure src="AT.png" alt="" >}}

Now go to {{% tts %}} and add a new device.

The Seeed Wio-E5 has to be onboarded [**manually**](https://www.thethingsindustries.com/docs/devices/adding-devices/manual/).

To do this, in the **End device type** section, under **Input Method**, select **Enter end device specifics manually** option. The [Manually adding devices]({{< ref "/devices/adding-devices/manual/" >}}) and [Over the Air Activation (OTAA)]({{< ref "/devices/adding-devices/manual/otaa/" >}}) guides explain this procedure in detail. Following details are Quectel KG200ZABTB-specific:

- LoRaWAN version: **LoRaWAN Specification 1.0.2**
- Regional parameters version: **RP001 Regional Parameters 1.0.2 revision B**

{{< figure src="manual-register.png" alt="Settings for manual registration" width="70%">}}

Now we need the device details. To do this send the following AT commands on the serial monitor:

- `AT+ID=DevEui` to get your Device EUI
- `AT+ID=AppEui` to get your App EUI
- `AT+KEY=APPKEY,"generated-appkey"` to set the App Key

The output will be as follows:

```
Tx: AT+ID=DevEui
Rx: +ID: DevEui, 2C:F7:F1:20:24:90:03:63
Tx: AT+ID=AppEui
Rx: +ID: AppEui, 80:00:00:00:00:00:00:07
Tx: AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"
Rx: +KEY: APPKEY 2B7E151628AED2A6ABF7158809CF4F3C
```

Then register your device.

Type the following AT commmands to connect to TTN

```
// If you are using US915
AT+DR=US915
AT+CH=NUM,8-15

// If you are using EU868
AT+DR=EU868
AT+CH=NUM,0-2

AT+MODE=LWOTAA
AT+JOIN
```

The output on serial monitor will be as follows:

```
Tx: AT+DR=US915
Rx: +DR: US915
Tx: AT+CH=NUM,8-15
Rx: +CH: NUM, 8-15

Tx: AT+MODE=LWOTAA
Rx: +MODE: LWOTAA

Tx: AT+JOIN
Rx: +JOIN: Start
+JOIN: NORMAL
+JOIN: Network joined
+JOIN: NetID 000013 DevAddr 26:01:5F:66
+JOIN: Done
```

If you see `+JOIN: Network joined` on your serial console, that means your device has successfully connected to TTN!

## Monitoring Live Data

When your device is registered, select the **Live Data** tab to view all messages exchanged between the end device and {{% tts %}}.

{{< figure src="evk-live-data.png" alt="Live data tab" >}}

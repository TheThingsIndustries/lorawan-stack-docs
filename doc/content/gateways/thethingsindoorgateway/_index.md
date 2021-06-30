---
title: "The Things Indoor Gateway"
description: ""
distributions: ["Community", "Cloud"]
new_in_version: 3.13.3
---

This page guides you to connect {{% ttig %}} to {{% tts %}}.

<!--more-->

{{% ttig %}} is an 8 Channel LoRaWAN gateway, whose technical specifications can be found in [the official documentation](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/). 

{{< figure src="TTIG.jpeg" alt="{{% ttig %}}" >}}

## Prerequisites

1. User account on {{% tts %}} with rights to create Gateways and API Keys.
2. The EUI of the gateway. This EUI is a **16 character** value that can be found at the bottom in the WiFi setup screen.
{{< figure src="TTIG_EUI.png" alt="{{% ttig %}} EUI" >}}
3. The WiFi password of the {{% ttig %}}, typically printed on the back of the gateway. 


## Claiming {{% ttig %}}

{{% ttig %}} is added to The Things Stack via a process called **Gateway Claiming**.

{{< warning >}} Do not register your TTIGs via the regular option of **Adding Gateways**. {{</ warning >}}

### Procedure

Go to **Gateways** in the top menu, and click **Claim Gateway** to reach the gateway claiming page.

Fill the **Gateway EUI**, the **Claim authentication code** (the WiFi Password), the **Gateway ID** and choose the appropriate **Frequency Plan**.

Click **Claim gateway** to finish.

{{< figure src="TTIG_Claim.png" alt="{{% ttig %}} Claiming" >}}

If your inputs are correct, a new gateway will be created and you will be redirected to the gateway overview page of your newly created gateway.

## Connecting {{% ttig %}}

### New Gateways

Press the reset button (small button at the back of the gateway next to the USB-C port) for 5 seconds until the LED blinks rapidly GREEN<->RED for a couple of times.

Hold the SETUP (button at the top of the gateway, next to the LED) for 10 seconds until the LED blinks RED rapidly.

The gateway now exposes a WiFi AP whose SSID is **MINIHUB-xxxxxx** where `xxxxxx` is the last 6 digits of the gateway EUI. The password for this network is printed on the back panel of the device under **WiFi PW**.

After connecting to this network go to *192.168.4.1* using a web browser to access the WiFi config page.
{{< figure src="TTIG_WiFi_Setup.png" alt="{{% ttig %}} WiFi Setup" >}}

Select the WiFi network by clicking the **+** button on the desired network (and enter the password if it's a secure network).

{{< note >}} {{% ttig %}} does not support enterprise WiFi networks. {{</ note >}}

Select the **Save and Reboot** option. 

If your configuration is correct, 
  * The gateway will blink GREEN for a few seconds while it connects to this network.
  * Then, it will blink GREEN<->RED for a few seconds while it connects to the server and fetches the necessary configuration.
  * Please allow 5-10 mins for the gateway to pick up new configuration. 

{{< note >}} If this is the first time your gateway is being powered on/connected to WiFi, it might pickup a new firmware depending on when it was last updated. This is indicted by alternating GREEN/RED blinks of the LED. Please leave the gateway powered on when this happens. {{</ note >}}

### Gateways Connected to Another LNS

If the {{% ttig %}} is currently connected to another LNS, do either of the following
- Wait up to 24 hrs (this is the default action for gateways that are not physically reachable). {{% ttig %}} connects to the server every 24 hours to check for new configuration.
- Unplug the power supply, wait for a few seconds and plug it back in. {{% ttig %}} now connects to the server to check for new configuration.

## Troubleshooting

### Common Errors

#### Gateway Not Authorized for Claiming

If you have already registered your TTIG, you have the following options

a. If you would like to retain the Gateway ID that you registered it with, support will be added in a subsequent release to claim the gateway while retaining it's current Gateway ID.

b. If you would like to claim the gateway with a new Gateway ID, you can delete the existing gateway and follow the claiming process below with a new Gateway ID.

#### Gateway with ID Already Exists

This means that either you or another user has already used the Gateway ID. Please choose another ID and try again.

### LED States

|Color(s) | Illumination Pattern |Operating Mode | Meaning|
|---|---|---|---| 
|GREEN|Blinking (freq 1 sec)|GW| WiFi not connected (or trying to connect)|
|GREEN|Blinking (freq 1/4 sec)|GW| Connected to WiFi, establishing connection to LNS/Configuring radio|
|GREEN|Solid|GW| Connected to WiFi, connected to LNS backend, listening for Packets|
|GREEN/RED|Alternate Blinking (freq 1/4 sec)|CONF| Scanning WiFi networks, setting up Config AP|
|RED|Blinking (freq 1/4 sec)|CONF| Config AP Active|

### Button Actions

There are three possible button actions on the TTIG
* SETUP Button pressed for 10s: 
  * Switch to CONF mode if in GW mode.
* SETUP Button pressed for 5s:
  * Reboot if in CONF mode, do nothing in GW mode.
* RESET Button pressed for 5s:
  * Factory reset (wipe out WiFi and LNS credentials, though CUPS credentials are retained).


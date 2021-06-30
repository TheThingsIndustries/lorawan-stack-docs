---
title: "The Things Indoor Gateway"
description: ""
distributions: ["Community", "Cloud"]
new_in_version: 3.13.3
---

{{< figure src="TTIG.jpeg" alt="{{% ttig %}}" class="plain float">}}

This page guides you to connect {{% ttig %}} to {{% tts %}}.

<!--more-->

{{% ttig %}} is an 8 Channel LoRaWAN gateway, whose technical specifications can be found in [the official documentation](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/). 

## Prerequisites

1. User account on {{% tts %}} with rights to create Gateways and API Keys.
2. The gateway EUI. The EUI of the gateway is **not** the WiFi MAC address printed on the back of the gateway, but is derived from the first number that typically is of the form **58A0CBxxxxxx**, printed on the top of the sticker below the QR code. For example, if that number is **5BA0CB800BE7**, insert **FFFE** after the first 6 characters to make it a 16 character Gateway EUI (e.g. 5BA0CBFFFE800BE7).

{{< note >}} The gateway EUI can later be found at the bottom in the WiFi setup screen. {{</ note >}}
{{< figure src="TTIG_EUI.png" alt="{{% ttig %}} EUI" >}}

3. The WiFi password of the {{% ttig %}}, typically printed on the back of the gateway. 


## Claiming {{% ttig %}}

{{% ttig %}} is added to The Things Stack via a process called **Gateway Claiming**.

{{< warning >}} Do not register your TTIGs via the regular option of **Adding Gateways**. {{</ warning >}}

Go to **Gateways** in the top menu, and click the **Claim Gateway** button on the upper right to reach the gateway claiming page.

Fill the **Gateway EUI**, the **Claim authentication code** (the WiFi Password from Prerequisites), the **Gateway ID** and choose the appropriate **Frequency Plan**.

Click **Claim gateway** to finish.

{{< figure src="TTIG_Claim.png" alt="{{% ttig %}} Claiming" >}}

If your inputs are correct, a new gateway will be created and you will be redirected to the gateway overview page of your newly created gateway.

## Connecting {{% ttig %}}

### Gateways Connected to Another LNS

{{< note >}} This is applicable if your gateway was previously connected to The Things Network v2. {{</ note >}}

If the {{% ttig %}} is currently connected to another LNS, do either of the following
- Wait up to 24 hrs (this is the default action for gateways that are not physically reachable). {{% ttig %}} connects to the server every 24 hours to check for new configuration.
- Unplug the power supply, wait for a few seconds and plug it back in. {{% ttig %}} now connects to the server to check for new configuration.

### New Gateways

If your gateway has never been configured to any LNS, follow the steps below.

Keep the RESET button (small button at the back of the gateway next to the USB-C port) pressed for 5 seconds until the LED blinks rapidly from GREEN to RED and vice versa for a couple of times.

Hold the SETUP button (at the top of the gateway, next to the LED) for 10 seconds until the LED rapidly blinks RED.

The gateway now exposes a WiFi access point whose SSID is **MINIHUB-xxxxxx**, where `xxxxxx` is the last 6 digits of the gateway EUI. The password for this network is same WiFi password from the Prerequisites.

After connecting to this network go to `192.168.4.1` using a web browser to access the WiFi config page.
{{< figure src="TTIG_WiFi_Setup.png" alt="{{% ttig %}} WiFi Setup" >}}

Select the WiFi network by clicking the **+** button next to the desired network (and enter its password if it is a secure network).

{{< note >}} {{% ttig %}} does not support enterprise WiFi networks. {{</ note >}}

Click **Save and Reboot** to finish.

If your configuration is correct, 
  *  The gateway will blink GREEN for a few seconds until it connects to the selected WiFi network.
  * Then, it will blink from GREEN to RED and vice versa for a few seconds while it connects to the server and fetches the necessary configuration.
  * Please allow 5-10 minutes for the gateway to pick up the new configuration. 

{{< note >}} If this is the first time your gateway is being powered on/connected to WiFi, it might pick up a new firmware depending on when it was last updated. This is indicated by alternating GREEN/RED blinks of the LED. Please leave the gateway powered on when this happens. {{</ note >}}

## Troubleshooting

### Common Errors

#### Claim Authentication Code Mismatch

Double-check the EUI and the WiFi Password. Sometimes an `8` looks like a `3` or a `B`, an `1` like an `l`, a `0` like an `O`, etc.

If your {{% ttig %}} was sold by IoT-Shop.de (either directly or via Amazon.com) The Things Network may not be able to claim your gateway on the upstream server, because your gateway may already have been claimed by the Alpha-Omega network. We currently don’t have a solution for this, but we’ll reach out to Alpha-Omega and Semtech to see how we can resolve this for you. Until then, your {{% ttig %}} will just stay connected to V2, and traffic for V3 devices will be forwarded through Packet Broker.

#### Gateway Not Authorized for Claiming

If you have already registered your TTIG on the same {{% tts %}} cluster that you want to claim, you have the following options

a. If you would like to retain the Gateway ID that you registered it with, support will be added in a subsequent release to claim the gateway while retaining its current Gateway ID.

b. If you would like to claim the gateway with a new Gateway ID, you can delete the existing gateway from {{% tts %}} cluster and follow the claiming process below with a new Gateway ID.

#### Gateway with ID Already Exists

This means that either you or another user has already used the Gateway ID. Please choose another ID and try again.

### LED States

|Color(s) | Illumination Pattern |Operating Mode | Meaning|
|---|---|---|---| 
|GREEN|Blinking (freq 1 sec)|GW| WiFi not connected (or trying to connect)|
|GREEN|Blinking (freq 1/4 sec)|GW| Connected to WiFi, establishing connection to LNS/configuring radio|
|GREEN|Solid|GW| Connected to WiFi, connected to LNS backend, listening for packets|
|GREEN/RED|Alternate Blinking (freq 1/4 sec)|CONF| Scanning WiFi networks, setting up Config AP|
|RED|Blinking (freq 1/4 sec)|CONF| Config AP active|

### Button Actions

There are three possible button actions on the TTIG that are listed below.
* SETUP button pressed for 10s:
  * Switch to CONF mode if in GW mode
* SETUP button pressed for 5s:
  * Reboot if in CONF mode, do nothing in GW mode
* RESET button pressed for 5s:
  * Factory reset (wipes out WiFi and LNS credentials, retains CUPS credentials)

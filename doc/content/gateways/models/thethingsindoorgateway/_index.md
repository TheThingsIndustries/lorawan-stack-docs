---
title: "The Things Indoor Gateway"
description: ""
distributions: ["Sandbox", "Cloud"]
new_in_version: 3.13.3
aliases: [/gateways/thethingsindoorgateway]
---

{{< figure src="TTIG.jpeg" alt="{{% ttig %}}" class="plain float">}}

This page guides you to connect {{% ttig %}} to {{% tts %}}.

<!--more-->

{{% ttig %}} is an 8 Channel LoRaWAN® gateway, whose technical specifications can be found in [the official documentation](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/).

## Prerequisites

1. User account on {{% tts %}} with rights to create Gateways and API Keys.
2. The gateway EUI. The EUI of the gateway is **not** the WiFi MAC address printed on the back of the gateway, but is derived from the first number that typically is of the form **58A0CBxxxxxx**, printed on the top of the sticker below the QR code. For example, if that number is **58A0CB800BE7**, insert **FFFE** after the first 6 characters to make it a 16 character Gateway EUI (e.g. 58A0CBFFFE800BE7).

The gateway EUI can later be found at the bottom in the WiFi setup screen.

{{< figure src="TTIG_EUI.png" alt="{{% ttig %}} EUI" >}}

3. The WiFi password of the {{% ttig %}}, typically printed on the back of the gateway.

## Claiming {{% ttig %}}

{{% ttig %}} is added to The Things Stack via a process called **Gateway Claiming**.

{{< note >}}Claiming of gateways is not supported on {{% tts %}} Open Source.{{</ note >}}

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}

Go to **Gateways** in the top menu, and click **+ Register Gateway** to reach the gateway registration page.

Fill the **Gateway EUI** and click **Confirm**.

Depending on whether the **Gateway EUI** is claimable you will either be shown the claiming form or the manual registration form.

{{< warning >}} Do not register your TTIGs via the manual registration. All TTIGs should be claimable, if you see the manual registration form please contact support. {{</ warning >}}

If your gateway is claimable, you will see the claiming form. Here, fill in the **Authentication Code**, **Gateway ID** and the **Frequency Plan**.

Click **Claim Gateway** to finish.

{{< figure src="TTIG_Claim.png" alt="{{% ttig %}} Claiming" >}}

If your inputs are correct, a new gateway will be created and you will be redirected to the gateway overview page of your newly created gateway.

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

The following example claims and configures a gateway with EUI `00800000A00009EF` and Gateway ID `gtw1` to the {{% ttss %}} `eu1` cluster.

Please adapt the example for your specific case.

```bash
tti-lw-cli gateways claim 00800000A00009EF \
--authentication-code abcdef \
--target-gateway-id gtw1
--target-cups-uri https://eu1.cloud.thethings.network:443 \
--target-gateway-server-address eu1.cloud.thethings.network \
--target-frequency-plan-id EU_863_870 \
--user-id user1
```

For {{% tts %}} Cloud, you will also need to append the Tenant ID to `--target-cups-uri` and `--target-gateway-server-address` fields.

For example using `tenant1`, the `target-cups-uri` would be `https://tenant1.eu1.cloud.thethings.industries:443` and the `target-gateway-server-address` would become `tenant1.eu1.cloud.thethings.industries`.

{{< /tabs/tab >}}

{{< /tabs/container >}}

## Connecting {{% ttig %}}

### Gateways Connected to Another LNS

{{< note >}} This is applicable if your gateway was previously connected to The Things Network v2. {{</ note >}}

If the {{% ttig %}} is currently connected to another LNS, do either of the following

- Wait up to 24 hrs (this is the default action for gateways that are not physically reachable). {{% ttig %}} connects to the server every 24 hours to check for new configuration.
- Perform a hard reset by holding down the reset button for at least 5 seconds. Then, follow the new gateway instructions below.

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

- The gateway will blink GREEN for a few seconds until it connects to the selected WiFi network.
- Then, it will blink from GREEN to RED and vice versa for a few seconds while it connects to the server and fetches the necessary configuration.
- Please allow 5-10 minutes for the gateway to pick up the new configuration.

If this is the first time your gateway is being powered on/connected to WiFi, it might pick up a new firmware depending on when it was last updated. This is indicated by alternating GREEN/RED blinks of the LED. Please leave the gateway powered on when this happens.

## Existing Gateways

You can also claim gateways that have been previously claimed or registered to {{% tts %}}.

For this, you need to authorize your gateways for claiming. This is currently only supported via the CLI.

{{< cli-only >}}

```bash
ttn-lw-cli gateways claim authorize <gateway-id>
```

Now claim the gateway as described in the [Claiming {{% ttig %}}]({{< ref "#claiming-the-things-indoor-gateway" >}}) section.

Once complete, make sure to unauthorize the gateway to prevent further claiming.

```bash
ttn-lw-cli gateways claim unauthorize <gateway-id>
```

## Using The Things Indoor Gateway with Different LNS

Once {{% ttig %}} is claimed on a {{% tts %}} cluster, the following steps will allow it to be used with a different LNS Server.

### Connecting to an LNS on a Local Network

If you want to connect your gateway to an LNS on a local network (for example if you have {{% tts %}} installed for debugging on your laptop), use the steps below.

{{< note >}} In order to connect your {{% ttig %}} to a local {{% tts %}} network, the [`gs.basic-station.allow-unauthenticated` option]({{< ref "/reference/configuration/gateway-server#security-options" >}}) must be set to `true` in [{{% tts %}} configuration]({{< ref "/the-things-stack/host/docker/configuration#understanding-the-things-stack-configuration" >}}). {{</ note >}}

First, register the {{% ttig %}} on your target LNS by following [the instructions]({{< ref "/gateways/concepts/adding-gateways" >}}).

In order for this to work, both the {{% ttig %}} and the local machine where the LNS is running must be connected to the same WiFi access point.

Find the IP address of the machine on which the LNS is installed. You can do this either on the network page of the settings of your operating system or use a command line tool like `ifconfig`.

On the {{% tts %}} cluster where the gateway is claimed, head over to the **General settings** tab on the navigation panel of the gateway.

Set the **Gateway Server Address** in the format `ws://<ip-address>:<port>`. Here, the port is the plain text web socket port that is exposed by the LNS. For example, if you are using a locally installed {{% tts %}} instance and the machine's IP address is `192.168.2.2`, then Gateway Server address would be `ws://192.168.2.2:1887`. If you are using a different port, then set that in the address.

Now, clear the **LoRa Basics Station LNS Authentication Key** value and press **Save changes**.

Restart the {{% ttig %}} by removing and reinserting the power supply and if your configuration is correct, your {{% ttig %}} will be connected to the LNS on the local machine.

{{< note >}} Connecting the {{% ttig %}} with TLS and/or with an authentication key to a local machine is not easy since that requires setting up local certificates and a DNS resolver. This is out of the scope of the documentation and hence is not explained here. {{</ note >}}

### Connecting to a Remote LNS

If you want to connect your gateway to a remotely hosted LNS, use the steps below.

First, register the {{% ttig %}} on your target LNS. If the target LNS requires authenticated connections, then create an auth token for the gateway. If the target LNS is a {{% tts %}} instance, then create an API Key with Link Gateway Rights. Follow the instructions for [Creating a Gateway API key]({{< ref "/gateways/concepts/adding-gateways#create-gateway-api-key" >}}).

On the {{% tts %}} cluster where the gateway is claimed, head over to the **General settings** tab on the navigation panel of the gateway.

Set the **Gateway Server Address** to the DNS of the target LNS. For example, if the LNS is hosted at `thethings.example.com` and is using port `8887` for WebSocket traffic with TLS, then the address would be `thethings.example.com:8887`.

If the target LNS requires authenticated connections, set the **LoRa Basics Station LNS Authentication Key** field with the auth token for the gateway on the target LNS and press **Save changes**.

Either restart the {{% ttig %}} or wait upto 24 hours for it to reconnect to the CUPS server. If your configuration is correct, your {{% ttig %}} will be connected to the target LNS.

{{< note >}} {{% tts %}} automatically fetches the server certificate chain of the target LNS. This chain should be a standard certificate chain trusted by most browsers. At the moment, we don't support using self-signed custom certificates in this mode of operation. {{</ note >}}

## Troubleshooting

### Common Errors

#### Claim Authentication Code Mismatch

Double-check the EUI and the WiFi Password. Sometimes an `8` looks like a `3` or a `B`, an `1` like an `l`, a `0` like an `O`, etc. Note that the `FFFE` string has an `e` at the end.

#### Gateway Not Authorized for Claiming

If you have already registered/claimed your {{% ttig %}} in {{% tts %}} cluster that you want to claim, check the section on [claiming existing gateways]({{< ref "#existing-gateways" >}}).

#### Gateway with ID Already Exists

This means that either you or another user has already used the Gateway ID. Please choose another ID and try again.

#### Gateway shows status `Disconnected` and the LED status is solid green. What do I do?

Reboot your {{% ttig %}}. If the gateway status is still `Disconnected` after a reboot, try performing a factory reset and reconfiguring the gateway.

### LED States

| Color(s)  | Illumination Pattern              | Operating Mode | Meaning                                                             |
| --------- | --------------------------------- | -------------- | ------------------------------------------------------------------- |
| GREEN     | Blinking (freq 1 sec)             | GW             | WiFi not connected (or trying to connect)                           |
| GREEN     | Blinking (freq 1/4 sec)           | GW             | Connected to WiFi, establishing connection to LNS/configuring radio |
| GREEN     | Solid                             | GW             | Connected to WiFi, connected to LNS backend, listening for packets  |
| GREEN/RED | Alternate Blinking (freq 1/4 sec) | CONF           | Scanning WiFi networks, setting up Config AP                        |
| RED       | Blinking (freq 1/4 sec)           | CONF           | Config AP active                                                    |

### Button Actions

There are three possible button actions on the TTIG that are listed below.

- SETUP button pressed for 10s:
  - Switch to CONF mode if in GW mode
- SETUP button pressed for 5s:
  - Reboot if in CONF mode, do nothing in GW mode
- RESET button pressed for 5s:
  - Factory reset (wipes out WiFi and LNS credentials, retains CUPS credentials)

### Serial logging

It is possible to read debug messages of the gateway but it requires opening its casing.

{{< warning >}} Opening the casing may damage the gateway and/or void your warranty. {{</ warning >}}

The casing needs to be first opened by unscrewing two screws found below the top and the bottom panel. Then, connect a 3.3V UART-USB Interface such as an FTDI to your computer. Connect the Rx (FTDI) to the Tx of the Gateway and ground pins.

Use a serial terminal (Ex: `PUTTY` on Windows and `screen`/`minicom` on macOS/Linux) with a baudrate of 115200@8N to read the serial out. The connections are shown in the image below.

{{< figure src="TTIG_Serial.jpg" alt="{{% ttig %}} Serial" >}}

### Operating behind a firewall

The following connections must be permitted in the firewall.

| IP Version | Protocol | Destination                         | Port | Description |
| ---------- | -------- | ----------------------------------- | ---- | ----------- |
| IPv4       | TCP      | \<cluster\>.cloud.thethings.network | 443  | CUPS        |
| IPv4       | TCP      | \<cluster\>.cloud.thethings.network | 8887 | LNS         |
| IPv4       | TCP      | rjs.sm.tc                           | 9191 | Root CUPS   |
| IPv4       | UDP      | your DNS server(s)                  | 53   | DNS         |

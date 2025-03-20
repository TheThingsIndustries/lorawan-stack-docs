---
title: "The Things Indoor Gateway Pro"
vendor: "The Things Industries"
vendor_page: "https://www.thethingsindustries.com/gateways/the-things-indoor-gateway-pro/"
description: "The Things Indoor Gateway Pro is a fully cloud-managed 8 channel LoRaWAN® gateway."
backhaul: [Cellular, Wi-Fi, Ethernet]
aliases: [/gateways/models/thethingsindoorgatewaypro]
new_in_version: 3.32.0
image: [ttigpro.png]
---

{{< figure src="ttigpro.png" alt="{{% ttigpro %}}" class="plain float" width="100%" >}}

This page will guide you through connecting {{% ttigpro %}} to {{% tts %}}.

<!--more-->

{{% ttigpro %}} is a fully cloud-managed 8 channel LoRaWAN® gateway.

- Fully cloud-managed, true zero-touch provisioning via [{{% ttigw %}}]({{< relref "../../concepts/ttigw" >}})
- Features Cellular, WiFi and Ethernet backhaul
- Includes Cellular data plan for configuration and connection with {{% tts %}}
- Remote WiFi configuration
- Supports static IP and custom DNS for WiFi and Ethernet
- Automatic connection failover between Cellular, WiFi and Ethernet
- Positioning via WiFi geolocation
- Power via USB-C or 5-12 V DC
- White label design
- Flexible antenna design for desktop, ceiling and wall mount
- Backplate for easy mounting on walls and ceilings
- Available for EU868 and US915 regions

You can find the brochure [here](https://www.thethingsindustries.com/media/uploads/managed-gateway-brochure.pdf).

## Prerequisites

1. User account on {{% tts %}} with rights to create gateways
2. Billing account on [The Things Industries Account](https://accounts.thethingsindustries.com) to manage subscriptions
3. Optional: camera (webcam or phone) for scanning the QR code

## Mounting

{{% ttigpro %}} is typically installed either on the desktop, on the ceiling or on the wall.

### Desktop Mount

Take off the baffle and mounting plate on the back of the gateway, then you can place the gateway on the desktop.

{{< figure src="desktop-mount.svg" width="40%" alt="Desktop mount" class="plain" >}}

### Ceiling or Wall Mount

Take off the mounting plate on the back of the gateway, drill two holes on the ceiling or wall according to the mounting plate, then fix the included wall plugs into the ceiling or the wall. Fix the mounting plate to the wall plugs with the included screws, then turn the device clockwise to lock it to the mounting plate.

{{< figure src="ceiling-mount.svg" width="50%" alt="Ceiling mount" class="plain" >}}

When using wall mount, position the antennas upwards. When using ceiling mount, position the antennas downwards.

## Power

Connect the USB-C cable or a 5-12 V DC power cable. The latter is typically used with building automation systems that provide (backup) power to critical IoT devices and certain Power-over-Ethernet (PoE) splitters.

{{< figure src="power.svg" width="50%" alt="Power" class="plain" >}}

## Subscription

{{% ttigpro %}} requires a subscription to work. The subscription includes cellular data that can be used for remote configuration as well as the connection with {{% tts %}} for LoRaWAN traffic.

1. Go to [Gateway Subscription](https://accounts.thethingsindustries.com/gateway-subscription) in The Things Industries Account
2. Click **Add Gateway**
3. Scan the QR code with your camera or enter the Gateway EUI and Owner Token manually. You can find the QR code, the EUI and the Owner Token on the bottom of the gateway (with the mounting plate removed).
4. Click **Add gateways**
   {{< figure src="subscription-add-gateway.png" alt="Scan QR code" >}}

5. Click **Next step** to complete the order

## Claim in {{% tts %}}

{{% ttigpro %}} can be claimed in {{% tts %}} deployments that are connected to The Things Gateway Controller. {{% tts %}} Cloud and Sandbox are supported out-of-the-box.

1. In {{% tts %}} Console, go to **Gateways**
2. Click **Register Gateway**
3. Click **Scan gateway QR code** and scan the QR code on the bottom of the gateway. Alternatively, enter the **Gateway EUI** and **Owner token**. This information is also available in [The Things Industries Account](https://accounts.thethingsindustries.com) if you do not have physical access to your gateway
4. Enter a **Gateway ID** and select the **Frequency plan** to use
5. Click **Claim gateway**

You should now see the **Connection settings** screen:

{{< figure src="post-claim.png" alt="Claim successful" >}}

{{< warning >}}When powering on your gateway for the first time without Ethernet, it may take several minutes to activate the SIM card and attach to a mobile network.{{< /warning >}}

## Connection Settings

{{% ttigpro %}} supports Cellular, WiFi and Ethernet. You can configure WiFi and Ethernet in {{% tts %}}.

First, go to the gateway's connection settings:

1. In {{% tts %}} Console, go to your {{% ttigpro %}} under **Gateways**
2. In the left menu, expand **Managed gateway** and click **Connection settings**

### WiFi Configuration

Managed WiFi gateways in {{% tts %}} support profiles that can be assigned to multiple gateways. This eliminates the need to enter WiFi credentials for multiple gateways that are configured to use the same network.

You can select profiles of **Yourself** that are linked to your {{% tts %}} user account. You can also use the dropdown to select an organization that you are a member of. This allows other organization members to reuse the WiFi profile for gateways they configure. Alternatively, you can select **Set a config for this gateway only** if you don't need a reusable profile.

Select the WiFi access point name (SSID) to connect with, enter the password and click **Save changes**.

{{< figure src="wifi.png" alt="WiFi configuration" >}}

{{< note "WiFi credentials are stored securely in The Things Gateway Controller. This is a service operated by The Things Industries. The WiFi passwords can only be retrieved by gateways for which the WiFi profile is configured. {{% tts %}} has no access to the passwords once they are saved. If you network security policy disallows entering WiFi credentials on an external platform, please only use Cellular or Ethernet." />}}

### Static IP and Custom DNS

For both WiFi and Ethernet, you can configure static IP and custom DNS settings.

For WiFi, under **WiFi connection**, uncheck **Use default network interface settings** to expand the menu with static IP and custom DNS. For Ethernet, under **Ethernet connection**, check **Use a static IP address** to expand the menu.

## LED Meaning

{{% ttigpro %}} has two LEDs inside the case directly above to the SIM card slot.

The **left** LED is for The Things Gateway Controller and system status:

| Color | Pattern  | Meaning                                           |
| ----- | -------- | ------------------------------------------------- |
| Off   |          | Off                                               |
| Red   | Solid    | Power on, not connected to the Gateway Controller |
| Red   | Blinking | Firmware upgrading, blink speed is the progress   |
| Green | Solid    | Connected to the Gateway Controller               |

The **right** LED is for {{% tts %}}:

| Color | Pattern | Meaning                             |
| ----- | ------- | ----------------------------------- |
| Off   |         | Off or not connected to {{% tts %}} |
| Green | Solid   | Connected to {{% tts %}}            |

## (Factory) Reset

You can **reset** the gateway by pressing the reset button shortly on the back of the gateway with a paperclip or other small object.

{{% ttigpro %}} stores some connection settings for quickly recovering WiFi and Ethernet connectivity after a reboot. This includes WiFi credentials, static IP and custom DNS settings.

If you configured wrong Ethernet settings and you do not have WiFi or Cellular coverage available, the gateway may not be able to reconnect to The Things Gateway Controller or {{% tts %}}. In that case, you can **factory reset** the gateway by pressing and holding the reset button for at least 5 seconds (the red LED starts blinking fast). {{% ttigpro %}} will now use DHCP for obtaining an IP address and connect to The Things Gateway Controller.

## Advanced: Serial Output

{{% ttigpro %}} writes comprehensive logs via its USB-C port which also functions as serial port. You can connect a serial port client (e.g. PUTTY on Windows, `screen` on macOS or `minicom` on Linux) with a baud rate of 115200, 8 data bits, no parity and 1 stop bit. This provides extensive insight in why Cellular, WiFi and/or Ethernet is failing.

## Troubleshooting

#### I get an error "gateway subscription not attached and active" while claiming The Things Industries Gateway Pro

The error occurs if the gateway does not have active subscription. For more information refer [subscription](https://www.thethingsindustries.com/docs/hardware/gateways/models/thethingsindoorgatewaypro/#subscription). After purchasing the TTIG Pro gateway, you will receive an email with instructions on how to create subscriptions for the gateway. If you don't see the email in your inbox, please check your spam folder as well.

If the issue persists, please contact `support@thethingsindustries.com`.
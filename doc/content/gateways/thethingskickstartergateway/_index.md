---
title: "The Things Kickstarter Gateway"
description: ""
---

This page guides you to connect The Things Kickstarter Gateway to {{% tts %}}.

<!--more-->

The Things Kickstarter Gateway is a LoRaWAN gateway, whose technical specifications can be found in [the official documentation](https://www.thethingsnetwork.org/docs/gateways/gateway/). 

## Prerequisites

1. User account on {{% tts %}} with rights to create Gateways and API Keys.
2. The Things Gateway running the latest firmware (a minimum of `v1.0.8` is necessary).

## Registration

Create a gateway by following the instructions for [Adding Gateways]({{< ref "/gateways/adding-gateways" >}}). Choose a **Gateway ID**. An **EUI** is not necessary.

Create an API Key with Gateway Link rights for this gateway using the same instructions. Copy the key and save it for later use.

## Configuration

Open the front panel of the gateway casing.

While the gateway is powered on, hold the pink reset button for 5 seconds (until each of the 5 LEDs illuminate). This erases the existing configuration on the gateway.

The gateway will now expose a WiFi Access Point (AP) whose SSID is of the form `TheThings-Gateway-xxxxx`, to which you should now connect using password `thethings`.

In a web browser, open the gateway's configuration page by navigating to http://192.168.84.1/

{{< figure src="ttkg-config-window.png" alt="TTKG Configuration Window" >}}

Enter the **Gateway ID** that you chose earlier. To connect to a Cloud Hosted tenant, the **Gateway ID** field has to be in the following format: `<gateway-id@tenant-id>`.

Choose the WiFi network from the drop down and enter a password if necessary.

Click the **Show Advanced Options** button and enter the following fields:

- **Account Server**: Address of your {{% tts %}} deployment. See [Server Addresses]({{< ref "getting-started/server-addresses" >}}).
- **Gateway Key**: The API Key that you created earlier.
- Click **Save** when done.

This will apply the setting and reboot the gateway. If all the steps have been followed correctly, your gateway will now connect to {{% tts %}}.

## Troubleshooting

Please allow about 5 mins for the gateway to attempt connection before troubleshooting. During this period only 2 or 3 LEDs will be ON with the 3rd LED slowly blinking.

If there are only 3 LEDs active for an extended period of time, unplug the gateway, wait for 10s and then reconnect. Also, try using an Ethernet connection as that improves the network connectivity.

### How can I open or close The Things Kickstarter Gateway? 

To open the gateway, put it down with the antenna socket at the top and (gently) lift the left and right sides of the white shield.

To close the gateway, align the lid and push firmly at the sides so you can hear it snap in place.

### The second time I power my gateway, it takes time to start up. why? 

Upon every power cycle and every 24 hours, the gateway checks for a new firmware. If the latest firmware is not downloaded yet, it will download the new image and perform a reboot in order to install the new image. This can take up to a few minutes. The process is indicated by a flashing power LED. Power cycling during this process is not dangerous, but this process will be restarted on the next start-up, so please be patient!

### What do the LED lights on the gateway indicate? 

The LED lights are a great way of understanding the current state of the gateway. Visit the [official documentation page](https://www.thethingsnetwork.org/docs/gateways/gateway/ledstatus/) for a complete list of LED states.

### How can I check if the gateway is working or not?

To check the status of the gateway, go to {{% tts %}} Console &#8594; **Gateways** section &#8594; your gateway's settings. If any device sends data through your gateway, you will be able to see it under your gateway's **Live data** tab.

If you connect your phone/computer to the same network as your gateway, you can access some gateway information at http://things-gateway.local/info in your web browser.

### How can I reset my gateway? 

There are few things you can do by pressing the reset button in different ways:

- restart the gateway by shortly pressing the button
- erase WiFi settings by holding the button for 2 seconds
- erase WiFi and activation settings by holding the button for 5 seconds
- erase the full serial flash by holding the button while powering the gateway on

### My gateway is in a reboot loop. How can I fix it? 

A possible cause of this issue is that the LoRa board is not fully pushed in in the socket. Open the lid and push the LoRa board in the socket. If this fix does not work for you, check the [product repository](https://github.com/TheThingsProducts/gateway/issues), browse through issues to search for solution or file a new issue.

### My gateway stays in AP mode. What do I do? 

This behaviour occurs when there is a glitch in the WiFi connection of the gateway. When this happens, your gateway will turn into an AP and devices you used to set up the gateway can connect to it (your laptop or phone). To avoid this, you should remove the gateway from the list of APs from your laptop/phone (*Network Settings &#8594; Things-Gateway-XXXX &#8594; Forget this network*).

### I want to get in-depth insight/read debug messages of my gateway. Is that possible? 

The gateway has a UART port on which it prints debug messages. To see these messages you need to connect a device between the gateway and your computer that can read out a UART (e.g. an FTDI cable/board).

Connect a UART interface device to your computer. Connect the RX line to the RX pin of the gateway, and the GND line to the GND pin on the gateway with jumpers.

{{< figure src="uart-sample.jpg" alt="Sample connection between The Things Kickstarter gateway and an UART device" >}}

Now, you need to start a terminal session to UART interface device with `115200@8N`. On Windows you can use *PuTTY*, on macOS or Linux use *screen*. The sample output is shown below.

{{< figure src="screen-macos.png" alt="Sample screen output" >}}

### What steps do I need to take if I want to relocate my gateway? 

There is no need to reconfigure the gateway, however, it is recommended to update the [gateway location settings]({{< ref "/gateways/adding-gateways#set-gateway-location" >}}) in {{% tts %}} Console for a better accuracy.

### I see *Unexpected data sent to gateway* error. What should I do?

This error seems to appear when the Gateway ID length exceeds the maximum of 34 characters. If your gateway's ID is longer than the maximum allowed, delete and re-register your gateway in {{% tts %}} Console with a new, shorter Gateway ID.

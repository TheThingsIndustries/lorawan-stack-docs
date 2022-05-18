---
title: "Bulding a gateway with Raspberry Pi and IC880A"
description: ""
weight: 1
---

This guide can help you build your own LoRaWAN gateway using a Raspberry Pi and an iC880A LoRa concentrator board, and run {{% lbs %}} on it.

<!--more-->

## Requirements

{{< figure src="hardware.png" alt="Required hardware parts" class="float plain" >}}

For building this gateway you will need the following hardware elements:

1. [iC880A-SPI concentrator board](https://shop.imst.de/wireless-modules/lora-products/8/ic880a-spi-lorawan-concentrator-868-mhz)
2. 3.5dBi - 7.5dBi antenna
3. [iC880A pigtail for antenna](https://shop.imst.de/wireless-modules/accessories/20/u.fl-to-sma-pigtail-cable-for-ic880a-spi)
4. Raspberry Pi Model 2 or newer	
5. 2.5A power supply with micro USB connector	
6. MicroSD Card with minimum 4GB of storage
7. 7x dual female jumper wires
8. Ethernet cable or WiFi dongle (if using Raspberry PI 3+ this isn't required, because it has an integrated WiFi interface)

## Gateway Assembly

First, attach the antenna on the iC880A board using the pigtail cable.

Then use jumper cables to connect the iC880A pins to Raspberry Pi pins. Refer to the table below for connections between pins:

|iC880A pin | Raspberry Pi pin | Description|
|--- | --- | ---|
|21 | 2 | 5V power supply|
|22 | 6 | GND|
|13 | 22 | Reset|
|14 | 23 | SPI Clock|
|15 | 21 | MISO|
|16 | 19 | MOSI|
|17 | 24 | NSS|

Your assembled gateway should look like on the image below.

{{< figure src="cables.jpg" alt="Gateway assembly" >}}

{{< warning >}} Do not power up your Raspberry Pi if you haven't connected the antenna to iC880A. If you power it up and the antenna is not connected, all transmit energy that was supposed to be radiated through antenna will be reflected back from an unterminated antenna port and dissipated as heat, and might damage your Raspberry Pi. {{</ warning >}}

## Install Raspberry Pi OS on Raspberry Pi

In this step, you need to insert your Raspberry PI's SD card into your computer. Check out the official Raspberry Pi documentation for steps to [install the Raspberry Pi 0S](https://www.raspberrypi.com/software/) on the SD card. The most common method to install the Raspberry Pi OS is using the Raspberry Pi Imager.

We also recommend to enable a default SSH access on your Raspberry Pi, in order to avoid connecting it to an external screen for the initial setup. Just mount the boot partition of your Raspberry Pi's SD card and create an empty file called `ssh`. For example, if using Linux:

```bash
touch /media/$USER/boot/ssh
```

Visit the official Raspberry Pi documentation page on detailed guide for [enabling remote access](https://www.raspberrypi.com/documentation/computers/remote-access.html).

## Boot and Configure Your Raspberry Pi

Plug the SD card back into your Raspberry Pi and power it up.

If you haven't enabled SSH access to your Raspberry Pi, you will need to connect an external screen and an external keyboard to it in order to configure it.

If you enabled SSH in the previous step, you can connect to your Raspberry Pi remotely from your computer - find out your Raspberry Pi's IP address by listing devices on your local network (for example with `nmap`) and connect via SSH. The default username is `pi` and the default password is `raspberry`.

```bash
ssh pi@192.168.1.2
```

After logging in in your Raspberry Pi, upgrade the system packages to the latest versions:

```bash
sudo apt-get update
sudo apt-get upgrade
```

Enable the SPI interface by running the `raspi-config` tool:

```bash
sudo raspi-config
```

A `raspi-config` wizard will appear, so use the arrow keys and the Enter key to navigate through it. Choose **Interface Options &#8594; SPI**, then select **<Yes>** to enable the SPI interface. After enabling the SPI interface, hit the Escape key to exit the `raspi-config` tool.

Now install packages needed to build the packet forwarder:

```bash
sudo apt-get install git gcc make
```

## Build the {{% lbs %}} Packet Forwarder

First, clone the {{% tts %}} repository:

```bash
git clone https://github.com/lorabasics/basicstation
```

Then build the {{% lbs %}} binary:

```bash
cd basicstation
make platform=rpi variant=std ARCH=$(gcc --print-multiarch)
```

Make sure the binary was successfully built:

```bash
./build-rpi-std/bin/station --version
```

The binary was successfully built if you see something like this:

```bash
Station: 2.0.6(rpi/std) 2022-03-26 17:43:16
Package: (null)
```

Now install the {{% lbs %}} binary:

```bash
sudo mkdir -p /opt/ttn-station/bin
sudo cp ./build-rpi-std/bin/station /opt/ttn-station/bin/station
```

## Derive the Gateway EUI

To derive the gateway EUI, you can use a combination of the gateway's MAC address and `FFFE`, as follows:

```bash
export MAC=`cat /sys/class/net/eth0/address`
export EUI=`echo $MAC | awk -F: '{print $1$2$3 "fffe" $4$5$6}'`
echo "The Gateway EUI is $EUI"
```

The output will look something like:

```bash
The Gateway EUI is b827ebfffee00c83
```

Make sure you write it down for further steps.

## Register the Gateway on {{% tts %}}

To register your gateway on {{% tts %}}, follow the process described in the [Adding Gateways]({{< ref "/gateways/adding-gateways/" >}}) section. For the **Gateway EUI**, use the EUI that was derived in the previous step.

While registering, it is also recommended to enable the **Require authenticated connection** option.

## Create an API Key

Next, you need to create an API key for your gateway on {{% tts %}}, which will be used for your gateway's authentication.

Follow the instructions in the [LNS]({{< ref "/gateways/lora-basics-station/lns#create-an-api-key" >}}) section to create an API key with the **Link as Gateway to a Gateway Server for traffic exchange, i.e. write uplink and read downlink** right. Make sure to copy the key as you will not be able to see it again.

## Configure {{% lbs %}}

The next step is to create the configuration files required for {{% lbs %}} gateway to connect to {{% tts %}}.

On your Raspberry Pi, create a new directory:

```bash
sudo mkdir -p /opt/ttn-station/config
```

Create a configuration file `tc.uri` containing an LNS server address. For example, if using `eu1` cluster of {{% tts %}} Community Edition:

```bash
echo 'wss://eu1.cloud.thethings.network:8887' | sudo tee /opt/ttn-station/config/tc.uri
```

See [Server Addresses]({{< ref "/getting-started/server-addresses" >}}) if you are not sure which server address to use. See also [LNS Server Address]({{< ref "/gateways/lora-basics-station/lns#lns-server-address" >}}) for info about LNS server address format.

Next, create the `tc.key` configuration file containing an authorization header. This header will contain the API Key you created in the previous step, and it will be used to authenticate your gateway's connection.

```bash
export API_KEY="NNSXS.XXXXXXXXXXXXXXX.YYYYYYYYYYYYYYYY"
echo "Authorization: Bearer $API_KEY" | perl -p -e 's/\r\n|\n|\r/\r\n/g' | sudo tee -a /opt/ttn-station/config/tc.key
```

Create the `tc.trust` configuration file that will be the root CA used to check your LNS server's certificates. You can use the system CA certificates:

```bash
sudo ln -s /etc/ssl/certs/ca-certificates.crt /opt/ttn-station/config/tc.trust
```

Now, create the `station.conf` configuration file containing configuration options for your concentrator:

```bash
echo '
{
    /* If slave-X.conf present this acts as default settings */
    "SX1301_conf": { /* Actual channel plan is controlled by server */
        "lorawan_public": true, /* is default */
        "clksrc": 1, /* radio_1 provides clock to concentrator */
        /* path to the SPI device, un-comment if not specified on the command line e.g., RADIODEV=/dev/spidev0.0 */
        /*"device": "/dev/spidev0.0",*/
        /* freq/enable provided by LNS - only HW specific settings listed here */
        "radio_0": {
            "type": "SX1257",
            "rssi_offset": -166.0,
            "tx_enable": true,
            "antenna_gain": 0
        },
        "radio_1": {
            "type": "SX1257",
            "rssi_offset": -166.0,
            "tx_enable": false
        }
        /* chan_multiSF_X, chan_Lora_std, chan_FSK provided by LNS */
    },
    "station_conf": {
        "routerid": "'"$EUI"'",
        "log_file": "stderr",
        "log_level": "DEBUG", /* XDEBUG,DEBUG,VERBOSE,INFO,NOTICE,WARNING,ERROR,CRITICAL */
        "log_size": 10000000,
        "log_rotate": 3,
        "CUPS_RESYNC_INTV": "1s"
    }
}
' | sudo tee /opt/ttn-station/config/station.conf
```

Finally, create the `start.sh` script, that will be used to reset the iC880A via its reset pin and start the packet forwarder:

```bash
echo '#!/bin/bash

# Reset iC880a PIN
SX1301_RESET_BCM_PIN=25
echo "$SX1301_RESET_BCM_PIN"  > /sys/class/gpio/export
echo "out" > /sys/class/gpio/gpio$SX1301_RESET_BCM_PIN/direction
echo "0"   > /sys/class/gpio/gpio$SX1301_RESET_BCM_PIN/value
sleep 0.1
echo "1"   > /sys/class/gpio/gpio$SX1301_RESET_BCM_PIN/value
sleep 0.1
echo "0"   > /sys/class/gpio/gpio$SX1301_RESET_BCM_PIN/value
sleep 0.1
echo "$SX1301_RESET_BCM_PIN"  > /sys/class/gpio/unexport

# Test the connection, wait if needed.
while [[ $(ping -c1 google.com 2>&1 | grep " 0% packet loss") == "" ]]; do
echo "[TTN Gateway]: Waiting for internet connection..."
sleep 30
done

# Start station
/opt/ttn-station/bin/station
' | sudo tee /opt/ttn-station/bin/start.sh
```

You can check if your `start.sh` script is executable with:

```bash
sudo chmod +x /opt/ttn-station/bin/start.sh
```

## Test the Packet Forwarder

Start the packet fowarder with:

```bash
cd /opt/ttn-station/config
sudo RADIODEV=/dev/spidev0.0 /opt/ttn-station/bin/start.sh
```

This will initialize the concentrator board, connect your gateway to {{% tts %}}, fetch the configuration based on your frequency plan and start listening for packets. If you notice something like:

```bash
2022-03-27 02:11:50.009 [S2E:VERB] RX 867.5MHz DR5 SF7/BW125 snr=6.2 rssi=-103 xtime=0xE0000000E34FB4 - updf mhdr=40 DevAddr=260B0748 FCtrl=00 FCnt=35 FOpts=[] 014A mic=1717970429 (14 bytes)
2022-03-27 02:12:06.130 [S2E:VERB] RX 867.3MHz DR5 SF7/BW125 snr=8.0 rssi=-102 xtime=0xE0000001D92CCB - updf mhdr=40 DevAddr=260B0748 FCtrl=00 FCnt=36 FOpts=[] 01EA mic=463407879 (14 bytes)
```

in the packet forwarder logs, it means your gateway has started picking up messages, Of course, this is possible if there are end devices transmitting data within the gateway's reach.

If you go to {{% tts %}} Console and navigate to your gateway's **Live Data** view, it will appear as connected and you will see uplink messages arriving.

## Run the Packet Forwarder as a System Service

The only thing left to do is to configure the packet forwarder to run as a system service on Raspberry Pi. This ensures that the forwarder will start automatically after the Raspberry Pi boots.

First, create the `systemd` service configuration file:

```bash
echo '
[Unit]
Description=The Things Network Gateway

[Service]
WorkingDirectory=/opt/ttn-station/config
ExecStart=/opt/ttn-station/bin/start.sh
SyslogIdentifier=ttn-station
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
' | sudo tee /lib/systemd/system/ttn-station.service
```

Enable the service with:

```bash
sudo systemctl enable ttn-station
```

Start the service:

```bash
sudo systemctl start ttn-station
```

You can observe the packet forwarder logs using the following command:

```bash
sudo journalctl -f -u ttn-station
```

Voilà! Your gateway is now fully functional and you can start developing your IoT use case.
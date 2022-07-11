---
title: "Connect Tektelic Kona Micro with Lora Basics™ Station"
description: ""
---

This section guides you to connect the Tektelic Kona Micro IoT LoRaWAN Gateway to {{% tts %}} using [{{% lbs %}}]({{< ref "/gateways/concepts/lora-basics-station" >}}).

<!--more-->

## Obtain the Basic Station Package

Obtain the **ipk/bsp** package by contacting Tektelic's support team. Create an account on the [support portal](https://support.tektelic.com/portal/en/signin) or send an email to support@tektelic.com.

## Install the Basic Station Package

### For BSP 3.0.x and 3.1.x

Upload the `Basic-Station-packages-vx.x.x-for-Tektelic-gateways.tar.gz` to the directory `/lib/firmware` on the target gateway and extract it using following command:

```bash 
tar -C /lib/firmware \
-zxvf /lib/firmware/Basic-Station-packages-vx.x.x-for-Tektelic-gateways.tar.gz
```

Add the feed location to the package manager configuration file by using the following command:

```bash
echo "src/gz bstn file:///lib/firmware/Basic-Station-packages-vx.x.x-for-Tektelic-gateways" \
> /etc/opkg/bstn-feed.conf
```

Enter the following command:

```bash
opkg update
```

Install the package using the following command:

```bash
opkg install tektelic-bstn curl libcurl4
```

### For BSP 3.2.x

Upload the `ipk/bsp` folder to the gateway and extract it in to `/lib/firmware`.

Add the feed location to the package manager configuration file by using the following command:

```bash
echo "src/gz bstn file:///lib/firmware/bsp" > /etc/opkg/bstn-feed.conf
```

Enter the following command:

```bash
opkg update
```

Install the package using the following command:

```bash
opkg install tektelic-bstn curl libcurl4
```

## Configure Gateway

Make sure Basic Station is installed by using the following command:

```bash
opkg list-installed | grep bstn
```

The version of the Basic Station package should be displayed.

Then, make sure Basic Station is running by using the following command:

```bash
ps aux | grep bstn
```

The Basic Station process ID should be displayed.

### Upload Configuration Files

On Basic Station gateways, only CUPS or LNS can be configured. Configuring CUPS will automatically configure LNS, so to use {{% tts %}}, just follow the instructions for [Connecting CUPS]({{< ref "/gateways/concepts/lora-basics-station/cups" >}}).

After completing the instructions for CUPS, you should have the following files:

- `cert.pem` (Server Certificate)
- `cups.key` or `lns.key` (Key File)
- `cups.uri` (CUPS Server URL)

The Tektelic Kona Micro expects the Server Certificate to be named `cups.trust`, so rename `cert.pem` to `cups.trust`.

Upload the `cups.trust`, `cups.key` and `cups.uri` files to `/etc/bstn` on the gateway.

By default, CUPS is enabled in Basic Station to connect with {{% tts %}}. If you do not want to use CUPS then you can disable that by setting `skip_cups=true` in `/etc/default/bstn.toml` file. If you disable CUPS and use LNS, you will need a `lns.key` file, rather than a `cups.key` file.

Finally, enter the following command to restart the Basic Station:

```bash
/etc/init.d/tektelic-bstn restart
```

Now your Gateway should be able to connect to {{% tts %}}.

## Troubleshooting

### Where can I find log files?

If your gateway has 3.0.x, 3.1.x, 4.0.x or 4.1.x BSPs, you can find the Basic Station log in `/var/log/syslog`. If your gateway's BSP version is 3.2.x, 4.2.x or later, Basic Station logs can be found in `/var/log/bstn.log`.

### What do I do if Basic Station won't run?

If it is not running, please reach out to Tektelic on [Tektelic support portal](https://support.tektelic.com/portal/en/signin) or [Tektelic support email](mailto:support@tektelic.com).

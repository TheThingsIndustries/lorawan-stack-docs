---
title: "Connect Tektelic Kona Micro with UDP Packet Forwarder"
description: ""
---

This section guides you to connect the Tektelic Kona Micro IoT LoRaWAN Gateway to {{% tts %}} using the {{% udp-pf %}}.

<!--more-->

## Connect to the Gateway

Find the IP address the gateway. This can be done in various ways. You can connect your machine to the same local network as that of the gateway ethernet connection and scan for open SSH ports or assign a static IP to the gateway and use that. Once the gateway IP address is found, SSH into it.

```bash
$ ssh root@<GatewayIP>
```

The password for the **root** user can be found on the back panel. It's typically a 9 character alphanumeric string starting with **1846XXXXX**.

## Configure the Packet Forwarder

Now you can edit the gateway configuration file.

```bash
$ vi /etc/default/config.json
```

{{< note >}} Press the `i` key on your keyboard to start insert mode. Once finished editing, press `ESC` and enter `:wq` to write the file and quit. {{</ note >}}

Edit the server parameters:

- **server_address**: Address of your {{% tts %}} deployment. See [Server Addresses]({{< ref "getting-started/server-addresses" >}}).
- **serv_port_up**: UDP upstream port of the Gateway Server, typically 1700.
- **serv_port_down**: UDP downstream port of the Gateway Server, typically 1700.

Save the configuration and restart the packet forwarder.

```bash
$ /etc/init.d/pkt_fwd restart
```

If your configuration was successful, your gateway will connect to {{% tts %}} after a couple of seconds.

## Troubleshooting

If the gateway does not connect to {{% tts %}} after a few minutes, disconnect and reconnect the power supply to power-cycle the gateway. Packet forwarder logs can be observed by SSH-ing into the gateway and running:

```bash
$ tail -f /var/log/pkt_fwd.log
```

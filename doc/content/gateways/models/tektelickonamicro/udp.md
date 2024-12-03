---
title: "Connect Tektelic Kona Micro with UDP Packet Forwarder"
description: ""
aliases: [/gateways/tektelickonamicro/udp]
---

This section guides you to connect the Tektelic Kona Micro IoT LoRaWAN® Gateway to {{% tts %}} using the [{{% udp-pf %}}]({{< ref "/gateways/concepts/udp" >}}).

<!--more-->

## Configure the Packet Forwarder

Now you can edit the gateway configuration file.

```bash
vi /etc/default/config.json
```

Press the `i` key on your keyboard to start insert mode. Once finished editing, press `ESC` and enter `:wq` to write the file and quit.

Edit the server parameters:

- **server_address**: Address of your {{% tts %}} deployment. See [Server Addresses]({{< ref "/cloud/server-addresses" >}}).
- **serv_port_up**: UDP upstream port of the Gateway Server, typically 1700.
- **serv_port_down**: UDP downstream port of the Gateway Server, typically 1700.

Save the configuration and restart the packet forwarder.

```bash
/etc/init.d/pkt_fwd restart
```

If your configuration was successful, your gateway will connect to {{% tts %}} after a couple of seconds.

## Troubleshooting

If the gateway does not connect to {{% tts %}} after a few minutes, disconnect and reconnect the power supply to power-cycle the gateway. Packet forwarder logs can be observed by SSH-ing into the gateway and running:

```bash
tail -f /var/log/pkt_fwd.log
```

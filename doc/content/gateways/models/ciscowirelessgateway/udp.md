---
title: "Connect Cisco IXM with UDP Packet Forwarder"
description: ""
---

This section contains instructions for connecting to {{% tts %}} using {{% udp-pf %}}.

<!--more-->

To connect the gateway via UDP packet forwarder, first follow [these instructions]({{< ref "/gateways/concepts/udp" >}}) to obtain `global_conf.json` file, then follow instructions below.

## Packet Forwarder Configuration

{{< warning >}} Keep in mind that the pre-installed packet forwarder is not supported by Cisco for production purposes. {{</ warning >}}

To run the packet forwarder, we'll make use of the container that is running on the gateway at all times.

```
Gateway# request shell container-console
```

You will be requested to enter the System Password. By default this is `admin`.

Create the directory to store the Packet Forwarder configuration:

```bash
bash-3.2# mkdir /etc/pktfwd
```

Copy the packet forwarder to `/etc/pktfwd`:

```bash
bash-3.2# cp /tools/pkt_forwarder /etc/pktfwd/pkt_forwarder
```

### Retrieve configuration from the Gateway Configuration Server

The Gateway Configuration Server can be used to retrieve a proper `global_conf.json` configuration file for your gateway. Follow instructions [here]({{< ref "/gateways/concepts/udp" >}}).

Copy the downloaded `global_conf.json` configuration template as `config.json `to `/etc/pktfwd`:

```bash
bash-3.2# cp config.json /etc/pktfwd/config.json
```

You can now test the packet forwarder by executing:

```bash
bash-3.2# /etc/pktfwd/pkt_forwarder -c /etc/pktfwd/config.json -g/dev/ttyS1
```

Your gateway will connect to {{% tts %}} after a couple of minutes.


Now that we know the packet forwarder is running, let's make it run automatically. Use this command:

```bash
bash-3.2# vi /etc/init.d/S60pkt_forwarder
```

Press the `i` key on your keyboard to start insert mode. Once finished editing, press `ESC` and enter `:wq` to write the file and quit.

Then copy paste the code below. Replace `things.example.com` with the name of your network after `nslookup`.

```bash
SCRIPT_DIR=/etc/pktfwd
SCRIPT=$SCRIPT_DIR/pkt_forwarder
CONFIG=$SCRIPT_DIR/config.json

PIDFILE=/var/run/pkt_forwarder.pid
LOGFILE=/var/log/pkt_forwarder.log

export NETWORKIP=$(nslookup things.example.com | grep -E -o "([0-9]{1,3}[\.]){3}[0-9]{1,3}" | tail -1)
sed -i 's/[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}/'$NETWORKIP'/g' "$CONFIG"

start() {
  echo "Starting pkt_forwarder"
  cd $SCRIPT_DIR
  start-stop-daemon \
        --start \
        --make-pidfile \
        --pidfile "$PIFDILE" \
        --background \
        --startas /bin/bash -- -c "exec $SCRIPT -- -c $CONFIG -g /dev/ttyS1 >> $LOGFILE 2>&1"
  echo $?
}

stop() {
  echo "Stopping pkt_forwarder"
  start-stop-daemon \
        --stop \
        --oknodo \
        --quiet \
        --pidfile "$PIDFILE"
}

restart() {
  stop
  sleep 1
  start
}

case "$1" in
  start)
    start
    ;;
  stop)
    stop
    ;;
  restart|reload)
    restart
    ;;
  *)
    echo "Usage: $0 {start|stop|restart}"
    exit 1
esac

exit $?

```

Then make the init script executable:

```bash
bash-3.2# chmod +x /etc/init.d/S60pkt_forwarder
```

To enable it immediately, execute:

```bash
bash-3.2# /etc/init.d/S60pkt_forwarder start
```

You can now reboot the gateway, it can take up to 4 minutes.

If the gateway does not connect to the {{% tts %}} after a few minutes, you can check the log file to see if the packet forwarder started properly.

```bash
bash-3.2# tail -100 var/log/pkt_forwarder.log
```

GPS warnings may appear, which means the packet forwarder started.

If the radio failed to start, disconnect and reconnect the power supply to power-cycle the gateway.

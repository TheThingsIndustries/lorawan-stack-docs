---
title: "Connect Robustel R1520LG with UDP Packet Forwarder"
description: ""
aliases:
  [/gateways/robustel-r1520lg/udp, /gateways/models/robustel-r1520lg/udp]
---

This section guides you to connect the Robustel R1520LG LoRaWAN® Gateway to {{% tts %}} using the [{{% udp-pf %}}]({{< ref "/hardware/gateways/concepts/udp" >}}).

<!--more-->

## Configure the Packet Forwarder

Follow these steps to configure the UDP Packet Forwarder on the Robustel R1520LG:

1. Log in to the gateway’s web interface. Use the default IP (`http://192.168.0.1`) or a custom IP if already configured.
2. Navigate to **LoRaWAN → LoRa Settings → General Settings**.
3. In the **LoRaWAN Network Server** drop-down list, select **External NS** and click **Submit**.
4. Go to the **Packet Forwarder** section and choose **UDP Forwarder** from the drop-down.
5. Enter the following configuration details:

- **server_address**: Address of your {{% tts %}} deployment. See [Server Addresses]({{< ref "/concepts/server-addresses" >}}).
- **serv_port_up**: `1700` (UDP upstream port)
- **serv_port_down**: `1700` (UDP downstream port)

6. Click **Submit**, then click **Save and Apply** in the top-right corner.

If your configuration was successful, your gateway will connect to {{% tts %}} within a few seconds.

{{< figure src="udp-forwarder-save.png" alt="Configure UDP Packet Forwarder on Robustel R1520LG" >}}

## Troubleshooting

If the gateway does not connect to {{% tts %}}, follow these steps to debug:

1. Navigate to **LoRaWAN → LoRa Settings → General Settings**.
2. Enable **Verbose Debug** and click **Submit**, then **Save and Apply**.
3. Navigate to **System → Debug** to view the packet forwarder logs.

{{< figure src="packet-forwarder-save.png" alt="Enable verbose debugging" >}}
{{< figure src="system-debug.png" alt="Packet Forwarder Logs" >}}

You should see logs indicating successful uplink/downlink communication with {{% tts %}}. If needed, restart the gateway or re-check the server address and port configuration.
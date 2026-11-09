# Connect Robustel R1520LG with UDP Packet Forwarder

> This section guides you to connect the Robustel R1520LG LoRaWAN® Gateway to The Things Stack using the Semtech UDP Packet Forwarder.

Source: https://www.thethingsindustries.com/docs/hardware/gateways/models/robustel-r1520lg/udp/


This section guides you to connect the Robustel R1520LG LoRaWAN® Gateway to The Things Stack using the [Semtech UDP Packet Forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/udp/).

## Configure the Packet Forwarder

Follow these steps to configure the UDP Packet Forwarder on the Robustel R1520LG:

1. Log in to the gateway’s web interface. Use the default IP (`http://192.168.0.1`) or a custom IP if already configured.
2. Navigate to **LoRaWAN → LoRa Settings → General Settings**.
3. In the **LoRaWAN Network Server** drop-down list, select **External NS** and click **Submit**.
4. Go to the **Packet Forwarder** section and choose **UDP Forwarder** from the drop-down.
5. Enter the following configuration details:

- **server_address**: Address of your The Things Stack deployment. See [Server Addresses](https://www.thethingsindustries.com/docs/concepts/server-addresses/).
- **serv_port_up**: `1700` (UDP upstream port)
- **serv_port_down**: `1700` (UDP downstream port)

6. Click **Submit**, then click **Save and Apply** in the top-right corner.

If your configuration was successful, your gateway will connect to The Things Stack within a few seconds.

![Configure UDP Packet Forwarder on Robustel R1520LG](udp-forwarder-save.png)


## Troubleshooting

If the gateway does not connect to The Things Stack, follow these steps to debug:

1. Navigate to **LoRaWAN → LoRa Settings → General Settings**.
2. Enable **Verbose Debug** and click **Submit**, then **Save and Apply**.
3. Navigate to **System → Debug** to view the packet forwarder logs.

![Enable verbose debugging](packet-forwarder-save.png)

![Packet Forwarder Logs](system-debug.png)


You should see logs indicating successful uplink/downlink communication with The Things Stack. If needed, restart the gateway or re-check the server address and port configuration.

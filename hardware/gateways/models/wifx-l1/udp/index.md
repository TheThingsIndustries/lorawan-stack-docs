# Connect the Wifx L1 with UDP Packet Forwarder

> This section contains instructions for connecting the Wifx L1 gateway to The Things Stack using the Semtech UDP Packet Forwarder.

Source: https://www.thethingsindustries.com/docs/hardware/gateways/models/wifx-l1/udp/


This section contains instructions for connecting the Wifx L1 gateway to The Things Stack using the [Semtech UDP Packet Forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/udp/).

Select the **UDP Packet Forwarder (ChirpStack)** in the forwarder selection list.

In the **Configuration** pane, click **Edit** (blue button with a pencil).

On the **Global** tab of the configuration editor, set the following configuration:

- **Address**: Address of your The Things Stack deployment. See [Server Addresses](https://www.thethingsindustries.com/docs/concepts/server-addresses/).
- **Up port**: UDP upstream port of the Gateway Server, typically `1700`.
- **Down port**: UDP downstream port of the Gateway Server, typically `1700`.

Save the configuration and start the packet forwarder.


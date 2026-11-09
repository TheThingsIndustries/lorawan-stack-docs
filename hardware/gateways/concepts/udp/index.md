# Semtech UDP Packet Forwarder

> The Semtech UDP Packet Forwarder is the original LoRaWAN® packet forwarder, connecting to servers through the Semtech UDP protocol. Many gateways include a …

Source: https://www.thethingsindustries.com/docs/hardware/gateways/concepts/udp/


The [Semtech UDP Packet Forwarder](https://github.com/lora-net/packet_forwarder) is the original LoRaWAN® packet forwarder, connecting to servers through the Semtech UDP protocol. Many gateways include a pre-compiled version of the Semtech UDP Packet Forwarder, often adapted to the specific gateway.

> **Warning:** The Semtech UDP Packet Forwarder has many security and scalability drawbacks. Use [LoRa Basics™ Station](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/lora-basics-station/) to connect your gateway to The Things Stack.


## Configuration

When the packet forwarder starts, it looks in the current directory for a `global_conf.json`, a `local_conf.json` and a `debug_conf.json`. The Gateway EUI, Network Server Address, Frequency Plan, Ports, and other parameters are configurable in these files.

If `debug_conf.json` exists, the other files are ignored - otherwise, the parameters in `local_conf.json` override those in `global_conf.json`.

An example `global_conf.json` is available in the [Semtech UDP Packet Forwarder Github repository](https://github.com/Lora-net/packet_forwarder/blob/master/lora_pkt_fwd/global_conf.json). It is also possible to download a `global_conf.json` configured with your Gateway EUI and Frequency Plan directly from The Things Stack.

**Console:**

## Download Configuration in the Console {#download-configuration-in-the-console}

To download a `global_conf.json` file for your gateway, open the Gateway overview page in the console. Click the **Hamburger menu** in the top-right and then click **Download global_conf.json** to download the file.

![Download global_conf.json](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/udp/conf.png)




**HTTP (REST) API:**

## Download Configuration via Terminal

To download a `global_conf.json` file using the terminal, you will need a Gateway API key with the `View gateway information` right enabled. To create an API key, see instructions for in the [Adding Gateways](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/adding-gateways/) guide.

Open the command prompt in Windows or any Linux terminal to run a curl command (as shown below) to generate the required `global_conf.json` file in your current working directory.

Make sure you replace `thethings.example.com` with your server address, `{GATEWAY_ID}` with your Gateway ID, and `{GATEWAY_API_KEY}` with the API key you generated:

```bash
curl -XGET \
    "https://thethings.example.com/api/v3/gcs/gateways/{GATEWAY_ID}/semtechudp/global_conf.json" \
    -H "Authorization: Bearer {GATEWAY_API_KEY}" > global_conf.json
```


> **Note:** The `global_conf.json` file you download from The Things Stack contains the `gateway_ID` field, that has a different value than the **Gateway ID** in The Things Stack Console.
> 
> **Gateway ID** in The Things Stack Console represents the name of your gateway used to register it, while the `gateway_ID` field in the `global_conf.json` file contains your gateway's EUI, which is required by the UDP packet forwarder.



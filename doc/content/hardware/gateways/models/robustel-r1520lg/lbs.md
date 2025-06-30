---
title: "Connect Robustel R1520LG with LoRa Basics™ Station"
description: ""
aliases:
  [/gateways/robustel-r1520lg/lbs, /gateways/models/robustel-r1520lg/lbs]
---

This section guides you to connect the Robustel R1520LG LoRaWAN® Gateway to {{% tts %}} using [{{% lbs %}}]({{< ref "/hardware/gateways/concepts/lora-basics-station" >}}).

<!--more-->

## Configure the Gateway

Follow these steps to configure LoRa Basics™ Station on the Robustel R1520LG:

1. Log in to the gateway’s web interface by entering its IP address in a browser. The default is typically `http://192.168.0.1`.

2. Navigate to **LoRaWAN → LoRa Settings → General Settings**.

3. In the **LoRaWAN Network Server** drop-down list, select **External NS** and click the **Submit** button to save the configuration.

{{< figure src="lora-setting-save.png" alt="General LoRa settings" >}}

4. Go to the **Packet Forwarder** section and select **Basic Station** from the drop-down list.

5. After entering the Basic Station configuration, click the **Submit** button, then click **Save and Apply** in the upper-right corner to apply the changes.

{{< figure src="basic-station-save.png" alt="Basic Station configuration" >}}

If your configuration is successful, the gateway will connect to {{% tts %}} within a few seconds.

## Troubleshooting

### Viewing Logs

To verify connection and troubleshoot issues:

- Log in to the web interface.
- Navigate to **System → Debug**.
- Check the log output for connection messages from the Basic Station packet forwarder.

### Enable Verbose Debug Mode

You can enable verbose debug mode for more detailed logs:

1. Go to **LoRaWAN → LoRa Settings → General Settings**.
2. Turn **Verbose Debug Enable** to ON.
3. Click **Submit**, then **Save and Apply**.

{{< figure src="packet-forwarder-save.png" alt="Enable verbose logging" >}}

---

Let me know if you want to extend this with firmware tips or screenshots, or if you’re ready to commit and push this PR with a message like:

```bash
doc: Add LoRa Basics Station setup guide for Robustel R1520LG
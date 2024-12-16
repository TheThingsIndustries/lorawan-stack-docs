---
title: "Connect Cisco IXM with LoRa Basics™ Station"
description: ""
---

This section contains instructions for connecting to {{% tts %}} using [{{% lbs %}}]({{< ref "/hardware/gateways/concepts/lora-basics-station" >}}).

<!--more-->

{{< note >}} The minimal Cisco IXM gateway software version required for connecting to {{% tts %}} with {{% lbs %}} is `2.3.0`. Note that the use of the Cisco's Common Packet Forwarder (CPF) software is subject to a license fee. {{</ note >}}

To connect the gateway via LNS protocol, first follow the instructions for [Connecting LNS]({{< ref "/hardware/gateways/concepts/lora-basics-station/lns" >}}), then follow instructions below.

To upload the [LNS Server Certificate]({{< ref "/hardware/gateways/concepts/lora-basics-station/lns#lns-server-certificate--lns-trust" >}}) (`tc.trust` file) and [LNS Key]({{< ref "/hardware/gateways/concepts/lora-basics-station/lns#lns-key-file" >}}) (`tc.key`file) from your local IP to the Cisco IXM flash, use the following commands:

```bash
Gateway# copy tftp://<local-IP>/<folder-path>/tc.trust flash:
Gateway# copy tftp://<local-IP>/<folder-path>/tc.key flash:
```

To install and move these files from Cisco IXM flash to secure storage execute the following commands:

```bash
Gateway# common-pack-forwarder cert install srv flash:tc.trust
Gateway# common-pack-forwarder cert install gw NA flash:tc.key
```

Next, you need to configure the common packet forwarder profile. The example configuration assuming the use of a single 1.5 dBi antenna is shown below. Make sure to replace the `server-address` with {{% tts %}} Gateway Server address (e.g. `eu1.cloud.thethings.network`) and `gateway-EUI` with Cisco IXM gateway EUI as defined in [Registration section]({{< ref "/hardware/gateways/models/ciscowirelessgateway#registration" >}}).

```
Gateway# configure terminal
Gateway(config)# common-packet-forwarder profile
Gateway(config-cpf-profile)# ipaddr <server-address> 8887
Gateway(config-cpf-profile)# antenna 1 omni gain 1.5 loss 0
Gateway(config-cpf-profile)# gatewayid <gateway-EUI>
Gateway(config-cpf-profile)# auth-mode token-server
Gateway(config-cpf-profile)# exit
Gateway(config)# exit
Gateway# copy running-config startup-config
```

If your configuration was successful, your gateway will connect to {{% tts %}} after a couple of seconds.

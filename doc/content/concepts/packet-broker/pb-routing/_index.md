---
title: "Default Packet Broker Routing"
aliases: [/reference/pb-routing]
---

This reference contains default Packet Broker routing tables.

<!--more-->

The following table explains which Forwarder Networks and Home Networks are configured by default in {{% tts %}}.

To configure custom routing policies for your deployment, see the [Configure Packet Broker]({{< ref "/concepts/packet-broker/configure" >}}) section.

| Forwarder Network    | Home Network         | Status      |
| -------------------- | -------------------- | ----------- |
| TTS {{% ttss %}}     | TTS Cloud            | Enabled     |
| TTS Cloud            | TTS {{% ttss %}}     | Not Enabled |
| TTS Cloud <TENANT X> | TTS Cloud <TENANT Y> | Not Enabled |

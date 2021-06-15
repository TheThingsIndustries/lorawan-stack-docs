---
title: "Troubleshooting Gateways"
description: ""
---

This section provides help for common issues and frequently asked questions you may have when adding gateways. 

<!--more-->

### How do I see gateway events?

Gateway event logs can be found in the console in the gateway's general information page. See [Working with Events]({{< ref "getting-started/events" >}}) for other ways of subscribing to events.

### My gateway won't connect. What do I do?

#### Check the following in {{% tts %}} Console:

- Does the Gateway EUI in the console match with the EUI of the gateway?
- Does the Frequency Plan selected match with the configuration in the gateway? Refer to the [Frequency Plans section]({{< ref "/reference/frequency-plans" >}}) for plans that are officially supported by The Things Stack
- Did you select **Require authenticated connection** in gateway settings? This prevents UDP gateways from working (and for gateways connected with Basic Station or MQTT, this prevents unauthenticated connections)
- Do you see any warnings/errors in the Gateway live data section?

#### Check the following in the Gateway configuration:

##### UDP Gateways

- Does the Gateway Server address match with the address mentioned in the gateway overview in {{% tts %}} Console?
- Are the upstream and downstream ports set to 1700?

##### LoRa Basics™ Station Gateways:

- Are the CUPS Server Address and LNS Server Address correctly configured?
- Are the CUPS and LNS ports configured with 443 and 8887 respectively?
- Are API Keys assigned with necessary rights?
- Did you select the relevant root certificates to configure?
- Is the Backhaul used in the Gateway stable?
- Does the Gateway run with the latest firmware?
- Does the Frequency Plan selected match with the configuration in the gateway? Refer to the [Frequency Plans section]({{< ref "/reference/frequency-plans" >}}) for plans that are officially supported by The Things Stack

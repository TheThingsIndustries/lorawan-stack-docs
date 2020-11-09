---
title: "Troubleshooting Gateways"
description: ""
---

This section provides help for common issues and frequently asked questions you may have when adding gateways. 

<!--more-->

### How do I see gateway events?

Gateway event logs can be found in the console in the gateway's general information page. See [Working with Events]({{< ref "getting-started/events" >}}) for other ways of subscribing to events.

### My gateway won't connect. What do I do?

- Double check your gateway settings in {{% tts %}}. Ensure your Gateway EUI is correct
- Double check the configuration settings on your gateway. Is the network address the same address you use to connect to {{% tts %}}? Are your ports correct?
- Check your gateway logs. For information specific to your gateway, see the [Gateways section]({{< ref "/gateways" >}})
- If using Basic Station with the CUPS protocol enabled, double check your API Keys and certificates

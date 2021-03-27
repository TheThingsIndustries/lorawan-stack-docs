---
title: "Troubleshooting Devices"
description: ""
---

This section provides help for common issues and frequently asked questions you may have when adding devices. 

<!--more-->

### How do I see device events?

Device event logs can be found in the console in the device's general information page. See [Working with Events]({{< ref "getting-started/events" >}}) for other ways of subscribing to events.

### My device won't join. What do I do?

- Double check your DevEUI, JoinEUI or AppEUI, LoRaWAN and Regional Parameters Version, root keys (AppKey, and with LoRaWAN 1.1 or higher, NwkKey)
- Check gateway and application events for traffic from your device
- Double check frequency plan settings in your end device and gateways (they must be the same LoRaWAN band)
- Double check your network connection. If there is a slow connection from the server to the gateway, the join accept message may be sent too late (this can happen when a gateway uses 3G as a backhaul). If using the CLI, run `ttn-lw-cli gateways connection-stats <gateway-id>` to see the round trip time (RTT) for your gateway
- Check for duplicate use of JoinNonce (or AppNonce) and/or DevNonce
- Adjust ADR and link check settings to conditions which the device is located in

### No downlinks are reaching my device. What do I do?

- Check gateway and application events for traffic from your device
- Check duty cycle restrictions
- Device clock drift often occurs when SF12 is used
- Check your antenna connections

### {{% tts %}} is no longer receiving uplinks from my device. What do I do?

- Check [gateway events](#how-do-i-see-gateway-events) and [device events](#how-do-i-see-device-events) for traffic from your device
- Check for FCnt mismatch on ABP devices

---
title: "Troubleshooting Semtech UDP Packet Forwarder"
description: ""
---

This section contains help for common problems you may encounter when using {{% udp-pf %}} to connect to {{% tts %}}.

<!--more-->

### No downlinks are reaching my UDP gateway. Why?

With UDP gateways, if uplink messages are reaching {{% tts %}}, that does not mean the downlink messages are going to be received correctly by the gateway. 

The {{% udp-pf %}} sends a `PULL_DATA` request every ~5 seconds to pull the data scheduled for a downlink transmission on {{% tts %}}.

If downlink messages are reaching your gateway, the {{% udp-pf %}} should be sending `PULL_ACK` messages with a reasonable latency, usually way lower than 500 ms. If this latency is high, pulling the downlink data will fail. One of the drawbacks of using the {{% udp-pf %}} is that it does not have an implemented mechanism to detect if pulling the downlink data fails, so your data might end up lost. 

Common reasons for having latency issues between the gateway and {{% tts %}} cluster are that the gateway is geographically far from the cluster, and using cellular or satellite backhauls for gateways.

Try solving this issue by: 

- Checking your internet connection
- Using {{% tts %}} cluster closest to the location of your gateway

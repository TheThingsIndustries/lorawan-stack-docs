---
title: "Node-RED"
description: ""
weight: 60
---

[Node-RED](https://nodered.org/) is a free, JavaScript-based development tool for visual programming, developed to ease the process of wiring together hardware devices, APIs and online services.

The MQTT server that is exposed by {{% tts %}} can be connected to Node-RED. 

<!--more-->

This integration allows [setting up a Node-RED flow]({{< ref "/integrations/node-red/setup/" >}}) that [listens to events and uplink messages]({{< ref "/integrations/node-red/receive/" >}}), and it is also possible to [schedule downlink messages]({{< ref "/integrations/node-red/send/" >}}).

{{< figure src="demo_setup.png" alt="Demo setup" class="plain" >}}

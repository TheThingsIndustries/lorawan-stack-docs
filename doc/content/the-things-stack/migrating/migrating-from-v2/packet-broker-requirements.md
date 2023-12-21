---
title: "Packet Broker Requirements for End Device Migration"
description: ""
weight: 1
aliases:
  ["/getting-started/migrating/migrating-from-v2/packet-broker-requirements"]
---

Read this section if you want to make use of [Packet Broker]({{< ref "/the-things-stack/packet-broker" >}}) to migrate your end devices and route traffic from {{% ttnv2 %}} to {{% tts %}}.

<!--more-->

When migrating your devices with active sessions, it is in most cases not possible to make use of Packet Broker. Read along to learn when you can and cannot make use of Packet Broker.

| Migrate from             | Migrate to             | Possibility to use Packet Broker                   |
| ------------------------ | :--------------------- | :------------------------------------------------- |
| The Things Industries V2 | {{% ttss %}}           | Only without persisting active device sessions     |
| The Things Industries V2 | The Things Stack Cloud | With and without persisting active device sessions |

Remember that {{% tts %}} Enterprise and {{% tts %}} Open Source can also be configured to connect to Packet Broker. If using those deployments, end devices can be migrated from {{% ttnv2 %}} via Packet Broker without persisting active sessions.

## Devices Address (DevAddr)

**{{% ttnv2 %}} DevAddr of your end device needs to be routable by Packet Broker.**

OTAA devices migrated without an active session will acquire a new **DevAddr** from {{% tts %}} during the join procedure. Packet Broker will always be able to route the traffic with DevAddrs assigned by {{% ttss %}} or The Things Stack Cloud.

When registering ABP devices on {{% tts %}}, it is possible to auto-generate new **DevAddr** which can be routed by Packet Broker. ABP devices can be re-programmed to use this new **DevAddr**. This implies breaking their existing session on {{% ttnv2 %}}.

Migrating OTAA and ABP devices with their active sessions implies keeping their **DevAddr** values from {{% ttnv2 %}}. Packet Broker will be able to route traffic for these **DevAddr** values only if these devices were registered on **The Things Industries V2 (SaaS)** and you are migrating them to **{{% tts %}} Cloud**. If you are not using these deployments and you still want your traffic to be routed by Packet Broker, end devices can only be migrated without their active sessions. The alternative option is to migrate your gateway instead of using Packet Broker.

## RX1 Delay

**The **RX1 delay** value for your end device needs to be set to 5 seconds, which is a default for {{% tts %}} ({{% ttnv2 %}} is using 1 second).**

The RX1 delay of OTAA devices migrated without their active session will be automatically set to 5 seconds without your intervention.

However, this needs to be manually set for OTAA devices migrated with an active session by [configuring their MAC settings]({{< ref "/the-things-stack/migrating/configure-mac-settings" >}}). It is also possible to re-program ABP devices to enforce the **RX1 Delay** of 5 seconds (this basically implies starting a new ABP session, i.e. migrating ABP devices without their active session from {{% ttnv2 %}}).

If devices keep on using an **RX1 Delay** of 1 second, downlinks routed via the Packet Broker will probably never reach the end device in time. The alternative solution to enable downlinks is to migrate your gateway to {{% tts %}} too. Remember that even if you migrate your gateways to {{% tts %}}, you might still experience issues if you are using a high-latency backhaul in a combination with an **RX1 Delay** of 1 second.

If DevAddr and RX1 Delay conditions stated above are not met, it is likely that you will experience difficulties in communication between your end device and {{% tts %}} via Packet Broker. If you are using deployments that are not connected to Packet Broker, you will have to migrate your devices as well as [your gateways]({{< ref "/the-things-stack/migrating/gateway-migration" >}}) in order to receive the traffic from your end device on {{% tts %}}.

{{< warning >}} We strongly recommend to migrate devices without their active sessions, to make sure Packet Broker can route the traffic properly and that it reaches {{% tts %}} in time. {{</ warning >}}

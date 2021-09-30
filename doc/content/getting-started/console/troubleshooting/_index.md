---
title: "Troubleshooting Console"
description: ""
---

This section provides help for common issues in {{% tts %}} Console. 

<!--more-->

## What Are Last Seen / Last Activity?

### Last activity

For **end devices**, the `session` and `pending_session` populate the initial **Last activity** value, and it is updated by `uplink`, `join` or `rejoin` events 
from the device.

### Last seen

For **gateways**, this is generated from the `stats` endpoint of the gateway server which is the more recent of either the `last_status_received_at` or `last_uplink_received_at` data. The value is updated by `downlink received`, `uplink sent` or `status received`. events.

For **applications**, the initial value is populated by historical events from all devices within the application. This value is then updated by **Last activity** events from all devices within the application.

## Common Errors

### Network Error / Reconnecting / Stream errors

A network error in the Console occurs when your browser loses connection to the stream from the network server, which can happen for a number of reasons, such as your computer losing it's Wi-Fi connection. This does not indicate an error on a device or the network server, just that the stream was interrupted on your computer. Ensure your network connection is active and refresh the page to clear this error.

### Fail Link / Network Server Peer Not Available

This happens when an Application is not linked properly to the Network Server. {{% tts %}} does not support external linking of the Application Server. Ensure that in your application, the Network Server address is blank and that the application API key is valid with linking rights.

### Entity Not Found / Device Not Found

Your gateway receives traffic from all devices in range, and {{% tts %}} drops this traffic if no matching device is found. If you are trying to activate a device but receiving this error, double check your DevEUI and JoinEUI (or AppEUI).

In rare cases, this may also happen to ABP devices if a device resets its frame counters (usually because of a power cycle) and can not be found by the session. In this case, it is necessary to re-activate the device. OTAA prevents this problem from occurring, and is more secure in general, so it is the preferred form of activation when possible.

### Entity Already Exists

An entity with this ID already exists. The entity may have been deleted, but {{% tts %}} retains deleted IDs so that they can not be reused, unless they are [purged]({{< ref "reference/purge" >}}). See [ID and EUI constraints]({{< ref "reference/id-eui-constraints" >}}) for uniqueness requirements.

### Duplicate Uplink

An uplink was received and forwarded by multiple gateways, but due to backhaul latency or a Packet Broker one arrived outside the deduplication window and was dropped.

### Invalid Major / JoinRequestPHYPayload Length / Unknown MType

These are typically non-LoRaWAN traffic received by a gateway on your network.

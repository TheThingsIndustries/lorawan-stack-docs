---
title: "Troubleshooting Console"
description: ""
---

This section provides help for common issues in {{% tts %}} Console. 

<!--more-->

## I see some incorrectly displayed items in the Console.

- Try clearing your web browser cache or using incognito mode.
- Check if the issue persists after you change the web browser.

If these steps do not help you solve the issue, please collect your browser console and network logs while reproducing the error, and use them to create an issue in [{{% tts %}} GitHub repository](https://github.com/TheThingsNetwork/lorawan-stack).

## What does "Last activity/Last seen" mean?

See [Last Activity]({{< ref "reference/last-activity" >}}).

## Common Errors

### Network Error / Reconnecting / Stream errors

A network error in the Console occurs when your browser loses connection to the stream from the network server, which can happen for a number of reasons, such as your computer losing it's Wi-Fi connection. This does not indicate an error on a device or the network server, just that the stream was interrupted on your computer. Ensure your network connection is active and refresh the page to clear this error.

### Entity Not Found / Device Not Found

Your gateway receives traffic from all devices in range, and {{% tts %}} drops this traffic if no matching device is found. If you are trying to activate a device but receiving this error, double check your DevEUI and JoinEUI (or AppEUI).

In rare cases, this may also happen to ABP devices if a device resets its frame counters (usually because of a power cycle) and can not be found by the session. In this case, it is necessary to re-activate the device. OTAA prevents this problem from occurring, and is more secure in general, so it is the preferred form of activation when possible.

### Entity Already Exists

An entity with this ID already exists. The entity may have been deleted, but {{% tts %}} retains deleted IDs so that they can not be reused, unless they are [purged]({{< ref "reference/purge" >}}). See [ID and EUI constraints]({{< ref "reference/id-eui-constraints" >}}) for uniqueness requirements.

### Duplicate Uplink

An uplink was received and forwarded by multiple gateways, but due to backhaul latency or a Packet Broker one arrived outside the deduplication window and was dropped.

### Invalid Major / JoinRequestPHYPayload Length / Unknown MType

These are typically non-LoRaWAN traffic received by a gateway on your network.

### Token Refresh Refused

If you see `error:pkg/web/oauthclient:refresh (token refresh refused)` error in the Console and you're unable to access it, try clearing your browser's cache and history, and retry accessing the Console. You can also try accessing the Console from the incognito window or another browser.
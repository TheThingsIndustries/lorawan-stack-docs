---
title: "Metrics"
description: ""
weight: 50
---

The AWS IoT integration for {{% tts %}} reports device metrics to the shadow state. This is useful to retrieve information about the session and radio-frequency performance.

<!--more-->

In the AWS Console, open **Services** and go to **IoT Core**.

In the menu on the left, open **Manage**, go to **Things** and click the thing of interest.

In the menu on the left, click **Shadows** and go to **lorawan**. This opens the LoRaWAN shadow state that is maintained by {{% tts %}}.

{{< figure src="../shadow-state.png" alt="Shadow State" >}}

The shadow state contains the following fields:

```js
{
  "reported": {
    // Timestamp when the device was last seen (activation or uplink)
    "lastSeen": "2020-08-05T13:03:22.064376156Z",
    // Number of gateways that cover the device
    "gateways": 1,
    // Uplink frame counter of the session
    "fCntUp": 3,
    // Downlink frame counter of the session (not used when Application Server manages payload encryption)
    "fCntDown": 0,
    // LoRaWAN DevAddr (hex)
    "devAddr": "270000B0",
    // Best RSSI (received signal strength indicator) of the last uplink message
    "rssi": -38,
    // Best SNR (signal-to-noise ratio) of the last uplink message
    "snr": 9,
    // Timestamp when the device joined the network
    "activated": "2020-08-05T13:01:57.252799045Z"
  }
}
```

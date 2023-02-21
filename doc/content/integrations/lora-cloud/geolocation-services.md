---
title: "LoRa Cloud Geolocation Services"
description: ""
weight: 2
---

[LoRa Cloud Geolocation Services](https://www.loracloud.com/portal/geolocation/home) provides simple JSON web APIs that can be easily integrated with a LoRaWAN network or application server to enable estimating the location of LoRa-based devices.

<!--more-->

In general, LoRa allows locating devices withing approximately 50m, without the need for a geolocation hardware module and no extra power consumption. Instead, the RSSI, SNR and TOA metadata that are being sent as part of your device's LoRa radio frames are used to estimate the location of your device. If your device can perform WiFi scans, scanning results can also be used to estimate your device's location. This yields a significant cost reduction compared to GPS.

{{< note >}} Keep in mind that TOA is available only in metadata of gateways that have appropriate high-resolution time-stamping features. Therefore, your gateway needs to support this feature in order for you to be able to use TOA-based geolocation features. {{</ note >}}

Also, LoRa Cloud Geolocation integration allows estimating the location of LR1110-based devices with transceiver firmware from their GNSS scans.

Three query types are supported in scope of this integration and will be demonstrated below:

- [LoRa TOA/RSSI](https://www.loracloud.com/documentation/geolocation?url=v3.html) - allows computing the location estimates using TOA and/or RSSI information from a single or multiple LoRa frames (for all LoRa devices)
- [GNSS](https://www.loracloud.com/documentation/geolocation?url=gnss.html) - location estimates are computed from the information contained in the GNSS scan result messages (NAV messages) (for LR1110 transceiver-based devices only)
- [TOA/WiFi](https://www.loracloud.com/documentation/geolocation?url=v2.html#singleframe-wi-fi-tdoa-request) - the initial device location estimation is performed using the scanned WiFi access points, but if this estimation is not valid, another estimation is performed based on TOA metadata from device's LoRa radio frames (for all LoRa devices capable of performing WiFi scans)

{{< warning >}} It is important to know that you can obtain the location estimates using LoRa Cloud Geolocation LoRa TOA/RSSI query only if the uplink messages sent by your end device are picked up by at least 3 LoRaWAN gateways. If this is not the case, you will see no errors in {{% tts %}} Console, but you will not see the `Location solved` message containing the location estimation results either. {{</ warning >}}

The location of your gateway has to be publicly available for this integration, as it participates in the process of computing the end device location. This is disabled in {{% tts %}} by default, because the application (and end device) owner does not have be the one providing the gateway coverage. If you own the gateway, it is safe for you to explicitly allow to publish its location.

To make the gateway location public, tick the **Gateway location &#8594; Public** box when [adding your gateway]({{< ref "/gateways/concepts/adding-gateways" >}}) in {{% tts %}} Console.

If your gateway is already added in {{% tts %}} Console, go to your gateway's settings, navigate to the **Location** tab on the left hand menu and tick the **Privacy &#8594; Publish location** box.

{{< note >}} Using Semtech's [Modem-E firmware](https://lora-developers.semtech.com/library/tech-papers-and-guides/understanding-lora-basics-modem-e/) is recommended for LR1110-based devices, hence using the [LoRa Cloud Modem Services integration]({{< ref "/integrations/lora-cloud/modem-services" >}}) instead of LoRa Cloud Geolocation is also recommended. {{</ note >}}

Before proceding with this guide, make sure you have completed the [LoRa Cloud Setup]({{< ref "/integrations/lora-cloud/portal" >}}) guide.

## Configure Geolocation Integration

To setup LoRa Cloud Geolocation integration, navigate to your application in {{% tts %}}.

On the left hand menu, select **Integrations &#8594; LoRa Cloud**. Click the **Expand** button next to the **Geolocation services**.

Next, copy the token you previously created in LoRa Cloud Modem & Geolocation Services portal.

{{< figure src="../copy-token.png" alt="Copy the token from LoRa Cloud" >}}

Choose the **Query type** depending on the type of data you want to use for estimating the location of your device. As mentioned earlier, you can choose **LoRa TOA/RSSI**, **GNSS** or **TOA/WiFi** query type.

If you choose **LoRa TOA/RSSI**, you also have an option to enable **Multiframe** location lookups. Multiframe mode allows using the sequence of radio frames (instead of just a single frame) to improve the device's location estimation accuracy. Multiframe mode is reported to be more accurate than averaging multiple location results calculated from several single radio frames. If you choose multiframe mode, you can also set the **Multiframe window size** to tell how many historical messages should be sent as part of the final request, and **Multiframe time window** as the maximum age of considered historical messages.

Finish by clicking the **Set token** button.

{{< figure src="../paste-token-geolocation.png" alt="LoRa Cloud Geolocation integration" >}}

## Obtain Location Solutions

This section will show you how to obtain the location estimates using LoRa® TOA/RSSI, GNSS and TOA/WiFi query types.

After you obtain the location results, you can further integrate your {{% tts %}} application with other third-party IoT platforms to visualize them, etc.

### LoRa TOA/RSSI

At this point, when your LoRa device sends any uplink message and it gets picked up by at least 3 gateways, you will notice the location estimation results present in the `Location solved` message in {{% tts %}} **Live data** tab, as shown below.

{{< figure src="../toa-rssi.png" alt="LoRa TOA/RSSI location estimate" >}}

Notice the `Source: LORA_RSSI_GEOLOCATION` which indicates the type of the query you chose for geolocation.

{{< warning >}} Keep in mind that if your device's uplink message was not picked up by at least 3 gateways, you will not see the Location solved message in {{% tts %}} **Live data** view, but you will not see any errors either. {{</ warning >}}

### GNSS

When your LR1110 transceiver performs a GNSS scan and sends the resulting data in an uplink NAV message, you will see the location estimate present in the `Location solved` message in {{% tts %}} **Live data** tab, as shown below.

{{< figure src="../gnss.png" alt="GNSS location estimate" >}}

Notice the `Source: GPS` which indicates the type of the query you chose for geolocation.

{{< warning >}} For GNSS-based geolocation, the GNSS payload has to be valid. Otherwise, you will see an error similar to `Ignore invalid GNSS message payload: <payload>`. This is likely going to happen if you are not using LR1110-based device with transceiver firmware. {{</ warning >}}

### TOA/WiFi

When your LoRa device performs a WiFi scan and sends a resulting uplink message, the payload contains the MAC addresses of WiFi adapters and RSSIs of scanned WiFi networks. You need to decode this payload using the [uplink payload formatter function]({{< ref "/integrations/payload-formatters/javascript" >}}) in a way that the `decoded_payload` object that is a part of the `uplink_message` contains the access point records, like so:

```js
"decoded_payload": {
    "access_points": [
    {
        "bssid": "14:60:80:9a:19:58",
        "rssi": -20
    },
    {
        "bssid": "fc:f5:28:7b:07:e5",
        "rssi": -80
    }
  ]
}
```

If estimating the location based on WiFi access point records cannot be performed, the location will be estimated using the TOA information from LoRa radio metadata and gateway location. In both cases, you will see the location estimate present in the `Location solved` message in {{% tts %}} **Live data** tab, as shown below.

{{< figure src="../toa-wifi.png" alt="TOA/WiFi location estimate" >}}

Notice the `Source: WIFI_RSSI_GEOLOCATION` which indicates the type of the query you chose for geolocation.

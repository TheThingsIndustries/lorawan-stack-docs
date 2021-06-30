---
title: "LoRa Cloud Device & Application Services"
description: ""
---

[LoRa Cloud Device & Application Services](https://www.loracloud.com/portal/device_management/home) comprise a set of full life-cycle management features for LoRaWAN-based devices, which are intended to simplify the development of managed LoRaWAN endpoint solutions.

<!--more-->

LoRa Cloud Device & Application Services protocol lets you manage common device functionality at the application layer for all LoRa-based devices, and manage geolocation for modem-based devices (like [LoRa Edge LR1110 Solution](https://www.loracloud.com/documentation/device_management?url=overview.html#lora-edge-lr1110-solution)). These services also provide protocols for reliable application data reception from all Semtech's LoRaWAN-compatible devices, with efficient techniques to fight against packet loss. 

{{< note >}} In general, LoRa Cloud Device & Application Services do not interact directly with network servers to retrieve uplinks or schedule downlinks, so it is usually users's responsibility to forward uplinks towards and schedule downlinks from LoRa Cloud as a part of the response.

However, when it comes to geolocation for modem-based devices, {{% tts %}} integration with LoRa Cloud Device & Application Services handles this on behalf of the user, i.e. it queries the protocol engine on LoRa Cloud in order to retrieve the response. This way, after the integration is configured and the uplink message containing scanning result is sent from the device, the user only has to monitor results in {{% tts %}}. {{</ note >}}

## LoRa Cloud Setup

On the [LoRa Cloud portal](https://www.loracloud.com/portal), navigate to **LoRa Cloud Device & Application Services**.

{{< figure src="../das.png" alt="LoRa Cloud Device & Application Services" >}}

Choose **Manage devices** on the left hand menu and click the **Add devices** button. To add a device, you only need to provide its EUI as shown on the image below.

{{< figure src="../add-device.png" alt="Adding a new device" >}}

Next, choose **Manage tokens** on the left hand menu. Click the **Create new token** button.

Give the name to your token and tick the boxes next to permissions you wish to allow for it. Click the **Create new token** button to finish.

{{< note >}} A user can decide to restrict some permissions. On the image below, all permissions are allowed for the sake of simplicity of this guide. {{</ note >}}

{{< figure src="../token-creation.png" alt="Creating a token" >}}

## Configure Device & Application Services Integration

To setup LoRa Cloud Device & Application Services integration, navigate to your application in {{% tts %}}.

On the left hand menu, select **Integrations &#8594; LoRa Cloud**. Click the **Expand** button next to the **Device & Application Services**.

Next, copy the token you previously created in LoRa Cloud Device & Application Services portal.

{{< figure src="../copy-token.png" alt="Copy the token from LoRa Cloud" >}}

Paste the token in the **Token** field under the **Set LoRa Cloud token** section and tick the box under **LR1110 demo encoding** to enable it. Finish by clicking the **Set token** button.

{{< figure src="../paste-token.png" alt="Paste the token in The Things Stack" >}}

## Obtain Location Solutions 

For LR1110 modem-based devices, location of the device can be estimated using Wi-Fi, assisted GNSS and autonomous GNSS scans. This section will show you how to obtain the location estimates using Wi-Fi and assisted GNSS scans.

{{< note >}} Please keep in mind that this guide does not refer to  LoRa Cloud Geolocation. In case you are looking for geolocation solutions that use RSSI and TOA metadata, or you are using LR1110-based device with transceiver firmware (instead of Modem-E firmware), you should follow the [LoRa Cloud Geolocation guide]({{< ref "/integrations/lora-cloud/geolocation" >}}). {{</ note >}}

{{< info >}}  The number of (useful) satellites detected when running the autonomous GNSS scan might not be enough to calculate the position of your device, so we will not include that case in this guide. However, if you want to read more about it, follow [this guide](https://lora-developers.semtech.com/learning-center/hands-on-labs/build-end-to-end-solution-using-lorawan-and-loraedge/find-the-location-of-your-tracking-device/#run-an-autonomous-gnss-scan-and-send-results). {{</ info >}}

After you obtain the location results, you can further integrate your {{% tts %}} application with other third-party IoT platforms to visualize them, etc.

### Wi-Fi Scans

{{< info >}} To learn how to perform Wi-Fi scans with LoRa Edge LR1110 device, follow [this guide](https://lora-developers.semtech.com/learning-center/hands-on-labs/build-end-to-end-solution-using-lorawan-and-loraedge/find-the-location-of-your-tracking-device/#run-a-wi-fi-scan-and-send-results). {{</ info >}}

At this point, when your device performs a Wi-Fi scan and sends the resulting data in an uplink message, you will notice the location estimation results present in the `Location solved` message in {{% tts %}} **Live data** tab, as shown below.

{{< figure src="../wifi-scan-result.png" alt="Location estimation result from a WiFi scan" >}}

{{< note >}} Notice the `Source: WIFI_RSSI_GEOLOCATION` which indicates the type of scan your device is performing. {{</ note >}}

{{< warning >}} Keep in mind that the Wi-Fi triangulation is performed here, so you will be able to obtain location estimates only if your device's Wi-Fi scan resulted in 3 or more MAC addresses. If this is not the case, you will not see the `Location solved` message in {{% tts %}} **Live data** view, but you will not see any errors either. {{</ warning >}}

### Assisted GNSS Scans

{{< info >}} To learn how to perform GNSS assisted scans with LoRa Edge LR1110 device, follow [this guide](https://lora-developers.semtech.com/learning-center/hands-on-labs/build-end-to-end-solution-using-lorawan-and-loraedge/find-the-location-of-your-tracking-device/#configure-and-run-an-assisted-gnss-scan-and-send-results). {{</ info >}}

{{< note >}} Keep in mind that in order to perform an assisted GNSS scan, you have to provide the approximate location coordinates to the LoRa Edge LR1110 device. {{</ note >}}

Same as in the subsection above, when your device performs an assisted GNSS scan and sends the associated data in an uplink message, you will notice the location estimation results present in the `Location solved` message in {{% tts %}} **Live data** tab, as shown below.

{{< figure src="../gnss-assisted-scan-result.png" alt="Location estimation result from an assisted GNSS scan" >}}

{{< note >}} Notice the `Source: GPS` which indicates the type of scan your device is performing. {{</ note >}}

{{< warning >}} The device's active GNSS antenna should be placed outdoors in order to be able to detect as much satellites as possible.

If you do not receive the `Location solved` message, it is possible that LoRa Cloud GNSS solver could not resolve your device's location. To verify, check the `log_messages` object in the `Service data` messages. You might see errors such as:

- `Not enough received or usable satellites, totalReceived=4, usableGPS=3, usableBDS=0` if there is too few detected and/or usable satellites
- `Location fix dropped due to poor accuracy, caused most likely by big error in pseudo-ranges or timestamp` if the accuracy of the resulting location is too low

If you are facing these errors, keep repeating the scan and re-sending results periodically until GNSS solver manages to resolve your device's location. Be aware that there is a high chance your device's battery will drain much faster if you are frequently repeating these steps. {{</ warning >}}

## Send Requests from LoRa Cloud

Besides estimating the location of your device, you can also send requests from LoRa Cloud portal to mute or reset the device, trigger it for a re-join, set ADR profile or obtain information like temperature, voltage, signal strength, status, etc. In this section, we demonstrate how to send a request to obtain information from your device.

To send a request, navigate to **Manage devices** on the left hand menu in the LoRa Cloud Device & Application Services portal.

Click on the **Send requests** button.

{{< figure src="../send-requests.png" alt="Send requests from LoRa Cloud portal" >}}

Enter your device's EUI in the **EUI(S)** field and choose **Get Info** as a **Request type**. Tick the boxes next to the information you want to obtain from your device.

Schedule the request to be sent by clicking the **Send requests** button.

{{< figure src="../get-info.png" alt="Get Info request" >}}

After a few moments, click on a reload button to refresh the device information in the **Manage devices** view. You can already see that the **Status** is changed to **Joined: Yes**, as well as the time of the **Last Uplink**, **Signal RSSI** and **Signal SNR**. 

Click the **>** button next to your device to see all the information that was obtained from the device.

{{< figure src="../full-info.png" alt="Show full info" >}}

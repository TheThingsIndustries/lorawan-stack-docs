---
title: "Visualize LoRa Edge™ Geolocation Data on Ubidots"
description: ""
weight: 70
aliases:
  - /integrations/lr1110-geolocation
  - /integrations/lora-edge-geolocation
---

{{< figure src="LR1110.jpg" alt="LoRa Edge™ LR1110" class="float plain" >}}

This guide shows you an example of using {{% tts %}} integrations to interact with [LoRa Cloud™ Device & Application Services](https://www.loracloud.com/documentation/device_management) to acquire the position solution for the LoRa Edge™-based tracking device, and to send that position data to a map widget on [Ubidots](https://ubidots.com/).

<!--more-->

[LoRa Edge™ LR1110](https://www.semtech.com/products/wireless-rf/lora-transceivers/lr1110) is a long range, ultra-low power transceiver designed by Semtech, offering Wi-Fi and GNSS geolocation capabilities. The [LoRa Basics™ Modem-E](https://lora-developers.semtech.com/uploads/documents/files/Understanding_LoRa_Basics_Modem-E_Sept2_Approvd-Final.pdf) is a software embedded inside LoRa Edge™ LR1110 that supports the LoRaWAN protocol stack, as well as the application layer functions and APIs.

The [Device & Application Services with Geolocation for Modem-based Devices API](https://www.loracloud.com/documentation/device_management?url=v1.html) on LoRa Cloud™ allows interacting with Device & Application Services to make efficient use of the LoRa Edge™'s geolocation features.

## Prerequisites

1. A user account on LoRa Cloud™.

2. A Ubidots user account with an upgraded plan.

{{< warning >}} The [UbiFunctions](https://help.ubidots.com/en/articles/2132086-analytics-ubifunctions-user-guide) module used in this guide is currently not available for the STEM plan. {{</ warning >}}

{{< note >}} This guide assumes you have already added your LoRa Edge™-based tracking device to {{% tts %}}. See [Adding Devices](https://www.thethingsindustries.com/docs/devices/adding-devices/) section for a detailed info. {{</ note >}}

## Prepare a LoRa Cloud™ Setup

To prepare the setup for your device's location resolution, first go to [LoRa Cloud™](https://www.loracloud.com/portal) and select **LoRa Cloud Device & Application Services** after logging in to your account.

{{< figure src="lora-cloud-das.png" alt="LoRa Cloud Device & Application Services" >}}

On the left hand menu, navigate to the **Device Owners** tab and click the **Create new owner** button. Enter a **Name**, choose a **Plan** and select **Submit**.

{{< figure src="device-owner.png" alt="Creating a device owner" >}}

Next, navigate to the **Manage Devices** tab on the left hand menu and click the **Add devices** button. Enter your device's EUI and click the **Add devices** button.

{{< figure src="add-device.png" alt="Adding a device" >}}

If you look under the **Manage Tokens** tab, you can find or create a new token needed for the next step.

{{< figure src="manage-tokens.png" alt="Manage tokens" >}}

## Create a LoRa Cloud™ Integration

The next step is to integrate {{% tts %}} with LoRa Cloud™.

In {{% tts %}} Console, navigate to the **Integrations** menu and select **LoRa Cloud**.

Paste the token from LoRa Cloud™ in the **Token** field and enable the **LR1110 demo encoding** by checking the box.

{{< figure src="lora-cloud-integration.png" alt="LoRa Cloud integration" >}}

At this point, your device will send the location updates to the LoRa Cloud™ Device & Application Services. After receiving your device's location solution from Device & Application Services, in your device's **Live data** tab in {{% tts %}}, you will find a message of the **Forward location solved message** type. This message contains the object of the following structure:

```bash
"location_solved": {
      "service": "lora-cloud-device-management-v1-wifi",
      "location": {
        "latitude": 51.455,
        "longitude": 5.458,
        "accuracy": 15,
        "source": "SOURCE_WIFI_RSSI_GEOLOCATION"
      }
    }
```

{{< note >}} Keep on mind that these values can change depending on the type of scans your device is performing - WiFi or GNSS. {{</ note>}}

## Prepare the Setup on Ubidots

Next, we want to send the location solution data to Ubidots and show it on a [map widget](https://help.ubidots.com/en/articles/1712418-create-map-widgets-in-ubidots). Before integrating, you need to prepare the setup on Ubidots first. 

This setup is only slightly modified comparing to the one in the [Ubidots integration guide](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/ubidots/ubidots-setup), so feel free to follow those steps. The only change you need to make is replacing this UbiFunction method:

```bash
def parse_tti_data(data):
    return data['uplink_message']['decoded_payload']
```

with the following one:

```bash
def parse_tti_data(data):
    return data['location_solved']
```

When you click the **Make it live** button, copy the **HTTPs Endpoint URL** assigned to your UbiFunction, and you are ready to go back to {{% tts %}} to create a Webhook integration.

## Create a Webhook Integration with Ubidots

In {{% tts %}} Console, select **Webhooks** under **Integrations** on the left hand menu and choose the **Custom webhook**.

{{< note >}} The Ubidots Webhook template is also available, but it is predefined to send only the **Uplink message** type via Webhook integration. You could modify the Webhook integration after creating it with this template, but we recommend using a custom webhook and following the next steps to avoid the possible confusion. {{</ note >}}

The steps to be taken follow the [Creating Webhooks](https://www.thethingsindustries.com/docs/integrations/webhooks/creating-webhooks/) guide and are described below in detail.

- Create a **Webhook ID**.
- Add a `Content-type` header entry with `application/json` as a value.
- Select **JSON** as a **Webhook format**.
- In the **Base URL** field, paste the UbiFunction URL you copied in the previous step.
- Enable the **Location solved** message type.

{{< figure src="ubidots-integration.png" alt="Ubidots Webhook integration" >}}

## Visualize Data on a Ubidots Map Widget

Go back to Ubidots and find your device by navigating to the **Devices** tab. After some new data reaches Ubidots, you will see the **location** variable automatically appearing on your device's dashboard.

On the left, there is a window containing important info about your device. Under **Location** section, set the **Mode** to **Auto**. This tells Ubidots to use the **location** object to automatically determine your device's location. The **Latitude** and **Longitude** parameters will acquire the values from the **latitude** and **longitude** variables of the **location** object shown on the dashboard. 

{{< figure src="ubidots-device.png" alt="Ubidots device data" >}}

Now navigate to the **Data** tab and select **Dashboards**. Create a new dashboard which will contain your map widget.

Add a new map widget by clicking the **+** button in the upper right corner and selecting **Map**. 

{{< note >}} When creating this widget, do not forget to click the **Select Device** button and to select your device. {{</ note >}} 

{{< figure src="create-map-widget.png" alt="Creating a map widget" >}}

Finally, you will see a map widget containing your device's current location appearing in your dashboard! 

{{< figure src="LR1110-location.png" alt="LoRa Edge™ location" >}}

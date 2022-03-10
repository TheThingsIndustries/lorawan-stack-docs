---
title: "Tellsens"
description: "Tellsens geomap/geofencing service"
---

[Tellsens](https:/tellsens.io) is an IoT platform that facilitates map and satelite imagery with geofencing functionality. Read this section to learn how to integrate {{% tts %}} with Tellsens.

<!--more-->

## Prerequisites

1. A user account on [Tellsens](https:/tellsens.io).

## Setup

When you log in to Tellsens, you first need to create an application.

In the **Map Service** section, you can change your **App Name**, and find your **Client Id** and **API Key**. Note these values down as you will need them to configure the integration on {{% tts %}}.

In the **Add Device** section, you can choose your **Device Model** or propose a new device model by clicking on **I can't find my device model**. These devices need to be GPS-equipped in order to be shown on the Tellsens map. To register a device, you also need to provide a **Device Name** and a **Device EUI**.

You can also choose to **Visit map**, modify your **Privacy** settings and **Manage users** in the bottom left corner.

{{< figure src="tellsens-api-keys.png" alt="Tellsens API Key Inteface" >}}

## Configure {{% tts %}}

Next step is to instantiate a Webhook integration on {{% tts %}} by using **tellsens.io** [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}).

On {{% tts %}}, navigate to **Integrations &#8594; Webhooks** and choose **tellsens.io** Webhook template.

Name your integration by filling in the **Webhook ID** field. 

Paste the **API Key** and **Client ID** values from Tellsens into the equally named fields of the Webhook template.

{{< figure src="tellsens-webhook-template.png" alt="Tellsens Webhook integration" >}}

Hit the **Create tellsens.io webhook** button to finish. 

To see the values of all parameters of the Tellsens integration, click on the integration after you created it with the Webhook template.

## View and Interact with Your Map

Navigate to the map service to view your map and sensor data.

{{< figure src="tellsens-map-service.png" alt="Tellsens Map Service Inteface" >}}

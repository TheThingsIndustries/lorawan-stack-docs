---
title: "Migrate using the V2 Takeout Tool"
description: ""
---

This section contains instructions for viewing historical data about applications, devices, and gateways in The Things Network V2 using the [V2 Takeout Tool](https://v2takeout.thethingsnetwork.org), to migrate these devices to {{% tts %}}.

<!--more-->

## Prerequisites

1. An [account](https://www.thethingsnetwork.org) on The Things Network with devices or gateways on the deprecated The Things Network V2

## Login to the V2 Takeout Tool

Access the [V2 Takeout Tool](https://v2takeout.thethingsnetwork.org) and login with The Things ID. You will be met with a home screen where you can view and download data from your applications and gateways.

{{< figure src="takeout.png" >}}

## View Applications and Devices

In the applications section, you will see applications you created on The Things Network V2.

{{< figure src="applications.png" >}}

Click in to an application to see IDs and keys for devices. You may also download a zip file containing data for all devices in the application.

{{< figure src="application.png" >}}

To migrate these devices, simply [add the devices]({{< ref "devices/adding-devices" >}}) in {{% tts %}}. Since The Things Network V2 servers are no longer running, you do not need to remove the devices from the deprecated server.

## View Gateways

In the gateways section, you will see gateways you created on The Things Network V2.

{{< figure src="gateways.png" >}}

To migrate these gateways, simply [add the gateways]({{< ref "gateways/adding-gateways" >}}) in {{% tts %}}. If the gateway supports {{% lbs %}}, we recommend following instructions for [Adding a {{% lbs %}} gateway]({{< ref "gateways/lora-basics-station" >}}).

There is no need to remove the gateways from The Things Network V2. Once the gateways are configured for {{% tts %}}, they will communicate only with that network server.


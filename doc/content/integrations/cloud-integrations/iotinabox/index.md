---
title: "IoT in a Box"
description: ""
weight:
---

[IoT in a Box](https://www.iotinabox.com/) combines an intelligent network of sensors and gateways with monitoring and reporting applications to solve unique and complex monitoring challenges.

<!--more-->

> Visit [IoT in a Box helpdesk](https://iotinabox.zendesk.com/hc/en-us) for detailed documentation.

## Prerequisites

1. An [Iot in a Box user account](https://iotinabox.mydevices.com/home).

## Setup IoT in a Box

Once you log into your IoT in a Box account, you will need to add a company. You can add it by providing your company info in **Company**, **Country**, **Address** and other fields as shown on the image below.

{{< figure src="company.png" alt="Creating a company" >}}

Next, you will be asked to add your gateway. To add it, your need to enter the **Gateway ID** that is printed on the sticker on the device bottom.

{{< figure src="add-gateway.png" alt="Adding a gateway" >}}

You will also be asked to add your device, which you can do by submitting the **Device ID**. You can find this ID printed on the sticker on your device. 

{{< figure src="add-device.png" alt="Adding a device" >}}

{{< note >}} Check the supported hardware in [myDevices online store](https://store.mydevices.com/). Devices that are not purchased from this store can be added by submitting their DevEUI/model, or by registering them through your IoT in a Box Whitelabel Console. {{</ note >}}

## Configure {{% tts %}}

After finishing IoT in a Box setup, use the **IoTinaBox™** [Webhook template]({{< ref "/integrations/webhooks/webhook-templates" >}}) to create a Webhook integration on {{% tts %}}.

To integrate, you only need to fill out the **Webhook ID** field with a desired value, and provide an IoT in a Box **Subscription Key**.

{{< note >}} You can obtain the IoT in a Box subscription key by sending an email to `support@mydevices.com`. {{</ note >}}

{{< figure src="iotinabox-template.png" alt="IoT in a Box webhook" >}}

{{< note >}} To see the values of all parameters of the IoT in a Box integration, click on the integration after you created it with the Webhook template. {{</ note >}}

At this point, you have set up everything to monitor your sensor devices, receive alerts and get daily reports on their status.

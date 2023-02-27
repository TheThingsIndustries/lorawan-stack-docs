---
title: "LoRa Cloud Setup"
description: ""
weight: 1
---

Before connecting your device to {{% tts %}} you need to set up the [LoRa Cloud portal](https://www.loracloud.com/portal) by creating an API token.

<!-- more -->

## LoRa Cloud Portal Setup

On the [LoRa Cloud portal](https://www.loracloud.com/portal), navigate to **Modem & Geolocation Services**.

{{< figure src="../portal.png" alt="LoRa Cloud Modem & Geolocation Services" >}}

Choose **Manage tokens** on the left hand menu. Click the **Create new token** button.

Give the name to your token and tick the boxes next to permissions you wish to allow for it. Click the **Create new token** button to finish. A user can decide to restrict some permissions. On the image below, all permissions are allowed for the sake of simplicity of this guide.

{{< figure src="../create-token.png" alt="Creating a token" >}}

To add a new device, choose **Manage devices** on the left hand menu and click the **Add devices** button. You only need to provide the device EUI as shown on the image below.

{{< figure src="../add-device.png" alt="Adding a new device" >}}

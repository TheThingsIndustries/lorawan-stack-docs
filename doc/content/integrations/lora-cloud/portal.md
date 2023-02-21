---
title: "LoRa Cloud Setup"
description: ""
weight: 1
---

Before connecting your device to {{% tts %}}, you need to register it in the [LoRa Cloud portal](https://www.loracloud.com/portal) and create an API key.

<!-- more -->

## LoRa Cloud Portal Setup

On the [LoRa Cloud portal](https://www.loracloud.com/portal), navigate to **LoRa Cloud Modem & Geolocation Services**.

{{< figure src="../portal.png" alt="LoRa Cloud Modem & Geolocation Services" >}}

Choose **Manage devices** on the left hand menu and click the **Add devices** button. To add a device, you only need to provide its EUI as shown on the image below.

{{< figure src="../add-device.png" alt="Adding a new device" >}}

Next, choose **Manage tokens** on the left hand menu. Click the **Create new token** button.

Give the name to your token and tick the boxes next to permissions you wish to allow for it. Click the **Create new token** button to finish. A user can decide to restrict some permissions. On the image below, all permissions are allowed for the sake of simplicity of this guide.

{{< figure src="../create-token.png" alt="Creating a token" >}}

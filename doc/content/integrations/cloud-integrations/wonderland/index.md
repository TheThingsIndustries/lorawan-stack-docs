---
title: "IoT Wonderland"
description: ""
weight: 
aliases: ["/integrations/cloud-integrations/wonderland-core/wonderland-setup", "/integrations/cloud-integrations/wonderland-core/tts-setup", "/integrations/cloud-integrations/wonderland-core"]
---

[IoT Wonderland](https://iotwonderland.com/) is a powerful and user-friendly platform for tracking applications, offering broad support for LoRaWAN, cellular, satellite, barcode, RFID, and beacon-based devices. It features advanced location visualization, real-time data handling, and flexible integration options—making it ideal for large-scale, multi-network tracking solutions.

{{< figure src="Wonderland.png" alt="Wonderland UI" >}}

<!--more-->

This guide will help you set up an integration between {{% tts %}} and IoT Wonderland.

## Prerequisites

1. A [user account on Wonderland](https://www.lorawonderland.com/master/public/ui/login.php)

## Configuring The Things Stack

To integrate The Things Stack (TTS) with IoT Wonderland via webhook, you can use the built-in Wonderland template:

1.In TTS, navigate to: Applications → Webhooks → Add webhook → Choose the "IoT Wonderland" template.

2. Enter a Webhook ID of your choice (any arbitrary value is fine).

{{< figure src="tts-webhook-setup.png" alt="Webhook Wonderland" >}}

After creating the webhook, click on it to view all integration parameters and verify the setup.

Your integration is all set! Go to your device on Wonderland and check the incoming data from your The Things Stack device. 
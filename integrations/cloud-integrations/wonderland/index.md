# IoT Wonderland

> IoT Wonderland is a powerful and user-friendly platform for tracking applications, offering broad support for LoRaWAN, cellular, satellite, barcode, RFID, and …

Source: https://www.thethingsindustries.com/docs/integrations/cloud-integrations/wonderland/


[IoT Wonderland](https://iotwonderland.com/) is a powerful and user-friendly platform for tracking applications, offering broad support for LoRaWAN, cellular, satellite, barcode, RFID, and beacon-based devices. It features advanced location visualization, real-time data handling, and flexible integration options—making it ideal for large-scale, multi-network tracking solutions.

![Wonderland UI](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/wonderland/Wonderland.png)


This guide will help you set up an integration between The Things Stack and IoT Wonderland.

## Prerequisites

1. A [user account on Wonderland](https://www.lorawonderland.com/master/public/ui/login.php).

## Configuring The Things Stack

To integrate The Things Stack (TTS) with IoT Wonderland via webhook, you can use the built-in Wonderland template:

1.In TTS, navigate to: Applications → Webhooks → Add webhook → Choose the "IoT Wonderland" template.

2. Enter a Webhook ID of your choice (any arbitrary value is fine).

![Webhook Wonderland](https://www.thethingsindustries.com/docs/integrations/cloud-integrations/wonderland/tts-webhook-setup.png)


After creating the webhook, click on it to view all integration parameters and verify the setup.

Your integration is all set! Go to your device on Wonderland and check the incoming data from your The Things Stack device. 

---
title: "Scheduling Downlinks with Datacake"
description: ""
weight: 3
---

In addition to forwarding messages from {{% tts %}} to Datacake, you can also schedule downlink messages to be sent from Datacake to your end device.

<!--more-->

Enter your device's settings page on Datacake and go to the **Downlinks** tab.

Click the **Add Downlink** button.

Next, fill in the **Name** field, define the **Payload encoder** and click **Save Downlink**. 

>Learn to write payload decoders in the [official Datacake documentation](https://docs.datacake.de/lorawan/downlinks#writing-a-downlink-encoder).

{{< figure src="downlink-configuration.png" alt="Configuring downlink" >}}

Now simply click the **Send Downlink** button to schedule a downlink and check your device's logs to see the incoming message.

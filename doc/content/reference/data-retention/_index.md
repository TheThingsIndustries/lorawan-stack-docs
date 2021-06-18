---
title: "Data Retention and Privacy"
description: ""
weight:
---

This reference contains information about how long {{% tts %}} persists device data. For inquiries about data privacy or data security, read on, or [contact us](cloud@thethingsindustries.com).

<!--more-->

{{% tts %}} Network Server stores

- Recent uplinks as part of the MAC state, in a Redis database

{{% tts %}} Application Server stores

- Recent uplink application payloads, in a Redis database

{{% tts %}} Cloud runs on an isolated subnet, and the databases can only be accessed from within the instance.

{{% tts %}} uses your Network Key to decrypt LoRaWAN packets - these can only be decrypted at the Network Server, not by gateways or anywhere else along the IP route they travel.

{{% tts %}} uses your Application Key if provided to decrypt the application payload, which is available in the [JSON message]({{< ref "reference/data-formats" >}}). It is also possible to skip payload decryption in {{% tts %}}, and perform decryption later in your application pipeline. Select **Skip payload encryption/decryption** when registering a device to do so.

{{< figure src="skip-encryption.png" >}}

The Things Industries will never read application payloads, even if you provide your Application Key.

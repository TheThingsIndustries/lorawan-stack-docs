---
title: "Data Retention and Privacy"
description: ""
weight:
---

This reference contains information about how long {{% tts %}} persists device data. For inquiries about data privacy or data security, read on, or [contact us](cloud@thethingsindustries.com).

<!--more-->

## Cloud and Customer Hosted Deployments

The following information applies to {{% tts %}} deployments hosted by The Things Industries, specifically {{% tts %}} Cloud and Dedicated Cloud.

{{% tts %}} deployments hosted on customer hardware, specifically {{% tts %}} Enterprise, are completely managed by the customer and can be configured to meet more specific data privacy requirements.

## Persisted Data

On {{% tts %}} Cloud and Dedicated Cloud, the Network Server stores

- Recent uplinks as part of the MAC state, in a Redis database

The Application Server stores

- Recent uplink application payloads, in a Redis database

{{% tts %}} Cloud runs on an isolated subnet, and the databases can only be accessed from within the instance.

{{% tts %}} uses your Network Key to decrypt LoRaWAN packets - these can only be decrypted at the Network Server, not by gateways or anywhere else along the IP route they travel.

{{% tts %}} uses the LoRaWAN AppSKey to decrypt the application payload, which is available in the [JSON message]({{< ref "reference/data-formats" >}}). It is also possible to skip payload decryption in {{% tts %}}, and perform decryption later in your application pipeline. Select **Skip payload encryption/decryption** when registering a device to do so.

{{< figure src="skip-encryption.png" >}}

The Things Industries will never read application payloads, even if the AppSKey is configured..

---
title: "Data Retention and Privacy"
description: ""
weight:
---

This reference contains information about what access administrators and users have to data, and how long {{% tts %}} persists device data. For inquiries about data privacy or data security, read on, or [contact The Things Industries](cloud@thethingsindustries.com).

<!--more-->

## Important Terms

To understand how data is secured in {{% tts %}} it is necessary to understand some important roles:

**Infrastructure Owners**: Those with access to the hardware {{% tts %}} runs on. For {{% tts %}} Cloud and Community Edition, this is The Things Industries. For Enterprise and Open Source deployments, this is you, the customer. Formally, the **Infrastructure Owner** has access to all data stored in a database on the hardware. In practice, The Things Industries does not use this to access data in {{% tts %}} Cloud or Community Edition deployments.

**Network Administrators**: Users with `admin` access in a tenant. **Network Administrators** have access to all entities in a tenant, including device secrets. In multi-tenant environments, tenants are completely isolated, and **Network Administrators** of one tenant have **no access** to other tenants.

**Users and Organizations**: Users without `admin` access, and organizations, can access entities which they have [collaborator rights]({{< ref "getting-started/user-management" >}}) over.

## Cloud Deployments

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

The Things Industries personnel will never access your application payloads, even if the AppSKey is configured, unless given permission to do so to provide support.

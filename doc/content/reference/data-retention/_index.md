---
title: "Data Retention and Privacy"
description: ""
weight:
---

This reference contains information about what access administrators and users have to data, and how long {{% tts %}} persists device data. For inquiries about data privacy or data security, read on, or [contact The Things Industries](mailto:cloud@thethingsindustries.com).

<!--more-->

## Important Terms

To understand how data is secured in {{% tts %}} it is necessary to understand some important roles:

**Infrastructure Owners**: Those with access to the hardware {{% tts %}} runs on. For {{% tts %}} Cloud, Dedicated Cloud and {{% ttss %}}, this is The Things Industries. {{% tts %}} Enterprise and Open Source deployments are managed by the customer and user respectively; The Things Industries does not have any infrastructural access. Technically, **Infrastructure Owners** have access to all data stored in databases or persistent volumes. In practice, The Things Industries uses this direct data access to {{% tts %}} Cloud or {{% ttss %}} deployments only for backups.

**Network Administrators**: Users with administrative access in a tenant. **Network Administrators** have access to all entities in a tenant, including device secrets. In multi-tenant environments, tenants are completely isolated, and **Network Administrators** of one tenant have **no access** to other tenants.

**Users and Organizations**: Users without administrative access, and organizations, can access entities which they have [collaborator rights]({{< ref "/the-things-stack/management/user-management" >}}) over.

**Support Engineers**: The Things Industries support engineers do **not** have infrastructural access to any {{% tts %}} deployments. They must be [granted access]({{< ref "/the-things-stack/management/user-management" >}}) by the customer.

## {{% tts %}} Cloud and Dedicated Cloud

The following information applies to {{% tts %}} deployments hosted by The Things Industries, specifically {{% tts %}} Cloud and Dedicated Cloud.

{{% tts %}} deployments hosted on customer hardware, specifically {{% tts %}} Enterprise, are completely managed by the customer and can be configured to meet more specific data privacy requirements.

### Persisted Data

On {{% tts %}} Cloud and Dedicated Cloud, the Network Server stores

- Recent uplinks as part of the MAC state, in a Redis database

The Application Server stores

- Recent uplink application payloads, in a Redis database

- Upstream messages (only if the [Storage Integration]({{< ref "integrations/storage" >}}) is enabled)

{{% tts %}} Cloud runs in isolated subnets. Databases can only be accessed from within the subnet and are not publicly accessible.

{{% tts %}} uses your NwkSKey (NwkSEncKey in LoRaWAN® 1.1) to decrypt LoRaWAN network-level payload. These session keys are only known to the Network Server and are never exposed downstream (to gateways) or upstream (to applications).

{{% tts %}} uses the LoRaWAN AppSKey to decrypt the application payload, which is available in the [JSON message]({{< ref "the-things-stack/concepts/data-formats" >}}). It is also possible to skip payload decryption in {{% tts %}}, and perform decryption later in your application pipeline. See instructions on how to do it on an [application level]({{< ref "/integrations/adding-applications#payload-encryption-and-decryption" >}}) or on a [device level]({{< ref "/devices/adding-devices#application-layer-settings" >}}).

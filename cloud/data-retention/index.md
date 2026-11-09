# Data Retention and Privacy

> This reference contains information about what access administrators and users have to data, and how long The Things Stack persists device data. For inquiries …

Source: https://www.thethingsindustries.com/docs/cloud/data-retention/


This reference contains information about what access administrators and users have to data, and how long The Things Stack persists device data. For inquiries about data privacy or data security, read on, or [contact The Things Industries](mailto:cloud@thethingsindustries.com).

## Important Terms

To understand how data is secured in The Things Stack it is necessary to understand some important roles:

**Infrastructure Owners**: Those with access to the hardware The Things Stack runs on. For The Things Stack Cloud and The Things Stack Sandbox, this is The Things Industries. The Things Stack Enterprise and Open Source deployments are managed by the customer and user respectively; The Things Industries does not have any infrastructural access. Technically, **Infrastructure Owners** have access to all data stored in databases or persistent volumes. In practice, The Things Industries uses this direct data access to The Things Stack Cloud or The Things Stack Sandbox deployments only for backups.

**Network Administrators**: Users with administrative access in a tenant. **Network Administrators** have access to all entities in a tenant, including device secrets. In multi-tenant environments, tenants are completely isolated, and **Network Administrators** of one tenant have **no access** to other tenants.

**Users and Organizations**: Users without administrative access, and organizations, can access entities which they have [collaborator rights](https://www.thethingsindustries.com/docs/concepts/advanced/user-management/) over.

**Support Engineers**: The Things Industries support engineers do **not** have infrastructural access to any The Things Stack deployments. They must be [granted access](https://www.thethingsindustries.com/docs/concepts/advanced/user-management/) by the customer.

## The Things Stack Cloud

The following information applies to The Things Stack deployments hosted by The Things Industries, specifically The Things Stack Cloud.

The Things Stack deployments hosted on customer hardware, specifically The Things Stack Enterprise, are completely managed by the customer and can be configured to meet more specific data privacy requirements.

### Persisted Data

On The Things Stack Cloud the Network Server stores

- Recent uplinks as part of the MAC state, in a Redis database

The Application Server stores

- Recent uplink application payloads, in a Redis database

- Upstream messages (only if the [Storage Integration](https://www.thethingsindustries.com/docs/integrations/storage/) is enabled)

The Things Stack Cloud runs in isolated subnets. Databases can only be accessed from within the subnet and are not publicly accessible.

The Things Stack uses your NwkSKey (NwkSEncKey in LoRaWAN® 1.1) to decrypt LoRaWAN network-level payload. These session keys are only known to the Network Server and are never exposed downstream (to gateways) or upstream (to applications).

The Things Stack uses the LoRaWAN AppSKey to decrypt the application payload, which is available in the [JSON message](https://www.thethingsindustries.com/docs/integrations/data-formats/). It is also possible to skip payload decryption in The Things Stack, and perform decryption later in your application pipeline. See instructions on how to do it on an [application level](https://www.thethingsindustries.com/docs/integrations/adding-applications/#payload-encryption-and-decryption) or on a [device level](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/#application-layer-settings).


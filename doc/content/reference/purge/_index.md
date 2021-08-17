---
title: "Purging Entities"
description: ""
weight:
---

When entities are deleted, {{% tts %}} [retains some IDs]({{< ref "reference/id-eui-constraints" >}}) by default to prevent another user re-registering the ID and obtaining historical data.

It is also possible for administrators to purge IDs so that they may be reused. This reference contains information about how to do this, and the implications of purging IDs.

<!--more-->

## What Happens to Purged Entities?

Only administrators may purge entities. Purging an entity has the following effects:

- Permanently deletes the entity
- Permanently deletes collaborator rights related to the entity (does not apply to users as they do not have collaborators)
- Permanently deletes API keys related to the entity (does not apply to OAuth clients as they do not have API keys)
- **Does not** delete stored data in routing clusters (only in the Identity Server)
- **Does not** delete stored events (hence these can be recovered by re-registering the ID)
- **Does not** delete information stored in Packet Broker (applies to gateways)
- **Does not** delete stored data in the storage integration (applies to applications)
- **Does not** delete stored data in external integrations (applies to applications)
- Releases the ID of the entity for re-use, which may give other users access to historical data if they register an entity with the same ID

{{< warning >}}
Purging entites deletes them **permanently** and is irreversible!
{{</ warning >}}

## How to Purge Entities

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}

Go to the **General Settings** tab of the entity and click **Delete**.

{{< figure src="delete.png" >}}

If you are an administrator, you will be presented with the option to purge the entity. Check the **Also release entity IDs** box to also purge the entity.

{{< figure src="purge.png" >}}

{{</ tabs/tab >}}

{{< tabs/tab "CLI" >}}

To purge an application:

```bash
$ ttn-lw-cli applications purge --application-id <APPLICATION_ID>
```

To purge a client:

```bash
$ ttn-lw-cli clients purge --client-id <CLIENT_ID>
```

To purge a gateway:

```bash
# By EUI
$ ttn-lw-cli gateways purge --gateway-eui <GATEWAY_EUI>
# Or by ID
$ ttn-lw-cli gateways purge --gateway-id <GATEWAY_ID>
```

To purge an organization:

```bash
$ ttn-lw-cli organizations purge --organization-id <ORGANIZATION_ID>
```

To purge a user:

```bash
$ ttn-lw-cli users purge --user-id <USER_ID>
```

{{</ tabs/tab >}}

{{</ tabs/container >}}

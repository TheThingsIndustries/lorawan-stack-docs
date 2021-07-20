---
title: "Purging Entities"
description: ""
weight:
---

When entities are deleted, {{% tts %}} [retains some IDs]({{< ref "reference/id-eui-constraints" >}}) by default to prevent another user re-registering the ID and obtaining historical data.

It is also possible for administrators to purge IDs so that they may be reused. This reference contains information about how to do this, and the implications of purging IDs.

<!--more-->

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

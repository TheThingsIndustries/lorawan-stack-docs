# Deleting, Restoring and Purging Entities

> When entities are deleted, The Things Stack retains some IDs by default to prevent another user re-registering the ID and obtaining historical data. Deleted …

Source: https://www.thethingsindustries.com/docs/concepts/advanced/purge/


When entities are deleted, The Things Stack [retains some IDs](https://www.thethingsindustries.com/docs/concepts/architecture/id-eui-constraints/) by default to prevent another user re-registering the ID and obtaining historical data. Deleted entities can be restored within a limited time period, but it is also possible for administrators to purge these entities, so that their IDs may be reused.

This reference contains information about how to do delete, restore and purge entities.

> **Note:** End devices cannot be soft deleted, i.e. once they are deleted, they cannot be restored anymore. Hence, information below regarding restoring and manual purging refers to other entities - applications, gateways, clients, users and organizations.


## Deleting and Restoring Entities

**Console:**

Go to the **General Settings** tab of the entity and click **Delete**.

![Confirm deletion dialog for an application in The Things Stack Console](https://www.thethingsindustries.com/docs/concepts/advanced/purge/delete.png)


If you are an administrator, you will also be presented with the option to purge the entity. For implications of purging entities and other details, check [sections below](#what-happens-to-purged-entities).




**CLI:**

To delete an end device (keep in mind the note above!):

```bash
ttn-lw-cli applications delete --application-id <application-id> --device-id <device-id>
```

To delete an application:

```bash
ttn-lw-cli applications delete --application-id <application-id>
```

To delete a client:

```bash
ttn-lw-cli clients delete --client-id <client-id>
```

To delete a gateway:

```bash
# By EUI
ttn-lw-cli gateways delete --gateway-eui <gateway-eui>
# Or by ID
ttn-lw-cli gateways delete --gateway-id <gateway-id>
```

To delete an organization:

```bash
ttn-lw-cli organizations delete --organization-id <organization-id>
```

To delete a user:

```bash
ttn-lw-cli users delete --user-id <user-id>
```


When entities are deleted from The Things Stack Cloud, there is a default time period of 24h when an administrator can restore them. If restoration is attempted after these 24h, the following error will occur:

```bash
error:pkg/identityserver:restore_window_expired (this entity can no longer be restored)
```

In this case, entity can only be purged by an administrator and then recreated.

For The Things Stack Enterprise deployments, it is possible to configure the restoration period. For more info, check [Identity Server Options](https://www.thethingsindustries.com/docs/enterprise/management/configuration/identity-server/#general-options).

Note again that restoring entities is not possible if they have been purged.

**Console:**

To restore an entity using the Console, navigate to the **Deleted (Admin)** tab for the entity of interest, and click **Restore**.

![List of deleted applications in the Admin view of The Things Stack Console, with Restore and Purge buttons](https://www.thethingsindustries.com/docs/concepts/advanced/purge/restore-app.png)




**CLI:**

To restore an entity using the CLI, just replace `delete` with `restore` in commands presented above.


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

> **Warning:** Purging entites deletes them **permanently** and is irreversible!


## How to Purge Entities

Purging entities using the Console or the CLI is usually most convenient, so those methods are explained in this section.

**Console:**

There are two ways to purge an entity:

- Go to the **General Settings** tab of the entity and click **Delete**. If you are an administrator, you will be presented with the option to purge the entity. Check the **Also release entity IDs** box to also purge the entity.

![Confirm deletion dialog for a gateway with the admin-only option to also release the entity IDs (purge) checked](https://www.thethingsindustries.com/docs/concepts/advanced/purge/purge.png)


- After soft-deleting the entity with **Delete**, navigate to the **Deleted (Admin)** panel (the same panel where you restore entities), find your deleted entity and click **Purge**.




**CLI:**

To purge an application:

```bash
ttn-lw-cli applications purge --application-id <application-id>
```

To purge a client:

```bash
ttn-lw-cli clients purge --client-id <client-id>
```

To purge a gateway:

```bash
# By EUI
ttn-lw-cli gateways purge --gateway-eui <gateway-eui>
# Or by ID
ttn-lw-cli gateways purge --gateway-id <gateway-id>
```

To purge an organization:

```bash
ttn-lw-cli organizations purge --organization-id <organization-id>
```

To purge a user:

```bash
ttn-lw-cli users purge --user-id <user-id>
```



---
title: "Working with Users and Organizations"
description: ""
aliases:
  [
    /user-management,
    /getting-started/user-management,
    /the-things-stack/management/user-management,
  ]
weight: 13
---

This section explains how to manage users and organizations, and how to grant rights over entities.

<!--more-->

In addition to the written instructions linked below, a video with instructions for managing collaborator rights is available on [The Things Network youtube channel](https://youtu.be/-m5rULfP1yg).

<details><summary>Show video</summary>
{{< youtube "-m5rULfP1yg" >}}
</details>

## Administrator Rights

{{% tts %}} allows network administrators to manage the users that have access to the network. Administrators may:

- Manage users in the network (or the tenant, for multi-tenant deployments)
- Manage the tenant configuration in multi-tenant deployments
- Have all rights on all entities in the tenants (or most rights, depending on [Admin Rights Options]({{< ref "/reference/configuration/identity-server#admin-rights-options" >}}))
- Search for all entities in the network
- Perform any actions on all entities in the network
- Manage some admin-only fields of OAuth clients and users
- Permanently delete (purge) entities (instead of just marking them as deleted)

## User Rights

For non-administrator users, {{% tts %}} manages access rights to Gateways, End Devices, and Applications through collaborations.

By default, non-administrator users have no rights over Gateways, End Devices, and Applications they did not create. To grant a user rights over an entity, the user must be added as a collaborator to that entity.

See the [Rights]({{< relref "rights" >}}) section for instructions to manage collaborator rights.

## Organizations

To make it easier to manage groups of users, it is possible to create organizations with specific rights which apply to all users who are collaborators. To use organizations, users must be added as collaborators of the organization, and the organization must be added as a collaborator of an entity.

See the [Organizations]({{< relref "org" >}}) section for instructions to create and manage organization rights.

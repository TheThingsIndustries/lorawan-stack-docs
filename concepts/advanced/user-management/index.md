# Working with Users and Organizations

> This section explains how to manage users and organizations, and how to grant rights over entities.

Source: https://www.thethingsindustries.com/docs/concepts/advanced/user-management/


This section explains how to manage users and organizations, and how to grant rights over entities.

In addition to the written instructions linked below, a video with instructions for managing collaborator rights is available on [The Things Industries youtube channel](https://youtu.be/-m5rULfP1yg).

<details><summary>Show video</summary>
[Video: YouTube](https://www.youtube.com/watch?v=-m5rULfP1yg)

</details>

## Administrator Rights

The Things Stack allows network administrators to manage the users that have access to the network. Administrators may:

- Manage users in the network (or the tenant, for multi-tenant deployments)
- Manage the tenant configuration in multi-tenant deployments
- Have all rights on all entities in the tenants (or most rights, depending on [Admin Rights Options](https://www.thethingsindustries.com/docs/enterprise/management/configuration/identity-server/#admin-rights-options))
- Search for all entities in the network
- Perform any actions on all entities in the network
- Manage some admin-only fields of OAuth clients and users
- Permanently delete (purge) entities (instead of just marking them as deleted)

## User Rights

For non-administrator users, The Things Stack manages access rights to Gateways, End Devices, and Applications through collaborations.

By default, non-administrator users have no rights over Gateways, End Devices, and Applications they did not create. To grant a user rights over an entity, the user must be added as a collaborator to that entity.

See the [Rights](https://www.thethingsindustries.com/docs/concepts/advanced/user-management/rights/) section for instructions to manage collaborator rights.

## Organizations

To make it easier to manage groups of users, it is possible to create organizations with specific rights which apply to all users who are collaborators. To use organizations, users must be added as collaborators of the organization, and the organization must be added as a collaborator of an entity.

See the [Organizations](https://www.thethingsindustries.com/docs/concepts/advanced/user-management/org/) section for instructions to create and manage organization rights.


## Pages in this section

- [Organization Management](https://www.thethingsindustries.com/docs/concepts/advanced/user-management/org/index.md): This section contains instructions for managing organizations.
- [Rights Management](https://www.thethingsindustries.com/docs/concepts/advanced/user-management/rights/index.md): This section contains instructions for managing rights.
- [Troubleshooting User Management](https://www.thethingsindustries.com/docs/concepts/advanced/user-management/troubleshooting/index.md): This section provides help for common issues and frequently asked questions you may have when managing users, organizations and right.
- [User Management](https://www.thethingsindustries.com/docs/concepts/advanced/user-management/user/index.md): This section contains instructions for managing users.


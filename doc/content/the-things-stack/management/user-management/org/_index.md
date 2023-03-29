---
title: "Organization Management"
description: ""
aliases: [//the-things-stack/management/user-management/cli/org, //the-things-stack/management/user-management/console/org, getting-started/user-management/org/]
---

This section contains instructions for managing organizations.

<!--more-->

To make it easier to manage groups of users, it is possible to create organizations with specific rights which apply to all users who are collaborators. To use organizations, users must be added as collaborators of the organization, and the organization must be added as a collaborator of an entity.

When a user is a collaborator of an organization which is a collaborator for an entity, the user's rights are the intersection of the user's rights in the organization and the organization's rights on the entity.

In this section, we explain how to manage organizations and grant them rights using {{% tts %}} [Console]({{< ref "/the-things-stack/interact/console" >}}) and the [CLI]({{< ref "/the-things-stack/interact/cli" >}}).

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}

## Managing Organizations using the Console

To manage organizations, click the **Organizations** tab in the top menu.

{{< figure src="orgs.png" alt="Organizations" >}}

To add an organization, click **Add organization**.

{{< figure src="add-org.png" alt="Add organization" >}}

Enter the **Organization ID**, optionally **Name** and **Description**, and hit **Create organization**.

Use the left hand menu in your organization's settings to add or remove collaborators, edit or delete the organization, etc.

### Create Organization API Key

When a user is a member of an organization which is a collaborator for an entity, the user's rights are the intersection of the user's rights in the organization and the organization's rights on the entity. To grant rights to your organization, navigate to **API Keys** on the left hand menu of your organization's settings and select **Add API Key**.

Enter a **Name** for your key, set the **Expiry date**, select rights that you want to grant and then press **Create API Key**.

{{< figure src="organization-api-key-creation.png" alt="Application API Key creation" >}}

You will see a screen that shows your newly created API Key. You now can copy it in your clipboard by pressing the copy button. After saving the key in a safe place, press **I have copied the key**. You will not be able to see this key again in the future, and if you lose it, you can create a new one by following this same procedure.

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

## Managing Organizations using the CLI

We define some user parameters that will be used below:

```bash
ORGANIZATION_ID="org1"
USER_ID="user1"
```

Make sure to modify these according to your setup.

### Creating Organizations

Administrators can create organizations as follows:

```bash
ttn-lw-cli organizations create $ORGANIZATION_ID --user-id $USER_ID
```

This will create an organization `org1` with all the rights of `user1` and make `user1` a collaborator within the organization.

Output:

```json
{
  "ids": {
    "organization_id": "org1"
  },
  "created_at": "2020-07-14T09:37:01.938Z",
  "updated_at": "2020-07-14T09:37:01.938Z"
}
```

### Listing Organizations

To list organizations with the CLI, use the `organizations list` command.

```bash
ttn-lw-cli organizations list
```

```json
[{
  "ids": {
    "organization_id": "org1"
  },
  "created_at": "2020-07-09T12:39:35.129Z",
  "updated_at": "2020-07-09T12:39:35.129Z"
}
, {
  "ids": {
    "organization_id": "org2"
  },
  "created_at": "2020-07-14T09:37:01.938Z",
  "updated_at": "2020-07-14T09:37:01.938Z"
}]
```

### Searching for Organizations

To search for organizations with the CLI, use the `organizations search` command. Make sure to specify the fields you're interested in. This example will search for organizations with IDs that contain `org1`:

```bash
ttn-lw-cli organizations search --id-contains $ORGANIZATION_ID
```

Output:

```json
[{
  "ids": {
    "organization_id": "org1"
  },
  "created_at": "2020-07-09T12:39:35.129Z",
  "updated_at": "2020-07-09T12:39:35.129Z"
}]
```

### Adding Users to Organizations

To add a user to an organization, use the  `organizations collaborators set` command. This will add user `user1` as a collaborator of organization `org1` with all organization rights:

```bash
ttn-lw-cli organizations collaborators set --organization-id $ORGANIZATION_ID --user-id $USER_ID --right-organization-all
```

You must specify rights when adding a collaborator. Use the `--help` flag to see the list of possible rights, e.g `ttn-lw-cli organizations collaborators set --help`.

### Removing Users from Organizations

To remove a user from an organization, use the  `organizations collaborators delete` command:

```bash
ttn-lw-cli organizations collaborators delete --organization-id $ORGANIZATION_ID --user-id $USER_ID
```

This will remove user `user1` as a collaborator of organization `org1`

### Deleting Organizations

To delete an organization, use the `organizations delete` command.

```bash
ttn-lw-cli organizations delete --organization-id $ORGANIZATION_ID
```

{{< warning >}} When deleting organizations, their IDs stay reserved in the system. For security reasons, it is not possible to create a new organization with the same ID. {{</ warning >}}

### Create Organization API Key

To create an API key for your organization with all rights granted:

```bash
API_KEY_NAME="API key for my organization"
ttn-lw-cli organizations api-keys create \
  --name $API_KEY_NAME \
  --organization-id $ORGANIZATION_ID \
  --right-organization-all
```

The CLI will return an API key such as `NNSXS.JPFOTRWPJ4RBZZH...`. This API key has all rights granted. Make sure to copy the key and save it in a safe place. You will not be able to see this key again in the future, and if you lose it, you can create a new one by following this same procedure.

See the [CLI Reference]({{< ref "/ttn-lw-cli/ttn-lw-cli_organizations_api-keys" >}}) for details on managing organization API keys using the CLI.

{{< /tabs/tab >}}

{{< /tabs/container >}}

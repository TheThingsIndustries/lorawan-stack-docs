---
title: "User Management"
description: ""
aliases: [/the-things-stack/management/user-management/cli/user, /the-things-stack/management/user-management/console/user, /getting-started/user-management/user]
---

This section contains instructions for managing users.

<!--more-->

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}

## Managing Users in the Console

User management can be found in the user dropdown in the top right corner of the Console.

{{< figure src="dropdown.png" alt="User Dropdown" >}}

### Listing Users

The list of users is shown immediately after going to **User management** in the user dropdown.

{{< figure src="users-list.png" alt="User List" >}}

### Searching for Users

You can search for users by ID using the search field above the list of users. It is currently not possible to search for users by other fields than the user ID using the Console, but you can do this with the CLI.

### Creating Users

See the following video from [The Things Network youtube channel](https://youtu.be/vxXKBEQxLq0) for instructions to create a user in the console.

<details><summary>Show video</summary>
{{< youtube "vxXKBEQxLq0" >}}
</details>

### Inviting Users

It is currently not possible to invite users from the Console, but you can do this with the CLI.

### Updating Users

In order to update a user, select that user from the list. You'll now see the edit view.

{{< figure src="users-edit.png" alt="Editing a User" >}}

After making the changes to the user, click **Save changes** to update the user.

### Deleting Users

In the bottom of the edit view, you can click **Delete user** to delete the user.

{{< figure src="users-delete.png" alt="Deleting a User" >}}

{{< warning >}} When deleting users, their user IDs stay reserved in the system, it is not possible to create a new user with the same user ID. In most cases you'll probably want to update a user to set its state to `suspended` instead.

However, if the user ID has been purged by an admin, you'll be able to reuse it. {{</ warning >}}

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

## Managing Users using the CLI

We define some user parameters that will be used below:

```bash
NAME="My Colleague"
EMAIL="colleague@thethings.network"
```

Make sure to modify these according to your setup.

### Creating Users

Network Administrators can create user accounts as follows:

```bash
ttn-lw-cli users create colleague \
  --name $NAME \
  --primary-email-address $EMAIL
```

You will be prompted to enter the password:

```
Please enter password:***************
Please confirm password:***************
```

<details><summary>Output</summary>

```json
{
  "ids": {
    "user_id": "colleague"
  },
  "created_at": "2019-12-19T10:54:53.677Z",
  "updated_at": "2019-12-19T10:54:53.677Z",
  "name": "My Colleague",
  "contact_info": [
    {
      "contact_method": "CONTACT_METHOD_EMAIL",
      "value": "colleague@thethings.network"
    }
  ],
  "primary_email_address": "colleague@thethings.network",
  "password_updated_at": "2019-12-19T10:54:53.674Z",
  "state": "STATE_APPROVED"
}
```
</details>

### Inviting Users

You can create invitations for users to join the network with the `users invitations create` command:

```bash
ttn-lw-cli users invitations create $EMAIL
```

After you do this, you will be able to list the invitations you've sent:

```bash
% ttn-lw-cli users invitations list
```

<details><summary>Output</summary>

```json
[{
  "email": "colleague@thethings.network",
  "token": "MW7INQWYOE46GLP3AEFQEHR5XIKRYPSRAXFF3CUCLIQPPQ3BNBLQ",
  "expires_at": "2019-12-26T11:41:29.485Z",
  "created_at": "2019-12-19T11:41:29.486Z",
  "updated_at": "2019-12-19T11:41:29.486Z"
}]
```
</details>

You will also be able to delete an invitation if you want to revoke it:

```bash
ttn-lw-cli users invitations delete $EMAIL
```

### Listing Users

To list users with the CLI, use the `users list` command. Make sure to specify the fields you're interested in.

```bash
ttn-lw-cli users list --name --state --admin
```

<details><summary>Output</summary>

```json
[{
  "ids": {
    "user_id": "new-user"
  },
  "created_at": "2019-12-19T09:10:31.426Z",
  "updated_at": "2019-12-19T09:10:40.527Z",
  "name": "New User"
}, {
  "ids": {
    "user_id": "admin"
  },
  "created_at": "2019-12-18T14:54:12.723Z",
  "updated_at": "2019-12-18T14:54:12.723Z",
  "state": "STATE_APPROVED",
  "admin": true
}]
```
</details>

Use the pagination flags `--limit` and `--page` when there are many users.

### Searching for Users

To search for users with the CLI, use the `users search` command. Make sure to specify the fields you're interested in. We'll search for users with IDs that contain "new":

```bash
ttn-lw-cli users search --id-contains new --name
```

<details><summary>Output</summary>

```json
[{
  "ids": {
    "user_id": "new-user"
  },
  "created_at": "2019-12-19T09:10:31.426Z",
  "updated_at": "2019-12-19T09:10:40.527Z",
  "name": "New User"
}]
```
</details>

Use the pagination flags `--limit` and `--page` when there are many users.

### Updating Users

To update users with the CLI, use the `users update` command. The following command updates the state of user `new-user` to "approved" and makes them admin of the network:

```bash
ttn-lw-cli users update new-user --state APPROVED --admin true
```

<details><summary>Output</summary>

```json
{
  "ids": {
    "user_id": "new-user"
  },
  "created_at": "2019-12-19T09:10:31.426Z",
  "updated_at": "2019-12-19T11:44:39.609Z",
  "state": "STATE_APPROVED",
  "admin": true
}
```
</details>

### Deleting Users

To delete a user, use the `users delete` command.

{{< warning >}} When deleting users, their user IDs stay reserved in the system, it is not possible to create a new user with the same user ID. In most cases you'll probably want to update a user to set its state to `suspended` instead. {{</ warning >}}

{{< /tabs/tab >}}

{{< /tabs/container >}}

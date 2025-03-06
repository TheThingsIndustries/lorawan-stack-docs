---
title: "Rights Management"
description: ""
aliases:
  [
    /concepts/advanced/user-management/cli/rights,
    /concepts/advanced/user-management/console/rights,
    /getting-started/user-management/rights,
    /the-things-stack/management/user-management/rights,
  ]
---

This section contains instructions for managing rights.

<!--more-->

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}

## Managing Rights using the Console

In addition to the written instructions linked below, a video with instructions for managing collaborator rights is available on [The Things Industries youtube channel](https://youtu.be/-m5rULfP1yg).

{{< tabs/video "-m5rULfP1yg" >}}

Gateways, End Devices, and Applications have a **Collaborators** tab which allows you to specify rights for users or organizations on that entity. To manage collaborators, click the **Collaborators** tab in the left hand menu.

Click the **Add collaborator** button to add a collaborator.

{{< figure src="collaborators.png" >}}

Select the rights you wish the collaborator to have, and click **Add collaborator** to save your selection.

{{< figure src="rights.png" >}}

Rights apply to entities which a user or organization is a member (collaborator) of. To grant rights to an entity, add the user or organization as a collaborator of the entity.

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

## Managing Rights using the CLI

We define some user parameters that will be used below:

```bash
ORGANIZATION_ID="org1"
USER_ID="user1"
APP_ID="app1"
GTW_ID="gateway1"
```

Make sure to modify these according to your setup.

### Adding Collaborators

To add collaborators for Gateways, End Devices, or Applications, use the `collaborators add` command. For example, to add a collaborator `user1` to the application `app1` with rights to read and write device info and delete applications, use the command

```bash
ttn-lw-cli applications collaborators set --application-id $APP_ID \
  --user-id $USER_ID \
  --right-application-delete \
  --right-application-devices-read \
  --right-application-devices-write
```

To see the list of possible rights for an entity, use the `--help` flag, e.g `ttn-lw-cli applications collaborators set --help`.

### Listing Collaborators

To see which rights a user has on an entity, use the `collaborators list` command. For example, to see collaborators for the gateway `gateway1`, use the command:

```bash
ttn-lw-cli gateways collaborators list --gateway-id $GTW_ID
```

{{< /tabs/tab >}}

{{< /tabs/container >}}

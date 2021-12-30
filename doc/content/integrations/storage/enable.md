---
title: Enable/Disable
description: ""
summary: Enable Storage Integration for applications and end-devices.
weight: 20
---

The Storage Integration is implemented as an [Application Package]({{< ref "/reference/application-packages" >}}).

{{< note >}} Enabling/disabling Storage Integration for applications can be done using {{% tts %}} Console or CLI. Enabling/disabling Storage Integration for individual end devices is available only via CLI.

Note that the instructions for CLI here are following generic instructions for [using the CLI]({{< ref "/reference/application-packages/using-the-cli" >}}) to manage application packages, just specified for the `storage-integration` application package. {{</ note >}}

## Enable for an Application

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}

Navigate to **Applications** in the top menu and then select your application. On the left side, click **Integrations** and then **Storage Integration**.

Click on **Activate Storage Integration** to enable the storage integration for your application.

{{< figure src="activate-storage-integration.png" alt="Activate Storage Integration screen" >}}

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

Set up a default association between the desired application and the `storage-integration` package.

```bash
ttn-lw-cli applications packages default-associations set <application-id> <f_port> --package-name storage-integration
```

{{< note >}} The `f_port` for the default association is set to `100`. This value is irrelevant, i.e. the storage integration will receive and store all uplink messages, regardless of `f_port`. The `f_port` value is only needed because of the way application packages work with {{% tts %}}. {{</ note >}}

{{< warning >}} Do not configure more than one default association for the same application, since that will lead to storing duplicate messages in the persistent storage. {{</ warning >}}

{{< /tabs/tab >}}

{{< /tabs/container >}}

## Enable for an End Device

{{< cli-only hint-upgrade="true" >}}

Set up an association between the desired end device and the `storage-integration` package.

```bash
ttn-lw-cli applications packages associations set <application-id> <device-id> <f_port> --package-name storage-integration
```

{{< note >}} The `f_port` value is irrelevant. {{</ note >}}

{{< warning >}} Do not configure multiple associations for the same end device, since that will lead to storing duplicate uplinks in the persistent storage. {{</ warning >}}

## Disable for an Application

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}

To disable the integration, you only need to click the **Deactivate Storage Integration** button:

{{< figure src="activated-storage-integration.png" alt="Activated Storage Integration screen" >}}

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

To disable the integration, delete the package association or the default association. 

To list associations:

```bash
ttn-lw-cli applications packages default-associations list $APP_ID
```

The output will be something like:

```bash
{
  "defaults": [
    {
      "ids": {
        "application_ids": {
          "application_id": "app1"
        },
        "f_port": 100
      },
      "created_at": "2020-08-24T21:09:44.649890166Z",
      "updated_at": "2020-08-24T21:09:44.649890166Z",
      "package_name": "storage-integration"
    }
  ]
}
```

Then delete the association with:

```bash
ttn-lw-cli applications packages default-associations delete <application-id> <f_port>
```

{{< /tabs/tab >}}

{{< /tabs/container >}}

## Disable for an End Device

{{< cli-only >}}

To disable the integration, delete the association.

To list associations:

```bash
ttn-lw-cli applications packages associations list $APP_ID $DEVICE_ID
```

The output will be something like:

```bash
{
  "associations": [
    {
      "ids": {
        "end_device_ids": {
          "device_id": "dev1",
          "application_ids": {
            "application_id": "app1"
          }
        },
        "f_port": 100
      },
      "created_at": "2020-08-24T21:09:44.649890166Z",
      "updated_at": "2020-08-24T21:09:44.649890166Z",
      "package_name": "storage-integration"
    }
  ]
}
```

Delete the association with:

```bash
ttn-lw-cli applications packages associations delete <application-id> <device-id> <f_port>
```

## Enable and Disable using the API

See instructions on how to create/delete associations and default associations with the `storage-integration` application package [using the API]({{< ref "/reference/application-packages/using-the-api" >}}).
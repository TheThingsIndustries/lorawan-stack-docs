---
title: Enable/Disable
description: ""
summary: Enable Storage Integration for applications and end-devices.
weight: 20
---

The Storage Integration is implemented as an [Application Package]({{< ref "/reference/application-packages" >}}).

{{< note >}} Enabling Storage Integration for applications can be done using {{% tts %}} Console or CLI. Enabling Storage Integration for individual end devices is available only via CLI. {{</ note >}}

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
$ ttn-lw-cli applications packages default-associations set "app1" 100 --package-name storage-integration
```

{{< note >}} The `f_port` for the default association is set to `100`. This value is irrelevant. **The storage integration will receive and store all uplink messages, regardless of `f_port`**. The `f_port` value is only needed because of the way application packages work with {{% tts %}}. {{</ note >}}

{{< warning >}} **Do not configure more than one default association for the same application**, since that will lead to storing duplicate messages in the persistent storage. {{</ warning >}}

{{< /tabs/tab >}}

{{< /tabs/container >}}

## Enable for an End Device

{{< cli-only hint-upgrade="true" >}}

Set up an association between the desired end device and the `storage-integration` package.

```bash
$ ttn-lw-cli applications packages associations set "app1" "dev1" 100 --package-name storage-integration
```

{{< note >}} The `f_port` value is irrelevant. {{</ note >}}

{{< warning >}} **Do not configure multiple associations for the same end device**, since that will lead to storing duplicate uplinks in the persistent storage. {{</ warning >}}

## Disable for an Application

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}

To disable the integration, you only need to click the **Deactivate Storage Integration** button:

{{< figure src="activated-storage-integration.png" alt="Activated Storage Integration screen" >}}

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

To disable the integration, delete the package association, or the default association:

```bash
# List default associations
$ ttn-lw-cli applications packages default-associations list "app1"
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

```bash
$ ttn-lw-cli applications packages default-associations delete "app1" 100
```

{{< /tabs/tab >}}

{{< /tabs/container >}}

## Disable for an End Device

{{< cli-only >}}

To disable the integration, delete the association. First, list associations:

```bash
# List associations
$ ttn-lw-cli applications packages associations list "app1" "dev1"
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
# Delete association between "app1" and "dev1"
$ ttn-lw-cli applications packages associations delete "app1" "dev1" 100
```

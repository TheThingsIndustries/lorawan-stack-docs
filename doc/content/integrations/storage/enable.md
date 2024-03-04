---
title: Enable/Disable
description: ""
summary: Enable Storage Integration for applications and end-devices.
weight: 20
---

The Storage Integration is implemented as an [Application Package]({{< ref "/reference/application-packages" >}}).

{{< note >}} Enabling/disabling Storage Integration for applications can be done using {{% tts %}} Console or CLI. Enabling/disabling Storage Integration for individual end devices is available only via CLI.

Note that the instructions for CLI here are following generic instructions for [using the CLI]({{< ref "/reference/application-packages/using-the-cli" >}}) to manage application packages, just specified for the `storage-integration` application package. {{</ note >}}

{{< tabs/container "Console" "CLI" "HTTP (REST) API">}}

{{< tabs/tab "Console" >}}

{{< note >}} It's currently only possible to enable/disable storage integration for an application via the Console. To do this for end devices, use the CLI or API option. {{</ note >}}

#### Enable for an Application

Navigate to **Applications** in the top menu and then select your application. On the left side, click **Integrations** and then **Storage Integration**.

Click on **Activate Storage Integration** to enable the storage integration for your application.

{{< figure src="activate-storage-integration.png" alt="Activate Storage Integration screen" >}}

#### Disable for an Application

To disable the integration, you only need to click the **Deactivate Storage Integration** button:

{{< figure src="activated-storage-integration.png" alt="Activated Storage Integration screen" >}}

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

#### Enable for an Application

Set up a default association between the desired application and the `storage-integration` package.

```bash
ttn-lw-cli applications packages default-associations set <application-id> <f_port> --package-name storage-integration
```

{{< note >}} The `f_port` for the default association is set to `100`. This value is irrelevant, i.e. the storage integration will receive and store all uplink messages, regardless of `f_port`. The `f_port` value is only needed because of the way application packages work with {{% tts %}}. {{</ note >}}

{{< warning >}} Do not configure more than one default association for the same application, since that will lead to storing duplicate messages in the persistent storage. {{</ warning >}}

#### Enable for an End Device

Set up an association between the desired end device and the `storage-integration` package.

```bash
ttn-lw-cli applications packages associations set <application-id> <device-id> <f_port> --package-name storage-integration
```

#### Disable for Application

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

#### Disable for End Device

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

{{< /tabs/tab >}}

{{< tabs/tab "HTTP (REST) API" >}}

#### Enable for an Application

###### Details

<div class="fixed-table table-api-item">

| Item         | Value                                                                                                                                                                                                                                                                 |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Endpoint     | [`/api/v3/as/applications/{default.ids.application_ids.application_id}/packages/associations/{default.ids.f_port}`]({{< ref "/api/reference/http/routes/#asapplications{default.ids.application_ids.application_id}packagesassociations{default.ids.f_port}-put" >}}) |
| Request type | `PUT`                                                                                                                                                                                                                                                                 |

</br>
</div>

###### Example

To set an association for the application `my-test-app` on the FPORT `10` on `thethings.example.com`, first create a JSON file named `req.json` in the same folder with the following example contents.

```json
{
  "default": {
    "package_name": "storage-integration"
  },
  "field_mask": {
    "paths": ["package_name"]
  }
}
```

The request using `cURL` is as follows.

```bash
curl -X PUT -H "Content-Type: application/json" -H "Authorization: Bearer $API_KEY" \
-d @./req.json \
 https://thethings.example.com/api/v3/as/applications/my-test-app/packages/associations/10
{"ids":{"application_ids":{"application_id":"my-test-app"},"f_port":10},"created_at":"2024-01-10T10:59:21.398555Z","updated_at":"2024-01-10T10:59:21.398555Z","package_name":"storage-integration"}%
```

#### Enable for an End Device

###### Details

<div class="fixed-table table-api-item">

| Item         | Value                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Endpoint     | [`/api/v3/as/applications/{association.ids.end_device_ids.application_ids.application_id}/devices/{association.ids.end_device_ids.device_id}/packages/associations/{association.ids.f_port}`]({{< ref "/api/reference/http/routes/#asapplications{association.ids.end_device_ids.application_ids.application_id}devices{association.ids.end_device_ids.device_id}packagesassociations{association.ids.f_port}-put" >}}) |
| Request type | `PUT`                                                                                                                                                                                                                                                                                                                                                                                                                   |

</br>
</div>

###### Example

To set an association for the device `my-test-dev` in the application `my-test-app` with FPORT `10` on `thethings.example.com`, first create a JSON file named `req.json` in the same folder with the following example contents.

```json
{
  "association": {
    "package_name": "storage-integration"
  },
  "field_mask": {
    "paths": ["package_name"]
  }
}
```

The request using `cURL` is as follows.

```bash
curl -X PUT -H "Content-Type: application/json" -H "Authorization: Bearer $API_KEY" \
-d @./req.json \
 https://thethings.example.com/api/v3/as/applications/my-test-app/devices/my-test-dev/packages/associations/10
{"ids":{"end_device_ids":{"device_id":"my-test-dev","application_ids":{"application_id":"my-test-app"}},"f_port":10},"created_at":"2024-01-10T11:06:46.806972Z","updated_at":"2024-01-10T11:06:46.806972Z","package_name":"storage-integration"}
```

#### Disable for an Application

###### Details

<div class="fixed-table table-api-item">

| Item         | Value                                                                                                                                                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Endpoint     | [`/api/v3/as/applications/{application_ids.application_id}/packages/associations/{f_port}`]({{< ref "/api/reference/http/routes/#asapplications{application_ids.application_id}packagesassociations{f_port}-delete" >}}) |
| Request type | `DELETE`                                                                                                                                                                                                                 |

</br>
</div>

###### Example

To delete an association the application `my-test-app` with FPORT `10` on `thethings.example.com`, run the following request.

```bash
curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer $API_KEY" \
-d @./req.json \
 https://thethings.example.com/api/v3/as/applications/my-test-app/packages/associations/10
{}
```

#### Disable for an End Device

###### Details

<div class="fixed-table table-api-item">

| Item         | Value                                                                                                                                                                                                                                                                                                                      |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Endpoint     | [`/api/v3/as/applications/{end_device_ids.application_ids.application_id}/devices/{end_device_ids.device_id}/packages/associations/{f_port}`]({{< ref "/api/reference/http/routes/#asapplications{end_device_ids.application_ids.application_id}devices{end_device_ids.device_id}packagesassociations{f_port}-delete" >}}) |
| Request type | `DELETE`                                                                                                                                                                                                                                                                                                                   |

</br>
</div>

###### Example

To delete an association for the device `my-test-device` on the application `my-test-app` with FPORT `10` on `thethings.example.com`, run the following request.

```bash
curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer $API_KEY" \
-d @./req.json \
 https://thethings.example.com/api/v3/as/applications/my-test-app/devices/my-test-device/packages/associations/10
{}
```

{{< /tabs/tab >}}

{{< /tabs/container >}}

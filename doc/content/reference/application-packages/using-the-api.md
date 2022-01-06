---
title: "Managing Application Packages using the API"
description: ""
weight: 2
---

Besides using the CLI, you can also use the [application package HTTP APIs]({{< ref "/reference/api/application_packages" >}}) exposed by {{% tts %}} to interact with the available application packages.

<!--more-->

## Listing the Available Packages

To list the available application packages for the given device `dev1` of the application `app1`:

```bash
curl 'https://eu1.cloud.thethings.network/api/app1/devices/dev1/packages' \
  -X 'GET' \
  -H 'content-type: application/json' \
  -H 'authorization: Bearer NNSXS.XXXXXXXXX' 
```

This gives the result in the JSON format:

```json
{
  "packages": [
    {
      "name": "aws-iot",
      "default_f_port": 198
    },
    {
      "name": "azure-iot-hub",
      "default_f_port": 196
    },
    {
      "name": "lora-cloud-geolocation-v3",
      "default_f_port": 197
    },
    {
      "name": "storage-integration",
      "default_f_port": 200
    },
    {
      "name": "lora-cloud-device-management-v1",
      "default_f_port": 199
    }
  ]
}
```

In the following examples, replace the `test-package` with any of the packages listed above.

## Creating Associations

To create a default association between the application package and the FPort `100` of an application `app1`:

```bash
curl 'https://eu1.cloud.thethings.network/applications/app1/packages/associations/100' \
  -X 'PUT' \
  -H 'content-type: application/json' \
  -H 'authorization: Bearer NNSXS.XXXXXXXXX' \
  --data-raw '{"default":{"package_name":"test-package","field_mask":{"paths":["package_name"]}}}'
```

The default association will associate the application package with all devices within a given application.

<details><summary>Output</summary>

```json
{
  "ids": {
    "application_ids": {
      "application_id": "app1"
    },
    "f_port": 100
  },
  "created_at": "2021-12-30T10:26:31.302076317Z",
  "updated_at": "2021-12-30T10:26:31.302076317Z"
}
```
</details>

To create an association between the application package and the FPort `100` of a device `dev1` of an application `app1`:

```bash
curl 'https://eu1.cloud.thethings.network/applications/app1/devices/dev1/packages/associations/100' \
  -X 'PUT' \
  -H 'content-type: application/json' \
  -H 'authorization: Bearer XXXXXXXXX' \
  --data-raw '{"association":{"package_name":"test-package","field_mask":{"paths":["package_name"]}}}'
```

This will associate the application package with a single device within a given application.

<details><summary>Output</summary>

```json
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
  "created_at": "2021-12-30T10:55:09.496854413Z",
  "updated_at": "2021-12-30T10:55:09.496854413Z"
}
```
</details>

## Listing Associations

To list all default associations associated with an application `app1`:

```bash
curl 'https://eu1.cloud.thethings.network/api/v3/as/applications/app1/packages/associations' \
  -X 'GET' \
  -H 'content-type: application/json' \
  -H 'authorization: Bearer XXXXXXXXX'
```

<details><summary>Output</summary>

```json
{
  "defaults": [
    {
      "ids": {
        "application_ids": {
          "application_id": "app1"
        },
        "f_port": 100
      },
      "created_at": "2021-12-30T10:26:31.302076317Z",
      "updated_at": "2021-12-30T10:26:31.302076317Z",
      "package_name": "test-package"
    },
    {
      "ids": {
        "application_ids": {
          "application_id": "app1"
        },
        "f_port": 199
      },
      "created_at": "2021-07-08T12:30:41.725276723Z",
      "updated_at": "2021-10-07T08:40:08.559179797Z",
      "package_name": "lora-cloud-device-management-v1"
    }
  ]
}
```
</details>

To list all associations associated with a device `dev1` of an application `app1`:

```bash
curl 'https://eu1.cloud.thethings.network/api/v3/as/applications/app1/devices/dev1/packages/associations' \
  -X 'GET' \
  -H 'content-type: application/json' \
  -H 'authorization: Bearer XXXXXXXXX'
```

<details><summary>Output</summary>

```json
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
        "f_port": 200
      },
      "created_at": "2021-12-30T10:55:09.496854413Z",
      "updated_at": "2021-12-30T10:55:09.496854413Z"
    }
  ]
}
```
</details>

## Retrieving Associations

To retrieve a default association associated with an FPort `100` of an application `app1`:

```bash
curl 'https://eu1.cloud.thethings.network/api/v3/as/applications/app1/packages/associations/100' \
  -X 'GET' \
  -H 'content-type: application/json' \
  -H 'authorization: Bearer XXXXXXXXX'
```

<details><summary>Output</summary>

```json
{
  "ids": {
    "application_ids": {
      "application_id": "app1"
    },
    "f_port": 100
  },
  "created_at": "2021-12-30T10:26:31.302076317Z",
  "updated_at": "2021-12-30T10:26:31.302076317Z"
}
```
</details>

To retrieve an association associated with an FPort `100` of a device `dev1` of an application `app1`:

```bash
curl 'https://eu1.cloud.thethings.network/api/v3/as/applications/app1/devices/dev1/packages/associations/100' \
  -X 'GET' \
  -H 'content-type: application/json' \
  -H 'authorization: Bearer XXXXXXXXX'
```

<details><summary>Output</summary>

```json
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
  "created_at": "2021-12-30T10:55:09.496854413Z",
  "updated_at": "2021-12-30T10:55:09.496854413Z"
}
```
</details>

### Deleting Associations

To delete a default association associated with an FPort `100` of a given application `app1`:

```bash
curl 'https://eu1.cloud.thethings.network/api/v3/as/applications/app1/packages/associations/100' \
-X 'DELETE' \
-H 'content-type: application/json' \
-H 'authorization: Bearer NNSXS.XXXXXXXXX'
```

To delete an association associated with an FPort `100` of a device `dev1` of an application `app1`:

```bash
curl 'https://eu1.cloud.thethings.network/api/v3/as/applications/app1/devices/dev1/packages/associations/100' \
-X 'DELETE' \
-H 'content-type: application/json' \
-H 'authorization: Bearer NNSXS.XXXXXXXXX'
```
---
title: "Fields and Field Masks"
description: ""
weight: -1
---

## Field Masks

{{% tts %}} APIs use field masks to specify a subset of fields that should be returned by a reading request, or to specify fields that should be updated in a writing request. API request messages which contain a `field_mask` field operate this way - for example, [`GetEndDeviceRequest`]({{< ref "reference/api/end_device#message:GetEndDeviceRequest" >}}), or [`UpdateApplicationRequest`]({{< ref "reference/api/application#message:UpdateApplicationRequest" >}}), and most `Get`, `List`, `Set`, and `Update` requests. By default, these API requests will not return or update most fields, unless they are specified in a field mask.

The following fields are always returned:

- Fields containing `id`
- `created_at`
- `updated_at`
- `deleted_at`

All other fields are **not returned** and **not updated**, unless specified. Fields that are empty or zero are not returned, even if they are specified in a field mask.

{{< note >}}
For more information, see Google's [Protocol Buffers reference](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask). Note that Google's Protocol Buffers return **all** available fields if no field mask is specified, but {{% tts %}} API does **not** work this way, and no fields except the above mentioned are returned if no field mask is specified.
{{</ note >}}

## Fields and Field Masks in HTTP Queries

### `GET` Requests

Fields may be specified in HTTP `GET` requests by appending them as query string parameters. For example, to request the `name`, `description`, and `locations` of devices in an [`EndDeviceRegistry.Get`]({{< ref "reference/api/end_device#the-enddeviceregistry-service" >}}) request, add these fields to the `field_mask` field. To get this data for device `dev1` in application `app1`:

```bash
$ curl --location --header "Authorization: Bearer NNSXS.XXXXXXXXX" "https://thethings.example.com/api/v3/applications/app1/devices/dev1?field_mask=name,description,locations"
```

This will return the following:

 <details><summary>Show JSON API response</summary>

```
{
   "ids":{
      "device_id":"dev1",
      "application_ids":{
         "application_id":"app1"
      },
      "dev_eui":"0000000000000000",
      "join_eui":"0000000000000000"
   },
   "created_at":"2020-07-31T12:17:51.645Z",
   "updated_at":"2021-07-20T14:14:56.318Z",
   "name":"device-name",
   "description":"device-description",
   "locations":{
      "user":{
         "latitude":52.51622086393074,
         "longitude":13.39075966780985,
         "source":"SOURCE_REGISTRY"
      }
   }
}
```
</details>

Without the field masks specified, this request would not return the `name`, `description`, and `locations` fields:

<details><summary>Show JSON API response</summary>

```
{
   "ids":{
      "device_id":"ben-things-uno",
      "application_ids":{
         "application_id":"tti-playground"
      },
      "dev_eui":"0004A30B001C35EC",
      "join_eui":"1234567891234567"
   },
   "created_at":"2020-07-31T12:17:51.645Z",
   "updated_at":"2020-07-31T12:17:51.645Z"
}
```
</details>

### `PUT` Requests

`PUT` requests can be used to update entities by supplying the object as JSON data. To update fields, the field mask must also be specified in the JSON object (query parameters do not work for `PUT` requests). The field mask has the following format:

```
{
  "field_mask": {
      "paths": [
        "ids.device_id",
        "name",
        "description"
      ]
    }
}
```

Where `ids.device_id`, `name`, and `description` are fields to be updated.

For example, to update the `name` field of device `dev1` in application `app1`with an [`EndDeviceRegistry.Update`]({{< ref "reference/api/end_device#the-enddeviceregistry-service" >}}) request:

```bash
$ curl --location \
  --header 'Authorization: Bearer NNSXS.XXXXXXXXX' \
  --header 'Content-Type: application/json' \
  --request PUT \
  --data-raw '{
   "end_device":{
      "name":"device-name",
      "description":"device-description"
   },
    "field_mask": {
      "paths": [
        "name"
      ]
    }
  }' \
  'https://thethings.example.com/api/v3/applications/app1/devices/dev1'
```

This request will update the `name` field of the device, but will not update the `description` field because it is not specified in the `field_mask` object. The following will be returned as confirmation:

<details><summary>Show JSON API response</summary>

```
{
   "ids":{
      "device_id":"dev1",
      "application_ids":{
         "application_id":"app1"
      },
      "dev_eui":"0000000000000000",
      "join_eui":"0000000000000000"
   },
   "created_at":"2020-07-31T12:17:51.645Z",
   "updated_at":"2021-07-20T15:04:26.339Z",
   "name":"device-name"
}
```
</details>

To update both the `name` and `description` fields, the following request could be made:

```bash
curl --location \
  --header 'Authorization: Bearer NNSXS.XXXXXXXXX' \
  --header 'Content-Type: application/json' \
  --request PUT \
  --data-raw '{
   "end_device":{
      "name":"device-name",
      "description":"device-description"
   },
    "field_mask": {
      "paths": [
        "name",
        "description",
      ]
    }
  }' \
  'https://thethings.example.com/api/v3/applications/app1/devices/dev1'
```

This would return the following confirmation:

<details><summary>Show JSON API response</summary>

```bash
{
   "ids":{
      "device_id":"dev1",
      "application_ids":{
         "application_id":"app1"
      },
      "dev_eui":"0000000000000000",
      "join_eui":"0000000000000000"
   },
   "created_at":"2020-07-31T12:17:51.645Z",
   "updated_at":"2021-07-20T15:04:26.339Z",
   "name":"device-name",
   "description": "device-description",
}
```
</details>

### `POST` Requests

Some endpoints require a message to be sent as part of the request. For example, to request an [Event Stream]({{< ref "reference/api/events#the-event-service" >}}), you must `POST` a [StreamEventsRequest message]({{< ref "reference/api/events#message:StreamEventsRequest" >}}):

```bash
$ curl --location \
  --header 'Authorization: Bearer NNSXS.XXXXXXXXX' \
  --header 'Content-Type: application/json' \
  --request POST \
  --data-raw '{
    "identifiers":[{
        "device_ids":{
            "device_id":"dev1",
            "application_ids":{"application_id":"app1"}
        }
    }]
  }' \
  'https://thethings.example.com/api/v3/events'
```

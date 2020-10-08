---
title: "Fields and Field Masks"
description: ""
weight: -1
---

## Field Masks

{{% tts %}} APIs use field masks to specify a subset of fields that should be returned by a reading request, or to specify fields that should be updated in a writing request. See Google's [Protocol Buffers reference](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask) for more information about field masks.

## Fields and Field Masks in HTTP Queries

Fields may be specified in HTTP requests by appending them as query string parameters. For example, to request the `name`, `description`, and `locations` of devices in an `EndDeviceRegistry.Get` request, add these fields to the `field_mask` field. To get this data for device `dev1` in application `app1`:

```bash
$ curl --location --header "Authorization: Bearer NNSXS.XXXXXXXXX" https://thethings.example.com/api/v3/applications/app1/devices/dev1?field_mask=name,description,locations
```

### POST Requests

Some endpoints require a message to be sent as part of the request. For example, to request an [Event Stream]({{< ref "reference/api/events#the-event-service" >}}), you must `POST` a [StreamEventsRequest message]({{< ref "reference/api/events#message:StreamEventsRequest" >}}):

```bash
$ curl --location \
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

> Fields that are empty or zero are not returned in requests, even if they are specified in a field mask. 

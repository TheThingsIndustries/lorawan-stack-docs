---
title: "API"
description: ""
---

This is the reference for the gRPC and HTTP APIs that {{% tts %}} exposes.

<!--more-->

{{< note >}} {{% tts %}} API is different from {{% ttnv2 %}} API. If migrating from V2, see [here]({{< ref "getting-started/migrating/migrating-from-v2/major-changes" >}}) for an overview of changes. {{</ note >}}

## HTTP Queries

### Field Masks

{{% tts %}} APIs use field masks to specify a subset of fields that should be returned by a reading request, or to specify fields that should be updated in a writing request. See the [Field Masks section]({{< relref "field-mask" >}}) to learn how they control which fields are returned in API requests.

Fields may be specified in HTTP requests by appending them as query string parameters. For example, to request the `name`, `description`, and `locations` of devices in an `EndDeviceRegistry.Get` request, add these fields to the `field_mask` field. To get this data for device `dev1` in application `app1`:

```bash
curl -i -H "Authorization: Bearer NNSXS.XXXXXXXXX" https://thethings.example.com/api/v3/applications/app1/devices/dev1?field_mask=name,description,locations
```

The `thethings.example.com` URL needs to be replaced with the address of your {{% tts %}} instance. See [Server Addresses]({{< ref "getting-started/server-addresses" >}}) for a list of URLs for all deployments.

### Optional Fields

Identifiers specified in the request URL do not need to be specified again in the message body. For example, [`GetEndDeviceRequest`](reference/api/end_device/#message:GetEndDeviceRequest) has an `end_device_ids` field and a `field_mask` field which are not required in the message body if they are specified in the URL. From the above example: `https://thethings.example.com/api/v3/applications/app1/devices/dev1?field_mask=name,description,locations` requests device `dev1` in application `app1` and so no message body is required. These message body fields are only used in gRPC requests.

{{< note >}} Fields that are empty or zero are not returned in requests, even if they are specified in a field mask. {{</ note >}}

If you are having trouble with the HTTP API, you can always inspect requests in the Console using your browser's inspector. All of the data displayed in the Console is pulled using HTTP API requests, and this should give you some insight in to how they are formed.

## Examples and Troubleshooting

Examples, fixes for common errors and answers to FAQ are provided in the [Using the API]({{< ref "getting-started/api" >}}) Getting Started section.
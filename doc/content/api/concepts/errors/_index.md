---
title: "Errors"
description: ""
weight: 4
---

{{% tts %}} APIs return rich errors and error codes to indicate failure of API requests.

<!--more-->

This guide describes errors for HTTP (REST) API calls. For other APIs (ex: gRPC), check the individual sections.

For HTTP (REST) API, conventional HTTP response codes are returned along with an error body.

- `2xx` range: success.
- `4xx` range: client/request errors.
- `5xx` range: errors with {{% tts %}} servers. Such errors are quite rare and require you contact the administrator if persistent.

## Error Details

4xx response messages contain a body with a JSON object that explains the error.

```json
{
  "code": 7,
  "message": "error:pkg/auth/rights:no_user_rights (no rights for user `admin@thethings`)",
  "details": [
    {
      "@type": "type.googleapis.com/ttn.lorawan.v3.ErrorDetails",
      "namespace": "pkg/auth/rights",
      "name": "no_user_rights",
      "message_format": "no rights for user `{uid}`",
      "attributes": { "uid": "admin@thethings" },
      "correlation_id": "7d4a76e4b2074fdfbb6d0fac81d8647c",
      "code": 7
    }
  ]
}
```

Fields of the JSON message are described below.

- `code`: The [gRPC status code](https://grpc.github.io/grpc/core/md_doc_statuscodes.html) for the error. This field can be ignore for HTTP APIs.
- `message`: The actual error in a human readable format.
- `details`:
  - `@type`: This is the type of this JSON object. `ttn.lorawan.v3.ErrorDetails` is the common type for all returned error messages.
  - `namespace`: Indicates {{% tts %}} component or sub-section that handles this requests.
  - `name`: Error name which is a lowercase string with underscores.
  - `attributes`: Optional error attributes.
  - `correlation_id`: ID used to correlate or trace this RPC through {{% tts %}}

{{< note "Mind the `X-Warning` headers. {{% tts %}} sends responses containing this header to warn about issues that may become errors in the future." />}}

## Rate limiting

API request may be subject to [rate limits]({{< ref "/enterprise/management/rate-limiting" >}}).

When the rate limit is reached, the server returns a `429 Too Many Requests` response.

The message body contains information on the rate set by the server for the resource.

```json
{
  "code": 8,
  "message": "error:pkg/ratelimit:rate_limit_exceeded (rate limit of `1` accesses per minute exceeded for resource `<resource>`)",
  "details": [
    {
      "@type": "type.googleapis.com/ttn.lorawan.v3.ErrorDetails",
      "namespace": "pkg/ratelimit",
      "name": "rate_limit_exceeded",
      "message_format": "rate limit of `{rate}` accesses per minute exceeded for resource `{key}`",
      "attributes": {
        "key": "<resource>",
        "rate": 1
      },
      "correlation_id": "b4fe57e685fc4dc9ab63a5572ffe05bf",
      "code": 8
    }
  ]
}
```

{{< note "Clients must respect `X-Ratelimit-*` response Headers. {{% tts %}} sends responses containing information about how many requests your integration has made and how many are remaining, in accordance with the IETF draft spec [here](https://tools.ietf.org/id/draft-polli-ratelimit-headers-03.html)." />}}

---
title: "Instantiation"
description: ""
weight: 3
---

The process through which a webhook template becomes a webhook integration is called instantiation. Instantiation is done by the Console after the user has filled in the values of the the template fields. This page describes how the template and the values are combined into the final webhook instance.

<!--more-->

## Instantiation of Fields

Here is an example of instantiating webhook template fields:

```yaml
fields:
- id: token
  name: Authentication token
  description: The token used for authentication
  secret: true
  default-value:
- id: username
  name: Username
  description: The username used on the service
  secret: false
  default-value:
- id: create
  name: Create device
  description: If set to true, the device will automatically be created on the first uplink
  secret: false
  default-value: "true"
```

Instantiation of header values, URLs and paths will be explained below using this example.

If the webhook template is to be defined without fields, define the `fields` as follows:

```yaml
fields: []
```

or

```yaml
fields:
```

## Instantiation of Header Values

The fields are directly replaced in the values of the headers using the syntax `{field-id}`. Consider the fragment of a webhook template presented above - the headers to be sent to the endpoint can be defined, using the available template fields, for example as:

```yaml
headers:
- Authorization: Bearer {token}
```

If the user has filled in the value of `token` with `Zpdc7jWMvYzVTeNQ`, then the resulting webhook will contain a header named `Authorization` with the value `Bearer Zpdc7jWMvYzVTeNQ`.

Keep in mind that if you need to use a field directly as header value, you should wrap it with hyphens as follows:

```yaml
headers:
- Authorization: "{token}"
```

If the webhook template is to be defined without header entries, define the `headers` field as follows:

```yaml
headers: {}
```

or

```yaml
headers:
```

## Instantiation of URLs and Paths

The fields are replaced inside the URLs and the paths according to the [RFC6570](https://tools.ietf.org/html/rfc6570) format. Consider the fragment of a webhook template shown above - the base URL and paths of the endpoint can be defined, using the available template fields, for example as:

```yaml
baseurl: https://www.example.com/lora{/username}
paths:
- uplink-message: /uplink{?create}
```

If the user has filled in the value of `username` with `user1` and the value of `create` with `true`, then the resulting webhook will have its base URL set to `https://www.example.com/lora/user1` and the uplink messages will be sent to `https://www.example.com/lora/user1?create=true` (the uplink messages path will be set to `/uplink?create=true`).

## Instantiation of Field Mask {{< new-in-version "3.21.1" >}}

The fields that are sent in the webhook uplink message can be filtered. Field paths not specified in `field-mask` will not be present in the uplink message. Field paths are provided as a list, for example as:

```yaml
field-mask:
  - received_at
  - up.uplink_message
  - up.service_data
```

When there are no paths in the field mask or there is no `field-mask` in the template all the fields are sent in the uplink message.

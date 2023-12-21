---
title: "Using the API"
description: ""
aliases: [/getting-started/api]
weight: -1
---

While we recommend using the [Console]({{< ref "/the-things-stack/interact/console" >}}) or [CLI]({{< ref "the-things-stack/interact/cli" >}}) to manage your applications and devices in {{% tts %}}, we also expose HTTP and gRPC APIs which you can interact directly with. This section contains information about using the HTTP API, and examples.

<!--more-->

A complete list of API endpoints is available in the [API Reference]({{< ref "reference/api" >}}). There, you can also find detailed information about [Authentication]({{< ref "reference/api/authentication" >}}) and [Field Masks]({{< ref "reference/api/field-mask" >}}).

{{< warning >}} If you are not getting the fields you expect in API responses, see the [Field Masks]({{< relref "field-mask" >}}) reference.
{{</ warning >}}

If you are having trouble with the HTTP API, you can always inspect requests in the Console using your browser's inspector. All of the data displayed in the Console is pulled using HTTP API requests, and this should give you some insight in to how they are formed.

## Best Practices

### Send a `User-Agent` Header

Set the `User-Agent` HTTP header containing your integration name and version. That way, a network operator can help finding out potential issues using the logs.

### Respect `X-Ratelimit-*` Response Headers

{{% tts %}} sends responses containing information about how many requests your integration has made and how many are remaining, in accordance with the IETF draft spec [here](https://tools.ietf.org/id/draft-polli-ratelimit-headers-03.html).

### Mind the `X-Warning` Headers

{{% tts %}} sends responses containing this header to warn about issues that may become errors in the future.

## HTTP Query Examples

### Get Device Info

Fields may be specified in HTTP requests by appending them as query string parameters. For example, to request the `name`, `description`, and `locations` of devices in an `EndDeviceRegistry.Get` request, add these fields to the `field_mask` field. To get this data for device `dev1` in application `app1`:

```bash
curl --location \
  --header "Authorization: Bearer NNSXS.XXXXXXXXX" \
  --header 'Accept: application/json' \
  --header 'User-Agent: my-integration/my-integration-version' \
  'https://thethings.example.com/api/v3/applications/app1/devices/dev1?field_mask=name,description,locations'
```

The same request in tenant `tenant1` on a multi-tenant deployment:

```bash
curl --location \
  --header "Authorization: Bearer NNSXS.XXXXXXXXX" \
  --header 'Accept: application/json' \
  --header 'User-Agent: my-integration/my-integration-version' \
  'https://tenant1.thethings.example.com/api/v3/applications/app1/devices/dev1?field_mask=name,description,locations'
```

Fields may also be specified as a JSON object in a POST request.

### Get Event Stream

To get a stream of events for device `dev1` in application `app1` :

```bash
curl --location \
  --header 'Authorization: Bearer NNSXS.XXXXXXXXX' \
  --header 'Accept: text/event-stream' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: my-integration/my-integration-version' \
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

See [here](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events) a description of the `text/event-stream` MIME type.

### Schedule Downlink

To schedule a downlink, you may use the `DownlinkQueuePush` or `DownlinkQueueReplace` endpoints of the [Application Server API]({{< ref "reference/api/application_server#the-appas-service" >}}). For example, to schedule a downlink queue push to device `dev1` in application `app1`:

```bash
curl --location \
  --header 'Authorization: Bearer NNSXS.XXXXXXXXX' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: my-integration/my-integration-version' \
  --request POST \
  --data '{
    "downlinks": [{
      "frm_payload": "vu8=",
      "f_port": 42,
    }]
  }' \
  'https://thethings.example.com/api/v3/as/applications/app1/devices/dev1/down/push'
```

To schedule a human readable downlink to the same device using a downlink [Payload Formatter]({{< ref "integrations/payload-formatters" >}}):

```bash
curl --location \
  --header 'Authorization: Bearer NNSXS.XXXXXXXXX' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: my-integration/my-integration-version' \
  --request POST \
  --data '{"downlinks":[{
      "decoded_payload": {
        "bytes": [1, 2, 3]
      }
    }]
  }' \
  'https://thethings.example.com/api/v3/as/applications/app1/devices/dev1/down/push'
```

Please note that downlinks scheduled using the `decoded_payload` Payload Formatter field are encrypted in the Application Server, and the content will not be comprehensible in the Network Server's `frm_payload` field when viewing events.

It is also possible to [schedule downlinks using HTTP Webhooks]({{< ref "integrations/webhooks/scheduling-downlinks" >}}), which give you flexibility to choose JSON or gRPC HTTP payloads.

### Multi-step Actions

If you want to create a device, perform multi-step actions, or write shell scripts, it's best to use the [CLI]({{< ref "the-things-stack/interact/cli" >}}).

If you want to do something like registering a device directly via the API, you need to make calls to the Identity Server, Join Server, Network Server and Application Server. See the [API Reference]({{< ref "reference/api/end_device" >}}) for detailed information about which messages go to which endpoints.

{{< tabs/container "OTAA" "ABP" >}}

{{< tabs/tab "OTAA" >}}

To register a device `newdev1` in application `app1`, first, register the `DevEUI`, `JoinEUI` and cluster addresses in the Identity Server. This is also where you register a friendly name, description, attributes, location, and more - see all fields in the [API Reference]({{< ref "reference/api" >}}):

```bash
curl --location \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer NNSXS.XXXXXXXXX' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: my-integration/my-integration-version' \
  --request POST \
  --data-raw '{
    "end_device": {
      "ids": {
        "device_id": "newdev1",
        "dev_eui": "XXXXXXXXXXXXXXXX",
        "join_eui": "XXXXXXXXXXXXXXXX"
      },
      "join_server_address": "thethings.example.com",
      "network_server_address": "thethings.example.com",
      "application_server_address": "thethings.example.com"
    },
    "field_mask": {
      "paths": [
        "join_server_address",
        "network_server_address",
        "application_server_address",
        "ids.dev_eui",
        "ids.join_eui"
      ]
    }
  }' \
  'https://thethings.example.com/api/v3/applications/app1/devices'
```

Next, you need to register the `DevEUI`, `JoinEUI`, cluster addresses and keys in the Join Server:

```bash
curl --location \
  --header 'Authorization: Bearer NNSXS.XXXXXXXXX' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: my-integration/my-integration-version' \
  --request PUT \
  --data-raw '{
    "end_device": {
      "ids": {
        "device_id": "newdev1",
        "dev_eui": "XXXXXXXXXXXXXXXX",
        "join_eui": "XXXXXXXXXXXXXXXX"
      },
      "network_server_address": "thethings.example.com",
      "application_server_address": "thethings.example.com",
      "root_keys": {
        "app_key": {
          "key": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        }
      }
    },
    "field_mask": {
      "paths": [
        "network_server_address",
        "application_server_address",
        "ids.device_id",
        "ids.dev_eui",
        "ids.join_eui",
        "root_keys.app_key.key"
      ]
    }
  }' \
  'https://thethings.example.com/api/v3/js/applications/app1/devices/newdev1'
```

Register LoRaWAN® settings in the Network Server:

```bash
curl --location \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer NNSXS.XXXXXXXXX' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: my-integration/my-integration-version' \
  --request PUT \
  --data-raw '{
    "end_device": {
      "supports_join": true,
      "lorawan_version": "1.0.2",
      "ids": {
        "device_id": "newdev1",
        "dev_eui": "XXXXXXXXXXXXXXXX",
        "join_eui": "XXXXXXXXXXXXXXXX"
      },
      "lorawan_phy_version": "1.0.2-b",
      "frequency_plan_id": "EU_863_870_TTN"
    },
    "field_mask": {
      "paths": [
        "supports_join",
        "lorawan_version",
        "ids.device_id",
        "ids.dev_eui",
        "ids.join_eui",
        "lorawan_phy_version",
        "frequency_plan_id"
      ]
    }
  }' \
  'https://thethings.example.com/api/v3/ns/applications/app1/devices/newdev1'
```

Register the `DevEUI` and `JoinEUI` in the Application Server:

```bash
curl --location \
  --header 'Authorization: Bearer NNSXS.XXXXXXXXX' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: my-integration/my-integration-version' \
  --request PUT \
  --data-raw '{
    "end_device": {
      "ids": {
        "device_id": "newdev1",
        "dev_eui": "XXXXXXXXXXXXXXXX",
        "join_eui": "XXXXXXXXXXXXXXXX"
      }
    },
    "field_mask": {
      "paths": [
        "ids.device_id",
        "ids.dev_eui",
        "ids.join_eui"
      ]
    }
  }' \
  'https://thethings.example.com/api/v3/as/applications/app1/devices/newdev1'
```

{{< /tabs/tab >}}

{{< tabs/tab "ABP" >}}

To register a device `newdev1` in application `app1`, first, register the `DevEUI` and cluster addresses in the Identity Server. This is also where you register a friendly name, description, attributes, location, and more - see all fields in the [API Reference]({{< ref "reference/api" >}}):

```bash
curl --location \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer NNSXS.XXXXXXXXX' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: my-integration/my-integration-version' \
  --request POST \
  --data-raw '{
    "end_device": {
      "ids": {
        "device_id": "newdev1",
        "dev_eui": "XXXXXXXXXXXXXXXX"
      },
      "network_server_address": "thethings.example.com",
      "application_server_address": "thethings.example.com"
    },
    "field_mask": {
      "paths": [
        "network_server_address",
        "application_server_address",
        "ids.dev_eui"
      ]
    }
  }' \
  'https://thethings.example.com/api/v3/applications/app1/devices'
```

Register LoRaWAN settings in the Network Server:

```bash
curl --location \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer NNSXS.XXXXXXXXX' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: my-integration/my-integration-version' \
  --request PUT \
  --data-raw '{
    "end_device": {
      "supports_join": false,
      "lorawan_version": "1.0.2",
      "ids": {
        "device_id": "newdev1",
        "dev_eui": "XXXXXXXXXXXXXXXX"
      },
      "session": {
        "keys": {
          "f_nwk_s_int_key": {
            "key": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
          }
        },
        "dev_addr": "XXXXXXXX"
      },
      "mac_settings": {
        "resets_f_cnt": true,
        "factory_preset_frequencies": [
          "868100000",
          "868300000",
          "868500000",
          "867100000",
          "867300000",
          "867500000",
          "867700000",
          "867900000"
        ]
      },
      "resets_f_cnt": false,
      "lorawan_phy_version": "1.0.2-b",
      "frequency_plan_id": "EU_863_870_TTN"
    },
    "field_mask": {
      "paths": [
        "supports_join",
        "lorawan_version",
        "ids.device_id",
        "ids.dev_eui",
        "session.keys.f_nwk_s_int_key.key",
        "session.dev_addr",
        "mac_settings.resets_f_cnt",
        "mac_settings.factory_preset_frequencies",
        "lorawan_phy_version",
        "frequency_plan_id"
      ]
    }
  }' \
  'https://thethings.example.com/api/v3/ns/applications/app1/devices/newdev1'
```

Register the `DevEUI` in the Application Server:

```bash
curl --location \
  --header 'Authorization: Bearer NNSXS.XXXXXXXXX' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: my-integration/my-integration-version' \
  --request PUT \
  --data-raw '{
    "end_device": {
      "ids": {
        "device_id": "newdev1",
        "dev_eui": "XXXXXXXXXXXXXXXX"
      },
      "session": {
        "keys": {
          "app_s_key": {
            "key": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
          }
        },
        "dev_addr": "XXXXXXXX"
      },
      "skip_payload_crypto": false
    },
    "field_mask": {
      "paths": [
        "ids.device_id",
        "ids.dev_eui",
        "session.keys.app_s_key.key",
        "session.dev_addr",
        "skip_payload_crypto"
      ]
    }
  }' \
  'https://thethings.example.com/api/v3/as/applications/app1/devices/newdev1'
```

{{< /tabs/tab >}}

{{< /tabs/container >}}

### Register a Gateway

To register a gateway `gtw1` using the `GatewayRegistry.Create` request:

```bash
curl --location \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer NNSXS.XXXXXXXXX' \
  --header 'Content-Type: application/json' \
  --request POST \
  --data-raw '{
    "gateway": {
      "ids": {
        "gateway_id": "gtw1",
        "eui": "XXXXXXXXXXXXXXXX"
      },
      "name": "my gateway",
      "gateway_server_address": "thethings.example.com",
      "frequency_plan_id": "EU_863_870_TTN"
    }
  }' \
  'https://thethings.example.com/api/v3/users/user1/gateways'
```

See [here]({{< ref "/reference/api/gateway" >}}) for more info about gateway APIs.

### Purge Entities

An admin user can [purge entities]({{< ref "/the-things-stack/management/purge" >}}) such as [applications]({{< ref "/reference/api/application" >}}), [clients]({{< ref "/reference/api/client" >}}), [gateways]({{< ref "/reference/api/gateway" >}}), [organizations]({{< ref "/reference/api/organization" >}}) or [users]({{< ref "/reference/api/user" >}}).

For example, to purge the application `app1`:

```bash
curl --location \
  --header "Authorization: Bearer NNSXS.XXXXXXXXX" \
  --request DELETE \
  'https://thethings.example.com/api/v3/applications/app1/purge'
```

## API Usage Troubleshooting

This section provides help for common issues and frequently asked questions you may have when using the API.

### "Forbidden path(s) in field mask" error

This error usually occurs when wrong path(s) are specified in the `field_mask` object in the API request body. See [Fields and Field Masks]({{< ref "/reference/api/field-mask" >}}) section and make sure that paths listed under your `field_mask` are correct.

### When adding a device, I get an "invalid end_device: embedded message failed validation" error.

The most common cause for this error is not following the regex pattern in the `device_id` field. See [End Device APIs]({{< ref "/reference/api/end_device#message:EndDeviceIdentifiers" >}}) section and make sure your `device_id` is in line with the defined regex pattern. See also [ID and EUI constaints]({{< ref "/reference/id-eui-constraints" >}}) documentation.

### Listing gateways via API call works for the eu1 {{% tts %}} Cloud cluster, but won't work for the nam1 cluster.

Unlike other server components, the Identity Server component of {{% tts %}} is hosted only in the `eu1` cluster for [{{% tts %}} Cloud]({{< ref "/the-things-stack/cloud/addresses#api-endpoints" >}}) and [{{% ttss %}}]({{< ref "/reference/ttn/addresses#api-endpoints" >}}). This is the reason why Identity Server API request to any cluster other than `eu1` will fail.

### "426 Upgrade Required" error

This error indicates that the client HTTP protocol version is old, so the server refuses to perform the request and requires a client update to HTTP 1.1 version or higher.

### "No_application_rights" or "No_user_rights" error

The API key you are using doesn't have sufficient rights to perform the desired API request. It might also be caused by a missing `Bearer` keyword in the `Authorization` header used in the API call.

To resolve this issue, make sure your API key has necessary rights to interact with the desired entity. Also, make sure to use the `Bearer` keyword when specifying the `Authorization` header.

### "Api_key_not_found" error

This error indicates that the specified API key used for the API call is not valid or doesn't exist at all. Double-check that the API key you provided is correct and still valid. If it is expired, you can generate a new API key and update your API call request with the new one.

### "Unauthenticated" error

This error occurs when the API request is made without proper authentication credentials. Make sure to include the correct API key in the authentication request header.

### "URL using bad/illegal format or missing URL" error

The URL format in the API call command is incorrect or missing. Please make sure that the URL syntax is correct, that it includes all necessary parameters and that the specified endpoint is properly configured.

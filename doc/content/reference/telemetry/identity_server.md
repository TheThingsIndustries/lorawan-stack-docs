---
title: "Identity Server Telemetry"
description: "Telemetry data collection by The Things Stack's Identity Server"
aliases: "/telemetry/identity-server"
---

## Configuring Telemetry Collection

Telemetry collection is **enabled** by default for **{{% tts %}} Open Source** distribution.

In order to disable it, set `telemetry.enable` to `false` in the [{{% tts %}} configuration]({{< ref "reference/configuration" >}}):

```yaml
telemetry:
  enable: false
```

Telemetry collection is **disabled** by default for **{{% tts %}} Enterprise** distributions.

## Initialization

When the Identity Server starts the background task responsible for collecting and sending telemetry data, it generates the UID which is attached to every telemetry message that is sent.
UID is the SHA512 hash of `console.ui[IS,GS,NS,AS,JS].BaseURL` values.

{{< note >}}
If you want the telemetry collector to use a different list of elements, there is an option to set your own list of values used in the SHA512 hash creation. Edit [{{% tts %}}'s configuration]({{< ref "reference/configuration" >}}) and set `telemetry.uid-elements` to a list of string values of your choice.

```yaml
# Example
telemetry:
  uid-elements: ["foo", "bar"]
```

{{</ note >}}

## Telemetry Data Types

Below is a JSON object with an example of a full telemetry data message that is sent from the Identity Server:

```json
{
  "message": {
    "uid": "m64Jv5T3Bqnxz3tSgOAYD0w25UqWwP5DgIsuKbS0g5dBQkA8ZEHwlV1iDoKgjeF7uE3dt+3SDMdANJ41xDZqag==",
    "os": {
      "operating_system": "linux",
      "arch": "amd64",
      "binary_version": "3.27.0-dev",
      "golang_version": " go1.20.7"
    },
    "cli": null,
    "entities_count": {
      "gateways": {
        "total": 0,
        "gateways_by_frequency_plan_id": {
          "US_902_928_FSB_1": 1,
          "US_902_928_FSB_2": 1
        }
      },
      "end_devices": {
        "total": 0,
        "activate_end_devices": {
          "total": 0,
          "last_day": 0,
          "last_week": 0,
          "last_month": 0
        }
      },
      "applications": {
        "total": 0
      },
      "accounts": {
        "users": {
          "standard": 0,
          "admin": 1
        },
        "organizations": {
          "total": 0
        }
      }
    }
  }
}
```

One such data object is sent every 24 hours. The purpose of each of these fields is listed below.

- `uid`: identifier which is built from the base64 encoding of URLs set in the configuration
- `os`: basic information about the operating system of the machine which executed the CLI
- `entities_count`: data regarding the amount of each entity and its possible states, e.g. the amount of active end devices in the last 24 hours, the amount of gateways per frequency plan ID, the total amount of organizations, etc

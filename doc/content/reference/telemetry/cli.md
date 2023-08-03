---
title: "CLI Telemetry"
description: "Telemetry data collection by The Things Stack' CLI"
aliases: "/telemetry/cli"
---

## User's Identification

When the CLI starts for the first time on a new machine or upon clearing the system cache, it creates a file on the system's cache folder with the following data:

```yaml
uid: 00000000-0000-0000-0000-000000000000
last_sent: 2023-08-02T16:45:53.742417-03:00
```

The `uid` value is an UUID generated according to the specifications made on [RFC 4122](https://datatracker.ietf.org/doc/html/rfc4122) and [DCE 1.1](https://pubs.opengroup.org/onlinepubs/9696989899/toc.htm).

## Telemetry Data Types

Below is a JSON object with an example of a full telemetry data message that is sent from the CLI:

```json
{
  "uid": "00000000-0000-0000-0000-000000000000",
  "os": {
    "operating_system": "linux",
    "arch": "amd64",
    "binary_version": "3.27.0-dev",
    "golang_version": " go1.20.7"
  },
  "cli": {}, // An empty object for this field indicates that this data was sent by a CLI instance
  "entities_count": null
}
```

List of telemetry data fields and their purpose:

- `uid`: universal unique identifier attached to telemetry data sent by the CLI
- `os`: basic information about the operating system of the machine which executes the CLI
- `cli`: empty object signaling that the telemetry data is sent from a CLI

Telemetry collection is enabled by default and in order to disable it, set `telemetry.enable` to `false` in the [CLI configuration]({{< ref "/ttn-lw-cli/ttn-lw-cli" >}}):

```yaml
telemetry:
  enable: false
```

## Visualization

Check out [Telemetry Dashboard](https://telemetry.thethingsstack.io) to see visual representation of collected data. Some of the information available is: amount of each type of entity stored in the IdentityServer, the quantity of gateways for each frequency plan and the amount of end devices that were active in the last month, week and day.

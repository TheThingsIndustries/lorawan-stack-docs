---
title: "CLI Telemetry"
description: "Telemetry data collection by The Things Stack' CLI"
aliases: [/telemetry/cli, /reference/telemetry/cli]
---

## Configuring Telemetry Collection

Telemetry collection is **enabled** by default for **{{% tts %}} Open Source** distribution.

In order to disable it, set `telemetry.enable` to `false` in the [CLI configuration]({{< ref "/ttn-lw-cli/ttn-lw-cli" >}}):

```yaml
telemetry:
  enable: false
```

Telemetry collection is **disabled** by default for **{{% tts %}} Enterprise** distributions.

## Initialization

When the CLI starts for the first time on a new machine or upon clearing the system cache, it creates a file on the system's cache folder with the following data:

```yaml
uid: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
last_sent: 2023-08-02T16:45:53.742417-03:00
```

The `uid` value is an UUID generated according to the specifications made on [RFC 4122](https://datatracker.ietf.org/doc/html/rfc4122) and [DCE 1.1](https://pubs.opengroup.org/onlinepubs/9696989899/toc.htm).

This UUID is randomly generated and is the identifier for all data collected and transmitted by {{% tts %}}.

## Telemetry Data Types

Below is a JSON object with an example of a full telemetry data message that is sent from the CLI:

```json
{
  "uid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "os": {
    "operating_system": "linux",
    "arch": "amd64",
    "binary_version": "3.27.0-dev",
    "golang_version": " go1.20.7"
  },
  "cli": {}, // An empty object for this field indicates that this data was sent by a CLI instance.
  "entities_count": null // Not used by the CLI.
}
```

One such data object is sent every 24 hours. The purpose of each of these fields is listed below.

- `uid`: universal unique identifier attached to telemetry data sent by the CLI
- `os`: basic information about the operating system of the machine which executes the CLI
- `cli`: empty object signaling that the telemetry data is sent from a CLI

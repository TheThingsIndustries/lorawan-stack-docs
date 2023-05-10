---
title: "Device Claiming Server Options"
description: ""
---

## End Device Claiming Options

- `dcs.edcs.net-id`: NetID of the Network Server to configure when claiming
- `dcs.edcs.ns-id`: NSID of the Network Server to configure when claiming
- `dcs.edcs.as-id`: AS-ID of the Application Server to configure when claiming
- `dcs.edcs.source`: Source of the file containing Join Server settings (directory, url, blob)
- `dcs.edcs.directory`: OS filesystem directory, which contains the config.yml and the client-specific files
- `dcs.edcs.url`: URL, which contains Join Server client configuration
- `dcs.edcs.blob.bucket`: Blob bucket to use for the Join Server client configuration
- `dcs.edcs.blob.path`: Blob path to use for the Join Server client configuration

See [Device Claiming Repository]({{< ref "/reference/device-claiming-repository" >}}) to learn how to configure the client configuration.

---
title: "Troubleshooting"
description: "Troubleshooting the Migration tool"
weight:
aliases: [/migration/migration-tool/troubleshooting]
---

<!--more-->

This section provides help for common issues you may encounter while using the migration tool.

## error:pkg/redis:not_found (entity not found)

If the device is not properly registered in all {{% tts %}} components (Identity Server, Join Server, Network Server and/or Application Server) while trying to export the device using the migration tool, the following error might occur:

```
error:go.thethings.network/lorawan-stack-migrate/pkg/export:export (export device `newdev1`)
error:pkg/redis:not_found (entity not found)
```

We suggest you delete such devices from {{% tts %}} Application and try exporting other devices.

## transport: error while dialing: dial tcp 52.212.223.226:8884: i/o timeout while exporting devices from {{% tts %}}

This error indicates that there might be an issue with your network such as your organization's network firewall blocking the connections on port `8884`.

To isolate the issue, try migrating a device by connecting the Laptop/PC to the other networks, i.e., cellular hotspot, etc. Also, you may check any firewall restrictions in your network on port `8884`.

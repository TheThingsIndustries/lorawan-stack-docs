---
title: "Upgrading"
description: ""
weight: 4
---

This page describes the steps for upgrading {{% tts %}} on Azure Kubernetes Service.

<!--more-->

## Database Migration

The Things Stack database entries are managed between minor versions using database migrations.

{{< note >}}
User are informed of required migrations for each version via the [Release Notes](https://www.thethingsindustries.com/docs/whats-new/). It’s mandatory to run required database migrations for The Things Stack to function properly.
{{</ note >}}

To migrate the database during an upgrade set the respectable Terraform variables to `true`.

| Service | Variable         |
| ------- | ---------------- |
| IS      | `is-db-migrate`  |
| NOC     | `noc-db-migrate` |

{{< note >}}
For example to migrate Identity Server and Network Operations Center databases run the following command.

```bash
$ terraform apply -var='is-db-migrate=true' -var='noc-db-migrate=true'
```

{{</ note >}}

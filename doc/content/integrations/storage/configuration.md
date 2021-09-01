---
title: Configuration
description: ""
weight: 10
distributions: Enterprise
---

This section contains instructions for configuring the Storage Integration on Enterprise distributions.

{{< note >}} The Storage Integration is already configured on Cloud and Community Edition distributions. To enable and use the integration for specific Applications, follow the instructions in the [Enable]({{< relref "enable" >}}) and [Retrieve]({{< relref "retrieve" >}}) sections. {{</ note >}}

The Storage Integration requires configuration for the underlying storage provider used, along with a few options for tuning performance and memory usage.

You can configure PostgreSQL, or any other PostgreSQL-compatible database (e.g. [TimescaleDB](https://www.timescale.com/)). A base-line configuration can be found below. Add the following section into your existing `ttn-lw-stack.yml` configuration file. See [Storage Integration Options]({{< ref "/reference/configuration/application-server#storage-integration-options" >}}) for more details.

{{< highlight yaml "linenos=table,linenostart=108" >}}
{{< readfile path="/content/getting-started/installation/configuration/ttn-lw-stack-docker-enterprise.yml" from=108 to=122 >}}
{{< /highlight >}}

{{< note >}} This will use the same database instance that is used for the Identity Server as well. In production deployments, this should be a different database. {{</ note >}}

## TimescaleDB Options

The Storage Integration has special configuration options for TimescaleDB. These options are set as flags when the database is initialized.

**\--timescaledb.chunk-time-interval**

This configures the [chunk time interval](https://docs.timescale.com/timescaledb/latest/how-to-guides/hypertables/best-practices/#time-intervals). It accepts values in hours, and is set to `168` hours by default.

**\--timescaledb.enable-retention-policy**
**\--timescaledb.enable-retention-policy=false**

This enables or disables the retention policy for TimescaleDB. If enabled, data older than the **retention-days** will be deleted.

{{< note >}} This configuration option will have immediate effect and delete messages older than the retention value. {{</ note >}}

**\--timescaledb.retention-days**

This sets the number of days for the retention policy. It accepts values in days, and is set to `30` days by default.

## Database setup

Initialize the configured database with:

```bash
$ ttn-lw-stack storage-db init
```

{{< note >}}
If you are using TimescaleDB, the following configuration options are also available:

```
--timescaledb.chunk-time-interval
--timescaledb.enable-retention-policy
--timescaledb.retention-days
```
{{</ note >}}

If you are using Docker Compose (as shown in the Getting Started guide), you should instead do:

```bash
$ docker-compose run --rm stack storage-db init
```

If everything went well, upon restart, you should be able to see the following log message:

```
  INFO Initialized Storage Integration          namespace=applicationserver/io/packages/storage provider=postgres
```

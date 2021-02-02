---
title: Configuration
description: ""
weight: 10
distributions: Enterprise
---

{{< note >}} On Cloud distributions, the following configuration options are automatically enabled in {{% tts %}}. To enable and use the integration for specific Applications, follow the instructions in the [Enable]({{< relref "enable" >}}) and [Retrieve]({{< relref "retrieve" >}}) sections. {{</ note >}}

The Storage Integration requires configuration for the underlying storage provider used, along with a few options for tuning performance and memory usage.

You can configure PostgreSQL, or any other PostgreSQL-compatible database (e.g. [TimescaleDB](https://www.timescale.com/)). A base-line configuration can be found below. Add the following section into your existing `ttn-lw-stack.yml` configuration file. See [Storage Integration Options]({{< ref "/reference/configuration/application-server#storage-integration-options" >}}) for more details.

{{< highlight yaml "linenos=table,linenostart=108" >}}
{{< readfile path="/content/getting-started/installation/configuration/ttn-lw-stack-docker-enterprise.yml" from=108 to=122 >}}
{{< /highlight >}}

{{< note >}} This will use the same database instance that is used for the Identity Server as well. In production deployments, this should be a different database. {{</ note >}}

## Database setup

Initialize the configured database with:

```bash
$ ttn-lw-stack storage-db init
```

If you are using Docker Compose (as shown in the Getting Started guide), you should instead do:

```bash
$ docker-compose run --rm stack storage-db init
```

If everything went well, upon restart, you should be able to see the following log message:

```
  INFO Initialized Storage Integration          namespace=applicationserver/io/packages/storage provider=postgres
```

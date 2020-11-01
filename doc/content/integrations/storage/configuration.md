---
title: Configuration
description: ""
weight: 10
---

The Storage Integration requires configuration for the underlying storage provider used, along with a few options for tuning performance and memory usage.

You can configure PostgreSQL, or any other PostgreSQL-compatible database (e.g. [TimescaleDB](https://www.timescale.com/)). A base-line configuration can be found below. Add the following section into your existing `ttn-lw-stack.yml` configuration file. See [Storage Integration Options]({{< ref "/reference/configuration/application-server#storage-integration-options" >}}) for more details.

```yaml
# ttn-lw-stack.yml

as:
  # ... other Application Server configuration goes here ...
  packages:
    storage:
      provider: postgres
      bulk:
        enabled: true
      postgres:
        # if using CockroachDB
        database-uri: postgres://root@cockroach:26257/ttn_lorawan_dev?sslmode=disable
        # if using PostgreSQL or TimescaleDB
        # database-uri: postgres://root:root@postgres:5432/ttn_lorawan_dev?sslmode=disable
        insert-batch-size: 1024     # batch size for INSERT operations
        select-batch-size: 1024     # batch size for SELECT operations

# ... other configuration goes here ...
```

>*NOTE*: This will use the same database instance that is used for the Identity Server as well. In production deployments, this should be a different database.

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
  INFO Initialized Storage Integration          bulk=true namespace=applicationserver/io/packages/storage provider=postgres
```

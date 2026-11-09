# Configuration

> This section contains instructions for configuring the Storage Integration on The Things Stack Enterprise distributions. Note: The Storage Integration is …

Source: https://www.thethingsindustries.com/docs/integrations/storage/configuration/


This section contains instructions for configuring the Storage Integration on The Things Stack Enterprise distributions.

> **Note:** The Storage Integration is already configured on The Things Stack Cloud and The Things Stack Sandbox distributions. To enable and use the integration for specific Applications, follow the instructions in the [Enable/Disable](https://www.thethingsindustries.com/docs/integrations/storage/enable/) and [Retrieve Messages](https://www.thethingsindustries.com/docs/integrations/storage/retrieve/) sections.


The Storage Integration requires configuration for the underlying storage provider used, along with a few options for tuning performance and memory usage.

You can configure PostgreSQL, or any other PostgreSQL-compatible database (e.g. [TimescaleDB](https://www.timescale.com/)). A base-line configuration can be found below. Add the following section into your existing `ttn-lw-stack.yml` configuration file. See [Storage Integration Options](https://www.thethingsindustries.com/docs/enterprise/management/configuration/application-server/#storage-integration-options) for more details.

```yaml
oauth:
    authorize-url: "https://thethings.example.com/oauth/authorize"
    token-url: "https://thethings.example.com/oauth/token"
    logout-url: "https://thethings.example.com/oauth/logout"
    client-id: "console"
    client-secret: "console" # choose or generate a secret

# If Application Server enabled, defaults for "thethings.example.com":
as:
  # Configuration required for the Storage Integration
  packages:
```


> **Note:** This will use the same database instance that is used for the Identity Server as well. In production deployments, this should be a different database.


## TimescaleDB Options

The Storage Integration has special configuration options for TimescaleDB, that are set as flags when the database is initialized:

- `--timescaledb.chunk-time-interval` - this configures the [chunk time interval](https://docs.timescale.com/timescaledb/latest/how-to-guides/hypertables/best-practices/#time-intervals). It accepts values in hours, and is set to `168` hours by default.

- `--timescaledb.retention-days` - this sets the number of days for the retention policy. It accepts values in days, and is set to `30` days by default.

- `--timescaledb.enable-retention-policy`, `--timescaledb.enable-retention-policy=false` - this enables or disables the retention policy for TimescaleDB. If enabled, data older than the **retention-days** will be deleted.

> **Warning:** The last configuration option will have immediate effect and delete messages older than the **retention-days** value.


## Database Setup

Initialize the configured database with:

```bash
ttn-lw-stack storage-db init
```

If you are using TimescaleDB, as mentioned in the [TimescaleDB Options](https://www.thethingsindustries.com/docs/integrations/storage/configuration/#timescaledb-options) section above, the following configuration options are also available:

```
--timescaledb.chunk-time-interval
--timescaledb.enable-retention-policy
--timescaledb.retention-days
```

If you are using Docker Compose to run The Things Stack (as shown in [Installing The Things Stack guide](https://www.thethingsindustries.com/docs/enterprise/docker/)), initialize the configured database with:

```bash
docker compose run --rm stack storage-db init
```

If everything went well, upon restart, you should be able to see the following log message:

```
INFO Initialized Storage Integration          namespace=applicationserver/io/packages/storage provider=postgres
```


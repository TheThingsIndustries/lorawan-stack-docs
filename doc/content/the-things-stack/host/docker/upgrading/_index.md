---
title: "Upgrading The Things Stack"
description: ""
distributions: ["Enterprise", "Open Source"]
weight: 4
aliases: [/getting-started/upgrading]
---

This section contains instructions to upgrade a {{% tts %}} Enterprise or Open Source deployment.

<!--more-->

{{< note >}} To avoid downtime in production deployments, we strongly suggest {{% tts %}} users to test the upgrading process in their staging environments first. After confirming that the upgrade process was successful in staging environment, you may proceed with upgrading {{% tts %}} in your production deployment. {{</ note >}}

## Pulling new images

Replace the tag in your `docker-compose.yml` file with the newer version of {{% tts %}}.

{{< tabs/container "Enterprise" "Open Source" >}}
{{< tabs/tab "Enterprise" >}}

```yaml
# file: docker-compose.yml
services:
  # ...
  stack:
    image: 'thethingsindustries/lorawan-stack:<new-version-tag>'
  # ...
```
{{< /tabs/tab >}}
{{< tabs/tab "Open Source" >}}

```yaml
# file: docker-compose.yml
services:
  # ...
  stack:
    image: 'thethingsnetwork/lorawan-stack:<new-version-tag>'
  # ...
```

{{< /tabs/tab >}}
{{< /tabs/container >}}

Pull the docker images of the new version.

```bash
docker compose pull stack
Pulling stack     ... done
```

The new version will be pulled locally but not run yet.

## Backup

{{< warning >}} We do not recommend manually backing up and restoring databases for production deployments. Consider using a managed database service with support for snapshots. {{</ warning >}}

Stop `{{< tts >}}` container.

```bash
docker compose stop stack
Stopping <directory>_stack_1 ... done
```

{{< note >}} In this guide, `<directory>` represents the directory containing {{% tts %}} files, i.e. the directory where you cloned {{% tts %}} repository. {{</ note >}}

### Redis

Navigate to the Redis data folder, which can be found in the `docker-compose.yml` for the `redis` service (ex: `${DEV_DATA_DIR:-.env/data}/redis`)

Stop the `redis` container.

```bash
docker compose stop redis
Stopping <directory>_redis_1 ... done
```

Copy the `${DEV_DATA_DIR:-.env/data}/redis/appendonly.aof` file to a location of your choice. This file is now a snapshot of the database at the time that it is copied.

To restore `redis` from this file, simply place the file back in the data folder (replacing the `appendonly.aof` file) and start `redis`. The contents of the backup will be read and restored.

Start the `redis` container.

```bash
docker compose up -d redis
Starting <directory>_redis_1 ... done
```

### PostgreSQL

Keep the `postgres` container running and make a PostgreSQL backup file using the following command:

```bash
docker exec -it <directory>_postgres_1 /usr/bin/pg_dump --format=c ttn_lorawan > <location-of-your-choice>/postgres-backup.sql
```

A `postgres-backup.sql` file containing a snapshot of the PostgreSQL database at the time that it was backed up will be created in the `<location-of-your-choice>` directory.

In order to make the backup file available inside the container, just copy the `postgres-backup.sql` file to the `${DEV_DATA_DIR:-.env/data}/postgres` directory on your machine. You can also use the following command to copy the file into the `/var/lib/postgresql/data` directory inside the container:

```bash
docker cp postgres-backup.sql <directory>_postgres_1:/var/lib/postgresql/data
```

In order to restore the PostgreSQL database contents, you first need to delete (or rename) the old `ttn_lorawan` database to prevent conflicts. In order to perform deletion or renaming, you have to be disconnected from the `ttn_lorawan` database.

Create a temporary database `temp_db`:

```bash
docker exec -it <directory>_postgres_1 psql -d ttn_lorawan -c "CREATE DATABASE temp_db;"
```

Run the following command to disconnect from `ttn_lorawan`:

```bash
docker exec -it <directory>_postgres_1 psql -d ttn_lorawan -c "SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity WHERE pg_stat_activity.datname = 'ttn_lorawan' AND pid <> pg_backend_pid();"
```

Now connect to `temp_db` and delete the old `ttn_lorawan` database with:

```bash
docker exec -it <directory>_postgres_1 psql -d temp_db -c "DROP DATABASE ttn_lorawan;"
```

Recreate the `ttn_lorawan` database:

```bash
docker exec -it <directory>_postgres_1 psql -d temp_db -c "CREATE DATABASE ttn_lorawan;"
```

At this point, the `ttn_lorawan` database will be empty. Finally, you can restore the database contents from the `postgres-backup.sql` snapshot file:

```bash
docker exec <directory>_postgres_1 pg_restore -d ttn_lorawan /var/lib/postgresql/data/postgres-backup.sql
```

For additional info, please refer to the [official PostgreSQL documentation](https://www.postgresql.org/docs/14/backup.html) for the specific version that you are using.

### Optional

Updates to {{< tts >}} do not modify static (user-uploaded) assets. But those can be backed up as well.

User profile pictures and end device pictures are stored in the `assets` folder by default.

Check the values set for `is.profile-picture.bucket-url` and `is.end-device-picture.bucket-url` configuration options to find these locations (if you are using a non-default location).

You can now copy the contents of those folders to a location of your choice.

## Migrations

New minor versions of {{< tts >}} include new features/fixes which may require an update to the databases. This is done through migrations.

{{< tabs/container "Enterprise" "Open Source" >}}
{{< tabs/tab "Enterprise" >}}

Migrate the Identity Server Database.

```bash
docker compose run --rm stack is-db migrate
```

Migrate the Network Server Database.

```bash
docker compose run --rm stack ns-db migrate
```

Migrate the Device Claiming Server Database.

```bash
docker compose run --rm stack dcs-db migrate
```

Migrate the Application Server Database.

```bash
docker compose run --rm stack as-db migrate
```

{{< /tabs/tab >}}
{{< tabs/tab "Open Source" >}}

Migrate the Identity Server Database.

```bash
docker compose run --rm stack is-db migrate
```

Migrate the Network Server Database.

```bash
docker compose run --rm stack ns-db migrate
```
{{< /tabs/tab >}}
{{< /tabs/container >}}


## Running the new version

Once the above steps are successfully completed, start {{< tts >}}.

```bash
docker compose up -d stack
```

## Troubleshooting

For common issues that might show up during the upgrade process, see the [Troubleshooting Installation section]({{< ref "/the-things-stack/host/docker/troubleshooting" >}}).

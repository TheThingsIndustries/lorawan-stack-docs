---
title: "Upgrading The Things Stack"
description: ""
distributions: ["Enterprise", "Open Source"]
weight: 3
---

Follow these instructions to upgrade an existing {{% tts %}} instance.

<!--more-->

{{< note >}} All commands explained here are executed in a terminal prompt in the same **directory** as your `docker-compose.yml` file. {{</ note >}}

### Pulling new images

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
$ docker-compose pull stack
Pulling stack     ... done
```

The new version will be pulled locally but not run yet.

### Backup

{{< warning >}} We do not recommend manually backing up and restoring databases for production deployments. Consider using a managed database service with support for snapshots. {{</ warning >}}

Stop `{{< tts >}}` container.

```bash
$ docker-compose stop stack
Stopping <directory>_stack_1 ... done
```

#### Redis

Navigate to the Redis data folder, which can be found in the `docker-compose.yml` for the `redis` service (ex: `${DEV_DATA_DIR:-.env/data}/redis`)

Stop the `redis` container.

```bash
$ docker-compose stop redis
Stopping <directory>_redis_1 ... done
```

Copy the `${DEV_DATA_DIR:-.env/data}/redis/appendonly.aof` file to a location of your choice. This file is now a snapshot of the database at the time that it is copied.

To restore `redis` from this file, simply place the file back in the data folder (replacing the `appendonly.aof` file) and start `redis`. The contents of the backup will be read and restored.

Start the `redis` container.

```bash
$ docker-compose up -d redis
Starting <directory>_redis_1 ... done
```

#### Cockroach

Keep the `cockroach` container running and enter a cockroach CLI shell.

```bash
$ docker exec -it <directory>_cockroach_1 ./cockroach sql --insecure
```

Backup the database.

```bash
root@:26257/defaultdb> BACKUP * TO 'nodelocal://self/<backup_name>';
```

A folder with the chosen `<backup_name>` will be created at the location `${DEV_DATA_DIR:-.env/data}/cockroach/extern`.

Copy this folder (`${DEV_DATA_DIR:-.env/data}/cockroach/extern/<backup_name>`) to a location of your choice. This folder is now a snapshot of the database at the time that it is copied.

In order to restore from a backup, copy the backup folder to `${DEV_DATA_DIR:-.env/data}/cockroach/extern`.

Now, again enter a cockroach CLI shell again with the `cockroach` container running.

```bash
$ docker exec -it <directory>_cockroach_1 ./cockroach sql --insecure
```

Delete (or rename) the existing database to prevent conflicts.

```bash
root@:26257/defaultdb>  DROP DATABASE ttn_lorawan CASCADE;
```

Restore from the backup.

```bash
root@:26257/defaultdb>  RESTORE DATABASE ttn_lorawan FROM 'nodelocal://self/<backup_name>';
```

#### Optional

Updates to {{< tts >}} do not modify static (user-uploaded) assets. But those can be backed up as well.

User profile pictures and end device pictures are stored in the `assets` folder by default.

Check the values set for `is.profile-picture.bucket-url` and `is.end-device-picture.bucket-url` configuration options to find these locations (if you are using a non-default location).

You can now copy the contents of those folders to a location of your choice.

### Migrations

New minor versions of {{< tts >}} include new features/fixes which may require an update to the databases. This is done through migrations.

{{< tabs/container "Enterprise" "Open Source" >}}
{{< tabs/tab "Enterprise" >}}

Migrate the Identity Server Database.

```bash
$ docker-compose run --rm stack is-db migrate
```

Migrate the Network Server Database.

```bash
$ docker-compose run --rm stack ns-db migrate
```

Migrate the Device Claiming Server Database.

```bash
$ docker-compose run --rm stack dcs-db migrate
```

Migrate the Application Server Database.

```bash
$ docker-compose run --rm stack as-db migrate
```

{{< /tabs/tab >}}
{{< tabs/tab "Open Source" >}}

Migrate the Identity Server Database.

```bash
$ docker-compose run --rm stack is-db migrate
```

Migrate the Network Server Database.

```bash
$ docker-compose run --rm stack ns-db migrate
```
{{< /tabs/tab >}}
{{< /tabs/container >}}


### Running the new version

Once the above steps are successfully completed, start {{< tts >}}.

```bash
$ docker-compose up -d stack
```

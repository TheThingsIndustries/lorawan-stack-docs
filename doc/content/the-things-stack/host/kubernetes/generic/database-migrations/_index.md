---
title: "Database Migrations"
description: ""
weight: 7
---

{{% tts %}} database entries are managed between minor versions using database migrations.

User are informed of required migrations for each version via the [Release Notes](https://www.thethingsindustries.com/docs/whats-new/). It's mandatory to run required database migrations for {{% tts %}} to function properly.

This page describes the steps for performing database operations on a {{% tts %}} Kubernetes Cluster.

<!--more-->

## General Procedure

1. Delete current Jobs (if any).

```bash
$ kubectl delete jobs --all=true
```

2. Do a _dry run_ of a Helm update and store the evaluation to a file.

```bash
$ helm upgrade <name> oci://registry-1.docker.io/thethingsindustries/<repo> --version <version> --values <deployment>.values.yaml --dry-run --debug > dryrun.txt
```

You can also use a local Helm chart.

```bash
$ helm upgrade <name> <path-to-chart> --values <deployment>.values.yaml --dry-run --debug > dryrun.txt
```

3. In the `dryrun.txt` file look for a job with the name `<name>-<component>-migrate`.

For example a migration job for the Identity Server database would look like this.

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: <name>-is-migrate
  ...
```

4. Copy the entire yaml content of this `Job`; until the `---` lines to a new file `<name>-<component>-migrate.yaml`.

5. Deploy this Job manually.

```bash
kubectl apply -f <name>-<component>-migrate.yaml
```

6. Wait for the Job to complete.

7. Once successfully completed, this can be deleted.

```bash
kubectl delete -f <name>-<component>-migrate.yaml
```

Repeat the above process for all the components required. Currently only the IS and NOC components require migrations.

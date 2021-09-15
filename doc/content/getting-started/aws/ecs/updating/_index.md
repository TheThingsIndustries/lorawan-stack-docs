---
title: "Updating"
description: ""
weight: 3
---

This page describes the steps for updating {{% tts %}} on AWS ECS.

<!--more-->

From AWS' point of view, updating {{% tts %}} implies three operations described in the subsections below.

## Updating CloudFormation Stacks

Updating CloudFormation stacks can be done via the AWS console, using the **Create changeset** functionality. All stacks need to be updated in their numbering order. For example, a stack using template `1-1-vpc` needs to be updated before `1-2-bastion`, which needs to be updated before `2-1-db-aurora-master`.

Not all stacks require a replacement in each version update.

{{< note >}} Please refer to https://thethingsindustries.s3.amazonaws.com/public/cloud/3.x/UPGRADING.md (replace `3.x` with the current minor version), which contains per-version changes in templates. Only templates mentioned in that file have changed in given version. Moreover use that file as a general guideline what changes to expect. {{</ note >}}

Make sure deployed templates correspond to your {{% tts %}} version. When updating, pay extra attention to:
- new parameters
- removed parameters
- parameters with changed possible values

as default parameters might not be valid in context of your deployment.

There are two templates that have a non-standard update procedure:

### `2-5-db-timescale`

{{< note >}} As AMI, we use the newest Amazon Linux 2 image. This means that AMI ID is most likely going to change between two consecutive releases of {{% tts %}}, and upon update AWS will try to replace the EC2 machine. If there are no notes in `UPGRADING.md` and new template differs only by AMI ID, consider simply upgrading the software on the machine instead of updating this particular stack via CloudFormation, especially prior to version 3.15.0. Always remember to backup your data before update. {{</ note >}}

#### Updating before version 3.15.0

If you're updating to a version lower than 3.15.0, simple CloudFormation update will fail because CloudFormation doesn't propely remount EBS volumes. It is advised that you skip this template, or inspect and apply relevant changes manually.

#### Updating to 3.15.0 or higher

In version 3.15.0 the `2-5-db-timescale` template has been reworked to allow smoother update.

##### Updating from version lower than 3.15.0

It is strongly advised to backup your data before performing this update.

1. Before update, set the `ApplicationServerStorageEnabled` parameter in `5-2-ecs-ops` and `5-4-ecs-services` to `false`. This will turn off storage integration.
2. Terminate the EC2 machine hosting TimescaleDB.
3. Update the `2-5-db-timescale` template. Make sure that there are no changes to `Volume` (potential data loss). If you can't avoid updating `Volume`, make a snapshot and then use the `VolumeSnapshotID` parameter to recreate the volume from a snapshot.
4. Continue with the update as normal. When you reach `5-2-ecs-ops` and `5-4-ecs-services`, set `ApplicationServerStorageEnabled` parameter back to `true`.

##### Updating from version 3.15.0 or higher

You can update the template as any other. Make sure that the Change Set doesn't contain any changes to `Volume`, or you might experience data loss.

Storage integration may report failures for a brief moment before new EC2 machine starts up (about two minutes) and Application Server picks up new DNS entry (TTL one minute).

### `5-1-ecs-cluster`

In this template we use an autoscaling group. Updates to `LaunchConfiguration` do not cause any effect on already running machines that were created using said `LaunchConfiguration`. This means that if this template contains changes, e.g. different `UserData` or an updated AMI image, you should examine changes and apply them manually.

{{< note >}} Make sure to remember that both `5-1-ecs-cluster` and `2-5-db-timescale` use standard Amazon Linux 2 images. This should make it easy to decide whether you actually need to update the machines, and if yes, how exactly. There is no non-standard software on these machines beyond what's in the `UserData` section of respective template, therefore you can follow standard update procedures. {{</ note >}}

## Changing Docker Images

Templates `5-x` create ECS services, and they use Docker images. For this reason, when updating `5-x` stacks, do not forget to change used Docker images to newer ones. Since `5-x` stacks have images as parameters, do not forget to update them, even if they are not mentioned in `UPGRADING.md`.

Please go through [Release Notes](https://www.thethingsindustries.com/docs/whats-new/) to get familiar with changes between the versions you're updating from and to, including changes introduced in the in-between releases.

## Migrations

When updating {{% tts %}} to a newer version, the [Release Notes](https://www.thethingsindustries.com/docs/whats-new/) might mention that a migration is needed. When updating an ECS-deployed {{% tts %}}, the right moment to perform these migrations is right after updating `5-2-ecs-ops` stack. You might need to perform these migrations:
- `is-db`
- `dcs-db`
- `ns-db`
- `as-db`
- `storage-db`

Migrations are performed using `migrate` commands. Those can be run similarly to `init` commands during initial deployment. 

> See [Database Operations]({{< relref "../database-operations" >}}) for detailed info about migrations.

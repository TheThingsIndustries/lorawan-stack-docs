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

This template describes an EC2 machine with EBS storage. Currently, AWS does not permit replacement updates on EC2 machines with EBS volumes attached. Continuing with update might result in data loss. For this reason, you will need to carefully examine what changes AWS wants to perform while updating this stack, and manually apply some of them.

As machine image, we use the newest Amazon Linux 2 image. This means that AMI is most likely going to change between two consecutive releases of {{% tts %}}, and upon update AWS will try to replace the EC2 machine. However, you should update the software on that EC2 machine manually instead.

### `5-1-ecs-cluster`

In this template we use an autoscaling group. Updates to `LaunchConfiguration` do not cause any effect on already running machines that were created using said `LaunchConfiguration`. This means that if this template contains changes, e.g. different `UserData` or an updated AMI image, you should examine changes and apply them manually.

{{< note >}} Make sure to remember that both `5-1-ecs-cluster` and `2-5-db-timescale` use bare Amazon Linux 2 images. This should make it easy to decide whether you actually need to update the machines, and if yes, how exactly. There is no non-standard software on these machines beyond what's in the `UserData` section of respective template, therefore you can follow standard update procedures. {{</ note >}}

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

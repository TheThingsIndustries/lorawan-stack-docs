---
title: "Troubleshooting AWS ECS Deployment"
description: ""
weight: 9
aliases:
  [
    /getting-started/aws/ecs/troubleshooting,
    /the-things-stack/host/aws/ecs/troubleshooting,
  ]
---

This section contains information to troubleshoot {{% tts %}} deployment.

## ECS pulled wrong image version

The image tags starting with `3.x` contain the latest patch version. For this reason, you should use images starting with `3.x.y`, where you specify the desired patch version yourself. Otherwise, when for some reason an ECS task restarts, it can pull the `3.x` image again, which could be in the meantime updated to a new patch version.

## Identity Server fails with `error:pkg/identityserver/store:database (database error)`

This error is usually caused by a network failure. In this case, and in case of similar connection errors, we recommend:

1. Restarting relevant ECS tasks
2. Waiting for all startup processes to complete, as sometimes certain elements might start in wrong order

If this doesn't help, please start troubleshooting the network connection (for example, in this case between the Identity Server and the Aurora database).

## The session information is lost for all devices, and the uplinks are dropped by the Network Server

While intuitively ElastiCache seems to be just cache, in fact it is a fully capable database, and {{% tts %}} uses it as such. In particular, among other things, Network Server uses it for storing the session information for devices. If there is any issue with the Redis database, it causes loss of devices session data.

This is why, by default, we enable periodic backups. If you're experiencing data loss, restore the database from one of automatic snapshots, by entering the snapshot ID into relevant parameter in the Redis CloudFormation template.

## I have an issue with certain AWS resources

It is assumed that customers who wish to deploy their own AWS ECS setup already have in-depth knowledge about AWS. We do not offer support on AWS itself. In order to receive best support from us, before reaching out please narrow down your issue to particular elements of {{% tts %}}. For help on AWS itself, please refer to:

https://docs.aws.amazon.com/AmazonECS/latest/developerguide/troubleshooting.html

## I get a `pkg/scripting/javascript:script_timeout (script timeout)` error

The current deadline for executing a Javascript payload decoder is 100 milliseconds. The payload decoder execution time increases in cases of high CPU usage and appearance of traffic bursts in {{% tts %}} deployment. If the process of decoding a payload exceeds the deadline, the payload decoder execution process is stopped and the uplink is sent with raw payload only.

This error can be resolved by doubling CPU and memory for the Application Server tasks.

---
title: "Best Practices"
description: ""
weight: 4
aliases:
  [
    /getting-started/aws/ami/best-practices,
    /the-things-stack/host/aws/ami/best-practices,
  ]
---

This page describes best practices of a {{% tts %}} deployment on AWS AMI.

## Staging

Performing maintenance operations requires in-depth knowledge of AWS and {{% tts %}}. It is likely that certain action might have unexpected results. For this reason, we strongly advise to maintain a staging environment, and test all updates on staging before deploying to production.

## Back-ups

{{% tts %}} uses three types of storage:

1. AWS RDS database

2. AWS ElastiCache database

3. S3 buckets

AWS RDS and AWS ElastiCache databases keep important data. By default they have automatic backups. It is advised to periodically check that the backups are still performed correctly, and they restore successfully.

You might want to consider turning on versioning on the S3 buckets. Currently this can't be done from our CloudFormation template, but you can do it in bucket settings. Data in these buckets is not vital for functioning of {{% tts %}}, but loss might result in incovenience.

## SSH access

EC2 machine included in CloudFormation template can be accessed via SSH. It is suggested to access the machine only from an SSH gateway or the internal network, and to manage the SSH key securely. The CloudFormation template offers a firewall setting for limiting SSH access to a given subnet.

## Alerting

It is advised to set up an alerting system for basic values like CPU/Memory usage or number of uplinks. Currently the single-AMI template does not offer an alerting solution out of the box, but you can refer to the [AWS ECS deployment]({{< ref "/enterprise/aws/ecs/monitoring" >}}) for an example setup.

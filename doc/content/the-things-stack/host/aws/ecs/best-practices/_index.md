---
title: "Best Practices"
description: ""
weight: 8
---

This page describes best practices of a {{% tts %}} deployment on AWS ECS.

## Stack Naming

Templates are numbered in suggested order of deployment. This doesn't mean that numbering won't change in the future. Our suggested naming scheme is `$PREFIX-$NAME`, where `$PREFIX` is some prefix specific to your deployment.

## Staging

Performing maintenance operations requires in-depth knowledge of AWS and {{% tts %}}. It is likely that certain action might have unexpected results. For this reason, we strongly advise to maintain a staging environment, and test all updates on staging before deploying to production.

## High Availability

Most components of {{% tts %}} offer some form of high availability - multiple ECS tasks, master/replica database nodes, etc. It is vital to make use of these functionalities in case of a random failure.

## Back-ups

{{% tts %}} uses five types of storage:

1. AWS RDS Aurora database

2. AWS ElastiCache database

3. TimescaleDB

4. AWS EFS drive for monitoring

5. S3 buckets

AWS RDS Aurora and AWS ElastiCache databases keep important data. By default they have automatic backups. It is advised to periodically check that the backups are still performed correctly, and they restore successfully.

TimescaleDB keeps storage integration data. Currently there is no backup, because this data is not considered important.

AWS EFS drive for monitoring keeps historic monitoring data. This data isn't considered important.

You might want to consider turning on versioning on the S3 buckets. Currently this can't be done from our templates, but you can do it in bucket settings. Data in these buckets is not vital for functioning of {{% tts %}}, but loss might result in incovenience.

## SSH access

EC2 machines included in templates can be accessed via SSH. Our suggested access models:
1. The EC2 machines can be configured to work with AWS Session Manager. Using AWS Session Manager allows administrators to access the machines without using SSH keys, and manage rights via AWS IAM.
2. The templates offer a firewall setting restricting SSH access to a given subnet. This can be used to only allow access from internal network, or from an SSH gateway.

## Updating software

It is advised to periodically perform `sudo yum update` on the machines to update software other than {{% tts %}}.

## Alerting

{{% tts %}} supports integration with services like Opsgenie for sending alerts about basic diagnostics, like CPU/Memory usage or high number of warnings. It is crucial to make use of this alerting system.

## Multi-tenancy

When purchasing an Enterprise license, consider setting up a multi-tenant environment from the beginning if you plan to add tenants later. Switching from a single-tenant to a multi-tenant environment requires a database migration.

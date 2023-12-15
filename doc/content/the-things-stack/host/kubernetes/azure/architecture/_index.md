---
title: "Architecture"
description: ""
weight: 1
---

This page describes the architecture of a {{% tts %}} deployment on Azure.

<!--more-->

{{< figure src="azure-infrastructure.svg" alt="Azure Infrastructure" class="plain" >}}

## Networking

The main infrastructure is contained inside a Virtual Network, grouped into separate Private Subnets. To communicate with the internet we use a Network Address Translation Gateway (NAT GW). Internal load balancer (LB) is used to handle incoming traffic.

The NAT GW is assigned a Public IP Address Prefix while the LB is assigned a static Public IP Address.

## Persistence

{{% tts %}} relies on two databases: PostgreSQL and Redis. Azure offers these databases as managed services, so that we can focus on operating a LoRaWAN® network instead of operating databases.

We use Azure Database for PostgreSQL as the relational database. Azure offers a managed Redis Database service, but due to it's version not being compatible with {{% tts %}} the Redis we use is in-cluster.

User uploads of profile pictures and end device pictures are stored in public Azure Storage Containers.

## Configuration

The Azure Kubernetes deploymen of {{% tts %}} uses a combination of configuration stored as Terraform configuration files, Kubernetes ConfigMaps and Kubernetes Secrets.

The configuration for interoperability with other LoRaWAN Backend Interfaces-compliant servers can become quite complicated and is therefore stored as multiple files in a private Azure Storage Account.

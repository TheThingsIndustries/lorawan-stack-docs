---
title: "Architecture"
description: ""
weight: 1
---

This page describes the architecture of a {{% tts %}} deployment on Azure.

<!--more-->

{{< figure src="azure-infrastructure.svg" alt="Azure Infrastructure" class="plain" >}}

## Networking

The [compute infrastructure]({{< ref "the-things-stack/host/kubernetes/azure/deployment#azure-infrastructure" >}}) is contained inside a Virtual Network, grouped into separate Private Subnets. Communication with the Internet is via a Network Address Translation Gateway (NAT GW). Internal load balancer (LB) is used to handle incoming traffic.

The NAT GW is assigned a Public IP Address Prefix while the LB is assigned a static Public IP Address.

## Data Storage

{{% tts %}} relies on two databases: PostgreSQL and Redis. Azure offers these databases as managed services.

We use [Azure Database for PostgreSQL](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/overview) as the relational database.

Azure offers a managed [Azure Cache for Redis Database](https://azure.microsoft.com/en-us/products/cache) service, but due to it's version not being compatible with {{% tts %}} the Redis we use is in-cluster. The newest Redis version supported by Azure Cache is 6.0, while the minimum required version of Redis for {{% tts %}} is 6.2.

User uploads of profile pictures and end device pictures are stored in public Azure Storage Containers.

## Configuration

The Azure Kubernetes deployment of {{% tts %}} uses a combination of configuration stored as Terraform and Helm configuration files.

The configuration for interoperability with other LoRaWAN Backend Interfaces-compliant servers is stored as multiple files in a private Azure Storage Account.

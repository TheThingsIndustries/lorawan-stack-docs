# Architecture

> This page describes the architecture of a The Things Stack deployment on Azure.

Source: https://www.thethingsindustries.com/docs/enterprise/kubernetes/azure/architecture/


This page describes the architecture of a The Things Stack deployment on Azure.

![Azure Infrastructure](https://www.thethingsindustries.com/docs/enterprise/kubernetes/azure/architecture/azure-infrastructure.svg)


## Networking

The [compute infrastructure](https://www.thethingsindustries.com/docs/enterprise/kubernetes/azure/deployment/#azure-infrastructure) is contained inside a Virtual Network, grouped into separate Private Subnets. Communication with the Internet is via a Network Address Translation Gateway (NAT GW). Internal load balancer (LB) is used to handle incoming traffic.

The NAT GW is assigned a Public IP Address Prefix while the LB is assigned a static Public IP Address.

## Data Storage

The Things Stack relies on two databases: PostgreSQL and Redis.

For PostgreSQL, we use [Azure Database for PostgreSQL](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/overview) as the relational database.

For Redis, we use an in-cluster deployment instead of the [Azure Cache for Redis Database](https://azure.microsoft.com/en-us/products/cache) service due to incompatibility with The Things Stack. The newest Redis version supported by Azure Cache is 6.0, while the minimum required version of Redis for The Things Stack is 6.2.

> **Note:** Azure Managed Redis does support a higher version, but it's available only in clustered mode. The Things Stack does not work on clustered Redis.


User uploads of profile pictures and end device pictures are stored in public Azure Storage Containers (Optional).

## Configuration

The Azure Kubernetes deployment of The Things Stack uses a combination of configuration stored as Terraform and Helm configuration files.

The configuration for interoperability with other LoRaWAN Backend Interfaces-compliant servers is stored as multiple files in a private Azure Storage Account (Optional).


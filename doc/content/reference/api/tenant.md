---
title: "Tenant APIs"
description: ""
---
 
## Authentication

Unlike the other services, the tenant services do **not** accept API keys or OAuth access tokens. Instead, authentication is done with a "tenant admin key" that is [configured in the Identity Server]({{< relref "../configuration/identity-server#tenant-administration-options" >}})

- Usage with HTTP `Authorization` Header: `TenantAdminKey XXXXX`
- Usage with gRPC [call credentials](https://grpc.io/docs/guides/auth.html#authentication-api) (in the `authorization` header): `TenantAdminKey XXXXX`

## The `TenantRegistry` service

{{< proto/method package="tti.lorawan.v3" service="TenantRegistry" method="Create" >}}

{{< proto/method package="tti.lorawan.v3" service="TenantRegistry" method="Get" >}}

{{< proto/method package="tti.lorawan.v3" service="TenantRegistry" method="GetRegistryTotals" >}}

{{< proto/method package="tti.lorawan.v3" service="TenantRegistry" method="List" >}}

{{< proto/method package="tti.lorawan.v3" service="TenantRegistry" method="Update" >}}

{{< proto/method package="tti.lorawan.v3" service="TenantRegistry" method="Delete" >}}

## Messages

{{< proto/message package="tti.lorawan.v3" message="Tenant" >}}

{{< proto/message package="tti.lorawan.v3" message="TenantIdentifiers" >}}

{{< proto/message package="tti.lorawan.v3" message="Tenants" >}}

{{< proto/message package="tti.lorawan.v3" message="CreateTenantRequest" >}}

{{< proto/message package="tti.lorawan.v3" message="GetTenantRequest" >}}

{{< proto/message package="tti.lorawan.v3" message="GetTenantRegistryTotalsRequest" >}}

{{< proto/message package="tti.lorawan.v3" message="TenantRegistryTotals" >}}

{{< proto/message package="tti.lorawan.v3" message="ListTenantsRequest" >}}

{{< proto/message package="tti.lorawan.v3" message="UpdateTenantRequest" >}}

---
title: "Tenant APIs"
description: ""
distributions: ["Enterprise", "Cloud"]
---
 
## Authentication

Unlike the other services, the tenant services do **not** accept API keys or OAuth access tokens. Instead, authentication is done with a "tenant admin key" that is [configured in the Identity Server]({{< relref "../configuration/identity-server#tenant-administration-options" >}})

- Usage with HTTP `Authorization` Header: `TenantAdminKey XXXXX`
- Usage with gRPC [call credentials](https://grpc.io/docs/guides/auth.html#authentication-api) (in the `authorization` header): `TenantAdminKey XXXXX`

## The `TenantRegistry` service

{{< proto/method package="tti.lorawan.v3" service="TenantRegistry" method="Create" >}}

{{< proto/method package="tti.lorawan.v3" service="TenantRegistry" method="Get" >}}

{{< proto/method package="tti.lorawan.v3" service="TenantRegistry" method="GetIdentifiersForEndDeviceEUIs" >}}

{{< proto/method package="tti.lorawan.v3" service="TenantRegistry" method="GetIdentifiersForGatewayEUI" >}}

{{< proto/method package="tti.lorawan.v3" service="TenantRegistry" method="GetIdentifiersForBillingIdentifiers" >}}

{{< proto/method package="tti.lorawan.v3" service="TenantRegistry" method="GetRegistryTotals" >}}

{{< proto/method package="tti.lorawan.v3" service="TenantRegistry" method="BatchGetRegistryTotals" >}}

{{< proto/method package="tti.lorawan.v3" service="TenantRegistry" method="List" >}}

{{< proto/method package="tti.lorawan.v3" service="TenantRegistry" method="Update" >}}

{{< proto/method package="tti.lorawan.v3" service="TenantRegistry" method="Delete" >}}

## The `EntityRegistrySearch` service

{{< proto/method package="tti.lorawan.v3" service="EntityRegistrySearch" method="SearchTenants" >}}

## The `Tbs` service

{{< proto/method package="tti.lorawan.v3" service="Tbs" method="Report" >}}

## Messages

{{< proto/message package="tti.lorawan.v3" message="BatchGetTenantRegistryTotalsRequest" >}}

{{< proto/message package="tti.lorawan.v3" message="Configuration.Cluster.IdentityServer.ApplicationLimits" >}}

{{< proto/message package="tti.lorawan.v3" message="Configuration.Cluster.IdentityServer.OrganizationLimits" >}}

{{< proto/message package="tti.lorawan.v3" message="Configuration.Cluster.IdentityServer.UserLimits" >}}

{{< proto/message package="tti.lorawan.v3" message="Tenant" >}}

{{< proto/message package="tti.lorawan.v3" message="TenantIdentifiers" >}}

{{< proto/message package="tti.lorawan.v3" message="Tenants" >}}

{{< proto/message package="tti.lorawan.v3" message="CreateTenantRequest" >}}

{{< proto/message package="tti.lorawan.v3" message="GetTenantRequest" >}}

{{< proto/message package="tti.lorawan.v3" message="GetTenantIdentifiersForEndDeviceEUIsRequest" >}}

{{< proto/message package="tti.lorawan.v3" message="GetTenantIdentifiersForGatewayEUIRequest" >}}

{{< proto/message package="tti.lorawan.v3" message="GetTenantIdentifiersForBillingIdentifiersRequest" >}}

{{< proto/message package="tti.lorawan.v3" message="GetTenantRegistryTotalsRequest" >}}

{{< proto/message package="tti.lorawan.v3" message="TenantRegistryTotals" >}}

{{< proto/message package="tti.lorawan.v3" message="ListTenantsRequest" >}}

{{< proto/message package="tti.lorawan.v3" message="MeteringData" >}}

{{< proto/message package="tti.lorawan.v3" message="MeteringData.TenantMeteringData" >}}

{{< proto/message package="tti.lorawan.v3" message="UpdateTenantRequest" >}}

{{< proto/message package="tti.lorawan.v3" message="Configuration" >}}

{{< proto/message package="tti.lorawan.v3" message="Billing" >}}

{{< proto/message package="tti.lorawan.v3" message="BillingIdentifiers" >}}

{{< proto/message package="tti.lorawan.v3" message="Configuration.Cluster" >}}

{{< proto/message package="tti.lorawan.v3" message="Configuration.PacketBroker" >}}

{{< proto/message package="tti.lorawan.v3" message="Billing.Stripe" >}}

{{< proto/message package="tti.lorawan.v3" message="Billing.AWSSaaSMarketplace" >}}

{{< proto/message package="tti.lorawan.v3" message="Configuration.UI" >}}

{{< proto/message package="tti.lorawan.v3" message="Configuration.Cluster.IdentityServer" >}}

{{< proto/message package="tti.lorawan.v3" message="Configuration.Cluster.IdentityServer.UserRegistration" >}}

{{< proto/message package="tti.lorawan.v3" message="Configuration.Cluster.IdentityServer.UserRegistration.Invitation" >}}

{{< proto/message package="tti.lorawan.v3" message="Configuration.Cluster.IdentityServer.UserRegistration.ContactInfoValidation" >}}

{{< proto/message package="tti.lorawan.v3" message="Configuration.Cluster.IdentityServer.UserRegistration.AdminApproval" >}}

{{< proto/message package="tti.lorawan.v3" message="Configuration.Cluster.IdentityServer.UserRegistration.PasswordRequirements" >}}

{{< proto/message package="tti.lorawan.v3" message="Configuration.Cluster.IdentityServer.ProfilePicture" >}}

{{< proto/message package="tti.lorawan.v3" message="Configuration.Cluster.IdentityServer.UserLogin" >}}

{{< proto/message package="tti.lorawan.v3" message="Configuration.Cluster.IdentityServer.Email" >}}

{{< proto/message package="tti.lorawan.v3" message="Configuration.Cluster.IdentityServer.Email.Network" >}}

{{< proto/message package="tti.lorawan.v3" message="Configuration.Cluster.IdentityServer.EndDevicePicture" >}}

{{< proto/message package="tti.lorawan.v3" message="Configuration.Cluster.IdentityServer.UserRights" >}}

{{< proto/message package="tti.lorawan.v3" message="Configuration.Cluster.IdentityServer.AdminRights" >}}

{{< proto/message package="tti.lorawan.v3" message="Configuration.Cluster.JoinServer" >}}

{{< proto/message package="tti.lorawan.v3" message="Configuration.Cluster.NetworkServer" >}}

{{< proto/message package="tti.lorawan.v3" message="Configuration.Cluster.NetworkOperationsCenter" >}}

{{< proto/message package="tti.lorawan.v3" message="Configuration.Cluster.NetworkOperationsCenter.Access" >}}

{{< proto/message package="tti.lorawan.v3" message="EntityCounting" >}}

{{< proto/message package="tti.lorawan.v3" message="SearchTenantsRequest" >}}

## Enums

{{< proto/enum package="tti.lorawan.v3" enum="EntityCounting.EntityCountingType" >}}

{{< api-refs >}}

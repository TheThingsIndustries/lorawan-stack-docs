---
title: "Identity Server APIs"
description: ""
---

## The `AuthenticationProviderRegistry` service

{{< proto/method package="tti.lorawan.v3" service="AuthenticationProviderRegistry" method="Create" >}}

{{< proto/method package="tti.lorawan.v3" service="AuthenticationProviderRegistry" method="Get" >}}

{{< proto/method package="tti.lorawan.v3" service="AuthenticationProviderRegistry" method="List" >}}

{{< proto/method package="tti.lorawan.v3" service="AuthenticationProviderRegistry" method="Update" >}}

{{< proto/method package="tti.lorawan.v3" service="AuthenticationProviderRegistry" method="Delete" >}}

## The `ContactInfoRegistry` service

{{< proto/method service="ContactInfoRegistry" method="RequestValidation" >}}

{{< proto/method service="ContactInfoRegistry" method="Validate" >}}

## The `EntityRegistrySearch` service

{{< proto/method service="EntityRegistrySearch" method="SearchAccounts" >}}

## Messages

{{< proto/message package="tti.lorawan.v3" message="AuthenticationProvider" >}}

{{< proto/message package="tti.lorawan.v3" message="AuthenticationProvider.Configuration" >}}

{{< proto/message package="tti.lorawan.v3" message="AuthenticationProvider.OIDC" >}}

{{< proto/message package="tti.lorawan.v3" message="AuthenticationProviders" >}}

{{< proto/message package="tti.lorawan.v3" message="CreateAuthenticationProviderRequest" >}}

{{< proto/message message="ContactInfo" >}}

{{< proto/message message="ContactInfoValidation" >}}

{{< proto/message message="EndDeviceIdentifiers" >}}

{{< proto/message message="EntityIdentifiers" >}}

{{< proto/message package="tti.lorawan.v3" message="GetAuthenticationProviderRequest" >}}

{{< proto/message package="tti.lorawan.v3" message="ListAuthenticationProvidersRequest" >}}

{{< proto/message package="tti.lorawan.v3" message="UpdateAuthenticationProviderRequest" >}}

{{< proto/message package="tti.lorawan.v3" message="AuthenticationProviderIdentifiers" >}}

{{< proto/message message="ApplicationIdentifiers" >}}

{{< proto/message message="ClientIdentifiers" >}}

{{< proto/message message="GatewayIdentifiers" >}}

{{< proto/message message="OrganizationIdentifiers" >}}

{{< proto/message message="OrganizationOrUserIdentifiers" >}}

{{< proto/message message="UserIdentifiers" >}}

{{< proto/message message="SearchAccountsRequest" >}}

{{< proto/message message="SearchAccountsResponse" >}}

<!-- ## Enums -->

{{< proto/enum enum="ContactMethod" >}}

{{< proto/enum enum="ContactType" >}}

{{< api-refs >}}

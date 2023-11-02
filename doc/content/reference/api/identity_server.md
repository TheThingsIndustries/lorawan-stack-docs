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

## The `EntityAccess` service

{{< proto/method service="EntityAccess" method="AuthInfo" >}}

## The `Is` service

{{< proto/method service="Is" method="GetConfiguration" >}}

## The `OAuthAuthorizationRegistry` service

{{< proto/method service="OAuthAuthorizationRegistry" method="List" >}}

{{< proto/method service="OAuthAuthorizationRegistry" method="ListTokens" >}}

{{< proto/method service="OAuthAuthorizationRegistry" method="Delete" >}}

{{< proto/method service="OAuthAuthorizationRegistry" method="DeleteToken" >}}

## The `GatewayBatchAccess` service

{{< proto/method service="GatewayBatchAccess" method="AssertRights" >}}

## The `GatewayBatchRegistry` service

{{< proto/method service="GatewayBatchRegistry" method="Delete" >}}

## Messages

{{< proto/message message="AssertGatewayRightsRequest" >}}

{{< proto/message package="tti.lorawan.v3" message="AuthenticationProvider" >}}

{{< proto/message package="tti.lorawan.v3" message="AuthenticationProvider.Configuration" >}}

{{< proto/message package="tti.lorawan.v3" message="AuthenticationProvider.OIDC" >}}

{{< proto/message package="tti.lorawan.v3" message="AuthenticationProviders" >}}

{{< proto/message message="BatchDeleteGatewaysRequest" >}}

{{< proto/message package="tti.lorawan.v3" message="CreateAuthenticationProviderRequest" >}}

{{< proto/message message="ContactInfo" >}}

{{< proto/message message="ContactInfoValidation" >}}

{{< proto/message message="EndDeviceIdentifiers" >}}

{{< proto/message message="EntityIdentifiers" >}}

{{< proto/message package="tti.lorawan.v3" message="GetAuthenticationProviderRequest" >}}

{{< proto/message package="tti.lorawan.v3" message="ListAuthenticationProvidersRequest" >}}

{{< proto/message package="tti.lorawan.v3" message="UpdateAuthenticationProviderRequest" >}}

{{< proto/message package="tti.lorawan.v3" message="AuthenticationProviderIdentifiers" >}}

{{< proto/message message="APIKey" >}}

{{< proto/message message="ApplicationIdentifiers" >}}

{{< proto/message message="AuthInfoResponse" >}}

{{< proto/message message="AuthInfoResponse.APIKeyAccess" >}}

{{< proto/message message="AuthInfoResponse.GatewayToken" >}}

{{< proto/message message="ClientIdentifiers" >}}

{{< proto/message message="GatewayIdentifiers" >}}

{{< proto/message message="GetIsConfigurationRequest" >}}

{{< proto/message message="GetIsConfigurationRequest" >}}

{{< proto/message message="OAuthClientAuthorizationIdentifiers" >}}

{{< proto/message message="ListOAuthClientAuthorizationsRequest" >}}

{{< proto/message message="ListOAuthAccessTokensRequest" >}}

{{< proto/message message="OAuthAccessToken" >}}

{{< proto/message message="OAuthAccessTokenIdentifiers" >}}

{{< proto/message message="OAuthAccessTokens" >}}

{{< proto/message message="OAuthClientAuthorization" >}}

{{< proto/message message="OAuthClientAuthorizations" >}}

{{< proto/message message="OrganizationIdentifiers" >}}

{{< proto/message message="OrganizationOrUserIdentifiers" >}}

{{< proto/message message="Rights" >}}

{{< proto/message message="UserIdentifiers" >}}

{{< proto/message message="UserSession" >}}

{{< proto/message message="SearchAccountsRequest" >}}

{{< proto/message message="SearchAccountsResponse" >}}

<!-- ## Enums -->

{{< proto/enum enum="ContactMethod" >}}

{{< proto/enum enum="ContactType" >}}

{{< proto/enum enum="Right" >}}

{{< api-refs >}}

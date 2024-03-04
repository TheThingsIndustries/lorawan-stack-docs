---
title: "Gateway APIs"
description: ""
aliases: ["/reference/api/gateway"]
---

List of LoRaWAN® Gateway APIs.

<!--more-->

## The `GatewayRegistry` service

{{< proto/method service="GatewayRegistry" method="Create" >}}

{{< proto/method service="GatewayRegistry" method="Get" >}}

{{< proto/method service="GatewayRegistry" method="List" >}}

{{< proto/method service="GatewayRegistry" method="Update" >}}

{{< proto/method service="GatewayRegistry" method="Delete" >}}

{{< proto/method service="GatewayRegistry" method="Restore" >}}

{{< proto/method service="GatewayRegistry" method="Purge" >}}

{{< proto/method service="GatewayRegistry" method="GetIdentifiersForEUI" >}}

## The `EntityRegistrySearch` service

{{< proto/method service="EntityRegistrySearch" method="SearchGateways" >}}

## The `GatewayAccess` service

{{< proto/method service="GatewayAccess" method="ListRights" >}}

{{< proto/method service="GatewayAccess" method="CreateAPIKey" >}}

{{< proto/method service="GatewayAccess" method="DeleteAPIKey" >}}

{{< proto/method service="GatewayAccess" method="ListAPIKeys" >}}

{{< proto/method service="GatewayAccess" method="GetAPIKey" >}}

{{< proto/method service="GatewayAccess" method="UpdateAPIKey" >}}

{{< proto/method service="GatewayAccess" method="GetCollaborator" >}}

{{< proto/method service="GatewayAccess" method="DeleteCollaborator" >}}

{{< proto/method service="GatewayAccess" method="SetCollaborator" >}}

{{< proto/method service="GatewayAccess" method="ListCollaborators" >}}

## The `Configuration` service

The Gateway Server exposes the list of available frequency plans with the `Configuration` service.

{{< proto/method service="Configuration" method="ListBands" >}}

{{< proto/method service="Configuration" method="ListFrequencyPlans" >}}

{{< proto/method service="Configuration" method="GetPhyVersions" >}}

## The `GatewayClaimingServer` service

{{< proto/method service="GatewayClaimingServer" method="AuthorizeGateway" >}}

{{< proto/method service="GatewayClaimingServer" method="Claim" >}}

{{< proto/method service="GatewayClaimingServer" method="GetInfoByGatewayEUI" >}}

{{< proto/method service="GatewayClaimingServer" method="UnauthorizeGateway" >}}

## Messages

{{< proto/message message="AlertNotificationProfileIdentifiers" >}}

{{< proto/message message="APIKey" >}}

{{< proto/message message="APIKeys" >}}

{{< proto/message message="AuthorizeGatewayRequest" >}}

{{< proto/message message="ClaimGatewayRequest" >}}

{{< proto/message message="ClaimGatewayRequest.AuthenticatedIdentifiers" >}}

{{< proto/message message="Collaborator" >}}

{{< proto/message message="Collaborators" >}}

{{< proto/message message="ContactInfo" >}}

{{< proto/message message="CreateGatewayAPIKeyRequest" >}}

{{< proto/message message="CreateGatewayRequest" >}}

{{< proto/message message="CUPSRedirection" >}}

{{< proto/message message="CUPSRedirection.ClientTLS" >}}

{{< proto/message message="DeleteGatewayAPIKeyRequest" >}}

{{< proto/message message="DeleteGatewayCollaboratorRequest" >}}

{{< proto/message message="FrequencyPlanDescription" >}}

{{< proto/message message="Gateway.LRFHSS" >}}

{{< proto/message message="Gateway" >}}

{{< proto/message message="GatewayAntenna" >}}

{{< proto/message message="GatewayIdentifiers" >}}

{{< proto/message message="Gateways" >}}

{{< proto/message message="GatewayVersionIdentifiers" >}}

{{< proto/message message="GatewayClaimAuthenticationCode" >}}

{{< proto/message message="GetCollaboratorResponse" >}}

{{< proto/message message="GetGatewayAPIKeyRequest" >}}

{{< proto/message message="GetGatewayCollaboratorRequest" >}}

{{< proto/message message="GetGatewayRequest" >}}

{{< proto/message message="GetGatewayIdentifiersForEUIRequest" >}}

{{< proto/message message="GetInfoByGatewayEUIRequest" >}}

{{< proto/message message="GetPhyVersionsRequest" >}}

{{< proto/message message="ListBandsRequest" >}}

{{< proto/message message="ListFrequencyPlansRequest" >}}

{{< proto/message message="ListFrequencyPlansResponse" >}}

{{< proto/message message="ListGatewayAPIKeysRequest" >}}

{{< proto/message message="ListGatewayCollaboratorsRequest" >}}

{{< proto/message message="ListGatewaysRequest" >}}

{{< proto/message message="Location" >}}

{{< proto/message message="OrganizationOrUserIdentifiers" >}}

{{< proto/message message="OrganizationIdentifiers" >}}

{{< proto/message message="Rights" >}}

{{< proto/message message="SearchGatewaysRequest" >}}

{{< proto/message message="SetGatewayCollaboratorRequest" >}}

{{< proto/message message="UpdateGatewayAPIKeyRequest" >}}

{{< proto/message message="UpdateGatewayRequest" >}}

{{< proto/message message="UserIdentifiers" >}}

{{< proto/message message="Secret" >}}

## Enums

{{< proto/enum enum="ContactType" >}}

{{< proto/enum enum="ContactMethod" >}}

{{< proto/enum enum="DownlinkPathConstraint" >}}

{{< proto/enum enum="GatewayAntennaPlacement" >}}

{{< proto/enum enum="LocationSource" >}}

{{< proto/enum enum="PHYVersion" >}}

{{< proto/enum enum="Right" >}}

{{< api-refs >}}

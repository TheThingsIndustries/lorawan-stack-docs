---
title: "Application APIs"
description: ""
---

## The `ApplicationRegistry` service

{{< proto/method service="ApplicationRegistry" method="Create" >}}

{{< proto/method service="ApplicationRegistry" method="Get" >}}

{{< proto/method service="ApplicationRegistry" method="List" >}}

{{< proto/method service="ApplicationRegistry" method="Update" >}}

{{< proto/method service="ApplicationRegistry" method="Delete" >}}

{{< proto/method service="ApplicationRegistry" method="Restore" >}}

{{< proto/method service="ApplicationRegistry" method="Purge" >}}

{{< proto/method service="ApplicationRegistry" method="IssueDevEUI" >}}

## The `EntityRegistrySearch` service

{{< proto/method service="EntityRegistrySearch" method="SearchApplications" >}}

## The `ApplicationAccess` service

{{< proto/method service="ApplicationAccess" method="ListRights" >}}

{{< proto/method service="ApplicationAccess" method="CreateAPIKey" >}}

{{< proto/method service="ApplicationAccess" method="DeleteAPIKey" >}}

{{< proto/method service="ApplicationAccess" method="ListAPIKeys" >}}

{{< proto/method service="ApplicationAccess" method="GetAPIKey" >}}

{{< proto/method service="ApplicationAccess" method="UpdateAPIKey" >}}

{{< proto/method service="ApplicationAccess" method="GetCollaborator" >}}

{{< proto/method service="ApplicationAccess" method="DeleteCollaborator" >}}

{{< proto/method service="ApplicationAccess" method="SetCollaborator" >}}

{{< proto/method service="ApplicationAccess" method="ListCollaborators" >}}


## The `ApplicationActivationSettingRegistry` service

{{< proto/method service="ApplicationActivationSettingRegistry" method="Get" >}}

{{< proto/method service="ApplicationActivationSettingRegistry" method="Set" >}}

{{< proto/method service="ApplicationActivationSettingRegistry" method="Delete" >}}


## The `ApplicationCryptoService` service

{{< proto/method service="ApplicationCryptoService" method="DeriveAppSKey" >}}

{{< proto/method service="ApplicationCryptoService" method="GetAppKey" >}}

## Messages

{{< proto/message message="APIKey" >}}

{{< proto/message message="APIKeys" >}}

{{< proto/message message="Application" >}}

{{< proto/message message="ApplicationIdentifiers" >}}

{{< proto/message message="Applications" >}}

{{< proto/message message="ApplicationActivationSettings" >}}

{{< proto/message message="Collaborator" >}}

{{< proto/message message="Collaborators" >}}

{{< proto/message message="ContactInfo" >}}

{{< proto/message message="CreateApplicationAPIKeyRequest" >}}

{{< proto/message message="CreateApplicationRequest" >}}

{{< proto/message message="DeleteApplicationAPIKeyRequest" >}}

{{< proto/message message="DeleteApplicationActivationSettingsRequest" >}}

{{< proto/message message="DeleteApplicationCollaboratorRequest" >}}

{{< proto/message message="DeriveSessionKeysRequest" >}}

{{< proto/message message="EndDeviceIdentifiers" >}}

{{< proto/message message="GetRootKeysRequest" >}}

{{< proto/message message="GetApplicationAPIKeyRequest" >}}

{{< proto/message message="GetApplicationCollaboratorRequest" >}}

{{< proto/message message="GetApplicationActivationSettingsRequest" >}}

{{< proto/message message="GetApplicationRequest" >}}

{{< proto/message message="KeyEnvelope" >}}

{{< proto/message message="GetCollaboratorResponse" >}}

{{< proto/message message="ListApplicationAPIKeysRequest" >}}

{{< proto/message message="ListApplicationCollaboratorsRequest" >}}

{{< proto/message message="ListApplicationsRequest" >}}

{{< proto/message message="OrganizationOrUserIdentifiers" >}}

{{< proto/message message="OrganizationIdentifiers" >}}

{{< proto/message message="Rights" >}}

{{< proto/message message="SearchApplicationsRequest" >}}

{{< proto/message message="SetApplicationCollaboratorRequest" >}}

{{< proto/message message="SetApplicationActivationSettingsRequest" >}}

{{< proto/message message="UpdateApplicationAPIKeyRequest" >}}

{{< proto/message message="UpdateApplicationRequest" >}}

{{< proto/message message="UserIdentifiers" >}}

## Enums 

{{< proto/enum enum="ContactType" >}}

{{< proto/enum enum="ContactMethod" >}}

{{< proto/enum enum="MACVersion" >}}

{{< proto/enum enum="Right" >}}

{{< api-refs >}}

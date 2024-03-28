---
title: "Organization APIs"
description: ""
aliases: ["/reference/api/organization"]
---

List of Organization APIs.

<!--more-->

## The `OrganizationRegistry` service

{{< proto/method service="OrganizationRegistry" method="Create" >}}

{{< proto/method service="OrganizationRegistry" method="Get" >}}

{{< proto/method service="OrganizationRegistry" method="List" >}}

{{< proto/method service="OrganizationRegistry" method="Update" >}}

{{< proto/method service="OrganizationRegistry" method="Delete" >}}

{{< proto/method service="OrganizationRegistry" method="Restore" >}}

{{< proto/method service="OrganizationRegistry" method="Purge" >}}

## The `EntityRegistrySearch` service

{{< proto/method service="EntityRegistrySearch" method="SearchOrganizations" >}}

## The `OrganizationAccess` service

{{< proto/method service="OrganizationAccess" method="ListRights" >}}

{{< proto/method service="OrganizationAccess" method="CreateAPIKey" >}}

{{< proto/method service="OrganizationAccess" method="DeleteAPIKey" >}}

{{< proto/method service="OrganizationAccess" method="ListAPIKeys" >}}

{{< proto/method service="OrganizationAccess" method="GetAPIKey" >}}

{{< proto/method service="OrganizationAccess" method="UpdateAPIKey" >}}

{{< proto/method service="OrganizationAccess" method="GetCollaborator" >}}

{{< proto/method service="OrganizationAccess" method="DeleteCollaborator" >}}

{{< proto/method service="OrganizationAccess" method="SetCollaborator" >}}

{{< proto/method service="OrganizationAccess" method="ListCollaborators" >}}

## Messages

{{< proto/message message="APIKey" >}}

{{< proto/message message="APIKeys" >}}

{{< proto/message message="Collaborator" >}}

{{< proto/message message="Collaborators" >}}

{{< proto/message message="ContactInfo" >}}

{{< proto/message message="CreateOrganizationAPIKeyRequest" >}}

{{< proto/message message="CreateOrganizationRequest" >}}

{{< proto/message message="DeleteOrganizationAPIKeyRequest" >}}

{{< proto/message message="DeleteOrganizationCollaboratorRequest" >}}

{{< proto/message message="GetCollaboratorResponse" >}}

{{< proto/message message="GetOrganizationAPIKeyRequest" >}}

{{< proto/message message="GetOrganizationCollaboratorRequest" >}}

{{< proto/message message="GetOrganizationRequest" >}}

{{< proto/message message="ListOrganizationAPIKeysRequest" >}}

{{< proto/message message="ListOrganizationCollaboratorsRequest" >}}

{{< proto/message message="ListOrganizationsRequest" >}}

{{< proto/message message="Organization" >}}

{{< proto/message message="OrganizationIdentifiers" >}}

{{< proto/message message="OrganizationOrUserIdentifiers" >}}

{{< proto/message message="Organizations" >}}

{{< proto/message message="Rights" >}}

{{< proto/message message="SearchOrganizationsRequest" >}}

{{< proto/message message="SetOrganizationCollaboratorRequest" >}}

{{< proto/message message="UpdateOrganizationAPIKeyRequest" >}}

{{< proto/message message="UpdateOrganizationRequest" >}}

{{< proto/message message="UserIdentifiers" >}}

## Enums

{{< proto/enum enum="ContactType" >}}

{{< proto/enum enum="ContactMethod" >}}

{{< proto/enum enum="Right" >}}

{{< api-refs >}}

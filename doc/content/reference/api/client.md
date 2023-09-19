---
title: "Client APIs"
description: ""
---

## The `ClientRegistry` service

{{< proto/method service="ClientRegistry" method="Create" >}}

{{< proto/method service="ClientRegistry" method="Get" >}}

{{< proto/method service="ClientRegistry" method="List" >}}

{{< proto/method service="ClientRegistry" method="Update" >}}

{{< proto/method service="ClientRegistry" method="Delete" >}}

{{< proto/method service="ClientRegistry" method="Restore" >}}

{{< proto/method service="ClientRegistry" method="Purge" >}}

## The `ClientAccess` service

{{< proto/method service="ClientAccess" method="ListRights" >}}

{{< proto/method service="ClientAccess" method="GetCollaborator" >}}

{{< proto/method service="ClientAccess" method="DeleteCollaborator" >}}

{{< proto/method service="ClientAccess" method="SetCollaborator" >}}

{{< proto/method service="ClientAccess" method="ListCollaborators" >}}

## The `EntityRegistrySearch` service

{{< proto/method service="EntityRegistrySearch" method="SearchClients" >}}

## Messages

{{< proto/message message="Client" >}}

{{< proto/message message="ClientIdentifiers" >}}

{{< proto/message message="CreateClientRequest" >}}

{{< proto/message message="Collaborator" >}}

{{< proto/message message="ContactInfo" >}}

{{< proto/message message="DeleteClientCollaboratorRequest" >}}

{{< proto/message message="GetClientCollaboratorRequest" >}}

{{< proto/message message="GetClientRequest" >}}

{{< proto/message message="ListClientsRequest" >}}

{{< proto/message message="ListClientCollaboratorsRequest" >}}

{{< proto/message message="OrganizationIdentifiers" >}}

{{< proto/message message="OrganizationOrUserIdentifiers" >}}

{{< proto/message message="SearchClientsRequest" >}}

{{< proto/message message="SetClientCollaboratorRequest" >}}

{{< proto/message message="UpdateClientRequest" >}}

{{< proto/message message="UserIdentifiers" >}}

## Enums

{{< proto/enum enum="ContactMethod" >}}

{{< proto/enum enum="ContactType" >}}

{{< proto/enum enum="GrantType" >}}

{{< proto/enum enum="State" >}}

{{< proto/enum enum="Right" >}}

{{< api-refs >}}

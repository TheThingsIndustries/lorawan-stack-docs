---
title: "User APIs"
description: ""
---

## The `UserRegistry` service

{{< proto/method service="UserRegistry" method="Create" >}}

{{< proto/method service="UserRegistry" method="Get" >}}

{{< proto/method service="UserRegistry" method="List" >}}

{{< proto/method service="UserRegistry" method="Update" >}}

{{< proto/method service="UserRegistry" method="Delete" >}}

{{< proto/method service="UserRegistry" method="Restore" >}}

{{< proto/method service="UserRegistry" method="Purge" >}}

{{< proto/method service="UserRegistry" method="UpdatePassword" >}}

{{< proto/method service="UserRegistry" method="CreateTemporaryPassword" >}}

## The `EntityRegistrySearch` service

{{< proto/method service="EntityRegistrySearch" method="SearchUsers" >}}

## The `UserAccess` service

{{< proto/method service="UserAccess" method="ListRights" >}}

{{< proto/method service="UserAccess" method="CreateAPIKey" >}}

{{< proto/method service="UserAccess" method="ListAPIKeys" >}}

{{< proto/method service="UserAccess" method="GetAPIKey" >}}

{{< proto/method service="UserAccess" method="UpdateAPIKey" >}}

## The `UserInvitationRegistry` service

{{< proto/method service="UserInvitationRegistry" method="Send" >}}

{{< proto/method service="UserInvitationRegistry" method="List" >}}

{{< proto/method service="UserInvitationRegistry" method="Delete" >}}

## The `NotificationService` service

{{< proto/method service="NotificationService" method="Create" >}}

{{< proto/method service="NotificationService" method="List" >}}

{{< proto/method service="NotificationService" method="UpdateStatus" >}}

## Messages

{{< proto/message message="APIKey" >}}

{{< proto/message message="APIKeys" >}}

{{< proto/message message="ApplicationIdentifiers" >}}

{{< proto/message message="ClientIdentifiers" >}}

{{< proto/message message="CreateUserAPIKeyRequest" >}}

{{< proto/message message="ContactInfo" >}}

{{< proto/message message="CreateTemporaryPasswordRequest" >}}

{{< proto/message message="CreateNotificationResponse" >}}

{{< proto/message message="CreateNotificationRequest" >}}

{{< proto/message message="CreateUserRequest" >}}

{{< proto/message message="DeleteInvitationRequest" >}}

{{< proto/message message="EndDeviceIdentifiers" >}}

{{< proto/message message="EntityIdentifiers" >}}

{{< proto/message message="GatewayIdentifiers" >}}

{{< proto/message message="GetUserAPIKeyRequest" >}}

{{< proto/message message="GetUserRequest" >}}

{{< proto/message message="Invitation" >}}

{{< proto/message message="Invitations" >}}

{{< proto/message message="ListNotificationsRequest" >}}

{{< proto/message message="ListNotificationsResponse" >}}

{{< proto/message message="ListInvitationsRequest" >}}

{{< proto/message message="ListUserAPIKeysRequest" >}}

{{< proto/message message="ListUsersRequest" >}}

{{< proto/message message="Notification" >}}

{{< proto/message message="OrganizationIdentifiers" >}}

{{< proto/message message="Picture" >}}

{{< proto/message message="Picture.Embedded" >}}

{{< proto/message message="Rights" >}}

{{< proto/message message="SearchUsersRequest" >}}

{{< proto/message message="SendInvitationRequest" >}}

{{< proto/message message="UpdateNotificationStatusRequest" >}}

{{< proto/message message="UpdateUserAPIKeyRequest" >}}

{{< proto/message message="UpdateUserPasswordRequest" >}}

{{< proto/message message="UpdateUserRequest" >}}

{{< proto/message message="User" >}}

{{< proto/message message="UserIdentifiers" >}}

{{< proto/message message="UserIdentifiers" >}}

{{< proto/message message="Users" >}}

## Enums

{{< proto/enum enum="ContactType" >}}

{{< proto/enum enum="ContactMethod" >}}

{{< proto/enum enum="NotificationStatus" >}}

{{< proto/enum enum="NotificationReceiver" >}}

{{< proto/enum enum="Right" >}}

{{< proto/enum enum="State" >}}

{{< api-refs >}}

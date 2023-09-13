---
title: "Troubleshooting"
description: ""
weight: 8
aliases: [/getting-started/troubleshooting]
---

This section provides help for common issues and frequently asked questions you may have when getting started with {{% tts %}}.

<!--more-->

If you encounter a bug, please [file an issue](https://github.com/TheThingsNetwork/lorawan-stack/issues/new/choose). If you have questions not covered here, please ask in [{{% tts %}} Forum]({{% forum-url %}}). To check the status of cloud services, see our [status page](https://status.thethings.industries/).

## How do I generate and authorize OAuth client keys?

See the [authentication reference]({{< ref "reference/api/authentication" >}}).

## How do I create and authorize new users?

See [user and organization management]({{< ref "/the-things-stack/management/user-management" >}}).

## Troubleshooting common errors in the Console

See [Troubleshooting Console]({{< ref "the-things-stack/interact/console/troubleshooting" >}}).

## Troubleshooting common CLI errors

See [Troubleshooting CLI]({{< ref "the-things-stack/interact/cli/troubleshooting" >}}).

## Troubleshooting common device errors

See [Troubleshooting Devices]({{< ref "/devices/troubleshooting" >}}).

## Troubleshooting common gateway errors

See [Troubleshooting Gateways]({{< ref "/gateways/troubleshooting" >}}).

## Tenant is not active

For [{{% tts %}} Cloud]({{< ref "/the-things-stack/cloud" >}}) customers, this error indicates that the payment is probably overdue. If you are experiencing payment issues, please contact your Account Manager directly for further assistance.

## How do I change the tenant ID of an existing tenant in {{% tts %}}?

It is not possible to change tenant IDs. You can only create a new tenant with a desired tenant ID, transfer entities from the old tenant to the new one and then delete the old tenant.

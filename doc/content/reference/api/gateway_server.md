---
title: "Gateway Server APIs"
description: ""
---

## The `Gs` service

{{< proto/method service="Gs" method="GetGatewayConnectionStats" >}}

{{< proto/method service="Gs" method="BatchGetGatewayConnectionStats" >}}

## The `GatewayConfigurator` service

{{< proto/method service="GatewayConfigurator" method="PullConfiguration" >}}

## The `GatewayConfigurationService` service

{{< proto/method service="GatewayConfigurationService" method="GetGatewayConfiguration" >}}

## Messages

{{< proto/message message="BatchGetGatewayConnectionStatsRequest" >}}

{{< proto/message message="BatchGetGatewayConnectionStatsResponse" >}}

{{< proto/message message="GatewayIdentifiers" >}}

{{< proto/message message="GetGatewayConfigurationRequest" >}}

{{< proto/message message="GetGatewayConfigurationResponse" >}}

{{< proto/message message="GatewayConnectionStats" >}}

{{< proto/message message="GatewayConnectionStats.RoundTripTimes" >}}

{{< proto/message message="GatewayConnectionStats.SubBand" >}}

{{< proto/message message="GatewayStatus" >}}

{{< proto/message message="GatewayRemoteAddress" >}}

{{< proto/message message="Location" >}}

{{< proto/message message="PullGatewayConfigurationRequest" >}}

## Enums

{{< proto/enum enum="LocationSource" >}}

{{< api-refs >}}

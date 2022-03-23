---
title: "Gateway Server APIs"
description: ""
---

## The `Gs` service

{{< proto/method service="Gs" method="GetGatewayConnectionStats" >}}

## The `GatewayConfigurator` service

{{< proto/method service="GatewayConfigurator" method="PullConfiguration" >}}

## Messages

{{< proto/message message="GatewayIdentifiers" >}}

{{< proto/message message="GatewayConnectionStats" >}}

{{< proto/message message="GatewayConnectionStats.RoundTripTimes" >}}

{{< proto/message message="GatewayConnectionStats.SubBand" >}}

{{< proto/message message="GatewayStatus" >}}

{{< proto/message message="Location" >}}

{{< proto/message message="PullGatewayConfigurationRequest" >}}

## Enums

{{< proto/enum enum="LocationSource" >}}

{{< api-refs >}}

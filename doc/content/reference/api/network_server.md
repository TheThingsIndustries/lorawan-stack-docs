---
title: "Network Server APIs"
description: ""
---

## The `Ns` service

{{< proto/method service="Ns" method="GenerateDevAddr" >}}

## The `NsAs` service

{{< proto/method service="NsAs" method="HandleUplink" >}}

## Messages

{{< proto/message message="ApplicationDownlink" >}}

{{< proto/message message="ApplicationDownlink.ClassBC" >}}

{{< proto/message message="ApplicationDownlink.ConfirmedRetry" >}}

{{< proto/message message="ApplicationDownlinkFailed" >}}

{{< proto/message message="ApplicationIdentifiers" >}}

{{< proto/message message="ApplicationInvalidatedDownlinks" >}}

{{< proto/message message="ApplicationJoinAccept" >}}

{{< proto/message message="ApplicationLocation" >}}

{{< proto/message message="ApplicationServiceData" >}}

{{< proto/message message="ApplicationUp" >}}

{{< proto/message message="ApplicationUplink" >}}

{{< proto/message message="ApplicationUplinkNormalized" >}}

{{< proto/message message="ClassBCGatewayIdentifiers" >}}

{{< proto/message message="DataRate" >}}

{{< proto/message message="GatewayIdentifiers" >}}

{{< proto/message message="GenerateDevAddrResponse" >}}

{{< proto/message message="EndDeviceIdentifiers" >}}

{{< proto/message message="EndDeviceVersionIdentifiers" >}}

{{< proto/message message="ErrorDetails" >}}

{{< proto/message message="FSKDataRate" >}}

{{< proto/message message="KeyEnvelope" >}}

{{< proto/message message="Location" >}}

{{< proto/message message="LoRaDataRate" >}}

{{< proto/message message="LRFHSSDataRate" >}}

{{< proto/message message="NetworkIdentifiers" >}}

{{< proto/message message="NsAsHandleUplinkRequest" >}}

{{< proto/message message="PacketBrokerMetadata" >}}

{{< proto/message message="PacketBrokerRouteHop" >}}

{{< proto/message message="RxMetadata" >}}

{{< proto/message message="TxSettings" >}}

{{< proto/message message="TxSettings.Downlink" >}}

## Enums

{{< proto/enum enum="DownlinkPathConstraint" >}}

{{< proto/enum enum="LocationSource" >}}

{{< proto/enum enum="TxSchedulePriority" >}}

{{< api-refs >}}

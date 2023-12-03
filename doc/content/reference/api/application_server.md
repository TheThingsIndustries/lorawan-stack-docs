---
title: "Application Server APIs"
description: ""
---

## The `As` service

{{< proto/method service="As" method="SetLink" >}}

{{< proto/method service="As" method="GetConfiguration" >}}

{{< proto/method service="As" method="GetLink" >}}

{{< proto/method service="As" method="GetLinkStats" >}}

{{< proto/method service="As" method="DeleteLink" >}}

## The `AppAs` service

{{< proto/method service="AppAs" method="DownlinkQueuePush" >}}

{{< proto/method service="AppAs" method="DownlinkQueueReplace" >}}

{{< proto/method service="AppAs" method="DownlinkQueueList" >}}

{{< proto/method service="AppAs" method="DecodeDownlink" >}}

{{< proto/method service="AppAs" method="DecodeUplink" >}}

{{< proto/method service="AppAs" method="EncodeDownlink" >}}

{{< proto/method service="AppAs" method="GetMQTTConnectionInfo" >}}

{{< proto/method service="AppAs" method="SimulateUplink" >}}

{{< proto/method service="AppAs" method="Subscribe" >}}

## The `AppJs` service

{{< proto/method service="AppJs" method="GetAppSKey" >}}

## The `AsJs` service

{{< proto/method service="AsJs" method="GetAppSKey" >}}

## The `AsNs` service

{{< proto/method service="AsNs" method="DownlinkQueueReplace" >}}

{{< proto/method service="AsNs" method="DownlinkQueuePush" >}}

{{< proto/method service="AsNs" method="DownlinkQueueList" >}}

## Messages

{{< proto/message message="ApplicationDownlink.ClassBC" >}}

{{< proto/message message="ApplicationDownlink.ConfirmedRetry" >}}

{{< proto/message message="ApplicationDownlink" >}}

{{< proto/message message="ApplicationDownlinkFailed" >}}

{{< proto/message message="ApplicationDownlinks" >}}

{{< proto/message message="ApplicationIdentifiers" >}}

{{< proto/message message="ApplicationInvalidatedDownlinks" >}}

{{< proto/message message="ApplicationJoinAccept" >}}

{{< proto/message message="ApplicationLink" >}}

{{< proto/message message="ApplicationLinkStats" >}}

{{< proto/message message="ApplicationLocation" >}}

{{< proto/message message="ApplicationServiceData" >}}

{{< proto/message message="ApplicationUp" >}}

{{< proto/message message="ApplicationUplink" >}}

{{< proto/message message="ApplicationUplinkNormalized" >}}

{{< proto/message message="ClassBCGatewayIdentifiers" >}}

{{< proto/message message="DataRate" >}}

{{< proto/message message="DecodeDownlinkRequest" >}}

{{< proto/message message="DecodeUplinkRequest" >}}

{{< proto/message message="DownlinkQueueRequest" >}}

{{< proto/message message="EncodeDownlinkRequest" >}}

{{< proto/message message="EndDeviceIdentifiers" >}}

{{< proto/message message="EndDeviceIdentifiersList" >}}

{{< proto/message message="EndDeviceVersionIdentifiers" >}}

{{< proto/message message="ErrorDetails" >}}

{{< proto/message message="FSKDataRate" >}}

{{< proto/message message="GetAsConfigurationRequest" >}}

{{< proto/message message="GatewayAntennaIdentifiers" >}}

{{< proto/message message="GatewayIdentifiers" >}}

{{< proto/message message="GetApplicationLinkRequest" >}}

{{< proto/message message="KeyEnvelope" >}}

{{< proto/message message="Location" >}}

{{< proto/message message="LoRaDataRate" >}}

{{< proto/message message="LRFHSSDataRate" >}}

{{< proto/message message="MessagePayloadFormatters" >}}

{{< proto/message message="NetworkIdentifiers" >}}

{{< proto/message message="PacketBrokerMetadata" >}}

{{< proto/message message="PacketBrokerRouteHop" >}}

{{< proto/message message="RelayMetadata" >}}

{{< proto/message message="RxMetadata" >}}

{{< proto/message message="SessionKeyRequest" >}}

{{< proto/message message="SetApplicationLinkRequest" >}}

{{< proto/message message="TxSettings" >}}

{{< proto/message message="TxSettings.Downlink" >}}

## Enums

{{< proto/enum enum="DownlinkPathConstraint" >}}

{{< proto/enum enum="LocationSource" >}}

{{< proto/enum enum="PayloadFormatter" >}}

{{< proto/enum enum="RelayWORChannel" >}}

{{< proto/enum enum="TxSchedulePriority" >}}

{{< api-refs >}}

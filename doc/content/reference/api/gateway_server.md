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

## The `GtwGs` service

{{< proto/method service="GtwGs" method="LinkGateway" >}}

{{< proto/method service="GtwGs" method="GetConcentratorConfig" >}}

{{< proto/method service="GtwGs" method="GetMQTTConnectionInfo" >}}

{{< proto/method service="GtwGs" method="GetMQTTV2ConnectionInfo" >}}

## The `GsNs` service

{{< proto/method service="GsNs" method="HandleUplink" >}}

{{< proto/method service="GsNs" method="ReportTxAcknowledgment" >}}

## Messages

{{< proto/message message="ApplicationIdentifiers" >}}

{{< proto/message message="BatchGetGatewayConnectionStatsRequest" >}}

{{< proto/message message="BatchGetGatewayConnectionStatsResponse" >}}

{{< proto/message message="CFList" >}}

{{< proto/message message="ConcentratorConfig" >}}

{{< proto/message message="ConcentratorConfig.Channel" >}}

{{< proto/message message="ConcentratorConfig.LoRaStandardChannel" >}}

{{< proto/message message="ConcentratorConfig.FSKChannel" >}}

{{< proto/message message="ConcentratorConfig.LBTConfiguration" >}}

{{< proto/message message="DownlinkPath" >}}

{{< proto/message message="DataRate" >}}

{{< proto/message message="DLSettings" >}}

{{< proto/message message="DownlinkMessage" >}}

{{< proto/message message="EndDeviceIdentifiers" >}}

{{< proto/message message="FHDR" >}}

{{< proto/message message="FCtrl" >}}

{{< proto/message message="FSKDataRate" >}}

{{< proto/message message="GatewayAntennaIdentifiers" >}}

{{< proto/message message="GatewayIdentifiers" >}}

{{< proto/message message="GetGatewayConfigurationRequest" >}}

{{< proto/message message="GetGatewayConfigurationResponse" >}}

{{< proto/message message="GatewayConnectionStats" >}}

{{< proto/message message="GatewayConnectionStats.RoundTripTimes" >}}

{{< proto/message message="GatewayConnectionStats.SubBand" >}}

{{< proto/message message="GatewayDown" >}}

{{< proto/message message="GatewayStatus" >}}

{{< proto/message message="GatewayRadio" >}}

{{< proto/message message="GatewayRadio.TxConfiguration" >}}

{{< proto/message message="GatewayRemoteAddress" >}}

{{< proto/message message="GatewayTxAcknowledgment" >}}

{{< proto/message message="GatewayUp" >}}

{{< proto/message message="JoinAcceptPayload" >}}

{{< proto/message message="JoinRequestPayload" >}}

{{< proto/message message="Location" >}}

{{< proto/message message="LoRaDataRate" >}}

{{< proto/message message="LRFHSSDataRate" >}}

{{< proto/message message="MACPayload" >}}

{{< proto/message message="Message" >}}

{{< proto/message message="MHDR" >}}

{{< proto/message message="MQTTConnectionInfo" >}}

{{< proto/message message="PullGatewayConfigurationRequest" >}}

{{< proto/message message="PacketBrokerMetadata" >}}

{{< proto/message message="PacketBrokerRouteHop" >}}

{{< proto/message message="RejoinRequestPayload" >}}

{{< proto/message message="RelayMetadata" >}}

{{< proto/message message="RxMetadata" >}}

{{< proto/message message="UplinkMessage" >}}

{{< proto/message message="TxAcknowledgment" >}}

{{< proto/message message="TxSettings.Downlink" >}}

{{< proto/message message="TxRequest" >}}

{{< proto/message message="TxRequest" >}}

{{< proto/message message="TxSettings" >}}

## Enums

{{< proto/enum enum="Class" >}}

{{< proto/enum enum="CFListType" >}}

{{< proto/enum enum="DataRateIndex" >}}

{{< proto/enum enum="DataRateOffset" >}}

{{< proto/enum enum="DownlinkPathConstraint" >}}

{{< proto/enum enum="LocationSource" >}}

{{< proto/enum enum="Major" >}}

{{< proto/enum enum="MType" >}}

{{< proto/enum enum="RejoinRequestType" >}}

{{< proto/enum enum="RelayWORChannel" >}}

{{< proto/enum enum="RxDelay" >}}

{{< proto/enum enum="TxAcknowledgment.Result" >}}

{{< proto/enum enum="TxSchedulePriority" >}}

{{< api-refs >}}

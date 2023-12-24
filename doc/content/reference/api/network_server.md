---
title: "Network Server APIs"
description: ""
---

## The `Ns` service

{{< proto/method service="Ns" method="GenerateDevAddr" >}}

{{< proto/method service="Ns" method="GetDefaultMACSettings" >}}

{{< proto/method service="Ns" method="GetNetID" >}}

{{< proto/method service="Ns" method="GetDeviceAddressPrefixes" >}}

## The `NsAs` service

{{< proto/method service="NsAs" method="HandleUplink" >}}

## The `NsGs` service

{{< proto/method service="NsGs" method="ScheduleDownlink" >}}

## The `NsJs` service

{{< proto/method service="NsJs" method="HandleJoin" >}}

{{< proto/method service="NsJs" method="GetNwkSKeys" >}}

## The `NsPba` service

{{< proto/method service="NsPba" method="PublishDownlink" >}}

## Messages

{{< proto/message message="ADRAckDelayExponentValue" >}}

{{< proto/message message="ADRAckLimitExponentValue" >}}

{{< proto/message message="ADRSettings" >}}

{{< proto/message message="ADRSettings.StaticMode" >}}

{{< proto/message message="ADRSettings.DynamicMode" >}}

{{< proto/message message="ADRSettings.DynamicMode.ChannelSteeringSettings" >}}

{{< proto/message message="ADRSettings.DynamicMode.ChannelSteeringSettings.LoRaNarrowMode" >}}

{{< proto/message message="ADRSettings.DynamicMode.ChannelSteeringSettings.DisabledMode" >}}

{{< proto/message message="ADRSettings.DisabledMode" >}}

{{< proto/message message="AggregatedDutyCycleValue" >}}

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

{{< proto/message message="BoolValue" >}}

{{< proto/message message="ClassBCGatewayIdentifiers" >}}

{{< proto/message message="CFList" >}}

{{< proto/message message="DataRate" >}}

{{< proto/message message="DataRateIndexValue" >}}

{{< proto/message message="DataRateOffsetValue" >}}

{{< proto/message message="DeviceEIRPValue" >}}

{{< proto/message message="DLSettings" >}}

{{< proto/message message="DownlinkMessage" >}}

{{< proto/message message="DownlinkPath" >}}

{{< proto/message message="GatewayAntennaIdentifiers" >}}

{{< proto/message message="GatewayIdentifiers" >}}

{{< proto/message message="GenerateDevAddrResponse" >}}

{{< proto/message message="GetDefaultMACSettingsRequest" >}}

{{< proto/message message="GetDeviceAdressPrefixesResponse" >}}

{{< proto/message message="GetNetIDResponse" >}}

{{< proto/message message="EndDeviceIdentifiers" >}}

{{< proto/message message="EndDeviceVersionIdentifiers" >}}

{{< proto/message message="ErrorDetails" >}}

{{< proto/message message="FCtrl" >}}

{{< proto/message message="FHDR" >}}

{{< proto/message message="FrequencyValue" >}}

{{< proto/message message="FSKDataRate" >}}

{{< proto/message message="JoinAcceptPayload" >}}

{{< proto/message message="JoinRequest" >}}

{{< proto/message message="JoinRequestPayload" >}}

{{< proto/message message="JoinResponse" >}}

{{< proto/message message="KeyEnvelope" >}}

{{< proto/message message="Location" >}}

{{< proto/message message="LoRaDataRate" >}}

{{< proto/message message="LRFHSSDataRate" >}}

{{< proto/message message="MACPayload" >}}

{{< proto/message message="MACSettings" >}}

{{< proto/message message="Message" >}}

{{< proto/message message="MHDR" >}}

{{< proto/message message="NetworkIdentifiers" >}}

{{< proto/message message="NsAsHandleUplinkRequest" >}}

{{< proto/message message="NwkSKeysResponse" >}}

{{< proto/message message="PacketBrokerMetadata" >}}

{{< proto/message message="PacketBrokerRouteHop" >}}

{{< proto/message message="PingSlotPeriodValue" >}}

{{< proto/message message="RejoinRequestPayload" >}}

{{< proto/message message="RelayMetadata" >}}

{{< proto/message message="RelayEndDeviceAlwaysMode" >}}

{{< proto/message message="RelayEndDeviceDynamicMode" >}}

{{< proto/message message="RelayEndDeviceControlledMode" >}}

{{< proto/message message="RelaySecondChannel" >}}

{{< proto/message message="RelayUplinkForwardLimits" >}}

{{< proto/message message="RelayForwardLimits" >}}

{{< proto/message message="RelayParameters" >}}

{{< proto/message message="RxDelayValue" >}}

{{< proto/message message="RxMetadata" >}}

{{< proto/message message="ServedRelayParameters" >}}

{{< proto/message message="ServingRelayParameters" >}}

{{< proto/message message="RelayUplinkForwardingRule" >}}

{{< proto/message message="ServingRelayForwardingLimits" >}}

{{< proto/message message="SessionKeyRequest" >}}

{{< proto/message message="SessionKeys" >}}

{{< proto/message message="ScheduleDownlinkResponse" >}}

{{< proto/message message="TxRequest" >}}

{{< proto/message message="TxSettings" >}}

{{< proto/message message="TxSettings.Downlink" >}}

{{< proto/message message="ZeroableFrequencyValue" >}}

## Enums

{{< proto/enum enum="ADRAckDelayExponent" >}}

{{< proto/enum enum="ADRAckLimitExponent" >}}

{{< proto/enum enum="AggregatedDutyCycle" >}}

{{< proto/enum enum="Class" >}}

{{< proto/enum enum="CFListType" >}}

{{< proto/enum enum="DataRateIndex" >}}

{{< proto/enum enum="DataRateOffset" >}}

{{< proto/enum enum="DeviceEIRP" >}}

{{< proto/enum enum="DownlinkPathConstraint" >}}

{{< proto/enum enum="LocationSource" >}}

{{< proto/enum enum="MACVersion" >}}

{{< proto/enum enum="Major" >}}

{{< proto/enum enum="MType" >}}

{{< proto/enum enum="PHYVersion" >}}

{{< proto/enum enum="PingSlotPeriod" >}}

{{< proto/enum enum="RejoinRequestType" >}}

{{< proto/enum enum="RelayCADPeriodicity" >}}

{{< proto/enum enum="RelayResetLimitCounter" >}}

{{< proto/enum enum="RelayLimitBucketSize" >}}

{{< proto/enum enum="RelaySecondChAckOffset" >}}

{{< proto/enum enum="RelaySmartEnableLevel" >}}

{{< proto/enum enum="RelayWORChannel" >}}

{{< proto/enum enum="RxDelay" >}}

{{< proto/enum enum="TxSchedulePriority" >}}

{{< api-refs >}}

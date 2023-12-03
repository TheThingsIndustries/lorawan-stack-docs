---
title: "Packet Broker APIs"
description: ""
---

## The `Pba` service

{{< proto/method service="Pba" method="DeleteHomeNetworkRoutingPolicy" >}}

{{< proto/method service="Pba" method="DeleteHomeNetworkDefaultRoutingPolicy" >}}

{{< proto/method service="Pba" method="DeleteHomeNetworkDefaultGatewayVisibility" >}}

{{< proto/method service="Pba" method="Deregister" >}}

{{< proto/method service="Pba" method="GetInfo" >}}

{{< proto/method service="Pba" method="GetHomeNetworkRoutingPolicy" >}}

{{< proto/method service="Pba" method="GetHomeNetworkDefaultRoutingPolicy" >}}

{{< proto/method service="Pba" method="GetHomeNetworkDefaultGatewayVisibility" >}}

{{< proto/method service="Pba" method="ListNetworks" >}}

{{< proto/method service="Pba" method="ListHomeNetworks" >}}

{{< proto/method service="Pba" method="ListForwarderRoutingPolicies" >}}

{{< proto/method service="Pba" method="ListHomeNetworkRoutingPolicies" >}}

{{< proto/method service="Pba" method="Register" >}}

{{< proto/method service="Pba" method="SetHomeNetworkRoutingPolicy" >}}

{{< proto/method service="Pba" method="SetHomeNetworkDefaultRoutingPolicy" >}}

{{< proto/method service="Pba" method="SetHomeNetworkDefaultGatewayVisibility" >}}

## The `GsPba` service

{{< proto/method service="GsPba" method="PublishUplink" >}}

{{< proto/method service="GsPba" method="UpdateGateway" >}}

## Messages

{{< proto/message message="CFList" >}}

{{< proto/message message="ContactInfo" >}}

{{< proto/message message="DataRate" >}}

{{< proto/message message="DLSettings" >}}

{{< proto/message message="GatewayAntenna" >}}

{{< proto/message message="GatewayIdentifiers" >}}

{{< proto/message message="GatewayUplinkMessage" >}}

{{< proto/message message="JoinAcceptPayload" >}}

{{< proto/message message="JoinRequestPayload" >}}

{{< proto/message message="Location" >}}

{{< proto/message message="ListPacketBrokerNetworksRequest" >}}

{{< proto/message message="ListPacketBrokerHomeNetworksRequest" >}}

{{< proto/message message="ListForwarderRoutingPoliciesRequest" >}}

{{< proto/message message="ListHomeNetworkRoutingPoliciesRequest" >}}

{{< proto/message message="FCtrl" >}}

{{< proto/message message="FSKDataRate" >}}

{{< proto/message message="FHDR" >}}

{{< proto/message message="LoRaDataRate" >}}

{{< proto/message message="LRFHSSDataRate" >}}

{{< proto/message message="MACPayload" >}}

{{< proto/message message="Message" >}}

{{< proto/message message="MHDR" >}}

{{< proto/message message="OrganizationOrUserIdentifiers" >}}

{{< proto/message message="OrganizationIdentifiers" >}}

{{< proto/message message="PacketBrokerGateway" >}}

{{< proto/message message="PacketBrokerGateway" >}}

{{< proto/message message="PacketBrokerGateway.GatewayIdentifiers" >}}

{{< proto/message message="PacketBrokerRegisterRequest" >}}

{{< proto/message message="PacketBrokerNetworkIdentifier" >}}

{{< proto/message message="PacketBrokerMetadata" >}}

{{< proto/message message="PacketBrokerRouteHop" >}}

{{< proto/message message="PacketBrokerRoutingPolicyUplink" >}}

{{< proto/message message="PacketBrokerRoutingPolicyDownlink" >}}

{{< proto/message message="PacketBrokerGatewayVisibility" >}}

{{< proto/message message="RejoinRequestPayload" >}}

{{< proto/message message="RelayMetadata" >}}

{{< proto/message message="RxMetadata" >}}

{{< proto/message message="SetPacketBrokerRoutingPolicyRequest" >}}

{{< proto/message message="SetPacketBrokerDefaultRoutingPolicyRequest" >}}

{{< proto/message message="SetPacketBrokerDefaultGatewayVisibilityRequest" >}}

{{< proto/message message="TxSettings" >}}

{{< proto/message message="TxSettings.Downlink" >}}

{{< proto/message message="UplinkMessage" >}}

{{< proto/message message="UpdatePacketBrokerGatewayRequest" >}}

{{< proto/message message="UpdatePacketBrokerGatewayResponse" >}}

{{< proto/message message="UserIdentifiers" >}}

## Enums 

{{< proto/enum enum="CFListType" >}}

{{< proto/enum enum="ContactType" >}}

{{< proto/enum enum="ContactMethod" >}}

{{< proto/enum enum="DataRateOffset" >}}

{{< proto/enum enum="DataRateIndex" >}}

{{< proto/enum enum="DownlinkPathConstraint" >}}

{{< proto/enum enum="GatewayAntennaPlacement" >}}

{{< proto/enum enum="LocationSource" >}}

{{< proto/enum enum="Major" >}}

{{< proto/enum enum="MType" >}}

{{< proto/enum enum="Right" >}}

{{< proto/enum enum="RejoinRequestType" >}}

{{< proto/enum enum="RelayWORChannel" >}}

{{< proto/enum enum="RxDelay" >}}

{{< api-refs >}}

---
title: "End Device APIs"
description: ""
---

End devices are registered in multiple registries. The Identity Server has a registry with end device metadata, the Network Server's registry contains the MAC configuration, MAC state and network session keys, the Application Server keeps payload formatters and application session keys, the Join Server keeps the root keys.

When registering end devices, we recommend registering them in the following order:

- `EndDeviceRegistry.Create` (Identity Server)
- `JsEndDeviceRegistry.Set` (Join Server, only for OTAA devices)
- `NsEndDeviceRegistry.Set` (Network Server)
- `AsEndDeviceRegistry.Set` (Application Server)

When deleting end devices, we recommend deleting them in the reverse order

## The `EndDeviceRegistry` service

The Identity Server's `EndDeviceRegistry` is the first service, where end device is registered. The following [EndDevice fields](#message:EndDevice) are registered in this registry:

- `ids` (with subfields)
- `name`
- `description`
- `attributes`
- `version_ids` (with subfields)
- `network_server_address`
- `application_server_address`
- `join_server_address` (only for OTAA devices)
- `service_profile_id`
- `locations`
- `picture`

{{< proto/method service="EndDeviceRegistry" method="Create" >}}

{{< proto/method service="EndDeviceRegistry" method="Get" >}}

{{< proto/method service="EndDeviceRegistry" method="List" >}}

{{< proto/method service="EndDeviceRegistry" method="Update" >}}

{{< proto/method service="EndDeviceRegistry" method="Delete" >}}

## The `JsEndDeviceRegistry` service

OTAA devices are registered in the Join Server's `JsEndDeviceRegistry`. The following [EndDevice fields](#message:EndDevice) are registered in this registry:

- `ids` (with subfields)
- `provisioner_id` (when provisioning with secure elements)
- `provisioning_data` (when provisioning with secure elements)
- `resets_join_nonces`
- `root_keys`:
  - `root_key_id`
  - `app_key`
  - `nwk_key`
- `net_id`
- `network_server_address`
- `network_server_kek_label`
- `application_server_address`
- `application_server_id`
- `application_server_kek_label`
- `claim_authentication_code` (when using [end device claiming]({{< relref "end_device_claiming.md" >}}))

See the [EndDevice message](#message:EndDevice) and its sub-messages for additional fields that can be read from the Join Server's `JsEndDeviceRegistry`.

{{< proto/method service="JsEndDeviceRegistry" method="Set" >}}

{{< proto/method service="JsEndDeviceRegistry" method="Get" >}}

{{< proto/method service="JsEndDeviceRegistry" method="Delete" >}}

## The `NsEndDeviceRegistry` service

The following [EndDevice fields](#message:EndDevice) are registered in the Network Server's `NsEndDeviceRegistry`:

- `ids` (with subfields)
- `frequency_plan_id`
- `lorawan_phy_version`
- `lorawan_version`
- `mac_settings` (with subfields)
- `mac_state` (with subfields)
- `supports_join`
- `multicast`
- `supports_class_b`
- `supports_class_c`
- `session.dev_addr`
- `session.keys`:
  - `session_key_id`
  - `f_nwk_s_int_key`
  - `s_nwk_s_int_key`
  - `nwk_s_enc_key`

See the [EndDevice message](#message:EndDevice) and its sub-messages for additional fields that can be read from the Network Server's `NsEndDeviceRegistry`.

{{< proto/method service="NsEndDeviceRegistry" method="Set" >}}

{{< proto/method service="NsEndDeviceRegistry" method="Get" >}}

{{< proto/method service="NsEndDeviceRegistry" method="Delete" >}}

## The `AsEndDeviceRegistry` service

The following [EndDevice fields](#message:EndDevice) are registered in the Application Server's `AsEndDeviceRegistry`:

- `ids` (with subfields)
- `formatters`:
  - `up_formatter`
  - `up_formatter_parameter`
  - `down_formatter`
  - `down_formatter_parameter`
- `session.dev_addr`
- `session.keys`:
  - `session_key_id`
  - `app_s_key`

See the [EndDevice message](#message:EndDevice) and its sub-messages for additional fields that can be read from the Application Server's `AsEndDeviceRegistry`.

{{< proto/method service="AsEndDeviceRegistry" method="Set" >}}

{{< proto/method service="AsEndDeviceRegistry" method="Get" >}}

{{< proto/method service="AsEndDeviceRegistry" method="Delete" >}}

## Messages

{{< proto/message message="ApplicationIdentifiers" >}}

{{< proto/message message="ApplicationDownlink" >}}

{{< proto/message message="ApplicationDownlink.ClassBC" >}}

{{< proto/message message="ADRAckLimitExponentValue" >}}

{{< proto/message message="ADRAckDelayExponentValue" >}}

{{< proto/message message="AggregatedDutyCycleValue" >}}

{{< proto/message message="BoolValue" >}}

{{< proto/message message="CreateEndDeviceRequest" >}}

{{< proto/message message="CFList" >}}

{{< proto/message message="DataRate" >}}

{{< proto/message message="DataRateIndexValue" >}}

{{< proto/message message="DataRateOffsetValue" >}}

{{< proto/message message="DeviceEIRPValue" >}}

{{< proto/message message="DLSettings" >}}

{{< proto/message message="DownlinkMessage" >}}

{{< proto/message message="DownlinkPath" >}}

{{< proto/message message="EndDevice" >}}

{{< proto/message message="EndDeviceAuthenticationCode" >}}

{{< proto/message message="EndDeviceIdentifiers" >}}

{{< proto/message message="EndDevices" >}}

{{< proto/message message="EndDeviceVersionIdentifiers" >}}

{{< proto/message message="FrequencyValue" >}}

{{< proto/message message="FHDR" >}}

{{< proto/message message="FCtrl" >}}

{{< proto/message message="FSKDataRate" >}}

{{< proto/message message="GatewayClaimAuthenticationCode" >}}

{{< proto/message message="GatewayIdentifiers" >}}

{{< proto/message message="GatewayAntennaIdentifiers" >}}

{{< proto/message message="GetEndDeviceRequest" >}}

{{< proto/message message="JoinRequestPayload" >}}

{{< proto/message message="JoinAcceptPayload" >}}

{{< proto/message message="KeyEnvelope" >}}

{{< proto/message message="ListEndDevicesRequest" >}}

{{< proto/message message="Location" >}}

{{< proto/message message="LoRaDataRate" >}}

{{< proto/message message="LRFHSSDataRate" >}}

{{< proto/message message="MACCommand" >}}

{{< proto/message message="MACCommand.ResetInd" >}}

{{< proto/message message="MACCommand.ResetConf" >}}

{{< proto/message message="MACCommand.LinkCheckAns" >}}

{{< proto/message message="MACCommand.LinkADRReq" >}}

{{< proto/message message="MACCommand.LinkADRAns" >}}

{{< proto/message message="MACCommand.DutyCycleReq" >}}

{{< proto/message message="MACCommand.RxParamSetupReq" >}}

{{< proto/message message="MACCommand.RxParamSetupAns" >}}

{{< proto/message message="MACCommand.DevStatusAns" >}}

{{< proto/message message="MACCommand.NewChannelReq" >}}

{{< proto/message message="MACCommand.NewChannelAns" >}}

{{< proto/message message="MACCommand.DLChannelReq" >}}

{{< proto/message message="MACCommand.DLChannelAns" >}}

{{< proto/message message="MACCommand.RxTimingSetupReq" >}}

{{< proto/message message="MACCommand.TxParamSetupReq" >}}

{{< proto/message message="MACCommand.RekeyInd" >}}

{{< proto/message message="MACCommand.RekeyConf" >}}

{{< proto/message message="MACCommand.ADRParamSetupReq" >}}

{{< proto/message message="MACCommand.DeviceTimeAns" >}}

{{< proto/message message="MACCommand.ForceRejoinReq" >}}

{{< proto/message message="MACCommand.RejoinParamSetupReq" >}}

{{< proto/message message="MACCommand.RejoinParamSetupAns" >}}

{{< proto/message message="MACCommand.PingSlotInfoReq" >}}

{{< proto/message message="MACCommand.PingSlotChannelReq" >}}

{{< proto/message message="MACCommand.PingSlotChannelAns" >}}

{{< proto/message message="MACCommand.BeaconTimingAns" >}}

{{< proto/message message="MACCommand.BeaconFreqReq" >}}

{{< proto/message message="MACCommand.BeaconFreqAns" >}}

{{< proto/message message="MACCommand.DeviceModeInd" >}}

{{< proto/message message="MACCommand.DeviceModeConf" >}}

{{< proto/message message="MACPayload" >}}

{{< proto/message message="MACParameters" >}}

{{< proto/message message="MACParameters.Channel" >}}

{{< proto/message message="MACSettings" >}}

{{< proto/message message="MACState" >}}

{{< proto/message message="MACState.JoinAccept" >}}

{{< proto/message message="MACState.JoinRequest" >}}

{{< proto/message message="Message" >}}

{{< proto/message message="MHDR" >}}

{{< proto/message message="MessagePayloadFormatters" >}}

{{< proto/message message="PacketBrokerMetadata" >}}

{{< proto/message message="PacketBrokerRouteHop" >}}

{{< proto/message message="Picture" >}}

{{< proto/message message="Picture.Embedded" >}}

{{< proto/message message="PingSlotPeriodValue" >}}

{{< proto/message message="RejoinRequestPayload" >}}

{{< proto/message message="RootKeys" >}}

{{< proto/message message="RxDelayValue" >}}

{{< proto/message message="RxMetadata" >}}

{{< proto/message message="Secret" >}}

{{< proto/message message="Session" >}}

{{< proto/message message="SessionKeys" >}}

{{< proto/message message="SetEndDeviceRequest" >}}

{{< proto/message message="TxRequest" >}}

{{< proto/message message="TxSettings" >}}

{{< proto/message message="TxSettings.Downlink" >}}

{{< proto/message message="UpdateEndDeviceRequest" >}}

{{< proto/message message="UplinkMessage" >}}

## Enums

{{< proto/enum enum="ADRAckLimitExponent" >}}

{{< proto/enum enum="ADRAckDelayExponent" >}}

{{< proto/enum enum="AggregatedDutyCycle" >}}

{{< proto/enum enum="Class" >}}

{{< proto/enum enum="CFListType" >}}

{{< proto/enum enum="DataRateIndex" >}}

{{< proto/enum enum="DataRateOffset" >}}

{{< proto/enum enum="DeviceEIRP" >}}

{{< proto/enum enum="DownlinkPathConstraint" >}}

{{< proto/enum enum="LocationSource" >}}

{{< proto/enum enum="MACVersion" >}}

{{< proto/enum enum="MACCommandIdentifier" >}}

{{< proto/enum enum="Major" >}}

{{< proto/enum enum="MType" >}}

{{< proto/enum enum="Minor" >}}

{{< proto/enum enum="PayloadFormatter" >}}

{{< proto/enum enum="PingSlotPeriod" >}}

{{< proto/enum enum="PHYVersion" >}}

{{< proto/enum enum="PowerState" >}}

{{< proto/enum enum="RxDelay" >}}

{{< proto/enum enum="RejoinTimeExponent" >}}

{{< proto/enum enum="RejoinCountExponent" >}}

{{< proto/enum enum="RejoinRequestType" >}}

{{< proto/enum enum="RejoinPeriodExponent" >}}

{{< proto/enum enum="TxSchedulePriority" >}}

{{< api-refs >}}

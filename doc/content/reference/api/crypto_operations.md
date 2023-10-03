---
title: "Crypto Operations APIs"
description: ""
---

## The `NetworkCryptoService` service

{{< proto/method service="NetworkCryptoService" method="JoinRequestMIC" >}}

{{< proto/method service="NetworkCryptoService" method="JoinAcceptMIC" >}}

{{< proto/method service="NetworkCryptoService" method="EncryptJoinAccept" >}}

{{< proto/method service="NetworkCryptoService" method="EncryptRejoinAccept" >}}

{{< proto/method service="NetworkCryptoService" method="DeriveNwkSKeys" >}}

{{< proto/method service="NetworkCryptoService" method="GetNwkKey" >}}

## Messages

{{< proto/message message="ApplicationIdentifiers" >}}

{{< proto/message message="CryptoServicePayloadRequest" >}}

{{< proto/message message="CryptoServicePayloadResponse" >}}

{{< proto/message message="DeriveSessionKeysRequest" >}}

{{< proto/message message="EndDeviceIdentifiers" >}}

{{< proto/message message="JoinAcceptMICRequest" >}}

{{< proto/message message="NwkSKeysResponse" >}}

{{< proto/message message="GetRootKeysRequest" >}}

{{< proto/message message="KeyEnvelope" >}}

## Enums 

{{< proto/enum enum="JoinRequestType" >}}

{{< proto/enum enum="MACVersion" >}}

{{< api-refs >}}

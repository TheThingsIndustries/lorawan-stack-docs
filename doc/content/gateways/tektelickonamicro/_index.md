---
title: "Tektelic Kona Micro IoT LoRaWAN Gateway"
description: ""
---
 
This page guides you to connect Tektelic Kona Micro IoT LoRaWAN Gateway to {{% tts %}}.

<!--more-->

Tektelic Kona Micro IoT LoRaWAN Gateway is an 8 channel LoRaWAN gateway, whose technical specifications can be found in [the official documentation](https://tektelic.com/catalog/kona-micro-iot-gateway).

{{< figure src="kona-micro.jpg" alt="Tektelic Kona Micro IoT LoRaWAN Gateway" class="float plain" >}}

## Prerequisites

1. User account on {{% tts %}} with rights to create Gateways.
2. Tektelic Kona Micro IoT LoRaWAN Gateway with BSP version 3.x.x, connected to the Internet via ethernet.

## Registration

Create a gateway by following the instructions for [Adding Gateways]({{< ref "/gateways/adding-gateways" >}}). The **EUI** of the gateway can be found on the back panel of the gateway under the field **GW ID**.

## Connecting the Gateway to {{% tts %}}

The Tektelic Kona Micro supports {{% lbs %}} and the legacy UDP packet forwarder. {{% lbs %}} is more secure and supports configuration of custom channel plans, amongst other improvements. Please follow instructions for [connecting the Tektelic Kona Micro with {{% lbs %}}]({{< relref "lbs" >}}).

If for some reason {{% lbs %}} is not available to you, instructions for connecting with the legacy packet forwarder are [here]({{< relref "udp" >}}).

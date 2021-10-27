---
title: "Adaptive Data Rate"
description: ""
---

Adaptive Data Rate (ADR) is a mechanism for optimizing data rates, airtime and energy consumption in the network.

This reference documents how ADR is implemented in {{% tts %}}.

<!--more-->

## How ADR Works

The ADR mechanism controls the following transmission parameters of an end device:

- Spreading factor
- Bandwidth
- Transmission power

See [The Things Network LoRaWAN documentation](https://www.thethingsnetwork.org/docs/lorawan/adaptive-data-rate/) for a general description of ADR. See the [Spreading Factors](https://www.thethingsnetwork.org/docs/lorawan/spreading-factors/) section to learn how spreading factor influence data rate, range and battery life.

## The Things Stack ADR Algorithm

This section describes {{% tts %}} ADR implementation in plain english, with links to the relevant lines of source code in our open source [LoRaWAN Stack Repository](https://github.com/TheThingsNetwork/lorawan-stack).

{{% tts %}} ADR implementation looks at the signal-to-noise ratio (SNR) to determine the Data Rate and Tx Power, and looks at frame counters to determine packet loss, and set the number of re-transmissions accordingly.

The implementation is based on Semtech's recommended algorithm described in [this document](https://www.thethingsnetwork.org/forum/uploads/default/original/2X/7/7480e044aa93a54a910dab8ef0adfb5f515d14a1.pdf):

1. Determine [the maximum SNR over recent transmissions](https://github.com/TheThingsNetwork/lorawan-stack/blob/5a816e8171f993db9659566286d45725698f032e/pkg/networkserver/mac/adr.go#L218)
2. Determine [the minimum SNR to demodulate an uplink given the current parameters](https://github.com/TheThingsNetwork/lorawan-stack/blob/5a816e8171f993db9659566286d45725698f032e/pkg/networkserver/mac/adr.go#L232)
3. Calculate [the margin to further optimize the data rate](https://github.com/TheThingsNetwork/lorawan-stack/blob/5a816e8171f993db9659566286d45725698f032e/pkg/networkserver/mac/adr.go#L236)
  - Part of this is configurable per device (if you use the CLI)
  - If less measurements (uplinks) are available than necessary, [include a safety margin](https://github.com/TheThingsNetwork/lorawan-stack/blob/5a816e8171f993db9659566286d45725698f032e/pkg/networkserver/mac/adr.go#L238-L240)
4. [Increase the data rate as long as there's enough margin](https://github.com/TheThingsNetwork/lorawan-stack/blob/5a816e8171f993db9659566286d45725698f032e/pkg/networkserver/mac/adr.go#L251-L262)
5. If there's still margin after reaching the maximum data rate, [decrease the transmit power](https://github.com/TheThingsNetwork/lorawan-stack/blob/5a816e8171f993db9659566286d45725698f032e/pkg/networkserver/mac/adr.go#L273-L281)
6. Depending on packet loss, [increase the number of retransmissions](https://github.com/TheThingsNetwork/lorawan-stack/blob/5a816e8171f993db9659566286d45725698f032e/pkg/networkserver/mac/adr.go#L288-L296)

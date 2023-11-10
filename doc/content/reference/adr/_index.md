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

See [The Things Network LoRaWAN documentation](https://www.thethingsnetwork.org/docs/lorawan/adaptive-data-rate/) for a general description of ADR. See the [Spreading Factors](https://www.thethingsnetwork.org/docs/lorawan/spreading-factors/) section to learn how spreading factor influences data rate, range and battery life.

{{% tts %}} supports two ADR modes explained below - dynamic and static.

{{< note >}} The `use_adr` and `adr_margin` parameters that were previously used to control {{% tts %}} ADR usage are now deprecated in favor of making ADR algorithm more configurable. The usage of new parameters to control ADR is explained below. To proceed with using below mentioned parameters, make sure to disable old ones using the `--unset use-adr,adr-margin` flag. {{</ note >}}

## Dynamic Mode

Dynamic mode represents a default {{% tts %}} ADR mechanism. In this mode, {{% tts %}} calculates ADR parameters (data rate, Tx power, number of transmissions per uplink frame) values, but a user can configure the margin and min/max values for the mentioned parameters.

Before configuring this mode, it's useful to know how it actually works, so the default {{% tts %}} ADR algorithm is explained below.

### {{% tts %}} ADR Algorithm

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

### Enable and Configure Dynamic Mode

To turn on {{% tts %}} ADR using the [CLI]({{< ref "/the-things-stack/interact/cli" >}}):

```bash
ttn-lw-cli end-devices set --application-id <app-id> --device-id <dev-id> --mac-settings.adr.mode.dynamic
```

Values of parameters like data rate index, transmission power index and number of transmissions are calculated by the ADR algorithm, but their minimum and maximum values can be set by the user as follows:

```bash
ttn-lw-cli end-devices set --application-id <app-id> --device-id <dev-id> --mac-settings.adr.mode.dynamic --mac-settings.adr.mode.dynamic.max-data-rate-index <data_rate> --mac-settings.adr.mode.dynamic.max tx-power-index <power_index> --mac-settings.adr.mode.dynamic.max-nb-trans <nb_trans> --mac-settings.adr.mode.dynamic.min-data-rate-index <data_rate> --mac-settings.adr.mode.dynamic.min tx-power-index <power_index> --mac-settings.adr.mode.dynamic.min-nb-trans <nb_trans>
```

> Please note that `data_rate` in above and following commands is data rate index which can take values from 0-6 (referring to data rate sets DR0-DR6). For example, data rate index 0 implies using SF12 in EU868 freqeuncy plan, as explained [here](https://www.thethingsnetwork.org/docs/lorawan/regional-parameters/#eu863-870-data-rates). You can check out detailed info for your frequency plan in the [Regional Parameters specification]({{< ref "/the-things-stack/concepts/spec-regional-parameters" >}}).

### Configure ADR Margin

{{% tts %}} Network Server calculates the ADR margin to optimize the data rate and Tx power.

Margin is the difference between the gateway's maximum measured SNR and the minimal SNR required to demodulate a message on a given data rate. Margin is used to determine how much data rate can be increased, or how much transmit power can be lowered. Increasing the ADR margin reduces the data rate, leading to a reduced overall network capacity, but also to a lower packet loss rate in lightly loaded networks. Decreasing the ADR margin leads to a data rate increase, network capacity enhancement, but also causes higher packet loss rate.

{{< note >}} We recommend to test the process described below on test devices before implementing it in production. It is also recommended to use different test scenarios to identify which margin best fits your environment. {{</ note >}}

The Network Server uses the ADR margin of 15, but this value can be configured per device using the CLI:

```bash
ttn-lw-cli end-devices set --application-id <app-id> --device-id <device-id> --mac-settings.adr.mode.dynamic.margin <float32>
```

Keep in mind that changes to `mac-settings.adr.mode.dynamic.<parameter>` are persistent and will be present even after a device reset/rejoin. Read the [MAC Settings]({{< ref "/devices/configuring-devices/mac-settings" >}}) section for detailed info.

#### Examples

Consider a device whose SNR values in the last 20 uplink messages were in range from 0 to 7. The data rate of the last received frame from the end device is DR3. Three cases presented below demonstrate how choosing a different ADR margin leads to different outcomes in terms of changing the data rate and Tx power.

In practice, the ADR margin value should be tuned until the optimization target is reached. The optimization target can be different (like battery duration, low packet loss, etc.) in different environments, so a user needs to decide on which margin value to adopt.

##### Case 1: ADR margin set to default

The default ADR margin value in {{% tts %}} is 15, while the minimum SNR required to demodulate a message for DR3 is 12.5.

First, the maximum SNR is computed for recent uplinks. In this example, the `SNRmax` is 7.

Then the SNR margin is calculated as follows:

SNR<sub>margin</sub> = SNR<sub>max</sub> - SNR<sub>DR3</sub> - margin<sub>dB</sub> = 7-(-12.5)-15 = 4.5

The final step is to calculate the `NStep` value to decide whether a data rate can be optimized:

NStep=int(SNR<sub>margin</sub>/2.5) = int (4.5/2.5) = 1

Considering the diagram for acting on an NStep calculation depicted [here](https://www.thethingsnetwork.org/forum/uploads/default/original/2X/7/7480e044aa93a54a910dab8ef0adfb5f515d14a1.pdf), the conclusion for this example is that the Network Server should increase the data rate to DR4.

##### Case 2: ADR margin set to 18

The SNR margin would be:

SNR<sub>margin</sub> = SNR<sub>max</sub> - SNR<sub>DR3</sub> - margin<sub>dB</sub> = 7-(-12.5)-18 = 1.5

The `NStep` value would be:

NStep=int(SNR<sub>margin</sub>/2.5) = int (1.5/2.5) = 0

In this case, according to the previously mentioned [diagram](https://www.thethingsnetwork.org/forum/uploads/default/original/2X/7/7480e044aa93a54a910dab8ef0adfb5f515d14a1.pdf), the Network Server should not take any action to further optimize the data rate.

##### Case 3: ADR margin set to 25

The SNR margin would be:

SNR<sub>margin</sub> = SNR<sub>max</sub> - SNR<sub>DR3</sub> - margin<sub>dB</sub> = 7-(-12.5)-25 = -5.5

The `NStep` value would be:

NStep=int(SNR<sub>margin</sub>/2.5) = int (-5.5/2.5) = -1

In this case, according to the previously mentioned [diagram](https://www.thethingsnetwork.org/forum/uploads/default/original/2X/7/7480e044aa93a54a910dab8ef0adfb5f515d14a1.pdf), if Tx power is lower than its maximum, the Network Server should increase it once by 3dB, while the data rate should not be changed.

### Configure Channel Steering Mode

The channel steering modes are only applicable to `US915` and `AU915` bands. End devices in these bands can join {{% tts %}} network via **LoRa** modulated channels with a bandwidth of 500kHz. There is one such channel within a frequency sub band (FBS), and an end device which has joined via a 500kHz channel will only use this channel for transmissions. This behavior is default, and it can be enabled as follows:

```bash
ttn-lw-cli end-devices set --application-id <app-id> --device-id <dev-id> --mac-settings.adr.mode.dynamic --mac-settings.adr.mode.dynamic.channel-steering.disabled
```

The end device can also be steered towards the 125kHz channels, which usually are 8 per frequency sub band (FSB), instead of using a singular 500kHz channel like mentioned above. This mode is called **LoRa narrow** and it can be enabled with:

```bash
ttn-lw-cli end-devices set --application-id <app-id> --device-id <dev-id> --mac-settings.adr.mode.dynamic --mac-settings.adr.mode.dynamic.channel-steering.lora-narrow
```

## Static Mode

Besides {{% tts %}} ADR mechanism described [above]({{< ref "/reference/adr#the-things-stack-adr-algorithm" >}}), {{% tts %}} also supports using a custom ADR, meaning ADR parameters (data rate, Tx power, number of transmissions per uplink frame) can be controlled manually.

{{< note >}} We recommend to test the process described below on test devices before implementing it in production. {{</ note >}}

Before setting ADR parameters to desired values, you first need to turn off the default {{% tts %}} ADR mechanism. To turn off {{% tts %}} ADR using the [CLI]({{< ref "/the-things-stack/interact/cli" >}}):

```bash
ttn-lw-cli end-devices set --application-id <app-id> --device-id <dev-id> --mac-settings.adr.mode.disabled
```

> Please note that `data_rate` in above and following commands is data rate index which can take values from 0-6 (referring to data rate sets DR0-DR6). For example, data rate index 0 implies using SF12 in EU868 freqeuncy plan, as explained [here](https://www.thethingsnetwork.org/docs/lorawan/regional-parameters/#eu863-870-data-rates). You can check out detailed info for your frequency plan in the [Regional Parameters specification]({{< ref "/the-things-stack/concepts/spec-regional-parameters" >}}).

After {{% tts %}} ADR mechanism is disabled, the Network Server will no longer try to optimize ADR parameters.

Now you can manually set ADR parameters to desired values using the CLI:

```bash
ttn-lw-cli end-devices set --application-id <app-id> --device-id <dev-id> --mac-settings.adr.mode.static --mac-settings.adr.mode.static.data-rate-index <data_rate> --mac-settings.adr.mode.static.tx-power-index <power_index> --mac-settings.adr.mode.static.nb-trans <nb_trans>
```

Static mode values that you set for ADR parameters need to be supported by the end device based on its MAC and PHY versions, and its frequency plan. Upon receiving a next uplink message, the Network Server schedules a `LinkADRReq` message with new ADR parameters included.

If the end device accepts all three parameters specified, then it will use them and answer with a `LinkADRAns` uplink message. We recommend setting all three parameters explicitly to avoid a possible rejection.

Keep in mind that changes to `mac-settings.adr.mode.static.<parameter>` are persistent and these values will be used even after a device reset/rejoin, until you change them.

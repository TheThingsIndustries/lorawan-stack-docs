---
title: "MAC Settings"
description: ""
aliases: ["/devices/configuring-devices/mac-settings"]
weight: 2
---

This section provides guidelines for configuring MAC settings for end devices from the CLI.

<!--more-->

{{< cli-only >}}

## MAC Settings and MAC State

MAC settings on {{% tts %}} are configurable per end device. To configure persistent MAC settings, make changes to `mac-settings.desired_<parameter>`. Updates to `mac-settings.desired_<parameter>` take effect on device creation, after OTAA join or ABP FCnt reset, ResetInd, or after MAC state reset.

`mac-settings.<parameter>` represents what the Network Server believes is configured on the end device, and should not be changed, unless the device does not conform to the LoRaWAN® specification. It may however be necessary to set `mac-settings.RX1_delay` for ABP devices where this is not configured as part of activation.

`mac-state` can be used to test MAC settings in the current session. To update settings for testing in the current session, make changes to the `mac-state.desired_parameters.<parameter>`. Updates to the `mac-state.desired_parameters.<parameter>` are applied on the next uplink, and lost on reset.

The expected procedure for testing and updating settings is:

1. Modify `mac-state.desired_parameters.<parameter>` to see changes in the current session
2. Test that everything works as expected
3. Modify `mac-settings.desired_<parameter>` to make the change permanent

See how this applies to the Rx1 delay parameter in the example below. If no settings are provided on device creation or unset, defaults are first taken from the device Frequency Plan if available, and finally from [Network Server Configuration]({{< ref "/reference/configuration/network-server" >}}).

### Example: Configure Rx1 Delay

{{< note >}} {{% tts %}} configures the `Rx1Delay` to 5 seconds by default to accomodate for high latency backhauls and/or peering with Packet Broker, so this is the recommended configuration. For demonstration purposes, in this example we use 6 seconds. {{</ note >}}

To see Rx1 delay change in the current session, modify the `mac-state.desired-parameters.rx1-delay` parameter:

```
ttn-lw-cli end-devices update --application-id <application-id> --device-id <device-id> --mac-state.desired-parameters.rx1-delay RX_DELAY_6
```

The Network Server will schedule an `RxTimingSetupReq` MAC command to communicate a new `Rx1Delay` of 6 seconds to the device. The end device will answer with an `RxTimingSetupAns` MAC command in the next uplink. The Network Server will then start using the `Rx1Delay` of 6 seconds for scheduling downlinks. For this change to take effect, the end device does not need to perform a re-join.

To make the Rx1 delay change persistent upon end device re-join, modify the `mac-settings.desired-rx1-delay` parameter:

```
ttn-lw-cli end-devices update --application-id <application-id> --device-id <device-id> --mac-settings.desired-rx1-delay RX_DELAY_6
```

The Rx1 delay change will take effect only after the end device performs a re-join, i.e. in the new session. The `Rx1Delay` of 6 seconds will be communicated to the device during join procedure via Join-accept downlink message.

If the end device does not conform to the LoRaWAN Specification and has a custom Rx1 delay configured in it (6 seconds in this example), modify the `mac-settings.rx1-delay` parameter:

```
ttn-lw-cli end-devices update --application-id <application-id> --device-id <device-id> --mac-settings.rx1-delay RX_DELAY_6
```

The Network Server will start using the `Rx1Delay` of 6 seconds for downlink communication with the end device.

## Available MAC Settings

Run the following command to get a list of all available MAC settings and available parameter values:

```bash
ttn-lw-cli end-devices set --help
```

You can also refer to the [End Device API Reference page]({{< ref "/api/reference/grpc/end_device#message:MACSettings" >}}) for documentation on the available MAC settings and MAC state parameters.

## Class Specific Settings

Settings that are useful based on device class are:

All devices:

- `mac-settings.factory-preset-frequencies`

Class A:

- `mac-settings.desired-rx1-delay`
- `mac-settings.desired-rx1-data-rate-offset`
- `mac-settings.desired-rx2-data-rate-index`
- `mac-settings.desired-rx2-frequency`
- `mac-settings.supports-32-bit-f-cnt`
- `mac-settings.use-adr`

Class A ABP:

- `mac-settings.resets-f-cnt`

Class B:

- `mac-settings.class-b-timeout`
- `mac-settings.ping-slot-periodicity`
- `mac-settings.desired-ping-slot-data-rate-index`
- `mac-settings.desired-ping-slot-frequency`

Class C:

- `mac-settings.class-c-timeout`

Some additional examples are included below. All settings are available at the [End Device API Reference page]({{< ref "/api/reference/grpc/end_device#message:MACSettings" >}}) and can be viewed using the `ttn-lw-cli end-devices set --help` command.

## Examples

### Configure Factory Preset Frequencies for ABP Devices

To tell {{% tts %}} which frequencies are configured in an ABP device, set the `mac-settings.factory-preset-frequencies` parameter. For example, to configure a device using the default EU868 frequencies, use the following command:

```bash
ttn-lw-cli devices update <app-id> <device-id> --mac-settings.factory-preset-frequencies 868100000,868300000,868500000,867100000,867300000,867500000,867700000,867900000
```

{{< note >}} For ABP devices, `mac-settings.factory-preset-frequencies` should be specified on `device create` or the settings will only take effect after MAC reset. {{</ note >}}

### Set Duty Cycle

To change the duty cycle, set the `desired-max-duty-cycle` parameter. For example, to set the duty cycle to 0.098%, use the following command:

```bash
ttn-lw-cli end-devices set <app-id> <device-id> --mac-settings.desired-max-duty-cycle DUTY_CYCLE_1024
```

See the [End Device API Reference]({{< ref "/api/reference/grpc/end_device#message:MACSettings" >}}) for available fields and definitions of constants. `DUTY_CYCLE_1024` represents 1/1024 ≈ 0.098%.

### Enable ADR

To enable ADR, set the `mac-settings.use-adr` parameter:

```bash
ttn-lw-cli end-devices set <app-id> <device-id> --mac-settings.use-adr=true
```

See the [Adaptive Data Rate]({{< ref "/reference/adr" >}}) section for detailed information on configuring ADR parameters and ADR margin using MAC settings.

### Set RX1 Delay

The RX1 delay of end devices is set to 5 second by default. To change it, set the `desired-rx1-delay` parameter:

```bash
ttn-lw-cli end-devices set <app-id> <device-id> --mac-settings.desired-rx1-delay RX_DELAY_5
```

### Unset MAC settings

The CLI can also be used to unset MAC settings (so that the default ones are used):

```bash
ttn-lw-cli end-devices set <app-id> <device-id> --unset mac-settings.rx1-delay
```

## Session and MAC State Reset

Resetting session and MAC state for OTAA devices will wipe out all session and MAC data, and the end device will need to perform a rejoin on {{% tts %}} network. For ABP devices, only MAC state gets reset, while session keys, DevAddr and downlink queue are preserved.

Session and MAC state can be reset through the Console - navigate to your end device's **General settings** tab, scroll down to the **Network layer** section, press the **Reset session and MAC state** button and confirm.

To reset session and MAC state using the CLI:

```bash
ttn-lw-cli end-devices reset --application-id <application-id> --device-id <device-id>
```

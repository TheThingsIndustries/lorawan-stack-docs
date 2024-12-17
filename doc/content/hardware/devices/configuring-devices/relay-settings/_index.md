---
title: "Relay Settings"
description: ""
aliases: [/devices/relay-settings, /devices/configuring-devices/relay-settings]
---

This section provides guidelines for configuring [relay]({{< ref "/hardware/devices/concepts/relay" >}}) settings for end devices via CLI.

<!--more-->

{{< cli-only >}}

## Retroactivity

In contrast to [MAC settings]({{< ref "/hardware/devices/configuring-devices/mac-settings" >}}), the relay configuration commands will automatically apply changes to both the current, pending and future sessions of the end devices.

## Examples

### Enabling the Serving Mode {{< new-in-version "3.29.0">}}

In order to enable the [serving mode]({{< ref "/hardware/devices/concepts/relay#relay-mode" >}}) of an end device, use the `create` command and the `--mode.serving` parameter.

```bash
ttn-lw-cli relays create <app-id> <device-id> --mode.serving
```

### Enabling the Served Mode {{< new-in-version "3.29.0">}}

In order to enable the [served mode]({{< ref "/hardware/devices/concepts/relay#relay-mode" >}}) of an end device, use the `create` command and the `--mode.served` flag.

{{< note "A serving end device must already exist." />}}

```bash
ttn-lw-cli relays create <app-id> <device-id> --mode.served.mode.end-device-controlled --mode.served.serving-device-id <serving-device-id>
```

Multiple modes of operations are available for a served end device:

1. A device may always attempt to use the serving end device before transmitting an uplink message. This mode is called _always_, and can be used using the `--mode.served.mode.always` flag.
2. A device may attempt to use the serving end device only after it has not received a downlink message recently. This mode is called _dynamic_, and can be used using the `--mode.served.mode.dynamic` flag.
3. A device may have its own algorithm to choose when to use the serving end device. This mode is called _end device controlled_, and can be used using the `--mode.served.mode.end-device-controlled` flag.

### Retrieving the Settings {{< new-in-version "3.29.0">}}

In order to retrieve the settings of a serving end device, use the `get` command.

```bash
ttn-lw-cli relays get <app-id> <device-id> --mode.serving
```

The `--mode.served` may be used to retrieve the settings of a served end device.

### Updating the Settings {{< new-in-version "3.29.0">}}

In order to update the settings of an end device, use the `set` command.

```bash
ttn-lw-cli relays set <app-id> <device-id> --mode.serving.cad-periodicity 1
```

You can see the possible parameters which can be updated using the `--help` flag.

### Removing the Settings {{< new-in-version "3.29.0">}}

In order to delete all of the relay settings of an end device, use the `delete` command.

```bash
ttn-lw-cli relays delete <app-id> <device-id>
```

### Creating an Uplink Forwarding Rule {{< new-in-version "3.29.0">}}

In order to create an uplink forwarding rule on a serving end device, for a served end device, use the `uplink-forwarding-rules create` command.

{{< note "Rule IDs are strictly positive integers between 0 and 15." />}}
{{< note "The served end device must be in the same application as the serving end device." />}}

```bash
ttn-lw-cli relays uplink-forwarding-rules create <app-id> <device-id> <rule-id> --device-id <served-device-id>
```

### Retrieving All Uplink Forwarding Rules {{< new-in-version "3.29.0">}}

In order to retrieve all of the uplink forwarding rules of a serving end device, use the `uplink-forwarding-rules list` command.

```bash
ttn-lw-cli relays uplink-forwarding-rules list <app-id> <device-id> --device-id
```

Like other `list`-like commands in {{% tts %}}, the fields which are returned have to be specified in the command flags. Use the `--help` flags to see which other fields can be retrieved.

### Retrieving Individual Uplink Forwarding Rules {{< new-in-version "3.29.0">}}

In order to retrieve an individual uplink forwarding rule of a serving end device, use the `uplink-forwarding-rules get` command.

```bash
ttn-lw-cli relays uplink-forwarding-rules get <app-id> <device-id> <rule-id>
```

Like other `get`-like commands in {{% tts %}}, the fields which are returned have to be specified in the command flags. Use the `--help` flags to see which other fields can be retrieved.

### Updating Uplink Forwarding Rules {{< new-in-version "3.29.0">}}

In order to update an uplink forwarding rule of a serving end device, use the `uplink-forwarding-rules set` command.

```bash
ttn-lw-cli relays uplink-forwarding-rules set <app-id> <device-id> <rule-id> --device-id <serving-device-id>
```

You can see the possible parameters which can be updated using the `--help` flag.

### Deleting Uplink Forwarding Rules {{< new-in-version "3.29.0">}}

In order to delete an uplink forwarding rule of a serving end device, use the `uplink-forwarding-rules delete` command.

```bash
ttn-lw-cli relays uplink-forwarding-rules delete <app-id> <device-id> <rule-id>
```

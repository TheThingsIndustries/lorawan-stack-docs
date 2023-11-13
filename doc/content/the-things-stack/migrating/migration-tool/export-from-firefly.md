---
title: "Export End Devices from Firefly"
description: ""
weight: 4
new_in_version: "v0.10.0"
---

This section contains instructions on how to configure migration tool and use it to export end devices from Firefly, that can later be imported in {{% tts %}}.

<!--more-->

### Before you begin

- The export process will halt if any error occurs.
- Use the `--invalidate-keys` option to invalidate the root and/or session keys of the devices on the Firefly server. This is necessary to prevent both networks from communicating with the same device. The last byte of the keys will be incremented by 0x01. This enables an easy rollback if necessary. Setting this flag to false (default) would result in a "dry run", where the devices are exported but they will still be able to communicate with the Firefly server.

### Configuration

Configure with environment variables, or command-line arguments.

See `ttn-lw-migrate firefly {device|application} --help` for more details.

The following example shows how to set options via environment variables.

```bash
$ export FIREFLY_HOST=example.com       # Host of the Firefly API
$ export FIREFLY_API_KEY=abcdefgh       # Firefly API Key
$ export APP_ID=my-test-app             # Application ID for the exported devices
$ export JOIN_EUI=1111111111111111      # JoinEUI for the exported devices
$ export FREQUENCY_PLAN_ID=EU_863_870   # Frequency Plan ID for the exported devices
$ export MAC_VERSION=1.0.2b             # LoRaWAN MAC version for the exported devices
```

The above settings are common for all the following export methods.

### Export Devices

{{< tabs/container "Single device" "Multiple devices" "All devices" >}}

{{< tabs/tab "Single device" >}}

To export a single device using its Device EUI (e.g. `1111111111111112`):

```bash
# dry run first, verify that no errors occur
$ ttn-lw-migrate firefly device 1111111111111112 --verbose > devices.json
# export device
$ ttn-lw-migrate firefly device 1111111111111112 --invalidate-keys > devices.json
```

{{< /tabs/tab >}}

{{< tabs/tab "Multiple devices" >}}

In order to export a large number of devices, create a file named `device_euis.txt` with one device EUI per line:

```txt
1111111111111112
FF11111111111134
ABCD111111111100
```

And then export with:

```bash
# dry run first, verify that no errors occur
$ ttn-lw-migrate firefly device --verbose < device_ids.txt > devices.json
# export devices
$ ttn-lw-migrate firefly device --invalidate-keys < device_ids.txt > devices.json
```

{{< /tabs/tab >}}

{{< tabs/tab "All devices" >}}

The Firefly LNS does not strictly enforce device to application relationships.

Setting the `--all` flag will export **all devices that are accessible by the API key**.

The `application` command without the `--all` flag is a no-op (does nothing).

> Note: Please be cautious while using this command as this might invalidate all the keys of all the devices.

To export all devices accessible by the API Key,

```bash
# dry run first, verify that no errors occur
$ ttn-lw-migrate firefly application --all --verbose > devices.json
# export all devices
$ ttn-lw-migrate firefly application --all --invalidate-keys > devices.json
```

{{< /tabs/tab >}}

{{< /tabs/container >}}

After exporting, devices can be imported in {{% tts %}}. See [add end devices in bulk in {{% tts %}}]({{< ref "/devices/adding-devices/adding-devices-in-bulk" >}}) for details about importing devices.

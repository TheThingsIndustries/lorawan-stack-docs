---
title: "Export End Devices from ChirpStack"
description: ""
weight: 3
aliases:
  [
    /the-things-stack/migrating-from-networks/migrate-from-chirpstack,
    /getting-started/migrating/migration-tool/export-from-chirpstack,
  ]
---

This section contains instructions on how to configure migration tool and use it to export end devices from ChirpStack, that can later be imported in {{% tts %}}. This is a base for migrating end devices from ChirpStack to {{% tts %}}.

<!--more-->

## Configuration

First, configure the environment with the following variables modified according to your setup. Navigate to the folder where you installed `ttn-lw-migrate` and execute:

```bash
export CHIRPSTACK_API_URL="localhost:8080"    # ChirpStack Application Server URL
export CHIRPSTACK_API_TOKEN="7F0as987e61..."  # ChirpStack API key
export JOIN_EUI="0101010102020203"            # Set The Things Stack JoinEUI for exported devices
export FREQUENCY_PLAN_ID="EU_863_870"         # Set The Things Stack FrequencyPlanID for exported devices
export CHIRPSTACK_API_INSECURE=0              # Set to 1 if not using TLS on ChirpStack
```

If using Windows OS, replace `export` with `set` and remove the double-quotes in commands above. For example, you would use:

```bash
set CHIRPSTACK_API_TOKEN=7F0as987e61...
```

`JoinEUI` and `FrequencyPlanID` have to be set because ChirpStack does not store these variables. See [Frequency Plans]({{< ref "/reference/frequency-plans" >}}) for a full list of frequency plans supported by {{% tts %}} (and their IDs).

You can now proceed to exporting devices or applications.

## Export Devices and Applications

{{< tabs/container "Export devices" "Export applications" >}}

{{< tabs/tab "Export devices" >}}

To export a single end device to a `devices.json` file based on their `DevEUI`:

```bash
ttn-lw-migrate --source chirpstack device "0102030405060701" > devices.json
```

To export multiple end devices, create a `devices.txt` file containing one `DevEUI` per line:

```bash
0102030405060701
0102030405060702
0102030405060703
0102030405060704
0102030405060705
0102030405060706
```

To export multiple end devices to a `devices.json` file:

```bash
ttn-lw-migrate --source chirpstack device < devices.txt > devices.json
```

{{</ tabs/tab >}}

{{< tabs/tab "Export applications" >}}

To export end devices from a single application using its name (from ChirpStack):

```bash
ttn-lw-migrate --source chirpstack application "app1" > applications.json
```

To export end devices from multiple applications to an `applications.json` file, you need to create a `.txt` file containing one application name per line and run the following command in your terminal:

```bash
ttn-lw-migrate --source chirpstack application < applications.txt > applications.json
```

{{</ tabs/tab >}}

{{</ tabs/container >}}

{{< warning >}}
ABP end devices without an active session can be exported from ChirpStack, but cannot be imported in {{% tts %}}.
{{</ warning >}}

Please note that `MaxEIRP` parameter may not be always set properly, and that the ChirpStack `variables` parameter related to payload formatting will always be converted to `null` when the end device is imported to {{% tts %}}.

---

After exporting, devices and applications can be imported in {{% tts %}}. See [add end devices in bulk in {{% tts %}}]({{< ref "/devices/adding-devices/adding-devices-in-bulk" >}}) for details about importing devices.

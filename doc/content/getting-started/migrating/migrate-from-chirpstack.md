---
title: "Migrating End Devices from ChirpStack"
description: ""
weight: 3
aliases: "/getting-started/migrating-from-networks/migrate-from-chirpstack"
---

This section contains instructions on how to migrate end devices from ChirpStack to {{% tts %}} using [`ttn-lw-migrate` migration tool](https://github.com/TheThingsNetwork/lorawan-stack-migrate).

<!--more-->

`ttn-lw-migrate` tool is used to export end devices and applications from ChirpStack to a [JSON file]({{< ref "/getting-started/migrating/device-json" >}}). This JSON file can afterwards be [imported in {{% tts %}}]({{< ref "/getting-started/migrating/import-devices" >}}) via [Console]({{< ref "/getting-started/console" >}}) or via [CLI]({{< ref "/getting-started/cli" >}}).

## Prerequisites

1. [`ttn-lw-migrate` tool](https://github.com/TheThingsNetwork/lorawan-stack-migrate) version `0.5.0` or higher installed on your system.

## Configure ttn-lw-migrate

First, configure the environment with the following variables modified according to your setup. Navigate to the folder where you installed `ttn-lw-migrate` and execute:

```bash
$ export CHIRPSTACK_API_URL="localhost:8080"    # ChirpStack Application Server URL
$ export CHIRPSTACK_API_TOKEN="7F0as987e61..."  # ChirpStack API key
$ export JOIN_EUI="0101010102020203"            # Set The Things Stack JoinEUI for exported devices
$ export FREQUENCY_PLAN_ID="EU_863_870"         # Set The Things Stack FrequencyPlanID for exported devices
$ export CHIRPSTACK_API_INSECURE=0              # Set to 1 if not using TLS on ChirpStack
```

{{< note >}} `JoinEUI` and `FrequencyPlanID` have to be set because ChirpStack does not store these variables. 

See [Frequency Plans]({{< ref "/reference/frequency-plans" >}}) for a full list of frequency plans supported by {{% tts %}} (and their IDs). {{</ note >}}

## Export End Devices

With `ttn-lw-migrate` tool you can easily export a single or multiple end devices based on their **DevEUI**.

To export a single end device to a `devices.json` file:

```bash
$ ttn-lw-migrate --source chirpstack device "0102030405060701" > devices.json
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
$ ttn-lw-migrate --source chirpstack device < devices.txt > devices.json
```

## Export Applications

You can also export applications with `ttn-lw-migrate` tool using their names from ChirpStack, which results in a JSON file containing descriptions of all the end devices contained by that application.

To export end devices from a single application:

```bash
$ ttn-lw-migrate --source chirpstack application "app1" > applications.json
```

To export end devices from multiple applications to an `applications.json` file, you need to create a `.txt` file containing one application name per line and run the following command in your terminal:

```bash
$ ttn-lw-migrate --source chirpstack application < applications.txt > applications.json
```

{{< note >}} 
ABP end devices without an active session can be exported from ChirpStack, but cannot be imported in {{% tts %}}.
{{</ note >}}

{{< warning >}}
`MaxEIRP` parameter may not be always set properly.
{{</ warning >}}

{{< note >}}
ChirpStack `variables` parameter related to payload formatting will always be converted to `null` when the end device is imported to {{% tts %}}.
{{</ note >}}

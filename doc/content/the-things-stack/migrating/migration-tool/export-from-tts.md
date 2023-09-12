---
title: "Export Devices from The Things Stack"
description: ""
weight: 1
aliases: [/getting-started/migrating/migration-tool/export-from-tts]
---

This section explains how to configure the migration tool and use it to export end devices from {{% tts %}}, that can later be imported in other {{% tts %}} deployments. This is a base for migrating end devices between {{% tts %}} distributions.

<!--more-->

## Configuration

First, configure the migration tool with environment variables or command-line arguments, like shown below. See `--help` for more details.

```bash
export TTS_APP_ID="my-tts-app"                                                  # TTS App ID
export TTS_APP_API_KEY="NNSXS.U..."                                             # TTS App API Key (needs `device` permissions)
export TTS_APPLICATION_SERVER_GRPC_ADDRESS="eu1.cloud.thethings.network:8884"   # TTS Application Server URL Address
export TTS_IDENTITY_SERVER_GRPC_ADDRESS="eu1.cloud.thethings.network:8884"      # TTS Identity Server URL Address
export TTS_JOIN_SERVER_GRPC_ADDRESS="eu1.cloud.thethings.network:8884"          # TTS Join Server URL Address
export TTS_NETWORK_SERVER_GRPC_ADDRESS="eu1.cloud.thethings.network:8884"       # TTS Network Server URL Address
```

If using Windows OS, replace `export` with `set` and remove the double-quotes in commands above. For example, you would use:

```bash
set TTS_APP_ID=my-tts-app
```

{{< note >}} The export process will halt if any error occurs. Execute commands with the `--dry-run` flag to verify whether the outcome will be as expected. {{</ note >}}

You can now proceed to exporting devices or applications.

## Export Devices and Applications

{{< tabs/container "Export devices" "Export applications" >}}

{{< tabs/tab "Export devices" >}}

To export a single device using it's **End Device ID** (e.g. `my-device`):

```bash
# dry run first, verify that no errors occur
ttn-lw-migrate device --source tts 'my-device' --dry-run --verbose > devices.json
# export device
ttn-lw-migrate device --source tts 'my-device' > devices.json
```

In order to export a large number of devices, create a file named `device_ids.txt` with one device ID per line:

```
my-device-1
my-device-2
my-device-3
```

And then export with:

```bash
# dry run first, verify that no errors occur
ttn-lw-migrate devices --source tts --dry-run --verbose < device_ids.txt > devices.json
# export devices
ttn-lw-migrate devices --source tts < device_ids.txt > devices.json
```

{{</ tabs/tab >}}

{{< tabs/tab "Export applications" >}}

To export all devices of an application using its **Application ID** (e.g. `my-app-id`):

```bash
# dry run first, verify that no errors occur
ttn-lw-migrate application --source tts 'my-app-id' --dry-run --verbose > devices.json
# export application
ttn-lw-migrate application --source tts 'my-app-id' > devices.json
```

In order to export multiple applications, create a file named `application_names.txt` with one application ID per line:

```bash
my-app-id-1
my-app-id-2
my-app-id-3
```

And then export with:

```bash
# dry run first, verify that no errors occur
ttn-lw-migrate devices --source tts --dry-run --verbose < application_names.txt > devices.json
# export applications
ttn-lw-migrate devices --source tts < application_names.txt > devices.json
```

{{</ tabs/tab >}}

{{</ tabs/container >}}

## Advanced setup

If you are using a custom CA, you can provide a path to it by with an environment variable or by using `--tts.ca-file` flag.

```bash
export TTS_CA_FILE="/path/to/ca.file"   # Path to a CA file (optional)
```

---

After exporting, devices and applications can be imported in other {{% tts %}} deployments. See [Import End Devices in {{% tts %}}]({{< ref "/the-things-stack/migrating/import-devices" >}}) for details about importing devices. See [Migrating End Devices between {{% tts %}} Distributions]({{< ref "/the-things-stack/migrating/migrating-between-tts-distributions" >}}) to wrap up the whole process of migration between {{% tts %}} distributions.

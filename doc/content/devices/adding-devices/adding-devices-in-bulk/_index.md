---
title: "Adding devices in bulk"
description: ""
weight: 3
aliases:
  [
    /getting-started/migrating-from-v2/import-devices,
    /getting-started/migrating-from-networks/import-devices,
    /the-things-stack/migrating-from-v2/import-devices,
    /the-things-stack/migrating-from-networks/import-devices,
    /getting-started/migrating,
    /getting-started/migrating/import-devices,
    /devices/adding-devices/adding-devices-in-bulk,
  ]
---

Instead of adding devices one by one, {{% tts %}} supports multiple methods of adding multiple end devices at once. Adding multiple devices is also referred to as **importing devices**.

<!--more-->

There are two ways to import devices in {{% tts %}} - using [Console]({{< ref "/the-things-stack/interact/console" >}}) or [CLI]({{< ref "/the-things-stack/interact/cli" >}}).

{{% tts %}} supports importing end devices in JSON and CSV format:

- To import devices that are in a JSON file (for example, the one you created by following [Migrating End Devices from {{% ttnv2 %}}]({{< ref "/the-things-stack/migrating/migrating-from-v2" >}}) or [Exporting Devices from ChirpStack]({{< ref "/the-things-stack/migrating/migration-tool/export-from-chirpstack" >}})), use **{{% tts %}} JSON** format (identified by `the-things-stack`). The JSON format data format is documented in the [JSON File Reference]({{< ref "/devices/adding-devices/adding-devices-in-bulk/device-json" >}}).
- To import devices that are in a CSV file, use the **{{% tts %}} CSV** (identified by `the-things-stack-csv`). The CSV data format is documented in the [CSV File Reference]({{< ref "/devices/adding-devices/adding-devices-in-bulk/device-csv" >}}), including a handy Excel template.

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}

## Import devices via the Console {#import-devices-via-the-console}

Open your application and click the button **Import end devices**

{{< figure src="import-end-devices.png" alt="import devices" >}}

Select the **File format** and upload the file (e.g. `devices.json` or `devices.csv`).

You can specify **Fallback values** for Frequency plan and LoRaWAN® and Regional Parameters version, in case the import file does not specify these settings for the device.

You can also expand the **Advanced claiming and component settings** to set targeted components, and set the claim authentication code to be generated.

Start the import by clicking the **Import end devices** button.

{{< figure src="upload-file.png" alt="upload devices.json file" >}}

Wait for the end devices to be successfully imported. In case any device fails, you will see a relevant error message in the console.

{{< figure src="operation-finished.png" alt="import finished" >}}

If the import was successful, your devices are added to the list of end devices in your application.

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

## Import devices via the CLI

To complete these steps, you need the have the latest version of `ttn-lw-cli` installed on your system.

{{< cli-only >}}

To import a file in {{% tts %}}, run the following command with `ttn-lw-cli`:

```bash
# JSON format
ttn-lw-cli end-devices create --application-id <application-id> < devices.json
# CSV format
ttn-lw-cli end-devices template from-data --local-file devices.csv --format-id the-things-stack-csv \
  | ttn-lw-cli end-devices template execute \
  | ttn-lw-cli end-devices create --application-id <application-id>
```

This will import your devices in {{% tts %}}. In case any device import fails, you will see a relevant error message at the end of the output.

If the import was successful, you will see your devices added to the list of end devices in your application.

{{< /tabs/tab >}}

{{< /tabs/container >}}

{{< figure src="successful-import.png" alt="successful-import" >}}

See the following video from [The Things Network youtube channel](https://youtu.be/ouz-VuiosU4) for instructions.

<details><summary>Show video</summary>
{{< youtube "ouz-VuiosU4" >}}
</details>

---
title: Import End Devices in The Things Stack
weight: 5
aliases: ["/getting-started/migrating-from-v2/import-devices", "/getting-started/migrating-from-networks/import-devices"]
---

To import end devices, you need access to an application in {{% tts %}}. If you have not created one previously, see the [Adding Applications]({{< ref "integrations/adding-applications" >}}) guide for detailed instructions.

There are two ways to import devices in {{% tts %}} - using [Console]({{< ref "/getting-started/console" >}}) or [CLI]({{< ref "/getting-started/cli" >}}).

{{% tts %}} supports importing end devices in JSON and CSV format:

- To import devices that are in a JSON file (for example, the one you created by following [Migrating End Devices from {{% ttnv2 %}}]({{< ref "/getting-started/migrating/migrating-from-v2" >}}) or [Migrating End Devices from ChirpStack]({{< ref "/getting-started/migrating/migrate-from-chirpstack" >}})), use **{{% tts %}} JSON** format (identified by `the-things-stack`). The JSON format data format is documented in the [JSON File Reference]({{< ref "/getting-started/migrating/device-json" >}}).
- To import devices that are in a CSV file, use the **{{% tts %}} CSV** (identified by `the-things-stack-csv`). The CSV data format is documented in the [CSV File Reference]({{< ref "/getting-started/migrating/device-csv" >}}), including a handy Excel template.

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}

### Import devices via the Console {#import-devices-via-the-console}

Open your application and click the button **Import end devices**

{{< figure src="../import-end-devices.png" alt="import devices" >}}

Select the **File format** and upload the file (e.g. `devices.json` or `devices.csv`).

You can specify **Fallback values** for Frequency plan and LoRaWAN and Regional Parameters version, in case the import file does not specify these settings for the device.

You can also expand the **Advanced claiming and component settings** to set targeted components, and set the claim authentication code to be generated.

Start the import by clicking the **Import end devices** button.

{{< figure src="../upload-file.png" alt="upload devices.json file" >}}

Wait for the end devices to be successfully imported. In case any device fails, you will see a relevant error message in the console.

{{< figure src="../operation-finished.png" alt="import finished" >}}

If the import was successful, your devices are added to the list of end devices in your application.

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

### Import devices via the CLI

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

{{< note >}}
See [Device Templates]({{< ref "/devices/end-device-templates" >}}) for advanced templating scenarios.
{{< /note >}}

This will import your devices in {{% tts %}}. In case any device import fails, you will see a relevant error message at the end of the output.

If the import was successful, you will see your devices added to the list of end devices in your application.

{{< /tabs/tab >}}

{{< figure src="../successful-import.png" alt="successful-import" >}}

Your devices are now registered on {{% tts %}}.

Keep in mind that you still might need to initiate a new join on {{% tts %}} network! See [Migrating End Devices from {{% ttnv2 %}}]({{< ref "/getting-started/migrating/migrating-from-v2" >}}) for detailed info on how to complete the migration of your devices.

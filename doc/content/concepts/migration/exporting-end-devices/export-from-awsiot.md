---
title: "Export End Devices from AWS IoT"
description: ""
weight: 5
new_in_version: "v0.13.0"
aliases:
  [
    /migration/migration-tool/export-from-awsiot,
    /the-things-stack/migrating/migration-tool/export-from-awsiot/,
  ]
---

This section contains instructions on how to configure migration tool and use it to export end devices from AWS IoT, that can later be imported in {{% tts %}}.

<!--more-->

### Before you begin

- You need to setup the Shared AWS Configuration (~/.aws/config) file to able to connect to AWS. To setup this configuration file please check out the [AWS SDK documentation](https://docs.aws.amazon.com/sdk-for-go/v2/developer-guide/configure-gosdk.html)

{{< note "AWS IoT does not provide a way to export session information. Therefore OTAA devices needs to rejoin after the import. For ABP devices is not possible to import the session counters (**FCntUp** and **FCntDown**). For more details please check the [AWS IoT API documentation](https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessDevice.html)" />}}

### Configuration

Configure with environment variables, or command-line arguments.

See `ttn-lw-migrate awsiot device --help` for more details.

The following example shows how to set options via environment variables. These are example values. Please use actual ones based on your case.

```bash
$ export APP_ID="my-app"                    # Application ID for the exported devices
$ export FREQUENCY_PLAN_ID="EU_863_870"     # Frequency Plan ID for the exported devices
```

The above settings are common for all the following export methods.

- The export process will halt if any error occurs.
- Execute commands with the `--dry-run` flag to verify whether the outcome will be as expected.

### Export Devices

{{< tabs/container "Single device" "Multiple devices" >}}

{{< tabs/tab "Single device" >}}

To export a single device using its Device ID (e.g. `f198fd57-e52d-49fd-bcec-5b5494748469`):

```bash
# dry run first, verify that no errors occur
$ ttn-lw-migrate awsiot device 'f198fd57-e52d-49fd-bcec-5b5494748469' --dry-run --verbose > devices.json
# export device
$ ttn-lw-migrate awsiot device 'f198fd57-e52d-49fd-bcec-5b5494748469' > devices.json
```

{{< /tabs/tab >}}

{{< tabs/tab "Multiple devices" >}}

In order to export a large number of devices, create a file named `device_ids.txt` with one device ID per line:

```
f198fd57-e52d-49fd-bcec-5b5494748469
3b4c29ea-6c2f-4d2a-a2b4-494a6c0fc33b
393306e1-73f8-42c5-b593-21eb64a3bf0b
bed4284c-ebaf-4a34-970b-2ff1d0008daf
c5b08612-af8b-41cf-80fa-da3d861ed81c
```

And then export with:

```bash
# dry run first, verify that no errors occur
$ ttn-lw-migrate awsiot device --dry-run --verbose < device_ids.txt > devices.json
# export devices
$ ttn-lw-migrate awsiot device < device_ids.txt > devices.json
```

{{< /tabs/tab >}}

{{< /tabs/container >}}

After exporting, devices can be imported in {{% tts %}}. See [add end devices in bulk in {{% tts %}}]({{< ref "/hardware/devices/adding-devices/adding-devices-in-bulk" >}}) for details about importing devices.

# Adding devices in bulk

> Instead of adding devices one by one, The Things Stack supports multiple methods of adding multiple end devices at once. Adding multiple devices is also …

Source: https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/adding-devices-in-bulk/


Instead of adding devices one by one, The Things Stack supports multiple methods of adding multiple end devices at once. Adding multiple devices is also referred to as **importing devices**.

There are two ways to import devices in The Things Stack - using [Console](https://www.thethingsindustries.com/docs/concepts/features/console/) or [CLI](https://www.thethingsindustries.com/docs/concepts/features/cli/).

The Things Stack supports importing end devices in JSON and CSV format:

- To import devices that are in a JSON file (for example, the one you created by following [Exporting Devices from ChirpStack](https://www.thethingsindustries.com/docs/concepts/migration/exporting-end-devices/export-from-chirpstack/)), use **The Things Stack JSON** format (identified by `the-things-stack`). The JSON format data format is documented in the [JSON File Reference](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/adding-devices-in-bulk/device-json/).
- To import devices that are in a CSV file, use the **The Things Stack CSV** (identified by `the-things-stack-csv`). The CSV data format is documented in the [CSV File Reference](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/adding-devices-in-bulk/device-csv/), including a handy Excel template.

**Console:**

## Import devices via the Console {#import-devices-via-the-console}

Open your application and click the button **Import end devices**

![import devices](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/adding-devices-in-bulk/import-end-devices.png)


Select the **File format** and upload the file (e.g. `devices.json` or `devices.csv`).

You can specify **Fallback values** for Frequency plan and LoRaWAN® and Regional Parameters version, in case the import file does not specify these settings for the device.

You can also expand the **Advanced claiming and component settings** to set targeted components, and set the claim authentication code to be generated.

Start the import by clicking the **Import end devices** button.

![upload devices.json file](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/adding-devices-in-bulk/upload-file.png)


Wait for the end devices to be successfully imported. In case any device fails, you will see a relevant error message in the console.

![import finished](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/adding-devices-in-bulk/operation-finished.png)


If the import was successful, your devices are added to the list of end devices in your application.




**CLI:**

## Import devices via the CLI

To complete these steps, you need the have the latest version of `ttn-lw-cli` installed on your system.

To import a file in The Things Stack, run the following command with `ttn-lw-cli`:

```bash
# JSON format
ttn-lw-cli end-devices create --application-id <application-id> < devices.json
# CSV format
ttn-lw-cli end-devices template from-data --local-file devices.csv --format-id the-things-stack-csv \
  | ttn-lw-cli end-devices template execute \
  | ttn-lw-cli end-devices create --application-id <application-id>
```

This will import your devices in The Things Stack. In case any device import fails, you will see a relevant error message at the end of the output.

If the import was successful, you will see your devices added to the list of end devices in your application.


![successful-import](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/adding-devices-in-bulk/successful-import.png)


See the following video from [The Things Industries youtube channel](https://youtu.be/ouz-VuiosU4) for instructions.

[Video](https://www.youtube.com/watch?v=ouz-VuiosU4)


## Claim devices using Claim Authentication Code

Devices can be added in bulk together with their ownership information, through a process of device claiming using their claim authentication codes.

Claiming devices can be done using The Things Stack Console or the CLI, for single or multiple devices.

**Console:**

To claim a single device, first navigate to your application in The Things Stack Console and click the **+ Register end device** button.

Select the **Enter end device specifics manually**, then provide **Frequency plan**, **LoRaWAN version** and **Regional Parameters version**.

In the **Provisioning information** section, fill in the **JoinEUI** of The Things Join Server and **Confirm**.

Then, enter the **DevEUI**, **Claim authentication code** and **End device ID** of a device that you wish to claim.

Finish by clicking **Register end device**.




**CLI:**

To claim a single end device via the CLI, issue the following command:

```bash
ttn-lw-cli create <application-id> <device-id> \
    --dev-eui <dev-eui> \
    --app-eui <app-eui> \
    --frequency-plan-id <frequency plan> \
    --lorawan-version <lorawan-version> \
    --lorawan-phy-version <lorawan-phy-version> \
    --supports-join \
    --claim-authentication-code.value <claim-authentication-code>
```



To claim multiple devices, you need to create a [JSON file](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/adding-devices-in-bulk/device-json/) containing devices info with defined `claim_authentication_code`. An example of an end device object:

```json
{
  "ids": {
    "device_id": "my-device",
    "dev_eui": "0102030405060708",
    "join_eui": "0102030405060708"
  },
  "name": "My Device",
  "description": "Living room temperature sensor",
  "lorawan_version": "MAC_V1_0_2",
  "lorawan_phy_version": "PHY_V1_0_2_REV_B",
  "frequency_plan_id": "EU_863_870_TTN",
  "supports_join": true,
  "claim_authentication_code": {
    "value": "1234"
  }
}
```


**Console:**

Then, you only need to import the JSON file as explained above in [Import devices via the Console](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/adding-devices-in-bulk/#import-devices-via-the-console).




**CLI:**

Then, issue the CLI command to import the JSON file as explained above in [Import devices via the CLI](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/adding-devices-in-bulk/#import-devices-via-the-cli).

> **Note:** The `join-server-enabled` option in the [CLI configuration](https://www.thethingsindustries.com/docs/concepts/features/cli/configuring-cli/) has to be set to `false` when claiming devices using the CLI.



## Pages in this section

- [JSON File Reference](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/adding-devices-in-bulk/device-json/index.md): The Things Stack has support for importing end devices from JSON files.
- [CSV File Reference](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/adding-devices-in-bulk/device-csv/index.md): The Things Stack has support for importing end devices from CSV (comma-separated values) files.


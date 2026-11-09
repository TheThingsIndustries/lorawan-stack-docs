# Export End Devices from Wanesy

> This section contains instructions on how to configure migration tool and use it to convert end device information exported from Kerlink’s Wanesy Management …

Source: https://www.thethingsindustries.com/docs/concepts/migration/exporting-end-devices/export-from-wanesy/


This section contains instructions on how to configure migration tool and use it to convert end device information exported from [Kerlink's Wanesy Management Center](https://www.kerlink.com/), into The Things Stack end device format.

### Before you begin

Reach out to Kerlink for a CSV file that contains exported device data. The following is an example.

```csv
devEui,clusterId,clusterName,name,classType,rfRegion,country,macVersion,regParamsRevision,profile,adrEnabled,activation,appEui,appKey,fcntDown,fcntUp,devNonceCounter,fNwkSIntKey,sNwkSIntKey,rx1Delay,rx1DrOffset,rx2Dr,rx2Freq,rxWindows,cfList,dwellTime,pingSlotDr,pingSlotFreq,geolocation,latitude,longitude,altitude,status,lastDataUpMessage,lastDataDownMessage,lastDataUpDr,device_profile,dev_addr,NwkSKey,AppSKey
1111111111111111,0001,Test,Test,A,EU868,,1.0.2,A,STATIC,True,OTAA,1111111111111111,22222222222222222222222222222222,10,20,False,,,,,,,,,,,,,,,,,,,SF7BW125,,1234567,33333333333333333333333333333333,44444444444444444444444444444444
```

- The export process will halt if any error occurs.
- Since the migration tool uses a CSV file that's exported from WMC and does not interact with the API, make sure to remove/clean up the devices on WMC once the migration is completed.

### Configuration

Configure with environment variables, or command-line arguments.

See `ttn-lw-migrate wanesy {device|application} --help` for more details.

The following example shows how to set options via environment variables.

```bash
$ export APP_ID=my-test-app             # Application ID for the exported devices
$ export FREQUENCY_PLAN_ID=EU_863_870   # Frequency Plan ID for the exported devices
$ export CSV_PATH=<path>                # Local path to the exported CSV file.
```

The above settings are common for all the following export methods.

### Export Devices

**Single device:**

To export a single device using its Device EUI (e.g. `1111111111111112`):

```bash
# Export a device from the CSV to TTS format.
$ ttn-lw-migrate wanesy device 1111111111111112 > devices.json
```




**Multiple devices:**

In order to multiple devices, create a file named `device_euis.txt` with one device EUI per line:

```txt
1111111111111112
FF11111111111134
ABCD111111111100
```

And then export with:

```bash
# Export multiple devices from the CSV.
$ ttn-lw-migrate wanesy device < device_ids.txt
```




**All devices:**

In order to export all devices from the CSV file, use the `application` command.

```bash
# Export all devices from the CSV.
$ ttn-lw-migrate wanesy application --all
```


After exporting, devices can be imported in The Things Stack. See [add end devices in bulk in The Things Stack](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/adding-devices-in-bulk/) for details about importing devices.


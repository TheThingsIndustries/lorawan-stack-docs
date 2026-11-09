# Export End Device Data

> This section contains instructions on how to use the migration tooling to export end devices from supported LoRaWAN Networks, that can later be imported in The …

Source: https://www.thethingsindustries.com/docs/concepts/migration/exporting-end-devices/


This section contains instructions on how to use the migration tooling to export end devices from supported LoRaWAN Networks, that can later be imported in The Things Stack.

[`ttn-lw-migrate`](https://github.com/TheThingsNetwork/lorawan-stack-migrate) is a tool that can be used for migrating end devices and applications from supported LoRaWAN® networks (like [ChirpStack](https://www.chirpstack.io/)) to The Things Stack, or between The Things Stack distributions. This section provides details on how to install, configure and use this tool.

This tool works in a way that it exports descriptions of end devices and applications to a [JSON file](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/adding-devices-in-bulk/device-json/), that can later be [imported in The Things Stack](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/adding-devices-in-bulk/).

### Installation

The migration tool can be installed using package managers or manually from binary files. We highly recommend installing or upgrading to `ttn-lw-migrate` version `0.5.0` or newer, because some features like session migration are not available for prior versions.

**macOS:**

To install `ttn-lw-migrate` tool with `brew`:

```bash
brew install TheThingsNetwork/homebrew-lorawan-stack/ttn-lw-migrate
```

To upgrade `ttn-lw-migrate` tool if updates are available:

```bash
brew upgrade TheThingsNetwork/homebrew-lorawan-stack/ttn-lw-migrate
```




**Linux:**

To install `ttn-lw-migrate` tool with `snap`:

```bash
sudo snap install ttn-lw-migrate
```

To upgrade `ttn-lw-migrate` tool if updates are available:

```bash
sudo snap refresh ttn-lw-migrate
```




**Windows:**

Download the zipped archive with binary files for Windows from [Github](https://github.com/TheThingsNetwork/lorawan-stack-migrate/releases).

Extract the folder from ZIP archive and enter the folder. Double-click to run the `ttn-lw-migrate.exe` executable file.

After this, you will be notified that you can run `ttn-lw-migrate` from the command prompt.


### Usage

To use the `ttn-lw-migrate` tool after successful installation, use your terminal or command prompt to navigate to the folder where it is installed and run the commands from there. Run `ttn-lw-migrate help` to see all available commands and flags.

Currently available sources listed in the table below. For detailed migration instructions using these sources, check the linked sections.

| Option                                                                                                 | Used for                                                                  |
| :----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [`tts`](https://www.thethingsindustries.com/docs/concepts/migration/exporting-end-devices/export-from-tts/)                       | Migrating between The Things Stack distributions, tenants, and/or applications |
| [`chirpstack`](https://www.thethingsindustries.com/docs/concepts/migration/exporting-end-devices/export-from-chirpstack/)         | Migrating devices from ChirpStack version 4                               |
| [`chirpstack` (v3)](https://www.thethingsindustries.com/docs/concepts/migration/exporting-end-devices/export-from-chirpstack-v3/) | Migrating devices from ChirpStack version 3                               |
| [`firefly`](https://www.thethingsindustries.com/docs/concepts/migration/exporting-end-devices/export-from-firefly/)               | Migrating devices from Digimondo's Firefly                                |
| [`wanesy`](https://www.thethingsindustries.com/docs/concepts/migration/exporting-end-devices/export-from-wanesy/)                 | Migrating devices from Kerlink's Wanesy                                   |
| [`awsiot`](https://www.thethingsindustries.com/docs/concepts/migration/exporting-end-devices/export-from-awsiot/)                 | Migrating devices from AWS IoT                                            |
| `ttnv2`                                                                                                | (Discontinued ) Migrating from legacy V2 deployments           |


## Pages in this section

- [Export Devices from The Things Stack](https://www.thethingsindustries.com/docs/concepts/migration/exporting-end-devices/export-from-tts/index.md): This section explains how to configure the migration tool and use it to export end devices from The Things Stack, that can later be imported in other The Things …
- [Export End Devices from ChirpStack v3](https://www.thethingsindustries.com/docs/concepts/migration/exporting-end-devices/export-from-chirpstack-v3/index.md): This section contains instructions on how to configure migration tool and use it to export end devices from ChirpStack v3, that can later be imported in The …
- [Export End Devices from ChirpStack v4](https://www.thethingsindustries.com/docs/concepts/migration/exporting-end-devices/export-from-chirpstack/index.md): This section contains instructions on how to configure migration tool and use it to export end devices from ChirpStack v4, that can later be imported in The …
- [Export End Devices from Wanesy](https://www.thethingsindustries.com/docs/concepts/migration/exporting-end-devices/export-from-wanesy/index.md): This section contains instructions on how to configure migration tool and use it to convert end device information exported from Kerlink’s Wanesy Management …
- [Export End Devices from Firefly](https://www.thethingsindustries.com/docs/concepts/migration/exporting-end-devices/export-from-firefly/index.md): This section contains instructions on how to configure migration tool and use it to export end devices from Firefly, that can later be imported in The Things …
- [Export End Devices from AWS IoT](https://www.thethingsindustries.com/docs/concepts/migration/exporting-end-devices/export-from-awsiot/index.md): This section contains instructions on how to configure migration tool and use it to export end devices from AWS IoT, that can later be imported in The Things …
- [Troubleshooting](https://www.thethingsindustries.com/docs/concepts/migration/exporting-end-devices/troubleshooting/index.md): Troubleshooting the Migration tool


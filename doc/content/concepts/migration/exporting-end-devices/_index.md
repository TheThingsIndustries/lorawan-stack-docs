---
title: "Export End Device Data"
description: ""
weight: 2
aliases:
  [/migration/migration-tool/, /the-things-stack/migrating/import-devices]
---

This section contains instructions on how to use the migration tooling to export end devices from supported LoRaWAN Networks, that can later be imported in {{% tts %}}.

<!--more-->

[`ttn-lw-migrate`](https://github.com/TheThingsNetwork/lorawan-stack-migrate) is a tool that can be used for migrating end devices and applications from supported LoRaWAN® networks (like [ChirpStack](https://www.chirpstack.io/)) to {{% tts %}}, or between {{% tts %}} distributions. This section provides details on how to install, configure and use this tool.

This tool works in a way that it exports descriptions of end devices and applications to a [JSON file]({{< ref "/hardware/devices/adding-devices/adding-devices-in-bulk/device-json" >}}), that can later be [imported in {{% tts %}}]({{< ref "/hardware/devices/adding-devices/adding-devices-in-bulk" >}}).

### Installation

The migration tool can be installed using package managers or manually from binary files. We highly recommend installing or upgrading to `ttn-lw-migrate` version `0.5.0` or newer, because some features like session migration are not available for prior versions.

{{< tabs/container "macOS" "Linux" "Windows" >}}

{{< tabs/tab "macOS" >}}

To install `ttn-lw-migrate` tool with `brew`:

```bash
brew install TheThingsNetwork/homebrew-lorawan-stack/ttn-lw-migrate
```

To upgrade `ttn-lw-migrate` tool if updates are available:

```bash
brew upgrade TheThingsNetwork/homebrew-lorawan-stack/ttn-lw-migrate
```

{{</ tabs/tab >}}

{{< tabs/tab "Linux" >}}

To install `ttn-lw-migrate` tool with `snap`:

```bash
sudo snap install ttn-lw-migrate
```

To upgrade `ttn-lw-migrate` tool if updates are available:

```bash
sudo snap refresh ttn-lw-migrate
```

{{</ tabs/tab >}}

{{< tabs/tab "Windows" >}}

Download the zipped archive with binary files for Windows from [Github](https://github.com/TheThingsNetwork/lorawan-stack-migrate/releases).

Extract the folder from ZIP archive and enter the folder. Double-click to run the `ttn-lw-migrate.exe` executable file.

After this, you will be notified that you can run `ttn-lw-migrate` from the command prompt.

{{</ tabs/tab >}}

{{</ tabs/container >}}

### Usage

To use the `ttn-lw-migrate` tool after successful installation, use your terminal or command prompt to navigate to the folder where it is installed and run the commands from there. Run `ttn-lw-migrate help` to see all available commands and flags.

Currently available sources listed in the table below. For detailed migration instructions using these sources, check the linked sections.

| Option                                                                                                 | Used for                                                                  |
| :----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [`tts`]({{< ref "/concepts/migration/exporting-end-devices/export-from-tts" >}})                       | Migrating between {{% tts %}} distributions, tenants, and/or applications |
| [`chirpstack`]({{< ref "/concepts/migration/exporting-end-devices/export-from-chirpstack" >}})         | Migrating devices from ChirpStack version 4                               |
| [`chirpstack` (v3)]({{< ref "/concepts/migration/exporting-end-devices/export-from-chirpstack-v3" >}}) | Migrating devices from ChirpStack version 3                               |
| [`firefly`]({{< ref "/concepts/migration/exporting-end-devices/export-from-firefly" >}})               | Migrating devices from Digimondo's Firefly                                |
| [`wanesy`]({{< ref "/concepts/migration/exporting-end-devices/export-from-wanesy" >}})                 | Migrating devices from Kerlink's Wanesy                                   |
| [`awsiot`]({{< ref "/concepts/migration/exporting-end-devices/export-from-awsiot" >}})                 | Migrating devices from AWS IoT                                            |
| `ttnv2`                                                                                                | (Discontinued ) Migrating from legacy {{% ttnv2 %}} deployments           |

---
title: Exporting end device data from the old LNS
aliases:
  [
    /getting-started/migrating/migration-tool,
    /the-things-stack/migrating/migration-tool,
  ]
---

[`ttn-lw-migrate`](https://github.com/TheThingsNetwork/lorawan-stack-migrate) is a tool that can be used for exporting end devices and applications from supported LoRaWAN® networks to {{% tts %}} format, or between {{% tts %}} distributions.

<!--more-->

This section provides details on how to install, configure and use this tool.

This tool works in a way that it exports descriptions of end devices and applications to a [JSON file]({{< ref "/devices/adding-devices/adding-devices-in-bulk/device-json" >}}), that can later be [imported in {{% tts %}}]({{< ref "/devices/adding-devices/adding-devices-in-bulk" >}}).

## Installation

The migration tool can be installed using package managers or manually from binary files. We recommend to always keep the migration tooling up to date.

{{< tabs/container "macOS" "Linux" "Windows" >}}

{{< tabs/tab "macOS" >}}

To install `ttn-lw-migrate` with `brew`:

```bash
brew install TheThingsNetwork/homebrew-lorawan-stack/ttn-lw-migrate
```

To upgrade `ttn-lw-migrate` if updates are available:

```bash
brew upgrade TheThingsNetwork/homebrew-lorawan-stack/ttn-lw-migrate
```

{{</ tabs/tab >}}

{{< tabs/tab "Linux" >}}

To install `ttn-lw-migrate` with `snap`:

```bash
sudo snap install ttn-lw-migrate
```

To upgrade `ttn-lw-migrate` if updates are available:

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

## Usage

To use `ttn-lw-migrate` after successful installation, use your terminal or command prompt to navigate to the folder where it is installed and run the commands from there. Run `ttn-lw-migrate help` to see all available commands and flags.

```bash
ttn-lw-migrate help
```

| Source            | Section                                                                                                     | Comment for                                                                              |
| :---------------- | :---------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- | --- |
| `chirpstack`      | [ChirpStack v4]({{< ref "/the-things-stack/migrating/enddevices/export/export-from-chirpstack" >}})         | Export Devices from ChirpStack version This is supported from version `v0.12.0` onwards. |
| `chirpstack` (v3) | [ChirpStack v3]({{< ref "/the-things-stack/migrating/enddevices/export/export-from-chirpstack" >}})         | This is only supported in versions `v0.11.x`.                                            |
| `firefly`         | [Digimondo's firefly]({{< ref "/the-things-stack/migrating/enddevices/export/export-from-chirpstack" >}})   |                                                                                          |
| `wanesy`          | [Kerlink's Wanesy]({{< ref "/the-things-stack/migrating/enddevices/export/export-from-chirpstack" >}})      |                                                                                          |
| `ttnv2`           | [The Things Network v2]({{< ref "/the-things-stack/migrating/enddevices/export/export-from-chirpstack" >}}) |                                                                                          |     |
| `tts`             | [The Things Stack]({{< ref "/the-things-stack/migrating/enddevices/export/export-from-chirpstack" >}})      |                                                                                          |

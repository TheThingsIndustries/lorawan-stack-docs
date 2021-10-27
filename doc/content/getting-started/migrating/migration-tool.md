---
title: "Migration Tool"
description: ""
weight: 4
---

[`ttn-lw-migrate`](https://github.com/TheThingsNetwork/lorawan-stack-migrate) is a tool that can be used for migrating end devices and applications from {{% ttnv2 %}} and other supported LoRaWAN networks (like ChirpStack) to {{% tts %}}. This section provides a few ways to install this tool.

<!--more-->

This tool is used for exporting descriptions of end devices and applications to a [JSON file]({{< ref "/getting-started/migrating/device-json" >}}), that can later be [imported in {{% tts %}}]({{< ref "/getting-started/migrating/import-devices" >}}).

## Installation

The migration tool can be installed using package managers or manually from binary files. The following subsections contain instructions for recommended installation methods depending on your OS.

{{< note >}} We highly recommend installing or upgrading to `ttn-lw-migrate` version `0.5.0` or newer, because some features like session migration are not available for prior versions. {{</ note >}}

### macOS

To install `ttn-lw-migrate` tool with `brew`:

```bash
$ brew install TheThingsNetwork/homebrew-lorawan-stack/ttn-lw-migrate
```

To upgrade `ttn-lw-migrate` tool if updates are available:

```bash
$ brew upgrade TheThingsNetwork/homebrew-lorawan-stack/ttn-lw-migrate
```

### Linux

To install `ttn-lw-migrate` tool with `snap`:

```bash
$ sudo snap install ttn-lw-migrate
```

To upgrade `ttn-lw-migrate` tool if updates are available:

```bash
$ sudo snap refresh ttn-lw-migrate
```

### Windows

Download the zipped archive with binary files for Windows from [Github](https://github.com/TheThingsNetwork/lorawan-stack-migrate/releases).

Extract the folder from ZIP archive and enter the folder. Double-click to run the `ttn-lw-migrate.exe` executable file. 

After this, you will be notified that you can run `ttn-lw-migrate` from the command prompt. 

{{< note >}} To use the `ttn-lw-migrate` tool after successful installation, use your terminal or command prompt to navigate to the folder where it is installed and run the commands from there.

Run `ttn-lw-migrate help` to see all available commands and flags. {{</ note >}}

## List Available Sources

To list available sources that you can migrate your end devices and applications from:

```bash
$ ttn-lw-migrate sources
```

Currently, supported sources are `ttnv2` and `chirpstack`.

{{< note >}} For detailed instructions on migrating from {{% ttnv2 %}} and ChirpStack, read [Migrating End Devices from V2]({{< ref "/getting-started/migrating/migrating-from-v2" >}}) and [Migrating End Devices from ChirpStack]({{< ref "/getting-started/migrating/migrate-from-chirpstack" >}}) guides. {{</ note >}}

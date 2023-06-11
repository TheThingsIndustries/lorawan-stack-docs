---
title: "Migration Tool"
description: ""
weight: 2
aliases: [/getting-started/migrating/migration-tool]
---

[`ttn-lw-migrate`](https://github.com/TheThingsNetwork/lorawan-stack-migrate) is a tool that can be used for migrating end devices and applications from supported LoRaWAN® networks (like [ChirpStack](https://www.chirpstack.io/)) to {{% tts %}}, or between {{% tts %}} distributions. This section provides details on how to install, configure and use this tool.

<!--more-->

This tool works in a way that it exports descriptions of end devices and applications to a [JSON file]({{< ref "/the-things-stack/migrating/device-json" >}}), that can later be [imported in {{% tts %}}]({{< ref "/the-things-stack/migrating/import-devices" >}}).

## Installation

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

## Usage

To use the `ttn-lw-migrate` tool after successful installation, use your terminal or command prompt to navigate to the folder where it is installed and run the commands from there. Run `ttn-lw-migrate help` to see all available commands and flags.

To list available sources that you can migrate your end devices and applications from:

```bash
ttn-lw-migrate sources
```

Currently, there are three available sources listed in the table below. For detailed migration instructions using these three sources, check the linked sections.

> The `tts` source can be used for migrating devices between applications in the same {{% tts %}} tenant, migrating between different tenants, or migrating between different {{% tts %}} deployments.

|   Source  |   Section |   Used for    |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------- | :------------------------ |
| `tts`      | [Export Devices from {{% tts %}}]({{< ref "/the-things-stack/migrating/migration-tool/export-from-tts" >}}) | [Migrating between {{% tts %}} distributions]({{< ref "/the-things-stack/migrating/migrating-between-tts-distributions" >}})
| `chirpstack` | [Export Devices from ChirpStack]({{< ref "/the-things-stack/migrating/migration-tool/export-from-chirpstack" >}})            |  Migrating devices from ChirpStack
| `ttnv2`      | Discontinued | Migrating from legacy {{% ttnv2 %}} deployments

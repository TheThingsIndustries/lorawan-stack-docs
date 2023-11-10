---
title: "Migrate using the Migration Tool"
description: ""
weight: 2
aliases:
  [/getting-started/migrating/migrating-from-v2/migrate-using-migration-tool]
---

This section refers to migrating end devices to {{% tts %}} using [`ttn-lw-migrate` migration tool](https://github.com/TheThingsNetwork/lorawan-stack-migrate).

<!--more-->

## Prerequisites

1. [`ttn-lw-migrate` tool](https://github.com/TheThingsNetwork/lorawan-stack-migrate) version `0.5.0` or higher installed on your system. See the [Migration Tool]({{< ref "/the-things-stack/migrating/migration-tool" >}}) guide for detailed installation instructions.

## Configure the Environment

First, you need to configure a few environmental variables. Navigate to the folder where you installed `ttn-lw-migrate` and execute the following, replacing `ttn-v2-application-ID`, `ttn-v2-application-access-key`, and the `FREQUENCY_PLAN_ID` value:

```bash
export TTNV2_APP_ID="ttn-v2-application-ID"
export TTNV2_APP_ACCESS_KEY="ttn-v2-application-access-key"
export FREQUENCY_PLAN_ID="EU_863_870_TTN"
```

See the list of [supported Frequency Plans]({{< ref "/reference/frequency-plans" >}}).

If using Windows OS Command Prompt, replace `export` with `set` and remove the double-quotes in commands above:

```bash
set TTNV2_APP_ID=ttn-v2-application-ID
set TTNV2_APP_ACCESS_KEY=ttn-v2-application-access-key
set FREQUENCY_PLAN_ID=EU_863_870_TTN
```

Commands are slightly different if using Windows PowerShell, for example you could set the `TTNV2_APP_ID` variable as follows:

```powershell
$env:TTNV2_APP_ID='ttn-v2-application-ID'
```

Since migration is still possible only from a private The Things Industries V2 (SaaS) cluster, you need to configure one extra environmental variable:

```bash
export TTNV2_DISCOVERY_SERVER_ADDRESS="<instance-id>.thethings.industries:1900"
```

If the Discovery Server of your private The Things Industries V2 (SaaS) cluster does not use TLS, you will need to use `ttnv2.discovery-server-insecure` flag when running commands with the `ttn-lw-migrate` tool.

## Export End Devices from {{% ttnv2 %}}

Next, you can proceed with exporting one or more end devices, with or without their active session, from {{% ttnv2 %}} to a [JSON file]({{< ref "/devices/adding-devices/adding-devices-in-bulk/device-json" >}}).

{{< note >}} Migrating end devices from {{% ttnv2 %}} to {{% tts %}} is a one-way process, since LoRaWAN® devices may be handled by only one Network Server at a time. {{</ note >}}

Now, read the following subsections for detailed steps on how to migrate devices from {{% ttnv2 %}} to {{% tts %}} using `ttn-lw-migrate` tool:

- [Without persisting active session]({{< relref "establish-new-session" >}}) (preferred migration path)
- [With persisting active session]({{< relref "migrate-active-session" >}})

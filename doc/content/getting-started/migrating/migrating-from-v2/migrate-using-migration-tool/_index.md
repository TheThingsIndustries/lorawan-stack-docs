---
title: "Migrate using the Migration Tool"
description: ""
weight: 2
---

This section refers to migrating end devices to {{% tts %}} using [`ttn-lw-migrate` migration tool](https://github.com/TheThingsNetwork/lorawan-stack-migrate).

<!--more-->

## Prerequisites

1. [`ttn-lw-migrate` tool](https://github.com/TheThingsNetwork/lorawan-stack-migrate) version `0.5.0` or higher installed on your system.

{{< note >}} See the [Migration Tool]({{< ref "/getting-started/migrating/migration-tool" >}}) guide for detailed installation instructions. {{</ note >}}

## Configure the Environment

First, you need to configure a few environmental variables. Navigate to the folder where you installed `ttn-lw-migrate` and execute:

```bash
$ export TTNV2_APP_ID="ttn-v2-application-ID"
$ export TTNV2_APP_ACCESS_KEY="ttn-v2-application-access-key"
$ export FREQUENCY_PLAN_ID="EU_863_870_TTN"
```

If using Windows OS, replace `export` with `set` and remove the double-quotes in commands above:

```bash
$ set TTNV2_APP_ID=ttn-v2-application-ID
$ set TTNV2_APP_ACCESS_KEY=ttn-v2-application-access-key
$ set FREQUENCY_PLAN_ID=EU_863_870_TTN
```

{{< note >}} Change the `FREQUENCY_PLAN_ID` value to the frequency plan you are using. See the list of [supported Frequency Plans]({{< ref "/reference/frequency-plans" >}}). {{</ note >}}

If you are migrating end devices from a private The Things Industries V2 (SaaS) cluster, you need to configure one extra environmental variable:

```bash
$ export TTNV2_DISCOVERY_SERVER_ADDRESS="<instance-id>.thethings.industries:1900"
```

{{< note >}} If the Discovery Server of your private The Things Industries V2 (SaaS) cluster does not use TLS, you will need to use `ttnv2.discovery-server-insecure` flag when running commands with the `ttn-lw-migrate` tool. {{</ note >}}

## Export End Devices from {{% ttnv2 %}}

Next, you can proceed with exporting one or more end devices, with or without their active session, from {{% ttnv2 %}} to a [JSON file]({{< ref "/getting-started/migrating/device-json" >}}).

{{< note >}} Migrating end devices from {{% ttnv2 %}} to {{% tts %}} is a one-way process, since LoRaWAN devices may be handled by only one Network Server at a time. {{</ note >}}

Now, read the following subsections for detailed steps on how to migrate devices from {{% ttnv2 %}} to {{% tts %}} using `ttn-lw-migrate` tool:

- [Without persisting active session]({{< relref "establish-new-session" >}}) (preferred migration path)
- [With persisting active session]({{< relref "migrate-active-session" >}})

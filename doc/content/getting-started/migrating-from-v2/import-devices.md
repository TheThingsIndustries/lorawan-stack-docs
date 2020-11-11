---
title: Import End Devices in The Things Stack
weight: 50
---

## Create a New Application on {{% tts %}}

Create a new application on {{% tts %}} where the end devices will be imported by following the instructions for [Adding Applications]({{< ref "integrations/adding-applications" >}}).

>**Note:** In {{% tts %}}, applications do not have an `AppEUI`, the `AppEUI` is configured per-device.

## Import Devices

To import your devices in the application you created, use the `devices.json` file you exported using the V2 CLI.

The `devices.json` file can be imported using the Console or the CLI, according to the instructions from the [Importing Devices]({{< ref "getting-started/migrating-from-networks/import-devices" >}}) section.

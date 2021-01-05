---
title: "Creating Payload Formatters"
description: ""
weight: -1
---

This section explains how to set up Payload Formatters using the Console or CLI.

<!--more-->

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}

## Create an Application Payload Formatter in the Console

To create an Application payload formatter, navigate to the **Applications** tab and choose your application.

Within the **Application Overview**, select the **Payload Formatters** dropdown in the left menu.

Choose **Uplink** or **Downlink**.

Choose a **Formatter type**. 

{{< note >}} See the [Javascript]({{< relref "javascript" >}}), [CayenneLPP]({{< relref "cayenne" >}}), and [Device Repository]({{< relref "device-repo" >}}) payload formatter documentation for an explanation of the diffent types of payload formatters. {{</ note >}}

{{< figure src="../application.png" alt="Application" >}}

## Create a Device Specific Payload Formatter

To create a device specific payload formatter, navigate to the **Applications** tab. Choose your application.

Within the **Application Overview**, select **End Devices** in the left menu.

Choose your **End Device**.

Within the **End Device Overview**, select the **Payload Formatters** tab in the top menu.

Choose **Uplink** or **Downlink**.

Choose a **Formatter type**. 

{{< note >}} See the [Javascript]({{< relref "javascript" >}}), [CayenneLPP]({{< relref "cayenne" >}}), and [Device Repository]({{< relref "device-repo" >}}) payload formatter documentation for an explanation of the diffent types of payload formatters. {{</ note >}}

{{< figure src="../device.png" alt="Device" >}}

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

## Create an Application Payload Formatter using the CLI

To create an application specific payload formatter, use the following command when linking an application. If creating a [Javascript payload formatter]({{< relref "javascript" >}}), save your `Encoder` and `Decoder` functions to files and load them using the `formatter-parameter-local-file` parameter:

```bash
$ ttn-lw-cli applications link set app1 \
  --api-key NNSXS.VEEBURF3KR77ZR..
  --default-formatters.down-formatter FORMATTER_JAVASCRIPT \
  --default-formatters.down-formatter-parameter-local-file "encoder.js" \
  --default-formatters.up-formatter FORMATTER_JAVASCRIPT \
  --default-formatters.up-formatter-parameter-local-file "decoder.js"
```

To create a [CayenneLPP]({{< relref "cayenne" >}}) or [Device Repository]({{< relref "device-repo" >}}) application payload formatter, use the `FORMATTER_CAYENNELPP` or `FORMATTER_DEVICEREPO` constants. No `formatter-parameter-local-file` parameter is needed.

## Create a Device Specific Payload Formatter

It is possible to assign a device specific payload formatter when creating a device using the CLI. Use the following parameters during device creation, and if creating a [Javascript payload formatter]({{< relref "javascript" >}}), save your `Encoder` and `Decoder` functions to files and load them using the `formatter-parameter-local-file` parameter:

```bash
$ ttn-lw-cli end-devices create app1 dev1-with-formatter \
  --dev-eui 0004A30B001C0530 \
  --app-eui 800000000000000C \
  --frequency-plan-id EU_863_870 \
  --root-keys.app-key.key 752BAEC23EAE7964AF27C325F4C23C9A \
  --lorawan-version 1.0.3 \
  --lorawan-phy-version 1.0.3-a \
  --formatters.down-formatter FORMATTER_JAVASCRIPT \
  --formatters.down-formatter-parameter-local-file "encoder.js" \
  --formatters.up-formatter FORMATTER_JAVASCRIPT \
  --formatters.up-formatter-parameter-local-file "decoder.js"
```

To create a [CayenneLPP]({{< relref "cayenne" >}}) or [Device Repository]({{< relref "device-repo" >}}) device payload formatter, use the `FORMATTER_CAYENNELPP` or `FORMATTER_DEVICEREPO` constants. No `formatter-parameter-local-file` parameter is needed.

## Edit a Device Specific Payload Formatter

To change the payload formatter for an existing device, use the `end-devices update` command:

```bash
$ ttn-lw-cli end-devices set app1 dev1-with-formatter \
  --formatters.down-formatter FORMATTER_JAVASCRIPT \
  --formatters.down-formatter-parameter-local-file "encoder.js" \
  --formatters.up-formatter FORMATTER_JAVASCRIPT \
  --formatters.up-formatter-parameter-local-file "decoder.js"
```

To unset the payload formatters, use the `--unset` flag. The command below will unset all device specific payload formatters:

```bash
$ ttn-lw-cli end-devices set app1 dev1-with-formatter \
  --unset "formatters"
```

It is also possible to unset the uplink or downlink formatters separately:

```bash
$ ttn-lw-cli end-devices set app1 dev1-with-formatter \
  --unset "formatters.up-formatter,formatters.up-formatter-parameter"
```

{{< /tabs/tab >}}

{{< /tabs/container >}}

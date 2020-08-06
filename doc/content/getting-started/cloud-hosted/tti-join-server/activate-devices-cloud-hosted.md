---
title: "Activating Devices on Cloud Hosted"
description: ""
weight: 20
distribution: ["Cloud Hosted"]
---

The Things Industries Join Server is a LoRaWAN Join Server. Learn how to activate devices on The Things Industries Cloud Hosted.

<!--more-->

{{< cli-only >}}

## Prerequisites

1. Command-line interface (CLI) configuration file *with Cloud Hosted cluster*. See [The Things Industries Join Server]({{< relref "../tti-join-server" >}})
2. Devices registered in The Things Industries Join Server. You can achieve this in two ways:
   1. Register devices with root keys. See [registering devices on The Things Industries Join Server]({{< relref "register-devices" >}})
   2. Claim secure elements. See [Claim ATECC608A-TNGLORA secure elements]({{< ref "/devices/claim-atecc608a" >}})

## Login with CLI

Use the command-line interface (CLI) configuration file with Cloud Hosted cluster. 

```bash
$ ttn-lw-cli login
```

## Register

When registering the devices on a Network Server and Application Server, you need the following information:

1. The NetID of The Things Network: `000013`
2. LoRaWAN version (i.e. `1.0.2`)
3. LoRaWAN Regional Parameters version (i.e. `1.0.2-b`)
4. Frequency plan (i.e. `EU_863_870` or `US_902_928`)
   
   >Hint: List the supported LoRaWAN versions, regional parameters versions, frequency plans and other options with:
   ```bash
   $ ttn-lw-cli end-devices list-frequency-plans
   $ ttn-lw-cli end-devices set --help
   ```

To register the device in application `test-app` with device ID `eui-0004a310001ff9e0`:

```bash
$ ttn-lw-cli end-devices set test-app eui-0004a310001ff9e0 \
  --net-id 000013 \
  --lorawan-version 1.0.2 \
  --lorawan-phy-version 1.0.2-b \
  --frequency-plan-id EU_863_870 \
  --supports-join \
  --touch
```

<details>
<summary>Show output</summary>

```json
{
  "ids": {
    "device_id": "eui-0004a310001ff9e0",
    "application_ids": {
      "application_id": "test-app"
    },
    "dev_eui": "0004A310001FF9E0",
    "join_eui": "70B3D57ED0000000"
  },
  "created_at": "2019-12-06T17:19:47.330Z",
  "updated_at": "2019-12-09T13:01:30.207753911Z",
  "network_server_address": "tti.eu1.cloud.thethings.industries",
  "join_server_address": "tti.join.cloud.thethings.industries",
  "lorawan_version": "1.0.2",
  "lorawan_phy_version": "1.0.2-b",
  "frequency_plan_id": "EU_863_870",
  "supports_join": true,
  "net_id": "000013"
}
```

</details>

You can now activate the devices on The Things Industries Cloud Hosted.

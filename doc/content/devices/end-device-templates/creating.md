---
title: "Creating Templates"
description: ""
weight: 2
---

{{< cli-only >}}

You can create a device template from an existing device or extend an existing device template. You can also create a new template from scratch.

We define some user parameters that will be used below:

```bash
APP_ID="app1" 
DEVICE_ID="dev1"
FREQUENCY_PLAN="EU_863_870"
LORAWAN_VERSION="1.0.3"
LORAWAN_PHY_VERSION="1.0.3-a"
```

Make sure to modify these according to your setup.

## Create from existing device

You can use the `end-device template create` command to create a template from an existing device.

By default, `end-device template create` strips the device's application ID, device ID, `JoinEUI`, `DevEUI` and server addresses to create a generic template.

You can include the end device identifiers by passing the concerning flags: `--application-id`, `--device-id`, `--join-eui` and `--dev-eui`.

Pipe the output from getting a device to create a template, for example:

```bash
ttn-lw-cli end-devices get $APP_ID $DEVICE_ID \
  --lorawan-version $LORAWAN_VERSION \
  --lorawan-phy-version $LORAWAN_PHY_VERSION \
  | ttn-lw-cli end-devices template create > template.json
```

<details><summary>Output</summary>

```json
{
  "end_device": {
    "ids": {
      "application_ids": {

      }
    },
    "created_at": "0001-01-01T00:00:00Z",
    "updated_at": "0001-01-01T00:00:00Z",
    "lorawan_version": "1.0.3",
    "lorawan_phy_version": "1.0.3-a"
  },
  "field_mask": {
    "paths": [
      "lorawan_version",
      "lorawan_phy_version"
    ]
  }
}
```
</details>

## Extend existing template

Use the `end-device template extend` command to extend a template:

```bash
cat template.json \
  | ttn-lw-cli end-devices template extend \
  --frequency-plan-id $FREQUENCY_PLAN
```

<details><summary>Output</summary>

```json
{
  "end_device": {
    "ids": {
      "application_ids": {

      }
    },
    "created_at": "0001-01-01T00:00:00Z",
    "updated_at": "0001-01-01T00:00:00Z",
    "attributes": {
    },
    "lorawan_version": "1.0.3",
    "lorawan_phy_version": "1.0.3-a",
    "frequency_plan_id": "EU_863_870"
  },
  "field_mask": {
    "paths": [
      "lorawan_phy_version",
      "frequency_plan_id",
      "lorawan_version"
    ]
  }
}
```
</details>

See `ttn-lw-cli end-devices template extend --help` for all the fields that can be set.

## Create from scratch

The `end-device template extend` can also be used to create a new template from scratch by simply not piping an existing device as input.

For example, create a new template from scratch:

```bash
ttn-lw-cli end-devices template extend \
  --lorawan-version $LORAWAN_VERSION \
  --lorawan-phy-version $LORAWAN_PHY_VERSION \
  --frequency-plan-id $FREQUENCY_PLAN
```

<details><summary>Output</summary>

```json
{
  "end_device": {
    "ids": {
      "application_ids": {

      }
    },
    "created_at": "0001-01-01T00:00:00Z",
    "updated_at": "0001-01-01T00:00:00Z",
    "attributes": {
    },
    "lorawan_version": "1.0.3",
    "lorawan_phy_version": "1.0.3-a",
    "frequency_plan_id": "EU_863_870"
  },
  "field_mask": {
    "paths": [
      "frequency_plan_id",
      "lorawan_phy_version",
      "lorawan_version"
    ]
  }
}
```
</details>

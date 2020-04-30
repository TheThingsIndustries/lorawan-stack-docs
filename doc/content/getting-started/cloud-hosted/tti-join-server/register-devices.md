---
title: "Register Devices"
description: ""
weight: 10
---

The Things Industries Join Server is a LoRaWAN Join Server. Learn how to register devices to activate on The Things Industries Cloud Hosted or any LoRaWAN network.

<!--more-->

{{< cli-only >}}

## Prerequisites

1. When using the command-line interface (CLI), a configuration file *with Join Server only*. See [The Things Industries Join Server]({{< relref "../tti-join-server" >}}).
2. JoinEUI/AppEUI is either issued from a IEEE block that you own, or set to `70B3D57ED0000000`.
3. DevEUIs are issued from a IEEE block that you own.
4. Root keys are generated randomly per device.

Learn more about [obtaining a IEEE MAC Address Block](https://standards.ieee.org/products-services/regauth/index.html) for JoinEUI/AppEUI and DevEUIs.

## Login with CLI

Use the command-line interface (CLI) configuration file with Join Server only. 

```bash
$ ttn-lw-cli login
```

## Register

You can register devices that support LoRaWAN 1.0.x and 1.1.x activation. The actual LoRaWAN version of the session depends on the end device and the LoRaWAN network capabilities and configuration.

It is recommended to provision the LoRaWAN 1.1.x NwkKey for future compliance. This allows the device for joining as LoRaWAN 1.0 as well, only using the AppKey.

### LoRaWAN 1.0.x

To register a LoRaWAN 1.0.x device in application `test-app`, device ID `test-device`, AppEUI `70B3D57ED0000000` and DevEUI `0004A310001FF9E0` and an AppKey:

```bash
$ ttn-lw-cli end-devices create test-app test-device \
  --app-eui 70B3D57ED0000000 \
  --dev-eui 0004A310001FF9E0 \
  --root-keys.app-key.key D3FD8EEED7E8880025CC63D5E8E1D7FB
```

<details>
<summary>Show output</summary>

```json
{
  "ids": {
    "device_id": "test-device",
    "application_ids": {
      "application_id": "test-app"
    },
    "dev_eui": "0004A310001FF9E0",
    "join_eui": "70B3D57ED0000000"
  },
  "created_at": "2019-12-11T16:06:40.595Z",
  "updated_at": "2019-12-11T16:06:41.819240805Z",
  "attributes": {
  },
  "join_server_address": "tti.join.cloud.thethings.industries",
  "root_keys": {
    "app_key": {
      "key": "D3FD8EEED7E8880025CC63D5E8E1D7FB"
    }
  }
}

```

</details>

### LoRaWAN 1.1.x

To register a LoRaWAN 1.1.x device in application `test-app`, device ID `test-device`, JoinEUI `70B3D57ED0000000` and DevEUI `0004A310001FF9E0` and an AppKey:

```bash
$ ttn-lw-cli end-devices create test-app test-device \
  --join-eui 70B3D57ED0000000 \
  --dev-eui 0004A310001FF9E0 \
  --root-keys.app-key.key D3FD8EEED7E8880025CC63D5E8E1D7FB \
  --root-keys.nwk-key.key 4EAF77DA839DEE8F5003ECC4FBED8135
```

<details>
<summary>Show output</summary>

```json
{
  "ids": {
    "device_id": "test-device",
    "application_ids": {
      "application_id": "test-app"
    },
    "dev_eui": "0004A310001FF9E0",
    "join_eui": "70B3D57ED0000000"
  },
  "created_at": "2019-12-11T16:10:20.092Z",
  "updated_at": "2019-12-11T16:10:20.250739580Z",
  "attributes": {
  },
  "join_server_address": "tti.join.cloud.thethings.industries",
  "supports_join": true,
  "root_keys": {
    "app_key": {
      "key": "D3FD8EEED7E8880025CC63D5E8E1D7FB"
    },
    "nwk_key": {
      "key": "4EAF77DA839DEE8F5003ECC4FBED8135"
    }
  }
}

```

</details>

### Advanced Settings

As part of the end device `create` and `update` CLI commands, you can specify advanced settings.

On create, the `--with-root-keys` flag allows for generating root keys randomly.

The `--resets-join-nonces={true|false}` indicates whether the DevNonce and AppNonce/JoinNonce are allowed to reset. Use this with caution in research and development scenarios only: enabling this allows for join replay attacks.

The `--claim-authentication-code` flags allow for setting the claim authentication code and validity. On create, you can specify `--with-claim-authentication-code` to generate a random code.

- `--claim-authentication-code.value`: alphanumeric secret value.
- `--claim-authentication-code.valid-from`: date and time when the code becomes valid.
- `--claim-authentication-code.valid-to`: date and time when the code expires.

The claim authentication code can be part of QR codes. [Learn how to generate QR codes]({{< ref "/devices/generate-qr-code" >}}).

## Next Steps

You can now activate the devices on The Things Industries Cloud Hosted.

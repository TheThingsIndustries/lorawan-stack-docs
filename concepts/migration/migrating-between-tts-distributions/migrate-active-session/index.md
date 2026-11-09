# Migrate Active Device Session

> This section explains how to migrate end devices from The Things Stack Sandbox to The Things Stack Cloud while persisting sessions that were already established …

Source: https://www.thethingsindustries.com/docs/concepts/migration/migrating-between-tts-distributions/migrate-active-session/


This section explains how to migrate end devices from The Things Stack Sandbox to The Things Stack Cloud while persisting sessions that were already established between those devices and The Things Stack Sandbox.

> **Note:** Keep in mind that [migrating devices without persisting active sessions](https://www.thethingsindustries.com/docs/concepts/migration/migrating-between-tts-distributions/establish-new-session/) is highly recommended.


Read the instructions below to migrate your OTAA or ABP devices.

### Note on Gateway Migration

Even though they are both connected to [Packet Broker](https://www.thethingsindustries.com/docs/concepts/packet-broker/), The Things Stack Sandbox and The Things Stack Cloud use different DevAddr blocks.

When an active device session is migrated from The Things Stack Sandbox to The Things Stack Cloud, the DevAddr that the device was assigned with (OTAA) or programmed with (ABP) when it joined The Things Stack Sandbox will be preserved. Since Packet Broker routes traffic according to the DevAddr blocks, in case of migrating an active session to The Things Stack Cloud it won't be able to route your device's traffic properly, because your device still has its The Things Stack Sandbox-related DevAddr.

Hence, to successfully migrate an active device session from The Things Stack Sandbox to The Things Stack Cloud, you also need to migrate your gateway to The Things Stack Cloud. See instructions for [Migrating Gateways](https://www.thethingsindustries.com/docs/concepts/migration/gateway-migration/). The ideal scenario would be to migrate your gateway and your device simultaneously, in order to not loose any traffic.

## Migrate OTAA and ABP Devices

Since migrating an active session implies migrating a large number of parameters that cannot be configured manually, it is possible to do it only using the [migration tool](https://www.thethingsindustries.com/docs/concepts/migration/) or the [CLI](https://www.thethingsindustries.com/docs/concepts/features/cli/).

**Migration tool:**

For detailed instructions on how to configure the migration tool before exporting your device and how to adjust the following command for migrating multiple devices or whole applications, head over to [Export Devices from The Things Stack](https://www.thethingsindustries.com/docs/concepts/migration/exporting-end-devices/export-from-tts/).

To export device using the [migration tool](https://www.thethingsindustries.com/docs/concepts/migration/) with its active session, use the following command:

```bash
ttn-lw-migrate device --source tts 'my-device' > devices.json
```

The migration tool retains session of extracted devices by default.

Before your device's session is imported in The Things Stack Cloud, you need to completely delete your device from The Things Stack Sandbox to prevent conflicts. To do it, use the following command:

```bash
ttn-lw-migrate device --source tts 'my-device' \
    --tts.delete-source-device
```

Next, you need to import the `devices.json` file in your The Things Stack Cloud application. See instructions on how to [add end devices in bulk in The Things Stack](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/adding-devices-in-bulk/). Keep in mind that if you are using the CLI to import devices, you first have to configure it to connect to The Things Stack Cloud. See [Configuring the CLI](https://www.thethingsindustries.com/docs/concepts/features/cli/configuring-cli/) guide for instructions.




**CLI:**

Migrating an active OTAA or ABP device session means the existing session that was established between the device and The Things Stack Sandbox will just be transferred to The Things Stack Cloud. To migrate active device sessions from The Things Stack Sandbox to The Things Stack Cloud using the CLI, follow the steps described below.

First, configure your CLI to connect to The Things Stack Sandbox. See [Configuring the CLI](https://www.thethingsindustries.com/docs/concepts/features/cli/configuring-cli/) guide for instructions. Make sure you also perform a [Login with the CLI](https://www.thethingsindustries.com/docs/concepts/features/cli/login/) to The Things Stack Sandbox.

> **Note:** We recommend to use the latest version of the CLI. Instructions for upgrading the CLI if you already have it installed are available in the [Installing the CLI](https://www.thethingsindustries.com/docs/concepts/features/cli/installing-cli/) guide.


To export your OTAA device's session from The Things Stack Sandbox:

```bash
ttn-lw-cli end-devices get --application-id <app-id> --device-id <device-id> \
    --name \
    --description \
    --lorawan-version \
    --lorawan-phy-version \
    --frequency-plan-id \
    --supports-join \
    --root-keys \
    --mac-settings \
    --mac-state \
    --session > device-session.json
```

To export your ABP device's session from The Things Stack Sandbox is just slightly different:

```bash
ttn-lw-cli end-devices get --application-id <app-id> --device-id <device-id> \
    --name \
    --description \
    --lorawan-version \
    --lorawan-phy-version \
    --frequency-plan-id \
    --supports-join \
    --mac-settings \
    --mac-state \
    --session > device-session.json
```

The command above will export your device's session to the `device-session.json` file in the current folder. Open the file with a text editor and remove the following fields: `join_server_address`, `network_server_address` and `application_server_address`.

Before your device's session is imported in The Things Stack Cloud, you need to completely delete your device from The Things Stack Sandbox to prevent conflicts.

Next, you need to import the `devices.json` file in your The Things Stack Cloud application. See instructions on how to [add end devices in bulk in The Things Stack](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/adding-devices-in-bulk/). Keep in mind that if you are using the CLI to import devices, you first have to configure it to connect to The Things Stack Cloud. Again, see [Configuring the CLI](https://www.thethingsindustries.com/docs/concepts/features/cli/configuring-cli/) guide for instructions.


When your device's session is finally imported in The Things Stack Cloud, assuming that your gateway was also migrated to The Things Stack Cloud, you will see uplinks arriving from your device.


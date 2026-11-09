# Between The Things Stack distributions

> This section explains how to migrate your devices between The Things Stack distributions.

Source: https://www.thethingsindustries.com/docs/concepts/migration/migrating-between-tts-distributions/


This section explains how to migrate your devices between The Things Stack distributions.

There are multiple methods that you can use to migrate your devices from source The Things Stack distribution to target The Things Stack distribution, depending on if you want to migrate them with or without their existing session, and how many devices you wish to migrate. These methods include using the [migration tool](https://www.thethingsindustries.com/docs/concepts/migration/), The Things Stack [Console](https://www.thethingsindustries.com/docs/concepts/features/console/) or The Things Stack [CLI](https://www.thethingsindustries.com/docs/concepts/features/cli/).

> **Note:** We highly recommend using the [migration tool](https://www.thethingsindustries.com/docs/concepts/migration/) and [migrating devices without persisting their active session](https://www.thethingsindustries.com/docs/concepts/migration/migrating-between-tts-distributions/establish-new-session/).


Keep reading to learn how to migrate your devices using all of the above mentioned methods. As an example, we demonstrate migrating from The Things Stack Sandbox to The Things Stack Cloud.

## Prerequisites

1. A user account on source The Things Stack with an application containing registered devices.
2. A user account on target The Things Stack.

> **Note:** We recommend testing migration on a single end device or a small batch of end devices in order to make sure the migration process goes as expected.


## Add Application in target The Things Stack

You first need to add a new application in target The Things Stack. See [Adding Applications](https://www.thethingsindustries.com/docs/integrations/adding-applications/) for detailed instructions.

When adding an application in target The Things Stack, the Application ID does not have to be the same as the one in source The Things Stack.

## Add Payload Formatters and Integrations in target The Things Stack

After creating an application in target The Things Stack, you need to add the associated elements like application-level payload formatters and integrations. Commonly, you can copy-paste payload formatters from source The Things Stack to target The Things Stack, and you can recreate all integrations on target The Things Stack in the same way as you created them on source The Things Stack.

See [Payload Formatters](https://www.thethingsindustries.com/docs/integrations/payload-formatters/) and [Integrations](https://www.thethingsindustries.com/docs/integrations/) for more info.

## Migrate End Devices and Gateways

Instructions for migrating your devices will differ depending on if you are using OTAA or ABP devices, and if you want to preserve their active session or not. Migrating your gateway will be needed in some cases. Choose your scenario and find the instructions in the following subsections.

If you experience issues with devices or gateways that you've migrated, check out the [Troubleshooting Devices](https://www.thethingsindustries.com/docs/hardware/devices/troubleshooting/) and [Troubleshooting Gateways](https://www.thethingsindustries.com/docs/hardware/gateways/troubleshooting/) sections.


## Pages in this section

- [Migrate Without Persisting Active Session](https://www.thethingsindustries.com/docs/concepts/migration/migrating-between-tts-distributions/establish-new-session/index.md): This section explains how to migrate end devices from The Things Stack Sandbox to The Things Stack Cloud without persisting sessions that were established …
- [Migrate Active Device Session](https://www.thethingsindustries.com/docs/concepts/migration/migrating-between-tts-distributions/migrate-active-session/index.md): This section explains how to migrate end devices from The Things Stack Sandbox to The Things Stack Cloud while persisting sessions that were already established …


---
title: "Between The Things Stack distributions"
description: ""
aliases: [/the-things-stack/migrating/migrating-between-tts-distributions]
---

This section explains how to migrate your devices between {{% tts %}} distributions.

<!--more-->

There are multiple methods that you can use to migrate your devices from source {{% tts %}} distribution to target {{% tts %}} distribution, depending on if you want to migrate them with or without their existing session, and how many devices you wish to migrate. These methods include using the [migration tool]({{<ref "/concepts/migration" >}}), {{% tts %}} [Console]({{< ref "/concepts/features/console" >}}) or {{% tts %}} [CLI]({{< ref "/concepts/features/cli" >}}).

{{< note >}} We highly recommend using the [migration tool]({{<ref "/concepts/migration" >}}) and [migrating devices without persisting their active session]({{< ref "/concepts/migration/migrating-between-tts-distributions/establish-new-session" >}}). {{</ note >}}

Keep reading to learn how to migrate your devices using all of the above mentioned methods. As an example, we demonstrate migrating from {{% ttss %}} to {{% tts %}} Cloud.

## Prerequisites

1. A user account on source {{% tts %}} with an application containing registered devices.
2. A user account on target {{% tts %}}.

{{< note >}} We recommend testing migration on a single end device or a small batch of end devices in order to make sure the migration process goes as expected. {{</ note >}}

## Add Application in target {{% tts %}}

You first need to add a new application in target {{% tts %}}. See [Adding Applications]({{< ref "/integrations/adding-applications" >}}) for detailed instructions.

When adding an application in target {{% tts %}}, the Application ID does not have to be the same as the one in source {{% tts %}}.

## Add Payload Formatters and Integrations in target {{% tts %}}

After creating an application in target {{% tts %}}, you need to add the associated elements like application-level payload formatters and integrations. Commonly, you can copy-paste payload formatters from source {{% tts %}} to target {{% tts %}}, and you can recreate all integrations on target {{% tts %}} in the same way as you created them on source {{% tts %}}.

See [Payload Formatters]({{< ref "/integrations/payload-formatters" >}}) and [Integrations]({{< ref "/integrations" >}}) for more info.

## Migrate End Devices and Gateways

Instructions for migrating your devices will differ depending on if you are using OTAA or ABP devices, and if you want to preserve their active session or not. Migrating your gateway will be needed in some cases. Choose your scenario and find the instructions in the following subsections.

If you experience issues with devices or gateways that you've migrated, check out the [Troubleshooting Devices]({{< ref "/hardware/devices/troubleshooting" >}}) and [Troubleshooting Gateways]({{< ref "/hardware/gateways/troubleshooting" >}}) sections.

---
title: "Migrating End Devices from Community Edition to Cloud"
description: ""
weight: 1
distributions: ["Community", "Cloud"]
---

This section explains how to migrate your devices from [{{% tts %}} Community Edition]({{< ref "/getting-started/ttn" >}}) to [{{% tts %}} Cloud]({{< ref "/getting-started/cloud-hosted" >}}).

<!--more-->

You can migrate your devices from {{% tts %}} Community Edition to {{% tts %}} Cloud using {{% tts %}} [Console]({{< ref "/getting-started/console" >}}), the [CLI]({{< ref "/getting-started/cli" >}}) or the [migration tool]({{< ref "/getting-started/migrating/migration-tool" >}}), depending on if you want to migrate them with or without their existing session, and how many devices you wish to migrate.

## Prerequisites

1. A user account on {{% tts %}} Community Edition with an application containing registered devices.
2. A user account on {{% tts %}} Cloud.

We recommend testing migration on a single end device or a small batch of end devices in order to make sure the migration process goes as expected.

## Add Application in {{% tts %}} Cloud

You first need to add a new application in {{% tts %}} Cloud. See [Adding Applications]({{< ref "/integrations/adding-applications" >}}) for detailed instructions.

When adding an application in {{% tts %}} Cloud, the Application ID does not have to be the same as the one in {{% tts %}} Community Edition.

## Add Payload Formatters and Integrations in {{% tts %}} Cloud

After creating an application in {{% tts %}} Cloud, you need to add the associated elements like application-level payload formatters and integrations. Commonly, you can copy-paste payload formatters from {{% tts %}} Community Edition to {{% tts %}} Cloud, and you can recreate all integrations on {{% tts %}} Cloud in the same way as you created them on {{% tts %}} Community Edition.

See [Payload Formatters]({{< ref "/integrations/payload-formatters" >}}) and [Integrations]({{< ref "/integrations" >}}) for more info.

## Migrate End Devices and Gateways

Instructions for migrating your devices will differ depending on if you are using OTAA or ABP devices, and if you want to preserve their active session or not. Migrating your gateway will be needed in some cases. Choose your scenario and find the instructions in the following subsections.
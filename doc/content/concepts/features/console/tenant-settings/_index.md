---
title: "Tenant Settings"
description: ""
weight: 1
distributions: ["Cloud", "Enterprise"]
aliases:
  [
    /getting-started/console/tenant-settings,
    /concepts/featuresconsole/tenant-settings,
    /the-things-stack/interact/console/tenant-settings,
  ]
---

This section explains how to modify tenant settings in {{% tts %}} Console.

<!--more-->

{{< note >}} Only tenant admins have access to tenant settings. {{</ note >}}

Navigate to the **Global network settings** tab under the **Admin Panel** in the left-hand menu. Here, you can configure general {{% tts %}} settings such as user registration rules, global rights or network configuration for your tenant.

For all below mentioned options, you can choose to **Use global default settings** to keep the defaults set by the deployment owners.

{{< figure src="tenant-settings.png" alt="Navigate to tenant settings" >}}

## User registration

In this section, you can customize how new user accounts are created, handled and validated.

To enable user registration via registration screen, check the **Enable user registration** box. If you leave this option disabled, users will no longer see the registration screen, so they will not be able to register on their own, but the admin user will still be able to create new users manually.

If the **Require admin approval of new users** option is enabled, new users will have to be approved by admin upon registration. If this option is disabled, new users are automatically approved.

If the **Require validation of user contact information** option is disabled, new users will have to verify email they provided during registration.

An admin can also choose to **Allow user registration via invitation only**. Admin can also configure the **Duration of the invitation token** to define how long the invitation token will be valid after being sent via email. Sending an invitation is currently available only via CLI.

{{< figure src="user-registration.png" alt="User registration settings" >}}

## Password requirement

In this section, you can control security characteristics of user defined passwords.

Configurable parameters of user defined passwords are minimum and maximum length, minimum number of digits, special characters and uppercase letters.

{{< figure src="password-requirements.png" alt="Password requirements" >}}

## User rights

In this section, you can manage global rights for regular users and administrators.

If you want to provide admins with a full access to all information (including keys) of entities not owned by admins, check the **Grant all rights to admins** box.

You can choose to allow users to create applications, organizations, gateways and OAuth clients.

{{< figure src="user-rights.png" alt="User rights settings" >}}

## Uploads

In this section, you can control user image uploads and Gravatar settings.

If you want to enable users to upload images of end devices, leave the **Disable user upload of end device pictures** box unchecked. Note that uploading end device images is currently available only via CLI.

If you want to enable users to upload profile pictures, leave the **Disable profile picture uploads** box unchecked.

If you want to enable users to use a [Gravatar](https://en.gravatar.com/) associated with the email address they registered with, check the **Enable Gravatar for profile pictures** box.

{{< figure src="user-uploads.png" alt="User uploads settings" >}}

## Network settings

In this section, you can manage deduplication windows and end device address prefixes.

The **Deduplication windows** sets the time period during which duplicate uplinks are collected as metadata (`rx_metadata`).

The **Cooldown window** sets a time period after the deduplication window during which duplicate uplinks are discarded.

Deduplication and cooldown windows affect the initial delay of uplink forwarding for the sake of collecting metadata and are typically modified to align this trade-off with network requirements.

**Device address prefixes** are used to generate the end device address of an end device when it joins to {{% tts %}} network. These prefixes are used to identify traffic from the associated network. When using [Packet Broker]({{< ref "/concepts/packet-broker" >}}), it may be required to reregister the network if the device address prefixes are changed.

{{< figure src="network-settings.png" alt="Network settings" >}}

## Branding

If you want to customize the [Web UI Branding]({{< ref "/cloud/branding" >}}) of your tenant's Console, you need to provide the source of your branding assets. Paste the source URL into the **Branding base URL** field.

{{< figure src="branding.png" alt="Branding assets source URL" >}}

---
title: "ID and EUI Constraints"
description: ""
---

This reference explains how {{% tts %}} deals with IDs and EUIs, including regular expression requirements, uniqueness, and how deletion is handled.

<!--more-->

## Requirements of an ID

An ID in {{% tts %}} must:

- Have a length of between 3 and 36 characters (inclusive)
  - Exception: User IDs can have a length between 2 and 36 characters (inclusive)
- Consist of lowercase letters, numbers, and non-consecutive dashes
- **NOT** begin or end with a dash

The following regular expression is used to validate IDs (with the exception of the User ID):

`(^[a-z0-9](?:[-]?[a-z0-9]){2,}$)`

## Requirements of an EUI

An EUI (Extended Unique Identifier) is a 64-bit unique identifier as defined by [IEEE](https://standards.ieee.org/wp-content/uploads/import/documents/tutorials/eui.pdf). When you purchase a device or a gateway, the manufacturer already assigns an EUI to it. EUIs must be registered with IEEE and it is not permitted to use an EUI that's owned by someone else.
For testing, you can generate a random one in accordance with the test ranges defined by the [IEEE 802 standards](https://ieee802.org/).

## Uniqueness

Within a deployment, there can only be:

- One tenant with the same ID
- One gateway with the same EUI (across all tenants)
- One end device with the same combination of DevEUI and JoinEUI (across all tenants)

Within a tenant, there can only be:

- One user or organization with the same ID
- One application with the same ID
- One gateway with the same ID
- One OAuth client with the same ID

Within an application, there can only be:

- One end device with the same ID

## Deleted Entities

When deleting entities, some IDs are retained so that they can't be registered again. This is for security reasons as integrations may store historical data by ID, and you don't want that someone else can register an ID and get your historical data.

EUIs of gateways and end device are released when deleted.

- When a user or organization is deleted, the ID is retained and cannot be reused within the tenant
- When an application is deleted, the ID is retained and cannot be reused within the tenant
- When a gateway is deleted, the ID is retained but the gateway EUI can be reused
- When an end device is deleted, the ID and EUI are released and can be reused

{{< note >}} Entity IDs that were purged from an admin account are released and can be reused. Also, keep in mind that {{% tts %}} allows you to restore deleted entities within 24 hours from the time when they were deleted. {{</ note >}}

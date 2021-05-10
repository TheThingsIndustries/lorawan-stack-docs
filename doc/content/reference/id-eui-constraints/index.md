---
title: "ID and EUI Constraints"
description: ""
---

This reference explains how {{% tts %}} deals with IDs and EUIs, including regular expression requirements, uniqueness, and how deletion is handled.

<!--more-->

## Requirements of an ID or EUI

An ID or EUI in {{% tts %}} must:

- Have a length of between 2 and 36 characters (inclusive)
- Consist of lowercase letters, numbers, and non-consecutive dashes
- **NOT** begin or end with a dash

The following regular expression is used to validate IDs and EUIs:

`(^[a-z0-9](?:[-]?[a-z0-9]){1,}$)`

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

---
title: "Migrating End Devices from V2"
description: ""
weight: 2
aliases: ["/getting-started/migrating-from-v2", "/getting-started/migrating-from-v2/configure-ttnctl", "/getting-started/migrating-from-v2/export-v2-devices", "/getting-started/migrating/migrating-from-v2"]
---

This section documents the process of migrating end devices from {{% ttnv2 %}} to {{% tts %}}.

<!--more-->

{{< note >}} As previously announced, on **July 1, 2021** users will no longer be able to add new applications, devices and gateways on {{% ttnv2 %}} deployments, i.e. {{% ttnv2 %}} is going to **read-only** mode.

Make sure to migrate your gateways and devices from {{% ttnv2 %}} to {{% tts %}} as soon as possible, since {{% ttnv2 %}} machines are planned to be completely shut down on **December 31, 2021**. {{</ note >}}

{{< warning >}} We highly recommend to always test the migration on a single end device or a small batch of end devices in order to make sure the migration process goes as expected. {{</ warning >}}

## Prerequisites

1. User account on The Things Network {{% ttnv2 %}} or The Things Industries {{% ttnv2 %}}.
2. End device(s) and gateway(s) connected to a {{% ttnv2 %}} network.
3. User account in {{% tts %}}.

{{< note >}} We **highly recommend** using {{% tts %}} version `3.12.0` or higher. Some of the features (like session migration) from this guide might not be available for prior versions. {{</ note >}}

{{< info >}} Starting from {{% tts %}} `v3.13.0` release, The Things Network community members can freely migrate their gateways from The Things Network {{% ttnv2 %}} to {{% tts %}} Community Edition, while still providing uplink and downlink coverage to The Things Network {{% ttnv2 %}}. This means that the order of actions of migrating gateways and devices is no longer relevant - you can migrate your devices first and then your gateways, or vice versa. {{</ info >}}

## Add Application in {{% tts %}}

Since end devices are being created within applications, you first need to add a new application in {{% tts %}}.

{{< note >}} When adding an application in {{% tts %}}, the **Application ID** does not have to be the same as the one in {{% ttnv2 %}}. {{</ note >}}

> See [Adding Applications]({{< ref "/integrations/adding-applications" >}}) for detailed instructions.

## Add Payload Formatters and Integrations in {{% tts %}}

After creating an application, you need to add the associated elements like application-level payload formatters and integrations.

{{< info >}} The payload formatters can be uplink and downlink, and they are what was known in {{% ttnv2 %}} as encoders and decoders. In {{% tts %}}, it is also possible to add payload formatters per end device, which override application payload formatters. However, before devices are migrated to {{% tts %}} it is only possible to add a payload formatter per application. {{</ info >}}

{{< note >}} The format of {{% ttnv2 %}} payload encoders and decoders is still supported in {{% tts %}}. You only need to add one additional line to the function code used in {{% ttnv2 %}} to make it fully compatible with {{% tts %}}. For example, if your payload decoder function in {{% ttnv2 %}} was:

```js
function Decoder(bytes) {
    var temperature = bytes[0] | bytes[2];  
    return {
        temperature: temperature;
    }
}
```

then your uplink payload formatter function in {{% tts %}} should be:

```js
function decodeUplink(input) {
    var bytes = input.bytes;
    var temperature = bytes[0] | bytes[2];
    return {
        temperature: temperature;
    }
}
```

{{</ note >}}

> See [Payload Formatters]({{< ref "/integrations/payload-formatters" >}}) guide for detailed instructions on how to add payload formatters and which types are supported by {{% tts %}}. 

> For detailed tutorials on the integrations that are available in {{% tts %}}, see [Integrations]({{< ref "/integrations/payload-formatters" >}}).

## Migrate End Devices

When you have added your application and elements associated with it, it is time to migrate your end device(s) from {{% ttnv2 %}} to {{% tts %}}.

{{< info >}} End devices connected to The Things Network V2 can be migrated to {{% tts %}} Cloud and {{% tts %}} Community Edition without the need for migrating a gateway, thanks to the default connection with [Packet Broker]({{< ref "/reference/packet-broker" >}}). The Things Industries V2 (SaaS) can also be connected to Packet Broker by contacting [support](mailto:support@thethingsindustries.com), while {{% tts %}} Enterprise or Open Source can be [configured]({{< ref "/reference/packet-broker/connect" >}}) manually.

If you are using deployments connected to Packet Broker, the traffic from your end device(s) will be routed to {{% tts %}} after migrating your device(s). However, there are certain requirements that your devices need to meet for Packet Broker to route their traffic to {{% tts %}} correctly. See [Packet Broker Requirements for End Device Migration]({{< ref "/getting-started/migrating/migrating-from-v2/packet-broker-requirements" >}}) for detailed information.

If you are using deployments that are not connected to Packet Broker, you will have to [migrate your gateway]({{< ref "/getting-started/migrating/gateway-migration" >}}) to receive traffic from your end device in {{% tts %}}. {{</ info >}}

{{< note >}} Starting from {{% tts %}} `v3.13.0` release, The Things Network community members can freely migrate their gateways from The Things Network {{% ttnv2 %}} to {{% tts %}} Community Edition, while still providing uplink and downlink coverage to The Things Network {{% ttnv2 %}}. {{</ note >}}

There are two approaches for migrating devices, depending on how many end devices you intend to migrate and if you wish to migrate with or without active sessions, described in the following guides:

- [Using {{% tts %}} Console]({{< relref "migrate-using-console" >}})
- [Using `ttn-lw-migrate` tool]({{< relref "migrate-using-migration-tool" >}})

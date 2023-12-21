---
title: "The Things Join Server"
description: ""
weight: 8
aliases:
  - /guides/cloud-hosted/tti-join-server
  - /the-things-stack/cloud/tti-join-server
  - /the-things-stack/cloud/tti-join-server/activate-devices-cloud-hosted
  - /the-things-stack/cloud/tti-join-server/register-devices
  - /getting-started/join-server
---

The Things Join Server is a stand-alone LoRaWAN® Join Server. The Things Join Server can be used by device makers to provision end devices to be used by all distributions of {{% tts %}} as well as any other standards compliant LoRaWAN Network Servers.

<!--more-->

## Deployment Options

The Things Join Server comes as a managed service by The Things Industries. Device makers and distributors can also deploy their own The Things Join Server. If you are interested in provisioning devices on the managed service or if you are interested in deploying The Things Join Server, please contact [The Things Industries sales](mailto:sales@thethingsindustries.com).

The Things Join Server operated by The Things Industries is configured in {{% tts %}} Cloud and {{% ttss %}}. If you operate {{% tts %}} Enterprise or Open Source, configure the [LoRaWAN Join Server configuration]({{< ref "/reference/interop-repository" >}}) and the [Device Claiming configuration]({{< ref "/reference/device-claiming-repository" >}}) accordingly.

## Device Provisioning

If you have provisioner access to deployment of The Things Join Server, use the [Command-line Interface `ttjs`](https://www.npmjs.com/package/ttjs-cli) to provision devices in bulk.

When it comes to using JoinEUIs for provisioning devices on The Things Join Server, there are two cases:

- If you are using The Things Join Server hosted by The Things Industries and you don't have your own EUI, you are free to use `70B3D57ED0000000`. On the other hand, if you do have your own EUI that you want to use, you need to [contact The Things Industries support](mailto:support@thethingsindustries.com) for assistance.
- If you are using an externally hosted The Things Join Server, you must acquire your JoinEUI via IEEE.

## Device Claiming

The Things Join Server supports LoRaWAN Backend Interfaces 1.0 and 1.1 as well as device claiming. [Learn more about device claiming]({{< ref "/devices/concepts/device-claiming" >}}).

## Security Features

The Things Join Server operated by The Things Industries supports pre-provisioned Microchip ATECC608 secure elements which provide enhanced hardware security protection for LoRaWAN devices. [Learn more about ATECC608 secure elements]({{< ref "/devices/adding-devices/atecc608a" >}}).

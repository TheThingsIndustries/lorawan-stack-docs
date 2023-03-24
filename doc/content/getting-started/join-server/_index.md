---
title: "The Things Join Server"
description: ""
weight: 8
aliases:
  - /guides/cloud-hosted/tti-join-server
  - /the-things-stack/concepts/the-things-stack-cloud/tti-join-server
  - /the-things-stack/concepts/the-things-stack-cloud/tti-join-server/activate-devices-cloud-hosted
  - /the-things-stack/concepts/the-things-stack-cloud/tti-join-server/register-devices
---

The Things Join Server is a stand-alone LoRaWAN Join Server. The Things Join Server can be used by device makers to provision end devices to be used by all distributions of {{% tts %}} as well as any other standards compliant LoRaWAN Network Servers.

<!--more-->

## Deployment Options

The Things Join Server comes as a managed service by The Things Industries. Device makers and distributors can also deploy their own The Things Join Server. If you are interested in provisioning devices on the managed service or if you are interested in deploying The Things Join Server, please contact [The Things Industries sales](mailto:sales@thethingsindustries.com).

The Things Join Server operated by The Things Industries is configured in {{% tts %}} Cloud and Community Edition. If you operate {{% tts %}} Enterprise or Open Source, configure the [LoRaWAN Join Server configuration]({{< ref "/reference/interop-repository" >}}) and the [Device Claiming configuration]({{< ref "/reference/device-claiming-repository" >}}) accordingly.

## Device Provisioning

If have provisioner access to deployment of The Things Join Server, use the [Command-line Interface `ttjs`](https://www.npmjs.com/package/ttjs-cli) to provision devices in bulk.

## Device Claiming

The Things Join Server supports LoRaWAN Backend Interfaces 1.0 and 1.1 as well as device claiming. [Learn more about device claiming]({{< ref "/devices/device-claiming" >}}).

## Security Features

The Things Join Server operated by The Things Industries supports pre-provisioned Microchip ATECC608 secure elements which provided enhanced hardware security protection for LoRaWAN devices. [Learn more about ATECC608 secure elements]({{< ref "/devices/atecc608a" >}}).

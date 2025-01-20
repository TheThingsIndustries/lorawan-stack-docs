---
title: "The Things Stack Enterprise"
description: "Concepts specific to The Things Stack Cloud"
weight: 4
menu:
  main:
    weight: 4
aliases: [/the-things-stack/host]
---

{{% tts %}} is a highly flexible software product that is available in a variety of deployment models and caters to various user requirements. Check which model applies to your use case.

<!--more-->

The Things Industries offers {{% tts %}} as a fully-managed, SLA-backed cloud subscription called [`{{% tts %}} Cloud`]({{< relref "cloud" >}}). The complexity of managing a LoRaWAN® network server in production is handled by us, while you can focus on delivering value to your customers.

Users can easily get started with The Things Stack Cloud by signing up for [free discovery tier](https://www.thethingsindustries.com/stack/plans/) to get started and test the capabilities of {{% tts %}}. Once you are ready to scale your LoRaWAN fleet, you can seamlessly update the subscription to reflect the changes. For most users, {{% tts %}} Cloud is the recommended option.

For users with operational experience and for users who require that the LoRaWAN data is within their own infrastructural domain, {{% tts %}} is packaged in various flavours for users to install on their own hardware/cloud.

{{% tts %}} is available for production installations for the following cases

- [Amazon Cloud Services templates]({{< relref "aws" >}})
- [Kubernetes templates]({{< relref "kubernetes" >}})

For users who want to install {{% tts %}} on their local machines for testing or want to contribute to [{{% tts %}} open source repository](https://github.com/TheThingsNetwork/lorawan-stack), {{% tts %}} is also available to be [installed via Docker]({{< relref "docker" >}}).

## Special Deployments

[The Things Join Server]({{< relref "/enterprise/join-server" >}}) is a stand-alone LoRaWAN Join Server. The Things Join Server can be used by device makers to provision end devices to be used by all distributions of The Things Stack as well as any other standards compliant LoRaWAN Network Servers.

## Version Update Support

With {{% tts %}} Enterprise deployments, users can update {{% tts %}} versions at their convenience.
However, The Things Industries will support the _two most recent minor releases_ of the v3 major version with security fixes. For example, if the latest {{% tts %}} version is `v3.30.0`, critical security updates will be provided only for versions `v3.29.0` and `v3.28.0`. We recommend maintaining your deployment as close to the latest version as possible to ensure optimal security and performance.

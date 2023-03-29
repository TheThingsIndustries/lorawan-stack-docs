---
title: "Setup The Things Stack"
description: ""
weight: 2
---

{{% tts %}} is a highly flexible software product that is available in a variety of deployment models and caters to various user requirements. Check which model applies to your use case.

<!--more-->

The Things Industries offers {{% tts %}} as a fully-managed, SLA-backed cloud subscription called [`{{% tts %}} Cloud`]({{< relref "cloud" >}}). The complexity of managing a LoRaWAN network server in production is handled by us, while you can focus on delivering value to your customers.

Users can easily get started with The Things Stack Cloud by signing up for [free discovery tier](https://www.thethingsindustries.com/stack/plans/) to get started and test the capabilities of {{% tts %}}. Once you are ready to scale your LoRaWAN fleet, you can seamlessly update the subscription to reflect the changes. For most users, {{% tts %}} Cloud is the recommended option.

For users with operational experience and for users who require that the LoRaWAN data is within their own infrastructural domain, {{% tts %}} is packaged in various flavours for users to install on their own hardware/cloud.

{{% tts %}} is available for production installations for the following cases
- [Amazon Cloud Services templates]({{< relref "aws" >}})
- [Kubernetes templates]({{< relref "kubernetes" >}})

For users who want to install {{% tts %}} on their local machines for testing or want to contribute to [{{% tts %}} open source repository](https://github.com/TheThingsNetwork/lorawan-stack), {{% tts %}} is also available to be [installed via Docker]({{< relref "docker" >}}).

## Special Deployments

[The Things Join Server]({{< relref "join-server" >}}) is a stand-alone LoRaWAN Join Server. The Things Join Server can be used by device makers to provision end devices to be used by all distributions of The Things Stack as well as any other standards compliant LoRaWAN Network Servers.

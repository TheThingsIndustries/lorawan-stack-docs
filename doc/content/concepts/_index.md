---
title: "Concepts"
description: "Guides on basic concepts of working with The Things Stack"
menu:
  main:
    weight: 2
aliases:
  [
    /reference/spec-regional-parameters,
    doc/content/the-things-stack/concepts,
    /the-things-stack,
    /getting-started/the-things-stack-basics,
  ]
---

This section introduces basic concepts of working with {{% tts %}}.

We start with a general technical discussion of {{% tts %}} architecture and progress to other more detailed topics.

<!--more-->

{{% tts %}} is an enterprise grade LoRaWAN server (that includes both the Network Server and Application Server functions mentioned in the LoRaWAN Reference architecture). In addition, {{% tts %}} contains services and tools to securely manage millions of LoRaWAN devices in production.

{{% tts %}} offers the following options for LoRaWAN deployments in production.

- {{< distributions "Cloud" >}} [{{% tts %}} Cloud]({{< relref "cloud" >}}): Our flagship, fully-managed, SLA-backed cloud subscription helping hundreds of companies around the world.
  By using {{% tts %}} Cloud, you can focus on providing value to your customers, while leaving the complexity of managing a production LoRaWAN Network Server to us. You can start evaluating {{% tts %}} Cloud by [signing up for the free discovery tier]({{< relref "2-prerequisites" >}}) to get started.

- {{< distributions "Enterprise" >}}[{{% tts %}} Enterprise]({{< relref "enterprise" >}}): Alternatively, if you prefer to take on the responsibility of installing and maintaining {{% tts %}} in addition to managing your LoRaWAN device fleet, {{% tts %}} is available to be installed on your own hardware or cloud infrastructure.

For simple non-commercial projects and local testing, there are a few options.

- {{< distributions "Sandbox" >}}[{{% ttss %}}]({{< relref "ttn" >}}): A free and limited version of {{% tts %}} _without any guarantees or SLA_ available to The Things Network community for non-commercial, small scale testing and experimentation.

- {{< distributions "Open Source" >}}[{{% tts %}} Open Source](https://github.com/thethingsnetwork/lorawan-stack): For the DIY’ers, the core features of The Things Stack are open source. This is limited in features and is not suitable for production.

{{% tts %}} is developed and maintained by [The Things Industries](https://thethingsindustries.com/).

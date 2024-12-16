---
title: "The Things Industries Gateway Protocol"
description: ""
weight: -1
aliases: [/gateways/concepts/ttigw]
---

{{% ttigw %}} is a proprietary protocol developed by The Things Industries. Unlike other protocols like [{{% lbs %}}]({{< relref "../lora-basics-station" >}}) and [{{% udp-pf %}}]({{< relref "../udp" >}}), {{% ttigw %}} can only be used by gateways provisioned by The Things Industries.

<!--more-->

{{% ttigw %}} is the most secure and bandwidth efficient protocol, designed for deploying gateways in public locations that may be using a metered backhaul like cellular.

## Security

{{% ttigw %}} allows for managing the gateway from {{% tts %}} in a true zero-touch fashion. Gateways supporting this protocol therefore do not require a local user interface for any local configuration, meaning that it is impossible to tamper with configuration even with physical access to the gateway. Since all configuration is done in {{% tts %}}, you don't need to be near the gateway for onboarding and configuration.

{{% ttigw %}} enabled gateways use a TLS client certificate signed by The Things Industries to securely authenticate with any {{% tts %}} deployment: Cloud, Enterprise, Sandbox and Open Source.

## Supported Gateways

[{{% ttigpro %}}]({{< relref "../../models/thethingsindoorgatewaypro" >}}) supports {{% ttigw %}}.

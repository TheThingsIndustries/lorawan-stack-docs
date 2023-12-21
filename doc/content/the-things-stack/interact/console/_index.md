---
title: "Console"
description: ""
aliases: [/guides/the-things-stack/interact/console, /getting-started/console]
weight: -3
---

The Console is the management application of {{% tts %}} for LoRaWAN. It is a web application which can be used to register applications, end devices or gateways, monitor network traffic, or configure network related options, among other things.

<!--more-->

{{< figure src="console.png" >}}

## {{% tts %}} Cloud

If you are using {{% tts %}} Cloud, you can generate a direct link to the Console by entering your tenant ID choosing the required cluster.

{{< tenant-cluster-selector >}}

Copy the link below and paste it in a browser window.

<p>
<code data-content="cluster-address">
https://<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries
</code>
</p>

See [Cloud Addresses]({{< ref "/the-things-stack/cloud/addresses" >}}) for more information about cluster addresses.

## {{% ttss %}}

If you are using {{% ttss %}}, the Console is available at `cloud.thethings.network`.

Visit the addresses page for [{{% ttss %}}]({{< ref "reference/ttn/addresses" >}}) for more information.

## {{% tts %}} Enterprise and Open Source

If you are hosting your own deployment, the Console is available at the address you host {{% tts %}} at.

See [Server Addresses]({{< ref "the-things-stack/concepts/server-addresses" >}}) to learn more.

Once you have access to the Console, proceed to [Login]({{< relref "login" >}}).

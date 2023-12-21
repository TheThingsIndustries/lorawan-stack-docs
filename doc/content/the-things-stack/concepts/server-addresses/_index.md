---
title: "Server Addresses"
description: ""
weight: 5
aliases:
  [
    /getting-started/server-addresses,
    /the-things-stack/concepts/server-addresses,
  ]
---

To access the [Console]({{< ref "/the-things-stack/interact/console" >}}), register a [command line client]({{< ref "the-things-stack/interact/cli" >}}), [connect gateways]({{< ref "/gateways/concepts/adding-gateways" >}}), or schedule uplinks via [webhooks]({{< ref "integrations/webhooks" >}}), it is necessary to know the server address of your {{% tts %}} instance. This section contains information about addresses for different {{% tts %}} deployments.

<!--more-->

Deployments of {{% tts %}} in a single cluster use the same server address for all components.

Distributed deployments, like {{% tts %}} Cloud and {{% ttss %}}, use different addresses per region for routing components, while the address of global components (like Identity Server) is always the same. Enterprise and Open Source deployments may be in a single cluster, or distributed over multiple clusters with multiple addresses.
The server addresses for the different {{% tts %}} deployments are listed below.

You can update the examples below with your tenant ID and cluster ID by filling them here. The `<tenant-id>` will be replaced with the provided tenant ID.

{{< tenant-cluster-selector >}}

## Deployments

**Cloud and Dedicated Cloud**: See [Cloud Addresses]({{< ref "/the-things-stack/cloud/addresses" >}}).

**AWS Launcher**: This is the domain you specify in your [CloudFormation configuration]({{< ref "the-things-stack/host/aws/ami/deployment-guide#step-2-configure-the-deployment" >}}).

**{{% ttss %}}**: See [{{% ttss %}} Addresses]({{< ref "reference/ttn/addresses" >}})

**Enterprise and Open Source**: This is the domain you configure when installing {{% tts %}}. If you followed the [Getting Started guide]({{< ref "/the-things-stack/host/docker" >}}), this is what you use instead of `thethings.example.com`.

## Console

To access the Console, simply enter the [server address of your deployment](#deployments) in a browser.

**Example 1**: To access the <code data-content="cluster-address"><span data-content="cluster-id"></span></code> {{% ttss %}} Console, enter <code data-content="cluster-address"> https://<span data-content="cluster-id"></span>.cloud.thethings.network</code> in your browser.

**Example 2**: To access the <code data-content="cluster-address"><span data-content="cluster-id"></span></code> Cloud Console, enter <code data-content="cluster-address"> https://<span data-content="tenant-id"></span>.<span  data-content="cluster-id"></span>.cloud.thethings.industries</code>.

**Example 3**: If you installed {{% tts %}} Enterprise or Open Source, access the Console at the domain you used in place of `https://thethings.example.com`.

## LNS

The LNS gateway address is a combination of the **protocol** (wss), the **server address**, and the **port** (8887).

**Example 1**: The <code data-content="cluster-address"><span data-content="cluster-id"></span></code> {{% ttss %}} LNS address is <code data-content="cluster-address">wss://<span data-content="cluster-id"></span>.cloud.thethings.network:8887</code>.

**Example 2**: The LNS address for a <code data-content="cluster-address"><span data-content="cluster-id"></span></code> Cloud tenant is <code data-content="cluster-address">wss://<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries:8887</code>.

**Example 3**: If you installed {{% tts %}} Enterprise or Open Source, the LNS address is the domain you used in configuration, for example `wss://thethings.example.com:8887`.

## CUPS

The CUPS gateway address is a combination of the **protocol** (https), the **server address**, and the **port** (443).

**Example 1**: The <code data-content="cluster-address"><span data-content="cluster-id"></span></code> {{% ttss %}} CUPS address is <code data-content="cluster-address">https://<span data-content="cluster-id"></span>.cloud.thethings.network:443</code>.

**Example 2**: The CUPS address for a <code data-content="cluster-address"><span data-content="cluster-id"></span></code> Cloud tenant is <code data-content="cluster-address">https://<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries:443</code>.

**Example 3**: If you installed {{% tts %}} Enterprise or Open Source, the CUPS address is the domain you used in configuration, for example `https://thethings.example.com:443`.

## The Things Kickstarter Gateway Account Server

The The Things Kickstarter Gateway Account Server address is a combination of the **scheme** (https) and the **server address**. The port is inferred from the scheme.

**Example 1**: For the <code data-content="cluster-address"><span data-content="cluster-id"></span></code> {{% ttss %}} cluster, the value is <code data-content="cluster-address">https://<span data-content="cluster-id"></span>.cloud.thethings.network</code>.

**Example 2**: For The Things Stack Cloud cluster <code data-content="cluster-address"><span data-content="cluster-id"></span></code> with tenant <code data-content="cluster-address"><span data-content="tenant-id"></span></code>, the value is <code data-content="cluster-address">https://<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries</code>.

**Example 3**: If you installed {{% tts %}} Enterprise or Open Source, the address is the domain you used in configuration, for example `https://thethings.example.com`.

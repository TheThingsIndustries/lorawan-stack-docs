---
title: "Server Addresses"
description: ""
---

To access the [Console]({{< ref "getting-started/console" >}}), register a [command line client]({{< ref "getting-started/cli" >}}), [connect gateways]({{< ref "gateways/adding-gateways" >}}), or schedule uplinks via [webhooks]({{< ref "integrations/webhooks" >}}), it is necessary to know the server address of your {{% tts %}} instance. This section contains information about addresses for different {{% tts %}} deployments.

<!--more-->

Deployments of {{% tts %}} in a single cluster use the same server address for all components.

Distributed deployments, like {{% tts %}} Cloud and Community Edition, use different addresses per region for routing components, while the address of global components (like Identity Server) is always the same. Enterprise and Open Source deployments may be in a single cluster, or distributed over multiple clusters with multiple addresses.
The server addresses for the different {{% tts %}} deployments are listed below.

## Deployments

**Cloud and Dedicated Cloud**: See [Cloud Addresses]({{< ref "getting-started/cloud-hosted/addresses" >}}).

**AWS Launcher**: This is the domain you specify in your [CloudFormation configuration]({{< ref "getting-started/aws/ami/deployment-guide#step-2-configure-the-deployment" >}}).

**Community Edition**: See [Community Edition Addresses]({{< ref "getting-started/ttn/addresses" >}})

**Enterprise and Open Source**: This is the domain you configure when installing {{% tts %}}. If you followed the [Getting Started guide]({{< ref "/getting-started" >}}), this is what you use instead of `thethings.example.com`.

## Console

To access the Console, simply enter the [server address of your deployment](#deployments) in a browser.

> **Example 1**: to access the `eu1` Community Edition Console, enter `https://eu1.cloud.thethings.network` in your browser.

> **Example 2**: To access the `au1` Cloud Console, enter `https://tenant.au1.cloud.thethings.industries`, where `tenant` is your Tenant ID.

> **Example 3**: If you installed {{% tts %}} Enterprise or Open Source, access the Console at the domain you used in place of `https://thethings.example.com`.

## LNS

The LNS gateway address is a combination of the **protocol** (wss), the **server address**, and the **port** (8887).

> **Example 1**: the `eu1` Community Edition LNS address is `wss://eu1.cloud.thethings.network:8887`.

> **Example 2**: The LNS address for an `au1` Cloud tenant is `wss://tenant.au1.cloud.thethings.industries:8887`, where `tenant` should be replaced with your Tenant ID.

> **Example 3**: If you installed {{% tts %}} Enterprise or Open Source, the LNS address is the domain you used in configuration, for example `wss://thethings.example.com:8887`.

## CUPS

The CUPS gateway address is a combination of the **protocol** (https), the **server address**, and the **port** (443).

> **Example 1**: the `eu1` Community Edition CUPS address is `https://eu1.cloud.thethings.network:443`.

> **Example 2**: The CUPS address for an `au1` Cloud tenant is `https://tenant.au1.cloud.thethings.industries:443`, where `tenant` should be replaced with your Tenant ID.

> **Example 3**: If you installed {{% tts %}} Enterprise or Open Source, the CUPS address is the domain you used in configuration, for example `https://thethings.example.com:443`.

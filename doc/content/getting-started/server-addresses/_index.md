---
title: "Server Addresses"
description: ""
---

To access the [Console]({{< ref "getting-started/console" >}}), register a [command line client]({{< ref "getting-started/cli" >}}), [connect gateways]({{< ref "gateways/adding-gateways" >}}), or schedule uplinks via [webhooks]({{< ref "integrations/webhooks" >}}), it is necessary to know the server address of your {{% tts %}} instance. This section contains information about addresses for different {{% tts %}} deployments.

<!--more-->

By default, all components of {{% tts %}}, such as the Gateway Server, Identity Server, and Console, are located at the same server address.
It is possible to configure separate addresses for the different components if you are running Enterprise or Open Source. For Cloud and Community Edition, all endpoints are located at the same server address (except the Identity Server, which is [only available]({{< ref "getting-started/cloud-hosted/addresses#api-endpoints" >}}) in the `eu1` cluster). The server address for the different {{% tts %}} deployments are listed below.

## Deployments

**Cloud and Dedicated Cloud**: See [Cloud Addresses]({{< ref "getting-started/cloud-hosted/addresses" >}}).

**AWS Launcher**: This is the domain you specify in your [CloudFormation configuration]({{< ref "getting-started/aws/ami/deployment-guide#step-2-configure-the-deployment" >}}).

**Community Edition**: See [Community Edition Addresses]({{< ref "getting-started/ttn/addresses" >}})

**Enterprise and Open Source**: This is the domain you configure when installing {{% tts %}}. If you followed the [Getting Started guide]({{< ref "/getting-started" >}}), this is what you use instead of `thethings.example.com`.

## Console

To access the Console, simply enter the server address of your deployment in a browser.

For example, https://eu1.cloud.thethings.network for the `eu1` Community Edition Console, or https://tenant.au1.thethings.industries for the `au1` Cloud Console, where `tenant` is your Tenant ID. If you installed {{% tts %}} Enterprise or Open Source, access the Console at the domain you used in place of https://thethings.example.com.

## LNS

The LNS gateway address is a combination of the **protocol** (wss), the **server address**, and the **port** (8887).

For example, the `eu1` Community Edition LNS address is wss://eu1.cloud.thethings.network:8887.

The LNS address for an `au1` Cloud tenant is wss://tenant.au1.thethings.industries:8887, where `tenant` should be replaced with your Tenant ID.

If you installed {{% tts %}} Enterprise or Open Source, the LNS address is the domain you used in configuration, for example wss://thethings.example.com:8887.

## CUPS

The CUPS gateway address is a combination of the **protocol** (https), the **server address**, and the **port** (443).

For example, the `eu1` Community Edition CUPS address is https://cloud.eu1.thethings.network:443.

The CUPS address for an `au1` Cloud tenant is https://tenant.au1.thethings.industries:443, where `tenant` should be replaced with your Tenant ID.

If you installed {{% tts %}} Enterprise or Open Source, the CUPS address is the domain you used in configuration, for example https://thethings.example.com:443.

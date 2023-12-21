---
title: "Addresses"
description: ""
aliases: [/getting-started/ttn/addresses]
---

The addresses where you can reach {{% ttss %}} consist of the cluster ID and `cloud.thethings.network`.

You can update the examples below with your cluster ID by filling it here.

{{< cluster-selector >}}

## Console

To learn how to get started with the Console, see the [Console Getting Started Guide]({{< ref "/the-things-stack/interact/console" >}}).

Each cluster has a Console where you can manage gateways and end devices of that cluster. You can use any cluster with your Cloud account.

The address of the Console is:

<p>
<code data-content="cluster-address">
https://<span data-content="cluster-id"></span>.cloud.thethings.network/console
</code>
</p>

## API Endpoints

The Application Server, Join Server, and Network Server APIs are all available in your regional cluster:

<p>
<code data-content="cluster-address">
<span data-content="cluster-id"></span>.cloud.thethings.network
</code>
</p>

However, the Identity Server APIs are only available in the `eu1` cluster:

<p>
<code data-content="cluster-address">
eu1.cloud.thethings.network
</code>
</p>

{{< warning >}}End-Device Registry API requests or other Identity Server API requests to any cluster other than `eu1` will fail. {{</ warning >}}

## Account and OAuth

User accounts are stored in the `eu1` cluster. For registering users, logging in, changing your password and for performing OAuth flows, you need to use the following address:

<p>
<code data-content="cluster-address">
https://eu1.cloud.thethings.network/oauth
</code>
</p>

## Command-line Interface

The Command-line Interface (CLI) needs to be configured with the address of the OAuth server and the gRPC addresses of the different servers. The addresses for OAuth and the Identity Server are always those of the `eu1` cluster. The other addresses are typically of the cluster of your choice.

Here you find the contents of the CLI configuration file for the cluster:

<pre>
oauth-server-address: 'https://eu1.cloud.thethings.network/oauth'
identity-server-grpc-address: 'eu1.cloud.thethings.network:8884'

gateway-server-grpc-address: '<span data-content="cluster-id"></span>.cloud.thethings.network:8884'
network-server-grpc-address: '<span data-content="cluster-id"></span>.cloud.thethings.network:8884'
application-server-grpc-address: '<span data-content="cluster-id"></span>.cloud.thethings.network:8884'
join-server-grpc-address: '<span data-content="cluster-id"></span>.cloud.thethings.network:8884'
device-claiming-server-grpc-address: '<span data-content="cluster-id"></span>.cloud.thethings.network:8884'
device-template-converter-grpc-address: '<span data-content="cluster-id"></span>.cloud.thethings.network:8884'
qr-code-generator-grpc-address: '<span data-content="cluster-id"></span>.cloud.thethings.network:8884'
</pre>

See the [CLI Getting Started Guide]({{< ref "/the-things-stack/interact/cli" >}}) to learn how to get started with the CLI and working with configuration files.

---
title: "Cloud Hosted Addresses"
description: ""
weight: 10
aliases: [/guides/cloud-hosted/addresses]
---

The addresses where you can reach your The Things Industries Cloud Hosted network consist of the tenant ID, the cluster ID and `cloud.thethings.industries`.

You can update the examples below with your tenant ID and cluster ID by filling them here.

{{< tenant-cluster-selector >}}

## Cluster Address

Your cluster address is:

<p>
<code data-content="cluster-address">
<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries
</code>
</p>

## Account and OAuth

User accounts are stored in the `eu1` cluster. For registering users, logging in, changing your password and for performing OAuth flows, you need to use the following address:

<p>
<code data-content="cluster-address">
https://<span data-content="tenant-id"></span>.eu1.cloud.thethings.industries/oauth
</code>
</p>

## Console

To learn how to get started with the Console, see the [Console Getting Started Guide]({{< ref "/getting-started/console" >}}).

Each cluster has a Console where you can manage gateways and end devices of that cluster. You can use any cluster with your Cloud Hosted account.

The address of the Console includes both your tenant ID and the cluster ID:

<p>
<code data-content="cluster-address">
https://<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries/console
</code>
</p>

## Command-line Interface

The Command-line Interface (CLI) needs to be configured with the address of the OAuth server and the gRPC addresses of the different servers. The addresses for OAuth and the Identity Server are always those of the `eu1` cluster. The other addresses are typically of the cluster of your choice.

Here you find the contents of the CLI configuration file for the cluster:

<pre>
oauth-server-address: 'https://<span data-content="tenant-id"></span>.eu1.cloud.thethings.industries/oauth'
identity-server-grpc-address: '<span data-content="tenant-id"></span>.eu1.cloud.thethings.industries:8884'

gateway-server-grpc-address: '<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries:8884'
network-server-grpc-address: '<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries:8884'
application-server-grpc-address: '<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries:8884'
join-server-grpc-address: '<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries:8884'
device-claiming-server-grpc-address: '<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries:8884'
device-template-converter-grpc-address: '<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries:8884'
qr-code-generator-grpc-address: '<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries:8884'

credentials-id: '<span data-content="tenant-id"></span>'
</pre>

See the [CLI Getting Started Guide]({{< ref "/getting-started/cli" >}}) to learn how to get started with the CLI and working with configuration files.

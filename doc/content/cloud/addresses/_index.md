---
title: "Server Addresses"
description: ""
weight: 2
aliases:
  [
    /getting-started/cloud-hosted/addresses,
    /guides/cloud-hosted/addresses,
    /concepts/server-addresses,
  ]
distributions: ["Cloud"]
---

This page provides configuration details and guidance for accessing and managing {{% tts %}} Cloud clusters, including Console, API endpoints, OAuth, CLI setup, and IP address considerations.

<!--more-->

Enter your **tenant ID** and choose a **cluster** from the dropdown. This will update the rest of the page with that address so you can get easily copyable links.

{{< tenant-cluster-selector >}}

Your cluster address is:

<p>
<code data-content="cluster-address">
<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries
</code>
</p>

### Console

To learn how to get started with the Console, see the [Console Getting Started Guide]({{< ref "/concepts/features/console" >}}).

Each cluster has a Console where you can manage gateways and end devices of that cluster. You can use any cluster with your Cloud account.

The address of the Console for the **routing cluster** includes both your tenant ID and the cluster ID:

<p>
<code data-content="cluster-address">
https://<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries/console
</code>
</p>

### API Endpoints

The Application Server, Join Server and Network Server APIs are all available in your routing cluster.

<p>
<code data-content="cluster-address">
<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries
</code>
</p>

However, the Identity Server APIs (`/api/is/*`) are only available in the `eu1` cluster. This is because `eu1` is the central cluster where entity registrations are stored.

<p>
<code data-content="cluster-address">
<span data-content="tenant-id"></span>.eu1.cloud.thethings.industries
</code>
</p>

{{< warning >}}End-Device Registry API requests or other Identity Server API requests to any cluster other than `eu1` will fail. {{</ warning >}}

### Account and OAuth

User accounts are stored in the `eu1` cluster. For registering users, logging in, changing your password and for performing OAuth flows, you need to use the following address:

<p>
<code data-content="cluster-address">
https://<span data-content="tenant-id"></span>.eu1.cloud.thethings.industries/oauth
</code>
</p>

### Command-line Interface

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

See the [CLI Getting Started Guide]({{< ref "/concepts/features/cli" >}}) to learn how to get started with the CLI and working with configuration files.

### IP Addresses

{{% tts %}} Cloud runs on AWS. See the [AWS IP address range documentation](https://docs.aws.amazon.com/general/latest/gr/aws-ip-ranges.html) for IP addresses of Cloud clusters.

{{< note >}}
IP addresses of Cloud clusters are not static, and may change over time. We recommend whitelisting the DNS address of your Cloud cluster if possible.
{{</ note >}}

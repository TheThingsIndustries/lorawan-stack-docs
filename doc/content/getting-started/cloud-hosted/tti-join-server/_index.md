---
title: "The Things Industries Join Server"
description: ""
weight: 20
---

Each Cloud Hosted cluster contains a Join Server for convenience. Instead of the Join Server in a cluster, you can also use The Things Industries Join Server: a dedicated LoRaWAN Join Server which supports interoperability with other Network Servers and supports pre-provisioned secure elements.

The addresses where you can reach your The Things Industries Cloud Hosted network consist of the tenant ID and `join.cloud.thethings.industries`.

You can update the examples below with your tenant ID and cluster ID by filling them here.

{{< tenant-cluster-selector >}}

## Console

The address of The Things Industries Join Server Console includes your tenant ID:

<p>
<code data-content="cluster-address">
https://<span data-content="tenant-id"></span>.join.cloud.thethings.industries/console
</code>
</p>

## Command-line Interface

You can configure the command-line interface (CLI) to use The Things Industries Join Server with a Cloud Hosted cluster.

Alternatively, you can also configure the CLI to use The Things Industries Join Server only. This is useful when working with a third-party LoRaWAN network.

See the [CLI Getting Started Guide]({{< ref "/getting-started/cli" >}}) to learn how to get started with the CLI and working with configuration files.

### CLI Configuration With Cloud Hosted Cluster

If you want to use The Things Industries Join Server with a Cloud Hosted cluster, you use this configuration file for the CLI:

<pre>
oauth-server-address: 'https://<span data-content="tenant-id"></span>.eu1.cloud.thethings.industries/oauth'
identity-server-grpc-address: '<span data-content="tenant-id"></span>.eu1.cloud.thethings.industries:8884'

gateway-server-grpc-address: '<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries:8884'
network-server-grpc-address: '<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries:8884'
application-server-grpc-address: '<span data-content="tenant-id"></span>.<span data-content="cluster-id"></span>.cloud.thethings.industries:8884'
join-server-grpc-address: '<span data-content="tenant-id"></span>.join.cloud.thethings.industries:8884'
device-claiming-server-grpc-address: '<span data-content="tenant-id"></span>.join.cloud.thethings.industries:8884'
device-template-converter-grpc-address: '<span data-content="tenant-id"></span>.join.cloud.thethings.industries:8884'
qr-code-generator-grpc-address: '<span data-content="tenant-id"></span>.join.cloud.thethings.industries:8884'

credentials-id: '<span data-content="tenant-id"></span>'
</pre>

### CLI Configuration With Join Server Only

If you want to use The Things Industries Join Server without Cloud Hosted, i.e. as device maker or when using a third-party LoRaWAN network, use this configuration file for the CLI:

<pre>
oauth-server-address: 'https://<span data-content="tenant-id"></span>.eu1.cloud.thethings.industries/oauth'
identity-server-grpc-address: '<span data-content="tenant-id"></span>.eu1.cloud.thethings.industries:8884'

join-server-grpc-address: '<span data-content="tenant-id"></span>.join.cloud.thethings.industries:8884'
device-claiming-server-grpc-address: '<span data-content="tenant-id"></span>.join.cloud.thethings.industries:8884'
device-template-converter-grpc-address: '<span data-content="tenant-id"></span>.join.cloud.thethings.industries:8884'
qr-code-generator-grpc-address: '<span data-content="tenant-id"></span>.join.cloud.thethings.industries:8884'

gateway-server-enabled: false
network-server-enabled: false
application-server-enabled: false

credentials-id: '<span data-content="tenant-id"></span>'
</pre>

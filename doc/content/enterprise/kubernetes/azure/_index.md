---
title: "Azure"
description: ""
distributions: "Enterprise"
weight: 2
aliases: ["/the-things-stack/host/kubernetes/azure"]
---

{{% tts %}} can be deployed to [Azure](https://portal.azure.com/) as a set of highly available services on Azure Kubernetes Service using Terraform and Helm.

This guide gives an overview of the architecture and shows how to deploy your own highly available {{% tts %}} cluster.

<!--more-->

{{< warning >}}
All versions before v1.0.0 are considered to be in the Alpha stage and are not suitable for production use. The Things Industries does not offer any guarantees on compatibility between the Alpha versions.
{{</ warning >}}

{{< note >}}
This deployment uses Bitnami in-cluster Redis Helm charts. They are not recommended for production use. Use the [Azure Managed Redis](https://azure.microsoft.com/en-us/products/managed-redis) instead with the NoCluster option.
{{</ note >}}

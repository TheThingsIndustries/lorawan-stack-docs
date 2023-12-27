---
title: "Azure"
description: ""
distributions: "Enterprise"
weight: 2
---

{{% tts %}} can be deployed to [Azure](https://portal.azure.com/) as a set of highly available services on Azure Kubernetes Service using Terraform and Helm.

This guide gives an overview of the architecture and shows how to deploy your own highly available {{% tts %}} cluster.

<!--more-->

{{< warning >}}
Until the release of v1.0.0, all versions are considered to be in the Alpha stage and are not suitable for production use. The Things Industries does not offer any guarantees on compatibility between the Alpha versions.
{{</ warning >}}

{{< warning >}}
Until Azure releases a new version of their managed Redis service ([Redis 7.0 support in Azure](https://learn.microsoft.com/en-us/answers/questions/1191155/redis-7-0-support-in-azure)) this deployment uses Bitnami in-cluster Redis Helm charts. They are not recommended for production use.
{{</ warning >}}

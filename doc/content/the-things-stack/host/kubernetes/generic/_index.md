---
title: "Generic"
description: ""
distributions: "Enterprise"
weight: 1
---

{{% tts %}} is packaged as a [Helm Chart](https://helm.sh/) to be run on Kubernetes Clusters. {{% tts %}} Helm charts are packaged and distributed as [OCI packages](https://helm.sh/docs/topics/registries/) and are published to [Docker Hub](https://hub.docker.com/r/thethingsindustries/lorawan-stack-helm-chart).

This guide helps the user to install and configure {{% tts %}} on a Kubernetes cluster.

<!-- more -->

Operating The Things Stack on a Kubernetes cluster is only meant for advanced users with sufficient experience with the chosen infrastructure platform and with Kubernetes.

{{< warning >}} Until the release of v1.0.0, all versions are considered to be in the Alpha stage and are not suitable for production use. The Things Industries does not offer any guarantees on compatibility between the Alpha versions. {{</ warning >}}

{{< note  "Make sure to follow each section of this guide in the same order as it is written without skipping any steps." />}}

## UDP Gateway Support

UDP gateways require connection stickiness in order to continue communicating with Gateway Server instances when they get recreated or when the nodes on which Gateway Servers are running are replaced. The most straightforward way to do this is to connect UDP gateways directly to the Gateway Server service via an external Load Balancer.
This depends on the settings of the external Load Balancer that is used. The implementation details are specific to the external environment and is hence out of scope for this documentation.
Please check the documentation of the Load Balancer and run tests to ensure that gateway communication is not lost on server updates.

## Kubernetes Version Support

|                                | Kubernetes v1.21 and above |
| ------------------------------ | -------------------------- |
| Chart v1.0.0 and below (alpha) | [x]                        |

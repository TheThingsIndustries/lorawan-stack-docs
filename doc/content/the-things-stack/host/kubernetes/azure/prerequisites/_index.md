---
title: "Prerequisites"
description: ""
weight: 1
aliases: [/getting-started/kubernetes/azure/prerequisites]
---

This section contains prerequisites for deploying {{% tts %}} on Azure Kubernetes Service.

<!--more-->

## Tools

1. [Terraform](https://www.terraform.io/)
2. [`kubectl`](https://kubernetes.io/docs/reference/kubectl/)
3. [Helm version 3](https://helm.sh/docs/intro/). Check the version of Helm installed using `helm version`. Helm v3.8 or above is required.

## License

{{% tts %}} requires a license key to run. Please [contact our sales team](mailto:sales@thethingsindustries.com) for your license key.

## (Optional) Packet Broker Access

{{% tts %}} contains the Packet Broker Agent component that can communicate with [Packet Broker](https://packetbroker.net/).

Packet Broker is disabled by default in the Helm charts. When enabled, it can operate either only a Forwarder or as both a Forwarder and a Home Network. Check the [Packet Broker section]({{< ref "/the-things-stack/packet-broker" >}}) for more details.

- If the cluster acts simply as a Forwarder that forwards traffic to Packet Broker, then all that is needed are access credentials.
- If the cluster also needs to work as a Packer Broker Home Network, in addition to the access credentials, the cluster either needs a NetID from the LoRa Alliance or The Things Industries can lease a DevAddr Block.

Please [contact our sales team](mailto:sales@thethingsindustries.com) for access credentials and a Device Address Block (if necessary).

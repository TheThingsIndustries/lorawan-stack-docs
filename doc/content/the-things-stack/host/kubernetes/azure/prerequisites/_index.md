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

## Azure

We recommend creating an Azure Resource Group (RG) for this deployment during the preparation stage. If you intend to manage the RG with Terraform you can import it into the `tfstate` later during the deployment.

After creating the RG we recommend to set up Azure Storage for Terraform backend. You can read more about this in [Azure Documentation](https://learn.microsoft.com/en-us/azure/developer/terraform/store-state-in-azure-storage).

You need to have rights to create the following resources in the RG:

- Azure Kubernetes Service
- Azure Database for PostgreSQL Flexible Server
- NAT Gateway
- Private DNS Zone
- Public IP Address
- Public IP Prefix
- Storage Account
- User Assigned Managed Identity
- Virtual Network
- Log Analytics Workspace (optional)

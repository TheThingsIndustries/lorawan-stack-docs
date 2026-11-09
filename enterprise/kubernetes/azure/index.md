# Azure

> The Things Stack can be deployed to Azure as a set of highly available services on Azure Kubernetes Service using Terraform and Helm. This guide gives an …

Source: https://www.thethingsindustries.com/docs/enterprise/kubernetes/azure/


The Things Stack can be deployed to [Azure](https://portal.azure.com/) as a set of highly available services on Azure Kubernetes Service using Terraform and Helm.

This guide gives an overview of the architecture and shows how to deploy your own highly available The Things Stack cluster.

> **Warning:** All versions before v1.0.0 are considered to be in the Alpha stage and are not suitable for production use. The Things Industries does not offer any guarantees on compatibility between the Alpha versions.


> **Note:** This deployment uses Bitnami in-cluster Redis Helm charts. They are not recommended for production use. Use the [Azure Managed Redis](https://azure.microsoft.com/en-us/products/managed-redis) instead with the NoCluster option.



## Pages in this section

- [Architecture](https://www.thethingsindustries.com/docs/enterprise/kubernetes/azure/architecture/index.md): This page describes the architecture of a The Things Stack deployment on Azure.
- [Prerequisites](https://www.thethingsindustries.com/docs/enterprise/kubernetes/azure/prerequisites/index.md): This section contains prerequisites for deploying The Things Stack on Azure Kubernetes Service.
- [Configuration](https://www.thethingsindustries.com/docs/enterprise/kubernetes/azure/configuration/index.md): The Things Stack requires a few configuration files to be prepared. In this section, we show how to create them and store them for further use.
- [Deployment](https://www.thethingsindustries.com/docs/enterprise/kubernetes/azure/deployment/index.md): This page describes the steps for deploying The Things Stack on Azure Kubernetes Service.
- [Upgrading](https://www.thethingsindustries.com/docs/enterprise/kubernetes/azure/upgrading/index.md): This page describes the steps for upgrading The Things Stack on Azure Kubernetes Service.
- [Troubleshooting](https://www.thethingsindustries.com/docs/enterprise/kubernetes/azure/troubleshooting/index.md): This guide contains general troubleshooting information.


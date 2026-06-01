---
title: "Configuration"
description: ""
weight: 2
aliases:
  [
    /getting-started/kubernetes/azure/configuration,
    /the-things-stack/host/kubernetes/azure/configuration,
  ]
---

{{% tts %}} requires a few configuration files to be prepared. In this section, we show how to create them and store them for further use.

<!--more-->

## Terraform Backend

Create a `config.azurerm.tfbackend` file and put it in `1-infrastructure`, `2-kubernetes` and one of the chosen DNS provider templates directories. We recommend `azure-dns` provider for this deployment.

```
storage_account_name = <storage_account_name>
container_name       = <storage_container_name>
key                  = <terraform_state_file>
use_azuread_auth     = true
```

## Deployment Configuration

Create a `deployment.auto.tfvars.json` file in `1-infrastructure` directory.

The following contains only the minimum mandatory fields for this configuration file. For a full list of possible values check the `variables.tf` file in this directory.

{{< note >}}
The combination of `<deployment_name>-<environment>-<cluster>` needs to be unique in a Resource Group.
{{</ note >}}

```
{
    "azure_ad_admin_group_object_id": <object_id>, # Object ID of the AKS admin group.
    "deployment_name": <deployment_name>,          # Name of the deployment.
    "environment": <environment>,                  # 'prod', 'staging' or 'dev'.
    "cluster": <cluster>,                          # Cluster identifier for multi-cluster deployments.
    "location": <location>,                        # Azure location
    "resource_group": {
        "create": <true|false>,                    # If set to `true` a new Resource Group will be created on deployment.
                                                   # Otherwise a Resource Group is going to be imported based on "name" parameter.
        "name": <resource_group_name>             # Optional custom Azure Resource Group name. Mandatory when "create" is set to `false`.
    },
    "domain": {
        "name": <domain_name>,                     # Domain where The Things Stack is available.
        "dns_zone": <dns_zone_name>               # Azure DNS zone.
    }
}
```

## ACME Configuration

Create an `acme.auto.tfvars.json` file in the DNS templates directory.

It is only required to set the `acme_email` field.

```
{
    "acme_email": <acme_email> # ACME email that will receive notifications about expiring Certificates.
}
```

## {{% tts %}} Values

Create a `tts.values.yaml` file in the `2-kubernetes` templates directory.

The following contains only the minimum mandatory fields for this values file. For a full list of possible values check the `values.yaml` file of {{% tts %}} Helm chart.

```yaml
license:
  key: <tts_license_key>
global:
  deployment:
    initialTenant:
      tenantID: <initial_tenant_id>
      adminEmail: <initial_tenant_admin_email>
      adminUserID: <initial_tenant_admin_id>
      adminPassword: <initial_tenant_admin_password>
```

{{< note "The remaining mandatory values (cluster ID, blob storage, database and Redis addresses) are supplied by the Terraform `2-kubernetes` layer. The fields shown below document the Azure-specific chart values that the Terraform layer sets, so you can understand or override them." />}}

## Azure Workload Identity

{{% tts %}} authenticates to Azure services (such as Blob Storage) using [Azure Workload Identity](https://learn.microsoft.com/en-us/azure/aks/workload-identity-overview). The user-assigned managed identity created during the infrastructure deployment is wired into the {{% tts %}} components through two chart values:

- `global.serviceAccount.annotations` attaches the managed identity's client ID to every component ServiceAccount.
- `global.podLabels` opts the component pods into workload identity token injection.

```yaml
global:
  serviceAccount:
    annotations:
      azure.workload.identity/client-id: <managed_identity_client_id>
  podLabels:
    azure.workload.identity/use: "true"
```

## Blob Storage

{{% tts %}} stores blobs (for example device and profile pictures) in an Azure Storage Account. Set the blob provider to `azure` and provide the storage account name. Authentication is handled by [Azure Workload Identity](#azure-workload-identity), so no account key is required in the values file.

```yaml
global:
  blob:
    provider: azure
    azure:
      accountName: <storage_account_name>
```

---
title: "Configuration"
description: ""
weight: 2
aliases: [/getting-started/kubernetes/azure/configuration]
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

```
{
    "azure_ad_admin_group_object_id": # Object ID of the AKS admin group.
    "deployment_name":                # Name of the deployment.
    "environment":                    # 'prod', 'staging' or 'dev'.
    "cluster":                        # Cluster identifier for multi-cluster deployments.
    "location":                       # Azure location
    "resource_group": {
        "create":                     # If set to `true` a new Resource Group will be created on deployment.
                                      # Otherwise a Resource Group is going to be imported based on "name" parameter.
        "name":                       # Optional custom Azure Resource Group name. Mandatory when "create" is set to `false`.
    },
    "domain": {
        "name":                       # Domain where The Things Stack is available.
        "dns_zone":                   # Azure DNS zone.
    }
}
```

## ACME Configuration

Create an `acme.auto.tfvars.json` file in the DNS templates directory.

It is only required to set the `acme_email` field.

```
{
    "acme_email":   # ACME email that will receive notifications about expiring Certificates.
}
```

## {{% tts %}} Values

Create a `tts.values.yaml` file in the `2-kubernetes` templates directory.

The following contains only the minimum mandatory fields for this values file. For a full list of possible values check the `values.yaml` file of {{% tts %}} Helm chart.

```yaml
license:
  key:               # TTS license key
global:
  deployment:
    initialTenant:
      tenantID:      # Initial tenant ID
      adminEmail:    # Admin email
      adminUserID:   # Admin ID
      adminPassword: # Admin password
```

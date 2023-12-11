---
title: "Deployment"
description: ""
weight: 3
---

This page describes the steps for deploying {{% tts %}} on Azure Kubernetes Service.

<!--more-->

## Azure Infrastructure

Start with the `1-infrastructure` templates that create the foundation for your deployment.

If you haven't done this before create a Terraform backend configuration file `config.azurerm.tfbackend`. You can read more about it in the [Configuration]({{< ref "/the-things-stack/host/kubernetes/azure/configuration#terraform-backend" >}}) section.

Initialize the Terraform state.

```bash
$ make init
```

Plan the deployment and verify everything is going to be set up correctly.

```bash
$ make plan
```

This template will deploy the Azure Kubernetes Service cluster, Azure Storage containers and Azure Database Flexible Server for Postgres, with their supporting infrastructure. You can apply it after validating the deployment plan. The deployment should take about 10 to 15 minutes. If you encounter any issues, please refer to [Troubleshooting]({{< ref "the-things-stack/host/kubernetes/azure/troubleshooting" >}}).

```bash
$ make apply
```

After the AKS cluster is deployed you can get the `kubeconfig` file next.

```bash
# Set KUBECONFIG if you don't want to override the default kubeconfig.
$ export KUBECONFIG='local.kubeconfig'

# Set KUBE_CONFIG_PATH to the location of the kubeconfig.
# If you didn't set the KUBECONFIG variable use '~/.kube/config' instead.
# Ref https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs#file-config
$ export KUBE_CONFIG_PATH="$(pwd)/${KUBECONFIG}"

$ az aks get-credentials --resource-group $(terraform output -raw resource_group_name) --name $(terraform output -raw aks_cluster_name)
```

{{< note >}}
If `var.allow_cluster_admin_access` is disabled, then `kubelogin` must be installed.
{{</ note >}}

Follow the prompt to authenticate the `kubectl`.

```bash
$ kubectl get pods
To sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code xxxxxx to authenticate.
```

Export the DNS values used for [DNS Infrastructure]({{< relref "#dns-infrastructure" >}}). Use the provider chosen during the [Configuration]({{< ref "/the-things-stack/host/kubernetes/azure/configuration#acme-configuration" >}}).

```bash
$ DNS_PROVIDER='<provider>'
$ make dns.values | jq > "$(git rev-parse --show-toplevel)/dns/${DNS_PROVIDER}/dns.auto.tfvars.json"
```

Export the Infrastructural values used for [Kubernetes Templates]({{< relref "#kubernetes-templates" >}}).

```bash
$ make infra.values | jq > '../2-kubernetes/infra.auto.tfvars.json'
```

## DNS Infrastructure

Now we need to set up the DNS infrastructure. Head over to the directory of the provider you chose during the last steps of the [Azure Infrastructure]({{< relref "#azure-infrastructure" >}}) section.

If you haven't done this before create a Terraform backend configuration file `config.azurerm.tfbackend`. You can read more about it in [Terraform Backend Configuration]({{< relref "/the-things-stack/host/kubernetes/azure/configuration#terraform-backend" >}}).

Initialize the Terraform state.

{{< note >}}
`KUBE_CONFIG_PATH` should point to your `kubeconfig`.

```bash
# Example
$ export KUBE_CONFIG_PATH='~/.kube/config'
```

{{</ note >}}

```bash
$ make init
```

Plan the deployment and verify everything is going to be set up correctly.

```bash
$ make plan
```

Now apply the template.

```bash
$ make apply
```

Verify the certificate is in ready state. This may take a couple of minutes after the deployment for the certificate to reach a ready state.

```bash
$ kubectl -n tts get cert
```

In case the certificate won't reach a ready state head over to [Troubleshooting Problems with ACME / Let's Encrypt Certificates](https://cert-manager.io/docs/troubleshooting/acme/).

## Kubernetes Templates

Head over to the `2-kubernetes` directory next.

If you haven't done this before create a Terraform backend configuration file `config.azurerm.tfbackend`. You can read more about it in [Terraform Backend Configuration]({{< relref "/the-things-stack/host/kubernetes/azure/configuration#terraform-backend" >}}).

Initialize the Terraform state.

```bash
$ make init
```

Plan the deployment and verify everything is going to be set up correctly.

{{< note >}}
`KUBE_CONFIG_PATH` should point to your `kubeconfig`.

```bash
# Example
$ export KUBE_CONFIG_PATH='~/.kube/config'
```

{{</ note >}}

```bash
$ make plan
```

Now apply the template.

```bash
$ make apply
```

Once all the targets are healthy and if the configuration was correct, {{% tts %}} console will be accessible at `https://<tenantID>.<domain>`.

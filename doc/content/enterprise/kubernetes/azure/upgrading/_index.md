---
title: "Upgrading"
description: ""
weight: 4
aliases: [/the-things-stack/host/kubernetes/azure/upgrading]
---

This page describes the steps for upgrading {{% tts %}} on Azure Kubernetes Service.

<!--more-->

## Database Migration

{{% tts %}} database schema is managed between minor versions using database migrations.

{{< note >}}
User are informed of required migrations for each version via the [Release Notes](https://www.thethingsindustries.com/docs/whats-new/). It’s mandatory to run required database migrations for {{% tts %}} to function properly.
{{</ note >}}

To migrate the database during an upgrade set the respective Terraform variables to `true`.

| Service | Variable         |
| ------- | ---------------- |
| IS      | `is-db-migrate`  |
| NOC     | `noc-db-migrate` |

{{< note >}}
For example to migrate Identity Server and Network Operations Center databases run the following command.

```bash
$ terraform apply -var='is-db-migrate=true' -var='noc-db-migrate=true'
```

{{</ note >}}

## Kubernetes version upgrade

AKS Kubernetes version upgrades have to be performed sequentially for each minor version. For example to upgrade from `1.25` to `1.27` it's necessary to upgrade to version `1.26` first as an intermediate step. For more information refer to the [official documentation](https://learn.microsoft.com/en-us/azure/aks/supported-kubernetes-versions).

## Upgrading from Helm chart 1.x.x to 2.x.x

{{< new-in-version "2.0.0" >}} Workload Identity is no longer wired up automatically from `global.blob.provider: azure`. 
Users must now set the annotation and pod label explicitly in values:
```yaml
global:
  serviceAccount:
    annotations:
      azure.workload.identity/client-id: "<client-id>"
    podLabels:
      azure.workload.identity/use: "true"
```
The pod label has also moved from Deployment selector labels to pod template labels. Existing Azure deployments must delete their Deployments before upgrading. Use `--cascade=orphan` to keep pods running during the migration:
```bash
RELEASE="<your-release-name>"
NAMESPACE="<your-namespace>"
for component in is as ns gs js dcs gcs console noc pba; do # Drop pba and/or noc from the list if not enabled.
  kubectl delete deployment "${RELEASE}-${component}" -n "${NAMESPACE}" --cascade=orphan
done
helm upgrade "${RELEASE}" . -n "${NAMESPACE}" -f <your-values-file>
```
This is required because Kubernetes does not allow changes to `spec.selector.matchLabels` on existing Deployments. The `--cascade=orphan` flag ensures pods continue running while the Deployment objects are recreated by Helm.

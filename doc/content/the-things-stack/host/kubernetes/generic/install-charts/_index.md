---
title: "Install Charts"
description: ""
weight: 4
aliases: [/getting-started/kubernetes/install-charts]
---

{{% tts %}} Helm charts are packaged and distributed as [OCI packages](https://helm.sh/docs/topics/registries/) and are published to [Docker Hub](https://hub.docker.com/r/thethingsindustries/lorawan-stack-helm-chart).

Use the following steps to install the chart.

<!--more-->

1. Login to the registry. This step can be skipped if you've already logged in via Docker Client.

```bash
$ helm registry login -u <username> registry-1.docker.io
```

{{< note "`registry-1` is the OCI registry of Docker Hub." />}}

2. Pull the OCI container.

```bash
$ helm pull oci://registry-1.docker.io/thethingsindustries/lorawan-stack-helm-chart --version <version>
```

This pulls a `lorawan-stack-helm-chart-<version>.tgz` archive to the local directory from which the command is run.

This command also downloads the Helm provenance file `lorawan-stack-helm-chart-<version>.tgz.prov`. This contains the signature to verify the package.

Use the GPG public key [D10BEC9FEBCDCC8DA09A45E92FC8860DA12B4C53](https://keys.openpgp.org/vks/v1/by-fingerprint/D10BEC9FEBCDCC8DA09A45E92FC8860DA12B4C53) to verify the integrity of the charts. See Helm's [docs on verification](https://helm.sh/docs/topics/provenance/). If you unpack the `.tgz` file, you can find the `values.yaml` file which contains the list of all options that can be set.

3. Install the chart.

Switch the kubernetes namespace to the target context. Check the [kubernetes documentation](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/).

Assuming that you created a deployment specific `values` file in the previous section called `<deployment>.values.yaml`, this chart can be installed as follows.

```bash
$ helm install <name> oci://registry-1.docker.io/thethingsindustries/lorawan-stack-helm-chart --version <version> --values <deployment>.values.yaml
```

4. Update the chart.

To deploy updates to the chart.

The repository can be updated using the following.

```bash
$ helm upgrade <name> oci://registry-1.docker.io/thethingsindustries/lorawan-stack-helm-chart --version <version> --values <deployment>.values.yaml
```

> Note: The `helm` CLI pulls a chart from the repository only if it's locally not present.

5. Uninstall the Chart.

Once done, you can uninstall the chart as follows.

```bash
$ helm uninstall <name>
```

## Jobs

The Things Stack Helm Charts contain multiple [Kubernetes Jobs](https://kubernetes.io/docs/concepts/workloads/controllers/job/) that setup various things for the cluster. These are triggered automatically during installation and no additional action by the operator is needed.

Note that The Application Server Storage initialization job is triggered only if the storage integration is enabled. This is configurable via `as.storage.enabled`.
Since this job is triggered by user action, there is currently no mechanism in Helm to automatically detect and delete this job when completed.
You can manually do that if needed using `kubectl`.

```bash
$ kubectl get jobs
$ kubectl delete jobs <name>
```

{{< note "If you want to re-run this job for some reason at a later point, the existing job has to be first deleted." />}}

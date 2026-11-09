# Generic

> The Things Stack is packaged as a Helm Chart to be run on Kubernetes Clusters. The Things Stack Helm charts are packaged and distributed as OCI packages and are …

Source: https://www.thethingsindustries.com/docs/enterprise/kubernetes/generic/


The Things Stack is packaged as a [Helm Chart](https://helm.sh/) to be run on Kubernetes Clusters. The Things Stack Helm charts are packaged and distributed as [OCI packages](https://helm.sh/docs/topics/registries/) and are published to [Docker Hub](https://hub.docker.com/r/thethingsindustries/lorawan-stack-helm-chart).

This guide helps the user to install and configure The Things Stack on a Kubernetes cluster.

> **Warning:** Operating The Things Stack on a Kubernetes cluster is only meant for advanced users with sufficient experience with the chosen infrastructure platform and with Kubernetes.


> **Note:** Make sure to follow each section of this guide in the same order as it is written without skipping any steps.


## UDP Gateway Support

UDP gateways require connection stickiness in order to continue communicating with Gateway Server instances when they get recreated or when the nodes on which Gateway Servers are running are replaced. The most straightforward way to do this is to connect UDP gateways directly to the Gateway Server service via an external Load Balancer.
This depends on the settings of the external Load Balancer that is used. The implementation details are specific to the external environment and is hence out of scope for this documentation.
Please check the documentation of the Load Balancer and run tests to ensure that gateway communication is not lost on server updates.

## Kubernetes Version Support

The Things Stack Helm chart versions v1.x and below support **Kubernetes v1.21 and above**.

Starting with The Things Stack Helm chart v2.0.0, **Kubernetes v1.27 or above** is required, because the chart's PodDisruptionBudgets use the `unhealthyPodEvictionPolicy` field, which is only available from Kubernetes v1.27 onwards.


## Pages in this section

- [Prerequisites](https://www.thethingsindustries.com/docs/enterprise/kubernetes/generic/prerequisites/index.md): The following are required for The Things Stack on Kubernetes. These prerequisites may be provisioned through various methods depending on the infrastructure …
- [Preparation](https://www.thethingsindustries.com/docs/enterprise/kubernetes/generic/preparation/index.md): The Things Stack requires a few secret values to be configured. In this section, we show how to generate them and store them for further use.
- [Configuration](https://www.thethingsindustries.com/docs/enterprise/kubernetes/generic/configuration/index.md): The Things Stack Helm chart is configured using yaml files. This guide assumes that these fields are saved in a &lt;deployment&gt;.values.yaml file and used for …
- [Install Charts](https://www.thethingsindustries.com/docs/enterprise/kubernetes/generic/install-charts/index.md): The Things Stack Helm charts are packaged and distributed as OCI packages and are published to Docker Hub. You can also find information about the Helm chart on …
- [Monitoring](https://www.thethingsindustries.com/docs/enterprise/kubernetes/generic/monitoring/index.md): The Things Stack exposes Prometheus metrics at the /metrics endpoint. This route is protected by Basic Auth with username metrics and password …
- [Troubleshooting](https://www.thethingsindustries.com/docs/enterprise/kubernetes/generic/troubleshooting/index.md): This guide contains general troubleshooting information.
- [Database Migrations](https://www.thethingsindustries.com/docs/enterprise/kubernetes/generic/database-migrations/index.md): The Things Stack database schema is managed between minor versions using database migrations. User are informed of required migrations for each version via the …


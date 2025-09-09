---
title: "Prerequisites"
description: ""
weight: 1
aliases:
  [
    /getting-started/kubernetes/self-managed/prerequisites,
    /the-things-stack/host/kubernetes/generic/prerequisites,
    /the-things-stack/host/kubernetes/prerequisites,
  ]
---

The following are required for {{% tts %}} on Kubernetes.

<!--more-->

## Installation Tools

1. [`kubectl`](https://kubernetes.io/docs/reference/kubectl/)
2. [Helm version 3](https://helm.sh/docs/intro/). Check the version of Helm installed using `helm version`. Helm v3.8 or above is required.

## License

The Things Stack requires a license key to run. Please [contact our sales team](mailto:sales@thethingsindustries.com) for your license key.

## (Optional) Packet Broker Access

The Things Stack contains the Packet Broker Agent component that can communicate with [Packet Broker](https://packetbroker.net/).

Packet Broker is disabled by default in the Helm charts. When enabled, it can operate either only a Forwarder or as both a Forwarder and a Home Network. Check the [The Things Stack Documentation](https://www.thethingsindustries.com/docs/concepts/packet-broker/) for more details.

- If the cluster acts simply as a forwarder that forwards traffic to Packet Broker, then all that is needed are access credentials.
- If the cluster also needs to work as a Packer Broker Home Network, in addition to the access credentials, the cluster either needs a NetID from the LoRa Alliance or The Things Industries can lease a DevAddr Block.

Please [contact our sales team](mailto:sales@thethingsindustries.com) for access credentials and a Device Address Block (if necessary).

## Infrastructure

{{% tts %}} on Kubernetes requires the following infrastructural services to run.

1. A Kubernetes cluster
2. PostgreSQL 14 or above
3. Redis 6.2 or above
4. Blob Storage
5. An ingress controller to handle the ingress routes
6. TLS Certificates
7. (Optional) TimescaleDB
8. (Optional) Metrics Server

These components are highly specific to the specific infrastructure chosen by the operator and hence are out of scope of this documentation.

The following is a guide of the general principles involved in setting up the infrastructure.

#### 1. Kubernetes Cluster

{{% tts %}} requires a minimum kubernetes version of v1.21. We recommend using the highest available version.

#### 2. Postgres Compatible Database

The database used by {{% tts %}} Identity Server is a PostgreSQL database. We recommend using a managed database for High Availability with backups enabled.

For testing purposes, [Bitnami's Helm Charts for PostgreSQL](https://artifacthub.io/packages/helm/bitnami/postgresql) can be installed in the Kubernetes Cluster.

#### 3. Redis Compatible Database

Multiple components of The Things Stack use Redis to store data and for task-based operations. We recommend using a managed database for High Availability with backups enabled.

For testing purposes, [Bitnami's Helm Charts for Redis](https://artifacthub.io/packages/helm/bitnami/redis) can be installed in the Kubernetes Cluster.

{{< note "If using the Bitnami Helm Charts for Redis, make sure to either setup TLS or disable password authentication. The latter is recommended since this database is used for testing. Check Bitnami's documentation on how to disable authentication. It usually involves setting `auth.enabled` to `false` for the Redis Helm charts and not using a Redis password in The Things Stack." />}}

#### 4. Blob Storage

The Things Stack currently supports AWS S3, S3 compatible Blob, Azure Blob storage, Google Cloud Platform (GCP) Buckets or a local PVC.

##### Using Buckets

The Things Stack requires the following buckets.

1. Profile pictures bucket

- The contents of this bucket must be _public_.

2. End device pictures bucket

- The contents of this bucket must be _public_.

3. End Device Claiming Server configuration

- Once this bucket is setup, place an empty `config.yml` file at the root of the bucket.
- The contents of this bucket must be _private_ since they contain secrets.
- Enabling encryption and versioning is highly recommended.

4. Interoperability configuration

- Once this bucket is setup, place an empty `config.yml` file at the root of the bucket.
- The contents of this bucket must be _private_ since they contain secrets.
- Enabling encryption and versioning is highly recommended.

5. Plugins configuration

- Once this bucket is setup, place an empty `plugins.yml` file at the root of the bucket.
- The contents of this bucket must be _private_ since they contain secrets.
- Enabling encryption and versioning is highly recommended.

##### Using Local Blob Storage

In the case of using a local blob, the following steps are necessary.

1. Set the correct owner of the blob and its contents. Accessing the volume via the command line is specific to different storage providers. Check the documentation of the k8s storage provider.

```bash
$ sudo chown -R 886:886 <blob>
```

2. Create the `edcs`, `interop`, `end_device_pictures`, `profile_pictures`, `plugins` folders at the root of the blob folder.
3. Create an empty `config.yml` in the `edcs` and `interop` folders.
4. Create an empty `plugins.yml` in the `plugins` folder.

#### 5. An ingress controller

An ingress controller is needed to route the incoming traffic. {{% tts %}} Helm chart uses Kubernetes ingress resources for routing requests to the components of {{% tts %}}. This allows the users of {{% tts %}} Helm chart to configure an ingress controller of their choice. However, Kubernetes ingress routes support only L7 traffic (HTTP/gRPC). For this reason, the configuration for routing UDP Packet Forwarder traffic for gateways is not handled by the Helm chart.

{{% tts %}} needs several [port allocations with various protocols]({{< ref "/concepts/networking/#port-allocations" >}}). We recommend using an ingress controller that natively supports L4 and L7 protocols. Depending on your preferred setup for gateways, an ingress controller that supports only L7 protocols (such as Ingress-Nginx) can be used too, but the connecting gateways will be either limited to L7 protocols or more complex to setup and maintain if using L4 protocols.

Although we do support UDP Packet Forwarder as a gateway connection option, it requires [more configuration on your side]({{< ref "enterprise/kubernetes/generic/#udp-gateway-support" >}}). We recommend using LoRa Basics™ Station LNS, The Things Industries Gateway or LBS CUPS mTLS protocols for connecting gateways.

To configure the ingress controller for {{% tts %}}:
1. Specify the ingress controller by setting the `global.ingress.controller` to the class name of the ingress controller deployed in the cluster. This will be used to set the ingress class name in the ingress routes that handle {{% tts %}} traffic.
2. Specify the TLS secret by setting the `global.ingress.controller.tls.secretName`. The secret has to be accessible from the namespace where the {{% tts %}} Helm Chart is deployed. This will be used to terminate TLS for {{% tts %}} traffic
3. Add annotations for the ingress routes if needed by setting `global.ingress.annotations.http`, `global.ingress.annotations.grpc`, `global.ingress.annotations.semtechws` or `global.ingress.annotations.ttigw`.
4. Add ingress specific service annotations for {{% tts %}} services by setting `global.ingress.serviceAnnotations` if needed.
5. Expose the ports used by {{% tts %}} in your ingress controller. A list of all the ports can be found [here]({{< ref "/concepts/networking/#port-allocations" >}}). For production environments, make sure to expose only TLS ports.

Examples of ingress controllers configurations can be found [here](https://www.thethingsindustries.com/docs/the-things-stack/host/kubernetes/generic/prerequisites/sample-ingress-controllers/).

#### 6. TLS Certificates

The Things Stack expects a [Kubernetes TLS Secret](https://kubernetes.io/docs/concepts/configuration/secret/#tls-secrets) which contains the server leaf certificates.

The Things Stack (Enterprise) uses a base domain ex: `domain` and one of the following

- `*.domain` (wildcard) with multi-tenancy
- `<default tenant>.domain` (single tenant) without multi-tenancy.

Consequently, the TLS certificates used should cover `domain` and one of the following.

- `*.domain`
- `<default tenant>.domain`

The Things Stack expects the name of this secret to be set in the value `global.ingress.tls.secretName`. In case the gateway controller is enabled in the Helm chart, the name of the secret must be set in the value of `global.ttgc.tls.secretName` as well.

The process of provisioning and maintenance of the certificate secret is left to the operator.

If the cluster has a custom CA, it must be specified in `global.tls.rootCA`. The certificate must be specified as a base64 encoded x509 certificate. Multiple certificates must be separated by a new line.

#### 7. (Optional) TimescaleDB

Both {{% tts %}} [Storage Integration](https://www.thethingsindustries.com/docs/integrations/storage/) and {{% tts %}} [Network Operations Center](https://www.thethingsindustries.com/docs/concepts/architecture/components/network-operations-center/#accessing-network-operations-center) require a TimescaleDB instance.

There can either be two separate TimeScaleDB instances or a single instance but different Databases.

For testing purposes, [TimeScaleDB Helm Charts](https://docs.timescale.com/install/latest/installation-kubernetes/) can be installed in the Kubernetes Cluster.

#### 8. (Optional) Metrics Server

For Autoscaling, the Kubernetes cluster needs a [Metrics Server](https://github.com/kubernetes-sigs/metrics-server). This is dependent on the cluster and the cloud infrastructure and is hence left to the operator.

---
title: "Prerequisites"
description: ""
weight: 1
aliases:
  [
    /getting-started/kubernetes/self-managed/prerequisites,
    /the-things-stack/host/kubernetes/generic/prerequisites,
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
2. PostgreSQL compatible database
3. Redis compatible database
4. Blob Storage
5. An ingress controller to handle the ingress routes
6. TLS Certificates
7. (Optional) TimescaleDB
8. (Optional) Metrics Server

These components are highly specific to the specific infrastructure chosen by the operator and hence are out of scope of this documentation.

However, the following is a guide of the general principles involved in setting up the infrastructure.

#### 1. Kubernetes Cluster

{{% tts %}} requires a minimum kubernetes version of v1.21. However, we recommend using the highest available version.

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

##### Using Local Blob Storage

In the case of using a local blob, the following steps are necessary.

1. Set the correct owner of the blob and its contents. Accessing the volume via the command line is specific to different storage providers. Check the documentation of the k8s storage provider.

```bash
$ sudo chown -R 886:886 <blob>
```

2. Create the `edcs`, `interop`, `end_device_pictures` and `profile_pictures` folders at the root of the blob folder.
3. Create an empty `config.yml` in the `edcs` and `interop` folders.

##### Disabling Blob Storage

{{% tts %}} Helm Chart by default expects a blob storage configured but it is possible to use {{% tts %}} without it. You can disable the usage of blob by setting `global.interop.configSource` and `global.blob.provider` values to an empty string `""`.

#### 5. An ingress controller

An ingress controller is needed to route the incoming traffic. Specify the ingress controller by setting the `global.ingress.controller` to the class name of the ingress controller deployed in the cluster. For TLS, make sure to set the `global.ingress.controller.tls.secretName`. The secret has to be accessible from the namespace where the {{% tts %}} Helm Chart is deployed. These ports are needed by {{% tts %}} and must be exposed:
 
```yaml
web:
  protocol: TCP
  port: 1885
  exposedPort: 80
websecure:
  protocol: TCP
  port: 8885
  exposedPort: 443
grpc:
  protocol: TCP
  port: 1884
  exposedPort: 1884
grpcsecure:
  protocol: TCP
  port: 8884
  exposedPort: 8884
# Gateway Connectivity
gtwmqttv2:
  protocol: TCP
  port: 1881
  exposedPort: 1881
gtwmqttv2secure:
  protocol: TCP
  port: 8881
  exposedPort: 8881
gtwmqttv3:
  protocol: TCP
  port: 1882
  exposedPort: 1882
gtwmqttv3secure:
  protocol: TCP
  port: 8882
  exposedPort: 8882
lbs:
  protocol: TCP
  port: 1887
  exposedPort: 1887
lbssecure:
  protocol: TCP
  port: 8887
  exposedPort: 8887
# Application MQTT
appmqtt:
  protocol: TCP
  port: 1883
  exposedPort: 1883
appmqttsecure:
  protocol: TCP
  port: 8883
  exposedPort: 8883
# The Things Indoor Gateway Pro
ttigw:
  protocol: "TCP"
  port: 1889
  exposedPort: 1889
ttigwsecure:
  protocol: "TCP"
  port: 8889
  exposedPort: 8889
# Interoperability. This part is optional. Only enable it if interoperability is needed.
interop:
  protocol: TCP
  # Note: Change this to 1886 if using `server-only` mode.
  port: 8886
  exposedPort: 8886
```

In case annotations are needed for certain protocols or for the {{% tts %}} services, these can be specified under `global.ingress.annotations` and `global.ingress.serviceAnnotations`. E.g. Traefik annotations can be specified as:
```yaml
ingress:
  controller: "traefik"
  tls:
    secretName: "ingress-tls-cert"
  annotations:
    grpc:
      traefik.ingress.kubernetes.io/router.entrypoints: grpcsecure
      traefik.ingress.kubernetes.io/router.tls: "true"
    http:
      traefik.ingress.kubernetes.io/router.entrypoints: websecure
    semtechws:
      traefik.ingress.kubernetes.io/router.entrypoints: semtechwssecure, semtechws
      traefik.ingress.kubernetes.io/router.tls: "true"
  serviceAnnotations:
    traefik.ingress.kubernetes.io/service.serversscheme: h2c
```

Examples of ingress controllers configurations can be found [here](https://www.thethingsindustries.com/docs/the-things-stack/host/kubernetes/generic/prerequisites/sample-ingress-controllers/).

{{< note "{{% tts %}} Helm chart uses Kubernetes ingress rules for routing requests to the components of {{% tts %}}. This allows the users of {{% tts %}} Helm chart to configure an ingress controller of their choice. However, Kubernetes ingress routes support only L7 traffic (HTTP/gRPC). For this reason, UDP Packet Forwarder for gateways is not supported in the Helm chart for now." />}}

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

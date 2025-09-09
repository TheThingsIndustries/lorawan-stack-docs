---
title: "Configuration"
description: ""
weight: 3
aliases:
  [
    /getting-started/kubernetes/configuration,
    /the-things-stack/host/kubernetes/generic/configuration,
  ]
---

{{% tts %}} Helm chart is configured using `yaml` files. This guide assumes that these fields are saved in a `<deployment>.values.yaml` file and used for deployment/updates.

<!--more-->

The following is a list of mandatory minimum fields. For a full list of possible values, check the `values.yaml` file at the root of the {{% tts %}} Helm chart. You can find it on [artifacthub.io](https://artifacthub.io/packages/helm/thethingsindustries/lorawan-stack-helm-chart?modal=values) as well.

{{< warning >}} Some values in this file are secrets. Make sure to check this file into a secure repository.{{</ warning >}}

```yaml
license:
  key: # License for The Things Stack
global:
  domain: # Domain where The Things Stack deployment is exposed.
  deployment:
    initialTenant:
      tenantID: # ID of the initial (first) tenant.
      adminPassword: # Password for the Administrator of the tenant.
      adminUserID: # User ID for the Administrator of the tenant. Do not use `admin`.
      adminEmail: # Email of the Administrator of the tenant.
  blob:
    provider: # "aws", "azure", "gcp", "local" or empty string to disable blob usage.
    aws: # Set only if provider is "aws".
      region: # region
      accessKeyID: # AWS access key ID
      secretAccessKey: # AWS access key secret
    azure: # Set only if provider is "azure".
      accountName: # account name
      clientID: # client ID
    gcp: # Set only if provider is "gcp".
      # Base64 encoded GCP credentials.json file.
      # One option is to run `$ cat <credentials>.json | base64`.
      credentials:
    local: # Local Blob via a PV(C). The PVC must support the `ReadWriteMany` access mode.
      pvc: # Name of the PVC.
  cluster:
    keys: # See preparation section.
  http:
    cookie:
      blockKey: # See preparation section.
      hashKey: # See preparation section.
    metrics:
      password: # See preparation section.
    pprof:
      password: # See preparation section.
  redis:
    address: # Address of the Redis Database end point.
    password: # (Optional) Password to access Redis.
    readOnly:
      address: # (Optional) Address of the Redis Database read-only end point.
      password: # (Optional) Password to access Redis.
  console:
    oauth:
      clientSecret: # See preparation section.
  ingress:
    controller: # Ingress controller class name.
    tls:
      secretName: # Secret Name containing the TLS Certificates for the Domain.
  tenancy:
    adminKey: # See preparation section.
  interop:
    # Description: Interoperability configuration source.
    # Expected value: "blob", "directory", "url" or empty string to disable blob usage
    configSource: "blob"
    blob:
      # Description: Bucket for interoperability configuration.
      # Expected value: string
      bucket: ""
is:
  # Postgres connection string
  # Format : postgres://<username>:<password>@<host>:<port>/<database>?<options>
  database:
    uri:
  profilePictures:
    # Description: Bucket used for storing profile pictures
    # Expected value: string
    bucket: ""
  endDevicePictures:
    # Description: Bucket used for end device pictures
    # Expected value: string
    bucket: ""
dcs:
  edcs:
    blob:
      bucket: # End Device Claiming Server bucket from "Section 4. Blob Storage"
```

## {{% ttigpro %}} configuration

The Helm chart does not support {{% ttigpro %}} by default. To enable it in the Helm chart, The Things Gateway Controller must be enabled and the ingress controller of the Kubernetes cluster must have mTLS configured.

To set up the gateway controller, the following fields must be filled in `values.yaml`:

**Field name**              |**Description**
----------------------------|----------------------------------------------------------------
`global.ttgc.enabled`       | The Things Gateway Controller enable flag. Set this to `true`. 
`global.ttgc.domain`        | Domain name of the cluster. Should be the same as `global.domain`.
`global.ttgc.tls.secretName`| Kubernetes Secret name containing the TLS. Should be the same as `global.ingress.tls.secretName`.
`global.ttgc.address`       | (Optional) The URL of the gateway controller. It not specified, it defaults to `gc.thethings.industries:443`.

{{< note "In case you are using the cloud-managed The Things Gateway Controller (i.e. `gc.thethings.industries:443`), your network must be registered on The Things Gateway Controller, otherwise connections to the gateway controller will fail. Please [contact The Things Industries support](mailto:support@thethingsindustries.com) for registration." />}}

{{% tts %}} verifies the identity of each connected TTIGPro gateway for security reasons, therefore mutual TLS is necessary to be configured in the ingress controller. mTLS configuration depends on the chosen ingress controller and is left to the operator of the Kubernetes cluster. {{% tts %}} recognizes the following client certificate header names:
- `X-Forwarded-Client-Cert`
- `X-Forwarded-Tls-Client-Cert`

As an example, the steps to configure Traefik to support mTLS are the following:

1. Create the Traefik middleware that passes the TLS client certificates in the request headers. 

    - Paste the k8s middleware manifest into a yaml file (make sure to set the correct namespace):
    ```yaml
    # traefik-passtlsclientcert.yaml
    apiVersion: traefik.io/v1alpha1
    kind: Middleware
    metadata:
      name: traefik-passtlsclientcert
      namespace: <traefik-namespace>
    spec:
      passTLSClientCert:
        pem: true
    ```

    - Apply the k8s manifest to the cluster:  

    ```bash
    kubectl apply -f traefik-passtlsclientcert.yaml 
    ```

For more info check the [Traefik docs on the PassTLSClientCert middleware](https://doc.traefik.io/traefik/middlewares/http/passtlsclientcert/).

2. Configure the default TLS options for Traefik. 

    - Paste the k8s middleware manifest into a yaml file (make sure to set the correct namespace):
    ```yaml
    # traefik-tlsoption.yaml
    apiVersion: traefik.io/v1alpha1
    kind: TLSOption
    metadata:
      name: default
      namespace: <traefik-namespace>
    spec:
      clientAuth:
        clientAuthType: RequestClientCert
    ```

    - Apply the k8s manifest to the cluster:  

    ```bash
    kubectl apply -f traefik-tlsoption.yaml
    ```

{{< note "{{% tts %}} Helm chart uses wildcard domains in ingress routes. This is necessary for multi-tenant deployments as we don't know the names of the tenants in advance. Traefik does not support TLS options for wildcard domains, because it maps the TLS options based solely on the host name (the `Host` part of the ingress rule) and it needs a concrete domain to match ([check out more in the Traefik docs](https://doc.traefik.io/traefik/v2.3/routing/routers/#options)). To go around this limitation, a default TLS option can be used which is the fallback for any unmatched host." />}}

For more info check the [Traefik docs on TLS options](https://doc.traefik.io/traefik/https/tls/#tls-options).

3. Set the protocol annotations for {{% ttigpro %}}, middleware annotations and serviceAnnotations in `values.yaml` 
(in addition to the existing annotations):

```yaml
annotations:
  ttigw:
    traefik.ingress.kubernetes.io/router.entrypoints: ttigw,ttigwsecure
    traefik.ingress.kubernetes.io/router.middlewares: traefik-passtlsclientcert@kubernetescrd
    traefik.ingress.kubernetes.io/router.tls: "true"
serviceAnnotations:
  traefik.ingress.kubernetes.io/service.serversscheme: h2c
```

4. Install (or upgrade) the helm chart.  

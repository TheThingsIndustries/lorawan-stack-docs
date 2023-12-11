---
title: "Configuration"
description: ""
weight: 3
aliases: [/getting-started/kubernetes/configuration]
---

{{% tts %}} Helm chart is configured using `yaml` files. This guide assumes that these fields are saved in a `<deployment>.values.yaml` file and used for deployment/updates.

<!--more-->

The following is a list of mandatory minimum fields. For a full list of possible values, check the `values.yaml` file at the root of the {{% tts %}} Helm chart.

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
    provider: "aws", "azure", "gcp" or "local"
    aws: # Set only if provider is "aws".
      region: # region
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
    traefik:
      tls:
        secretName: # Secret Name containing the TLS Certificates for the Domain.
  tenancy:
    adminKey: # See preparation section.
  interop:
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

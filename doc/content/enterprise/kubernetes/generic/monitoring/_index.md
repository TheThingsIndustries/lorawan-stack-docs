---
title: "Monitoring"
description: ""
weight: 5
aliases:
  [
    /getting-started/kubernetes/monitoring,
    /the-things-stack/host/kubernetes/generic/monitoring,
  ]
---

{{% tts %}} exposes Prometheus metrics at the `/metrics` endpoint. This route is protected by Basic Auth with username `metrics` and password `global.http.metrics.password`. Exposure of the endpoint is controlled by `global.http.metrics.enable` (default `true`).

<!--more-->

To scrape these metrics, you can install Prometheus in the cluster. The installation details are outside the scope of this document.

The chart does not ship a `ServiceMonitor` or Prometheus scrape annotations. If you use the Prometheus Operator, add your own `ServiceMonitor`, or attach scrape annotations to the component services through `global.services.annotations` (and `global.services.annotations.grafana` for the NOC Grafana service).

The metrics endpoint listens on `global.http.port` (default `1885`). The examples below use `1885`; adjust the port if you have changed `global.http.port`.

The following scrape config can be used to scrape metrics from each of the components of The Things Stack.

```yaml
scrape_configs:
  - job_name: <name>
    metrics_path: /metrics
    scheme: http
    basic_auth:
      username: metrics
      password: <password>
    static_configs:
      # This is the cluster local endpoint of the component's service.
      - targets:
          [
            "<helm_release_name>-<component-name>.<namespace>.svc.cluster.local:1885",
          ]
```

For example, to scrape metrics from the Identity Servers of a The Things Stack deployment named `mytts` in the `tts` namespace, use the following.

```yaml
scrape_configs:
  - job_name: identity-server
    metrics_path: /metrics
    scheme: http
    basic_auth:
      username: metrics
      password: <global.http.metrics.password>
    static_configs:
      - targets: ["mytts-is.tts.svc.cluster.local:1885"]
```

## Network Operations Center (NOC)

The Network Operations Center (NOC) provides network insights through a bundled Grafana instance. It is disabled by default. Enabling it requires a dedicated TimescaleDB database and event storage in Redis.

To enable the NOC:

1. Enable the NOC and turn on event storage in Redis (the NOC consumes events from Redis):

    ```yaml
    global:
      noc:
        enabled: true
      events:
        redis:
          storageEnabled: true
    ```

2. Configure the NOC TimescaleDB database. `migrate` runs the database migration during the Helm upgrade (see [Database Migrations]({{< ref "enterprise/kubernetes/generic/database-migrations" >}})).

    ```yaml
    noc:
      store:
        database:
          uri: # postgres://<username>:<password>@<host>:<port>/<database>?<options>
          readURI: # (Optional) Read replica connection string.
          migrate: true
    ```

3. Configure the bundled Grafana instance. The Grafana store points at the same TimescaleDB server as the NOC.

    ```yaml
    noc:
      grafana:
        adminPassword: # See preparation section.
        store:
          host: # Hostname of the NOC TimescaleDB database (without the port).
          username:
          password:
          name:
    ```

    The OAuth client secret (`global.noc.oauth.clientSecret`) is also required and is covered in the [preparation section]({{< ref "enterprise/kubernetes/generic/preparation" >}}).

{{< note "The NOC Grafana image is pinned via `noc.grafana.image.tag` and does not follow the {{% tts %}} release version cycle. Override it only when instructed." />}}

### Tuning the NOC data store

The following optional values tune the NOC data store. The defaults are suitable for most deployments.

**Field name**                          | **Default**   | **Description**
-----------------------------------------|---------------|----------------------------------------------------------------
`noc.store.maxIdleConnections`           | `2`           | Maximum number of idle database connections.
`noc.store.maxOpenConnections`           | `10`          | Maximum number of open database connections.
`noc.store.rawDataRetention`             | `72h0m0s`     | Retention duration for raw data.
`noc.store.targetInsertBatchSize`        | `8192`        | Target batch size for `INSERT` commands.
`noc.store.targetInsertBatchWindow`      | `1m`          | Target batch window for `INSERT` commands.
`noc.store.pagination.defaultLimit`      | `1000`        | Default limit for NOC pagination.

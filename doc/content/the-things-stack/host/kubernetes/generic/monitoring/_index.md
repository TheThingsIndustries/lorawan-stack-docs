---
title: "Monitoring"
description: ""
weight: 5
aliases: [/getting-started/kubernetes/monitoring]
---

{{% tts %}} exposes Prometheus metrics at the `/metrics` endpoint. This route is protected by Basic Auth with username `metrics` and password `global.http.metrics.password`.

<!--more-->

To scrape these metrics, you can install Prometheus in the cluster. The installation details are outside the scope of this document.

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

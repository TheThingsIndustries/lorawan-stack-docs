---
title: "Preparation"
description: ""
weight: 2
aliases: [/getting-started/kubernetes/self-managed/preparation]
---

{{% tts %}} requires a few secret values to be configured. In this section, we show how to generate them and store them for further use.

<!--more-->

Copy each generated secret to a local file and then transfer those values later into the corresponding location in the `values.yaml` file.

{{< note "Secrets are required to be hex-encoded strings of the exact length mentioned in this guide." />}}

| Secret                                | Description                                                           | Size | Setting in `values.yaml`            |
| ------------------------------------- | --------------------------------------------------------------------- | ---- | ----------------------------------- |
| Cluster Keys                          | Key used by cluster components to communicate                         | 32   | `global.cluster.keys`               |
| HTTP Cookie Block Key                 | Block Key for HTTP Cookies                                            | 32   | `global.http.cookie.blockKey`       |
| HTTP Cookie Hash Key                  | Hash Key for HTTP Cookies                                             | 32   | `global.http.cookie.hashKey`        |
| Metrics Password                      | Password to access exposed Prometheus metrics                         | 16   | `global.http.metrics.password`      |
| PProf Password                        | Password to access profiling (pprof)                                  | 16   | `global.http.pprof.password`        |
| Console Oauth Secret                  | Secret used by the Console to connect to The Things Stack             | 16   | `global.console.oauth.clientSecret` |
| Tenant Administration Key             | Secret used to administer cluster tenants                             | 32   | `global.tenancy.adminKey`           |
| NOC Grafana Admin Password (optional) | Grafana admin password for The Things Stack Network Operations Center | 24   | `noc.grafana.adminPassword`         |
| NOC Oauth Client Secret (optional)    | OAuth client secret for The Things Stack Network Operations Center    | 24   | `noc.oauth.clientSecret`            |

The simplest option is to use `openssl`.

```bash
size=<>
$ openssl rand -hex ${size}
```

For example, to generate `global.http.cookie.hashKey` you can run the following.

```bash
size=32
$ openssl rand -hex ${size}
e1bf1a49ac7e1cb593f1c3afeab494ca950bba06d764110854f801da42e3d568
```

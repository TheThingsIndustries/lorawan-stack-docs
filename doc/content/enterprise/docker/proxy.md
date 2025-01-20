---
title: "Proxy"
description: ""
weight: 4
aliases: [/the-things-stack/host/docker/proxy]
---

{{% tts %}} can work with an external proxy that can terminate TLS connections.

<!--more-->

{{% tts %}} is agnostic to the external proxy software used. The configuration/setup of an external proxy is left to the user and is out of scope for this documentation.

## Disabling TLS Listeners

In order for an external proxy to terminate TLS connections, {{% tts %}} TLS listeners have to be disabled.

The [Networking]({{< ref "/concepts/networking#port-allocations" >}}) section lists the ports that {{% tts %}} listens on and their TLS variants.

In order to prevent {{% tts %}} listening to a TLS port, set the corresponding `listen-tls` option in the configuration to an empty string `""`.

The following is a example snippet of a configuration file with the TLS ports disabled.

```yml
as:
  mqtt:
    listen-tls: ""
grpc:
  listen-tls: ""
gs:
  basic-station:
    listen-tls: ""
  tabs-hubs:
    listen-tls: ""
  mqtt:
    listen-tls: ""
  mqtt-v2:
    listen-tls: ""
http:
  listen-tls: ""
interop:
  listen-tls: ""
```

## Mapping Ports to The Things Stack Services

With the above setting, you can now map these TLS ports onto {{% tts %}} services.

Following the table in our [Networking]({{< ref "/concepts/networking#port-allocations" >}}) section, for each port that you want to enable in {{% tts %}}, configure your proxy to listen to the TLS variant of that port.

For example, map the HTTPS port of the proxy to the HTTP port of {{% tts %}}, the gRPCS port of the proxy to the gRPC port of {{% tts %}} and so on. Each proxy has a different method of port mapping/traffic forwarding. Check the documentation of your proxy of choice.

## Health Checks

Some proxies might perform a health check to ensure that the upstream server ({{% tts %}} in this case) is healthy.

{{% tts %}} serves the `/healthz` end point on the same port that exposes the HTTP service.

When using an external proxy, make sure to set the port set in the `http.listen` config option as the health check port in your proxy.

## Certificate Management

When using an external proxy with {{% tts %}}, you will have to disable the built-in ACME feature of {{% tts %}}.

The ACME feature of {{% tts %}} is disabled by default so make sure that you've not configured `tls.acme` options by mistake.

You can disable ACME completely by clearing the source option of the TLS settings.

```yml
tls:
  source: ""
```

# Proxy

> The Things Stack can work with an external proxy that can terminate TLS connections.

Source: https://www.thethingsindustries.com/docs/enterprise/docker/proxy/


The Things Stack can work with an external proxy that can terminate TLS connections.

The Things Stack is agnostic to the external proxy software used. The configuration/setup of an external proxy is left to the user and is out of scope for this documentation.

## Disabling TLS Listeners

In order for an external proxy to terminate TLS connections, The Things Stack TLS listeners have to be disabled.

The [Networking](https://www.thethingsindustries.com/docs/concepts/networking/#port-allocations) section lists the ports that The Things Stack listens on and their TLS variants.

In order to prevent The Things Stack listening to a TLS port, set the corresponding `listen-tls` option in the configuration to an empty string `""`.

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

With the above setting, you can now map these TLS ports onto The Things Stack services.

Following the table in our [Networking](https://www.thethingsindustries.com/docs/concepts/networking/#port-allocations) section, for each port that you want to enable in The Things Stack, configure your proxy to listen to the TLS variant of that port.

For example, map the HTTPS port of the proxy to the HTTP port of The Things Stack, the gRPCS port of the proxy to the gRPC port of The Things Stack and so on. Each proxy has a different method of port mapping/traffic forwarding. Check the documentation of your proxy of choice.

## Health Checks

Some proxies might perform a health check to ensure that the upstream server (The Things Stack in this case) is healthy.

The Things Stack serves the `/healthz` end point on the same port that exposes the HTTP service.

When using an external proxy, make sure to set the port set in the `http.listen` config option as the health check port in your proxy.

## Certificate Management

When using an external proxy with The Things Stack, you will have to disable the built-in ACME feature of The Things Stack.

The ACME feature of The Things Stack is disabled by default so make sure that you've not configured `tls.acme` options by mistake.

You can disable ACME completely by clearing the source option of the TLS settings.

```yml
tls:
  source: ""
```


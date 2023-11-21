---
title: "Rate Limiting"
description: ""
---

{{% tts %}} supports rate limiting for all outward facing services. Access to each resource is limited by a unique identifier key, and it is possible to define rate limiting classes for fine-grained control.

<!--more-->

For more details about the algorithm used, read [here](https://en.wikipedia.org/wiki/Generic_cell_rate_algorithm).

## Example configuration

The rate limiting configuration is split into multiple profiles. For each profile, we provide a name, the maximum allowed rate per minute, and optionally a maximum burst rate. Finally, we associate the profile with a number of rate limiting classes. Refer to the [Rate Limited Entities]({{< ref "#rate-limited-entities" >}}) section below for a list of all available rate limiting classes and what they mean.

Enable rate limiting by adding the following configuration to your `ttn-lw-stack.yml`.

The values shown below are only meant as an example. Make sure to adjust them accordingly, depending on the actual traffic of your deployment.

```yaml
rate-limiting:
  profiles:
    - name: HTTP servers
      max-per-min: 30
      associations:
        - http
    - name: User login
      max-per-min: 10
      associations:
        - http:account
    - name: Create new users
      max-per-min: 10
      associations:
        - grpc:method:/ttn.lorawan.v3.UserRegistry/Create
    - name: Application downlink traffic
      max-per-min: 10
      associations:
        - as:down:web
        - as:down:mqtt
        - grpc:method:/ttn.v3.lorawan.v3.AppAs/DownlinkQueuePush
        - grpc:method:/ttn.v3.lorawan.v3.AppAs/DownlinkQueueReplace
    - name: Gateway connections
      max-per-min: 5
      associations:
        - gs:accept:mqtt
        - gs:accept:ws
        - grpc:stream:accept:/ttn.lorawan.v3.GtwGs/LinkGateway
    - name: gRPC API
      max-per-min: 60
      associations:
        - grpc:method
        - grpc:stream:accept
    - name: Override rate for uplink simulation
      max-per-min: 5
      associations:
        - grpc:method:/ttn.lorawan.v3.AppAs/SimulateUplink
    - name: Gateway uplink traffic
      max-per-min: 1000
      max-burst: 1500
      associations:
        - gs:up
```

## Rate Limited Entities

This section lists resources of {{% tts %}} on which a maximum rate limit can be enforced.

{{< rate-limiting >}}

{{< note >}} Both gRPC methods and HTTP endpoints support multiple classes. This enables overriding the generic rate limits for specific methods and endpoints. {{</ note >}}

{{< warning >}} When {{% tts %}} HTTP and gRPC endpoints are served behind a reverse proxy, the `X-Forwarded-For` header is respected for the remote IP. The IP address of the reverse proxy must be trusted by {{% tts %}} for this to work, see [HTTP options]({{< ref "/reference/configuration/the-things-stack#http-options" >}}) and [gRPC Options]({{< ref "/reference/configuration/the-things-stack#grpc-options" >}}). {{</ warning >}}

{{< warning >}} When {{% tts %}} MQTT and UDP endpoints are served by a reverse proxy, the remote IP address seen by {{% tts %}} may not be correct. In this case, rate limiting for new MQTT connections (and UDP traffic) should be handled by the reverse proxy and disabled in {{% tts %}}. {{</ warning >}}

## Rate Limiting Actions

The following table describes how {{% tts %}} reacts when the maximum rate limit for a resource is exceeded.

| Resource              | Rate Limit Action                                                                       | Expected Client Action                                                                                                                            |
| --------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| gRPC Requests         | Return an error response of type `ResourceExhausted`, and set rate limiting headers.    | The client should wait and then retry the gRPC request. The `X-Rate-Limit-Retry` header from the response can help in this case.                  |
| HTTP Requests         | Return an `HTTP 429 (Too Many Requests)` error response, and set rate limiting headers. | The client should wait and then retry the HTTP request. The `X-Rate-Limit-Retry` header from the response can help in this case.                  |
| New MQTT Connections  | Drop (reject) new connection.                                                           | The client should reconnect with a backoff.                                                                                                       |
| UDP packets           | Drop packet.                                                                            | The client has no way of knowing whether the sent packet was received and/or processed, which is a limitation of the Legacy UDP packet forwarder. |
| Application Downlinks | Reject downlink message and terminate connection.                                       | The client should reconnect, and reduce the downlink traffic load.                                                                                |
| Gateway Uplinks       | Reject uplink message and terminate connection.                                         | The client should reconnect, and reduce the downlink traffic load.                                                                                |

## Rate Limiting Headers

When rate limiting is enabled, the following headers are added to all HTTP and gRPC requests:

- `X-Rate-Limit-Limit`: The maximum number of allowed requests for the current time period.
- `X-Rate-Limit-Available`: Number of available requests for the current time period.
- `X-Rate-Limit-Reset`: Seconds until the rate limiter resets.
- `X-Rate-Limit-Retry`: Seconds the client should wait before retrying the request.

## Example configuration

Enable rate limiting by adding the following configuration to your `ttn-lw-stack.yml`. Make sure to alter the values accordingly so that they match your deployment needs.

```yaml
rate-limiting:
  profiles:
    - name: HTTP servers
      max-per-min: 30
      associations:
        - http
    - name: Application downlink traffic
      max-per-min: 10
      associations:
        - as:down:web
        - as:down:mqtt
        - grpc:method:/ttn.v3.lorawan.v3.AppAs/DownlinkQueuePush
        - grpc:method:/ttn.v3.lorawan.v3.AppAs/DownlinkQueueReplace
    - name: Gateway connections
      max-per-min: 5
      associations:
        - gs:accept:mqtt
        - gs:accept:ws
        - grpc:stream:accept:/ttn.lorawan.v3.GtwGs/LinkGateway
    - name: gRPC API
      max-per-min: 60
      associations:
        - grpc:method
        - grpc:stream:accept
    - name: Override rate for uplink simulation
      max-per-min: 5
      associations:
        - grpc:method:/ttn.lorawan.v3.AppAs/SimulateUplink
    - name: Gateway uplink traffic
      max-per-min: 1000
      max-burst: 1500
      associations:
        - gs:up
```

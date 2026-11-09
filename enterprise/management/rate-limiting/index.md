# Rate Limiting

> The Things Stack supports rate limiting for all outward facing services. Access to each resource is limited by a unique identifier key, and it is possible to …

Source: https://www.thethingsindustries.com/docs/enterprise/management/rate-limiting/


The Things Stack supports rate limiting for all outward facing services. Access to each resource is limited by a unique identifier key, and it is possible to define rate limiting classes for fine-grained control.

For more details about the algorithm used, read [here](https://en.wikipedia.org/wiki/Generic_cell_rate_algorithm).

## Example configuration

The rate limiting configuration is split into multiple profiles. For each profile, we provide a name, the maximum allowed rate per minute, and optionally a maximum burst rate. Finally, we associate the profile with a number of rate limiting classes. Refer to the [Rate Limited Entities](#rate-limited-entities) section below for a list of all available rate limiting classes and what they mean.

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
        - gs:accept:semtechws/lbslns
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

This section lists resources of The Things Stack on which a maximum rate limit can be enforced.


<div class="has-vertical-space">
  <a href="#application-server-mqtt-client-connections">
    <h3 id="application-server-mqtt-client-connections">Application Server MQTT Client Connections</h3>
  </a>
  <table class="fixed">
    <tbody>
      <tr>
        <td><b>Description</b></td><td>Limit number of new MQTT client connections to Application Server by remote IP.</td>
      </tr>
      <tr>
        <td><b>Classes</b></td><td><code>as:accept:mqtt</code></td>
      </tr>
      <tr>
        <td><b>Key</b></td><td><code>as:accept:mqtt:ip:{{ RemoteIP }}</code></td>
      </tr>
      <tr>
        <td><b>Example</b></td><td><code>as:accept:mqtt:ip:10.10.10.10</code></td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <a href="#application-server-mqtt-downlink-traffic">
    <h3 id="application-server-mqtt-downlink-traffic">Application Server MQTT Downlink Traffic</h3>
  </a>
  <table class="fixed">
    <tbody>
      <tr>
        <td><b>Description</b></td><td>Limit number of downlink messages from MQTT clients by application ID and authentication token ID.</td>
      </tr>
      <tr>
        <td><b>Classes</b></td><td><code>as:down:mqtt</code></td>
      </tr>
      <tr>
        <td><b>Key</b></td><td><code>as:down:mqtt:app:{{ AppUID }}:token:{{ AuthTokenID }}</code></td>
      </tr>
      <tr>
        <td><b>Example</b></td><td><code>as:down:mqtt:app:my-application:token:F69AA8D76F5A78S6FDAASADF</code></td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <a href="#application-server-downlink-traffic-via-webhooks">
    <h3 id="application-server-downlink-traffic-via-webhooks">Application Server Downlink Traffic Via Webhooks</h3>
  </a>
  <table class="fixed">
    <tbody>
      <tr>
        <td><b>Description</b></td><td>Limit number of downlink messages via webhooks by application ID, device ID and authentication token ID.</td>
      </tr>
      <tr>
        <td><b>Classes</b></td><td><code>as:down:web</code></td>
      </tr>
      <tr>
        <td><b>Key</b></td><td><code>as:down:web:dev:{{ DevUID }}:token:{{ AuthTokenID }}</code></td>
      </tr>
      <tr>
        <td><b>Example</b></td><td><code>as:down:web:dev:my-application.my-device:token:F69AA8D76F5A78S6FDAASADF</code></td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <a href="#grpc-requests">
    <h3 id="grpc-requests">gRPC Requests</h3>
  </a>
  <table class="fixed">
    <tbody>
      <tr>
        <td><b>Description</b></td><td>Limit number of gRPC API requests by full gRPC method name, entity ID and authentication token ID.</td>
      </tr>
      <tr>
        <td><b>Classes</b></td><td><code>grpc:method:{{ FullMethod }}&lt;/code&gt; &lt;code&gt;grpc:method</code></td>
      </tr>
      <tr>
        <td><b>Key</b></td><td><code>grpc:method:{{ FullMethod }}:{{ EntityUID }}:token:{{ AuthTokenID }}</code></td>
      </tr>
      <tr>
        <td><b>Example</b></td><td><code>grpc:method:/ttn.lorawan.v3.AppAs/SimulateUplink:end device:my-application.my-device:token:F69AA8D76F5A78S6FDAASADF</code></td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <a href="#http-api-requests">
    <h3 id="http-api-requests">HTTP API Requests</h3>
  </a>
  <table class="fixed">
    <tbody>
      <tr>
        <td><b>Description</b></td><td>Limit number of HTTP API requests by gRPC method name, entity ID and authentication token ID.</td>
      </tr>
      <tr>
        <td><b>Classes</b></td><td><code>grpc:method:{{ FullMethod }}&lt;/code&gt; &lt;code&gt;grpc:method</code></td>
      </tr>
      <tr>
        <td><b>Key</b></td><td><code>grpc:method:{{ FullMethod }}:{{ EntityUID }}:token:{{ AuthTokenID }}</code></td>
      </tr>
      <tr>
        <td><b>Example</b></td><td><code>grpc:method:/ttn.lorawan.v3.AppAs/SimulateUplink:dev:my-application.my-device:token:F69AA8D76F5A78S6FDAASADF</code></td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <a href="#grpc-server-streams">
    <h3 id="grpc-server-streams">gRPC Server Streams</h3>
  </a>
  <table class="fixed">
    <tbody>
      <tr>
        <td><b>Description</b></td><td>Limit number of new gRPC server streams by gRPC server stream and authentication token ID.</td>
      </tr>
      <tr>
        <td><b>Classes</b></td><td><code>grpc:stream:accept:{{ FullMethod }}&lt;/code&gt; &lt;code&gt;grpc:stream:accept</code></td>
      </tr>
      <tr>
        <td><b>Key</b></td><td><code>grpc:stream:accept:{{ FullMethod }}:token:{{ AuthTokenID }}</code></td>
      </tr>
      <tr>
        <td><b>Example</b></td><td><code>grpc:stream:accept:/ttn.lorawan.v3.GtwGs/LinkGateway:token:F69AA8D76F5A78S6FDAASADF</code></td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <a href="#incoming-client-traffic-from-grpc-server-streams">
    <h3 id="incoming-client-traffic-from-grpc-server-streams">Incoming Client Traffic From gRPC Server Streams</h3>
  </a>
  <table class="fixed">
    <tbody>
      <tr>
        <td><b>Description</b></td><td>Limit number of incoming message for gRPC server streams for individual server streams.</td>
      </tr>
      <tr>
        <td><b>Classes</b></td><td><code>grpc:stream:up:{{ FullMethod }}&lt;/code&gt; &lt;code&gt;grpc:stream:up</code></td>
      </tr>
      <tr>
        <td><b>Key</b></td><td><code>grpc:stream:up:{{ FullMethod }}:streamID:{{ CorrelationID }}</code></td>
      </tr>
      <tr>
        <td><b>Example</b></td><td><code>grpc:stream:up:/ttn.lorawan.v3.GtwGs/LinkGateway:streamID:01F26VW4B39PAPHZKXFV6YM1TP</code></td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <a href="#gateway-server-mqtt-gateway-connections">
    <h3 id="gateway-server-mqtt-gateway-connections">Gateway Server MQTT Gateway Connections</h3>
  </a>
  <table class="fixed">
    <tbody>
      <tr>
        <td><b>Description</b></td><td>Limit number of new MQTT gateway connections to Gateway Server by remote IP.</td>
      </tr>
      <tr>
        <td><b>Classes</b></td><td><code>gs:accept:mqtt</code></td>
      </tr>
      <tr>
        <td><b>Key</b></td><td><code>gs:accept:mqtt:ip:{{ RemoteIP }}</code></td>
      </tr>
      <tr>
        <td><b>Example</b></td><td><code>gs:accept:mqtt:ip:10.10.10.10</code></td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <a href="#gateway-server-basicstation-gateway-connections">
    <h3 id="gateway-server-basicstation-gateway-connections">Gateway Server BasicStation Gateway Connections</h3>
  </a>
  <table class="fixed">
    <tbody>
      <tr>
        <td><b>Description</b></td><td>Limit number of new BasicStation gateway connections to Gateway Server by remote IP and request URL.</td>
      </tr>
      <tr>
        <td><b>Classes</b></td><td><code>gs:accept:semtechws/lbslns&lt;/code&gt; &lt;code&gt;http</code></td>
      </tr>
      <tr>
        <td><b>Key</b></td><td><code>gs:accept:semtechws/lbslns:ip:{{ RemoteIP }}:url:{{ URL }}</code></td>
      </tr>
      <tr>
        <td><b>Example</b></td><td><code>gs:accept:semtechws/lbslns:ip:10.10.10.10:url:/traffic/eui-0102030405060708</code></td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <a href="#gateway-server-uplink-traffic-udp">
    <h3 id="gateway-server-uplink-traffic-udp">Gateway Server Uplink Traffic (UDP)</h3>
  </a>
  <table class="fixed">
    <tbody>
      <tr>
        <td><b>Description</b></td><td>Limit number of UDP packets processed by the Gateway Server by remote IP.</td>
      </tr>
      <tr>
        <td><b>Classes</b></td><td><code>gs:up:udp&lt;/code&gt; &lt;code&gt;gs:up</code></td>
      </tr>
      <tr>
        <td><b>Key</b></td><td><code>gs:up:udp:ip:{{ RemoteIP }}</code></td>
      </tr>
      <tr>
        <td><b>Example</b></td><td><code>gs:up:udp:ip:10.10.10.10</code></td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <a href="#gateway-server-uplink-traffic-basicstation-mqtt-and-grpc">
    <h3 id="gateway-server-uplink-traffic-basicstation-mqtt-and-grpc">Gateway Server Uplink Traffic (BasicStation, MQTT and gRPC)</h3>
  </a>
  <table class="fixed">
    <tbody>
      <tr>
        <td><b>Description</b></td><td>Limit number of uplink messages received by the Gateway Server (for the BasicStation, gRPC and MQTT frontends) by gateway ID.</td>
      </tr>
      <tr>
        <td><b>Classes</b></td><td><code>gs:up</code></td>
      </tr>
      <tr>
        <td><b>Key</b></td><td><code>gs:up:gtw:{{ GtwUID }}</code></td>
      </tr>
      <tr>
        <td><b>Example</b></td><td><code>gs:up:gtw:my-gateway</code></td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <a href="#basicstation-cups">
    <h3 id="basicstation-cups">BasicStation CUPS</h3>
  </a>
  <table class="fixed">
    <tbody>
      <tr>
        <td><b>Description</b></td><td>Limit number of HTTP requests to the BasicStation CUPS by remote IP and request URL.</td>
      </tr>
      <tr>
        <td><b>Classes</b></td><td><code>http:gcs:cups&lt;/code&gt; &lt;code&gt;http</code></td>
      </tr>
      <tr>
        <td><b>Key</b></td><td><code>http:gcs:cups:ip:{{ RemoteIP }}:url:{{ URL }}</code></td>
      </tr>
      <tr>
        <td><b>Example</b></td><td><code>http:gcs:cups:ip:10.10.10.10:url:/update-info</code></td>
      </tr>
    </tbody>
  </table>
</div>
<div class="has-vertical-space">
  <a href="#oauth-server-account-app-gateway-configuration-server-interop-server-metrics-health-pprof-azure-iot-central-integration">
    <h3 id="oauth-server-account-app-gateway-configuration-server-interop-server-metrics-health-pprof-azure-iot-central-integration">OAuth Server, Account App, Gateway Configuration Server, Interop Server, Metrics, Health, pprof, Azure IoT Central integration</h3>
  </a>
  <table class="fixed">
    <tbody>
      <tr>
        <td><b>Description</b></td><td>Limit number of HTTP requests by remote IP and request URL. <code>{{ Server }}</code> is <code>oauth</code>, <code>account</code>, <code>gcs</code>, <code>interop</code>, <code>metrics</code>, <code>health</code>, <code>pprof</code> or <code>as:io:packages:azure:iotcentral</code> respectively. <code>{{ AuthInfo }}</code> is either <code>ip:{{ RemoteIP }}</code> or <code>token:{{ AuthTokenID }}</code> if the caller presents authentication information.</td>
      </tr>
      <tr>
        <td><b>Classes</b></td><td><code>http:{{ Server }}:{{ URLTemplate }}&lt;/code&gt; &lt;code&gt;http:{{ Server }}&lt;/code&gt; &lt;code&gt;http</code></td>
      </tr>
      <tr>
        <td><b>Key</b></td><td><code>http:{{ Server }}:{{ AuthInfo }}:url:{{ URL }}</code></td>
      </tr>
      <tr>
        <td><b>Example</b></td><td><code>http:oauth:ip:10.10.10.10:url:/authorize</code></td>
      </tr>
    </tbody>
  </table>
</div>


> **Note:** Both gRPC methods and HTTP endpoints support multiple classes. This enables overriding the generic rate limits for specific methods and endpoints.


> **Warning:** When The Things Stack HTTP and gRPC endpoints are served behind a reverse proxy, the `X-Forwarded-For` header is respected for the remote IP. The IP address of the reverse proxy must be trusted by The Things Stack for this to work, see [HTTP options](https://www.thethingsindustries.com/docs/enterprise/management/configuration/the-things-stack/#http-options) and [gRPC Options](https://www.thethingsindustries.com/docs/enterprise/management/configuration/the-things-stack/#grpc-options).


> **Warning:** When The Things Stack MQTT and UDP endpoints are served by a reverse proxy, the remote IP address seen by The Things Stack may not be correct. In this case, rate limiting for new MQTT connections (and UDP traffic) should be handled by the reverse proxy and disabled in The Things Stack.


## Rate Limiting Actions

The following table describes how The Things Stack reacts when the maximum rate limit for a resource is exceeded.

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

## Rate limiting providers

The default rate limiting provider for The Things Stack is `memory`. When using this provider the state of rate limiting is stored locally on each instance. The drawback of using it is inconsistent rate limiting state. The `redis` provider eliminates this problem by storing a shared rate limiting state for all instances.

| Provider | State        |
| -------- | ------------ |
| `memory` | per instance |
| `redis`  | shared       |

To enable `redis` rate limiting provider you can set it in rate limiting configuration.

```yaml
rate-limiting:
  provider: `redis`
```


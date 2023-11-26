---
title: "General Options"
description: ""
weight: -1
---

## Global Options

Under normal circumstances, only `info`, `warn` and `error` logs are printed to the console. For development, you may also want to see `debug` logs.

- `log.level`: The minimum level log messages must have to be shown (default "info")

The format of logs is also configurable. {{% tts %}} supports `console` format (that prints logs as a human-friendly text) and `json` format (that prints logs as JSON).

- `log.format`: Log format to write

## License

{{< distributions "Cloud" "Enterprise" >}} {{% tts %}} requires a license key for production use. For development purposes, it will work for a limited time on `localhost` without a license key.

- `license.key`: Contents of the license key. Must be a base64-encoded string.
- `license.file`: Location of the license file. Must be a binary file containing the raw license bytes.

Given the license key in base64 format, you can create the license file like this:

```bash
$ echo "AzYFASd/Gcggs..." | base64 --decode > ttn-lw-stack-license.bin
```

## Key Vault

{{< distributions "Cloud" "Enterprise" >}} The key vault is used to store secrets, such as TLS certificates and the keys for encrypting LoRaWAN® root keys in the database. These secrets can also be cached. {{% tts %}} supports keys stored in AWS Secrets Manager, or static configuration for development purposes.

- `key-vault.provider`: Provider (`static` or `aws`)
- `key-vault.static`: Static key encryption keys; values use hex encoding
- `key-vault.cache.size`: Cache size (caching is disabled if size is 0)
- `key-vault.cache.ttl`: TTL for cached elements (no expiration mechanism is used if TTL is 0)

- `key-vault.aws.region`: AWS region
- `key-vault.aws.secret-id-prefix`: Secret ID prefix
- `key-vault.aws.client-certificate-secret-label`: Secret label for loading the client certificate from Secrets Manager. Conflicts with `key-vault.aws.certificate-authority-arn`. If set, the secret must contain a `certificate` and `key` field with PEM encoded values
- `key-vault.aws.certificate-authority-arn`: Certificate authority ARN for issuing the client certificate from AWS Private CA. Conflicts with `key-vault.aws.client-certificate-secret-label`. If set, the client certificate is issued from AWS Private CA
- `key-vault.aws.client-certificate-common-name`: Common Name for issuing the client certificate from AWS Private CA. If not set, the host name is used

## TLS Options

{{% tts %}} serves several endpoints using TLS. TLS certificates can come from different sources.

- `tls.source`: Source of the TLS certificate (`file`, `acme`, `key-vault`)

If `file` is specified as `tls.source`, the location of the certificate and key need to be configured.

- `tls.certificate`: Location of TLS certificate
- `tls.key`: Location of TLS private key

If `acme` is specified as `tls.source`, certificates will be requested from Let's Encrypt (the default `tls.acme.endpoint`) and stored in the given `tls.acme.dir`.

- `tls.acme.endpoint`: ACME endpoint
- `tls.acme.dir`: Location of ACME storage directory
- `tls.acme.email`: Email address to register with the ACME account
- `tls.acme.hosts`: Hosts to enable automatic certificates for
- `tls.acme.default-host`: Default host to assume for clients without SNI

If `key-vault` is specified as `tls.source`, the certificate with the given ID is loaded from the key vault.

- `tls.key-vault.id`: ID of the certificate

For client-side TLS, you may configure a Root CA and optionally disable verification of certificate chains.

- `tls.root-ca`: Location of TLS root CA certificate (optional)
- `tls.insecure-skip-verify`: Skip verification of certificate chains (insecure)

## gRPC Options

The `grpc` options configure how {{% tts %}} listens for gRPC connections. The format is `host:port`. When listening on TLS ports, it uses the global [TLS configuration]({{< ref "#tls-options" >}}).

- `grpc.listen`: Address for the TCP gRPC server to listen on
- `grpc.listen-tls`: Address for the TLS gRPC server to listen on

When running a cluster in a trusted network, you can allow sending credentials over insecure connections with the `allow-insecure-for-credentials` option:

- `grpc.allow-insecure-for-credentials`: Allow transmission of credentials over insecure transport

If {{% tts %}} is deployed behind a reverse proxy that does not use a private network IP address (in `127.0.0.0/8`, `10.0.0.0/8`, `100.64.0.0/10`, `172.16.0.0/12` or `192.168.0.0/16`), its IP address range needs to be configured in order for {{% tts %}} to trust it.

- `grpc.trusted-proxies`: CIDRs of trusted reverse proxies.

You can suppress log messages for successful gRPC method calls (e.g. to reduce the noise caused by the health checks in a production environment).

- `grpc.log-ignore-methods`: List of gRPC methods for which to suppress logs of successful requests.

If you are seeing a lot of logs with `grpc_service=/ttn.v3.lorawan.ServiceName` and `grpc_method=MethodName`, use `/ttn.v3.lorawan.ServiceName/MethodName` for this option.

## HTTP Options

The `http` options configure how {{% tts %}} listens for HTTP connections. The format is `host:port`. When listening on TLS ports, it uses the global [TLS configuration]({{< ref "#tls-options" >}}).

- `http.listen`: Address for the HTTP server to listen on
- `http.listen-tls`: Address for the HTTPS server to listen on

{{% tts %}} uses secure cookies that are encrypted with a `block-key` and signed with a `hash-key`. In production deployments you'll want these to stay the same between restarts. The keys are encoded as hex.

- `http.cookie.block-key`: Key for cookie contents encryption (16, 24 or 32 bytes)
- `http.cookie.hash-key`: Key for cookie contents verification (32 or 64 bytes)

{{% tts %}} serves a number of internal endpoints for health, metrics and debugging. These will usually be disabled or password protected in production deployments.

- `http.health.enable`: Enable health check endpoint on HTTP server
- `http.health.password`: Password to protect health endpoint (username is health)
- `http.metrics.enable`: Enable metrics endpoint on HTTP server
- `http.metrics.password`: Password to protect metrics endpoint (username is metrics)
- `http.pprof.enable`: Enable pprof endpoint on HTTP server
- `http.pprof.password`: Password to protect pprof endpoint (username is pprof)

It is possible to redirect users to the canonical URL of a deployment. There are options to redirect to a given host, or redirect from HTTP to HTTPS.

- `http.redirect-to-host`: Redirect all requests to one host
- `http.redirect-to-tls`: Redirect HTTP requests to HTTPS

The HTTP server serves static files for the web UI. If these files are not in the standard location, you may need to change the search path.

- `http.static.mount`: Path on the server where static assets will be served
- `http.static.search-path`: List of paths for finding the directory to serve static assets from

If {{% tts %}} is deployed behind a reverse proxy that does not use a private network IP address (in `127.0.0.0/8`, `10.0.0.0/8`, `100.64.0.0/10`, `172.16.0.0/12` or `192.168.0.0/16`), its IP address range needs to be configured in order for {{% tts %}} to trust it.

- `http.trusted-proxies`: CIDRs of trusted reverse proxies

You can suppress log messages for successful HTTP requests (e.g. to reduce the noise caused by the health checks in a production environment).

- `http.log-ignore-paths`: List of URLs for which to suppress logs of successful requests.

## Interoperability Options

{{% tts %}} supports interoperability according to LoRaWAN Backend Interfaces specification. The following options are used to configure the server for this.

- `interop.listen`: Address for the interop server to listen on for non-TLS connections

- `interop.listen-tls`: Address for the interop server to listen on for TLS connections

- `interop.sender-client-ca.source`: Source of the interop server sender client CAs configuration (static, directory, url, blob)

The `url` source loads interop server sender client CAs configuration from the given URL.

- `interop.sender-client-ca.url`

The `directory` source loads from the given directory.

- `interop.sender-client-ca.directory`

The `blob` source loads from the given path in a bucket. This requires the global [blob configuration]({{< ref "#blob-options" >}}).

- `interop.sender-client-ca.blob.bucket`: Bucket to use
- `interop.sender-client-ca.blob.path`: Path to use

Packet Broker support is also available through LoRaWAN Backend Interfaces.

- `interop.public-tls-address`: A public address of the Interop server. The audience in the incoming OAuth 2.0 token from Packet Broker is verified against this address to ensure that other networks cannot impersonate as Packet Broker.
- `interop.packet-broker.enabled`: Enable Packet Broker to authenticate
- `interop.packet-broker.token-issuer`: The issuer of the incoming OAuth 2.0 token from Packet Broker is verified against this value.

## Redis Options

Redis is the main data store for the [Network Server]({{< relref "network-server.md" >}}), [Application Server]({{< relref "application-server.md" >}}) and [Join Server]({{< relref "join-server.md" >}}). Redis is also used by the [Identity Server]({{< relref "identity-server.md" >}}) for caching and can be used by the [events system]({{< ref "#events-options" >}}) for exchanging events between components.

Redis configuration options:

- `redis.password`: Password of the Redis server
- `redis.database`: Redis database to use
- `redis.namespace`: Namespace for Redis keys
- `redis.pool-size`: The maximum size of the connection pool

If connecting to a single Redis instance:

- `redis.address`: Address of the Redis server

Or you can enable failover using [Redis Sentinel](https://redis.io/topics/sentinel):

- `redis.failover.enable`: Set to `true`
- `redis.failover.addresses`: List of addresses of the Redis Sentinel instances (required)
- `redis.failover.master-name`: Redis Sentinel master name (required)

Further, you can reduce the load on the Redis master by specifying read-only configuration:

- `redis.readonly.address` {{< distributions "Cloud" "Enterprise" >}}: Address of the Redis server 
- `redis.readonly.password` {{< distributions "Cloud" "Enterprise" >}}: Password of the Redis server 
- `redis.readonly.database` {{< distributions "Cloud" "Enterprise" >}}: Redis database to use 
- `redis.readonly.pool-size` {{< distributions "Cloud" "Enterprise" >}}: The maximum size of the connection pool

If your Redis server uses TLS, use the following options:

- `redis.tls.require`: Require TLS when connecting to Redis
- `redis.tls.root-ca`: Location of TLS root CA certificate
- `redis.tls.insecure-skip-verify`: Skip verification of certificate chains (insecure)

Mutual TLS is not supported yet.

## Blob Options

The `blob` options configure how {{% tts %}} reads or writes files such as pictures, the frequency plans repository or files required for Backend Interfaces interoperability. The `provider` field selects the provider that is used, and which other options are read.

- `blob.provider`: Blob store provider (local, aws, gcp, azure) (default `local`)

If the blob provider is `local`, you need to specify the directory to use.

- `blob.local.directory`: Local directory that holds the buckets (default `./public/blob`)

If the blob provider is `aws`, you need to specify the S3 region, the access key ID and secret access key.

- `blob.aws.region`: S3 region
- `blob.aws.access-key-id`: Access key ID
- `blob.aws.secret-access-key`: Secret access key
- `blob.aws.endpoint`: S3 endpoint
- `blob.aws.session-token`: Session token

If the blob provider is `gcp`, you can specify the credentials with either the credentials data, or with the path to the credentials file.

- `blob.gcp.credentials`: JSON data of the GCP credentials, if not using JSON file
- `blob.gcp.credentials-file`: Path to the GCP credentials JSON file

There is also an experimental support for `azure` provider. Only authentication via Managed Identity is supported.

- `blob.azure.account-name`: Azure storage account name

## Events Options

The `events` options configure how events are shared between components. When using a single instance of {{% tts %}}, the `internal` backend is the best option. If you need to communicate in a cluster, you can use the `redis` or `cloud` backend.

- `events.backend`: Backend to use for events (internal, redis, cloud) (default "internal")

When using the `redis` backend, the global [Redis configuration]({{< ref "#redis-options" >}}) is used. Alternatively, you may customize the Redis configuration that is used for events.

- `events.redis.address`: Address of the Redis server
- `events.redis.password`: Password of the Redis server
- `events.redis.database`: Redis database to use
- `events.redis.namespace`: Namespace for Redis keys
- `events.redis.pool-size`: The maximum size of the connection pool
- `events.redis.workers`: Number of workers to process request

Similar to the global Redis configuration, you can reduce the load on the Redis master by specifying read-only configuration:

- `events.redis.readonly.address` {{< distributions "Cloud" "Enterprise" >}}: Address of the Redis server
- `events.redis.readonly.password` {{< distributions "Cloud" "Enterprise" >}}: Password of the Redis server
- `events.redis.readonly.database` {{< distributions "Cloud" "Enterprise" >}}: Redis database to use 
- `events.redis.readonly.pool-size` {{< distributions "Cloud" "Enterprise" >}}: The maximum size of the connection pool

Redis events backend also provides event storage where retention can be configured.

- `events.redis.store.enable`: Enable events store 
- `events.redis.store.correlation-id-count`: Defines how many events are indexed for a correlation ID
- `events.redis.store.entity-count`: Defines how many events are indexed for an entity ID
- `events.redis.store.entity-ttl`: Defines how long events are indexed for an entity ID
- `events.redis.store.ttl`: Defines how long event payloads are retained

If your Redis server uses TLS, use the following options:

- `events.redis.tls.require`: Require TLS when connecting to Redis
- `events.redis.tls.root-ca`: Location of TLS root CA certificate
- `events.redis.tls.insecure-skip-verify`: Skip verification of certificate chains (insecure)

Mutual TLS is not supported yet.

With the `cloud` backend, the configured publish and subscribe URLs are passed to [the Go CDK](https://gocloud.dev/howto/pubsub/).

- `events.cloud.publish-url`: URL for the topic to send events
- `events.cloud.subscribe-url`: URL for the subscription to receiving events

## Frequency Plans Options

The `frequency-plans` configuration is used by the [Gateway Server]({{< relref "gateway-server.md" >}}) and the [Network Server]({{< relref "network-server.md" >}}). It can load configuration from a number of sources.

- `frequency-plans.config-source`: Source of the frequency plans (static, directory, url, blob)

The `url` source loads frequency plans from the given URL. See the [lorawan-frequency-plans](https://github.com/TheThingsNetwork/lorawan-frequency-plans) repository for more information.

- `frequency-plans.url`

The `directory` source loads from the given directory.

- `frequency-plans.directory`

The `blob` source loads from the given path in a bucket. This requires the global [blob configuration]({{< ref "#blob-options" >}}).

- `frequency-plans.blob.bucket`: Bucket to use
- `frequency-plans.blob.path`: Path to use

## Cluster Options

The `cluster` options configure how {{% tts %}} communicates with other components in the cluster. These options do not need to be set when running a single instance of {{% tts %}}. The most important options are the ones to configure the addresses of the other components in the cluster.

- `cluster.address`: Address to use for cluster communication
- `cluster.name`: Name of the current cluster peer
- `cluster.identity-server`: Address for the Identity Server
- `cluster.gateway-server`: Address for the Gateway Server
- `cluster.network-server`: Address for the Network Server
- `cluster.application-server`: Address for the Application Server
- `cluster.join-server`: Address for the Join Server
- `cluster.crypto-server`: Address for the Crypto Server
- `cluster.gateway-contiguration-server`: Address of the Gateway Configuration Server
- `cluster.join`: Addresses of cluster peers to join

The next thing to configure is how peers discover each other, and how peers claim IDs.

{{% tts %}} currently only supports `DNS` discovery. In this discovery mechanism cluster peers periodically perform DNS lookups for the configured addresses. If an address is of the form `host:port` the peers will be discovered by looking up the `A` records for that address, and connecting to the configured port. If an address is only a hostname, the peers will be discovered by looking up the `SRV` records for that address, then looking up the `A` records for each returned address and connecting to the port that was set on the `SRV` record.

- `cluster.discovery-mode`: Peer discovery mode

{{% tts %}} currently only supports the `redis` backend for ID claiming. This uses the same Redis instance as the one used for the cache. When a gateway connects to a Gateway Server, the Gateway Server will register itself in Redis for the given gateway ID. When a Network Server needs to send a downlink to a gateway, it will look up the registered Gateway Server for the given gateway ID. To avoid hitting Redis every time a Network Server needs to send a downlink, it has a local cache of these ID claims.

- `cluster.claim.backend`: ID claiming backend
- `cluster.claim.cache.size`: Maximum size of the local ID claims cache
- `cluster.claim.cache.ttl`: TTL of locally cached ID claims

The cluster keys are 128 bit, hex-encoded keys that cluster components use to authenticate to each other.

- `cluster.keys`: Keys used to communicate between components of the cluster. The first one will be used by the cluster to identify itself

It is possible to configure the cluster to use TLS or not. We recommend to enable TLS for production deployments. The server name used in the TLS handshake between cluster peers can be overridden so that {{% tts %}} can connect to cluster peers using private (IP) addresses, while using a (public) TLS certificate that doesn't include those private addresses.

- `cluster.tls`: Do cluster gRPC over TLS
- `cluster.tls-server-name`: Server name to use in TLS handshake to cluster peers

{{% tts %}} can be configured to connect to Packet Broker via Packet Broker Agent component.

- `cluster.packet-broker-agent`: Defines the address of the Packet Broker Agent

It is possible to configure {{% tts %}} with Device Repository profiles from different vendors. This allows reusing standard end device profiles for module makers and LoRaWAN end device stack vendors.

- `cluster.device-repository`: Defines the address of the Device Repository

## Cache Options

{{% tts %}} can optionally be configured to use a cache.

- `cache.service`: Configure the backing store that will be used for the cache. Currently, only `redis` is supported

When using the `redis` backend, the global [Redis configuration]({{< ref "#redis-options" >}}) is used. Alternatively, you may customize the Redis configuration that is used for the cache.

- `cache.redis.address`: Address of the Redis server
- `cache.redis.password`: Password of the Redis server
- `cache.redis.database`: Redis database to use
- `cache.redis.namespace`: Namespace for Redis keys
- `cache.redis.pool-size`: The maximum size of the connection pool

See [Redis configuration]({{< ref "#redis-options" >}}) for more options.

## Multi-Tenancy 

{{< distributions "Cloud" "Enterprise" >}} In multi-tenant deployments, some additional configuration is required.

- `tenancy.base-domains` {{< distributions "Cloud" "Enterprise" >}}: Base domains for tenant ID inference. Setting this to `thethings.example.com` would extract the tenant ID from `<tenant-id>.thethings.example.com`. 
- `tenancy.default-id` {{< distributions "Cloud" "Enterprise" >}}: Default tenant ID. Users visiting `thethings.example.com` (from `tenancy.base-domains`) will be redirected to `default.thethings.example.com`. 

Tenants can have custom configuration, such as custom branding or custom user registration options. This information is typically cached locally, especially in multi-region deployments to reduce the load on the Identity Server and to be more resilient against outages of the Identity Server.

- `tenancy.ttl`: TTL of cached tenant configurations {{< distributions "Cloud" "Enterprise" >}}

## Rate Limiting

{{% tts %}} supports rate limiting external endpoints. See [Rate Limiting]({{< ref "/reference/rate-limiting" >}}) for more details.

- `rate-limiting.blob.bucket`: Bucket to use
- `rate-limiting.blob.path`: Path to use
- `rate-limiting.config-source`: Source of the `rate-limiting.yml` file (directory, url, blob)
- `rate-limiting.directory`: Filesystem directory which contains rate limiting configuration
- `rate-limiting.memory.max-size`: Maximum store size for the rate limiter
- `rate-limiting.url`: URL which contains rate limiting configuration

## Resource Limiting

{{< distributions "Dedicated Cloud" "Enterprise" "AWS Launcher" >}}  {{% tts %}} supports configuring maximum limits for active resources (e.g. number of active application data-plane MQTT connections). Resource limiting configuration can only be set from the configuration file. See [Resource Limiting]({{< ref "/reference/resource-limiting" >}}) for more details.

## Version Check

{{% tts %}} performs a version check upon running by default, and prints a corresponding message if a newer version is available.

- `skip-version-check`: Set to `true` to skip version check

## Experimental Features

{{% tts %}} supports experimental features.

- `experimental.features`: Experimental features to activate

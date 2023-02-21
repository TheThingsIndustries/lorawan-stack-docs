---
title: "Application Server Options"
description: ""
---

## Security Options

- `as.device-kek-label`: Label of KEK used to encrypt device keys at rest

## Interoperability Options

The `as.interop` options configure how Application Server performs interoperability with other LoRaWAN Backend Interfaces-compliant servers.

- `as.interop.id`: AS-ID of this Application Server
- `as.interop.config-source`: Source of the interoperability client configuration (directory, url, blob)
- `as.interop.blob.bucket`: Blob bucket, which contains interoperability client configuration
- `as.interop.blob.path`: Blob path, which contains interoperability client configuration
- `as.interop.directory`: OS filesystem directory, which contains interoperability client configuration
- `as.interop.url`: URL, which contains interoperability client configuration

See [LoRaWAN Join Server Configuration]({{< ref "/reference/interop-repository" >}}) to learn how to configure the client configuration.

## MQTT Options

Application Server exposes an MQTT server for streaming data.

- `as.mqtt.listen`: Address for the MQTT frontend to listen on (default ":1883")
- `as.mqtt.listen-tls`: Address for the MQTTS frontend to listen on (default ":8883")
- `as.mqtt.public-address`: Public address of the MQTT frontend (default "localhost:1883")
- `as.mqtt.public-tls-address`: Public address of the MQTTs frontend (default "localhost:8883")

## PubSub Options

- `as.pubsub.providers.mqtt`: Controls the status of MQTT provider (default `enabled`)
- `as.pubsub.providers.nats`: Controls the status of NATS provider (default `enabled`)

## AWS IoT Integration Options

{{< distributions "Enterprise" "AWS Launcher" >}}

- `as.aws.iot.telemetry` {{< deprecated-in-version "3.11.1" >}}: Enable publishing telemetry to AWS IoT
- `as.aws.region`: AWS region (optional)

## HTTP Webhooks Options

Application Server has an internal queue with worker routines for outgoing requests. When remote endpoints are not fast enough and queue (with `queue-size`) gets full, new traffic gets discarded. You can tune these parameters for optimal performance, considering memory consumption with a large queue size and number of workers.

- `as.webhooks.queue-size`: Number of requests to queue (default 1024)
- `as.webhooks.target`: Target of the integration (direct) (default "direct")
- `as.webhooks.timeout`: Wait timeout of the target to process the request (default 5s)
- `as.webhooks.workers`: Number of workers to process requests (default 1024)

Application Server supports templates for webhooks that can be loaded from a `directory` or `url`.

- `as.webhooks.templates.directory`: Retrieve the webhook templates from the filesystem
- `as.webhooks.templates.url`: Retrieve the webhook templates from a web server
- `as.webhooks.templates.logo-base-url`: The base URL for the logo storage

Application Server supports communicating the paths of the downlink queue operations to the webhook endpoints via headers. The paths are computed from the public address, and the HTTPS endpoint is preferred over the HTTP one.

- `as.webhooks.downlink.public-address`: Public address of the HTTP webhooks frontend (default "http://localhost:1885/api/v3")
- `as.webhooks.downlink.public-tls-address`: Public address of the HTTPS webhooks frontend

Webhooks have a health status associated with them, so the webhooks that fail successively (with a non-2xx status code) get disabled for a period of time. A successful HTTP request resets the failure counter.

- `as.webhooks.unhealthy-attempts-threshold`: The number of allowed successive failures before the webhook is disabled
- `as.webhooks.unhealthy-retry-interval`: The cooldown period after which disabled webhooks may execute again

## Entity Fetcher Options

Application Server can fetch information stored in the Identity Server. For example, it may be fetch end devices, in order to add their location as metadata to forwarded upstream messages. This information can be cached locally to improve performance:

- `as.fetcher.timeout`: Timeout of the end device retrieval operation
- `as.fetcher.cache.enable`: Set to `true` to enable end device caching
- `as.fetcher.cache.size`: Number of cache entries. In case the cache is full, the Least Frequently Used entry will be evicted. Set to `0` to disable.
- `as.fetcher.cache.ttl`: TTL for cache entries
- `as.fetcher.circuit-breaker.enable`: Enable circuit breaker behavior on burst errors
- `as.fetcher.circuit-breaker.threshold`: Number of failed fetching attempts after which the circuit breaker opens
- `as.fetcher.circuit-breaker.timeout`: Timeout after which the circuit breaker closes

## Formatter Options

Application Server can use Javascript payload formatters to decode uplink and encode downlink messages.

- `as.formatters.max-parameter-length`: Maximum length (in bytes) for user-defined payload formatter scripts. A global cap of 16KB is enforced at the API level. This does not affect payload formatter scripts loaded from the [Device Repository]({{< ref "/integrations/payload-formatters/device-repo" >}}).

## Application Packages Options

- `as.packages.workers`: Number of workers per application package to process requests (default 1024)
- `as.packages.timeout`: Message processing timeout (default `10s`)

## Azure IoT Hub Integration Options

{{< distributions "Cloud" "Enterprise" >}}

- `as.packages.azure-iot-hub.cluster.application-server`: Application Server cluster address (default `localhost`)
- `as.packages.azure-iot-hub.cluster.join-server`: Join Server cluster address (default `localhost`)
- `as.packages.azure-iot-hub.cluster.network-server`: Network Server cluster address (default `localhost`)

## Storage Integration Options

{{< distributions "Enterprise" "AWS Launcher" "Dedicated Cloud" >}} The Storage Integration requires a database for storing upstream messages.

- `as.packages.storage.provider`: Database backend to use. Currently, only `postgres` is supported.

A PostgreSQL-compatible database is required. The Application Server will automatically recognise when [TimescaleDB](https://www.timescale.com) is used.

- `as.packages.storage.postgres.database-uri`: Database connection URI. Details for the form of the URI can be found in the [PostgreSQL documentation](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING)
- `as.packages.storage.postgres.read-database-uri`: Read-only database connection URI
- `as.packages.storage.postgres.select-batch-size`: Maximum batch size for `SELECT` queries. Larger values require more memory, but improve speed when querying large datasets
- `as.packages.storage.postgres.insert-batch-size`: Maximum batch size for `INSERT` queries. Larger values require more memory, but improve throughput when storing messages, by reducing the number of required database transactions. Only relevant when bulk mode is enabled
- `as.packages.storage.postgres.debug`: Log all SQL queries, make sure to set to `false` for production environments

In order to improve performance, the Storage Integration can be configured to store upstream messages in a local cache, and then flush them in batches to the database in regular intervals.

- `as.packages.storage.bulk.enabled`: Set to `true` to enable bulk mode.
- `as.packages.storage.bulk.interval`: Interval between consecutive flushes.
- `as.packages.storage.bulk.max-size`: Local cache size (number of messages). If the cache is full and a new upstream messages arrives, the cache is flushed to the database.

The Storage Integration can be configured to store only specific types of upstream messages.

- `as.packages.storage.enable.all`: Set to `true` to store all current and future message types, ignoring the rest of the options
- `as.packages.storage.enable.uplink-message`: Set to `true` to store `UplinkMessage` messages
- `as.packages.storage.enable.join-accept`: Set to `true` to store `JoinAccept` messages
- `as.packages.storage.enable.downlink-ack`: Set to `true` to store `DownlinkAck` messages
- `as.packages.storage.enable.downlink-nack`: Set to `true` to store `DownlinkNack` messages
- `as.packages.storage.enable.downlink-sent`: Set to `true` to store `DownlinkSent` messages
- `as.packages.storage.enable.downlink-failed`: Set to `true` to store `DownlinkFailed` messages
- `as.packages.storage.enable.location-solved`: Set to `true` to store `LocationSolved` messages
- `as.packages.storage.enable.service-data`: Set to `true` to store `ServiceData` messages

## Advanced Distribution Options

The Application Server can be configured to block while publishing traffic to global or local subscribers, as well as the number of uplinks that the Application Server buffers for those subscribers.

- `as.distribution.timeout`: Wait timeout of any empty subscription set (default `10ms`)
- `as.distribution.global.individual.subscription-blocks`: Controls if the Application Server should block while publishing traffic to individual global subscribers (such as MQTT clients).
- `as.distribution.global.individual.subscription-queue-size`: Controls how many uplinks the Application Server should buffer for an individual global subscriber. Note that when the buffer is full, the Application Server will drop the uplinks if `--as.distribution.global.individual.subscription-blocks` is not enabled. Use a negative value in order to disable the queue.
- `as.distribution.local.broadcast.subscription-blocks`: Controls if the Application Server should block while publishing traffic to broadcast local subscribers (such as webhooks and application packages matching).
- `as.distribution.local.broadcast.subscription-queue-size`: Controls how many uplinks the Application Server should buffer for an broadcast local subscriber. Has the same semantics as `--as.distribution.global.individual.subscription-queue-size`.
- `as.distribution.local.individual.subscription-blocks`: Controls if the Application Server should block while publishing traffic to individual local subscribers (such as PubSub integrations).
- `as.distribution.local.individual.subscription-queue-size`: Controls how many uplinks the Application Server should buffer for an individual local subscriber. Has the same semantics as `--as.distribution.global.individual.subscription-queue-size`.

## End Device Location Caching Options

- `as.end-device-metadata-storage.location.timeout`: Timeout of the end device retrieval operation (default `5s`)
- `as.end-device-metadata-storage.location.cache.enable`: Enable caching of end device locations (default `true`)
- `as.end-device-metadata-storage.location.cache.eviction-ttl`: TTL of cached end device locations
- `as.end-device-metadata-storage.location.cache.max-refresh-interval`: Maximum time interval between two asynchronous refreshes
- `as.end-device-metadata-storage.location.cache.min-refresh-interval`: Minimum time interval between two asynchronous refreshes

## Uplink Storage Limit

- `as.uplink-storage.limit`: Controls the number of application uplinks per device that are stored in the Application Server (default 16)

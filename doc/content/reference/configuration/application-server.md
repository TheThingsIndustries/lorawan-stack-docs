---
title: "Application Server Options"
description: ""
---

## Linking Options {{< removed-in-version "3.11.0" >}}

The Application Server links to a Network Server. The `link-mode` configures how linking occurs.

- `as.link-mode`: Mode to link applications to their Network Server (all, explicit) (default "all")

## Security Options

- `as.device-kek-label`: Label of KEK used to encrypt device keys at rest

## Interoperability Options

The `as.interop` options configure how Application Server performs interoperability with other LoRaWAN Backend Interfaces-compliant servers.

- `as.interop.id`: AS-ID used for interoperability
- `as.interop.config-source`: Source of the interoperability client configuration (directory, url, blob)
- `as.interop.blob.bucket`: Blob bucket, which contains interoperability client configuration
- `as.interop.blob.path`: Blob path, which contains interoperability client configuration
- `as.interop.directory`: OS filesystem directory, which contains interoperability client configuration
- `as.interop.url`: URL, which contains interoperability client configuration

## MQTT Options

Application Server exposes an MQTT server for streaming data.

- `as.mqtt.listen`: Address for the MQTT frontend to listen on (default ":1883")
- `as.mqtt.listen-tls`: Address for the MQTTS frontend to listen on (default ":8883")
- `as.mqtt.public-address`: Public address of the MQTT frontend (default "localhost:1883")
- `as.mqtt.public-tls-address`: Public address of the MQTTs frontend (default "localhost:8883")

## HTTP Webhooks Options

Application Server has an internal queue with worker routines for outgoing requests. When remote endpoints are not fast enough and queue (with `queue-size`) gets full, new traffic gets discarded. You can tune these parameters for optimal performance, considering memory consumption with a large queue size and number of workers.

- `as.webhooks.queue-size`: Number of requests to queue (default 16)
- `as.webhooks.target`: Target of the integration (direct) (default "direct")
- `as.webhooks.timeout`: Wait timeout of the target to process the request (default 5s)
- `as.webhooks.workers`: Number of workers to process requests (default 16)

Application Server supports templates for webhooks that can be loaded from a `directory` or `url`.

- `as.webhooks.templates.directory`: Retrieve the webhook templates from the filesystem
- `as.webhooks.templates.url`: Retrieve the webhook templates from a web server
- `as.webhooks.templates.logo-base-url`: The base URL for the logo storage

Application Server supports communicating the paths of the downlink queue operations to the webhook endpoints via headers. The paths are computed from the public address, and the HTTPS endpoint is preferred over the HTTP one.

- `as.webhooks.downlink.public-address`: Public address of the HTTP webhooks frontend (default "http://localhost:1885/api/v3")
- `as.webhooks.downlink.public-tls-address`: Public address of the HTTPS webhooks frontend

## Entity Fetcher Options

Application Server can fetch information stored in the Identity Server. For example, it may be fetch end devices, in order to add their location as metadata to forwarded upstream messages. This information can be cached locally to improve performance:

- `as.fetcher.cache.enable`: Set to `true` to enable caching.
- `as.fetcher.cache.size`: Number of cache entries. In case the cache is full, the Least Frequently Used entry will be evicted. Set to `0` to disable.
- `as.fetcher.cache.ttl`: Time-To-Live for cache entries.

## Storage Integration Options {{< distributions "Enterprise" "AWS Launcher" "Dedicated Cloud" >}} {#storage-integration-options}

The Storage Integration requires a database for storing upstream messages.

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

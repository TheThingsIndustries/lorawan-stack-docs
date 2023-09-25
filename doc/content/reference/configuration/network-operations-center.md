---
title: "Network Operations Center Options"
description: ""
distributions: ["Enterprise"]
---

## Network Operations Center Mount

The Network Operations Center can be served under any arbitrary path on your server:

- `noc.mount`: Path on the server where the Network Operations Center will be served

## OAuth Options

Network Operations Center app uses the [OAuth 2.0 authorization flow](https://en.wikipedia.org/wiki/OAuth#OAuth_2.0_2) to authorize actions in the backend. You can customize the authorization parameters if necessary:

- `noc.oauth.authorize-url`: The OAuth Authorize URL
- `noc.oauth.client-id`: The OAuth client ID
- `noc.oauth.client-secret`: The OAuth client secret
- `noc.oauth.token-url`: The OAuth Token Exchange URL
- `noc.oauth.logout-url`: The logout URL of the OAuth server used to perform client initiated logouts
- `noc.oauth.cross-site-cookie`: Controls access to OAuth state cookie between origins. Set to `true` in multi-cluster deployments in order to support OAuth clients that use POST callbacks. The default is `false`.

## Database Options

Network Operations Center needs to be connected to PostgreSQL database with a TimescaleDB extension installed. Details for the form of the URI can be found in the [PostgreSQL documentation](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING).

- `noc.store.database-uri`: Database connection URI
- `noc.store.max-open-connections`: Maximum number of open database connections (default `10`)
- `noc.store.max-idle-connections`: Maximum number of idle database connections (default `2`)
- `noc.store.read-database-uri`: Read-Only Database connection URI
- `noc.store.read-max-open-connections`: Maximum number of open database connections for reading
- `noc.store.read-max-idle-connections`: Maximum number of idle database connections for reading
- `noc.store.target-insert-batch-window`: Target batch window for INSERT commands
- `noc.store.target-insert-batch-size`: Target batch size for INSERT commands
- `noc.store.raw-data-retention`: Raw data retention (default: `72h`)

## Grafana Options

Network Operations Center is a reverse proxy to Grafana. In order to use the Grafana API and configure the data source plugin, configure the following options.

- `noc.grafana.target-url`: Target URL. This should be an internal URL, only accessible to {{% tts %}} (not the public internet)
- `noc.grafana.admin-username`: Grafana admin username (default: `admin`)
- `noc.grafana.admin-password`: Grafana admin password (default: `admin`)
- `noc.grafana.console-url`: Public URL of the Console. This is used for the **Console** buttons in Grafana to go directly to the Console
- `noc.grafana.noc-address`: Internal address for the data source plugin to contact the Network Operations Center service directly. This must be in `host:port` format. The `port` is typically `1885` or `8886` when using TLS
- `noc.grafana.noc-tls.require`: Require TLS between Grafana data source plugin and the Network Operations Center (default: `false`)

## Access Options

Network Operations Center provides conditional access to the different Grafana dashboards. In order to configure access to these extra dashboards, configure the following options.

- `noc.access.extended`: Applications and end devices dashboards (default: `true` since version `3.28.0`, `false` previously)

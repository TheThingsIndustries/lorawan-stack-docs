---
title: "Troubleshooting Installation"
description: ""
weight: 4
aliases: [/getting-started/installation/troubleshooting]
---

This section contains help for common issues you may encounter while installing {{% tts %}}.

## Component address is not included in this license

Ensure that you configure the `is.oauth.ui.canonical-url` with a domain that matches the domain in your license. See the [Configuration Reference]({{< ref "reference/configuration" >}}) for more information about the configuration options.

## Version in "docker-compose.yml" is unsupported

Our `docker-compose.yml` file uses [Compose file version 3.7](https://docs.docker.com/compose/compose-file/). If using a package manager to install Docker Compose, it is possible to install an old, unsupported version. See Docker's [installation instructions](https://docs.docker.com/compose/install/) to upgrade to a more recent version.

## Token Exchange Refused

1. Double check that you used the correct `client-secret` when you authorized the client in [Running {{% tts %}}]({{< relref "running-the-stack" >}}).
2. If running on `localhost`, see the [Localhost]({{< ref "the-things-stack/host/docker/configuration#localhost" >}}) section for additional info.
3. You may have invalid certificates. Verify using `openssl verify -CAfile ca.pem cert.pem`.
4. If you configure {{% tts %}} without TLS and attempt to connect using `https` you will receive this error. Configure TLS or use `http`.
5. If you are running an offline {{% tts %}} deployment, generating [Let's Encrypt certificates]({{< ref "/the-things-stack/host/docker/certificates#automatic-certificate-management" >}}) for your domain name might fail because of lack of the Internet connection. Try using certificates from a [Custom Certificate Authority]({{< ref "/the-things-stack/host/docker/certificates#custom-certificate-authority" >}}).
6. Double-check all [ports]({{< ref "/the-things-stack/host/docker/configuration#environment-and-ports" >}}) listed in the `docker-compose.yml` file for any firewall restrictions.

## Can't access the server

Ensure you have a DNS record pointing to your server's public IP address. See your domain registrar's help section for instructions, or [name.com's DNS guide](https://www.name.com/support/articles/205188538-Pointing-your-domain-to-hosting-with-A-records) for general information about pointing records to your IP address.

## Forbidden

If you see an error reading:

```
Invalid redirect URI
```

check that you entered the correct server address when [registering the Console as an OAuth client]({{< ref "the-things-stack/host/docker/running-the-stack#initialization" >}}).

If you encounter the following error while trying to long into the Console:

```
The client is not authorized to request a token using this method
```

make sure you used the same `client-secret` in your {{% tts %}} configuration (`ttn-lw-stack-docker.yml` file) and for authorizing the Console client in [Running {{% tts %}}]({{< relref "running-the-stack" >}}).

## Could not initialize Server

The cause of this error lies in misconfiguration of {{% tts %}} server components. A few examples related to this error are listed below.

When an invalid tenant admin key is configured, the initialization of the Identity Server will fail with the following output:

```
stack_1      | INFO Setting up Identity Server
stack_1      | error:cmd/internal/shared:initialize_identity_server (could not initialize Identity Server)
stack_1      |     correlation_id=c98b9172c25c45269ac674aad04710f1
stack_1      | --- error:pkg/identityserver:tenant_admin_key (invalid tenant admin key)
stack_1      |     correlation_id=c3ad9a81631c40f88ec35eb1b3234f54
stack_1      | --- encoding/hex: invalid byte: U+00E2 '?'
```

When a wrong database URI is configured, the initialization of the Application Server will fail:

```
stack_1      | INFO	Setting up Application Server
stack_1      | error:cmd/internal/shared:initialize_application_server (could not initialize Application Server)
stack_1      |     correlation_id=4804d40c2b9143209f95925d47c6881e
stack_1      | --- error:pkg/errors:net_operation (dial tcp 127.0.0.1:5432: connect: connection refused)
stack_1      |     message=dial tcp 127.0.0.1:5432: connect: connection refused
```

When the Network Server is configured to use a DevAddr block that is not included in the license, its initialization will fail:

```
stack_1      | INFO Setting up Network Server
stack_1      | error:cmd/internal/shared:initialize_network_server (could not initialize Network Server)
stack_1      |     correlation_id=47a8f405f56f45918d1277aeee8faaa7
stack_1      | --- error:pkg/license:dev_addr_prefix_not_licensed (DevAddr prefix 00000000/7 is not included in this license)
stack_1      |     prefix=00000000/7
stack_1      |     licensed=[XXXXXXXX/24] (redacted)
```

## Database error

This error has been observed when the Identity Server hasn't been initialized during {{% tts %}} installation. {{% tts %}} components are inherently stateless and depend on the underlying Postgres and Redis databases to store the data, so before running {{% tts %}}, make sure that the Identity Server database is initialized as explained in the [Initialization section]({{< ref "/the-things-stack/host/docker/running-the-stack#initialization" >}}).

## Error while parsing {{% tts %}} configuration file

One of the issues that can cause parsing errors is using inappropriate indentation in {{% tts %}} configuration file, so you might end up seeing something like:

```
stack_1      | While parsing config: yaml: line 34: did not find expected key
```

In most cases, the error will point to an exact line of your configuration file where the issue occured. To fix this, apply the correct indentation. Use `ttn-lw-stack config --yml` to see the default {{% tts %}} configuration with correct indentation in your terminal.

## Missing tenant ID

If you are facing the `missing_tenant_id` error, that means you are trying to access the Console in a multi-tenant {{% tts %}} environment on an address that doesn't contain any tenant ID, e.g. `https://thethings.example.com`. To access the Console of a particular tenant in a multi-tenant environment, you have to specify a tenant ID as a URL subdomain, e.g. `https://<tenant-id>.thethings.network.com`.

## Grafana container fails to start due to permissions issues

If you are running {{% tts %}} Docker deployment on a Linux machine, you might encounter the following error: 

```
failed to connect to database: failed to create SQLite database file "/var/lib/grafana/db/grafana.db": open /var/lib/grafana/db/grafana.db: permission denied
```

This issue usually arises from the following fact - on Linux, Docker creates folders as `root` and containers are expected to run as `root`, while Grafana runs as a non-`root` user. To fix this, you need to manually update rights for Grafana using the following command:

```bash
sudo chown -R 472:0 .env/data/grafana
```

## Network Operations Center cannot be initialized

If you have registered user with User ID `admin` during installation, you will most likely encounter this error when trying to run {{% tts %}}:

```
stack_1     | INFO	Setting up Network Operations Center
stack_1     | error:cmd/internal/shared:initialize_network_operations_center (could not initialize Network Operations Center)
```

Accessing the Network Operations Center with the `admin` user is not allowed, so make sure to create user with admin rights but with User ID other than `admin`.

## Grafana cannot connect to {{% tts %}} following a restart

In a containerized environment, the Grafana container connects to the {{% tts %}} using the container DNS address. Following a {{% tts %}} container restart, the Grafana container will maintain the address of the old container for the duration of the Docker DNS TTL (default 10 minutes). In order to speed up the process, it is possible to restart the Grafana container using `docker compose restart grafana`.

In order to avoid having to manually restart the Grafana container, ensure that your Grafana container has the correct `depends_on` dependencies set:

```yaml
    depends_on:
      - postgres
      - stack
``````

Older versions of {{% tts %}} may not have the above dependencies set, so you may consider adding them manually.

## Operation timed out

Generally, an operation will fail with this error if it hasn't been completed within the expected timeframe. For example, if there are firewall restrictions on port 443, logging into {{% tts %}} will probably fail with this error since token can't be returned to the Console. Besides this example, similar issues with establishing connection with {{% tts %}} or communication between its components can occur if there are issues with user's internet connection, or if there are restrictions on {{% tts %}} infrastructure, web browser or firewall level.

To avoid this happening, users need to ensure that their internet connection is stable and with minimal latency, and that there are no firewall restrictions on the system from which they are accessing {{% tts %}}. Users can also try using a different browser or computer to try isolating the issue within a specific system. Finally, clear the web browser cache and retry the operation.

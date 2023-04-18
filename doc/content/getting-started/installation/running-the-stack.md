---
title: "Running The Things Stack"
description: ""
weight: 3
---

Now that all configuration is done, you are ready to initialize {{% tts %}} and start it!

Begin by opening a terminal prompt in the same directory as your `docker-compose.yml` file.

## Initialization

The first time {{% tts %}} is started, it requires some initialization. Start by pulling the Docker images:

```bash
docker-compose pull
```

Next, you need to initialize the database of the Identity Server:

```bash
docker-compose run --rm stack is-db init
```

If you receive an error running {{% tts %}}, make sure a {{% tts %}} container isn't already running. Use `docker ps` to see running containers.

For the Storage Integration available in {{% tts %}} Enterprise, the database of the Application Server needs to be initialized as well:

```bash
docker-compose run --rm stack storage-db init
```

{{% tts %}} Enterprise requires a tenant to be present, even if multi-tenancy is not included in the license. You create a tenant with:

```bash
docker-compose run --rm stack is-db create-tenant
```

This will take the `tenancy.default-id` Tenant ID from the [configuration]({{< relref "configuration" >}}) in `ttn-lw-stack-docker.yml`. To specify another Tenant ID, use the `--id` parameter.

Next, an initial `admin` user has to be created. Make sure to give it a good password.

```bash
docker-compose run --rm stack is-db create-admin-user \
  --id admin \
  --email your@email.com
```

Note that for multi-tenant deployments you can create admin users for each tenant using the `--tenant-id` flag.

Then the command-line interface needs to be registered as an OAuth client:

```bash
docker-compose run --rm stack is-db create-oauth-client \
  --id cli \
  --name "Command Line Interface" \
  --owner admin \
  --no-secret \
  --redirect-uri "local-callback" \
  --redirect-uri "code"
```

Afterwards, the same needs to be done for the Console. If running a multi-tenant environment, use option `--tenant-id NULL` to register the OAuth client for all tenants. For `--secret`, make sure to enter the same value as you set for `console.oauth.client-secret` in the `ttn-lw-stack-docker.yml` file in the [Configuration]({{< relref "configuration" >}}) step. 

```bash
CONSOLE_SECRET="your-console-secret"
SERVER_ADDRESS="your-server-address"
docker-compose run --rm stack is-db create-oauth-client \
  --id console \
  --name "Console" \
  --owner admin \
  --secret "${CONSOLE_SECRET}" \
  --redirect-uri "${SERVER_ADDRESS}/console/oauth/callback" \
  --redirect-uri "/console/oauth/callback" \
  --logout-redirect-uri "${SERVER_ADDRESS}/console" \
  --logout-redirect-uri "/console"
```

## Running {{% tts %}}

Start {{% tts %}} with:

```bash
docker-compose up
```

This starts the stack, so you will see the stack logs being printed to your terminal. You can also start the stack in detached mode by adding `-d` to the command above. In that case you can get logs with [`docker-compose logs`](https://docs.docker.com/compose/reference/logs/).

With {{% tts %}} up and running, follow [Console]({{< ref "getting-started/console" >}}) or [Command-line Interface]({{< ref "getting-started/cli" >}}) to proceed with the login, then continue with connecting gateways, creating devices and working with streaming data.

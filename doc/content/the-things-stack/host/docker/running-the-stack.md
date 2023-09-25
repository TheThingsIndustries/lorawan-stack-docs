---
title: "Running The Things Stack"
description: ""
weight: 3
aliases: [/getting-started/installation/running-the-stack]
---

Now that all configuration is done, you are ready to initialize {{% tts %}} and start it!

Begin by opening a terminal prompt in the same directory as your `docker-compose.yml` file.

## Initialization

The first time {{% tts %}} is started, it requires some initialization. Start by pulling the Docker images:

```bash
docker compose pull
```

Next, you need to initialize the database of the Identity Server:

```bash
docker compose run --rm stack is-db migrate
```

If you receive a permissions error, ensure you have correctly [configured permissions for Docker Engine](https://docs.docker.com/engine/install/linux-postinstall/).

If you receive an error running {{% tts %}}, make sure a {{% tts %}} container isn't already running. Use `docker ps` to see running containers.

For the Storage Integration available in {{% tts %}} Enterprise, the database of the Application Server needs to be initialized as well:

```bash
docker compose run --rm stack storage-db init
```

Network Operations Center, available in {{% tts %}} Enterprise, needs to be initialized with:

```bash
docker compose run --rm stack noc-db init
```

{{% tts %}} Enterprise requires a tenant to be present, even if multi-tenancy is not included in the license. You create a tenant with:

```bash
docker compose run --rm stack is-db create-tenant
```

This will take the `tenancy.default-id` Tenant ID from the [configuration]({{< relref "configuration" >}}) in `ttn-lw-stack-docker.yml`. To specify another Tenant ID, use the `--id` parameter.

Next, an initial `admin` user has to be created. Make sure to give it a good password.

```bash
docker compose run --rm stack is-db create-admin-user \
  --id admin \
  --email your@email.com
```

Note that for multi-tenant deployments you can create admin users for each tenant using the `--tenant-id` flag.

Then the command-line interface needs to be registered as an OAuth client:

```bash
docker compose run --rm stack is-db create-oauth-client \
  --id cli \
  --name "Command Line Interface" \
  --owner admin \
  --no-secret \
  --redirect-uri "local-callback" \
  --redirect-uri "code"
```

OAuth clients for the Console and Network Operations Center also need to be created in Identity Server so they can use the login functionality.

Create an OAuth client for the console (replace with your `SERVER_ADDRESS` and Console `CLIENT_SECRET`):

```bash
SERVER_ADDRESS=https://thethings.example.com
ID=console
NAME=Console
CLIENT_SECRET=console
REDIRECT_URI=${SERVER_ADDRESS}/console/oauth/callback
REDIRECT_PATH=/console/oauth/callback
LOGOUT_REDIRECT_URI=${SERVER_ADDRESS}/console
LOGOUT_REDIRECT_PATH=/console
docker compose run --rm stack is-db create-oauth-client \
  --id ${ID} \
  --name "${NAME}" \
  --owner admin \
  --secret "${CLIENT_SECRET}" \
  --redirect-uri "${REDIRECT_URI}" \
  --redirect-uri "${REDIRECT_PATH}" \
  --logout-redirect-uri "${LOGOUT_REDIRECT_URI}" \
  --logout-redirect-uri "${LOGOUT_REDIRECT_PATH}"
```

And then for the NOC (replace with your `SERVER_ADDRESS` and NOC `CLIENT_SECRET`):

```bash
SERVER_ADDRESS=https://thethings.example.com
ID=noc
NAME="Network Operations Center"
CLIENT_SECRET=noc
REDIRECT_URI=${SERVER_ADDRESS}/noc/oauth/callback
REDIRECT_PATH=/noc/oauth/callback
LOGOUT_REDIRECT_URI=${SERVER_ADDRESS}/noc
LOGOUT_REDIRECT_PATH=/noc
docker compose run --rm stack is-db create-oauth-client \
  --id ${ID} \
  --name "${NAME}" \
  --owner admin \
  --secret "${CLIENT_SECRET}" \
  --redirect-uri "${REDIRECT_URI}" \
  --redirect-uri "${REDIRECT_PATH}" \
  --logout-redirect-uri "${LOGOUT_REDIRECT_URI}" \
  --logout-redirect-uri "${LOGOUT_REDIRECT_PATH}"
```

{{< note >}} In a multi-tenant environment, pass `--tenant-id NULL` to register the OAuth client for all tenants, but make sure to remove the `--owner` flag as it is only for single tenant environments. {{< /note >}}

The variables for the Console and NOC OAuth clients are repeated here:

<details><summary>OAuth client variables</summary>

Set the variables as follows:

Key | Console | Network Operations Center
--- | --- | ---
`ID` | `console` | `noc`
`NAME` | `Console` | `Network Operations Center`
`CLIENT_SECRET` | Config: `console.oauth.client-secret` | Config: `noc.oauth.client-secret`
`REDIRECT_URI` | `${SERVER_ADDRESS}/console/oauth/callback` | `${SERVER_ADDRESS}/noc/oauth/callback`
`REDIRECT_PATH` | `/console/oauth/callback` | `/noc/oauth/callback`
`LOGOUT_REDIRECT_URI` | `${SERVER_ADDRESS}/console` | `${SERVER_ADDRESS}/noc`
`LOGOUT_REDIRECT_PATH` | `/console` | `/noc`

</details>

## Running {{% tts %}}

Start {{% tts %}} with:

```bash
docker compose up
```

This starts the stack, so you will see the stack logs being printed to your terminal. You can also start the stack in detached mode by adding `-d` to the command above. In that case you can get logs with [`docker compose logs`](https://docs.docker.com/compose/reference/logs/).

With {{% tts %}} up and running, follow [Console]({{< ref "/the-things-stack/interact/console" >}}) or [Command-line Interface]({{< ref "the-things-stack/interact/cli" >}}) to proceed with the login, then continue with connecting gateways, creating devices and working with streaming data.

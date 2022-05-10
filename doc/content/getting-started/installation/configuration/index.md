---
title: "Configuration"
description: ""
weight: 1
---

This guide shows an example of configuring {{% tts %}} using configuration files, with an example domain `thethings.example.com` and TLS certificates from Let's Encrypt.

If configuring {{% tts %}} as `localhost` on a machine with no public IP or DNS address, see the [`localhost`](#running-the-things-stack-as-localhost) section.

In addition to the written instructions below, video instructions for installing {{% tts %}} are available on [The Things Network youtube channel](https://www.youtube.com/c/TheThingsNetworkCommunity).

<details><summary>Show video</summary>
{{< youtube "XgPSU4UkDuE" >}}
</details>

## Configuration Files

{{% tts %}} requires two configuration files when installing with Docker: `docker-compose.yml` and `ttn-lw-stack-docker.yml`. 

Example files for Enterprise and Open source are provided [below](#example-configuration-files).

### `docker-compose.yml`

`docker-compose.yml` defines the Docker services of {{% tts %}} and its dependencies, and is used to configure Docker.

### `ttn-lw-stack-docker.yml`

`ttn-lw-stack-docker.yml` contains the configuration specific to {{% tts %}} deployment and is used to configure {{% tts %}}. When {{% tts %}} starts, it searches through `ttn-lw-stack-docker.yml` for component server addresses, a TLS certificate source, client authentication credentials, and other configuration parameters.

The configuration options in `ttn-lw-stack-docker` can also be specified using command-line flags or environment variables. All configuration options have a corresponding environment variable and command-line flag. See the [Configuration Reference]({{< ref "reference/configuration" >}}) for more information about the configuration options.

This guide assumes the following directory hierarchy:

```bash
docker-compose.yml          # defines Docker services for running {{% tts %}}
config/
└── stack/
    └── ttn-lw-stack-docker.yml    # configuration file for {{% tts %}}
```

## Example Configuration Files

{{< tabs/container "Enterprise" "Open Source" >}}
{{< tabs/tab "Enterprise" >}}

Download the example `docker-compose.yml` for {{% tts %}} Enterprise <a href="docker-compose-enterprise.yml" download="docker-compose.yml">here</a>.

Download the example `ttn-lw-stack-docker.yml` for {{% tts %}} Enterprise <a href="ttn-lw-stack-docker-enterprise.yml" download="ttn-lw-stack-docker.yml">here</a>.

{{< /tabs/tab >}}
{{< tabs/tab "Open Source" >}}

Download the example `docker-compose.yml` for {{% tts %}} Open Source <a href="docker-compose-open-source.yml" download="docker-compose.yml">here</a>.

Download the example `ttn-lw-stack-docker.yml` for {{% tts %}} Open Source <a href="ttn-lw-stack-docker-open-source.yml" download="ttn-lw-stack-docker.yml">here</a>.

{{< /tabs/tab >}}
{{< /tabs/container >}}

These example configuration files contain all of the configuration settings you need to run {{% tts %}} for development. Be sure to update `ttn-lw-stack-docker.yml` with your server address, generate keys in `http.cookie` and set `console.oauth.client-secret`.

For an extended explanation of the configuration settings, keep reading.

Settings in `docker-compose.yml` and `ttn-lw-stack-docker.yml` files are explained in detail in [Understanding Docker Configuration](#understanding-docker-configuration) and [Understanding The Things Stack Configuration](#understanding-the-things-stack-configuration) sections. Further, we provide tips for running {{% tts %}} in production.

## Understanding Docker Configuration

In this section, configuring Docker is explained with an example `docker-compose.yml` file.

Docker runs an instance of {{% tts %}}, as well as an SQL database and a Redis database. {{% tts %}} components are inherently stateless and depend on the underlying SQL and Redis databases to store data.

{{< note >}} For high deployment availability, it is recommended to set up redundancy in above mentioned databases. {{</ note >}}

In `docker-compose.yml` file, Docker is configured to run three services:

- PostgreSQL database
- Redis
- {{% tts %}}
 
### PostgreSQL Database

The configuration in this guide uses a single instance of [PostgreSQL](https://www.postgresql.org/). Note that the `volumes` need to be set up correctly so that the database is persisted on your server's disk.

In production, replace the `image` with a working, stable tag from [Docker Hub - Postgres](https://hub.docker.com/_/postgres).

It is also possible (and even preferred) to use a managed SQL database. In this case, you will need to configure the managed database URI with the `is.database-uri` [configuration option]({{< ref "reference/configuration/identity-server#database-options" >}}) or `TTN_LW_IS_DATABASE_URI` environment variable.

The simplest configuration for PostgreSQL looks like this (excerpted from the example `docker-compose.yml`):

{{< highlight yaml "linenos=table,linenostart=5" >}}
{{< readfile path="/content/getting-started/installation/configuration/docker-compose-enterprise.yml" from=4 to=14 >}}
{{< /highlight >}}

### Redis

The configuration in this guide uses a single instance of [Redis](https://redis.io/). Again, note that the `volumes` need to be set up correctly so that the datastore is persisted on your server's disk. 

{{< note >}} {{% tts %}} requires Redis version 6.2 or newer. {{</ note >}}

In production, replace the `image` with a working, stable tag from [Docker Hub - Redis](https://hub.docker.com/_/redis?tab=tags).

It is also possible (and even preferred) to use a managed Redis database. In this case, you will need to configure the managed database address with the `redis-address` [configuration option]({{< ref "reference/configuration/the-things-stack#redis-options" >}}) or `TTN_LW_REDIS_ADDRESS` environment variable.

The simplest configuration for Redis looks like this (excerpted from the example `docker-compose.yml`):

{{< highlight yaml "linenos=table,linenostart=28" >}}
{{< readfile path="/content/getting-started/installation/configuration/docker-compose-enterprise.yml" from=28 to=37 >}}
{{< /highlight >}}

### {{% tts %}}

#### Entrypoint and dependencies

Docker Compose uses `ttn-lw-stack -c /config/ttn-lw-stack-docker.yml` as the container entry point, so that `ttn-lw-stack-docker.yml` configuration file is always loaded (more on the config file below).

In production, replace the `image` with a working, stable tag from [Docker Hub - The Things Industries](https://hub.docker.com/r/thethingsindustries/lorawan-stack/tags) for Enterprise, or [Docker Hub - The Things Network](https://hub.docker.com/r/thethingsnetwork/lorawan-stack/tags) for Open Source. 

The default command is `start`, which starts {{% tts %}}.

{{< highlight yaml "linenos=table,linenostart=39" >}}
{{< readfile path="/content/getting-started/installation/configuration/docker-compose-enterprise.yml" from=39 to=43 >}}
{{< /highlight >}}

The `depends_on` field tells Docker Compose that {{% tts %}} depends on PostgreSQL and Redis. With this, Docker Compose will wait for PostgreSQL and Redis to come online before starting {{% tts %}}.

{{< highlight yaml "linenos=table,linenostart=45" >}}
{{< readfile path="/content/getting-started/installation/configuration/docker-compose-enterprise.yml" from=45 to=50 >}}
{{< /highlight >}}

{{< note >}} If using a managed SQL or Redis database, these can be removed from `depends_on` and the services do not need to be started in Docker. {{</ note >}}

#### Volumes

Under the `volumes` section, volumes for the files that need to be persisted on the disk are defined. There are stored blob files (such as profile pictures) and certificate files retrieved with ACME (if required). Also, local `./config/stack/` directory is mounted on the container under `/config`, so that {{% tts %}} can find the configuration file at `/config/ttn-lw-stack-docker.yml`.

{{< highlight yaml "linenos=table,linenostart=51" >}}
{{< readfile path="/content/getting-started/installation/configuration/docker-compose-enterprise.yml" from=51 to=55 >}}
{{< /highlight >}}

{{< note >}} If your `ttn-lw-stack-docker.yml` is in a directory other than `./config/stack`, you will need to change this volume accordingly. {{</ note >}}

#### Environment and Ports

The databases used by {{% tts %}} are configured in the `environment` section. In this guide, these are set to the PostgreSQL and Redis instances that are mentioned above.

{{< note >}} If using managed databases, the `environment` ports need to be changed to the ports of the managed databases. {{</ note >}}

The `ports` section exposes {{% tts %}}'s ports outside the Docker container. Port `80` and `443` are mapped to the internal HTTP and HTTPS ports. The other ports have a direct mapping. If you don't need support for gateways and applications that don't use TLS, you can remove ports starting with `188`:

{{< highlight yaml "linenos=table,linenostart=56" >}}
{{< readfile path="/content/getting-started/installation/configuration/docker-compose-enterprise.yml" from=56 to=83 >}}
{{< /highlight >}}

## Understanding {{% tts %}} Configuration

Configuration options for running {{% tts %}} are specified in the `ttn-lw-stack-docker.yml` file. This section points out the required configuration options.

The example `ttn-lw-stack-docker.yml` file for {{% tts %}} Enterprise shown below contains details which help you follow this section. The example `ttn-lw-stack-docker.yml` file is also available for download in the [Example Configuration Files]({{< ref "/getting-started/installation/configuration#example-configuration-files" >}}) section.

<details><summary>Example ttn-lw-stack-docker.yml file</summary>{{< highlight yaml "linenos=table" >}}
{{< readfile path="/content/getting-started/installation/configuration/ttn-lw-stack-docker-enterprise.yml" >}}
{{< /highlight >}}</details>

### License

{{< distributions "Enterprise" >}} {{% tts %}} Enterprise requires a license, which can be purchased at the [products page](https://thethingsindustries.com/technology/pricing). This is specified in the `license` field, and can be either a `key` string, or a `file`path. See the [License configuration reference]({{< ref "/reference/configuration/the-things-stack#license" >}}) for more information.

### TLS

This example shows the configuration for using TLS with Let's Encrypt. Since {{% tts %}} is being deployed on
`thethings.example.com` in this guide, it is configured to only request certificates for that
host, and also to use it as the default host.

If using Let's Encrypt, certificates will automatically be requested the first time you access {{% tts %}}. You will notice that the page takes some time to load while certificates are obtained in the background. 

See the [TLS Options configuration reference]({{< ref "/reference/configuration/the-things-stack#tls-options" >}}) for more information.

Make sure that you use the correct `tls` configuration depending on whether you are using Let's Encrypt or your own certificate files.

If you are using your own certificate files, make sure to uncomment the lines that define `source` type, `root-ca`, `certificate` and `key`. The paths assigned to these do not need to be altered, because they point to the location of these files inside the Docker container, and not on your machine.

If you are using Let's Encrypt in a multi-tenant {{% tts %}} environment, all tenant addresses have to be specified in the `ttn-lw-stack-docker.yml` file using `tls.acme.hosts` configuration option. For example, for {{% tts %}} deployment with two tenants, TLS configuration would look like this:

```yml
tls:
  source: 'acme'
  acme:
    dir: '/var/lib/acme'
    email: 'you@thethings.example.com'
    hosts: ['<tenant1>.thethings.example.com', '<tenant2>.thethings.example.com']
    default-host: 'thethings.example.com'
```

### HTTP

In the `http` section, HTTP server keys for encrypting and verifying cookies are configured, as well
as passwords for endpoints that you may want to keep for the internal use.

### Email

{{% tts %}} sends emails to users, so the `email` section of the configuration defines how these are sent.
You can use Sendgrid or an SMTP server. If you skip setting up an email provider,
{{% tts %}} will print emails to the stack logs.

### Component URLs

Finally, the `console` section configures the URLs for the Web UI and the secret used
by the console client. These tell {{% tts %}} where all its components are accessible.

The `client-secret` will be needed later when authorizing the Console. Be sure to set and remember it!

{{< warning >}} Failure to correctly configure component URLs is a common problem that will prevent the stack from starting. Be sure to replace all instances of `thethings.example.com` with your domain name! {{</ warning >}}

### Multi-tenancy

{{< distributions "Enterprise" >}} If running a multi-tenant environment, we need to configure the default tenant ID, and the base domain from which tenant IDs are inferred. See the [`tenancy` configuration reference]({{< ref "/reference/configuration/the-things-stack#multi-tenancy" >}}).

## Running The Things Stack as `localhost`

Follow this section if you are configuring and running {{% tts %}} on a local machine with no public IP or DNS address.

In addition to the written instructions below, video instructions for installing on `localhost` are available on [The Things Network youtube channel](https://www.youtube.com/c/TheThingsNetworkCommunity).

<details><summary>Show video</summary>
{{< youtube "Owm5IUtQTx8" >}}
</details>

`localhost` has a different meaning on your machine than inside the Docker container where {{% tts %}} runs, which can cause problems if you use `localhost` in your configuration.

`localhost` addresses on your machine will resolve to your machine, while `localhost` inside the Docker container will resolve inside the Docker container. In `docker-compose.yml`, we forward requests on ports 80 and 443 to ports 1885 and 8885 inside the container, so visiting `localhost` (which is really `localhost:80`) on your machine actually takes you to `localhost:1885` within the container.

If you configure your `is.oauth.ui.canonical-url` as `localhost`, this causes **Token Exchange Refused** errors when you try to log in to {{% tts %}} Console, because an authorization request generated from within the container will not be redirected to port 1885 or 8885, where {{% tts %}} is listening.

### Solution 1: Use the IP address of your computer on your local network

The best solution is to configure and use a static IP address for your machine on your local network so that redirects from your machine, from the Docker container, or from anywhere inside your local network, all resolve at the same place, on your machine. 

Follow instructions [here](https://uk.pcmag.com/news/124250/how-to-set-up-a-static-ip-address) for configuring a static IP address on your computer. Use that IP address as your server address, i.e replace `thethings.example.com` with that IP address. You may also generate a self-signed certificate for that IP address by following instructions in the [Certificates]({{< relref "certificates" >}}) section.

{{< note >}}
ACME will not work on `localhost`, so you must either generate custom certificates for your IP address as shown in the [Custom Certificate Authority]({{< relref "certificates#custom-certificate-authority" >}}) instructions, or use `http` (unsecure) in your configuration.
{{</ note >}}

This will still allow you to see {{% tts %}} Console by entering `localhost` or your local IP address in your browser. It will also allow you to connect to {{% tts %}} from any machine inside your local network.

You will also need to [configure the CLI]({{< ref "getting-started/cli/installing-cli#generate-configuration-file" >}}), to use the static IP of your machine as the address of {{% tts %}}. 

### Solution 2: Specify the internal ports that {{% tts %}} listens on in your configuration files

By default, {{% tts %}} listens on ports 1885 and 8885 inside Docker. To make `localhost` work both on your local machine and within the Docker container, append the port to `localhost` and make sure port forwarding is enabled in your `docker-compose.yml` for that port.

You must also remove ports 80 and 443 from your {{% tts %}} Docker configuration.

For example, 

```yaml
is:
  oauth:
    ui:
      canonical-url: 'https://thethings.example.com/oauth'
      is:
        base-url: 'https://thethings.example.com/api/v3'
```

becomes

```yaml
is:
  oauth:
    ui:
      canonical-url: 'https://localhost:8885/oauth'
      is:
        base-url: 'https://localhost:8885/api/v3'
``` 

and in `docker-compose.yml`, add the following port forwarding configuration (if it does not already exist), while removing ports 80 and 443:

```yaml
services:
  stack:
    ports:
      stack:
        - "1885:1885"
        - "8885:8885"
        # - "80:80" # Do not forward port 80
        # - "443:443" # Do not forward port 443
```

This will result in visits from both outside and inside the Docker container being received at the correct port by {{% tts %}}.

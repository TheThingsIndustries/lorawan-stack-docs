---
title: "Configuration"
description: ""
weight: 2
---

{{% tts %}} can be configured using command-line flags, environment variables, or configuration files. See the [Configuration Reference]({{< ref "reference/configuration" >}}) for more information about the configuration options.

This guide shows an example of configuring {{% tts %}} using a configuration file, with an example domain `thethings.example.com` and TLS certificates from Let's Encrypt.

{{< note >}} If configuring {{% tts %}} as `localhost` on a machine with no public IP or DNS address, see the [Localhost](#localhost) section. {{</ note >}}

The `docker-compose.yml` file defines the Docker services of {{% tts %}} and its dependencies, and is used to configure Docker.

The configuration file `ttn-lw-stack-docker.yml` contains the configuration specific to {{% tts %}} deployment and is used to configure {{% tts %}}. When {{% tts %}} starts, it searches through `ttn-lw-stack-docker.yml` for a license key, hostname and other configuration parameters.

{{< note >}} The license key is not needed for Open Source. {{</ note >}}

This guide assumes the following directory hierarchy:

```bash
docker-compose.yml          # defines Docker services for running {{% tts %}}
config/
└── stack/
    └── ttn-lw-stack-docker.yml    # configuration file for {{% tts %}}
```

### Example Configuration Files

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

{{< note >}} These example configuration files contain all of the configuration settings you need to run {{% tts %}} for development - just update the files with your server address. {{</ note >}}

Settings in `docker-compose.yml` and `ttn-lw-stack-docker.yml` files are explained in detail in [Docker Configuration](#docker-configuration) and [The Things Stack Configuration](#the-things-stack-configuration) sections. Further, we provide tips for running {{% tts %}} in production.

## Docker Configuration

In this section, configuring Docker is explained with an example `docker-compose.yml` file.

Docker runs an instance of {{% tts %}}, as well as an SQL database and a Redis database, which {{% tts %}} depends on to store data.

In `docker-compose.yml` file, Docker is configured to run three services:

- An SQL database (CockroachDB and PostgreSQL are supported)
- Redis
- {{% tts %}}
 
### SQL Database

To configure an SQL database, a single instance of [CockroachDB](https://www.cockroachlabs.com/) is used in this guide. Note that the `volumes` need to be set up correctly so that the database is persisted on your server's disk.

The simplest configuration for CockroachDB looks like this (excerpted from the example `docker-compose.yml`):

{{< highlight yaml "linenos=table,linenostart=5" >}}
{{< readfile path="/content/getting-started/installation/configuration/docker-compose-enterprise.yml" from=5 to=14 >}}
{{< /highlight >}}

{{< note >}} It is also possible (and even preferred) to use a managed SQL database. In this case, you will need to configure the managed database URI with `TTN_LW_IS_DATABASE_URI` environment variable (see [Environment and Ports]({{< ref "/getting-started/installation/configuration#environment-and-ports" >}})). {{</ note >}}

### Redis

The configuration in this guide uses a single instance of [Redis](https://redis.io/). Again, note that the `volumes` need to be set up correctly so that the datastore is persisted on your server's disk. 

{{< note >}} {{% tts %}} requires Redis version 5.0 or newer. {{</ note >}}

The simplest configuration for Redis looks like this (excerpted from the example `docker-compose.yml`):

{{< highlight yaml "linenos=table,linenostart=28" >}}
{{< readfile path="/content/getting-started/installation/configuration/docker-compose-enterprise.yml" from=28 to=37 >}}
{{< /highlight >}}

{{< note >}} It is also possible (and even preferred) to use a managed Redis database. In this case, you will need to configure the managed database address with `TTN_LW_REDIS_ADDRESS` environment variable (see [Environment and Ports]({{< ref "/getting-started/installation/configuration#environment-and-ports" >}})). {{</ note >}}

### {{% tts %}}

#### Entrypoint and dependencies

Docker Compose uses `ttn-lw-stack -c /config/ttn-lw-stack-docker.yml` as the container entry point, so that `ttn-lw-stack-docker.yml` configuration file is always loaded (more on the config file below). 

The default command is `start`, which starts {{% tts %}}.

The `depends_on` field tells Docker Compose that {{% tts %}} depends on CockroachDB and Redis. With this, Docker Compose will wait for CockroachDB and Redis to come online before starting {{% tts %}}.

{{< note >}} If using a managed SQL or Redis database, these can be removed from `depends_on` and the services do not need to be started in Docker. {{</ note >}}

#### Volumes

Under the `volumes` section, volumes for the files that need to be persisted on the disk are defined. There are stored blob files (such as profile pictures) and certificate files retrieved with ACME (if required). Also, local `./config/stack/` directory is mounted on the container under `/config`, so that {{% tts %}} can find the configuration file at `/config/ttn-lw-stack-docker.yml`.

{{< note >}} If your `ttn-lw-stack-docker.yml` is in a directory other than `./config/stack`, you will need to change this volume accordingly. {{</ note >}}

#### Environment and Ports

The databases used by {{% tts %}} are configured in the `environment` section. In this guide, these are set to the CockroachDB and Redis instances that are mentioned above.

{{< note >}} If using managed databases, the `environment` ports need to be changed to the ports of the managed databases. {{</ note >}}

The `ports` section exposes {{% tts %}}'s ports to the world. Port `80` and `443` are mapped to the internal HTTP and HTTPS ports. The other ports have a direct mapping. If you don't need support for gateways and applications that don't use TLS, you can remove ports starting with `188`.

Here is an example `stack` configuration from the Enterprise version of `docker-compose.yml`:

{{< highlight yaml "linenos=table,linenostart=39" >}}
{{< readfile path="/content/getting-started/installation/configuration/docker-compose-enterprise.yml" from=39 to=83 >}}
{{< /highlight >}}

## The Things Stack Configuration

Configuration options for running {{% tts %}} are specified in the `ttn-lw-stack-docker.yml` file. This section points out the required configuration options.

The example `ttn-lw-stack-docker.yml` file for {{% tts %}} Enterprise shown below contains details which help you follow this section.

<details><summary>Example ttn-lw-stack-docker.yml file</summary>{{< highlight yaml "linenos=table" >}}
{{< readfile path="/content/getting-started/installation/configuration/ttn-lw-stack-docker-enterprise.yml" >}}
{{< /highlight >}}</details>

{{< note >}} The example `ttn-lw-stack-docker.yml` file is available for download in the [Example Configuration Files]({{< ref "/getting-started/installation/configuration#example-configuration-files" >}}) section. {{</ note >}}

### License {{< distributions-inline "Enterprise" >}} {#license}

{{% tts %}} Enterprise requires a license, which can be purchased at the [products page](https://thethingsindustries.com/technology/pricing). This is specified in the `license` field, and can be either a `key` string, or a `file`path. See the [License configuration reference]({{< ref "/reference/configuration/the-things-stack#license" >}}) for more information.

### TLS

This example shows the configuration for using TLS with Let's Encrypt. Since {{% tts %}} is being deployed on
`thethings.example.com` in this guide, it is configured to only request certificates for that
host, and also to use it as the default host. See the [TLS Options configuration reference]({{< ref "/reference/configuration/the-things-stack#tls-options" >}}) for more information.

{{< note >}} Make sure that you use the correct `tls` configuration depending on whether you are using Let's Encrypt or your own certificate files. {{</ note >}}

{{< note >}} If you are using your own certificate files, make sure to uncomment the lines that define `source` type, `root-ca`, `certificate` and `key`. The paths assigned to these do not need to be altered, because they point to the location of these files inside the Docker container, and not on your machine. {{</ note >}}

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

{{< warning >}} Failure to correctly configure component URLs is a common problem that will prevent the stack from starting. Be sure to replace all instances of `thethings.example.com` with your domain name! {{</ warning >}}

{{< note >}} Note that the `client-secret` will be needed later when authorizing the Console. {{</ note >}}

### Multi-tenancy {{< distributions-inline "Enterprise" >}} {#multi-tenancy}

If running a multi-tenant environment, we need to configure the default tenant ID, and the base domain from which tenant IDs are inferred. See the [`tenancy` configuration reference]({{< ref "/reference/configuration/the-things-stack#multi-tenancy" >}}).

## Localhost

Follow this section if you are configuring and running {{% tts %}} on a local machine with no public IP or DNS address.

`localhost` has a different meaning on your machine than inside the Docker container where {{% tts %}} runs, which can cause problems if you use `localhost` in your configuration.

`localhost` addresses on your machine will resolve to your machine, while `localhost` inside the Docker container will resolve inside the Docker container. In `docker-compose.yml`, we forward requests on ports 80 and 443 to ports 1885 and 8885 inside the container, so visiting `localhost` (which is really `localhost:80`) on your machine actually takes you to `localhost:1885` within the container.

If you configure your `is.oauth.ui.canonical-url` as `localhost`, this causes **Token Exchange Refused** errors when you try to log in to {{% tts %}} Console, because an authorization request generated from within the container will not be redirected to port 1885 or 8885, where {{% tts %}} is listening.

### Solution 1: Use the IP address of your computer on your local network

The best solution is to configure and use a static IP address for your machine on your local network so that redirects from your machine, from the Docker container, or from anywhere inside your local network, all resolve at the same place, on your machine. 

Follow instructions [here](https://uk.pcmag.com/news/124250/how-to-set-up-a-static-ip-address) for configuring a static IP address on your computer. Use that IP address as your server address, i.e replace `thethings.example.com` with that IP address. You may also generate a self-signed certificate for that IP address by following instructions in the [Certificates]({{< relref "certificates" >}}) section.

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

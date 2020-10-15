---
title: "Configuration"
description: ""
weight: 2
---

{{% tts %}} can be configured using command-line flags, environment variables, or configuration files. See the [Configuration Reference]({{< ref "reference/configuration" >}}) for more information about the configuration options.

In this guide, we will configure {{% tts %}} using a configuration file, with an example domain `thethings.example.com` and TLS certificates from Let's Encrypt.

>**Note:** If configuring {{% tts %}} as `localhost` on a machine with no public IP or DNS address, see the [special considerations](#localhost) below.

To configure {{% tts %}}, we will use the configuration file `ttn-lw-stack-docker.yml`, which contains configuration specific to our {{% tts %}} deployment. When {{% tts %}} starts, it looks for `ttn-lw-stack-docker.yml` for a license key, hostname, and other configuration parameters.

To configure Docker, we also need a `docker-compose.yml`, which defines the Docker services of {{% tts %}} and its dependencies.

### Example Configuration Files

{{< tabs/container "Enterprise" "Open Source" >}}
{{< tabs/tab "Enterprise" >}}
Download the example `ttn-lw-stack-docker.yml` for {{% tts %}} Enterprise <a href="ttn-lw-stack-docker-enterprise.yml" download="ttn-lw-stack-docker.yml">here</a>.

Download the example `docker-compose.yml` for {{% tts %}} Enterprise <a href="docker-compose-enterprise.yml" download="docker-compose.yml">here</a>.
{{< /tabs/tab >}}
{{< tabs/tab "Open Source" >}}
Download the example `ttn-lw-stack-docker.yml` for {{% tts %}} Open Source <a href="ttn-lw-stack-docker-open-source.yml" download="ttn-lw-stack-docker.yml">here</a>.

Download the example `docker-compose.yml` for {{% tts %}} Open Source <a href="docker-compose-open-source.yml" download="docker-compose.yml">here</a>.
{{< /tabs/tab >}}
{{< /tabs/container >}}

Create a new folder where your deployment files will be placed. This guide assumes the following directory hierarchy:

```bash
docker-compose.yml          # defines Docker services for running {{% tts %}}
config/
└── stack/
    └── ttn-lw-stack-docker.yml    # configuration file for {{% tts %}}
```

>**Note:** These example configuration files contain all of the configuration settings you need to run {{% tts %}} for development - just update the files with your server address. In the next sections, we will examine the settings in these files and provide tips for running {{% tts %}} in production.

## Configure Docker

Docker runs an instance of {{% tts %}}, as well as an SQL database and a Redis database which {{% tts %}} depends on to store data.

We will configure Docker to run three services:

- {{% tts %}}
- An SQL database (CockroachDB and PostgreSQL are supported)
- Redis
 
### SQL Database

We need to configure an SQL database, so in this guide we'll use a single instance of [CockroachDB](https://www.cockroachlabs.com/). Make sure that the `volumes` are set up correctly so that the database is persisted on your server's disk.

The simplest configuration for CockroachDB will look like this (excerpted from the example `docker-compose.yml`):

{{< highlight yaml "linenos=table,linenostart=5" >}}
{{< readfile path="/content/getting-started/installation/configuration/docker-compose-enterprise.yml" from=5 to=14 >}}
{{< /highlight >}}

>**Note:** It is also possible (and even preferred) to use a managed SQL database. In this case, you will need to update the [`is.database-uri` configuration option]({{< ref "/reference/configuration/identity-server#database-options" >}}) to point to the address of the managed database.

### Redis

We also need to configure [Redis](https://redis.io/). In this guide we'll use a single instance of Redis. Again, make sure that the `volumes` are set up correctly so that the datastore is persisted on your server's disk. Note that {{% tts %}} requires Redis version 5.0 or newer.

The simplest configuration for Redis will look like this (excerpted from the example `docker-compose.yml`):

{{< highlight yaml "linenos=table,linenostart=28" >}}
{{< readfile path="/content/getting-started/installation/configuration/docker-compose-enterprise.yml" from=28 to=37 >}}
{{< /highlight >}}

>**Note:** It is also possible (and even preferred) to use a managed Redis database. In this case, you will need to update the [`redis.address` configuration option]({{< ref "/reference/configuration/the-things-stack#redis-options" >}}) to point to the address of the managed database.

### {{% tts %}}

#### Entrypoint and dependencies

We tell Docker Compose to use `ttn-lw-stack -c /config/ttn-lw-stack-docker.yml`, as the container entry point so that our configuration file `ttn-lw-stack-docker.yml` is always loaded (more on the config file below). The default command is `start`, which starts {{% tts %}}.

With the `depends_on` field we tell Docker Compose that {{% tts %}} depends on CockroachDB and Redis. With this, Docker Compose will wait for CockroachDB and Redis to come online before starting {{% tts %}}.

>**Note:** If using a managed SQL or Redis database, these can be removed from `depends_on` and the services do not need to be started in Docker.

#### Volumes

Under the `volumes` section, we define volumes for files that need to be persisted on disk. There are stored blob files (such as profile pictures) and certificate files retrieved with ACME (if required). We also mount the local `./config/stack/` directory on the container under `/config`, so that {{% tts %}} can find our configuration file at `/config/ttn-lw-stack-docker.yml`.

>**Note:** If your `ttn-lw-stack-docker.yml` is in a directory other than `./config/stack`, you will need to change this volume accordingly.

#### Ports

The `ports` section exposes {{% tts %}}'s ports to the world. Port `80` and `443` are mapped to the internal HTTP and HTTPS ports. The other ports have a direct mapping. If you don't need support for gateways and applications that don't support TLS, you can remove ports starting with `188`.

In the `environment` section, we configure the databases used by {{% tts %}}. We will set these to the CockroachDB and Redis instances that are defined in the `docker-compose.yml` above.

Here is an example `stack` configuration from the Enterprise version of `docker-compose.yml`:

{{< highlight yaml "linenos=table,linenostart=39" >}}
{{< readfile path="/content/getting-started/installation/configuration/docker-compose-enterprise.yml" from=39 to=83 >}}
{{< /highlight >}}

>**Note:** If using managed databases, the `environment` ports need to be changed to the ports of the managed databases.

## Configure {{% tts %}}

Once Docker starts {{% tts %}}, we need to specify configuration options for running {{% tts %}} in the `ttn-lw-stack-docker.yml` file. Let's have a look at the configuration options which are required.

### License {{< distributions-inline "Enterprise" >}}

First is a license file. {{% tts %}} Enterprise requires a license, which can be purchased at the [products page](https://thethingsindustries.com/technology/pricing). This is specified in the `license` field, and can be either a `key` string, or a `file`path. See the [License Configuration Reference]({{< ref "/reference/configuration/the-things-stack" >}}) for more information.

### TLS

{{% tts %}} supports TLS with Let's Encrypt. Since we're deploying {{% tts %}} on
`thethings.example.com`, we configure it to only request certificates for that
host, and also to use it as the default host (see the [`tls` configuration reference]({{< ref "/reference/configuration/the-things-stack" >}}) section).

>**Note:** Make sure that you use the correct `tls` depending on whether you will be using Let's Encrypt or your own certificate files.

### HTTP

We also configure HTTP server keys for encrypting and verifying cookies, as well
as passwords for endpoints that you may want to keep for internal use (see the `http` section).

### Email

{{% tts %}} sends emails to users, so we need to configure how these are sent.
You can use Sendgrid or an SMTP server. If you skip setting up an email provider,
{{% tts %}} will print emails to the stack logs (see the `email` section).

### Component URLs

Finally, we also need to configure the URLs for the Web UI and the secret used
by the console client (see the `console` section). These tell {{% tts %}} where all its components are accessible.

>**Note:** Failure to correctly configure component URLs is a common problem that will prevent the stack from starting. Be sure to replace all instances of `thethings.example.com` with your domain name!

Below is an example `ttn-lw-stack-docker.yml` file for the Enterprise stack:

{{< highlight yaml "linenos=table" >}}
{{< readfile path="/content/getting-started/installation/configuration/ttn-lw-stack-docker-enterprise.yml" >}}
{{< /highlight >}}

>**Note:** Make note of the client secret, as it will be needed again when initializing {{% tts %}}.

## Localhost

If you are configuring and running {{% tts %}} on a local machine with no public IP or DNS address, some special considerations must be made. `localhost` has a different meaning on your machine than inside the Docker container where {{% tts %}} runs, which can cause problems if you use `localhost` in your configuration.

`localhost` addresses on your machine will resolve to your machine, while `localhost` inside the Docker container will resolve inside the Docker container. In `docker-compose.yml`, we forward requests on ports 80 and 443 to ports 1885 and 8885 inside the container, so visiting `localhost` (which is really `localhost:80`) on your machine actually takes you to `localhost:1885` within the container.

If you configure your `is.oauth.ui.canonical-url` as `localhost`, this causes **Token Exchange Refused** errors when you try to log in to {{% tts %}} Console, because an authorization request generated from within the container will not be redirected to port 1885 or 8885, where {{% tts %}} is listening.

### Solution 1: Use the IP address of your computer on your local network

The best solution is to configure and use a static IP address for your machine on your local network so that redirects from your machine, from the docker container, or from anywhere inside your local network all resolve at the same place, on your machine. Follow instructions [here](https://uk.pcmag.com/news/124250/how-to-set-up-a-static-ip-address) for configuring a static IP address on your computer. Use that IP address as your server address, i.e replace `thethings.example.com` with that IP address. You may also generate a self-signed certificate for that IP address by following instructions in [certificates]({{< relref "certificates" >}}).

This will still allow you to see the console by entering `localhost` or your local IP in your browser. It will also allow you to connect to {{% tts %}} from any machine inside your local network.

### Solution 2: Specify the internal ports that {{% tts %}} listens on in your configuration files

By default, {{% tts %}} listens on ports 1885 and 8885 inside Docker. To make `localhost` work both on your local machine and within the container, append the port to `localhost` and make sure port forwarding is enabled in your `docker-compose.yml` for that port.

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

and in `docker-compose.yml`, add the following port forwarding configuration if it does not exist, while removing ports 80 and 443:

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

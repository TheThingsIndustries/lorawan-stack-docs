# Configuration

> This guide shows an example of configuring The Things Stack using configuration files, with an example domain thethings.example.com and TLS certificates from …

Source: https://www.thethingsindustries.com/docs/enterprise/docker/configuration/


This guide shows an example of configuring The Things Stack using configuration files, with an example domain `thethings.example.com` and TLS certificates from Let's Encrypt.

If configuring The Things Stack as `localhost` on a machine with no public IP or DNS address, see the [`localhost`](#running-the-things-stack-as-localhost) section.

In addition to the written instructions below, video instructions for installing The Things Stack are available on [The Things Industries youtube channel](https://www.youtube.com/watch?v=DcmgJMvMfZc).

<details><summary>Show video</summary>
[Video: YouTube](https://www.youtube.com/watch?v=DcmgJMvMfZc)

</details>

## Configuration Files

The Things Stack requires two configuration files when installing with Docker: `docker-compose.yml` and `ttn-lw-stack-docker.yml`. The files are provided below:

**Enterprise:**

Download the example `docker-compose.yml` for The Things Stack Enterprise <a href="docker-compose-enterprise.yml" download="docker-compose.yml">here</a>.

Download the example `ttn-lw-stack-docker.yml` for The Things Stack Enterprise <a href="ttn-lw-stack-docker-enterprise.yml" download="ttn-lw-stack-docker.yml">here</a>.



**Open Source:**

Download the example `docker-compose.yml` for The Things Stack Open Source <a href="docker-compose-open-source.yml" download="docker-compose.yml">here</a>.

Download the example `ttn-lw-stack-docker.yml` for The Things Stack Open Source <a href="ttn-lw-stack-docker-open-source.yml" download="ttn-lw-stack-docker.yml">here</a>.


Create the following folder structure with `docker-compose.yml`and `ttn-lw-stack-docker.yml`:

```bash
docker-compose.yml          # defines Docker services for running The Things Stack
config/
└── stack/
    └── ttn-lw-stack-docker.yml    # configuration file for The Things Stack
```

Make sure you replace the example server address `thethings.example.com` in `ttn-lw-stack-docker.yml` with the address of your deployment. The easiest way to do this is to use the search and replace function in your preferred code editor.

Next, proceed to the instructions below on how to change additional settings for production deployments.

## Configuration Files Explained

### `docker-compose.yml`

`docker-compose.yml` defines the Docker services of The Things Stack and its dependencies, and is used to configure Docker.

### `ttn-lw-stack-docker.yml`

`ttn-lw-stack-docker.yml` contains the configuration specific to The Things Stack deployment and is used to configure The Things Stack. When The Things Stack starts, it searches through `ttn-lw-stack-docker.yml` for component server addresses, a TLS certificate source, client authentication credentials, and other configuration parameters.

The configuration options in `ttn-lw-stack-docker` can also be specified using command-line flags or environment variables. All configuration options have a corresponding environment variable and command-line flag. See the [Configuration Reference](https://www.thethingsindustries.com/docs/enterprise/management/configuration/) for more information about the configuration options.

Settings in `docker-compose.yml` and `ttn-lw-stack-docker.yml` files are explained in detail in [Understanding Docker Configuration](#understanding-docker-configuration) and [Understanding The Things Stack Configuration](#understanding-the-things-stack-configuration) sections below. Further, we provide tips for running The Things Stack in production.

## Understanding Docker Configuration

In this section, configuring Docker is explained with an example `docker-compose.yml` file.

Docker runs an instance of The Things Stack, as well as an SQL database and a Redis database. The Things Stack components are inherently stateless and depend on the underlying SQL and Redis databases to store data.

> **Note:** For high deployment availability, it is recommended to set up redundancy in above mentioned databases.


In `docker-compose.yml` file, Docker is configured to run three services:

- PostgreSQL database
- Redis
- The Things Stack

### PostgreSQL Database

The configuration in this guide uses a single instance of [PostgreSQL](https://www.postgresql.org/). Note that the `volumes` need to be set up correctly so that the database is persisted on your server's disk.

**Enterprise:**

In production, replace the `image` with a working, stable tag from [Docker Hub - TimescaleDB](https://hub.docker.com/r/timescale/timescaledb/tags).

The simplest configuration for PostgreSQL looks like this (excerpted from the example `docker-compose.yml`):

```yaml
postgres:
    # In production, replace 'latest' with tag from https://hub.docker.com/r/timescale/timescaledb/tags
    # If you are not using the Storage Integration nor Network Operations Center, you can use vanilla Postgres.
    # The minimum Postgres version supported is 14.x.
    image: "timescale/timescaledb:latest-pg16"
    restart: unless-stopped
    environment:
      - POSTGRES_PASSWORD=root
      - POSTGRES_USER=root
      - POSTGRES_DB=ttn_lorawan
    volumes:
      - ${DEV_DATA_DIR:-.env/data}/postgres:/var/lib/postgresql/data
    ports:
      - "127.0.0.1:5432:5432"
```


> **Note:** Alternatively, you can use a managed TimescaleDB database, like [Timescale Cloud](https://www.timescale.com/cloud). In that case, make sure to configure the [Identity Server](https://www.thethingsindustries.com/docs/enterprise/management/configuration/identity-server/#database-options), [Application Server](https://www.thethingsindustries.com/docs/enterprise/management/configuration/application-server/#storage-integration-options) and [Network Operations Center](https://www.thethingsindustries.com/docs/enterprise/management/configuration/network-operations-center/#database-options) databases.



**Open Source:**

In production, replace the `image` with a working, stable tag from [Docker Hub - Postgres](https://hub.docker.com/_/postgres).

The simplest configuration for PostgreSQL looks like this (excerpted from the example `docker-compose.yml`):

```yaml
postgres:
    # In production, replace 'latest' with tag from https://hub.docker.com/_/postgres?tab=tags
    image: postgres:latest
    restart: unless-stopped
    environment:
      - POSTGRES_PASSWORD=root
      - POSTGRES_USER=root
      - POSTGRES_DB=ttn_lorawan
    volumes:
      - ${DEV_DATA_DIR:-.env/data}/postgres:/var/lib/postgresql/data
    ports:
      - "127.0.0.1:5432:5432"
```


> **Note:** Alternatively, you can use a managed PostgreSQL database. In that case, make sure to configure the [Identity Server](https://www.thethingsindustries.com/docs/enterprise/management/configuration/identity-server/#database-options) database.


### Redis

The configuration in this guide uses a single instance of [Redis](https://redis.io/). Again, note that the `volumes` need to be set up correctly so that the datastore is persisted on your server's disk.

> **Note:** The Things Stack requires Redis version 6.2.


In production, replace the `image` with a working, stable tag from [Docker Hub - Redis](https://hub.docker.com/_/redis?tab=tags).

It is also possible (and even preferred) to use a managed Redis database. In this case, you will need to configure the managed database address with the `redis-address` [configuration option](https://www.thethingsindustries.com/docs/enterprise/management/configuration/the-things-stack/#redis-options) or `TTN_LW_REDIS_ADDRESS` environment variable.

The simplest configuration for Redis looks like this (excerpted from the example `docker-compose.yml`):

```yaml
redis:
    # In production, replace 'latest' with tag from https://hub.docker.com/_/redis?tab=tags
    image: redis:latest
    command: redis-server --appendonly yes
    restart: unless-stopped
    volumes:
      - ${DEV_DATA_DIR:-.env/data}/redis:/data
    ports:
      - "127.0.0.1:6379:6379"
```


### The Things Stack

After starting the PostgreSQL and Redis databases, Docker Compose starts The Things Stack.

#### Entrypoint and Dependencies

Docker Compose uses `ttn-lw-stack -c /config/ttn-lw-stack-docker.yml` as the container entry point, so that `ttn-lw-stack-docker.yml` configuration file is always loaded (more on the config file below).

In production, replace the `image` with a working, stable tag from [Docker Hub - The Things Industries](https://hub.docker.com/r/thethingsindustries/lorawan-stack/tags) for Enterprise, or [Docker Hub - The Things Network](https://hub.docker.com/r/thethingsnetwork/lorawan-stack/tags) for Open Source.

The default command is `start`, which starts The Things Stack.

```yaml
stack:
    # In production, replace 'latest' with tag from https://hub.docker.com/r/thethingsindustries/lorawan-stack/tags
    image: thethingsindustries/lorawan-stack:latest
    entrypoint: tti-lw-stack -c /config/ttn-lw-stack-docker.yml
    command: start
    restart: unless-stopped
```


The `depends_on` field tells Docker Compose that The Things Stack depends on PostgreSQL and Redis. With this, Docker Compose will wait for PostgreSQL and Redis to come online before starting The Things Stack.

```yaml
depends_on:
      - redis
      - postgres
```


> **Note:** If using a managed SQL or Redis database, these can be removed from `depends_on` and the services do not need to be started in Docker.


#### Volumes

Under the `volumes` section, volumes for the files that need to be persisted on the disk are defined. There are stored blob files (such as profile pictures) and certificate files retrieved with ACME (if required). Also, local `./config/stack/` directory is mounted on the container under `/config`, so that The Things Stack can find the configuration file at `/config/ttn-lw-stack-docker.yml`.

```yaml
volumes:
      - ./blob:/srv/ttn-lorawan/public/blob
      - ./config/stack:/config:ro
      # If using Let's Encrypt:
      - ./acme:/var/lib/acme
```


> **Note:** If your `ttn-lw-stack-docker.yml` is in a directory other than `./config/stack`, you will need to change this volume accordingly.


#### Environment and Ports

The databases used by The Things Stack are configured in the `environment` section. In this guide, these are set to the PostgreSQL and Redis instances that are mentioned above.

> **Note:** If using managed databases, the `environment` ports need to be changed to the ports of the managed databases.


The `ports` section exposes The Things Stack's ports outside the Docker container. Port `80` and `443` are mapped to the internal HTTP and HTTPS ports. The other ports have a direct mapping. If you don't need support for gateways and applications that don't use TLS, you can remove ports starting with `188`:

```yaml
ports:
      # If deploying on a public server:
      - "80:1885"
      - "443:8885"
      - "1881:1881"
      - "8881:8881"
      - "1882:1882"
      - "8882:8882"
      - "1883:1883"
      - "8883:8883"
      - "1884:1884"
      - "8884:8884"
      - "1885:1885"
      - "8885:8885"
      - "1886:1886"
      - "8886:8886"
      - "1887:1887"
      - "8887:8887"
      - "1888:1888"
      - "8888:8888"
      - "8889:8889"
```


> **Note:** Be sure to provide network access to these ports on the machine you are running The Things Stack.


## Understanding The Things Stack Configuration

Configuration options for running The Things Stack are specified in the `ttn-lw-stack-docker.yml` file. This section points out the required configuration options.

The example `ttn-lw-stack-docker.yml` file for The Things Stack Enterprise shown below contains details which help you follow this section. The example `ttn-lw-stack-docker.yml` file is also available for download in the [Example Configuration Files](https://www.thethingsindustries.com/docs/enterprise/docker/configuration/#example-configuration-files) section.

<details><summary>Example ttn-lw-stack-docker.yml file</summary>```yaml
# The Things Stack requires a license key
license:
  # License contents may be specified directly
  key: ""
  # Or stored in a file
  # file: ''

# Identity Server configuration
# Email configuration for "thethings.example.com"
is:
  email:
    sender-name: "The Things Stack"
    sender-address: "noreply@thethings.example.com"
    network:
      name: "The Things Stack"
      console-url: "https://thethings.example.com/console"
      identity-server-url: "https://thethings.example.com/oauth"

    # If sending email with Sendgrid
    # provider: sendgrid
    # sendgrid:
    #   api-key: '...'              # enter Sendgrid API key

    # If sending email with SMTP
    # provider: smtp
    # smtp:
    #   address:  '...'             # enter SMTP server address
    #   username: '...'             # enter SMTP server username
    #   password: '...'             # enter SMTP server password

  # Web UI configuration for "thethings.example.com":
  oauth:
    ui:
      canonical-url: "https://thethings.example.com/oauth"
      is:
        base-url: "https://thethings.example.com/api/v3"
      ui:
        console-url: "https://thethings.example.com/oauth"

  # If running a multi-tenant environment, configure tenant admin keys
  tenancy:
    admin-keys: "" # generate 32 bytes (openssl rand -hex 32)

# HTTP server configuration
http:
  cookie:
    block-key: "" # generate 32 bytes (openssl rand -hex 32)
    hash-key: "" # generate 64 bytes (openssl rand -hex 64)
  metrics:
    password: "metrics" # choose a password
  pprof:
    password: "pprof" # choose a password

# Events configuration
events:
  backend: redis
  redis:
    store:
      enable: true

# If using custom certificates:
#tls:
#  source: file
#  root-ca: /run/secrets/ca.pem
#  certificate: /run/secrets/cert.pem
#  key: /run/secrets/key.pem

# Let's encrypt for "thethings.example.com"
tls:
  source: acme
  acme:
    enable: true
    dir: /var/lib/acme
    email: "you@thethings.example.com"
    hosts: ["thethings.example.com"]
    # If running a multi-tenant environment, specify the wildcard address too:
    # hosts: ["*.thethings.example.com", "thethings.example.com"]
    default-host: "thethings.example.com"

# If Gateway Server enabled, defaults for "thethings.example.com":
gs:
  mqtt:
    public-address: "thethings.example.com:1882"
    public-tls-address: "thethings.example.com:8882"
  mqtt-v2:
    public-address: "thethings.example.com:1881"
    public-tls-address: "thethings.example.com:8881"

# If Gateway Configuration Server enabled, defaults for "thethings.example.com":
gcs:
  basic-station:
    default:
      lns-uri: "wss://thethings.example.com:8887"
  the-things-gateway:
    default:
      mqtt-server: "mqtts://thethings.example.com:8881"

# Web UI configuration for "thethings.example.com":
console:
  ui:
    account-url: "https://thethings.example.com/oauth"
    canonical-url: "https://thethings.example.com/console"
    noc-url: "https://thethings.example.com/noc"
    is:
      base-url: "https://thethings.example.com/api/v3"
    gs:
      base-url: "https://thethings.example.com/api/v3"
    ns:
      base-url: "https://thethings.example.com/api/v3"
    as:
      base-url: "https://thethings.example.com/api/v3"
    js:
      base-url: "https://thethings.example.com/api/v3"
    gcs:
      base-url: "https://thethings.example.com/api/v3"
    qrg:
      base-url: "https://thethings.example.com/api/v3"
    edtc:
      base-url: "https://thethings.example.com/api/v3"
    dcs:
      base-url: "https://thethings.example.com/api/v3"
    noc:
      base-url: "https://thethings.example.com/api/v3"
  oauth:
    authorize-url: "https://thethings.example.com/oauth/authorize"
    token-url: "https://thethings.example.com/oauth/token"
    logout-url: "https://thethings.example.com/oauth/logout"
    client-id: "console"
    client-secret: "console" # choose or generate a secret

# If Application Server enabled, defaults for "thethings.example.com":
as:
  # Configuration required for the Storage Integration
  packages:
    storage:
      provider: postgres
      bulk:
        enabled: true
      postgres:
        database-uri: "postgres://root:root@postgres:5432/ttn_lorawan?sslmode=disable"
        insert-batch-size: 1024 # batch size for INSERT operations
        select-batch-size: 1024 # batch size for SELECT operations
  mqtt:
    public-address: "thethings.example.com:1883"
    public-tls-address: "thethings.example.com:8883"
  webhooks:
    downlink:
      public-address: "thethings.example.com:1885/api/v3"

# Managed gateway configuration, defaults for "thethings.example.com".
# This configures a connection with The Things Gateway Controller, a service operated by The Things Industries.
# This allows connecting, for example, The Things Indoor Gateway Pro.
ttgc:
  enabled: true
  domain: thethings.example.com
  tls:
    source: file
    certificate: /run/secrets/cert.pem
    key: /run/secrets/key.pem

# If Network Operations Center is enabled, defaults for "thethings.example.com":
noc:
  ui:
    canonical-url: "https://thethings.example.com/noc"
  oauth:
    authorize-url: "https://thethings.example.com/oauth/authorize"
    token-url: "https://thethings.example.com/oauth/token"
    logout-url: "https://thethings.example.com/oauth/logout"
    client-id: "noc"
    client-secret: "noc" # choose or generate a secret
  store:
    database-uri: "postgres://root:root@postgres:5432/ttn_lorawan?sslmode=disable"
    # If you have Postgres read replicas:
    # read-database-uri: "postgres://root:root@postgres-read:5432/ttn_lorawan?sslmode=disable"
    target-insert-batch-window: "1m" # batch window
    target-insert-batch-size: 8192 # batch size
    # Adjust the raw data retention (minimum 3 days):
    # raw-data-retention: "3d"
  grafana:
    target-url: "http://grafana:3000" # URL for the internal Grafana
    admin-username: "admin"
    admin-password: "admin" # choose or generate a secret
    console-url: "https://thethings.example.com/console"
    noc-address: "stack:1884" # internal non-TLS address of The Things Stack Network Operations Center
  access:
    extended: true # Enable application and end device dashboards

# If running a multi-tenant environment, defaults for "thethings.example.com":
tenancy:
  base-domains: "thethings.example.com"
  default-id: "default"
```
</details>

### License








  
    
  



  

<a href="https://www.thethingsindustries.com/the-things-stack/deployment-options" target="_blank" rel="noopener" class="badge-stack" title="Available in: Enterprise">

  <img class="badge" src="https://www.thethingsindustries.com/docs/img/tts_frames/frame_enterprise.svg" alt="Enterprise">

</a>


 The Things Stack Enterprise requires a license, which can be purchased at the [products page](https://thethingsindustries.com/technology/pricing). This is specified in the `license` field, and can be either a `key` string, or a `file`path. See the [License configuration reference](https://www.thethingsindustries.com/docs/enterprise/management/configuration/the-things-stack/#license) for more information.

```yaml
license:
  # License contents may be specified directly
  key: ""
  # Or stored in a file
  # file: ''
```


### Email

The Things Stack sends emails to users, so the `email` section of the configuration defines how these are sent.
You can use Sendgrid or an SMTP server. For development purposes, you can use the `dir` provider that writes emails to a directory.
If you skip setting up an email provider, The Things Stack will print emails to the stack logs.

```yaml
email:
    sender-name: "The Things Stack"
    sender-address: "noreply@thethings.example.com"
    network:
      name: "The Things Stack"
      console-url: "https://thethings.example.com/console"
      identity-server-url: "https://thethings.example.com/oauth"

    # If sending email with Sendgrid
    # provider: sendgrid
    # sendgrid:
    #   api-key: '...'              # enter Sendgrid API key

    # If sending email with SMTP
    # provider: smtp
    # smtp:
    #   address:  '...'             # enter SMTP server address
    #   username: '...'             # enter SMTP server username
    #   password: '...'             # enter SMTP server password
```


### HTTP

In the `http` section, HTTP server keys for encrypting and verifying cookies are configured, as well
as passwords for endpoints that you may want to keep for the internal use.

```yaml
# HTTP server configuration
http:
  cookie:
    block-key: "" # generate 32 bytes (openssl rand -hex 32)
    hash-key: "" # generate 64 bytes (openssl rand -hex 64)
  metrics:
    password: "metrics" # choose a password
```


### TLS

This example shows the configuration for using TLS with Let's Encrypt. Since The Things Stack is being deployed on
`thethings.example.com` in this guide, it is configured to only request certificates for that
host, and also to use it as the default host.

If using Let's Encrypt, certificates will automatically be requested the first time you access The Things Stack. You will notice that the page takes some time to load while certificates are obtained in the background.

```yaml
# Let's encrypt for "thethings.example.com"
tls:
  source: acme
  acme:
    enable: true
    dir: /var/lib/acme
    email: "you@thethings.example.com"
    hosts: ["thethings.example.com"]
    # If running a multi-tenant environment, specify the wildcard address too:
    # hosts: ["*.thethings.example.com", "thethings.example.com"]
    default-host: "thethings.example.com"
```


Make sure that you use the correct `tls` configuration depending on whether you are using Let's Encrypt or your own certificate files.

If you are using your own certificate files, make sure to uncomment the lines that define `source` type, `root-ca`, `certificate` and `key`. The paths assigned to these do not need to be altered, because they point to the location of these files inside the Docker container, and not on your machine.

```yaml
# If using custom certificates:
#tls:
#  source: file
#  root-ca: /run/secrets/ca.pem
#  certificate: /run/secrets/cert.pem
#  key: /run/secrets/key.pem
```


See the [TLS Options configuration reference](https://www.thethingsindustries.com/docs/enterprise/management/configuration/the-things-stack/#tls-options) for more information.

Make sure that you use the correct `tls` configuration depending on whether you are using Let's Encrypt or your own certificate files.

### Console Component URLs

The `console` section configures the URLs for the Web UI and the secret used by the console client. These tell The Things Stack where all its components are accessible. Be sure to replace these, and all the other server addresses, with yours.

```yaml
# Web UI configuration for "thethings.example.com":
console:
  ui:
    account-url: "https://thethings.example.com/oauth"
    canonical-url: "https://thethings.example.com/console"
    noc-url: "https://thethings.example.com/noc"
    is:
      base-url: "https://thethings.example.com/api/v3"
    gs:
      base-url: "https://thethings.example.com/api/v3"
    ns:
      base-url: "https://thethings.example.com/api/v3"
    as:
      base-url: "https://thethings.example.com/api/v3"
    js:
      base-url: "https://thethings.example.com/api/v3"
    gcs:
      base-url: "https://thethings.example.com/api/v3"
    qrg:
      base-url: "https://thethings.example.com/api/v3"
    edtc:
      base-url: "https://thethings.example.com/api/v3"
    dcs:
      base-url: "https://thethings.example.com/api/v3"
    noc:
      base-url: "https://thethings.example.com/api/v3"
```


> **Warning:** Failure to correctly configure component URLs is a common problem that will prevent the stack from starting. Be sure to replace all instances of `thethings.example.com` with your domain name!


The `client-secret` will be needed later when authorizing the Console. Be sure to set and remember it!

```yaml
oauth:
    authorize-url: "https://thethings.example.com/oauth/authorize"
    token-url: "https://thethings.example.com/oauth/token"
    logout-url: "https://thethings.example.com/oauth/logout"
    client-id: "console"
    client-secret: "console" # choose or generate a secret
```


### Managed Gateways <span class="tag is-light">New in 3.34.0</span>



If you want to connected managed gateways, e.g. [The Things Indoor Gateway Pro](https://www.thethingsindustries.com/docs/hardware/gateways/models/thethingsindoorgatewaypro/), you need to enable The Things Gateway Controller. This is a central service operated by The Things Industries that allows for claiming and remotely managing gateways. The Things Stack is natively integrated with The Things Gateway Controller.

To authenticate with The Things Gateway Controller, The Things Stack must use custom TLS certificates.
```yaml
ttgc:
  enabled: true
  domain: thethings.example.com
  tls:
    source: file
    certificate: /run/secrets/cert.pem
    key: /run/secrets/key.pem
```


> **Note:** If you are using a private PKI, you need to share your CA file with The Things Industries in order for The Things Gateway Controller to verify your certificate and authenticate your deployment. Contact [The Things Industries support](mailto:support@thethingsindustries.com) and share your CA certificate in PEM format.


### NOC








  
    
  



  

<a href="https://www.thethingsindustries.com/the-things-stack/deployment-options" target="_blank" rel="noopener" class="badge-stack" title="Available in: Enterprise">

  <img class="badge" src="https://www.thethingsindustries.com/docs/img/tts_frames/frame_enterprise.svg" alt="Enterprise">

</a>


 The `noc` section configures the Network Operations Center.

Besides `ui` and `oauth` settings, storage settings need to be configured in the `store` section. If you're using Postgres read replicas to offload read requests or analytics traffic from the primary Postgres instance, you can configure it using the `read-database-uri`. You're also able to configure the batch window and size, as well as to set the retention period for raw data.

To authorize the NOC, be sure to set and remember the client secret.

```yaml
# If Network Operations Center is enabled, defaults for "thethings.example.com":
noc:
  ui:
    canonical-url: "https://thethings.example.com/noc"
  oauth:
    authorize-url: "https://thethings.example.com/oauth/authorize"
    token-url: "https://thethings.example.com/oauth/token"
    logout-url: "https://thethings.example.com/oauth/logout"
    client-id: "noc"
    client-secret: "noc" # choose or generate a secret
  store:
    database-uri: "postgres://root:root@postgres:5432/ttn_lorawan?sslmode=disable"
    # If you have Postgres read replicas:
    # read-database-uri: "postgres://root:root@postgres-read:5432/ttn_lorawan?sslmode=disable"
    target-insert-batch-window: "1m" # batch window
    target-insert-batch-size: 8192 # batch size
    # Adjust the raw data retention (minimum 3 days):
    # raw-data-retention: "3d"
```


To visualize data, configure the `grafana` section.

```yaml
grafana:
    target-url: "http://grafana:3000" # URL for the internal Grafana
    admin-username: "admin"
    admin-password: "admin" # choose or generate a secret
    console-url: "https://thethings.example.com/console"
    noc-address: "stack:1884" # internal non-TLS address of The Things Stack Network Operations Center
```


### Multi-tenancy








  
    
  



  

<a href="https://www.thethingsindustries.com/the-things-stack/deployment-options" target="_blank" rel="noopener" class="badge-stack" title="Available in: Enterprise">

  <img class="badge" src="https://www.thethingsindustries.com/docs/img/tts_frames/frame_enterprise.svg" alt="Enterprise">

</a>


 If running a multi-tenant environment, we need to configure the default tenant ID, and the base domain from which tenant IDs are inferred. See the [`tenancy` configuration reference](https://www.thethingsindustries.com/docs/enterprise/management/configuration/the-things-stack/#multi-tenancy).

```yaml
# If running a multi-tenant environment, defaults for "thethings.example.com":
tenancy:
  base-domains: "thethings.example.com"
  default-id: "default"
```


For multi-tenant environments you'll also need to configure tenant admin keys in the `is` section:

```yaml
# If running a multi-tenant environment, configure tenant admin keys
  tenancy:
    admin-keys: "" # generate 32 bytes (openssl rand -hex 32)
```


## Next Step - Certificates

Once you have configured `docker-compose.yml` and `ttn-lw-stack-docker.yml` as shown in the instructions above, continue on to the [Certificates](https://www.thethingsindustries.com/docs/enterprise/docker/certificates/) section.

## Running The Things Stack as `localhost`

Follow this section if you are configuring and running The Things Stack on a local machine with no public IP or DNS address.

In addition to the written instructions below, video instructions for installing on `localhost` are available on [The Things Industries youtube channel](https://www.youtube.com/c/TheThingsNetworkCommunity).

<details><summary>Show video</summary>
[Video: YouTube](https://www.youtube.com/watch?v=Owm5IUtQTx8)

</details>

`localhost` has a different meaning on your machine than inside the Docker container where The Things Stack runs, which can cause problems if you use `localhost` in your configuration.

`localhost` addresses on your machine will resolve to your machine, while `localhost` inside the Docker container will resolve inside the Docker container. In `docker-compose.yml`, we forward requests on ports 80 and 443 to ports 1885 and 8885 inside the container, so visiting `localhost` (which is really `localhost:80`) on your machine actually takes you to `localhost:1885` within the container.

If you configure your `is.oauth.ui.canonical-url` as `localhost`, this causes **Token Exchange Refused** errors when you try to log in to The Things Stack Console, because an authorization request generated from within the container will not be redirected to port 1885 or 8885, where The Things Stack is listening.

### Solution 1: Use the IP address of your computer on your local network

The best solution is to configure and use a static IP address for your machine on your local network so that redirects from your machine, from the Docker container, or from anywhere inside your local network, all resolve at the same place, on your machine.

Follow instructions [here](https://uk.pcmag.com/news/124250/how-to-set-up-a-static-ip-address) for configuring a static IP address on your computer. Use that IP address as your server address, i.e replace `thethings.example.com` with that IP address. You may also generate a self-signed certificate for that IP address by following instructions in the [Certificates](https://www.thethingsindustries.com/docs/enterprise/docker/certificates/) section.

> **Note:** ACME will not work on `localhost`, so you must either generate custom certificates for your IP address as shown in the [Custom Certificate Authority](https://www.thethingsindustries.com/docs/enterprise/docker/certificates/#custom-certificate-authority) instructions, or use `http` (unsecure) in your configuration.


This will still allow you to see The Things Stack Console by entering `localhost` or your local IP address in your browser. It will also allow you to connect to The Things Stack from any machine inside your local network.

You will also need to [configure the CLI](https://www.thethingsindustries.com/docs/concepts/features/cli/installing-cli/#generate-configuration-file), to use the static IP of your machine as the address of The Things Stack.

### Solution 2: Specify the internal ports that The Things Stack listens on in your configuration files

By default, The Things Stack listens on ports 1885 and 8885 inside Docker. To make `localhost` work both on your local machine and within the Docker container, append the port to `localhost` and make sure port forwarding is enabled in your `docker-compose.yml` for that port.

You must also remove ports 80 and 443 from your The Things Stack Docker configuration.

For example,

```yaml
is:
  oauth:
    ui:
      canonical-url: "https://thethings.example.com/oauth"
      is:
        base-url: "https://thethings.example.com/api/v3"
```

becomes

```yaml
is:
  oauth:
    ui:
      canonical-url: "https://localhost:8885/oauth"
      is:
        base-url: "https://localhost:8885/api/v3"
```

and in `docker-compose.yml`, add the following port forwarding configuration (if it does not already exist), while removing ports 80 and 443:

```yaml
services:
  stack:
    ports:
      - "1885:1885"
      - "8885:8885"
      # - "80:80" # Do not forward port 80
      # - "443:443" # Do not forward port 443
```

This will result in visits from both outside and inside the Docker container being received at the correct port by The Things Stack.


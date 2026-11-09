# Docker

> This is a guide for installing The Things Stack Enterprise or Open Source on your own hardware using Docker, to run your own private LoRaWAN® network server.

Source: https://www.thethingsindustries.com/docs/enterprise/docker/


This is a guide for installing The Things Stack Enterprise or Open Source on your own hardware using Docker, to run your own private LoRaWAN® network server.

There are several ways to run The Things Stack.

The Things Stack Open Source and Enterprise distributions are designed to run on your own hardware, which this guide covers.

Alternatively, to use The Things Stack in the cloud without installing it on your own hardware, see [The Things Stack Cloud](https://www.thethingsindustries.com/docs/cloud/) (our professional, SLA-backed offering) or [The Things Stack Sandbox](https://www.thethingsindustries.com/docs/concepts/ttn/) (our free-to-use The Things Stack Sandbox). To spin up your own EC2 instance, there is also an [AWS Launcher](https://www.thethingsindustries.com/docs/enterprise/aws/). To install using balenaCloud on a Rasperry Pi, see the [Balena](https://www.thethingsindustries.com/docs/enterprise/docker/balena/) section.

For highly available production cloud deployments with high throughput, we recommend using The Things Stack Cloud or AWS Launcher. All deployments of The Things Stack except Open Source and AWS Launcher support multi-tenancy, which allows you to create multiple private network servers within a single deployment, for example to resell to individual clients.

Continue following these instructions to run The Things Stack Enterprise or Open Source on your own hardware, using Docker.

In addition to the following written instructions, video instructions for installing The Things Stack are available on [The Things Industries youtube channel](https://www.youtube.com/watch?v=DcmgJMvMfZc).

<details><summary>Show video</summary>
[Video: YouTube](https://www.youtube.com/watch?v=DcmgJMvMfZc)

</details>

## Prerequisites

1. A server with a recommended 4 virtual CPUs and 16GB RAM running [Docker](https://docs.docker.com/engine/) and [Docker Compose](https://docs.docker.com/compose/)\*
2. DNS records pointing to your server's IP address (skip if using `localhost`)
3. A [license](https://thethingsindustries.com/technology/pricing) for The Things Stack (only for Enterprise)

\*Benchmark for 100K devices with 12 confirmed uplinks per day. Your requirements will vary depending on your load and desired redundancy.

If purchasing an Enterprise license, consider setting up a multi-tenant environment from the beginning if you plan to add tenants later. Switching from a a single-tenant to multi-tenant environment requires database migration.

For multi-tenant deployments, DNS records for `*.domain` need to be created in addition to the plain `domain` record. For offline deployments, internal DNS pointing to your server's IP address can be used, and The Things Industries can provide a license for that domain name.

This guide shows you how to get everything up and running on a server. If you are comfortable with configuring servers and working with command line, this is the perfect place to start, but first, follow the guides to [install Docker](https://docs.docker.com/install/#supported-platforms), to [install Docker Compose](https://docs.docker.com/compose/install/#install-compose), and to [configure permissions for Docker Engine](https://docs.docker.com/engine/install/linux-postinstall/).

Next, see instructions on how to [configure](https://www.thethingsindustries.com/docs/enterprise/docker/configuration/), set up [certificates](https://www.thethingsindustries.com/docs/enterprise/docker/certificates/) and finally [run The Things Stack](https://www.thethingsindustries.com/docs/enterprise/docker/running-the-stack/)!


## Pages in this section

- [Configuration](https://www.thethingsindustries.com/docs/enterprise/docker/configuration/index.md): This guide shows an example of configuring The Things Stack using configuration files, with an example domain thethings.example.com and TLS certificates from …
- [Certificates](https://www.thethingsindustries.com/docs/enterprise/docker/certificates/index.md): The Things Stack has built in support for Transport Layer Security (TLS) and HTTPS. This requires a TLS certificate and a corresponding key. For using The …
- [Running The Things Stack](https://www.thethingsindustries.com/docs/enterprise/docker/running-the-stack/index.md): Now that all configuration is done, you are ready to initialize The Things Stack and start it! Begin by opening a terminal prompt in the same directory as your …
- [Proxy](https://www.thethingsindustries.com/docs/enterprise/docker/proxy/index.md): The Things Stack can work with an external proxy that can terminate TLS connections.
- [Troubleshooting Installation](https://www.thethingsindustries.com/docs/enterprise/docker/troubleshooting/index.md): This section contains help for common issues you may encounter while installing The Things Stack. Component address is not included in this license Ensure that …
- [Upgrading The Things Stack](https://www.thethingsindustries.com/docs/enterprise/docker/upgrading/index.md): This section contains instructions to upgrade a The Things Stack Enterprise or Open Source deployment.
- [Balena](https://www.thethingsindustries.com/docs/enterprise/docker/balena/index.md): The Things Stack Open Source can also be installed on a Raspberry Pi 3 or 4 running balena. To run The Things Stack you need to deploy it to a balenaCloud …


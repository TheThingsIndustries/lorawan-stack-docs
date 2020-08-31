---
title: "Installing The Things Enterprise Stack"
description: ""
weight: -1
---

This is a guide for setting up a Self Hosted LoRaWAN network server using {{% tts %}} for LoRaWAN.

<!--more-->

## Prerequisites

1. A server with a recommended 4 virtual CPUs and 16GB RAM running [Docker](https://docs.docker.com/engine/) and [Docker Compose](https://docs.docker.com/compose/)*
2. DNS records pointing to your server's IP address
3. A [license](https://thethingsindustries.com/technology/pricing) for {{% tts %}}

In this guide we will get everything up and running on a server using [Docker](https://docs.docker.com/engine/) and [Docker Compose](https://docs.docker.com/compose/). If you are comfortable with configuring servers and working with command line, this is the perfect place to start.

Since we're going to install {{% tts %}} using Docker and Docker Compose, follow the guides to [install Docker](https://docs.docker.com/install/#supported-platforms) and to [install Docker Compose](https://docs.docker.com/compose/install/#install-compose).

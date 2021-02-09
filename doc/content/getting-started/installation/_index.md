---
title: "Installing The Things Stack"
description: ""
weight: -1
distributions: ["Enterprise", "Open Source"]
---

This is a guide for setting up a private LoRaWAN network server using {{% tts %}} for LoRaWAN.

<!--more-->

## Prerequisites

1. A server with a recommended 4 virtual CPUs and 16GB RAM running [Docker](https://docs.docker.com/engine/) and [Docker Compose](https://docs.docker.com/compose/)*
2. DNS records pointing to your server's IP address (skip if using `localhost`)
3. A [license](https://thethingsindustries.com/technology/pricing) for {{% tts %}} (only for Enterprise)

<!--more-->

This guide shows you how to get everything up and running on a server. If you are comfortable with configuring servers and working with command line, this is the perfect place to start, but first, follow the guides to [install Docker](https://docs.docker.com/install/#supported-platforms) and to [install Docker Compose](https://docs.docker.com/compose/install/#install-compose).

> *Benchmark for 100K devices with 12 confirmed uplinks per day. Your requirements will vary depending on your load and desired redundancy.

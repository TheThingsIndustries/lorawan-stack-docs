---
title: "Installing The Things Stack"
description: ""
distributions: ["Enterprise", "Open Source"]
---

This is a guide for installing {{% tts %}} Enterprise or Open Source on your own hardware, to run your own private LoRaWAN network server.

## Edge installation

To use {{% tts %}} in the edge in a really simple way, you can use a Raspberry Pi 4 running balena. 

Running this project is as simple as deploying it to a balenaCloud fleet. You can do it in just one click by using the button below:

[![](https://www.balena.io/deploy.png)](https://dashboard.balena-cloud.com/deploy?repoUrl=https://github.com/xoseperez/balena-tts-lns)

Follow instructions, click `Add a Device` and flash an SD card with that OS image dowloaded from balenaCloud. Enjoy the magic 🌟Over-The-Air🌟!

You can find more detailed instructions [here](https://github.com/xoseperez/the-things-stack-balena). And go to the [TTS-network-server](https://hub.balena.io/g_xose_p_rez/tts-network-server) installation page here. 

Furthermore, if you have a LoRa concentrator for the Raspberry Pi (e.g. RAK2245 or RAK2287 SPI based) you can run the `basicstation` servic along the TTS network server to have all the stack in the edge. Find the project [here](https://hub.balena.io/g_xose_p_rez/tts-network-server-basicstation).


## Cloud installation

To use {{% tts %}} in the cloud without installing it on your own hardware, see [{{% tts %}} Cloud]({{< relref "cloud-hosted" >}}) (our professional, SLA-backed offering) or [Community Edition]({{< relref "ttn" >}}) (our free-to-use community edition).

<!--more-->

In addition to the written instructions, video instructions for installing {{% tts %}} are available on [The Things Network youtube channel](https://youtu.be/bMT9n1-6dCc).

<details><summary>Show video</summary>
{{< youtube "XgPSU4UkDuE" >}}
</details>

### Prerequisites

1. A server with a recommended 4 virtual CPUs and 16GB RAM running [Docker](https://docs.docker.com/engine/) and [Docker Compose](https://docs.docker.com/compose/)*
2. DNS records pointing to your server's IP address (skip if using `localhost`)
3. A [license](https://thethingsindustries.com/technology/pricing) for {{% tts %}} (only for Enterprise)

<!--more-->

{{< note >}}
When purchasing a license, consider setting up a multi-tenant environment from the beginning if you plan to add tenants later. Switching from a a single-tenant to multi-tenant environment requires database migration.
{{</ note >}}

This guide shows you how to get everything up and running on a server. If you are comfortable with configuring servers and working with command line, this is the perfect place to start, but first, follow the guides to [install Docker](https://docs.docker.com/install/#supported-platforms) and to [install Docker Compose](https://docs.docker.com/compose/install/#install-compose).

> *Benchmark for 100K devices with 12 confirmed uplinks per day. Your requirements will vary depending on your load and desired redundancy.

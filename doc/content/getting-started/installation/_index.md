---
title: "Installing The Things Stack"
description: ""
distributions: ["Enterprise", "Open Source"]
---

This is a guide for installing {{% tts %}} Enterprise or Open Source on your own hardware, to run your own private LoRaWAN network server.

<!--more-->

{{< note >}} To use {{% tts %}} in the cloud without installing it on your own hardware, see [{{% tts %}} Cloud]({{< relref "cloud-hosted" >}}) (our professional, SLA-backed offering) or [Community Edition]({{< relref "ttn" >}}) (our free-to-use community edition).

To install using balenaCloud on a Rasperry Pi, see the [Balena](#balena) section below. {{</ note >}}

Follow these instructions to run {{% tts %}} Enterprise or Open Source on your own hardware, using Docker. In addition to the following written instructions, video instructions for installing {{% tts %}} are available on [The Things Network youtube channel](https://youtu.be/bMT9n1-6dCc).

<details><summary>Show video</summary>
{{< youtube "XgPSU4UkDuE" >}}
</details>

## Prerequisites

1. A server with a recommended 4 virtual CPUs and 16GB RAM running [Docker](https://docs.docker.com/engine/) and [Docker Compose](https://docs.docker.com/compose/)*
2. DNS records pointing to your server's IP address (skip if using `localhost`)
3. A [license](https://thethingsindustries.com/technology/pricing) for {{% tts %}} (only for Enterprise)

{{< note >}}
When purchasing a license, consider setting up a multi-tenant environment from the beginning if you plan to add tenants later. Switching from a a single-tenant to multi-tenant environment requires database migration.
{{</ note >}}

{{< note >}}
*Benchmark for 100K devices with 12 confirmed uplinks per day. Your requirements will vary depending on your load and desired redundancy.
{{</ note >}}

This guide shows you how to get everything up and running on a server. If you are comfortable with configuring servers and working with command line, this is the perfect place to start, but first, follow the guides to [install Docker](https://docs.docker.com/install/#supported-platforms) and to [install Docker Compose](https://docs.docker.com/compose/install/#install-compose).

Next, see instructions on how to [configure]({{< ref "/getting-started/installation/configuration" >}}), set up [certificates]({{< ref "/getting-started/installation/certificates" >}}) and finally [run {{% tts %}}]({{< ref "/getting-started/installation/running-the-stack" >}})!

## Balena

{{% tts %}} Open Source can also be installed on a Raspberry Pi 3 or 4 running [balena](https://www.balena.io/). 

To run {{% tts %}} you need to  deploy it to a [balenaCloud](https://www.balena.io/cloud/) fleet. This can be done by by clicking the button below:

[![](https://www.balena.io/deploy.png)](https://dashboard.balena-cloud.com/deploy?repoUrl=https://github.com/xoseperez/balena-tts-lns)

First, follow the instructions in your balenaCloud dashboard and click `Create and deploy`.

Then, click `Add device` and configure the balenaOS file by filling in the presented form. Click `Download balenaOS` to download the resulting OS file and flash it to an SD card. Insert the SD card into your Raspberry Pi, connect it to the Internet and power it up. Enjoy the magic 🌟Over-The-Air🌟!

You can find more detailed instructions on [GitHub](https://github.com/xoseperez/the-things-stack-balena) and [balenaHub](https://hub.balena.io/g_xose_p_rez/tts-network-server).

{{< note >}}
If you have a LoRa concentrator for the Raspberry Pi (e.g. RAK2245 or RAK2287 SPI-based) you can also turn your Pi in to a LoRaWAN gateway by running the `basicstation` service alongside {{% tts %}}. Find the project [here](https://hub.balena.io/g_xose_p_rez/tts-network-server-basicstation). {{</ note >}}

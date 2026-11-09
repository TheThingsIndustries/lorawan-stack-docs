# Balena

> The Things Stack Open Source can also be installed on a Raspberry Pi 3 or 4 running balena. To run The Things Stack you need to deploy it to a balenaCloud …

Source: https://www.thethingsindustries.com/docs/enterprise/docker/balena/


The Things Stack Open Source can also be installed on a Raspberry Pi 3 or 4 running [balena](https://www.balena.io/).

To run The Things Stack you need to deploy it to a [balenaCloud](https://www.balena.io/cloud/) fleet. This can be done by by clicking the button below:

[![](https://www.balena.io/deploy.png)](https://dashboard.balena-cloud.com/deploy?repoUrl=https://github.com/xoseperez/the-things-stack-docker)

First, follow the instructions in your balenaCloud dashboard and click `Create and deploy`.

Then, click `Add device` and configure the balenaOS file by filling in the presented form. Click `Download balenaOS` to download the resulting OS file and flash it to an SD card. Insert the SD card into your Raspberry Pi, connect it to the Internet and power it up. Enjoy the magic 🌟Over-The-Air🌟!

You can find more detailed instructions on [GitHub](https://github.com/xoseperez/the-things-stack-docker) and [balenaHub](https://hub.balena.io/organizations/xoseperez/projects/the-things-stack).

> **Note:** If you have a LoRa concentrator for the Raspberry Pi (e.g. RAK2245 or RAK2287 SPI-based) you can also turn your Pi in to a LoRaWAN® gateway by running the `basicstation` service alongside The Things Stack. Find the project [here](https://hub.balena.io/organizations/xoseperez/projects/basicstation). Or having everything together including Node-RED, InfluxDB and Grafana for a truly standalone gateway. Check this out [here](https://hub.balena.io/organizations/xoseperez/projects/standalone-lorawan-gw).



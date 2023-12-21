---
title: "Setup"
description: ""
weight: 1
---

This section describes how to setup a Node-RED server and prepare to connect it to {{% tts %}}.

## Requirements

1. [Install Node-RED](https://nodered.org/docs/getting-started/local)

{{< note >}} Node-RED v1.0.6 is current at time of writing and is used in this guide. {{</ note >}}

## Setup

Run Node-RED in your terminal and navigate to the server address of your Node-RED instance in your web browser. For example, a default address of a Node-RED instance deployed on localhost is `127.0.0.1:1880`. You should see something like:

{{< figure src="nodered_dashboard.png" alt="Node-RED dashboard" >}}

On the left side, you can see various types of nodes that can be used in order to build flows.

All nodes can be found in the [Node-RED library](https://flows.nodered.org/).

{{% tts %}} Console provides the connection information needed for completing this integration.

In {{% tts %}} Console, click **Applications** and choose the application you want to connect to Node-RED. Click **Integrations** in the left hand panel of the Console, and the **MQTT** submenu to view the MQTT server info:

{{< figure src="console_info.png" alt="MQTT Server connection information" >}}

In this example, {{% tts %}} instance is installed on `localhost` and a built-in MQTT server is configured by default on port 1883 for insecure connections and on port 8883 for TLS-secured connections.

Please make sure to read a [note on using the tenant ID]({{< ref "/integrations/mqtt#note-on-using-the-tenant-id" >}}), because the MQTT server address and MQTT topics for multi-tenant {{% tts %}} deployments have a slightly different format. For example, to connect Node-RED to {{% ttss %}} (which is a multi-tenant environment) built-in MQTT server, the MQTT server address would be `eu1.cloud.thethings.network` instead of `localhost`, and the MQTT username would be `app-example@ttn` instead of `app-example`.

In a later step, we will use this information to connect Node-RED to {{% tts %}}.

# Setup

> This section describes how to setup a Node-RED server and prepare to connect it to The Things Stack. Requirements Install Node-RED Note: Node-RED v1.0.6 is …

Source: https://www.thethingsindustries.com/docs/integrations/other-integrations/node-red/setup/


This section describes how to setup a Node-RED server and prepare to connect it to The Things Stack.

## Requirements

1. [Install Node-RED](https://nodered.org/docs/getting-started/local)

> **Note:** Node-RED v1.0.6 is current at time of writing and is used in this guide.


## Setup

Run Node-RED in your terminal and navigate to the server address of your Node-RED instance in your web browser. For example, a default address of a Node-RED instance deployed on localhost is `127.0.0.1:1880`. You should see something like:

![Node-RED dashboard](https://www.thethingsindustries.com/docs/integrations/other-integrations/node-red/setup/nodered_dashboard.png)


On the left side, you can see various types of nodes that can be used in order to build flows.

All nodes can be found in the [Node-RED library](https://flows.nodered.org/).

The Things Stack Console provides the connection information needed for completing this integration.

In The Things Stack Console, click **Applications** and choose the application you want to connect to Node-RED. Click **Integrations** in the left hand panel of the Console, and the **MQTT** submenu to view the MQTT server info:

![MQTT Server connection information](https://www.thethingsindustries.com/docs/integrations/other-integrations/node-red/setup/console_info.png)


In this example, The Things Stack instance is installed on `localhost` and a built-in MQTT server is configured by default on port 1883 for insecure connections and on port 8883 for TLS-secured connections.

Please make sure to read a [note on using the tenant ID](https://www.thethingsindustries.com/docs/integrations/other-integrations/mqtt/#note-on-using-the-tenant-id), because the MQTT server address and MQTT topics for multi-tenant The Things Stack deployments have a slightly different format. For example, to connect Node-RED to The Things Stack Sandbox (which is a multi-tenant environment) built-in MQTT server, the MQTT server address would be `eu1.cloud.thethings.network` instead of `localhost`, and the MQTT username would be `app-example@ttn` instead of `app-example`.

In a later step, we will use this information to connect Node-RED to The Things Stack.


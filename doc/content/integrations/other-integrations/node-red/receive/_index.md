---
title: "Receive Events and Messages"
description: ""
weight: 2
aliases: [/integrations/node-red/receive]
---

This section follows the process of setting up a flow which subscribes and listens to the events and messages that are being published by the MQTT server.

## Configure MQTT In Node

Place the **mqtt in** node on the dashboard. Double-click on the node to configure its properties.

In the **Server** dropdown menu, select **Add new mqtt-broker** and click on the button besides to edit it.

In the **Connection** tab, under **Server**, provide the address of the MQTT server (without port) from {{% tts %}} Console (the address shown on the image at the bottom of the [Setup]({{< relref "enterprise#setup" >}}) section).

Provide the port in the **Port** field next to it, to define if you want an insecure or a TLS-secured connection with the server.

In this example, TLS-secured connection is to be established, so the **Port** value is set to 8883. In this case you should also check the **Enable secure (SSL/TLS) connection** box.

{{< figure src="mqtt_in_node_connection.png" alt="Configuring MQTT Server connection information" >}}

In the **Security** tab, enter the **Username** and **Password** according to the values in {{% tts %}} Console (the credentials shown on the image at the bottom of the [Setup]({{< relref "enterprise#setup" >}}) section).

{{< figure src="mqtt_in_node_security.png" alt="Configuring MQTT Server credentials" >}}

Go back to **Properties** and set the **Topic** value to `#` (to subscribe to all topics).

A full list of topics that you can subscribe to can be found in [MQTT Server]({{< ref "/integrations/other-integrations/mqtt#mqtt-clients" >}}) guide. Instead of subscribing to all uplink topics, you can choose the ones you want to listen. For example, you can subscribe to `v3/{application_id}/devices/{device_id}/up` to only listen to uplink messages.

Also, make sure to read a [note on using the tenant ID]({{< ref "/integrations/other-integrations/mqtt#note-on-using-the-tenant-id" >}}) in multi-tenant {{% tts %}} environments, because these topics can have a slightly different format.

Select the **QoS** value from the listed options and set **Output** parameter to **a parsed JSON object**.

## Configure Debug Nodes

Add two **debug** nodes and connect both to the **mqtt in** node. One debug node will listen to the events, while the other will listen to published messages.

Set the **Output** parameters of these nodes to **complete msg object** and **msg.payload**.

## Deploy

Click on **Deploy** in the upper right corner. If the setup is correct, **connected** status will be reported below the **mqtt in** node.

Click on **debug** icon in the upper right corner to see the published event messages and their payloads in JSON format.

{{< figure src="receive_uplink_flow.png" alt="Final flow scheme" >}}

If you do not see any output in the **debug** window on the right, make sure you activated your debug nodes.

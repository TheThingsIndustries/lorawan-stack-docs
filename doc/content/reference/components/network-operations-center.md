---
title: "Network Operations Center"
description: ""
distributions: ["Enterprise", "Cloud"]
new_in_version: "3.21.0"
---

Network Operations Center provides aggregated insight in a network operated with {{% tts %}}.

<!-- more -->

Network Operations Center stores events from {{% tts %}} in a time series database, queries aggregated data and visualizes data in a dashboard driven by Grafana. Network Operations Center is complementary to the [Console]({{< relref "console" >}}): the Network Operations Center shows historic data (with a delay of at most 5 minutes), while the Console shows live information and allows for managing the network.

## Accessing Network Operations Center

The Network Operations Center can only be accessed by administrators. There are two main ways to access Network Operations Center within {{% tts %}} Console:

- On the left hand menu click Network Operations Center.
- Click on your avatar/profile in the upper right corner and then choose the Network Operations Center from the drop-down menu.

The Network Operations Center Overview dashboard will open in a new web browser tab.

{{< note "Since it utilizes Grafana, the Network Operations Center is supported in the current version of the following [web browsers](https://grafana.com/docs/grafana/latest/setup-grafana/installation#supported-web-browsers)." />}}

A dashboard offers many features such as time picker, alerting, etc. For more information see the [Grafana docs](https://grafana.com/docs/grafana/v9.0/dashboards/use-dashboards/). Each dashboard has several panels for data visualization.

### Overview Dashboard

The Overview dashboard provides a high-level overview of the network, focusing on the gateway statistics based on historical data. 

{{< figure src="../overview-dashboard.png" alt="overview dashboard" >}}

It consists of the following panels:

**Gateways connected** - a bar chart that visualizes the number of gateways that have connected to the network in the selected period.

**Gateway connectivity** - a table layout that displays the **Gateway ID**, **Last Connect**, **Last Disconnect**, **Disconnects**, **Uptime**, and **Packet Rate** of all the gateways on the network in the selected period.

The following is a brief description of each column in the table:

- **Gateway ID**: displays gateway IDs of all the gateways on the network. Click on the Gateway ID to access its Gateway Details Dashboard.
- **Last Connect**: the date and time when the gateway last connected to the Network Server.
- **Last Disconnect**: the date and time when the gateway last disconnected from the Network Server.
- **Disconnects**: the number of disconnects in the selected period.
- **Uptime**: the fraction of time in which the gateway has been connected to the Network Server.
- **Packet Rate**: the total number of uplink and downlink data packets forwarded by the gateway per second.

The data can be sorted by column names and filtered by column values.

## Gateway Details Dashboard
The Gateway Details dashboard visualizes detailed insight into gateway statistics in the selected time period.

{{< figure src="../gateway-details-dashboard.png" alt="gateway details dashboard" >}}

It consists of the following panels:

**Uptime** - the gauge chart that visualizes the gateway uptime, i.e. the fraction of the time in which the gateway has been connected to the Network Server.

{{< figure src="../uptime.png" alt="uptime" >}}

**Lowest RSSI (LoRa)** - the graph that visualizes data about the lowest Received Signal Strength Indicator (RSSI) in dBm for each channel. 

{{< figure src="../rssi.png" alt="lowest rssi" >}}

**Traffic** - a time series graph that visualizes the uplink and downlink rates in packets per second.

{{< figure src="../traffic.png" alt="traffic" >}}

**Packets per channel** - a heat map that visualizes the number of uplink data packets for each channel.

{{< figure src="../packets-per-channel.png" alt="packets per channel" >}}

**Channel utilization** - a graph that visualizes the percentage of total utilization on each channel over a time interval.

{{< figure src="../channel-utilization.png" alt="channel utilization" >}}

The Packets per channel and Channel utilization graphs can be used to find out which channels are overused and which channels are prone to collisions.


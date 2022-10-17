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

The Network Operations Center can only be accessed by administrators. There are two main ways to access Network Operations Center within {{% tts %}} console:

- On the vertical navigation click Network Operations Center.
- On the horizontal navigation click on your avatar/profile name and then from the drop-down menu click Network Operations Center.

The Network Operations Center Overview dashboard will open in a new web browser tab.

{{< note "Network Operations Center is supported in the current version of these [web browsers](https://grafana.com/docs/grafana/latest/setup-grafana/installation/)." />}}

A dashboard provides many features that can be used to customize the presentation of data. The following image highlights some of them.

{{< figure src="../dashboard-features.png" alt="dashboard features" >}}

Horizontal navigation bar:

- **Dashboard title (1)**: Displays the name of the dashboard. When you click on it you will redirect to the Search dashboards by name page.
- **Share dashboard (2)**: To share a dashboard or panel as a link, snapshot, or JSON file.
- **Time picker (3)**: To select relative time range options and set custom absolute time ranges. For more information on using the time picker read the Grafana [Time range controls](https://grafana.com/docs/grafana/v9.0/dashboards/time-range-controls/#common-time-range-controls) documentation.
- **Refresh dashboard (4)**: To refresh the dashboard data.
- **Refresh dashboard time interval (5)**: To select a dashboard auto-refresh time interval.
- **Zoom out time range (6)**: To view a larger time range in the dashboard or panel visualization.
- **View mode (7)**: To display the dashboard on a large screen such as a TV or a kiosk. Press ESC to return to normal mode.
- **Console (8)**: To open {{% tts %}} console.

Vertical navigation bar:

- **Grafana logo (9)**: To redirect to the Network Operations Center Overview dashboard (home dashboard).
- **Search dashboards (10)**: To search for dashboards by name. Currently, there are two dashboards available in Network Operations Center: Overview and Gateway Details.
- **Dashboards (11)**: To manage dashboards and folders 
- **Alerting (12)**: To set alert rules and notifications

Each dashboard has several panels for data visualization.

### Overview Dashboard

The Overview dashboard provides a high-level overview of the network, focusing on the gateway statistics based on historical data. 

{{< figure src="../overview-dashboard.png" alt="overview dashboard" >}}

It consists of the following panels:

### Gateways connected

The Gateways connected panel visualizes the number of gateways that have connected to the network in the selected period.

{{< figure src="../gateways-connected.png" alt="gateways connected" >}}

### Gateway connectivity

The Gateway connectivity panel is a table layout that displays the Gateway ID, Last Connect, Last Disconnect, Disconnects, Uptime, and Packet Rate of all the gateways on the network in the selected period.

{{< figure src="../gateway-connectivity.png" alt="gateway connectivity" >}}

The following is a brief description of each column in the table:

- **Gateway ID**: displays gateway IDs of all the gateways on the network. Click on the Gateway ID to access its Gateway Details Dashboard.
- **Last Connect**: represents the date and time when the gateway last connected to the Network Server.
- **Last Disconnect**: represents the date and time when the gateway last disconnected from the Network Server.
- **Disconnects**: the number of disconnects in the selected period.
- **Uptime**: is the fraction of time in which the gateway has been connected to the Network Server.
- **Packet Rate**: the total number of uplink and downlink data packets forwarded by the gateway per second.

The data can be sorted by column names and filtered by column values.

## Gateway Details Dashboard
The Gateway Details dashboard visualizes detailed insight into a gateway in the selected period. 

{{< figure src="../gateway-details-dashboard.png" alt="gateway details dashboard" >}}

It consists of the following panels:

### Uptime

This gauge chart visualizes the gateway uptime which is the fraction of the time in which the gateway has been connected to the Network Server.

{{< figure src="../uptime.png" alt="uptime" >}}

### Lowest RSSI (LoRa)

This graph visualizes data about the lowest Received Signal Strength Indicator (RSSI) in dBm for each channel. 

{{< figure src="../rssi.png" alt="lowest rssi" >}}

### Traffic

This time series graph visualizes the uplink and downlink rates in packets per second (p/s).

{{< figure src="../traffic.png" alt="traffic" >}}


### Packets per channel

This heat map visualizes the number of uplink data packets for each channel.

{{< figure src="../packets-per-channel.png" alt="packets per channel" >}}

### Channel utilization

This graph visualizes the percentage of total utilization on each channel over a time interval.

{{< figure src="../channel-utilization.png" alt="channel utilization" >}}

The Packets per channel and Channel utilization graphs can be used to find out which channels are overused and which channels are prone to collisions.


---
title: "Network Operations Center"
description: ""
distributions: ["Enterprise", "Cloud"]
new_in_version: "3.21.0"
---

The Network Operations Center provides aggregated insight in a network operated with {{% tts %}}.

<!-- more -->

The Network Operations Center stores events from {{% tts %}} in a time series database, queries aggregated data and visualizes data in a dashboard driven by Grafana. The Network Operations Center is complementary to the [Console]({{< relref "console" >}}): the Network Operations Center shows historic data (with a delay of at most 5 minutes), while the Console shows live information and allows for managing the network.

The Network Operations Center has two tiers - extended, and normal. The extended Network Operations Center shows statistics for Gateways, Applications, and End Devices. Non-extended users can only access Gateway statistics. [Contact billing](mailto:sales@thethingsindustries.com) for information about accessing the Network Operations Center.

## Accessing Network Operations Center

The Network Operations Center can only be accessed by administrators. There are two main ways to access Network Operations Center within {{% tts %}} Console:

- On the left hand menu click Network Operations Center.
- Click on your avatar/profile in the upper right corner and then choose the Network Operations Center from the drop-down menu.

The Network Operations Center Overview dashboard will open in a new web browser tab.

{{< note "Since it utilizes Grafana, the Network Operations Center is supported in the current version of the following [web browsers](https://grafana.com/docs/grafana/latest/setup-grafana/installation#supported-web-browsers)." />}}

A dashboard offers many features such as time picker, alerting, etc. For more information see the [Grafana docs](https://grafana.com/docs/grafana/v9.0/dashboards/use-dashboards/). Each dashboard has several panels for data visualization.

## Overview Dashboard

The Overview dashboard provides a high-level overview of the network, focusing on the historical data for gateway, application, and device statistics for extended users. Non-extended users see only gateway statistics. 

{{< figure src="../overview-dashboard.png" alt="overview dashboard" >}}

### Gateway Overview

The gateway overview consists of the following panels:

**Gateways connected** - a bar chart that visualizes the number of gateways that have connected to the network in the selected period.

**Gateway connectivity** - a table layout that displays the **Gateway ID**, **Last connect**, **Last disconnect**, **Disconnects**, **Uptime**, and **Packet rate** of all the gateways on the network in the selected period.

The following is a brief description of each column in the table:

- **Gateway ID**: displays gateway IDs of all the gateways on the network. Click on the Gateway ID to access its Gateway Details Dashboard.
- **Last connect**: the date and time when the gateway last connected to the Network Server.
- **Last disconnect**: the date and time when the gateway last disconnected from the Network Server.
- **Disconnects**: the number of disconnects in the selected period.
- **Uptime**: the fraction of time in which the gateway has been connected to the Network Server.
- **Packet rate**: the total number of uplink and downlink data packets forwarded by the gateway per second.

The data can be sorted by column names and filtered by column values.

### Application Overview

The application overview consists of the following panels:

**Applications active** - a bar chart that visualizes the number of applications with a device that has been activated in the network in the selected period, either in the last hour, week, or day.

**Application statistics** - a table layout that displays the **Application ID**, **Active devices**, and **Average packet error rate** of all the applications on the network in the selected period.

The following is a brief description of each column in the table:

- **Application ID**: displays application IDs of all the applications on the network.
- **Active devices**: displays the number of devices in the application which have sent an uplink message in the last hour.
- **Average packet error rate**: displays the average of the last packet error rate, over all of the end devices in an application as a percentage.

### End Device Overview

The end device overview consists of the following panels:

**End devices active** - a bar chart that visualizes the number of devices that have connected to the network (uplinked) in the selected period, either in the last hour, week, or day.

**End device statistics** - a table layout that displays the **Device ID**, **Application ID**, **Last seen**, and **Last packet error rate** of all the devices on the network in the selected period.

The following is a brief description of each column in the table:

- **Device ID**: displays IDs of all the end devices on the network.
- **Application ID**: displays the application ID for each device.
- **Last seen**: displays when the device last uplinked.
- **Last packet error rate**:  displays the ratio between the number of missing frames and the total number of frames over an hour as a percentage.

## Gateway Details Dashboard
The Gateway Details dashboard visualizes detailed insight into gateway statistics in the selected time period.

{{< figure src="../gateway-details-dashboard.png" alt="gateway details dashboard" >}}

It consists of the following panels:

**Uptime** - a gauge chart that visualizes the amount of time the gateway has been connected to the Network Server, represented as a percentage.

{{< figure src="../gateway-uptime.png" alt="uptime" >}}

**Lowest RSSI (LoRa)** - a graph that visualizes data about the lowest Received Signal Strength Indicator (RSSI) in dBm for each channel. 

{{< figure src="../gateway-rssi.png" alt="lowest rssi" >}}

**Traffic** - a time series graph that visualizes the uplink and downlink rates in packets per second.

{{< figure src="../gateway-traffic.png" alt="traffic" >}}

**Packets per channel** - a heat map that visualizes the number of uplink data packets for each channel.

{{< figure src="../gateway-packets-per-channel.png" alt="packets per channel" >}}

**Channel utilization** - a graph that visualizes the percentage of total utilization on each channel over a time interval. For example, if we have sent 60 seconds of uplinks in a time period of 15 minutes, we have 60 / (15 * 60) = ~1.66% utilization.

{{< figure src="../gateway-channel-utilization.png" alt="channel utilization" >}}

The Packets per channel and Channel utilization graphs can be used to find out which channels are overused and which channels are prone to collisions.

**Packets per data rate** - a time series graph that visualizes the number of uplinks at each data rate.

{{< figure src="../gateway-packets-per-data-rate.png" alt="" >}}

## Application Details Dashboard

The **Application Details** dashboard provides a detailed insight into application statistics in the selected time period.

{{< figure src="../application-details-full.png" alt="" >}}

It consists of the following panels:

**Gateways seen** - a chart which displays the number of packets received by each gateway and the channel they primarily use.

{{< figure src="../gateways-seen.png" alt="" >}}

**Device statistics** - a chart displaying gateway, RSSI, and packet data for each device in the application. 

{{< figure src="../device-statistics.png" alt="" >}}

**Packets per data rate** - a time series graph that visualizes the number of uplinks at each data rate.

{{< figure src="../packets-per-data-rate.png" alt="" >}}

**Packets per channel** - a heat map that visualizes the number of uplink data packets for each channel.

{{< figure src="../packets-per-channel-app.png" alt="" >}}

## End Device Details Dashboard

The **End Device Details** dashboard provides a detailed insight into end device statistics in the selected time period.

{{< figure src="../end-device-details.png" alt="" >}}

It consists of the following panels:

**Last seen** - when the device last uplinked.

{{< figure src="../last-seen-ed.png" alt="" >}}

**Session age** - how long since the device last negotiated new keys.

{{< figure src="../session-age-ed.png" alt="" >}}

**Best RSSI (LoRa)** - a chart displaying the RSSI for each channel. 

{{< figure src="../best-rssi-ed.png" alt="" >}}

**Packet error rate** - a chart displaying the historical average error rate. 

{{< figure src="../packet-error-rate-ed.png" alt="" >}}

**Channel utilization** - a chart displaying the percentage of channel utilization.

{{< figure src="../channel-utilization-ed.png" alt="" >}}

**Packets per data rate** - a time series graph that visualizes the number of uplinks at each data rate.

{{< figure src="../packets-per-data-rate-ed.png" alt="" >}}

**Packets per channel** - a heat map that visualizes the number of uplink data packets for each channel.

{{< figure src="../packets-per-channel-ed.png" alt="" >}}

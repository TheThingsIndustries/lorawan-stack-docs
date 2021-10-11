---
title: "Last Activity"
description: ""
---

This guide provides some in depth information about how the **Last activity** values in the entity overviews of the Console are calculated.

<!--more-->

## What does "Last Activity" mean?

The Console provides indicators that help you identify when the last activity from the entity was registered by the network. This section explains how these values are determined in more detail.

The Console will use the following data, whichever is most recent, to determine the **Last activity**:

### End devices

1. Starting time of the (pending) session of the end device. (Initial page load)
2. Timestamp of the latest uplink stored in the MAC state data of the end device. (Initial page load)
3. Timestamp of `ns.up.data.receive` (uplink received), `ns.up.join.receive` (join received) or `ns.up.rejoin.receive` (rejoin received). (Kept updated from the event stream)

### Gateways

1. Timestamp of the last status message received, as provided by the gateway's status endpoint. (Initial page load)
2. Timestamp of the last uplink received, as provided by the gateway's status endpoint. (Initial page load)
3. Timestamp of `gs.downlink.send` (downlink sent), `gs.uplink.receive` (uplink received) or `gs.status.receive` (status received). (Kept updated from the event stream)

### Applications

1. Timestamp of `ns.up.data.receive` (uplink received), `ns.up.join.receive` (join received) or `ns.up.rejoin.receive` (rejoin received) of any end device of this application. (Initial page load using the stored historical data of the event stream)
2. Timestamp of `ns.up.data.receive` (uplink received), `ns.up.join.receive` (join received) or `ns.up.rejoin.receive` (rejoin received) of any end device of this application. (Kept updated from the event stream)

Note that whether an initial **Last activity** value can be displayed depends on whether:

1. any relevant events have ever been sent by the end devices in the application (see end device section above)
2. any relevant events have been retained by the retention policy configured for storing events via `--events.redis.store.*` config options that the deployment is running with.

This means that when the **Last activity** value is not available for an application, it does not necessarily mean that the application's end devices did not have any activity yet. It is currently not possible to aggregate the derived **Last activity** information of all end devices in the application.

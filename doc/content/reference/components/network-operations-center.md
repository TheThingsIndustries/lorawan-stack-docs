---
title: "Network Operations Center"
description: ""
distributions: ["Enterprise", "Cloud"]
new_in_version: "3.21.0"
---

Network Operations Center provides aggregated insight in a network operated with {{% tts %}}.

<!-- more -->

Network Operations Center stores events from {{% tts %}} in a time series database, queries aggregated data and visualizes data in a dashboard driven by Grafana. Network Operations Center is complementary to the [Console]({{< relref "console" >}}): the Network Operations Center shows historic data (with a delay of at most 5 minutes), while the Console shows live information and allows for managing the network.

{{< figure src="../network-operations-center_overview.png" alt="Network Operations Center" >}}

The Network Operations Center can only be accessed by administrators.

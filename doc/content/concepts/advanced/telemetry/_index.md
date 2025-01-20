---
title: "Telemetry"
description: ""
aliases: [/telemetry, /reference/telemetry]
new_in_version: "3.27.1"
---

This section contains detailed information on telemetry collected by the [CLI]({{<ref "/concepts/features/cli">}}) and by each of {{% tts %}}\'s [components]({{<relref "components">}}).

<!--more-->

{{% tts %}}'s [CLI]({{<ref "/concepts/features/cli">}}) and [components]({{<relref "components">}}) have the ability to collect and send telemetry data to The Things Industries. We are interested in gaining insights on how users use {{% tts %}} in the field to give us a better idea on things that need improvement.

{{% tts %}} does **not** collect, store and/or transmit personally identifiable information. All information collected is **anonymised** by {{% tts %}} before transmission.

Telemetry collection is **enabled** by default for **The Things Stack Open Source** and can be easily disabled by operators using a configuration option. {{% tts %}} (and the CLI) also inform users on start up if Telemetry is enabled.

The following subsections explain what information is collected and how it is anonymised.

---
title: "AWS IoT"
description: ""
distributions: ["Cloud", "Dedicated Cloud", "Enterprise", "Sandbox"]
aliases:
  - "/integrations/pubsub/aws-iot/"
  - "/integrations/aws-iot/default/"
  - "/integrations/cloud-integrations/aws-iot/default/"
---

The key features of the Default Integration are:

- **Handling uplink and downlink messages**: {{% tts %}} publishes uplink messages to IoT Core and subscribes to downlink messages that you sent from IoT Core. Also, you receive all downlink queued, sent, failed, acknowledged and not acknowledged events in IoT Core
- **Creating devices**: manage things in IoT Core
- **Updating device state in shadow**: monitor devices using useful metrics reported in the shadow state, like signal quality and number of covering gateways

This integration comes with a AWS CloudFormation template to deploy in your AWS account.

{{< figure src="overview.svg" alt="Default integration overview" class="plain" >}}

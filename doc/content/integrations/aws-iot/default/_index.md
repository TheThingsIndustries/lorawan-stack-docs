---
title: "Default Integration"
description: ""
weight: 1
aliases:
  - "/integrations/pubsub/aws-iot/"
---

The key features of the Default Integration are:

- **Handling uplink and downlink messages**: {{% tts %}} publishes uplink messages to IoT Core and subscribes to downlink messages
- **Creating and claiming devices**: manage things in IoT Core, or claim things securely on the Global Join Server by proving ownership
- **Encrypting and decrypting message payloads**: leverage true LoRaWAN end-to-end encryption by unwrapping the AppSKey from the Join Server
- **Updating device state in shadow**: monitor devices using useful metrics reported in the shadow state, like signal quality and number of covering gateways

This integration comes with a AWS CloudFormation template to deploy in your AWS account.

![Default integration overview](./overview.svg)

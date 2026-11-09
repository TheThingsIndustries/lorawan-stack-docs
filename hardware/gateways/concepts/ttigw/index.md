# The Things Industries Gateway Protocol

> The Things Industries Gateway Protocol is a proprietary protocol developed by The Things Industries. Unlike other protocols like LoRa Basics™ Station and …

Source: https://www.thethingsindustries.com/docs/hardware/gateways/concepts/ttigw/


The Things Industries Gateway Protocol is a proprietary protocol developed by The Things Industries. Unlike other protocols like [LoRa Basics™ Station](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/lora-basics-station/) and [Semtech UDP Packet Forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/udp/), The Things Industries Gateway Protocol can only be used by gateways provisioned by The Things Industries.

The Things Industries Gateway Protocol is the most secure and bandwidth efficient protocol, designed for deploying gateways in public locations that may be using a metered backhaul like cellular.

## Security

The Things Industries Gateway Protocol allows for managing the gateway from The Things Stack in a true zero-touch fashion. Gateways supporting this protocol therefore do not require a local user interface for any local configuration, meaning that it is impossible to tamper with configuration even with physical access to the gateway. Since all configuration is done in The Things Stack, you don't need to be near the gateway for onboarding and configuration.

The Things Industries Gateway Protocol enabled gateways use a TLS client certificate signed by The Things Industries to securely authenticate with any The Things Stack deployment: Cloud, Enterprise, Sandbox and Open Source.

## Supported Gateways

[The Things Indoor Gateway Pro](https://www.thethingsindustries.com/docs/hardware/gateways/models/thethingsindoorgatewaypro/) supports The Things Industries Gateway Protocol.


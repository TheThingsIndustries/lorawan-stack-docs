# Architecture

> This section explains the architecture and components of The Things Stack

Source: https://www.thethingsindustries.com/docs/concepts/architecture/


The Things Stack follows an API driven microservice architecture, well suited for high availability and reliability.

![The Things Stack Architecture](https://www.thethingsindustries.com/docs/concepts/architecture/tts-architecture.jpeg)


The Things Stack has the following main components.

<div class="fixed-table table-tts-components">

| Component (Service)          | Short | Description                                                                                                                                                                                                                           |
| ---------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Gateway Server               | `GS`  | Maintains connections with gateways supporting the Basic Station, UDP, MQTT and gRPC protocols. It forwards uplink traffic to Network Servers directly or indirectly, and schedules downlink traffic on gateways.                     |
| Network Server               | `NS`  | Handles the LoRaWAN® network layer, including MAC commands, regional parameters and adaptive data rate (ADR).                                                                                                                         |
| Application Server           | `AS`  | Handles the LoRaWAN application layer, including uplink data decryption and decoding, downlink queuing and downlink data encoding and encryption.                                                                                     |
| Identity Server              | `IS`  | Provides the registries that store entities such as applications with their end devices, gateways, users, organizations, OAuth clients and authentication providers. It also manages access control through memberships and API keys. |
| Join Server                  | `JS`  | Handles the LoRaWAN join flow, including Network and Application Server authentication and session key generation.                                                                                                                    |
| Device Claiming Server       | `DCS` | Allows users to claim devices and gateways in a secure manner.                                                                                                                                                                        |
| Gateway Configuration Server | `GCS` | Generates configuration files for UDP gateways and manages gateway configuration and firmware updates for Basic Station and The Things Kickstarter gateways.                                                                          |
| Packet Broker Agent          | `PBA` | Connects The Things Stack with Packet Broker for exchanging traffic with other networks.                                                                                                                                              |
| Network Operations Center    | `NOC` | Provides aggregated insight in a network operated with The Things Stack.                                                                                                                                                              |
| Console                      | NA    | Is the web application used to interact with The Things Stack.                                                                                                                                                                        |

</div>

<br>
The Things Stack also has the following additional/supporting components.
<br>

<div class="fixed-table table-tts-components">

| Component (Service)       | Short | Description                                                                                                                                                             |
| ------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tenant Billing Server     | `TBS` | Manages the creation, suspension and billing of tenants using different payment backends (only for The Things Stack cloud).                                                  |
| QR Generator              | `QRG` | Generates QR codes for devices in various formats. These QR codes can be used for various purposes, including identification and device claiming to transfer ownership. |
| Device Template Converter | `DTC` | Converts data to device templates for migrating networks and importing vendor-specific data.                                                                            |

</div>

If you want more detailed information on each component, check the [components reference](https://www.thethingsindustries.com/docs/concepts/architecture/components/) section.

Now that the architecture is introduced, let's take a look at the various methods to interact with The Things Stack.


## Pages in this section

- [Components](https://www.thethingsindustries.com/docs/concepts/architecture/components/index.md): This section contains detailed descriptions of each of The Things Stack components.
- [ID and EUI Constraints](https://www.thethingsindustries.com/docs/concepts/architecture/id-eui-constraints/index.md): This reference explains how The Things Stack deals with IDs and EUIs, including regular expression requirements, uniqueness, and how deletion is handled.
- [Last Activity](https://www.thethingsindustries.com/docs/concepts/architecture/last-activity/index.md): This guide provides some in depth information about how the Last activity values in the entity overviews of the Console are calculated.


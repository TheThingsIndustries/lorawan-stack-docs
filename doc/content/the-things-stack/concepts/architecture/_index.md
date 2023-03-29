---
title: "Architecture"
description: "This section explains the architecture and components of The Things Stack"
weight: -4
---

{{% tts %}} follows a API driven microservice architecture, well suited for high availability and reliability.

{{< figure src="tts-architecture.jpeg" alt="The Things Stack Architecture" >}}

{{% tts %}} has the following main components.

<div class="fixed-table table-tts-components">

|Component (Service)|Short|Description|
|---|---|---|
|Gateway Server|`GS`| Maintains connections with gateways supporting the Basic Station, UDP, MQTT and gRPC protocols. It forwards uplink traffic to Network Servers directly or indirectly, and schedules downlink traffic on gateways. |
|Network Server|`NS`| Handles the LoRaWAN network layer, including MAC commands, regional parameters and adaptive data rate (ADR). |
|Application Server|`AS`| Handles the LoRaWAN application layer, including uplink data decryption and decoding, downlink queuing and downlink data encoding and encryption. |
|Identity Server|`IS`| Provides the registries that store entities such as applications with their end devices, gateways, users, organizations, OAuth clients and authentication providers. It also manages access control through memberships and API keys. |
|Join Server|`JS`| Handles the LoRaWAN join flow, including Network and Application Server authentication and session key generation. |
|Device Claiming Server|`DCS`| Allows users to claim devices and gateways in a secure manner. |
|Gateway Configuration Server|`GCS`| Generates configuration files for UDP gateways and manages gateway configuration and firmware updates for Basic Station and The Things Kickstarter gateways. |
|Packet Broker Agent|`PBA`| Connects The Things Stack with Packet Broker for exchanging traffic with other networks.|
|Network Operations Center|`NOC`| Provides aggregated insight in a network operated with The Things Stack. |
|Console| NA | Is the web application used to interact with The Things Stack.|

</div>

<br>
{{% tts %}} also has the following additional/supporting components.
<br>

<div class="fixed-table table-tts-components">

|Component (Service)|Short|Description|
|---|---|---|
|Tenant Billing Server|`TBS`| Manages the creation, suspension and billing of tenants using different payment backends (only for {{% tts %}} cloud).|
|QR Generator |`QRG`| Generates QR codes for devices in various formats. These QR codes can be used for various purposes, including identification and device claiming to transfer ownership..|
|Device Template Converter|`DTC`| Converts data to device templates for migrating networks and importing vendor-specific data.|

</div>

If you want more detailed information on each component, check the [components reference]({{< relref "components" >}}) section.

Now that the architecture is introduced, let's take a look at the various methods to interact with {{% tts %}}.

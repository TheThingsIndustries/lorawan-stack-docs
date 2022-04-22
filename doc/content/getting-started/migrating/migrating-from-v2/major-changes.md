---
title: Major Changes In The Things Stack
weight: 1
aliases: ["/getting-started/migrating-from-v2/major-changes", "/getting-started/migrating-from-v2/mqtt-api-comparison", "/getting-started/migrating/major-changes"]
---

Before going in detail with the migration process, this section will give you a breakdown of differences between {{% ttnv2 %}} and {{% tts %}}, along with some guidelines to make the migration process easier to manage.

## Architecture

{{% tts %}} is made up of several components, which can be run redundantly and on distributed servers to improve scalability and robustness. See [Components]({{< ref "/reference/components" >}}) for a complete overview of the different components of {{% tts %}}.

## LoRaWAN support

{{% tts %}} brings full support for all LoRaWAN versions, as well as modes to support class B and class C capabilities. 

{{% tts %}} requires the LoRaWAN version (MAC) and Regional Parameters version (LoRaWAN PHY version) to be set per end device. These default to LoRaWAN version **MAC V1.0.2** and LoRaWAN Regional Parameters version **PHY V1.0.2 Rev B** for end devices imported from {{% ttnv2 %}}, because this configuration is the most commonly used one.

End devices also need to be set with a frequency plan. You will have to choose the frequency plan corresponding to your region. See [Frequency Plans]({{< ref "/reference/frequency-plans" >}}) for a list of supported Frequency Plans and their respective IDs.

## RX1 Delay

The RX1 delay is the time after which the first receive window (RX1) opens. In the receive window, the Network Server can schedule a downlink. The second receive window (RX2) opens exactly 1 second after the first one opens. In LoRaWAN, the RX1 delay can be between 1 and 15 seconds.

Devices imported from {{% ttnv2 %}} are configured with an RX1 delay of 1 second. In all {{% tts %}} deployments, the recommended RX1 delay is 5 seconds to accommodate for high latency backhauls and/or [peering with Packet Broker]({{< ref "/getting-started/packet-broker" >}}).

See the [MAC settings guide]({{< ref "/devices/mac-settings" >}}) for more information and instructions about configuring the RX1 delay.

## MAC Commands

{{% tts %}} expects that all end devices comply with the LoRaWAN specification by default, which means that the end devices should respond to Network Server MAC command requests accordingly. If a device fails to answer a MAC Command in a timely manner, there may be disruptions to the device uplink or downlink traffic. As mentioned in the LoRaWAN specification, the Network Server of {{% tts %}} will always prioritize MAC commands over application payloads on downlink.

In case a device is not fully compliant with the LORaWAN specification, it can still work on {{% tts %}}, but it may require custom [MAC settings configuration]({{< ref "/devices/mac-settings" >}}).

### DevStatusReq

The `DevStatusReq` MAC command is sent by the Network Server periodically to check the current status of the end device. Devices are expected to send a `DevStatusAns` reply.

For end devices that ignore this MAC command, make sure to configure the `StatusTimePeriodicity` (time duration after which a `DevStatusReq` is issued by the Network Server) and `StatusCountPeriodicity` (number of frames after which a `DevStatusReq` is issued) of the device explicitly to `0`. 

{{< note >}} In the scope of [Migrating from The Things Network Stack V2]({{< ref "/getting-started/migrating/migrating-from-v2" >}}), devices exported with the `ttn-lw-migrate` tool have these MAC settings set to `0` by default. {{</ note >}}

See the [MAC settings guide]({{< ref "/devices/mac-settings" >}}) for more information.

## Gateway Coverage

[Packet Broker]({{< ref "/getting-started/packet-broker" >}}) enables peering between networks, so traffic received by one network (The Things Network V2) but intended for a different network ({{% tts %}}) can be forwarded to and from that network. With Packet Broker enabled on both {{% tts %}} and The Things Network V2, you can receive traffic on {{% tts %}} without having to re-configure any of your gateways.

Packet Broker is already enabled on The Things Network V2 (public community network) and {{% tts %}} Cloud. For {{% tts %}} Enterprise or {{% tts %}} Open Source, see how to [Connect]({{< ref "/getting-started/packet-broker/connect">}}) to Packet Broker.

For private {{% tts %}} deployments with Packet Broker disabled, you will need to re-configure your gateways to connect to {{% tts %}}, so that you can start receiving traffic from your end devices.

In order to connect a gateway to {{% tts %}}, first follow instructions for [Adding Gateways]({{< ref "/gateways/adding-gateways" >}}),then reconfigure the gateway to connect to {{% tts %}}, and regenerate its API key (if required). See [Gateways]({{< ref "/gateways" >}}) for instructions on configuring popular LoRaWAN gateways with {{% tts %}}.

## Application Data

{{% tts %}} uses a different data format for uplink and downlink traffic than {{% ttnv2 %}}.

For details on the data format of {{% ttnv2 %}}, see the documentation from [The Things Network](https://www.thethingsnetwork.org/docs/applications/mqtt/api.html).

For details on the data format of {{% tts %}}, see [Data Formats]({{% ref "/reference/data-formats" %}}) section. It uses a different schema, different names, and has much richer metadata support.

### Payload Formats

{{% ttnv2 %}} has support for payload decoders, converters, validators (for uplink) and encoders (for downlink). These can be either CayenneLPP or Javascript functions.

{{% tts %}} has support for an uplink payload formatter (similar to the payload decoder) and a downlink payload formatter (similar to the payload encoder). These can be set per application, and can even be overridden per end device. CayenneLPP and Javascript functions are still supported, and now payload formatters can also be fetched from the Device Repository.

Migrating the {{% ttnv2 %}} payload encoder and decoder to an uplink and downlink payload formatter should be straightforward. 

See [Payload Formatters]({{< ref "/integrations/payload-formatters" >}}) for more details.

### Integrations

Read the full documentation dedicated to [Integrations]({{< ref "/integrations" >}}) supported by {{% tts %}}.

#### MQTT Traffic

{{% tts %}} has a new MQTT server address, so you will need to change this address in your application accordingly. You will also need to create API keys and update your MQTT credentials. 

Read more in the [MQTT Server]({{< ref "/integrations/mqtt" >}}) section.

#### Webhooks

The HTTP Integration is now called HTTP Webhooks. The payload format, downlink endpoints, paths and security settings have changed.

Read more in the [HTTP Webhooks]({{< ref "/integrations/webhooks" >}}) section.

#### Storage Integration

{{% tts %}} supports a Storage Integration similar to {{% ttnv2 %}}. 

Read details in the [Storage Integration]({{< ref "/integrations/storage" >}}) section.

## API Comparison
{{% tts %}} provides multiple APIs. See the full [API documentation]({{< ref "/reference/api" >}}). 

For example, a comparison between The Things Industries V2 and The Things Stack MQTT API is given below.

### MQTT Connection Details

| **Category/Type** | **The Things Industries V2** | **The Things Stack** |
|---|----|---|
| MQTT Public Address | `{tenant_id}.thethings.industries:1883` | `https://thethings.example.com:1883` (replace with the URL of your deployment) |
| MQTT Public TLS Address | `{tenant_id}.thethings.industries:8883` (with using an appropriate TLS certificate) | `https://thethings.example.com:8883` |
| Username | `{application_id}` | `{application_id}@{tenant_id}` |
| Password | Application Access Key (with default rights) | Application API Key (with **Write downlink application traffic** and **Read application traffic (uplink and downlink)** rights) |
| Uplink topic (subscribe) | `{application_id}/devices/{device_id}/up` | `v3/{application id}@{tenant id}/devices/{device id}/up` |
| Downlink scheduling topic (pub) | `{application_id}/devices/{device_id}/downSchedule` (the downlink as the first or last item in a downlink queue using `schedule` key value in the payload) | Push downlink - `v3/{application id}@{tenant id}/devices/{device id}/down/push`, &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  &emsp; &emsp;  &emsp; &emsp; Replace downlink queue - `v3/{application id}@{tenant id}/devices/{device id}/down/replace` |


### Uplinks

| **Category/Type** | **The Things Industries V2** | **The Things Stack** |
|---|----|---|
| Overall Uplink Format | <details><summary>Show example</summary> {<br>"app_id": "my-app-id",  <br>"dev_id": "my-dev-id",  <br>"hardware_serial": "0102030405060708",<br>"port": 1,  <br>"counter": 2,  <br>"is_retry": false,  <br>"confirmed": false,  <br>"payload_raw": "AQIDBA==",  <br>"payload_fields": {<br>"temperature": 1.0,<br>"luminosity": 0.64<br>},,  <br>"metadata": {<br>"airtime": 46336000,  <br>"time": "1970-01-01T00:00:00.000000000Z",  <br>"frequency": 868.1,  <br>"modulation": "LORA",  <br>"data_rate": "SF7BW125",<br>"coding_rate": "4/5",  <br>"gateways": [<br>{<br>"gtw_id": "ttn-herengracht-ams", <br>"timestamp": 12345,  <br>"time": "1970-01-01T00:00:00.000000000Z", <br>"channel": 2,  <br>"rssi": -25,  <br>"snr": 5,  <br>"rf_chain": 0,  <br>"latitude": 52.1234,  <br>"longitude": 6.1234,  <br>"altitude": 6  <br>},<br>//...more if received by more gateways...<br>],<br>"latitude": 52.2345,  <br>"longitude": 6.2345,  <br>"altitude": 2  <br>}<br>} </details> | <details><summary>Show example</summary> {<br>"end_device_ids" : {<br>"device_id" : "my-dev-id",<br>"application_ids" : {<br>"application_id" : "my-app-id"<br>},<br>"dev_eui" : "0102030405060708",<br>"join_eui" : "0102030405060708",<br>"dev_addr" : "01020304"<br>},<br>"correlation_ids" : [<br>// …<br>],<br>"received_at" : "1970-01-01T00:00:00.000000000Z",<br>"uplink_message" : {<br>"session_key_id" : "AXA50tHUGUucuzS/bCGMNw==",<br>"f_cnt" : 1,<br>"frm_payload" : "AQIDBA==",<br>"decoded_payload" : {<br>"temperature": 1.0,<br>"luminosity": 0.64<br>},<br>"rx_metadata" : [ {<br>"gateway_ids" : {<br>"gateway_id" : "ttn-herengracht-ams",<br>"eui" : "9C5C8E00001A05C4"<br>},<br>"time" : "1970-01-01T00:00:00.000000000Z",<br>"timestamp" : 12345,<br>"rssi" : -25,<br>"channel_rssi" : -25,<br>"snr" : 5,<br>"uplink_token" : "ChIKEAoEZ3R3MRIInFyOAAAaBcQQ6L3Vlgk=",<br>"channel_index" : 2<br>} ],<br>"settings" : {<br>"data_rate" : {<br>"lora" : {<br>"bandwidth" : 125000,<br>"spreading_factor" : 7<br>}<br>},<br>"data_rate_index" : 5,<br>"coding_rate" : "4/5",<br>"frequency" : "868100000",<br>"timestamp" : 12345,<br>"time" : "1970-01-01T00:00:00.000000000Z"<br>},<br>"received_at" : "1970-01-01T00:00:00.000000000Z"<br>,"consumed_airtime": "0.051321s",<br>"locations": {<br>"user": {<br>"latitude": 37.97155556731436,<br>"longitude": 23.72678801175413,<br>"altitude": 10,<br>"source": "SOURCE_REGISTRY"<br>}<br>},}<br>} </details> |
| Gateway fields        | `metadata.gateways` - This object includes gateway details| `uplink_message.rx_metadata` - This object includes gateway details|
|                       | `metadata.gateways.timestamp` - Timestamp when the gateway received the message (microseconds)| `uplink_message.rx_metadata.timestamp` - Gateway concentrator timestamp when the Rx finished (microseconds) |
|                       | `metadata.gateways.time` - Time when the gateway received the message | `uplink_message.rx_metadata.time` - Time when the gateway received the message|
|                       | `metadata.gateways.channel` - Channel where the gateway received the message| As an alternative `channel_index` is `available.uplink_message.rx_metadata.channel_index` - Index of the gateway channel that received the message |
|                       | `metadata.gateways.rssi` - Signal strength of the received message| `uplink_message.rx_metadata.rssi` - Signal strength of the received message|
|                       | `metadata.gateways.snr` - Signal to noise ratio of the received message| `uplink_message.rx_metadata.snr` - Signal to noise ratio of the received message|
|                       | `metadata.gateways.rf_chain` - RF chain where the gateway received the message| Not available |
|                       | `metadata.gateways.latitude` - Latitude of the gateway reported in its status updates | Not available |
|                       | `metadata.gateways.longitude` - Longitude of the gateway| Not available |
|                       | `metadata.gateways.altitude` - Altitude of the gateway| Not available |
|                       | Not available | `uplink_message.rx_metadata.channel_rssi` - Received signal strength indicator of the channel (dBm)|
|                       | Not available | `uplink_message.rx_metadata.uplink_token` - Uplink token injected by gateway, Gateway Server or Network Server |
|                       |||
| Uplink Metadata       | `metadata` - This object includes metadata| `uplink_message` - This object includes metadata |
|                       | `metadata.airtime` | `uplink_message.consumed_airtime` - Formatted as a string, with a suffix for the unit used (for example, `"0.051321s"` is 0.051321 seconds) |
|                       | `metadata.time` - Time when the server received the message| `uplink_message.received_at` - Server time when the Application Server received the message |
|                       | `metadata.frequency` - Frequency at which the message was sent| `uplink_message.settings.frequency` - Frequency (Hz)|
|                       | `metadata.modulation` - Modulation that was used (LoRa or FSK) | Not available, but as an alternative the modulation can be derived from `settings.data_rate` |
|                       | `metadata.data_rate` - Data rate that was used (LoRa only) | `uplink_message.settings.data_rate` - Data rate of LoRa or FSK |
|                       | `metadata.bit_rate` - Bit rate that was used (FSK only) | `uplink_message.settings.data_rate.fsk.bit_rate` - Bit rate that was used (FSK only) |
|                       | `metadata.coding_rate` - Coding rate that was used| `uplink_message.settings.coding_rate` - LoRa coding rate |
|                       | `metadata.latitude`| `uplink_message.locations.user.latitude` - Latitude of the device |
|                       | `metadata.longitude` | `uplink_message.locations.user.longitude` - Longitude of the device|
|                       | `metadata.altitude` | `uplink_message.locations.user.altitude` - Altitude of the device |
|                       | Not available | `uplink_message.locations.user.source` - Location source|
|                       | `metadata.data_rate_index` - Not available| `uplink_message.data_rate_index` - LoRaWAN data rate index |
|                       | `metadata.payload_raw` - Base64 encoded payload: [0x01, 0x02, 0x03, 0x04] | `uplink_message.frm_payload` - Frame payload (Base64)|
|                       | `port` - LoRaWAN FPort| `uplink_message.f_port` - LoRaWAN FPort |
|                       | `counter` - LoRaWAN frame counter| `uplink_message.f_cnt` - LoRaWAN frame counter |
|                       | Not available | `uplink_message.session_key_id` - Join Server issued identifier for the session keys used by this uplink |
|                       |||
| Common fields         | `app_id` | `end_device_ids.application_ids.application_id` |
|                       | `dev_id` | `end_device_ids.device_id` |
|                       | `hardware_serial` - In case of LoRaWAN: the `DevEUI` | `end_device_ids.dev_eui` |
|                       | `confirmed` - `true` if this message was a confirmed message | Not available |
|                       | Not available | `end_device_ids.join_eui` |
|                       | Not available | `end_device_ids.dev_addr` |
|                       | | |
| Uplink Payload fiedls | `payload_fields` - Object containing the results from the payload functions (left out when empty) | `uplink_message.decoded_payload` |
| Correlation IDs       | Not available | `correlation_ids` |

### Downlinks

| **Category/Type** | **The Things Industries V2** | **The Things Stack** |
|---|----|---|
| Downlink message overall format | <details><summary>Show example</summary>{<br>"port": 1, <br>"confirmed": false,<br>"payload_raw": "AQIDBA==", <br>"schedule": "replace",<br>}<br><br> or use payload_fields instead <br><br> {<br>"port": 1,<br>"confirmed": false,<br>"payload_fields": {<br>"led": true<br>},<br>"schedule": "replace", // allowed values: "replace" (default), "first", "last"} </details> | <details><summary>Show example</summary> {<br>"downlinks": [{<br>"f_port": 15,<br>"frm_payload": "vu8=",<br>"priority": "HIGH",<br>"confirmed": true,<br>"correlation_ids": ["my-correlation-id"]<br>}]<br>} </details> |
| Individual fields comparison    | `port` | `f_port` |
| | `confirmed` | `confirmed` |
| | `payload_raw` | `frm_payload` |
| | `schedule` | Replace and push topics are available as an alternative |
| | Not available | `priority` - You can specify `LOWEST`, `LOW`, `BELOW_NORMAL`, `NORMAL`, `ABOVE_NORMAL`, `HIGH` and `HIGHEST` (`LOWEST` is a default if not specified) |
| | Not available | `correlation_ids` - You can add multiple custom correlation IDs, for example to reference events or identifiers of your application |
| | `payload_fields` | Not available |

### References

[The Things Industries V2 MQTT API Documentation](https://www.thethingsnetwork.org/docs/applications/mqtt/api.html)

[The Things Stack MQTT API Documentation]({{< ref "/integrations/mqtt" >}})

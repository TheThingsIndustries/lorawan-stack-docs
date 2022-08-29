---
title: "Format"
description: ""
weight: 2
---

Webhook templates are described using the [YAML](https://yaml.org/) language. Their format is very closely related to that of a normal webhook integration, but with additional fields added.

<!--more-->

## Service Description

All of the webhook templates must contain the following fields which describe the service provided by the template to the user.

- `template-id`: The unique identifier of the template.
- `name`: The (human readable) name of the service.
- `description`: The description of the service.
- `logo-url`: The URL of the logo of the service.
- `info-url`: The URL of the main page of the service.
- `documentation-url`: The URL of the documentation of the service.

The difference between `documentation-url` and `info-url` is that `info-url` should lead to the home page of the service (i.e. `https://www.thethingsnetwork.org/`), while `documentation-url` should lead directly to the location of the documentation (i.e. `https://www.thethingsnetwork.org/docs/applications/example/`).

## Template Fields

Templates can contain fields which will be filled by the user on instantiation. The fields are provided as a list named `fields` in the body of the webhook template and contain the following fields:

- `id`: The unique identifier of the field. The ID is only referenced internally and not shown to the user.
- `name`: The (human readable) name of the field.
- `description`: The description of the field.
- `secret`: Controls if the contents of the field should be hidden. To be used in the case of secrets such as passwords, tokens or API keys.
- `default-value`: The value which should be pre filled for the user initially.

For more information on the instantiation process, see [Instantiation]({{< relref "instantiation.md" >}}).

## Endpoint

The endpoint of the webhook can be configured using the following fields:

- `format`: The format which the endpoint expects. Currently `json` and `protobuf` are supported.
- `headers`: A mapping between the names of the headers and their values. The values can contain template fields.
- `create-downlink-api-key`: Controls if an API Key specific to the service should be created on instantiation.
- `base-url`: The base URL of the endpoint.

The message paths are provided in the `paths` object which can contain the following message types:

- `uplink-message`: The path to which uplink messages will be sent. Can contain template fields.
- `join-accept`: The path to which join accept messages will be sent. Can contain template fields.
- `downlink-ack`: The path to which downlink acknowledgements will be sent. Can contain template fields.
- `downlink-nack`: The path to which downlink not-acknowledged messages will be sent. Can contain template fields.
- `downlink-sent`: The path to which downlink sent will be sent. Can contain template fields.
- `downlink-failed`: The path to which downlink failures will be sent. Can contain template fields.
- `downlink-queued`: The path to which downlink queued status will be sent. Can contain template fields.
- `downlink-queue-invalidated`: The path to which downlink queue invalidated event will be sent. Can contain template fields. This is only used when the upstream platform carries out LoRaWAN `FRMPayload` encryption.
- `location-solved`: The path to which the location of the device will be sent when resolved. Can contain template fields.
- `service-data`: The path to which the data from integrations is sent. Data from services such as LoRa Cloud DAS and GLS will be sent here, for example. Can contain template fields.

{{< note >}} Not all of the messages types must be handled by the service. By omitting the field in the `paths` object, the message type will be disabled in the final webhook and the related messages will not be passed to the endpoint. {{</ note >}}

## Field Mask {{< new-in-version "3.21.1" >}}

Field mask can be configured by providing field paths as a list named `field-mask` in the body of the webhook template and contain the following paths:

```
correlation_ids
end_device_ids
end_device_ids.application_ids
end_device_ids.application_ids.application_id
end_device_ids.dev_addr
end_device_ids.dev_eui
end_device_ids.device_id
end_device_ids.join_eui
received_at
simulated
up
up.downlink_ack
up.downlink_ack.class_b_c
up.downlink_ack.class_b_c.absolute_time
up.downlink_ack.class_b_c.gateways
up.downlink_ack.confirmed
up.downlink_ack.correlation_ids
up.downlink_ack.decoded_payload
up.downlink_ack.decoded_payload_warnings
up.downlink_ack.f_cnt
up.downlink_ack.f_port
up.downlink_ack.frm_payload
up.downlink_ack.priority
up.downlink_ack.session_key_id
up.downlink_failed
up.downlink_failed.downlink
up.downlink_failed.downlink.class_b_c
up.downlink_failed.downlink.class_b_c.absolute_time
up.downlink_failed.downlink.class_b_c.gateways
up.downlink_failed.downlink.confirmed
up.downlink_failed.downlink.correlation_ids
up.downlink_failed.downlink.decoded_payload
up.downlink_failed.downlink.decoded_payload_warnings
up.downlink_failed.downlink.f_cnt
up.downlink_failed.downlink.f_port
up.downlink_failed.downlink.frm_payload
up.downlink_failed.downlink.priority
up.downlink_failed.downlink.session_key_id
up.downlink_failed.error
up.downlink_failed.error.attributes
up.downlink_failed.error.cause
up.downlink_failed.error.cause.attributes
up.downlink_failed.error.cause.correlation_id
up.downlink_failed.error.cause.message_format
up.downlink_failed.error.cause.name
up.downlink_failed.error.cause.namespace
up.downlink_failed.error.code
up.downlink_failed.error.correlation_id
up.downlink_failed.error.details
up.downlink_failed.error.message_format
up.downlink_failed.error.name
up.downlink_failed.error.namespace
up.downlink_nack
up.downlink_nack.class_b_c
up.downlink_nack.class_b_c.absolute_time
up.downlink_nack.class_b_c.gateways
up.downlink_nack.confirmed
up.downlink_nack.correlation_ids
up.downlink_nack.decoded_payload
up.downlink_nack.decoded_payload_warnings
up.downlink_nack.f_cnt
up.downlink_nack.f_port
up.downlink_nack.frm_payload
up.downlink_nack.priority
up.downlink_nack.session_key_id
up.downlink_queue_invalidated
up.downlink_queue_invalidated.downlinks
up.downlink_queue_invalidated.last_f_cnt_down
up.downlink_queue_invalidated.session_key_id
up.downlink_queued
up.downlink_queued.class_b_c
up.downlink_queued.class_b_c.absolute_time
up.downlink_queued.class_b_c.gateways
up.downlink_queued.confirmed
up.downlink_queued.correlation_ids
up.downlink_queued.decoded_payload
up.downlink_queued.decoded_payload_warnings
up.downlink_queued.f_cnt
up.downlink_queued.f_port
up.downlink_queued.frm_payload
up.downlink_queued.priority
up.downlink_queued.session_key_id
up.downlink_sent
up.downlink_sent.class_b_c
up.downlink_sent.class_b_c.absolute_time
up.downlink_sent.class_b_c.gateways
up.downlink_sent.confirmed
up.downlink_sent.correlation_ids
up.downlink_sent.decoded_payload
up.downlink_sent.decoded_payload_warnings
up.downlink_sent.f_cnt
up.downlink_sent.f_port
up.downlink_sent.frm_payload
up.downlink_sent.priority
up.downlink_sent.session_key_id
up.join_accept
up.join_accept.app_s_key
up.join_accept.app_s_key.encrypted_key
up.join_accept.app_s_key.kek_label
up.join_accept.app_s_key.key
up.join_accept.invalidated_downlinks
up.join_accept.pending_session
up.join_accept.received_at
up.join_accept.session_key_id
up.location_solved
up.location_solved.attributes
up.location_solved.location
up.location_solved.location.accuracy
up.location_solved.location.altitude
up.location_solved.location.latitude
up.location_solved.location.longitude
up.location_solved.location.source
up.location_solved.service
up.service_data
up.service_data.data
up.service_data.service
up.uplink_message
up.uplink_message.app_s_key
up.uplink_message.app_s_key.encrypted_key
up.uplink_message.app_s_key.kek_label
up.uplink_message.app_s_key.key
up.uplink_message.confirmed
up.uplink_message.consumed_airtime
up.uplink_message.decoded_payload
up.uplink_message.decoded_payload_warnings
up.uplink_message.f_cnt
up.uplink_message.f_port
up.uplink_message.frm_payload
up.uplink_message.last_a_f_cnt_down
up.uplink_message.locations
up.uplink_message.network_ids
up.uplink_message.network_ids.cluster_address
up.uplink_message.network_ids.cluster_id
up.uplink_message.network_ids.net_id
up.uplink_message.network_ids.tenant_address
up.uplink_message.network_ids.tenant_id
up.uplink_message.received_at
up.uplink_message.rx_metadata
up.uplink_message.session_key_id
up.uplink_message.settings
up.uplink_message.settings.coding_rate
up.uplink_message.settings.concentrator_timestamp
up.uplink_message.settings.data_rate
up.uplink_message.settings.data_rate.modulation
up.uplink_message.settings.data_rate.modulation.fsk
up.uplink_message.settings.data_rate.modulation.fsk.bit_rate
up.uplink_message.settings.data_rate.modulation.lora
up.uplink_message.settings.data_rate.modulation.lora.bandwidth
up.uplink_message.settings.data_rate.modulation.lora.spreading_factor
up.uplink_message.settings.data_rate.modulation.lrfhss
up.uplink_message.settings.data_rate.modulation.lrfhss.coding_rate
up.uplink_message.settings.data_rate.modulation.lrfhss.modulation_type
up.uplink_message.settings.data_rate.modulation.lrfhss.operating_channel_width
up.uplink_message.settings.downlink
up.uplink_message.settings.downlink.antenna_index
up.uplink_message.settings.downlink.invert_polarization
up.uplink_message.settings.downlink.tx_power
up.uplink_message.settings.enable_crc
up.uplink_message.settings.frequency
up.uplink_message.settings.time
up.uplink_message.settings.timestamp
up.uplink_message.version_ids
up.uplink_message.version_ids.band_id
up.uplink_message.version_ids.brand_id
up.uplink_message.version_ids.firmware_version
up.uplink_message.version_ids.hardware_version
up.uplink_message.version_ids.model_id
up.uplink_message.version_ids.serial_number
up.uplink_message.version_ids.vendor_id
up.uplink_message.version_ids.vendor_profile_id
```

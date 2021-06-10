---
title: 'Telemetry'
description: ''
---

{{% tts %}} exports [Prometheus](https://prometheus.io/) telemetry on the `/metrics` endpoint. This reference gives an overview of the most important metrics.

<!--more-->

{{< warning >}} Metrics are not covered by our compatibility commitment. This means that metrics may be changed or removed in major, minor, or patch releases. This page only lists metrics that are considered relatively stable, but even these metrics may be changed. {{</ warning >}}

## Process and Go Metrics

{{% tts %}} uses the [Prometheus instrumentation library for Go](https://github.com/prometheus/client_golang/) that includes a collector for the state of the process (on Linux) and metrics from the Go runtime.

## gRPC metrics

{{% tts %}} uses the [Prometheus gRPC instrumentation library](https://github.com/grpc-ecosystem/go-grpc-prometheus) that exposes metrics about gRPC method calls.

- `grpc_server_conns_opened_total` and `grpc_server_conns_closed_total` can be used to see how many gRPC connections to {{% tts %}} are opened, and how many are currently open.
- `grpc_server_started_total` and `grpc_server_handled_total` can be used to see how many RPCs to {{% tts %}} are started, active and finished (including response code).
- `grpc_server_msg_sent_total` and `grpc_server_msg_received_total` can be used to see how many RPC messages are sent/received by the server.

Similar metrics exist for gRPC client connections opened by {{% tts %}}, and RPCs made by {{% tts %}}.

## General Metrics

- {{< distributions "Enterprise" >}} `ttn_lw_license_expiry_seconds` can be used to keep track of license expiry 
- {{< new-in-version "3.13.1" >}} `ttn_lw_log_messages_total` can be used to track the log messages written by different log namespaces at different log levels. 
  - Before version 3.13.1 this metric was called `ttn_lw_log_log_messages_total`.
- `ttn_lw_events_publishes_total` can be used to track the published events by event type.
- `ttn_lw_events_channel_dropped_total` can be used to watch for dropped events, which typically indicates that a consumer (such as a user's web browser) can't keep up.

For the Gateway Server:

- `ttn_lw_gs_connected_gateways` indicates the number of connected gateways.
- `ttn_lw_gs_uplink_received_total` indicates the number of uplink messages received from gateways.
- `ttn_lw_gs_downlink_sent_total` indicates the number of downlink messages sent to gateways.
- `ttn_lw_gs_status_received_total` indicates the number of status messages received from gateways.
- `ttn_lw_gs_uplink_forwarded_total` indicates the number of uplink messages forwarded to the Network Server or Packet Broker.
- `ttn_lw_gs_uplink_dropped_total` indicates the number of uplink messages that are dropped for various reasons.

For the Packet Broker Agent: {{< new-in-version "3.11.2" >}}

- `ttn_lw_pba_uplink_received_total` indicates the number of uplink messages received from Packet Broker (as a home network).
- `ttn_lw_pba_downlink_forwarded_total` indicates the number of downlink messages sent to Packet Broker (as a home network).
- `ttn_lw_pba_downlink_received_total` indicates the number of downlink messages received from Packet Broker (as a forwarder).
- `ttn_lw_pba_uplink_forwarded_total` indicates the number of uplink messages sent to Packet Broker (as a forwarder).

For the Network Server:

- `ttn_lw_ns_uplink_received_total` indicates the number of uplink messages received from the Gateway Server or Packet Broker.
- `ttn_lw_ns_uplink_duplicates_total` indicates the number of duplicate uplinks that are merged into a single uplink.
- `ttn_lw_ns_uplink_processed_total` indicates the number of processed uplinks, meaning uplinks that are matched to a device.
- `ttn_lw_ns_uplink_forwarded_total` indicates the number of uplinks forwarded to an Application Server.
- `ttn_lw_ns_uplink_dropped_total` indicates the number of uplinks that are dropped for various reasons.
- `ttn_lw_ns_downlink_attempted_total` indicates the number of downlink attempts.
- `ttn_lw_ns_downlink_forwarded_total` indicates the number of downlinks forwarded to the Gateway Server.
- `ttn_lw_ns_uplink_gateways` is a histogram that indicates the number of gateways that received a given uplink.

For the Application Server:

- `ttn_lw_as_subscriptions_started_total` and `ttn_lw_as_subscriptions_stopped_total` indicate the number of started/stopped uplink subscriptions from integrations and external applications.
- `ttn_lw_as_pubsub_integrations_started_total` and `ttn_lw_as_pubsub_integrations_stopped_total` indicate the number of started/stopped pub/sub integrations.
- `ttn_lw_as_uplink_received_total` indicates the number of uplink messages received from the Network Server.
- `ttn_lw_as_uplink_forwarded_total` indicates the number of uplink messages forwarded to integrations and external applications.
- `ttn_lw_as_uplink_dropped_total` indicates the number of uplink messages dropped for various reasons.
- `ttn_lw_as_downlink_received_total` indicates the number of downlink messages received from integrations and external applications.
- `ttn_lw_as_downlink_forwarded_total` indicates the number of downlink messages forwarded to the Network Server.
- `ttn_lw_as_downlink_dropped_total` indicates the number of downlink messages dropped for various reasons.
- `ttn_lw_javascript_run_latency_seconds` is a histogram that indicates the duration of executing JavaScript payload formatters.

For the Join Server:

- `ttn_lw_js_join_accepted_total` and `ttn_lw_js_join_rejected_total` indicate the number of accepted and rejected join requests.

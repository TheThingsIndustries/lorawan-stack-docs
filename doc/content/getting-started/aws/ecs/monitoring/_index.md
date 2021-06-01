---
title: "Monitoring"
description: ""
weight: 5
---

This page describes how you can monitor a {{% tts %}} deployment on AWS ECS.

<!--more-->

One of the [deployment steps]({{< ref "../deployment" >}}) was to deploy the "Monitoring" stack. This installed [Prometheus](https://prometheus.io/) into your cluster.

The provided Prometheus image already comes with a number of recording and alerting rules that are useful for most (if not all) deployments.

## Alerts

For all ECS services that form your {{% tts %}} deployment, the following alerts are defined:

- `NoIdentityServers` (The cluster does not have any Identity Server instances). This means that there are no ECS tasks for the Identity Server component.
- `SomeIdentityServersDown` (Some Identity Server instances of The Things Enterprise Stack are down). This means that some of the Identity Server instances are not responding. In many cases the deployment will still be online, as requests are routed to other instances.
- `AllIdentityServersDown` (All Identity Server instances of The Things Enterprise Stack are down). This means that none of the Identity Server instances is responding.

Similar alerts are defined for the Gateway Server, Network Server, Application Server, Join Server, etc.

For the deployment as a whole, the following alerts are defined:

- `InternalServerErrors` (An instance is returning responses with 500 codes).
- `UpcomingCertificateExpiry` (A TLS certificate expires in less than 14 days).
- `CertificateExpired` (A TLS certificate has expired).
- `IncreasedLatency` (An instance is experiencing increased latency).
- `UpcomingLicenseExpiry` (The Things Enterprise Stack license expires in less than 14 days).
- `LicenseExpired` (The Things Enterprise Stack license expired).

For several components there are alerts that fire when traffic patterns deviate from "usual" traffic:

- `GatewayServerReceivedUplinkTrafficDrop` (The Gateway Server of The Things Enterprise Stack received less uplink traffic than usual). This alert includes the protocol (UDP, MQTT, WS), so make sure to look at that when this alert fires.
- `GatewayServerForwardedUplinkTrafficDrop` (The Gateway Server of The Things Enterprise Stack forwarded less uplink traffic than usual). This alert includes the host (cluster, packet broker), so make sure to look at that when this alert fires. If the host is "cluster", there may be an issue with the Network Server. If the host is "packetbroker", there may be an issue with the Packet Broker Agent.
- `NetworkServerReceivedUplinkTrafficDrop` (The Network Server of The Things Enterprise Stack received less uplink traffic than usual).
- `ApplicationServerReceivedUplinkTrafficDrop` (The Application Server of The Things Enterprise Stack received less uplink traffic than usual).

Similar alerts for downlink traffic will be added in the future.

## Metrics

In addition to the [metrics exported by {{% tts %}}]({{< ref "/reference/telemetry" >}}), the provided Prometheus image adds a number of recording rules that provide the input for the previously described alerting rules, but can also be useful in your dashboards.

For all services the following metrics are recorded:

- `ttn_lw_log_messages_rate` records the rate of log messages by job (service), namespace and level. This can be useful for monitoring warning and error rates. {{< new-in-version "3.13.1" >}}
  - Before version 3.13.1 this metric was called `ttn_lw_log_log_messages_rate`.
- `ttn_lw_events_publishes_rate` records the rate of published events by event name.

For the Gateway Server:

- `ttn_lw_gs_connected_gateways:by_protocol` and `ttn_lw_gs_connected_gateways:by_tenant_id` record the number of connected gateways in the cluster.
- `ttn_lw_gs_uplink_received_rate:by_protocol` and `ttn_lw_gs_uplink_received_rate:by_tenant_id` record the rate of uplink messages received by the Gateway Server.
- `ttn_lw_gs_downlink_sent_rate:by_protocol` and `ttn_lw_gs_downlink_sent_rate:by_tenant_id` record the rate of downlink messages sent by the Gateway Server.
- `ttn_lw_gs_status_received_rate:by_protocol` and `ttn_lw_gs_status_received_rate:by_tenant_id` record the rate of status message received by the Gateway Server.
- `ttn_lw_gs_uplink_forwarded_rate:by_host` and `ttn_lw_gs_uplink_forwarded_rate:by_tenant_id` record the rate of messages forwarded to the Network Server or Packet Broker. The `by_tenant_id` only considers messages forwarded to the Network Server.
- `ttn_lw_gs_uplink_dropped_rate:by_host` and `ttn_lw_gs_uplink_dropped_rate:by_tenant_id` record the rate of messages that are dropped for various reasons.

For some of these metrics, there are also variants with `:avg` and `:stddev` suffixes that can be used for anomaly detection, and are therefore also used in alerting rules.

For the Packet Broker Agent: {{< new-in-version "3.11.2" >}}

- `ttn_lw_pba_uplink_received_rate` record the rate of uplink messages received from Packet Broker (as a home network).
- `ttn_lw_pba_downlink_forwarded_rate` record the rate of downlink messages sent to Packet Broker (as a home network).
- `ttn_lw_pba_downlink_received_rate` record the rate of downlink messages received from Packet Broker (as a forwarder).
- `ttn_lw_pba_uplink_forwarded_rate` record the rate of uplink messages sent to Packet Broker (as a forwarder).

For the Network Server:

- `ttn_lw_ns_uplink_received_rate` and `ttn_lw_ns_uplink_received_rate:by_tenant_id` record the rate of uplink messages received from the Gateway Server or Packet Broker.
- `ttn_lw_ns_uplink_duplicates_rate:by_tenant_id` records the rate of duplicate uplinks that are merged into a single uplink.
- `ttn_lw_ns_uplink_processed_rate` and `ttn_lw_ns_uplink_processed_rate:by_tenant_id` record the rate of processed uplinks, meaning uplinks that are matched to a device.
- `ttn_lw_ns_uplink_forwarded_rate` and `ttn_lw_ns_uplink_forwarded_rate:by_tenant_id` record the rate of uplinks forwarded to an Application Server.
- `ttn_lw_ns_uplink_dropped_rate:by_tenant_id` records the rate of uplinks that are dropped for various reasons.
- `ttn_lw_ns_downlink_attempted_rate` and `ttn_lw_ns_downlink_attempted_rate:by_tenant_id` record the rate of attempted downlink messages; `ttn_lw_ns_downlink_forwarded_rate` and `ttn_lw_ns_downlink_forwarded_rate:by_tenant_id` the rate of forwarded downlink messages.

For some of these metrics, there are also variants with `:avg` and `:stddev` suffixes that can be used for anomaly detection, and are therefore also used in alerting rules.

For the Application Server:

- `ttn_lw_as_subscriptions:by_protocol` and `ttn_lw_as_subscriptions:by_tenant_id` record the number of active uplink subscriptions from integrations and external applications.
- `ttn_lw_as_pubsub_integrations:by_provider` and `ttn_lw_as_pubsub_integrations:by_tenant_id` record the number of active pub/sub integrations.
- `ttn_lw_as_uplink_received_rate` and `ttn_lw_as_uplink_received_rate:by_tenant_id` record the rate of uplink messages received from the Network Server.
- `ttn_lw_as_uplink_forwarded_rate` and `ttn_lw_as_uplink_forwarded_rate:by_tenant_id` record the rate of uplink messages forwarded to integrations and external applications.
- `ttn_lw_as_uplink_dropped_rate:by_tenant_id` records the rate of uplink messages dropped for various reasons.
- `ttn_lw_as_downlink_received_rate` and `ttn_lw_as_downlink_received_rate:by_tenant_id` record the rate of downlink messages received from integrations and external applications.
- `ttn_lw_as_downlink_forwarded_rate` and `ttn_lw_as_downlink_forwarded_rate:by_tenant_id` record the rate of downlink messages forwarded to the Network Server.
- `ttn_lw_as_downlink_dropped_rate:by_tenant_id` records the rate of downlink messages dropped for various reasons.

For some of these metrics, there are also variants with `:avg` and `:stddev` suffixes that can be used for anomaly detection, and are therefore also used in alerting rules.

For the Join Server:

- `ttn_lw_js_join_accepted_rate:by_tenant_id` and `ttn_lw_js_join_rejected_rate:by_tenant_id` record the rate of accepted and rejected join requests.

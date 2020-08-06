---
title: "Cloud Hosted"
description: ""
distribution: ["Cloud Hosted"]
---

Cloud Hosted has special MQTT addressing to support multi tenancy. While most of the instructions in the [overview]({{< relref src=".." >}}) apply, the following instructions are unique.

## MQTT Login Credentials

Login using an MQTT client with the application ID and tenant ID `app1@tenant1` as user name and your generated API key as password.

Replace all instances of username `app` with username `app@tenant`.

 ```bash
 # Tip: when using `mosquitto_sub`, pass the `-d` flag to see the topics message
s get published on.
 # For example:
$ mosquitto_sub -h thethings.example.com -t "#" -u "app1@tenant1" -P "NNSXS.VEEBURF3KR77ZR.." -d
 ```

## Subscribing to Upstream Traffic

The Cloud Hosted application server publishes on the following topics:

- `v3/{application id}@{tenant id}/devices/{device id}/join`
- `v3/{application id}@{tenant id}/devices/{device id}/up`
- `v3/{application id}@{tenant id}/devices/{device id}/down/queued`
- `v3/{application id}@{tenant id}/devices/{device id}/down/sent`
- `v3/{application id}@{tenant id}/devices/{device id}/down/ack`
- `v3/{application id}@{tenant id}/devices/{device id}/down/nack`
- `v3/{application id}@{tenant id}/devices/{device id}/down/failed`
- `v3/{application id}@{tenant id}/devices/{device id}/service/data`

With your MQTT client subscribed, when a device joins the network, a `join` message gets published. For example, for a device ID `dev1`, the message will be published on the topic `v3/app1@tenant1/devices/dev1/join`.

When the device sends an uplink message, a message will be published to the topic `v3/{application id}@{tenant id}/devices/{device id}/up`.

## Publishing Downlink Traffic

Downlinks can be scheduled on Cloud Hosted by publishing the message to the topic `v3/{application id}@{tenant id}/devices/{device id}/down/push`.

For example, to send an unconfirmed downlink message to the device `dev1` in application `app1` in tenant `tenant1` with the hexadecimal payload `BE EF` on `FPort` 15 with normal priority, use the topic `v3/app1@tenant1/devices/dev1/down/push` with the following contents:

 For example, to send an unconfirmed downlink message to the device `dev1` in app `app1`:

 ```bash
 # If you use `mosquitto_pub`, use the following command:
 $ mosquitto_pub -h thethings.example.com \
   -t "v3/app1@tenant1/devices/dev1/down/push" \
   -u "app1@tenant1" -P "NNSXS.VEEBURF3KR77ZR.." \
   -m '{"downlinks":[{"f_port": 15,"frm_payload":"vu8=","priority": "NORMAL"}]}' \
   -d`
 ```

Once the downlink gets acknowledged, a message is published to the topic `v3/{application id}@{tenant id}/devices/{device id}/down/ack`.

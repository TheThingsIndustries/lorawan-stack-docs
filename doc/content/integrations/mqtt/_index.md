---
title: "MQTT Server"
description: ""
aliases: [/guides/getting-started/mqtt]
weight: 30
---

{{% tts %}} exposes an MQTT server to work with streaming events. This section explains how to connect an MQTT client and subscribe to uplinks or publish downlinks.

<!--more-->

{{< note >}} {{% tts %}} supports the [MQTT Standard Version 3.1.1](http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.pdf) and QoS 0 only. {{</ note >}}

## Note on Using the Tenant ID

For all {{% tts %}} deployments except the Open Source, application IDs and other endpoints include the tenant ID. For the integration with {{% tts %}} MQTT Server on these deployments this means two things:

- The **Username** used for connecting will be of format `{application id}@{tenant id}` (see the section below)
- The MQTT topics will contain `{application id}@{tenant id}` (see [MQTT Clients]({{< ref "/integrations/mqtt#mqtt-clients" >}}) section) 

For example, for an application `app1` added on The Things Network, you would use `app1@ttn`, because `ttn` is a tenant ID for The Things Network.

For {{% tts %}} Open Source deployment these endpoints do not include the tenant ID. Hence, instead of `{application id}@{tenant id}`, you would be using only `{application id}` for **Username** and in topics. 

## Creating an API Key

In order to use the MQTT server you need to create a new API key to authenticate. The Console provides the required connection information and can be used to create an API key for authentication. In your application select the **MQTT** submenu from the **Integrations** side menu.

{{< figure src="mqtt-integration.png" alt="MQTT connection information" >}}

You can now click on the **Generate new API key** button in order to generate an API key which can be used to send and receive traffic from MQTT server.

{{< figure src="mqtt-key-created.png" alt="MQTT API key created" >}}

{{< note >}} Make sure to copy your API key now, since it will no longer be visible after leaving the page for security reasons. {{</ note >}}

Keep in mind that this example shows the MQTT Server information for {{% tts %}} Open Source. If you are using a different deployment, make sure your read a [Note on Using the tenant ID]({{< ref "/integrations/mqtt#note-on-using-the-tenant-id" >}}).

The information shown on the image above is enough for you to be able to connect to {{% tts %}} MQTT Server using an arbitrary MQTT client. Keep reading to find out how.

## MQTT Clients

There are many available MQTT clients you can use to connect to {{% tts %}} MQTT Server. See [Integrations with MQTT Clients]({{< ref "/integrations/mqtt/mqtt-clients" >}}) section for detailed instructions on how the integrate with the most popular ones.

In this section, we focus on the available topics that the MQTT Server is exposing and provide short examples of their usage. In general, some topics are used for subscribing to upstream traffic, while others are used for publishing downlink traffic. 

In the examples below, we use the `mosquitto_pub` and `mosquitto_sub` clients.

## Subscribing to Upstream Traffic

The Application Server publishes uplink traffic on the following topics:

- `v3/{application id}@{tenant id}/devices/{device id}/join`
- `v3/{application id}@{tenant id}/devices/{device id}/up`
- `v3/{application id}@{tenant id}/devices/{device id}/down/queued`
- `v3/{application id}@{tenant id}/devices/{device id}/down/sent`
- `v3/{application id}@{tenant id}/devices/{device id}/down/ack`
- `v3/{application id}@{tenant id}/devices/{device id}/down/nack`
- `v3/{application id}@{tenant id}/devices/{device id}/down/failed`
- `v3/{application id}@{tenant id}/devices/{device id}/service/data`
- `v3/{application id}@{tenant id}/devices/{device id}/location/solved`

Remember that the format of these topics for {{% tts %}} Open Source would contain `{application id}` instead of `{application id}@{tenant id}`.

While you could subscribe to all of these topics separately, for the simplicity of this tutorial we use `#` to subscribe to all topics, i.e. to receive all uplink traffic.

Subscribing to all topics with the `mosquitto_sub` client can be done with:

```bash
# Tip: when using `mosquitto_sub`, pass the `-d` flag to see the topics messages get published on.
# For example:
mosquitto_sub -h thethings.example.com -t "#" -u "app1@tenant1" -P "NNSXS.VEEBURF3KR77ZR.." -d
```

### Example 

This example is suitable for {{% tts %}} deployments other than Open Source. If you are using {{% tts %}} Open source, make sure your read a [Note on Using the tenant ID]({{< ref "/integrations/mqtt#note-on-using-the-tenant-id" >}}).

When a device `dev1` (in application `app1` in tenant `tenant1`) joins the network, the `join` message is published on the topic `v3/app1@tenant1/devices/dev1/join`. With your MQTT client subscribed to that topic (or all topics), you can catch that `join` message.

<details><summary>Show join accept message example</summary>

```json
{
  "end_device_ids": {
    "device_id": "dev1",
    "application_ids": {
      "application_id": "app1"
    },
    "dev_eui": "4200000000000000",
    "join_eui": "4200000000000000",
    "dev_addr": "01DA1F15"
  },
  "correlation_ids": [
    "gs:conn:01D2CSNX7FJVKQPCVG612QF1TX",
    "gs:uplink:01D2CT834K2YD17ZWZ6357HC0Z",
    "ns:uplink:01D2CT834KNYD7BT2NHK5R1WVA",
    "rpc:/ttn.lorawan.v3.GsNs/HandleUplink:01D2CT834KJ4AVSD1SJ637NAV6",
    "as:up:01D2CT83AXQFQYQ35SR74CTWKH"
  ],
  "join_accept": {
    "session_key_id": "AWiZpAyXrAfEkUNkBljRoA=="
  }
}
```
</details>

When a device `dev1` sends an uplink message, that message is being published on the topic `v3/app1@tenant1/devices/dev1/up`.

<details><summary>Show uplink message example</summary>

```json
{
  "end_device_ids": {
    "device_id": "dev1",
    "application_ids": {
      "application_id": "app1"
    },
    "dev_eui": "4200000000000000",
    "join_eui": "4200000000000000",
    "dev_addr": "01DA1F15"
  },
  "correlation_ids": [
    "gs:conn:01D2CSNX7FJVKQPCVG612QF1TX",
    "gs:uplink:01D2CV8HF62ME0D7MZWE38HHH8",
    "ns:uplink:01D2CV8HF6FYJHKZ45YY1DB3MR",
    "rpc:/ttn.lorawan.v3.GsNs/HandleUplink:01D2CV8HF6XR7ZFVK768PDG3J4",
    "as:up:01D2CV8HNGJ57G25BW0FCZNY07"
  ],
  "uplink_message": {
    "session_key_id": "AWiZpAyXrAfEkUNkBljRoA==",
    "f_port": 15,
    "frm_payload": "VGVtcGVyYXR1cmUgPSAwLjA=",
    "rx_metadata": [{
      "gateway_ids": {
        "gateway_id": "eui-0242020000247803",
        "eui": "0242020000247803"
      },
      "time": "2019-01-29T13:02:34.981Z",
      "timestamp": 1283325000,
      "rssi": -35,
      "snr": 5,
      "uplink_token": "CiIKIAoUZXVpLTAyNDIwMjAwMDAyNDc4MDMSCAJCAgAAJHgDEMj49+ME"
    }],
    "settings": {
      "data_rate": {
        "lora": {
          "bandwidth": 125000,
          "spreading_factor": 7
        }
      },
      "coding_rate": "4/6",
      "frequency": "868500000",
      "gateway_channel_index": 2,
      "device_channel_index": 2
    }
  }
}
```
</details>

## Publishing Downlink Traffic

Downlinks can be scheduled by publishing the message to the topic `v3/{application id}@{tenant id}/devices/{device id}/down/push`. 

Remember that the format of this topic for {{% tts %}} Open Source deployment would be `v3/{application id}/devices/{device id}/down/push`.

Instead of `/push`, you can also use `/replace` to replace the downlink queue. Replacing with an empty array clears the downlink queue.

### Example

This example is suitable for {{% tts %}} deployments other than Open Source. If you are using {{% tts %}} Open source, make sure your read a [Note on Using the tenant ID]({{< ref "/integrations/mqtt#note-on-using-the-tenant-id" >}}).

To send an unconfirmed downlink message to the device `dev1` in application `app1` in tenant `tenant1` with the hexadecimal payload `BE EF` on `FPort` 15 with normal priority, use the topic `v3/app1@tenant1/devices/dev1/down/push` with the following contents:

```json
{
  "downlinks": [{
    "f_port": 15,
    "frm_payload": "vu8=",
    "priority": "NORMAL"
  }]
}
```

{{< note >}} For scheduling downlink messages, the `f_port` values from `1` to `233` are allowed. {{</ note >}}

Use [this handy tool](https://v2.cryptii.com/hexadecimal/base64) to convert hexadecimal to base64.

```bash
# If you use `mosquitto_pub`, use the following command:
mosquitto_pub -h thethings.example.com \
  -t "v3/app1@tenant1/devices/dev1/down/push" \
  -u "app1@tenant1" -P "NNSXS.VEEBURF3KR77ZR.." \
  -m '{"downlinks":[{"f_port": 15,"frm_payload":"vu8=","priority": "NORMAL"}]}' \
  -d`
```

It is also possible to send multiple downlink messages on a single push because `downlinks` is an array. 

If you do not specify a priority, the default priority `LOWEST` is used. You can specify `LOWEST`, `LOW`, `BELOW_NORMAL`, `NORMAL`, `ABOVE_NORMAL`, `HIGH` and `HIGHEST`.

{{% tts %}} supports some cool features, such as confirmed downlink with your own correlation IDs. For example, you can push this:

```json
{
  "downlinks": [{
    "f_port": 15,
    "frm_payload": "vu8=",
    "priority": "HIGH",
    "confirmed": true,
    "correlation_ids": ["my-correlation-id"]
  }]
}
```

Once the downlink gets acknowledged, a message is published to the topic `v3/app1@tenant1/devices/dev1/down/ack`.

<details><summary>Show downlink event message example</summary>

```json
{
  "end_device_ids": {
    "device_id": "dev1",
    "application_ids": {
      "application_id": "app1"
    },
    "dev_eui": "4200000000000000",
    "join_eui": "4200000000000000",
    "dev_addr": "00E6F42A"
  },
  "correlation_ids": [
    "my-correlation-id",
    "..."
  ],
  "downlink_ack": {
    "session_key_id": "AWnj0318qrtJ7kbudd8Vmw==",
    "f_port": 15,
    "f_cnt": 11,
    "frm_payload": "vu8=",
    "confirmed": true,
    "priority": "NORMAL",
    "correlation_ids": [
      "my-correlation-id",
      "..."
    ]
  }
}
```
</details>

You see the correlation ID `my-correlation-id` of your downlink message. You can add multiple custom correlation IDs, for example to reference events or identifiers of your application.

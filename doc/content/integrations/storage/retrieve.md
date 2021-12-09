---
title: Retrieve Messages
summary: Retrieve historical data using the HTTP API
weight: 30
---

The Storage Integration offers the `ApplicationUpStorage` gRPC service and the respective HTTP endpoints for retrieving historical data.

See the [API Reference]({{< ref "/reference/api/storage_integration" >}}) for more details.

## Retrieve Uplinks using the HTTP API

A valid API key with the `RIGHT_APPLICATION_TRAFFIC_READ` rights is required.

```bash
# Retrieve stored uplinks for application "app1"
curl -G "https://thethings.example.com/api/v3/as/applications/<application-id>/packages/storage/uplink_message" \
    -H "Authorization: Bearer $API_KEY" \
    -H "Accept: text/event-stream" \
    -d "limit=10" \
    -d "after=2020-08-20T00:00:00Z"

# Retrieve stored uplinks for device "dev1" of application "app1"
curl -G "https://thethings.example.com/api/v3/as/applications/<application-id>/devices/<device-id>/packages/storage/uplink_message" \
    -H "Authorization: Bearer $API_KEY" \
    -H "Accept: text/event-stream" \
    -d "limit=10" \
    -d "after=2020-08-20T00:00:00Z"
```

<details><summary><b>See example API response</b></summary>

```json
{"result":{"end_device_ids":{"device_id":"dev1","application_ids":{"application_id":"app1"},"dev_eui":"1111111111111111","dev_addr":"014457CB"},"received_at":"2020-08-24T10:08:44.868680817Z","uplink_message":{"session_key_id":"AXPoziFRvbcEguvZQoCCZw==","f_port":10,"f_cnt":43,"frm_payload":"AQoBCgEKAQo=","rx_metadata":[{"gateway_ids":{"gateway_id":"gtw1"},"time":"2020-08-24T10:08:43.385687165Z","timestamp":3313328983,"uplink_token":"ChIKEAoEZ3R3MRIIEREREREREREQ18b1qwwaDAiso476BRDl6YiuAiDYl7COt2A="}],"settings":{"data_rate":{"lora":{"bandwidth":125000,"spreading_factor":12}},"coding_rate":"4/5","frequency":"868100000","timestamp":3313328983,"time":"2020-08-24T10:08:43.385687165Z"},"received_at":"2020-08-24T10:08:44.634338856Z"}}}

{"result":{"end_device_ids":{"device_id":"dev1","application_ids":{"application_id":"app1"},"dev_eui":"1111111111111111","dev_addr":"014457CB"},"received_at":"2020-08-24T10:08:49.144907967Z","uplink_message":{"session_key_id":"AXPoziFRvbcEguvZQoCCZw==","f_port":10,"f_cnt":44,"frm_payload":"AQoBCgEKAQo=","rx_metadata":[{"gateway_ids":{"gateway_id":"gtw1"},"time":"2020-08-24T10:08:48.891099194Z","timestamp":3318834395,"uplink_token":"ChIKEAoEZ3R3MRIIEREREREREREQ28nFrgwaDAiwo476BRCoqe67AyD47sfPy2A="}],"settings":{"data_rate":{"lora":{"bandwidth":125000,"spreading_factor":12}},"coding_rate":"4/5","frequency":"868100000","timestamp":3318834395,"time":"2020-08-24T10:08:48.891099194Z"},"received_at":"2020-08-24T10:08:48.931407608Z"}}}
```
</details>

Use field masks to specify a subset of fields that should be returned by the API. For example, to retrieve the decoded payload field only, set the field mask as shown below. Note that the end device identifiers and the timestamp are always included in the message.

```bash
curl -G "https://thethings.example.com/api/v3/as/applications/<application-id>/packages/storage/uplink_message" \
    -H "Authorization: Bearer $API_KEY" \
    -H "Accept: text/event-stream" \
    -d "limit=10" \
    -d "after=2020-08-20T00:00:00Z" \
    -d "field_mask=up.uplink_message.decoded_payload"
```

<details><summary><b>See example API response</b></summary>

```json
{"result":{"end_device_ids":{"device_id":"dev1","application_ids":{}},"received_at":"2021-02-04T19:19:28.681910909Z","uplink_message":{"decoded_payload":{"occupied":true,"type":"parking status"},"settings":{"data_rate":{}}}}}

```
</details>

## Retrieve Uplinks using the CLI

We define some user parameters that are used below:

```bash
APP_ID="app1"
DEVICE_ID="dev1"
```

Make sure to modify these according to your setup.

You can retrieve uplinks for an application or an end device with:

```bash
# Retrieve 10 stored uplinks for application "app1"
ttn-lw-cli applications storage get $APP_ID --limit 10 --order "-received_at" --after "2018-08-20 00:00:00"

# Retrieve 2 stored uplinks for end device "dev1" of application "app1"
ttn-lw-cli end-devices storage get $APP_ID $DEVICE_ID --limit 2 --order "-received_at" --after "2020-08-20 00:00:00"
```

<details><summary><b>See example output</b></summary>

```json
[
  {
    "end_device_ids": {
      "device_id": "dev1",
      "application_ids": {
        "application_id": "app1"
      }
    },
    "received_at": "2021-02-04T19:32:31.488210458Z",
    "uplink_message": {
      "f_port": 1,
      "frm_payload": "AA==",
      "decoded_payload": {
        "occupied": false,
        "type": "parking status"
      },
      "settings": {
        "data_rate": {}
      },
      "received_at": "0001-01-01T00:00:00Z"
    },
    "simulated": true
  },
  {
    "end_device_ids": {
      "device_id": "dev1",
      "application_ids": {
        "application_id": "app1"
      }
    },
    "received_at": "2021-02-04T19:19:28.681910909Z",
    "uplink_message": {
      "f_port": 1,
      "frm_payload": "AQ==",
      "decoded_payload": {
        "occupied": true,
        "type": "parking status"
      },
      "settings": {
        "data_rate": {}
      },
      "received_at": "0001-01-01T00:00:00Z"
    },
    "simulated": true
  }
]
```
</details>

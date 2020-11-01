---
title: Retrieve messages
summary: Retrieve historical data using the HTTP API
weight: 30
---

The Storage Integration offers the `StorageIntegrationService` gRPC service and the respective HTTP endpoints for retrieving historical data. This page merely contains a few examples, see [Reference]({{< ref "/reference/api/application_storage" >}}) for more details.


## Retrieve Uplinks of an Application

Using the CLI:

```bash
$ ttn-lw-cli applications storage get "app1" --limit 10 --after "2018-08-20T00:00:00Z"
```

Using the HTTP API (`$API_KEY` should be a valid API key with the `RIGHT_APPLICATION_TRAFFIC_READ` right):

```bash
$ curl -G "https://thethings.example.com/api/v3/as/applications/app1/packages/storage/uplinks" \
    -H "Authorization: Bearer $API_KEY" \
    -d "limit=10" \
    -d "after=2020-08-20T00:00:00Z"
```

<details><summary><b>See example API response</b></summary>

```json
{"result":{"end_device_ids":{"device_id":"dev1","application_ids":{"application_id":"app1"},"dev_eui":"1111111111111111","dev_addr":"014457CB"},"received_at":"2020-08-24T10:08:44.868680817Z","uplink_message":{"session_key_id":"AXPoziFRvbcEguvZQoCCZw==","f_port":10,"f_cnt":43,"frm_payload":"AQoBCgEKAQo=","rx_metadata":[{"gateway_ids":{"gateway_id":"gtw1"},"time":"2020-08-24T10:08:43.385687165Z","timestamp":3313328983,"uplink_token":"ChIKEAoEZ3R3MRIIEREREREREREQ18b1qwwaDAiso476BRDl6YiuAiDYl7COt2A="}],"settings":{"data_rate":{"lora":{"bandwidth":125000,"spreading_factor":12}},"coding_rate":"4/5","frequency":"868100000","timestamp":3313328983,"time":"2020-08-24T10:08:43.385687165Z"},"received_at":"2020-08-24T10:08:44.634338856Z"}}}
{"result":{"end_device_ids":{"device_id":"dev1","application_ids":{"application_id":"app1"},"dev_eui":"1111111111111111","dev_addr":"014457CB"},"received_at":"2020-08-24T10:08:49.144907967Z","uplink_message":{"session_key_id":"AXPoziFRvbcEguvZQoCCZw==","f_port":10,"f_cnt":44,"frm_payload":"AQoBCgEKAQo=","rx_metadata":[{"gateway_ids":{"gateway_id":"gtw1"},"time":"2020-08-24T10:08:48.891099194Z","timestamp":3318834395,"uplink_token":"ChIKEAoEZ3R3MRIIEREREREREREQ28nFrgwaDAiwo476BRCoqe67AyD47sfPy2A="}],"settings":{"data_rate":{"lora":{"bandwidth":125000,"spreading_factor":12}},"coding_rate":"4/5","frequency":"868100000","timestamp":3318834395,"time":"2020-08-24T10:08:48.891099194Z"},"received_at":"2020-08-24T10:08:48.931407608Z"}}}
```
</details>


## Retrieve Uplinks of an End Device

Using the CLI:

```bash
$ ttn-lw-cli end-devices storage get "app1" "dev1" --limit 10 --after "2018-08-20T00:00:00Z"
```

Using the HTTP API (`$API_KEY` should be a valid API key with the `RIGHT_APPLICATION_TRAFFIC_READ` right):

```bash
$ curl -G "https://thethings.example.com/api/v3/as/applications/app1/devices/dev1/packages/storage/uplinks" \
    -H "Authorization: Bearer $API_KEY" \
    -d "limit=10" \
    -d "after=2020-08-20T00:00:00Z"
```

---
title: "Gaining insights using Events"
description: ""
weight: 5
aliases: [/getting-started/events, /the-things-stack/management/events]
---

{{% tts %}} generates lots of events that allow you to get insight in what is going on. You can subscribe to application, gateway, end device events, as well as to user, organization and OAuth client events.

This guide shows how to view events in the console and to subscribe to events with the CLI or HTTP API.

<!--more-->

## View Events in the Console

It is possible to view live events for an entire application, gateway, or specific end device in the console.

See the following video from [The Things Network youtube channel](https://youtu.be/PbYzyqoJf5Q) for instructions.

<details><summary>Show video</summary>
{{< youtube "PbYzyqoJf5Q" >}}
</details>

## Subscribe with CLI

To follow your gateway `gtw1` and application `app1` events at the same time:

```bash
GTW_ID="gtw1"
APP_ID="app1"
ttn-lw-cli events subscribe --gateway-id $GTW_ID --application-id $APP_ID
```

## Subscribe with HTTP

You can get streaming events with `curl`. For this, you need an API key for the entities you want to watch, for example:

```bash
ttn-lw-cli users api-key create \
  --user-id admin \
  --right-application-all \
  --right-gateway-all
```

With the created API key:

```bash
curl https://thethings.example.com/api/v3/events \
  -X POST \
  -H "Authorization: Bearer NNSXS.BR55PTYILPPVXY.." \
  -H "Accept: text/event-stream" \
  --data '{"identifiers":[{"application_ids":{"application_id":"app1"}},{"gateway_ids":{"gateway_id":"gtw1"}}]}'
```

{{< note >}} The created API key for events is highly privileged - do not use it if you do not need it for events. {{</ note >}}

## Example: Join Flow

See the events of a typical join flow in the example below:

<details><summary>Join flow example</summary>

```json
[
  {
    "name": "gs.up.receive", //The Gateway Server receives an uplink message (Join Request) from the end device
    "time": "2022-07-05T09:01:06.987556027Z",
    "identifiers": [
      {
        "gateway_ids": {
          "gateway_id": "gw2",
          "eui": "B827EBFFFE8DB887"
        }
      }
    ],
    "data": {
      "@type": "type.googleapis.com/ttn.lorawan.v3.GatewayUplinkMessage",
      "message": {
        "payload": {
          "join_request_payload": {
            "join_eui": "0000000000000000",
            "dev_eui": "70B3D57ED0050EAD",
            "dev_nonce": "AF7C"
          }
        },
        "rx_metadata": [
          {
            "gateway_ids": {
              "gateway_id": "gw2",
              "eui": "B827EBFFFE8DB887"
            }
          }
        ],
        "correlation_ids": [
          "gs:conn:01G76RS17HGZZXV740X0N2XDV8",
          "gs:uplink:01G76SF01BNW5SKRAND31Z0MGB"
        ]
      }
    },
    "correlation_ids": [
      "gs:conn:01G76RS17HGZZXV740X0N2XDV8",
      "gs:uplink:01G76SF01BNW5SKRAND31Z0MGB"
    ]
  },
  {
    "name": "ns.up.join.receive", //The Network Server receives the Join Request
    "time": "2022-07-05T09:01:06.995021407Z",
    "identifiers": [
      {
        "device_ids": {
          "device_id": "dev2",
          "application_ids": {
            "application_id": "app1"
          },
          "dev_eui": "70B3D57ED0050EAD",
          "join_eui": "0000000000000000",
          "dev_addr": "004C2AA4"
        }
      }
    ],
    "data": {
      "@type": "type.googleapis.com/ttn.lorawan.v3.UplinkMessage",
      "payload": {
        "join_request_payload": {
          "join_eui": "0000000000000000",
          "dev_eui": "70B3D57ED0050EAD",
          "dev_nonce": "AF7C"
        }
      },
      "rx_metadata": [
        {
          "gateway_ids": {
            "gateway_id": "gw2",
            "eui": "B827EBFFFE8DB887"
          }
        }
      ],
      "correlation_ids": [
        "gs:conn:01G76RS17HGZZXV740X0N2XDV8",
        "gs:up:host:01G76RS1T9JM1RGFWT6A0ZEGNB",
        "gs:uplink:01G76SF01BNW5SKRAND31Z0MGB",
        "ns:uplink:01G76SF01C64KZ26CKK4SK5G10",
        "rpc:/ttn.lorawan.v3.GsNs/HandleUplink:01G76SF01BBAMZAQRXYK97RZ8K"
      ]
    },
    "correlation_ids": [
      "gs:conn:01G76RS17HGZZXV740X0N2XDV8",
      "gs:up:host:01G76RS1T9JM1RGFWT6A0ZEGNB",
      "gs:uplink:01G76SF01BNW5SKRAND31Z0MGB",
      "ns:uplink:01G76SF01C64KZ26CKK4SK5G10",
      "rpc:/ttn.lorawan.v3.GsNs/HandleUplink:01G76SF01BBAMZAQRXYK97RZ8K"
    ]
  },
  {
    "name": "ns.up.join.cluster.attempt", //The Network Server sends the Join Request to the cluster-local Join Server
    "time": "2022-07-05T09:01:06.995430193Z",
    "identifiers": [
      {
        "device_ids": {
          "device_id": "dev2",
          "application_ids": {
            "application_id": "app1"
          },
          "dev_eui": "70B3D57ED0050EAD",
          "join_eui": "0000000000000000",
          "dev_addr": "004C2AA4"
        }
      }
    ],
    "data": {
      "@type": "type.googleapis.com/ttn.lorawan.v3.JoinRequest",
      "payload": {
        "join_request_payload": {
          "join_eui": "0000000000000000",
          "dev_eui": "70B3D57ED0050EAD",
          "dev_nonce": "AF7C"
        }
      },
      "dev_addr": "AP9S4w==",
      "selected_mac_version": "MAC_V1_0_2",
      "net_id": "AAAA",
      "downlink_settings": {
        "rx2_dr": 3
      },
      "rx_delay": 5,
      "cf_list": {
        "freq": [8671000, 8673000, 8675000, 8677000, 8679000]
      },
      "correlation_ids": [
        "gs:conn:01G76RS17HGZZXV740X0N2XDV8",
        "gs:up:host:01G76RS1T9JM1RGFWT6A0ZEGNB",
        "gs:uplink:01G76SF01BNW5SKRAND31Z0MGB",
        "ns:uplink:01G76SF01C64KZ26CKK4SK5G10",
        "rpc:/ttn.lorawan.v3.GsNs/HandleUplink:01G76SF01BBAMZAQRXYK97RZ8K"
      ]
    },
    "correlation_ids": [
      "gs:conn:01G76RS17HGZZXV740X0N2XDV8",
      "gs:up:host:01G76RS1T9JM1RGFWT6A0ZEGNB",
      "gs:uplink:01G76SF01BNW5SKRAND31Z0MGB",
      "ns:uplink:01G76SF01C64KZ26CKK4SK5G10",
      "rpc:/ttn.lorawan.v3.GsNs/HandleUplink:01G76SF01BBAMZAQRXYK97RZ8K"
    ]
  },
  {
    "name": "js.join.accept", //The local Join Server accepts the Join Request
    "time": "2022-07-05T09:01:06.998805073Z",
    "identifiers": [
      {
        "device_ids": {
          "device_id": "dev2",
          "application_ids": {
            "application_id": "app1"
          },
          "dev_eui": "70B3D57ED0050EAD",
          "join_eui": "0000000000000000",
          "dev_addr": "00FF52E3"
        }
      }
    ],
    "correlation_ids": [
      "rpc:/ttn.lorawan.v3.NsJs/HandleJoin:01G76SF01KFGDBGNQKRWG64DBP"
    ]
  },
  {
    "name": "ns.up.join.cluster.success", //The Network Server indicates that the Join Request to the cluster-local Join Server succeeded
    "time": "2022-07-05T09:01:06.999074200Z",
    "identifiers": [
      {
        "device_ids": {
          "device_id": "dev2",
          "application_ids": {
            "application_id": "app1"
          },
          "dev_eui": "70B3D57ED0050EAD",
          "join_eui": "0000000000000000",
          "dev_addr": "004C2AA4"
        }
      }
    ],
    "data": {
      "@type": "type.googleapis.com/ttn.lorawan.v3.JoinResponse",
      "session_keys": {
        "session_key_id": "AYHNl4A0v5Eu3uRRH34tEA=="
      }
    },
    "correlation_ids": [
      "gs:conn:01G76RS17HGZZXV740X0N2XDV8",
      "gs:up:host:01G76RS1T9JM1RGFWT6A0ZEGNB",
      "gs:uplink:01G76SF01BNW5SKRAND31Z0MGB",
      "ns:uplink:01G76SF01C64KZ26CKK4SK5G10",
      "rpc:/ttn.lorawan.v3.GsNs/HandleUplink:01G76SF01BBAMZAQRXYK97RZ8K"
    ]
  },
  {
    "name": "ns.up.join.process", //The Network Server indicates that the Join Request was successfully processed
    "time": "2022-07-05T09:01:07.192284684Z",
    "identifiers": [
      {
        "device_ids": {
          "device_id": "dev2",
          "application_ids": {
            "application_id": "app1"
          },
          "dev_eui": "70B3D57ED0050EAD",
          "join_eui": "0000000000000000",
          "dev_addr": "004C2AA4"
        }
      }
    ],
    "data": {
      "@type": "type.googleapis.com/ttn.lorawan.v3.UplinkMessage",
      "payload": {
        "join_request_payload": {
          "join_eui": "0000000000000000",
          "dev_eui": "70B3D57ED0050EAD",
          "dev_nonce": "AF7C"
        }
      },
      "rx_metadata": [
        {
          "gateway_ids": {
            "gateway_id": "gw2",
            "eui": "B827EBFFFE8DB887"
          }
        }
      ],
      "correlation_ids": [
        "gs:conn:01G76RS17HGZZXV740X0N2XDV8",
        "gs:up:host:01G76RS1T9JM1RGFWT6A0ZEGNB",
        "gs:uplink:01G76SF01BNW5SKRAND31Z0MGB",
        "ns:uplink:01G76SF01C64KZ26CKK4SK5G10",
        "rpc:/ttn.lorawan.v3.GsNs/HandleUplink:01G76SF01BBAMZAQRXYK97RZ8K"
      ]
    },
    "correlation_ids": [
      "gs:conn:01G76RS17HGZZXV740X0N2XDV8",
      "gs:up:host:01G76RS1T9JM1RGFWT6A0ZEGNB",
      "gs:uplink:01G76SF01BNW5SKRAND31Z0MGB",
      "ns:uplink:01G76SF01C64KZ26CKK4SK5G10",
      "rpc:/ttn.lorawan.v3.GsNs/HandleUplink:01G76SF01BBAMZAQRXYK97RZ8K"
    ]
  },
  {
    "name": "gs.up.forward", //The Gateway Server indicates that the successfully processed Join Request was forwarded to the Network Server
    "time": "2022-07-05T09:01:07.192498007Z",
    "identifiers": [
      {
        "gateway_ids": {
          "gateway_id": "gw2",
          "eui": "B827EBFFFE8DB887"
        }
      }
    ],
    "data": {
      "@type": "type.googleapis.com/google.protobuf.Value",
      "value": "cluster"
    },
    "correlation_ids": [
      "gs:conn:01G76RS17HGZZXV740X0N2XDV8",
      "gs:up:host:01G76RS1T9JM1RGFWT6A0ZEGNB",
      "gs:uplink:01G76SF01BNW5SKRAND31Z0MGB"
    ]
  },
  {
    "name": "ns.down.join.schedule.attempt", //The Network Server attempts to schedule a Join Accept message for transmission (to the end device) on the Gateway Server
    "time": "2022-07-05T09:01:08.800956312Z",
    "identifiers": [
      {
        "device_ids": {
          "device_id": "dev2",
          "application_ids": {
            "application_id": "app1"
          },
          "dev_eui": "70B3D57ED0050EAD",
          "join_eui": "0000000000000000",
          "dev_addr": "004C2AA4"
        }
      }
    ],
    "data": {
      "@type": "type.googleapis.com/ttn.lorawan.v3.DownlinkMessage",
      "payload": {
        "m_hdr": {
          "m_type": "JOIN_ACCEPT"
        },
        "join_accept_payload": {
          "join_nonce": "000000",
          "net_id": "000000",
          "dev_addr": "00FF52E3",
          "dl_settings": {
            "rx2_dr": 3
          },
          "rx_delay": 5,
          "cf_list": {
            "freq": [8671000, 8673000, 8675000, 8677000, 8679000]
          }
        }
      },
      "request": {
        "downlink_paths": [
          {
            "uplink_token": "ChEKDwoDZ3cyEgi4J+v//o24hxDUjazMAhoMCNL7j5YGEIXF5NYDIKDYyrikFCoLCNP7j5YGEICh5gQ="
          }
        ],
        "rx1_delay": 5,
        "rx1_data_rate": {
          "lora": {
            "bandwidth": 125000,
            "spreading_factor": 12
          }
        },
        "rx1_frequency": "868300000",
        "rx2_data_rate": {
          "lora": {
            "bandwidth": 125000,
            "spreading_factor": 12
          }
        },
        "rx2_frequency": "869525000",
        "priority": "HIGHEST",
        "frequency_plan_id": "EU_863_870_TTN"
      },
      "correlation_ids": [
        "gs:conn:01G76RS17HGZZXV740X0N2XDV8",
        "gs:up:host:01G76RS1T9JM1RGFWT6A0ZEGNB",
        "gs:uplink:01G76SF01BNW5SKRAND31Z0MGB",
        "ns:downlink:01G76SF1T0JHYTRMXTQ69DG1E6",
        "ns:transmission:01G76SF1T0WAQAB4RF2M6EKSJR",
        "ns:uplink:01G76SF01C64KZ26CKK4SK5G10",
        "rpc:/ttn.lorawan.v3.GsNs/HandleUplink:01G76SF01BBAMZAQRXYK97RZ8K"
      ]
    },
    "correlation_ids": [
      "gs:conn:01G76RS17HGZZXV740X0N2XDV8",
      "gs:up:host:01G76RS1T9JM1RGFWT6A0ZEGNB",
      "gs:uplink:01G76SF01BNW5SKRAND31Z0MGB",
      "ns:downlink:01G76SF1T0JHYTRMXTQ69DG1E6",
      "ns:transmission:01G76SF1T0WAQAB4RF2M6EKSJR",
      "ns:uplink:01G76SF01C64KZ26CKK4SK5G10",
      "rpc:/ttn.lorawan.v3.GsNs/HandleUplink:01G76SF01BBAMZAQRXYK97RZ8K"
    ]
  },
  {
    "name": "gs.down.schedule.attempt", //The Gateway Server attempts to schedule a downlink message
    "time": "2022-07-05T09:01:08.801328916Z",
    "identifiers": [
      {
        "gateway_ids": {
          "gateway_id": "gw2",
          "eui": "B827EBFFFE8DB887"
        }
      }
    ],
    "data": {
      "@type": "type.googleapis.com/ttn.lorawan.v3.DownlinkMessage",
      "correlation_ids": [
        "gs:conn:01G76RS17HGZZXV740X0N2XDV8",
        "gs:up:host:01G76RS1T9JM1RGFWT6A0ZEGNB",
        "gs:uplink:01G76SF01BNW5SKRAND31Z0MGB",
        "ns:downlink:01G76SF1T0JHYTRMXTQ69DG1E6",
        "ns:transmission:01G76SF1T0WAQAB4RF2M6EKSJR",
        "ns:uplink:01G76SF01C64KZ26CKK4SK5G10",
        "rpc:/ttn.lorawan.v3.GsNs/HandleUplink:01G76SF01BBAMZAQRXYK97RZ8K",
        "rpc:/ttn.lorawan.v3.NsGs/ScheduleDownlink:01G76SF1T1FC3Q3N7RBSMEXDKA"
      ]
    },
    "correlation_ids": [
      "gs:conn:01G76RS17HGZZXV740X0N2XDV8",
      "gs:up:host:01G76RS1T9JM1RGFWT6A0ZEGNB",
      "gs:uplink:01G76SF01BNW5SKRAND31Z0MGB",
      "ns:downlink:01G76SF1T0JHYTRMXTQ69DG1E6",
      "ns:transmission:01G76SF1T0WAQAB4RF2M6EKSJR",
      "ns:uplink:01G76SF01C64KZ26CKK4SK5G10",
      "rpc:/ttn.lorawan.v3.GsNs/HandleUplink:01G76SF01BBAMZAQRXYK97RZ8K",
      "rpc:/ttn.lorawan.v3.NsGs/ScheduleDownlink:01G76SF1T1FC3Q3N7RBSMEXDKA"
    ]
  },
  {
    "name": "gs.down.send", //The Gateway Server sends a downlink message
    "time": "2022-07-05T09:01:08.801388035Z",
    "identifiers": [
      {
        "gateway_ids": {
          "gateway_id": "gw2",
          "eui": "B827EBFFFE8DB887"
        }
      }
    ],
    "data": {
      "@type": "type.googleapis.com/ttn.lorawan.v3.DownlinkMessage",
      "correlation_ids": [
        "gs:conn:01G76RS17HGZZXV740X0N2XDV8",
        "gs:up:host:01G76RS1T9JM1RGFWT6A0ZEGNB",
        "gs:uplink:01G76SF01BNW5SKRAND31Z0MGB",
        "ns:downlink:01G76SF1T0JHYTRMXTQ69DG1E6",
        "ns:transmission:01G76SF1T0WAQAB4RF2M6EKSJR",
        "ns:uplink:01G76SF01C64KZ26CKK4SK5G10",
        "rpc:/ttn.lorawan.v3.GsNs/HandleUplink:01G76SF01BBAMZAQRXYK97RZ8K",
        "rpc:/ttn.lorawan.v3.NsGs/ScheduleDownlink:01G76SF1T1FC3Q3N7RBSMEXDKA"
      ]
    },
    "correlation_ids": [
      "gs:conn:01G76RS17HGZZXV740X0N2XDV8",
      "gs:up:host:01G76RS1T9JM1RGFWT6A0ZEGNB",
      "gs:uplink:01G76SF01BNW5SKRAND31Z0MGB",
      "ns:downlink:01G76SF1T0JHYTRMXTQ69DG1E6",
      "ns:transmission:01G76SF1T0WAQAB4RF2M6EKSJR",
      "ns:uplink:01G76SF01C64KZ26CKK4SK5G10",
      "rpc:/ttn.lorawan.v3.GsNs/HandleUplink:01G76SF01BBAMZAQRXYK97RZ8K",
      "rpc:/ttn.lorawan.v3.NsGs/ScheduleDownlink:01G76SF1T1FC3Q3N7RBSMEXDKA"
    ]
  },
  {
    "name": "ns.down.join.schedule.success", //The Network Server indicates that a Join Accept message was successfully scheduled for transmission (to the end device) on the Gateway Server
    "time": "2022-07-05T09:01:08.801724107Z",
    "identifiers": [
      {
        "device_ids": {
          "device_id": "dev2",
          "application_ids": {
            "application_id": "app1"
          },
          "dev_eui": "70B3D57ED0050EAD",
          "join_eui": "0000000000000000",
          "dev_addr": "004C2AA4"
        }
      }
    ],
    "data": {
      "@type": "type.googleapis.com/ttn.lorawan.v3.ScheduleDownlinkResponse",
      "downlink_path": {
        "fixed": {
          "gateway_ids": {
            "gateway_id": "gw2",
            "eui": "B827EBFFFE8DB887"
          }
        }
      },
      "rx1": true
    },
    "correlation_ids": [
      "gs:conn:01G76RS17HGZZXV740X0N2XDV8",
      "gs:up:host:01G76RS1T9JM1RGFWT6A0ZEGNB",
      "gs:uplink:01G76SF01BNW5SKRAND31Z0MGB",
      "ns:downlink:01G76SF1T0JHYTRMXTQ69DG1E6",
      "ns:transmission:01G76SF1T0WAQAB4RF2M6EKSJR",
      "ns:uplink:01G76SF01C64KZ26CKK4SK5G10",
      "rpc:/ttn.lorawan.v3.GsNs/HandleUplink:01G76SF01BBAMZAQRXYK97RZ8K"
    ]
  },
  {
    "name": "ns.up.join.accept.forward", //The Network Server forwards the Join Accept message to the Application Server
    "time": "2022-07-05T09:01:08.806834516Z",
    "identifiers": [
      {
        "device_ids": {
          "device_id": "dev2",
          "application_ids": {
            "application_id": "app1"
          },
          "dev_eui": "70B3D57ED0050EAD",
          "join_eui": "0000000000000000",
          "dev_addr": "00FF52E3"
        }
      }
    ],
    "data": {
      "@type": "type.googleapis.com/ttn.lorawan.v3.ApplicationUp",
      "end_device_ids": {
        "device_id": "dev2",
        "application_ids": {
          "application_id": "app1"
        },
        "dev_eui": "70B3D57ED0050EAD",
        "join_eui": "0000000000000000",
        "dev_addr": "00FF52E3"
      },
      "correlation_ids": [
        "gs:conn:01G76RS17HGZZXV740X0N2XDV8",
        "gs:up:host:01G76RS1T9JM1RGFWT6A0ZEGNB",
        "gs:uplink:01G76SF01BNW5SKRAND31Z0MGB",
        "ns:uplink:01G76SF01C64KZ26CKK4SK5G10",
        "rpc:/ttn.lorawan.v3.GsNs/HandleUplink:01G76SF01BBAMZAQRXYK97RZ8K"
      ],
      "join_accept": {
        "session_key_id": "AYHNl4A0v5Eu3uRRH34tEA==",
        "received_at": "2022-07-05T09:01:06.988023916Z"
      }
    },
    "correlation_ids": [
      "gs:conn:01G76RS17HGZZXV740X0N2XDV8",
      "gs:up:host:01G76RS1T9JM1RGFWT6A0ZEGNB",
      "gs:uplink:01G76SF01BNW5SKRAND31Z0MGB",
      "ns:uplink:01G76SF01C64KZ26CKK4SK5G10",
      "rpc:/ttn.lorawan.v3.GsNs/HandleUplink:01G76SF01BBAMZAQRXYK97RZ8K"
    ]
  },
  {
    "name": "as.up.join.receive", //The Application Server receives the Join Accept message
    "time": "2022-07-05T09:01:08.804362691Z",
    "identifiers": [
      {
        "device_ids": {
          "device_id": "dev2",
          "application_ids": {
            "application_id": "app1"
          },
          "dev_eui": "70B3D57ED0050EAD",
          "join_eui": "0000000000000000",
          "dev_addr": "00FF52E3"
        }
      }
    ],
    "correlation_ids": [
      "as:up:01G76SF1T4N87XN57MY6H36X4C",
      "gs:conn:01G76RS17HGZZXV740X0N2XDV8",
      "gs:up:host:01G76RS1T9JM1RGFWT6A0ZEGNB",
      "gs:uplink:01G76SF01BNW5SKRAND31Z0MGB",
      "ns:uplink:01G76SF01C64KZ26CKK4SK5G10",
      "rpc:/ttn.lorawan.v3.GsNs/HandleUplink:01G76SF01BBAMZAQRXYK97RZ8K",
      "rpc:/ttn.lorawan.v3.NsAs/HandleUplink:01G76SF1T4N1VR08BVHQ6MTTJN"
    ]
  },
  {
    "name": "as.up.join.forward", //The Application Server forwards the Join Accept message to the application
    "time": "2022-07-05T09:01:08.806553539Z",
    "identifiers": [
      {
        "device_ids": {
          "device_id": "dev2",
          "application_ids": {
            "application_id": "app1"
          },
          "dev_eui": "70B3D57ED0050EAD",
          "join_eui": "0000000000000000",
          "dev_addr": "00FF52E3"
        }
      }
    ],
    "data": {
      "@type": "type.googleapis.com/ttn.lorawan.v3.ApplicationUp",
      "end_device_ids": {
        "device_id": "dev2",
        "application_ids": {
          "application_id": "app1"
        },
        "dev_eui": "70B3D57ED0050EAD",
        "join_eui": "0000000000000000",
        "dev_addr": "00FF52E3"
      },
      "correlation_ids": [
        "as:up:01G76SF1T4N87XN57MY6H36X4C",
        "gs:conn:01G76RS17HGZZXV740X0N2XDV8",
        "gs:up:host:01G76RS1T9JM1RGFWT6A0ZEGNB",
        "gs:uplink:01G76SF01BNW5SKRAND31Z0MGB",
        "ns:uplink:01G76SF01C64KZ26CKK4SK5G10",
        "rpc:/ttn.lorawan.v3.GsNs/HandleUplink:01G76SF01BBAMZAQRXYK97RZ8K",
        "rpc:/ttn.lorawan.v3.NsAs/HandleUplink:01G76SF1T4N1VR08BVHQ6MTTJN"
      ],
      "received_at": "2022-07-05T09:01:08.804377195Z",
      "join_accept": {
        "session_key_id": "AYHNl4A0v5Eu3uRRH34tEA==",
        "received_at": "2022-07-05T09:01:06.988023916Z"
      }
    },
    "correlation_ids": [
      "as:up:01G76SF1T4N87XN57MY6H36X4C",
      "gs:conn:01G76RS17HGZZXV740X0N2XDV8",
      "gs:up:host:01G76RS1T9JM1RGFWT6A0ZEGNB",
      "gs:uplink:01G76SF01BNW5SKRAND31Z0MGB",
      "ns:uplink:01G76SF01C64KZ26CKK4SK5G10",
      "rpc:/ttn.lorawan.v3.GsNs/HandleUplink:01G76SF01BBAMZAQRXYK97RZ8K",
      "rpc:/ttn.lorawan.v3.NsAs/HandleUplink:01G76SF1T4N1VR08BVHQ6MTTJN"
    ]
  }
]
```

</details>

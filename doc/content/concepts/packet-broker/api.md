---
title: Mapper API
description: ""
aliases: [/getting-started/packet-broker/api]
---

The Packet Broker Mapper API can help you fetch gateway locations, online status and other gateway information for {{% ttss %}}, Cloud, Enterprise and Open Source deployments. This section contains the reference for the Packet Broker Mapper API and examples of forming an API call.

<!--more-->

The [OpenAPI](https://swagger.io/specification/) definition of the Packet Broker Mapper API is available [here](https://mapper.packetbroker.net/api/v2/openapi.json).

You can also use [Swagger UI](https://petstore.swagger.io/) to explore the Mapper API. Just enter `https://mapper.packetbroker.net/api/v2/openapi.json` in the URL field on the top and click **Explore**.

## Examples

To get all gateways:

```bash
curl https://mapper.packetbroker.net/api/v2/gateways
```

As a result of this API call, you will get a list of all gateways connected to Packet Broker and their details (like network, tenant, cluster and gateway identifiers, activity status, location, etc.).

To get info about a single gateway `demo-gw1` that's connected to {{% ttss %}}:

```bash
curl https://mapper.packetbroker.net/api/v2/gateways/netID=000013,tenantID=ttn,id=demo-gw1
```

<details><summary>Show JSON API response</summary>

```json
{
  "netID": "000013",
  "tenantID": "ttn",
  "id": "demo-gw1",
  "eui": "B827EBFFFE8DB885",
  "clusterID": "eu1.cloud.thethings.network",
  "updatedAt": "2022-05-04T14:55:35.52635Z",
  "location": {
    "latitude": 43.856691,
    "longitude": 18.382848,
    "altitude": 500,
    "accuracy": 0
  },
  "antennaPlacement": "INDOOR",
  "antennaCount": 1,
  "online": true,
  "frequencyPlan": {
    "region": "EU_863_870",
    "loraMultiSFChannels": [
      868100000, 868300000, 868500000, 867100000, 867300000, 867500000,
      867700000, 867900000
    ]
  },
  "rxRate": 2821.1191,
  "txRate": 151.6022
}
```

</details>

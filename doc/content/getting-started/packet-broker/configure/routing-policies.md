---
title: Routing Policies
description: ""
weight: 3
distributions:
  - Cloud
  - Dedicated Cloud
  - Enterprise
  - Open Source
new_in_version: 3.12.0
---

This guide explains how to manage routing policies, i.e. the rules for forwarding uplink and downlink traffic.

<!--more-->

{{< cli-only >}}

## Prerequisites

1. Understand how Packet Broker works and what routing policies are. [Learn about Packet Broker]({{< relref "../" >}}).
2. {{% tts %}} connected to Packet Broker.
  - {{< distributions "Cloud" >}} **{{% tts %}} Cloud** is already connected to Packet Broker. To configure routing to/from another specific Cloud customer, [contact The Things Industries support](mailto:support@thethingsindustries.com).
  - {{< distributions "Dedicated Cloud" >}} **{{% tts %}} Dedicated Cloud** can be connected on request. Please contact support.
  - {{< distributions "Enterprise" "Open Source" >}} **{{% tts %}} Enterprise** and **Open Source**: see [Connect]({{< relref "connect" >}}).
3. An admin account for the {{% tts %}} deployment. All Packet Broker configuration requires administrative access.

## List Home Networks

In order to configure routing policies with Home Networks, you need to know which Home Networks are available in Packet Broker.

To list Packet Broker Home Networks:

```bash
$ ttn-lw-cli packetbroker home-networks list
```

{{< note >}}
This shows only the Home Networks that have been set to be visible to other networks. If you are using {{% tts %}} Cloud or Dedicated Cloud, [contact The Things Industries support](mailto:support@thethingsindustries.com) to set your network to be listed or not. If you are using {{% tts %}} Open Source or Enterprise, see [Configuration]({{< relref "/reference/configuration/packet-broker-agent" >}}).
{{< /note >}}

<details><summary>Example output</summary>

```json
[{
  "id": {
    "net_id": 19,
    "tenant_id": "ttn"
  },
  "name": "The Things Network",
  "dev_addr_blocks": [
    {
      "dev_addr_prefix": {
        "dev_addr": "260B0000",
        "length": 16
      },
      "home_network_cluster_id": "ttn-eu1"
    },
    {
      "dev_addr_prefix": {
        "dev_addr": "260C0000",
        "length": 16
      },
      "home_network_cluster_id": "ttn-nam1"
    },
    {
      "dev_addr_prefix": {
        "dev_addr": "260D0000",
        "length": 16
      },
      "home_network_cluster_id": "ttn-au1"
    }
  ],
  "contact_info": [
    {
      "contact_type": "CONTACT_TYPE_TECHNICAL",
      "contact_method": "CONTACT_METHOD_EMAIL",
      "value": "ops@thethingsnetwork.org"
    }
  ]
},
{
  "id": {
    "net_id": 8
  },
  "name": "KPN",
  "dev_addr_blocks": [
    {
      "dev_addr_prefix": {
        "dev_addr": "10000000",
        "length": 7
      }
    }
  ]
}
]
```

</details>

## Forwarder Routing Policies

You can see which routing policies Forwarders set for your network as the Home Network. This allows you to see from which networks you receive traffic, which data is being routed, and what downlink capabilities you have with those Forwarders.

To list the routing policies set by Forwarders for your network:

```bash
$ ttn-lw-cli packetbroker forwarder policies list
```

<details><summary>Example output</summary>

This example shows that The Things Network forwards all messages to your network (`NetID` `000013` and tenant ID `my-company`) and that you can send all downlink messages via The Things Network to your end devices.

```json
[{
  "forwarder_id": {
    "net_id": 19,
    "tenant_id": "ttn"
  },
  "home_network_id": {
    "net_id": 19,
    "tenant_id": "my-company"
  },
  "updated_at": "2021-03-23T15:14:49.614025Z",
  "uplink": {
    "join_request": true,
    "mac_data": true,
    "application_data": true,
    "signal_quality": true,
    "localization": true
  },
  "downlink": {
    "join_accept": true,
    "mac_data": true,
    "application_data": true
  }
}
]
```

</details>

## Home Network Routing Policies

You can manage the routing policies between you as Forwarder and any Home Network available in Packet Broker. This allows you to configure what uplink traffic is routed where, and to which extent those Home Networks can use your gateways for downlink traffic.

{{< info >}}
Packet Broker Router uses a cache of the routing table. It takes up to 10 minutes for changes in routing policies to be fully propagated and effective. ☕
{{< /info >}}

### Default Routing Policy

The Default routing policy defines rules for all Home Networks if there is no specific Routing Policy for a Home Network.

#### Get Default Routing Policy

To get the default routing policy:

```bash
$ ttn-lw-cli packetbroker home-networks policies get default
```

{{< info >}}
If there is no default policy defined, this command fails with `not found`.
{{< /info >}}

<details><summary>Example output</summary>

This example has all message types enabled:

```json
{
  "updated_at": "2021-03-24T19:59:48.590521Z",
  "uplink": {
    "join_request": true,
    "mac_data": true,
    "application_data": true,
    "signal_quality": true,
    "localization": true
  },
  "downlink": {
    "join_accept": true,
    "mac_data": true,
    "application_data": true
  }
}
```

</details>

#### Set Default Routing Policy

To set the default routing policy to forward all uplink traffic and allow Home Networks to forward all downlink traffic:

```bash
$ ttn-lw-cli packetbroker home-networks policies set default --all
```

To customize, see [Flags]({{< relref "#flags" >}}) below.

#### Delete Default Routing Policy

To delete the default routing policy:

```bash
$ ttn-lw-cli packetbroker home-networks policies delete default
```

### Home Network Routing Policies

Home Network routing policies take precedence over the default routing policy.

#### List Home Network Routing Policies

To list the routing policies for Home Networks:

```bash
$ ttn-lw-cli packetbroker home-network policies list
```

#### Get Home Network Routing Policy

To get the Routing Policy for a Home Network:

```bash
$ ttn-lw-cli packetbroker home-networks policies get <net-id> [<tenant-id>]
```

Replace `<net-id>` with the `NetID`. The `tenant-id` is optional and represents the tenant within the `NetID`.

{{< note >}}
To view the Routing Policy configured between you (the Forwarder) and The Things Network (the Home Network):

```bash
$ ttn-lw-cli packetbroker home-networks policies get 000013 ttn
```
{{< /note >}}

#### Delete Home Network Routing Policy

To delete the Routing Policy for a Home Network:

```bash
$ ttn-lw-cli packetbroker home-networks policies delete <net-id> [<tenant-id>]
```

Replace `<net-id>` with the `NetID`. The `tenant-id` is optional and represents the tenant within the `NetID`.

### Flags {#flags}

When setting a Routing Policy, you can specify a combination of the following flags:

Flag | Meaning
--- | ---
`--all` | Enable all message types
`--join` | Enable join-request and join-accept
`--join-request` | Enable join-request
`--join-accept` | Enable join-accept
`--mac-data` | Enable MAC layer data messages (`FPort` `0`)
`--mac-data-up` | Enable MAC layer data uplink messages
`--mac-data-down` | Enable MAC layer data downlink messages
`--application-data` | Enable application layer data messages (`FPort` `1` or higher)
`--application-data-up` | Enable application layer data uplink messages
`--application-data-down` | Enable application layer data downlink messages
`--signal-quality` | Enable RSSI and SNR metadata (to pick the best downlink path)
`--localization` | Enable signal quality and gateway locations (for geolocation)

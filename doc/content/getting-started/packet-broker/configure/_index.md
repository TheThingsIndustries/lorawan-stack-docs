---
title: Configure
description: ""
weight: 2
distributions:
  - Cloud
  - Dedicated Cloud
  - Enterprise
  - Open Source
new_in_version: 3.12.0
aliases:
  - "/reference/packet-broker/configure"
  - "/getting-started/packet-broker/configure/registration"
  - "/getting-started/packet-broker/configure/routing-policies"
---

This section shows you how to configure Packet Broker. You can manage your registration, list other networks, configure routing policies with other networks, and see which networks are forwarding traffic to your network.

<!-- more -->

To see which routing policies are configured by default for all deployments, see the [Packet Broker Routing]({{< ref "pb-routing" >}}) section.

## Prerequisites

1. Understand how Packet Broker works and what routing policies are. [Learn about Packet Broker]({{< relref "../" >}}).
2. {{% tts %}} connected to Packet Broker.
  - {{< distributions "Cloud" >}} **{{% tts %}} Cloud** is already connected to Packet Broker.
  - {{< distributions "Dedicated Cloud" >}} **{{% tts %}} Dedicated Cloud** can be connected on request. Please [contact The Things Industries support](mailto:support@thethingsindustries.com).
  - {{< distributions "Enterprise" "Open Source" >}} **{{% tts %}} Enterprise** and **Open Source**: see [Connect]({{< relref "connect" >}}).
3. An admin account for the {{% tts %}} deployment. All Packet Broker configuration requires administrative access.

Packet Broker can be configured using either the Console or the CLI.

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}

## Configure Packet Broker in the Console

To configure Packet Broker, click the **Packet Broker** button in the top right menu.

{{< figure src="pb-menu.png" alt="Packet Broker Menu Button" >}}

This will take you to the Packet Broker configuration page.

{{< figure src="pb-config.png" alt="Packet Broker Menu" >}}

### Register or Deregister

To configure routing policies, you must first register your tenant with Packet Broker.

{{< figure src="pb-register.png" alt="Register Packet Broker" >}}

{{< note >}}
Deregistering from Packet Broker will delete any routing policies associated with a tenant. Security settings may disable deregistering a network from Packet Broker.
{{</ note >}}

### Publicly List Your Network

To publicly list your tenant, enable the **List network publicly** switch. This will allow other networks to easily find and configure routing policies with your network.

{{< figure src="pb-public.png" alt="List Network Publicly" >}}

### Configure Default Routing Policy

To configure a default routing policy, check the **Use default routing policy for this network** radio button. This routing policy will be used when no specific routing policy has been configured with a network.

Choose which uplink and downlink messages you would like to exchange with other networks by default, by enabling the appropriate checkboxes.

{{< figure src="default-policy.png" alt="Default Routing Policy" >}}

### Configure Network Specific Routing Policy

To configure a routing policy with a specific network, click the **Networks** tab.

All networks that are publicly listed will be shown when the **All** tab is activated. To list only networks with a configured policy, click the **Networks with non-default policies** tab.

{{< figure src="pb-networks.png" alt="Networks" >}}

To configure a routing policy for a specific network, click the network. Activate the **Use network specific routing policy** radio button.

Here, you may choose which uplink and downlink messages you would like to exchange with this network.

{{< figure src="pb-custom.png" alt="Network Specific Routing Policy" >}}

Click the **Save routing policy** button to store the routing policy.

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

## Configure Packet Broker using the CLI

### View Registration

To view the current registration with Packet Broker:

```bash
$ ttn-lw-cli packetbroker info
```

<details><summary>Example output with registration</summary>

```json
{
  "registration": {
    "id": {
      "net_id": 19,
      "tenant_id": "my-company"
    },
    "name": "My Company",
    "dev_addr_blocks": [
      {
        "dev_addr_prefix": {
          "dev_addr": "27ABCD00",
          "length": 24
        }
      }
    ],
    "contact_info": [
      {
        "contact_method": "CONTACT_METHOD_EMAIL",
        "value": "admin@example.com"
      },
      {
        "contact_type": "CONTACT_TYPE_TECHNICAL",
        "contact_method": "CONTACT_METHOD_EMAIL",
        "value": "tech@example.com"
      }
    ]
  },
  "forwarder_enabled": true,
  "home_network_enabled": true
}
```

</details>

<details><summary>Example output without registration</summary>

```json
{
  "forwarder_enabled": true,
  "home_network_enabled": true
}
```

</details>

#### Register Tenant

{{< note >}}
You can register with Packet Broker if you are a tenant. This is the case for all users of {{% tts %}} Cloud and in other deployments where you are using a host `NetID`. If you are using your own `NetID` without tenancy, please reach out to [join@packetbroker.net](mailto:join@packetbroker.net) for registration.
{{< /note >}}

To register or update your existing tenant registration:

```bash
$ ttn-lw-cli packetbroker register --listed
```

This updates the registration with Packet Broker based on your {{% tts %}} environment. When using {{% tts %}} Cloud or Dedicated Cloud, the registration is based on your subscription. When using {{% tts %}} Enterprise or Open Source, the registration is based on [your configuration]({{< relref "configure" >}}).

With `--listed`, you make your network publicly listed so it can be found by other network administrators. This flag is optional.

#### Deregister Tenant

{{< warning >}}
This permanently deletes all routing policies that you configured as Forwarder to other Home Networks. It also permanently deletes all routing policies configured by other Forwarders for you as Home Network.
{{< /warning >}}

To deregister from Packet Broker:

```bash
$ ttn-lw-cli packetbroker deregister
```

### List Home Networks

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

### Forwarder Routing Policies

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

### Home Network Routing Policies

You can manage the routing policies between you as Forwarder and any Home Network available in Packet Broker. This allows you to configure what uplink traffic is routed where, and to which extent those Home Networks can use your gateways for downlink traffic.

{{< info >}}
Packet Broker Router uses a cache of the routing table. It takes up to 10 minutes for changes in routing policies to be fully propagated and effective. ☕
{{< /info >}}

#### Default Routing Policy

The Default routing policy defines rules for all Home Networks if there is no specific Routing Policy for a Home Network.

##### Get Default Routing Policy

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
<br>

##### Set Default Routing Policy

To set the default routing policy to forward all uplink traffic and allow Home Networks to forward all downlink traffic:

```bash
$ ttn-lw-cli packetbroker home-networks policies set default --all
```

To customize, see [Flags]({{< relref "#flags" >}}) below.

##### Delete Default Routing Policy

To delete the default routing policy:

```bash
$ ttn-lw-cli packetbroker home-networks policies delete default
```

#### Home Network Routing Policies

Home Network routing policies take precedence over the default routing policy.

##### List Home Network Routing Policies

To list the routing policies for Home Networks:

```bash
$ ttn-lw-cli packetbroker home-network policies list
```

##### Get Home Network Routing Policy

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

##### Set Home Network Routing Policy

To set the Routing Policy for a Home Network:

```bash
$ ttn-lw-cli packetbroker home-network policies set <net-id> [<tenant-id>] --all
```

To customize, see [Flags]({{< relref "#flags" >}}) below.

{{< note >}}
To enable forwarding of all packets between you (the Forwarder) and The Things Network (the Home Network):

```bash
$ ttn-lw-cli packetbroker home-network policy set 000013 ttn --all
```
{{< /note >}}

##### Delete Home Network Routing Policy

To delete the Routing Policy for a Home Network:

```bash
$ ttn-lw-cli packetbroker home-networks policies delete <net-id> [<tenant-id>]
```

Replace `<net-id>` with the `NetID`. The `tenant-id` is optional and represents the tenant within the `NetID`.

#### Flags {#flags}

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

{{< /tabs/tab >}}

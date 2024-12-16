---
title: Configure
description: ""
weight: 2
distributions:
  - Cloud
  - Enterprise
  - Open Source
aliases:
  - "/reference/packet-broker/configure"
  - "/getting-started/packet-broker/configure/registration"
  - "/getting-started/packet-broker/configure/routing-policies"
  - "/the-things-stack/packet-broker/configure/registration"
  - "/the-things-stack/packet-broker/configure/routing-policies"
  - "/getting-started/packet-broker/configure"
---

This section shows you how to configure Packet Broker. You can manage your registration, list other networks, configure routing policies with other networks, and see which networks are forwarding traffic to your network.

<!-- more -->

To see which routing policies are configured by default for all deployments, see the [Packet Broker Routing]({{< ref "pb-routing" >}}) section.

## Prerequisites

1. Understand how Packet Broker works and what routing policies are. [Learn about Packet Broker]({{< relref "../" >}}).
2. {{% tts %}} connected to Packet Broker.
  - {{< distributions "Cloud" >}} **{{% tts %}} Cloud** is already connected to Packet Broker.
  - {{< distributions "Enterprise" "Open Source" >}} **{{% tts %}} Enterprise** and **Open Source**: see [Connect]({{< relref "connect" >}}).
3. An admin account for the {{% tts %}} deployment. All Packet Broker configuration requires administrative access.

Packet Broker can be configured using either the Console or the CLI.

## Configure Packet Broker

{{< tabs/container "Console" "CLI" >}}

{{< tabs/tab "Console" >}}

To configure Packet Broker, click on **Admin panel** in the left-hand menu and select **Packet Broker**.

{{< figure src="pb-menu.png" alt="Packet Broker Menu Button" >}}

This will take you to the dedicated Packet Broker configuration page.

### Register or Deregister Tenant

Before configuring routing policies, you must first register your tenant with Packet Broker. To register it, toggle the **Register network** switch and make sure that **Forwarder** and **Home network** are **enabled**.

{{< figure src="pb-register.png" alt="Register Packet Broker" >}}

{{< note >}}
Deregistering from Packet Broker will delete any routing policies associated with a tenant. Security settings may disable deregistering a network from Packet Broker.
{{</ note >}}

### Network Visibility

To publicly list your tenant, enable the **List network publicly** switch. This will allow other networks to easily find and configure routing policies with your network.

{{< figure src="pb-public.png" alt="List Network Publicly" >}}

{{< /tabs/tab >}}

{{< tabs/tab "CLI" >}}

### View Registration

To view the current registration with Packet Broker:

```bash
ttn-lw-cli packetbroker info
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

### Register Tenant

{{< note >}}
You can register with Packet Broker if you are a tenant. This is the case for all users of {{% tts %}} Cloud and in other deployments where you are using a host `NetID`. If you are using your own `NetID` without tenancy, please reach out to [join@packetbroker.net](mailto:join@packetbroker.net) for registration.
{{< /note >}}

To register or update your existing tenant registration:

```bash
ttn-lw-cli packetbroker register --listed
```

This updates the registration with Packet Broker based on your {{% tts %}} environment. When using {{% tts %}} Cloud, the registration is based on your subscription. When using {{% tts %}} Enterprise or Open Source, the registration is based on [your configuration]({{< relref "configure" >}}).

With `--listed`, you make your network publicly listed so it can be found by other network administrators. This flag is optional.

### Deregister Tenant

{{< warning >}}
This permanently deletes all routing policies that you configured as Forwarder to other Home Networks. It also permanently deletes all routing policies configured by other Forwarders for you as Home Network.
{{< /warning >}}

To deregister from Packet Broker:

```bash
ttn-lw-cli packetbroker deregister
```

{{< /tabs/tab >}}

{{< /tabs/container >}}

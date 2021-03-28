---
title: Registration
description: ""
weight: 1
distributions:
  - Cloud
  - Dedicated Cloud
  - Enterprise
  - Open Source
new_in_version: 3.12.0
---

This guide explains how to manage your Packet Broker registration.

<!--more-->

{{< cli-only >}}

## Prerequisites

1. {{% tts %}} connected to Packet Broker.
  - {{< distributions "Cloud" >}} **{{% tts %}} Cloud** is already connected to Packet Broker.
  - {{< distributions "Dedicated Cloud" >}} **{{% tts %}} Dedicated Cloud** can be connected on request. Please [contact The Things Industries support](mailto:support@thethingsindustries.com).
  - {{< distributions "Enterprise" "Open Source" >}} **{{% tts %}} Enterprise** and **Open Source**: see [Connect]({{< relref "connect" >}}).
2. An admin account for the {{% tts %}} deployment. All Packet Broker configuration requires administrative access.

## View Registration

To view the current registration with Packet Broker:

```bash
$ ttn-lw-cli packetbroker registration info
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
You can register with Packet Broker if you are a tenant. This is the case for all users of {{% tts %}} Cloud and in other deployments where you are using a host `NetID`. If you are using your own `NetID` without tenancy, please reach out to [join@packetbroker.org](mailto:join@packetbroker.org) for registration.
{{< /note >}}

To register or update your existing tenant registration:

```bash
$ ttn-lw-cli packetbroker register
```

This updates the registration with Packet Broker based on your {{% tts %}} environment. When using {{% tts %}} Cloud or Dedicated Cloud, the registration is based on your subscription. When using {{% tts %}} Enterprise or Open Source, the registration is based on [your configuration {{< distributions "Enterprise" "Open Source" >}}]({{< relref "configure" >}}).

### Deregister Tenant

{{< warning >}}
This permanently deletes all routing policies that you configured as Forwarder to other Home Networks. It also permanently deletes all routing policies configured by other Forwarders for you as Home Network.
{{< /warning >}}

To deregister from Packet Broker:

```bash
$ ttn-lw-cli packetbroker deregister
```

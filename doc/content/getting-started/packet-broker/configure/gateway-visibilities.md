---
title: Gateway Visibilities
description: ""
weight: 2
distributions:
  - Cloud
  - Dedicated Cloud
  - Enterprise
  - Open Source
new_in_version: 3.15.1
---

Gateway visibility configuration allows network administrators to configure who sees which information about gateways. Having gateways listed publicly on the map can help discovering partner networks, but it may also lead to privacy concerns. Therefore, Packet Broker allows configuring gateway visibilities with fine-grained settings. [Learn more about gateway visibilities]({{< relref "../#gateway-visibilities" >}}).

<!-- more -->

{{< info >}}{{% tts %}} currently only allows configuring the default gateway visibility; configuring visibility per Home Network is not yet supported.{{< /info >}}

{{< cli-only >}}

### Configure Default Gateway Visibility

The default gateway visibility defines rules for all Home Networks if there is no specific gateway visibility for a Home Network.

To get the default routing policy:

```bash
$ ttn-lw-cli packetbroker home-networks gateway-visibilities get default
```

{{< info >}}
If there is no default gateway visibility defined, this command fails with `not found`.
{{< /info >}}

<details><summary>Example output</summary>

This example has all fields enabled:

```json
{
  "updated_at": "2021-09-27T09:55:56.326241Z",
  "visibility": {
    "location": true,
    "antenna_placement": true,
    "antenna_count": true,
    "fine_timestamps": true,
    "contact_info": true,
    "status": true,
    "frequency_plan": true,
    "packet_rates": true
  }
}
```

</details>

#### Set Default Gateway Visibility

To set the default gateway visibility to enable all fields:

```bash
$ ttn-lw-cli packetbroker home-networks gateway-visibilities set default --all
```

To customize, see [Flags]({{< relref "#flags" >}}) below.

#### Delete Default Gateway Visibility

To delete the default gateway visibility:

```bash
$ ttn-lw-cli packetbroker home-networks gateway-visibilities delete default
```

#### Flags {#flags}

When setting gateway visibility, you can specify a combination of the following flags:

Flag | Meaning
--- | ---
`--all` | Enable all fields
`--location` | Enable coordinates of the gateway
`--antenna-placement` | Enable placement of the antenna (indoor or outdoor)
`--antenna-count` | Enable number of antennas
`--fine-timestamps` | Enable whether the gateway produces fine timestamps
`--contact-information` | Enable administrative and technical contact information of the gateway
`--status` | Enable online/offline status
`--frequency-plan` | Enable region and channel plan with frequencies that the gateway uses
`--packet-rates` | Enable receive and transmission packet rates

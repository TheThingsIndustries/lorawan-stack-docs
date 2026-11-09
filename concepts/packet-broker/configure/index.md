# Configure

> This section shows you how to configure Packet Broker. You can manage your registration, list other networks, configure routing policies with other networks, …

Source: https://www.thethingsindustries.com/docs/concepts/packet-broker/configure/


This section shows you how to configure Packet Broker. You can manage your registration, list other networks, configure routing policies with other networks, and see which networks are forwarding traffic to your network.

<!-- more -->

To see which routing policies are configured by default for all deployments, see the [Packet Broker Routing](https://www.thethingsindustries.com/docs/concepts/packet-broker/pb-routing/) section.

## Prerequisites

1. Understand how Packet Broker works and what routing policies are. [Learn about Packet Broker](https://www.thethingsindustries.com/docs/concepts/packet-broker/).
2. The Things Stack connected to Packet Broker.

- 






  
    
  



  

<a href="https://www.thethingsindustries.com/the-things-stack/deployment-options" target="_blank" rel="noopener" class="badge-stack" title="Available in: Cloud">

  <img class="badge" src="https://www.thethingsindustries.com/docs/img/tts_frames/frame_cloud.svg" alt="Cloud">

</a>


 **The Things Stack Cloud** is already connected to Packet Broker.
- 






  
    
  

  
    
  



  

  

<a href="https://www.thethingsindustries.com/the-things-stack/deployment-options" target="_blank" rel="noopener" class="badge-stack" title="Available in: Enterprise, Open Source">

  <img class="badge" src="https://www.thethingsindustries.com/docs/img/tts_frames/frame_enterprise.svg" alt="Enterprise">

  <img class="badge" src="https://www.thethingsindustries.com/docs/img/tts_frames/frame_open_source.svg" alt="Open Source">

</a>


 **The Things Stack Enterprise** and **Open Source**: see [Connect](https://www.thethingsindustries.com/docs/concepts/packet-broker/connect/).

3. An admin account for the The Things Stack deployment. All Packet Broker configuration requires administrative access.

Packet Broker can be configured using either the Console or the CLI.

## Configure Packet Broker

**Console:**

To configure Packet Broker, click on **Admin panel** in the left-hand menu and select **Packet Broker**.

![Packet Broker Menu Button](https://www.thethingsindustries.com/docs/concepts/packet-broker/configure/pb-menu.png)


This will take you to the dedicated Packet Broker configuration page.

### Register or Deregister Tenant

Before configuring routing policies, you must first register your tenant with Packet Broker. To register it, toggle the **Register network** switch and make sure that **Forwarder** and **Home network** are **enabled**.

![Register Packet Broker](https://www.thethingsindustries.com/docs/concepts/packet-broker/configure/pb-register.png)


> **Note:** Deregistering from Packet Broker will delete any routing policies associated with a tenant. Security settings may disable deregistering a network from Packet Broker.


### Network Visibility

To publicly list your tenant, enable the **List network publicly** switch. This will allow other networks to easily find and configure routing policies with your network.

![List Network Publicly](https://www.thethingsindustries.com/docs/concepts/packet-broker/configure/pb-public.png)




**CLI:**

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

> **Note:** You can register with Packet Broker if you are a tenant. This is the case for all users of The Things Stack Cloud and in other deployments where you are using a host `NetID`. If you are using your own `NetID` without tenancy, please reach out to [join@packetbroker.net](mailto:join@packetbroker.net) for registration.


To register or update your existing tenant registration:

```bash
ttn-lw-cli packetbroker register --listed
```

This updates the registration with Packet Broker based on your The Things Stack environment. When using The Things Stack Cloud, the registration is based on your subscription. When using The Things Stack Enterprise or Open Source, the registration is based on [your configuration](https://www.thethingsindustries.com/docs/concepts/packet-broker/configure/).

With `--listed`, you make your network publicly listed so it can be found by other network administrators. This flag is optional.

### Deregister Tenant

> **Warning:** This permanently deletes all routing policies that you configured as Forwarder to other Home Networks. It also permanently deletes all routing policies configured by other Forwarders for you as Home Network.


To deregister from Packet Broker:

```bash
ttn-lw-cli packetbroker deregister
```



## Pages in this section

- [Routing Policies](https://www.thethingsindustries.com/docs/concepts/packet-broker/configure/routing-policies/index.md): Routing policies define the rules that Forwarders configure for routing messages to Home Networks. Routing policies are peer-to-peer: a Forwarder can define …
- [Gateway Visibility Settings](https://www.thethingsindustries.com/docs/concepts/packet-broker/configure/gateway-visibilities/index.md): Gateway visibility configuration allows network administrators to configure who sees which gateway-related information. Having gateways listed publicly on the …


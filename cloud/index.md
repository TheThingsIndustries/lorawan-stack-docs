# The Things Stack Cloud

> Concepts specific to The Things Stack Cloud

Source: https://www.thethingsindustries.com/docs/cloud/


The Things Stack Cloud is a fully managed software as a service (SaaS) solution offered by The Things Industries. This is an out-of-the-box simple, scalable LoRaWAN network server solution, 100% managed and maintained by us, recommended for most users building LoRaWAN® solutions.

The Things Stack Cloud includes a [service level agreement](https://www.thethingsindustries.com/document/sla/) which offers an uptime commitment so that you can be assured of the availability of the service.
We offer multiple plans based on your needs including a [free discovery tier](https://www.thethingsindustries.com/stack/plans/) for users to evaluate the product. Signing up to The Things Stack Cloud is very easy and within a few minutes, you can [get started](https://www.thethingsindustries.com/docs/getting-started/2-prerequisites/) with a production-grade LoRaWAN network.

#### Multi-tenancy

The Things Stack Cloud is a **multi-tenant** environment. This means that while each customer has their own isolated network, the underlying infrastructure is shared with other customers.

#### Clusters

The Things Stack Cloud is a multi-cluster deployment. This means that while your account, login and entity information is stored in a central location, you can connect your gateways to a cluster closer to the physical location of your gateways, and route all your IoT traffic in that cluster. Thi significantly reduces latency and improves the performance of your gateways.

The Things Stack Cloud currently has the following clusters:

| **Cluster ID** | **Name**        | **Location**      |
| -------------- | --------------- | ----------------- |
| `au1`          | Australia 1     | Sydney, Australia |
| `as1`          | Asia 1          | Tokyo, Japan      |
| `eu1`          | Europe 1        | Dublin, Ireland   |
| `eu2`          | Europe 2        | London, UK        |
| `nam1`         | North America 1 | California, USA   |

You can head over to our cluster picker at [console.cloud.thethings.industries](https://console.cloud.thethings.industries) and find out which The Things Stack Cloud clusters are recommended for your deployment based on the location of your devices.

![Recommended clusters](https://www.thethingsindustries.com/docs/cloud/recommended-locations.png)


#### Status Page

Visit [The Things Industries services status page](https://status.thethings.industries/) to check the current status of The Things Stack Cloud services. Be up do date with the recent The Things Stack Cloud upgrades, scheduled maintenances and reported incidents.


## Pages in this section

- [Subscription and billing](https://www.thethingsindustries.com/docs/cloud/billing-and-subscription-management/index.md): This section shows how to buy The Things Stack subscription, and to perform subscription and billing management for your business accounts with The Things …
- [Server Addresses](https://www.thethingsindustries.com/docs/cloud/addresses/index.md): This page provides configuration details and guidance for accessing and managing The Things Stack Cloud clusters, including Console, API endpoints, OAuth, CLI …
- [Custom branding](https://www.thethingsindustries.com/docs/cloud/branding/index.md): This reference gives details on how to customize the branding of the login pages and the Console.
- [Data Retention and Privacy](https://www.thethingsindustries.com/docs/cloud/data-retention/index.md): This reference contains information about what access administrators and users have to data, and how long The Things Stack persists device data. For inquiries …


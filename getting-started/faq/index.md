# FAQ

> Frequently asked questions about LoRaWAN® and The Things Stack

Source: https://www.thethingsindustries.com/docs/getting-started/faq/


Check out frequently asked question about The Things Stack and learn how to get the most out of your deployment.

## Why to use LoRaWAN® and The Things Stack for your next IoT use case?

LoRaWAN is a communication protocol that has a proven advantage in transmitting small sensor data packets over long distances in comparison to other wireless technologies, which makes it great for various use cases, especially industrial deployments. The Things Stack is a complete LoRaWAN Network Server that enables you to easily utilize LoRaWAN features to build your use case, while being fully compliant to the LoRa Alliance specifications.

Check out [this article](https://www.thethingsindustries.com/news/why-you-should-use-lora-technology-and-lorawan-for-your-next-iot-use-case/) for more info about benefits of LoRaWAN for your use case.

## How does The Things Stack work?

Check out [The Things Stack Architecture](https://www.thethingsindustries.com/docs/concepts/architecture/) guide for a detailed overview of the platform components and their functionality.

## How to choose a LoRaWAN device?

Check out the [Device Repository](https://www.thethingsnetwork.org/device-repository/) that contains a list of the most popular end devices within LoRaWAN ecosystem and try to find devices that match your needs. You can also check out our [Use Case selector](https://www.thethingsindustries.com/usecase-selector/) to get a list of recommended devices and partners for your specific use case.

## How to easily provision devices in The Things Stack?

The easiest way of provisioning devices is using [Device Repository](https://www.thethingsnetwork.org/device-repository/) because that way you don't have to worry too much about [LoRaWAN and Regional Parameters](https://www.thethingsindustries.com/docs/concepts/features/lorawan/version-support/) versions as they are automatically provided by The Things Stack.

Check the [Adding Devices](https://www.thethingsindustries.com/docs/hardware/devices/adding-devices/) guide for detailed instructions on how to provision devices using Device Repository or manually, as well as in bulk. Check [here](https://www.thethingsindustries.com/docs/hardware/devices/models/) for simple guides on connecting various device models to The Things Stack.

Keep in mind that we highly recommend to use OTAA activation method, rather than ABP. Check [here](https://www.thethingsindustries.com/docs/hardware/devices/concepts/abp-vs-otaa/) why.

## How to choose a LoRaWAN gateway?

Gateways that use the legacy [Semtech UDP Packet Forwarder](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/udp/) have many security drawbacks, so gateways that use the [LoRa Basics™ Station](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/lora-basics-station/) are strongly recommended.

[Adding gateways](https://www.thethingsindustries.com/docs/hardware/gateways/concepts/adding-gateways/) guides you through simple process of gateway onboarding. Check [here](https://www.thethingsindustries.com/docs/hardware/gateways/models/) for simple guides on connecting various gateway models to The Things Stack.

## How to easily interact with The Things Stack?

You can [interact with The Things Stack](https://www.thethingsindustries.com/docs/concepts/features/) via Console, CLI and API. For newly onboarded users, the easiest way is probably using the Console Web UI. Advanced users who are familiar with the CLI or API can even build scripts on top of them to automate certain processes.

## Can I host The Things Stack on my own hardware?

Yes, The Things Stack can be installed on your own hardware - check out a detailed guide on [hosting The Things Stack](https://www.thethingsindustries.com/docs/enterprise/), whether on you're installing it for DIY projects or for production purposes.

## How could you benefit from The Things Stack multi-cluster and multi-tenant deployments?

The Things Stack Cloud is a multi-tenant and multi-cluster deployment. Being multi-tenant makes it possible for each customer to has their own isolated network, while sharing the underlying infrastructure, and being multi-cluster makes it possible to store account information in a central location, while routing all your IoT traffic to the closest cluster, therefore reducing latency significantly.

Check [The Things Stack Cloud documentation](https://www.thethingsindustries.com/docs/cloud/) for more details and a list of available clusters.

## How to improve LoRaWAN coverage and network performance?

Improving the network coverage can be done by utilizing [Packet Broker](https://www.thethingsindustries.com/docs/concepts/packet-broker/) which exchanges traffic between The Things Stack and other LoRaWAN networks. The Things Stack Sandbox and The Things Stack Cloud are connected to Packet Broker by default.

You can choose to contribute to the community by defining [policies](https://www.thethingsindustries.com/docs/concepts/packet-broker/configure/) to route traffic from your gateways to The Things Stack Sandbox devices.

## Does The Things Stack store data?

For certain The Things Stack deployments it is possible to enable [Storage Integration](https://www.thethingsindustries.com/docs/integrations/storage/), that allows storing upstream data and retrieving it at a later time.

## How to get the most out of the data acquired from devices?

The Things Stack features a large number of third party platform [integrations](https://www.thethingsindustries.com/docs/integrations/). They can help you turn your sensor data from The Things Stack into a completely functional end-to-end IoT solution.


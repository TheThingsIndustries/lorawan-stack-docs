---
title: "Best Practices"
description: ""
weight: 5
---

Check best practices below to learn how to get the most out of LoRaWAN® and {{% tts %}}.

<!--more-->

## Why use LoRaWAN and {{% tts %}} for your next IoT use case?

LoRaWAN is a communication protocol that has proven advantage in transmitting small sensor data packets over long distances in comparison to other wireless technologies, which makes it great for various use cases, especially industrial deployments. {{% tts %}} is a complete LoRaWAN Network Server that enables you to easily utilize LoRaWAN features to build your use case, while being fully compliant to the LoRa Alliance specifications.

Check out [this article](https://www.thethingsindustries.com/news/why-you-should-use-lora-technology-and-lorawan-for-your-next-iot-use-case/) for more info about benefits of LoRaWAN for your use case.

## How to choose a LoRaWAN device?

Check out the [Device Repository](https://www.thethingsnetwork.org/device-repository/) that contains a list of the most popular end devices within LoRaWAN ecosystem and try to find devices that match your needs. You can also check out our [Use Case selector](https://www.thethingsindustries.com/usecase-selector/) to get a list of recommended devices and partners for your specific use case.

## How to easily provision devices in {{% tts %}}?

The easiest way of provisioning devices is using [Device Repository](https://www.thethingsnetwork.org/device-repository/) because that way you don't have to worry too much about LoRaWAN and Regional Parameters versions as they are automatically provided by {{% tts %}}. Check the [Adding Devices]({{< ref "/devices/adding-devices" >}}) guide for detailed instructions on how to provision devices using Device Repository or manually, as well as in bulk.

Also, it is recommended use OTAA activation method, rather than ABP. Check [here]({{< ref "/devices/concepts/abp-vs-otaa/" >}}) why.

## How to choose a LoRaWAN gateway?

Gateways that use the legacy [{{% udp-pf %}}]({{< ref "/gateways/concepts/udp/" >}}) have many security drawbacks, so gateways that use the [{{% lbs %}}]({{< ref "/gateways/concepts/lora-basics-station" >}}) are highly recommended.

[Adding gateways]({{< ref "/gateways/concepts/adding-gateways/" >}}) guides you through simple process of gateway onboarding. Check [here]({{< ref "/gateways/models/" >}}) for simple guides on connecting various gateway models to {{% tts %}}.

## How to easily interact with {{% tts %}}?

You can [interact with {{% tts %}}]({{< ref "/the-things-stack/interact/" >}}) via Console, CLI and API. For newly onboarded users, the easiest way is probably using the Console. Advanced users who are familiar with the CLI or API can even build scripts on top of them to automate certain processes.

## How could you benefit from {{% tts %}} multi-cluster and multi-tenant deployments?

{{% tts %}} Cloud is a multi-tenant and multi-cluster deployment. Being multi-tenant makes it possible for each customer to has their own isolated network, while sharing the underlying infrastructure, and being multi-cluster makes it possible to store account information in a central location, while routing all your IoT traffic to the closest cluster, therefore reducing latency significantly.

Check [{{% tts %}} Cloud documentation]({{< ref "/the-things-stack/cloud" >}}) for more details and a list of available clusters.

## How to improve LoRaWAN coverage and network performance?

Improving the network coverage can be done by utilizing [Packet Broker]({{< ref "/the-things-stack/packet-broker/" >}}) which exchanges traffic between {{% tts %}} and other LoRaWAN networks. {{% ttss %}} and {{% tts %}} Cloud are connected to Packet Broker by default.

You can choose to contribute to the community by defining [policies]({{< ref "/the-things-stack/packet-broker/configure/" >}}) to route traffic from your gateways to {{% ttss %}} devices.

## How to get the most out of the data acquired from devices?

{{% tts %}} features a large number of out-of-the-box platform integrations. Check them out [here]({{< ref "/integrations/" >}}).
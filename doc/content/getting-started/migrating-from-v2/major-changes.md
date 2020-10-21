---
title: Major Changes in The Things Stack
weight: 10
---

Before getting started, we will discuss major breaking changes between {{% ttnv2 %}} and {{% tts %}}, along with some guidelines to make the migration process easier to manage.

<!--more-->

## Architecture

{{% tts %}} is using a new architecture. See [Components]({{< ref "/reference/components" >}}) for a complete overview of the different components of {{% tts %}}.

## LoRaWAN support

{{% tts %}} requires the **LoRaWAN version** and **Regional Parameters** (LoRaWAN PHY version) to be set per end device. These default to LoRaWAN version **1.0.2** and LoRaWAN Regional Parameters version **1.0.2 Rev B** for end devices imported from {{% ttnv2 %}}, because this configuration is the most consistent with V2.

This means that all end devices need a frequency plan. You will have to choose the frequency plan corresponding to your region. See [Frequency Plans]({{< ref "/reference/frequency-plans" >}}) for a list of supported Frequency Plans and their respective IDs.

Furthermore, {{% tts %}} brings full support for all LoRaWAN versions, as well as Class B and Class C modes.

## Gateway Coverage

The Packet Broker enables peering between networks, so traffic received by one network (e.g. the Public Community Network) but intended for a different network ({{% tts %}}) can be forwarded to and from that network. See the [Peering Guide]({{< ref "/integrations/peering" >}}) for details on Packet Broker and how to enable it for your network.

With Packet Broker enabled on both {{% tts %}} and {{% ttnv2 %}}, you can receive traffic on {{% tts %}} without having to re-configure any of your gateways.

>**Note:** Packet Broker is only enabled on The Things Network Public Community Network and The Things Industries Cloud Hosted.

For private {{% tts %}} deployments with Packet Broker disabled, you will need to re-configure your gateways to connect to {{% tts %}}, so that you can start receiving traffic from your end devices.

In order to connect a gateway to {{% tts %}}, follow instructions for [Adding Gateways]({{< ref "/gateways/adding-gateways" >}}). Then, reconfigure the gateway to connect to {{% tts %}}, and regenerate its API key (if required).

Also see [Gateways]({{< ref "/gateways" >}}) for instructions on configuring popular LoRaWAN gateways with {{% tts %}}.

## Application Data

{{% tts %}} uses a different data format for uplink and downlink traffic than {{% ttnv2 %}}.

For details on the data format of {{% ttnv2 %}}, see [The Things Network API Reference](https://www.thethingsnetwork.org/docs/applications/mqtt/api.html).

For details on the data format of {{% tts %}}, see the [Data Formats]({{% ref "/integrations/data-formats" %}}) section. It uses a different schema, different names, and has much richer metadata support.

>**Note:** When migrating to {{% tts %}}, ensure your application can properly handle the new {{% tts %}} data format.

### Payload Formats

{{% ttnv2 %}} has support for payload decoders, converters, validators (for uplink) and encoders (for downlink). These can be either CayenneLPP or Javascript functions.

{{% tts %}} has support for an uplink payload formatter (similar to the payload decoder) and a downlink payload formatter (similar to the payload encoder). These can be set per application, and can even be overridden per end device. Similar to {{% ttnv2 %}}, CayenneLPP and Javascript functions are supported.

Migrating the {{% ttnv2 %}} payload encoder and decoder to an uplink and downlink payload formatter should be straightforward. See [Payload Formatters]({{< ref "/integrations/payload-formatters" >}}) for more details.

### Integrations

Read about the integrations supported by {{% tts %}} in the [Integrations]({{< ref "/integrations" >}}) section.

#### MQTT Traffic

You will need to change the MQTT server your application connects to. {{% tts %}} has a new MQTT server address, so you will also need to create new API keys and update your MQTT credentials accordingly.

Read more in the [MQTT Server]({{< ref "/integrations/mqtt" >}}) section.

#### Webhooks

The HTTP Integration is now called HTTP Webhooks. The payload format, downlink endpoints, paths and security settings have changed, so make sure to read more in the [HTTP Webhooks]({{< ref "/integrations/webhooks" >}}) section.

#### Storage Integration

{{% tts %}} does not currently support a Storage integration similar to {{% ttnv2 %}}, but this feature will be added in a future release.

## Suggested Migration Process

**Step 1:** Update applications to support the {{% tts %}} data format. If you are using payload formatters, make sure to set them correctly from the Application settings page.

**Step 2:** Follow this guide in order to migrate a single end device (and gateway, if needed) to {{% tts %}}. Continue by gradually migrating your end devices in small batches. Avoid migrating production workloads before you are certain that they will work as expected.

**Step 3:** Once you are confident that your end devices are working properly, migrate the rest of your devices and gateways to {{% tts %}}.

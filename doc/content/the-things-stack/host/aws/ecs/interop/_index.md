---
title: "Interoperability"
description: "LoRaWAN Backend Interfaces"
weight: 8
aliases: [/getting-started/aws/ecs/interop]
---

{{% tts %}} exposes a subset of the Join Server API defined by LoRaWAN Backend Interfaces 1.0 and 1.1. This is used for interoperability between LoRaWAN networks.

<!--more-->

The functionality is exposed by the Identity Server. Identity Server answers to `HomeNSReq` to inform networks about the home network of an end device when they try to join a LoRaWAN network. Packet Broker is the typical consumer of this: enable interoperability if you want to use device activations through Packet Broker.

# TLS

You can choose between AWS Load Balancer or a reverse proxy to terminate TLS in your deployment.

The benefit of AWS Load Balancer is that it can use ACM managed certificates that are automatically renewed by AWS. However, AWS Load Balancer does not support TLS client authentication. If you need TLS client authentication for LoRaWAN Backend Interfaces interoperability, let the proxy terminate TLS.

## TLS termination by AWS Load Balancer

This requires the following settings:

Template | Parameter | Value
--- | --- | ---
`3-2-load-balancer` | `SupportProxyTLS` | `false`
`3-2-load-balancer` | `InteropEnabled` | `true`
`5-3a-ecs-is-service` | `InteropEnabledIS` | `true`
`5-4-ecs-services` | `SupportProxyTLS` | `false`

## TLS termination by the proxy

Template | Parameter | Value
--- | --- | ---
`3-2-load-balancer` | `SupportProxyTLS` | `true`
`3-2-load-balancer` | `InteropEnabled` | `true`
`5-3a-ecs-is-service` | `InteropEnabledIS` | `true`
`5-4-ecs-services` | `SupportProxyTLS` | `true`

In this scenario, Certbot requests Let's Encrypt certificates.

# Packet Broker settings

In template `4-2a-configuration`, configure whether Packet Broker can authenticate with your {{% tts %}} deployment via LoRaWAN Backend Interfaces with the `InteropPacketBrokerEnabled` setting. Packet Broker uses this to request whether your {{% tts %}} deployment is the home network of an end device that is trying to join a network.

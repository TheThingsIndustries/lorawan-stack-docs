---
title: "Prerequisites"
description: ""
weight: 2
---

This page describes what you'll need before deploying {{% tts %}} on AWS ECS.

<!--more-->

Before you can start the deployment, you will need to make sure that you have:

- An AWS account with billing enabled.
- An SSH keypair registered in the AWS region of choice.
- A domain name with a hosted zone in AWS Route 53. For multi-tenant deployments, you need to be able to add a wildcard subdomain under this domain.
- A LoRa Alliance NetID and DevAddr block. For development and testing it is possible ot use NetID `000000` and DevAddr block `00000000/6`
- A license key for {{% tts %}}.
- Configuration and Certificates for Backend Interfaces interop (optional).
- Configuration and Certificates for Packet Broker peering (optional).

You will need to come up with the following parameters, which will be used in multiple places:

- Network Name: the name of the network.  
  Example: The Things Industries uses `ttich` for their Cloud Hosted service.
- Environment: `prod` or `staging`.
- Cluster: the name of the cluster.  
  Example: The Things Industries uses continent+number for their Cloud Hosted service. `eu1` for Europe 1, `nam1` for North America 1, etc.
- Cluster Secret for internal communication.  
  This can be randomly generated with `openssl rand -hex 24`. When deploying a network with multiple clusters, this needs to be the same for all clusters.
- OAuth Client ID and Secret for the Console.  
  Example: The Things Industries uses client ID `console-` + cluster for their Cloud Hosted service. `console-eu1` for the Console of the Europe 1 cluster. The client secret can be randomly generated with `openssl rand -hex 24`.
- OAuth Client ID and Secret for Device Claiming.  
  Example: The Things Industries uses client ID `device-claiming-` + cluster for their Cloud Hosted service. `device-claiming-eu1` for the Console of the Europe 1 cluster. The client secret can be randomly generated with `openssl rand -hex 24`.

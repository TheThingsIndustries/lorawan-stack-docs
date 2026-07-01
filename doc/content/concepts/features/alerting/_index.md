---
title: "Alerting"
description: ""
distributions: ["Cloud", "Enterprise"]
aliases: [/the-things-stack/alerting/gateway-connectivity-outages, /the-things-stack/alerting]
---

Alerting in {{% tts %}} refers to notifications which are sent when certain conditions are met, usually signaling anomalous behavior exhibited by end devices or gateways.

<!--more-->

A [{{% tts %}} Cloud Plus subscription](https://www.thethingsindustries.com/stack/plans/) is required to use this feature.
If you would like to evaluate this feature on your {{% tts %}} Cloud tenant without a {{% tts %}} Cloud Plus subscription, please contact `support@thethingsindustries.com`.

{{< note >}} Alerting is powered by the [Alert Routing Server]({{< ref "/concepts/architecture/components/alert-routing-server" >}}). On {{% tts %}} Cloud it is managed for you. On self-managed Enterprise deployments it is available only through the [AWS CloudFormation templates]({{< ref "/enterprise/aws/ecs/deployment#alert-routing-server-optional" >}}); see the [Alert Routing Server configuration reference]({{< ref "/enterprise/management/configuration/alert-routing-server" >}}). It is not available for Docker or Kubernetes deployments. {{</ note >}}

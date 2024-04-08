---
title: "Alerting"
description: ""
distributions: ["Enterprise", "Cloud"]
weight: 1
---

{{< new-in-version "3.30.0">}}

Alerting in {{% tts %}} refers to notifications which are sent when certain conditions are met, usually signaling anomalous behavior exhibited by end devices or gateways.

<!--more-->

Alert notifications are dispatched by {{% tts %}} using _alert notification receivers_ and _alert notification profiles_. The receivers and profiles can be managed only by {{% tts %}} network admins, but individual users with access to entities can choose which profile should be used to dispatch alert notifications.

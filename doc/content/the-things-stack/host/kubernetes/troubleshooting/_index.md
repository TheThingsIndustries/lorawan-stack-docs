---
title: "Troubleshooting"
description: ""
weight: 6
aliases: [/getting-started/kubernetes/troubleshooting]
---

This guide contains general troubleshooting information.

### Why do the GS, NS, AS and JS components fail to start?

The one thing that is common between these four components (and not others) is that they all use Redis. Make sure to troubleshoot the Redis server that's used. Ensure that Redis is reachable from within the cluster. If authentication is required, make sure that the configuration works.

If using the Bitnami Helm Charts for Redis, make sure to either setup TLS or disable password authentication. The latter is recommended if this database is used for testing. Check Bitnami's documentation on how to disable authentication. It usually involves setting `auth.enabled` to `false` for the Redis Helm charts and not using a Redis password in {{% tts %}}.



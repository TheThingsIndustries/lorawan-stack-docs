---
title: "Troubleshooting"
description: ""
weight: 6
aliases:
  [
    /getting-started/kubernetes/generic/troubleshooting,
    /the-things-stack/host/kubernetes/generic/troubleshooting,
  ]
---

This guide contains general troubleshooting information.

<!--more-->

## Why do the GS, NS, AS and JS components fail to start?

The one thing that is common between these four components (and not others) is that they all use Redis. Make sure to troubleshoot the Redis server that's used. Ensure that Redis is reachable from within the cluster. If authentication is required, make sure that the configuration works.

If using the Bitnami Helm Charts for Redis, make sure to either setup TLS or disable password authentication. The latter is recommended if this database is used for testing. Check Bitnami's documentation on how to disable authentication. It usually involves setting `auth.enabled` to `false` for the Redis Helm charts and not using a Redis password in {{% tts %}}.

## Missing Tenant ID

This issue occurs most likely due to not setting the `tenancy.defaultID` for single tenant deployments.

## x509_unknown_authority

For this error, check that the value set in `global.tls.rootCA` is base64 encoded and matches the domain where the installation is accessible.

## x509_certificate_invalid

For this error, make sure that the value set in `ingress.traefik.tls.secretName` is a valid TLS certificate.

## pkg/util/store:driver (driver error)

{{% tts %}} runs Kubernetes jobs to initialize and migrate Postgres. This error can occur if the {{% tts %}} is accessed either before these jobs are run or if the jobs failed to execute. Check the status of the jobs for more details on what went wrong.

## Failed to check version update (certificate signed by unknown authority)

If the `skip-version-check` flag is disabled, the stack will check for new updates. To check for updates, requests are going to be sent to [thethingsindustries.com](https://thethingsindustries.com). For the requests to succeed, a CA certificate must be present in the trust store of the cluster that accepts the thethingsindustries.com domain (e.g. [Amazon Root CA 1](https://www.amazontrust.com/repository/)).  Another alternative is adding it to the list of certificates in the `rootCA` field in the Helm chart.

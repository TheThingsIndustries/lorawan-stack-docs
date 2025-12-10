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

If the `skip-version-check` flag is disabled, the stack will check for new updates. To check for updates, requests are going to be sent to [thethingsindustries.com](https://thethingsindustries.com). For the requests to succeed, a CA certificate must be present in the trust store of the cluster that accepts the thethingsindustries.com domain (e.g. [Amazon Root CA 1](https://www.amazontrust.com/repository/)). Another alternative is adding it to the list of certificates in the `rootCA` field in the Helm chart.

## My gateway is configured to use LoRa Basics Station, but it is not connecting.

There are multiple possible causes for this issue. Check the logs of the gateway to see if there are any errors. Incorrectly configured TLS certificates are one of the most common ones. Check if the trust store used by the gateway contains the CA certificate that signed the TLS certificate used by Helm chart.

If you see an error similar to `Malformed CUPS response: URI segments lengths (110) exceed available data (0)` that means your ingress controller needs to have buffering enabled explicitly for LoRa Basics Station connections. LoRa Basics Station CUPS does not support chunked transfer encoding and the gateway must receive a 'Content-Length' header in the HTTP responses. Enabling buffering will ensure that the entire response is buffered before being sent to the gateway, allowing the 'Content-Length' header to be set.

E.g., if you are using Traefik as ingress controller, you can enable buffering by creating a Traefik middleware and adding the middleware annotations to the Helm chart. Check the example Traefik configuration in the [sample ingress controllers guide]({{< ref "/enterprise/kubernetes/generic/prerequisites/sample-ingress-controllers/" >}}).

You can find more info in the LoRa Basics Station gateway setup guide: [LoRa Basics™ Station Gateway Setup]({{< ref "/hardware/gateways/concepts/lora-basics-station/">}})).

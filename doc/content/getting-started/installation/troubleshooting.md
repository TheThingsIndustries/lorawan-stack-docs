---
title: "Troubleshooting Installation"
description: ""
---

This section contains help for common issues you may encounter while installing {{% tts %}}.

## Component address is not included in this license

Ensure that you configure the `is.oauth.ui.canonical-url` with a domain that matches the domain in your license. See the [Configuration Reference]({{< ref "reference/configuration" >}}) for more information about the configuration options.

## Version in "docker-compose.yml" is unsupported

Our `docker-compose.yml` file uses [Compose file version 3.7](https://docs.docker.com/compose/compose-file/). If using a package manager to install Docker Compose, it is possible to install an old, unsupported version. See Docker's [installation instructions](https://docs.docker.com/compose/install/) to upgrade to a more recent version.

## Token Exchange Refused

1. Double check that you used the correct `client-secret` when you authorized the client in [Running {{% tts %}}]({{< relref "running-the-stack" >}}).
2. If running on `localhost`, see the [Localhost]({{< ref "getting-started/installation/configuration#localhost" >}}) section for additional info.
3. You may have invalid certificates. Verify using `openssl verify -CAfile ca.pem cert.pem`.

## Can't access the server

Ensure you have a DNS record pointing to your server's public IP address. See your domain registrar's help section for instructions, or [name.com's DNS guide](https://www.name.com/support/articles/205188538-Pointing-your-domain-to-hosting-with-A-records) for general information about pointing records to your IP address.

## Forbidden

If you see an error reading:

> The client is not authorized to request a token using this method

while trying to log into the Console, make sure you used the same `client-secret` in your {{% tts %}} configuration (`ttn-lw-stack-docker.yml` file) and for authorizing the Console client in [Running {{% tts %}}]({{< relref "running-the-stack" >}}).

---
title: "Troubleshooting Installation"
description: ""
weight: 4
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
4. If you configure {{% tts %}} without TLS and attempt to connect using `https` you will receive this error. Configure TLS or use `http`.
5. If you are running an offline {{% tts %}} deployment, generating [Let's Encrypt certificates]({{< ref "/getting-started/installation/certificates#automatic-certificate-management" >}}) for your domain name might fail because of lack of the Internet connection. Try using certificates from a [Custom Certificate Authority]({{< ref "/getting-started/installation/certificates#custom-certificate-authority" >}}).

## Can't access the server

Ensure you have a DNS record pointing to your server's public IP address. See your domain registrar's help section for instructions, or [name.com's DNS guide](https://www.name.com/support/articles/205188538-Pointing-your-domain-to-hosting-with-A-records) for general information about pointing records to your IP address.

## Forbidden

If you see an error reading:

> Invalid redirect URI

Check that you entered the correct server address when [registering the Console as an OAuth client]({{< ref "getting-started/installation/running-the-stack#initialization" >}})

If you see an error reading:

> The client is not authorized to request a token using this method

while trying to log into the Console, make sure you used the same `client-secret` in your {{% tts %}} configuration (`ttn-lw-stack-docker.yml` file) and for authorizing the Console client in [Running {{% tts %}}]({{< relref "running-the-stack" >}}).

## Missing tenant ID

If you are facing the `missing_tenant_id` error, that means you are trying to access the Console in a multi-tenant {{% tts %}} environment on an address that doesn't contain any tenant ID, e.g. `https://thethings.example.com`. To access the Console of a particular tenant in a multi-tenant environment, you have to specify a tenant ID as a URL subdomain, e.g. `https://<tenant-id>.thethings.network.com`.
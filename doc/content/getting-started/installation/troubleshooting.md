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

```
Invalid redirect URI
```

check that you entered the correct server address when [registering the Console as an OAuth client]({{< ref "getting-started/installation/running-the-stack#initialization" >}}).

If you encounter the following error while trying to long into the Console:

```
The client is not authorized to request a token using this method
```

make sure you used the same `client-secret` in your {{% tts %}} configuration (`ttn-lw-stack-docker.yml` file) and for authorizing the Console client in [Running {{% tts %}}]({{< relref "running-the-stack" >}}).

## Could not initialize Server

The cause of this error lies in misconfiguration of {{% tts %}} server components. A few examples related to this error are listed below.

When an invalid tenant admin key is configured, the initialization of the Identity Server will fail with the following output:

```
stack_1      | INFO Setting up Identity Server
stack_1      | error:cmd/internal/shared:initialize_identity_server (could not initialize Identity Server)
stack_1      |     correlation_id=c98b9172c25c45269ac674aad04710f1
stack_1      | --- error:pkg/identityserver:tenant_admin_key (invalid tenant admin key)
stack_1      |     correlation_id=c3ad9a81631c40f88ec35eb1b3234f54
stack_1      | --- encoding/hex: invalid byte: U+00E2 '?'
```

When a wrong database URI is configured, the initialization of the Application Server will fail:

```
stack_1      | INFO	Setting up Application Server
stack_1      | error:cmd/internal/shared:initialize_application_server (could not initialize Application Server)
stack_1      |     correlation_id=4804d40c2b9143209f95925d47c6881e
stack_1      | --- error:pkg/errors:net_operation (dial tcp 127.0.0.1:5432: connect: connection refused)
stack_1      |     message=dial tcp 127.0.0.1:5432: connect: connection refused
```

When the Network Server is configured to use a DevAddr block that is not included in the license, its initialization will fail:

```
stack_1      | INFO Setting up Network Server
stack_1      | error:cmd/internal/shared:initialize_network_server (could not initialize Network Server)
stack_1      |     correlation_id=47a8f405f56f45918d1277aeee8faaa7
stack_1      | --- error:pkg/license:dev_addr_prefix_not_licensed (DevAddr prefix 00000000/7 is not included in this license)
stack_1      |     prefix=00000000/7
stack_1      |     licensed=[XXXXXXXX/24] (redacted)
```

## Error while parsing {{% tts %}} configuration file

One of the issues that can cause parsing errors is using inappropriate indentation in {{% tts %}} configuration file, so you might end up seeing something like:

```
stack_1      | While parsing config: yaml: line 34: did not find expected key
```

In most cases, the error will point to an exact line of your configuration file where the issue occured. To fix this, apply the correct indentation. Use `ttn-lw-stack config --yml` to see the default {{% tts %}} configuration with correct indentation in your terminal.

## Missing tenant ID

If you are facing the `missing_tenant_id` error, that means you are trying to access the Console in a multi-tenant {{% tts %}} environment on an address that doesn't contain any tenant ID, e.g. `https://thethings.example.com`. To access the Console of a particular tenant in a multi-tenant environment, you have to specify a tenant ID as a URL subdomain, e.g. `https://<tenant-id>.thethings.network.com`.

---
title: "Troubleshooting CLI"
description: ""
aliases: [/getting-started/cli/troubleshooting]
weight: 3
---

This section contains help for common errors encountered when using the CLI.

<!--more-->

## Unauthenticated

If the [CLI login]({{< ref "/the-things-stack/interact/cli/login" >}}) wasn't successful, the user will face the following error when trying to execute CLI commands:

```
error:cmd/ttn-lw-cli/commands:unauthenticated (not authenticated with either API key or OAuth access token)
```

If you face this error, make sure you have properly [created a CLI configuration file]({{< ref "/the-things-stack/interact/cli/configuring-cli/#step-1---create-a-configuration-file" >}}) and [configured the CLI]({{< ref "/the-things-stack/interact/cli/configuring-cli/#step-2---configure-the-cli" >}}) for your {{% tts %}} instance.

Keep in mind that there are two CLI versions, `ttn-lw-cli` and `tti-lw-cli`, intended for users of different {{% tts %}} distributions, as mentioned in [Installing the CLI guide]({{< ref "/the-things-stack/interact/cli/installing-cli" >}}). You might face this error, for example, if you install `tti-lw-cli` and try to perform some action using `ttn-lw-cli`, or vice versa.

## Faulty OAuth Server Address

In the [CLI configuration file]({{< ref "/the-things-stack/interact/cli/configuring-cli" >}}), the server address is set to `thethings.example.com` by default. If you do not change this server address to the address of your own deployment, using `ttn-lw-cli login` command will redirect to `https://thethings.example.com/oauth/authorize?client_id=cli&redirect_uri=local-callback&response_type=code` in your web browser, where the CLI needs to be authorized for exchanging an access token.

Since your server address is most likely different than `thethings.example.com`, you will see an error about that URL not being found in your browser, the access token will not be obtained and you will not be able to execute any further CLI commands. In your terminal, you will see something like:

```
INFO Opening your browser on https://thethings.example.com/oauth/authorize?client_id=cli&redirect_uri=local-callback&response_type=code
INFO After logging in and authorizing the CLI, we'll get an access token for future commands.
INFO Waiting for your authorization...
```

The solution to this issue would be to replace `thethings.example.com` occurrences with the server address of your {{% tts %}} deployment.

You will experience the same issue if you are using an `https` port other than `443` and you have not specified that port in the `oauth-server-address` parameter in the CLI configuration file or with `--oauth-server-address` flag when running the CLI. For example, if you are running {{% tts %}} on `localhost`, you need to specify the OAuth server address as `'https://localhost:8885/oauth'`.

## Certificate Signed by Unknown Authority

If the CA file path is not specified in the [CLI configuration file]({{< ref "/the-things-stack/interact/cli/configuring-cli" >}}) (or with `--ca` flag when running the CLI), or if you are using self-signed certificates, using `ttn-lw-cli login` might result in the following error:

```
ERROR Could not exchange OAuth access token    error=Post "https://thethings.example.com:8885/oauth/token": x509: certificate signed by unknown authority
```

If the CA file is present on your system, the CLI configuration file should contain `ca: /path/to/ca.pem` or you should run the CLI with `--ca="/path/to/ca.pem"` flag, and you should also import the CA file using your web browser's certificate manager to make sure it's trusted by your system.

You can also run the CLI with the `--fetch-ca` flag which will make sure to connect to the server, fetch the CA file and configure the path to it in your CLI configuration file.

## No Collaborator Set

Many CLI commands require that a user or organization is set to grant permissions over an entity. For example, to create an application:

```bash
ttn-lw-cli applications create <application-id> --user-id <user-id>
```

## Permission Denied

If a user (specified with the `--user-id` flag) does not have sufficient rights to perform the desired action, you will face an error such as:

```
error:pkg/auth/rights:insufficient_application_rights (insufficient rights for application `app1`)
```

See [Users and Organizations]({{< ref "/the-things-stack/management/user-management" >}}) section for more info on rights management.

## Invalid Identifiers

When creating an entity using the CLI, if the ID value that you use does not follow {{% tts %}} naming convention, you will face an error. For example, using `ttn-lw-cli gateways create My_Gateway` command would result in the following error:

```
error:pkg/errors:validation (invalid `gateway_id`: value does not match regex pattern "^[a-z0-9](?:[-]?[a-z0-9]){2,}$")
field=gateway_id
name=GatewayIdentifiersValidationError
reason=value does not match regex pattern "^[a-z0-9](?:[-]?[a-z0-9]){2,}$"
```

See [ID and EUI Constraints]({{< ref "reference/id-eui-constraints" >}}) section for more info.

## Setting Multiple Boolean Parameters

When setting multiple boolean parameters within a CLI command, you need to use the equals (`=`) sign to assign values, otherwise you might be facing errors.

For example, if you run:

```bash
ttn-lw-cli gateways set <gateway-id> --location-public false --status-public false --auto-update true
```

you would be facing the following error:

```bash
WARN Multiple IDs found in arguments, considering the first
error:cmd/ttn-lw-cli/commands:invalid_gateway_eui (invalid gateway EUI)
```

The `--location-public` flag would be interpreted as being `true`, and `false` as an excessive positional argument. Same goes for `--status-public` and `--auto-update` flags as well. In order for all parameters to obtain desired values, you would instead need to run:

```bash
ttn-lw-cli gateways set <gateway-id> --location-public=false --status-public=false --auto-update=true
```

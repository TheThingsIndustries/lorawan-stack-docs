---
title: "Troubleshooting CLI"
description: ""
---

This section contains help for common errors encountered when using the CLI.

<!--more-->

## Faulty OAuth Server Address

In the [CLI configuration file]({{< ref "/getting-started/cli/installing-cli#configuration" >}}), the server address is set to `thethings.example.com` by default. If you do not change this server address to the address of your own deployment, using `ttn-lw-cli login` command will redirect to `https://thethings.example.com/oauth/authorize?client_id=cli&redirect_uri=local-callback&response_type=code` in your web browser, where the CLI needs to be authorized for exchanging an access token.

Since your server address is most likely different than `thethings.example.com`, you will see an error about that URL not being found in your browser, the access token will not be obtained and you will not be able to execute any further CLI commands. In your terminal, you will see something like:

```
INFO Opening your browser on https://thethings.example.com/oauth/authorize?client_id=cli&redirect_uri=local-callback&response_type=code
INFO After logging in and authorizing the CLI, we'll get an access token for future commands.
INFO Waiting for your authorization...
```

The solution to this issue would be to replace `thethings.example.com` occurrences with the server address of your {{% tts %}} deployment.

{{< note >}} You will experience the same behavior if you are using an `https` port other than `443` and you have not specified that port in the `oauth-server-address` parameter in the CLI configuration file (or with `--oauth-server-address` flag when running the CLI). For example, if you are running {{% tts %}} on `localhost`, you would have to specify the OAuth server address as `'https://localhost:8885/oauth'`.
{{</ note >}}

## Certificate Signed by Unknown Authority

If the CA file path is not specified in the [CLI configuration file]({{< ref "/getting-started/cli/installing-cli#configuration" >}}) (or with `--ca` flag when running the CLI), or if you are using self-signed certificates, using `ttn-lw-cli login` might result in the following error:

```
ERROR Could not exchange OAuth access token    error=Post "https://thethings.example.com:8885/oauth/token": x509: certificate signed by unknown authority
```

If the CA file is present on your system, the CLI configuration file should contain `ca: /path/to/ca.pem` or you should run the CLI with `--ca="/path/to/ca.pem"` flag, and you should also import the CA file using your web browser's certificate manager to make sure it's trusted by your system.

You can also run the CLI with the `--fetch-ca` flag which will make sure to connect to the server, fetch the CA file and configure the path to it in your CLI configuration file.

## No Collaborator Set

Many CLI commands require that a user or organization is set to grant permissions over an entity. For example, to create an application:

```bash
$ ttn-lw-cli applications create app1 --user-id user1
```

## Permission Denied

If a user (specified with the `--user-id` flag) does not have sufficient rights to perform the desired action, you will face an error such as:

```
error:pkg/auth/rights:insufficient_application_rights (insufficient rights for application `app1`)
```

See [Users and Organizations]({{< ref "getting-started/user-management" >}}) section for more info on rights management.

## Invalid Identifiers

When creating an entity using the CLI, if the ID value that you use does not follow {{% tts %}} naming convention, you will face an error. For example, using `ttn-lw-cli gateways create My_Gateway` command would result in the following error:

```
error:pkg/errors:validation (invalid `gateway_id`: value does not match regex pattern "^[a-z0-9](?:[-]?[a-z0-9]){2,}$")
field=gateway_id
name=GatewayIdentifiersValidationError
reason=value does not match regex pattern "^[a-z0-9](?:[-]?[a-z0-9]){2,}$"
```

See [ID and EUI Constraints]({{< ref "reference/id-eui-constraints" >}}) section for more info.
---
title: "ttn-lw-cli users"
slug: ttn-lw-cli_users
---

## ttn-lw-cli users

User commands

### Options

```
  -h, --help   help for users
```

### Options inherited from parent commands

```
      --allow-unknown-hosts                             Allow sending credentials to unknown hosts
      --application-server-enabled                      Application Server enabled (default true)
      --application-server-grpc-address string          Application Server address (default "localhost:8884")
      --ca string                                       CA certificate file
  -c, --config strings                                  Location of the config files (default [.ttn-lw-cli.yml,$HOME/.ttn-lw-cli.yml,$HOME/.config/.ttn-lw-cli.yml])
      --credentials-id string                           Credentials ID (if using multiple configurations)
      --device-claiming-server-grpc-address string      Device Claiming Server address (default "localhost:8884")
      --device-template-converter-grpc-address string   Device Template Converter address (default "localhost:8884")
      --dump-requests                                   When log level is set to debug, also dump request payload as JSON
      --experimental.features strings                   Experimental features to activate
      --gateway-server-enabled                          Gateway Server enabled (default true)
      --gateway-server-grpc-address string              Gateway Server address (default "localhost:8884")
      --identity-server-grpc-address string             Identity Server address (default "localhost:8884")
      --input-format string                             Input format (default "json")
      --insecure                                        Connect without TLS
      --join-server-enabled                             Join Server enabled (default true)
      --join-server-grpc-address string                 Join Server address (default "localhost:8884")
      --log.format string                               Log format to write (console, json) (default "console")
      --log.level string                                The minimum level log messages must have to be shown (default "info")
      --network-server-enabled                          Network Server enabled (default true)
      --network-server-grpc-address string              Network Server address (default "localhost:8884")
      --oauth-server-address string                     OAuth Server address (default "https://localhost/oauth")
      --output-format string                            Output format (default "json")
      --packet-broker-agent-grpc-address string         Packet Broker Agent address (default "localhost:8884")
      --qr-code-generator-grpc-address string           QR Code Generator address (default "localhost:8884")
      --retry.default-timeout duration                  Default timeout between retry attempts (default 100ms)
      --retry.enable-metadata                           Use request response metadata to dynamically calculate timeout between retry attempts (default true)
      --retry.jitter float                              Fraction that creates a deviation of the timeout used between retry attempts
      --retry.max uint                                  Maximum amount of times that a request can be reattempted
      --skip-version-check                              Do not perform version checks
      --telemetry.enable                                Enables telemetry for CLI (default true)
      --telemetry.target string                         Target to which the information will be sent to (default "https://telemetry.thethingsstack.io/collect")
```

### SEE ALSO

* [ttn-lw-cli]({{< relref "ttn-lw-cli" >}})	 - The Things Industries Command-line Interface
* [ttn-lw-cli users api-keys]({{< relref "ttn-lw-cli_users_api-keys" >}})	 - Manage user API keys
* [ttn-lw-cli users create]({{< relref "ttn-lw-cli_users_create" >}})	 - Create a user
* [ttn-lw-cli users create-login-token]({{< relref "ttn-lw-cli_users_create-login-token" >}})	 - Create a user login token
* [ttn-lw-cli users delete]({{< relref "ttn-lw-cli_users_delete" >}})	 - Delete a user
* [ttn-lw-cli users email-validations]({{< relref "ttn-lw-cli_users_email-validations" >}})	 - Email validations commands
* [ttn-lw-cli users forgot-password]({{< relref "ttn-lw-cli_users_forgot-password" >}})	 - Request a temporary user password
* [ttn-lw-cli users get]({{< relref "ttn-lw-cli_users_get" >}})	 - Get a user
* [ttn-lw-cli users invitations]({{< relref "ttn-lw-cli_users_invitations" >}})	 - Manage user invitations
* [ttn-lw-cli users list]({{< relref "ttn-lw-cli_users_list" >}})	 - List users
* [ttn-lw-cli users oauth]({{< relref "ttn-lw-cli_users_oauth" >}})	 - Manage OAuth authorizations and access tokens
* [ttn-lw-cli users purge]({{< relref "ttn-lw-cli_users_purge" >}})	 - Purge a user
* [ttn-lw-cli users restore]({{< relref "ttn-lw-cli_users_restore" >}})	 - Restore a user
* [ttn-lw-cli users rights]({{< relref "ttn-lw-cli_users_rights" >}})	 - List the rights to a user
* [ttn-lw-cli users search]({{< relref "ttn-lw-cli_users_search" >}})	 - Search for users
* [ttn-lw-cli users sessions]({{< relref "ttn-lw-cli_users_sessions" >}})	 - Manage user sessions
* [ttn-lw-cli users set]({{< relref "ttn-lw-cli_users_set" >}})	 - Set properties of a user
* [ttn-lw-cli users update-password]({{< relref "ttn-lw-cli_users_update-password" >}})	 - Update a user password


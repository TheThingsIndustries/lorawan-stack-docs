---
title: "ttn-lw-cli"
slug: ttn-lw-cli
---

## ttn-lw-cli

The Things Industries Command-line Interface

### Options

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
  -h, --help                                            help for ttn-lw-cli
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
      --retry-config.default-timeout duration           Default timeout between retry attempts (default 100ms)
      --retry-config.enable-metadata                    Use request response metadata to dynamically calculate timeout between retry attempts (default true)
      --retry-config.jitter float                       Fraction that creates a deviation of the timeout used between retry attempts
      --retry-config.max uint                           Maximum amount of times that a request can be reattempted
      --skip-version-check                              Do not perform version checks
```

### SEE ALSO

* [ttn-lw-cli applications]({{< relref "ttn-lw-cli_applications" >}})	 - Application commands
* [ttn-lw-cli authentication-providers]({{< relref "ttn-lw-cli_authentication-providers" >}})	 - Authentication Provider commands
* [ttn-lw-cli clients]({{< relref "ttn-lw-cli_clients" >}})	 - Client commands
* [ttn-lw-cli config]({{< relref "ttn-lw-cli_config" >}})	 - View the current configuration
* [ttn-lw-cli end-devices]({{< relref "ttn-lw-cli_end-devices" >}})	 - End Device commands
* [ttn-lw-cli events]({{< relref "ttn-lw-cli_events" >}})	 - Subscribe to events
* [ttn-lw-cli external-users]({{< relref "ttn-lw-cli_external-users" >}})	 - External User commands
* [ttn-lw-cli gateways]({{< relref "ttn-lw-cli_gateways" >}})	 - Gateway commands
* [ttn-lw-cli login]({{< relref "ttn-lw-cli_login" >}})	 - Login
* [ttn-lw-cli logout]({{< relref "ttn-lw-cli_logout" >}})	 - Logout
* [ttn-lw-cli lorawan]({{< relref "ttn-lw-cli_lorawan" >}})	 - LoRaWAN commands
* [ttn-lw-cli notifications]({{< relref "ttn-lw-cli_notifications" >}})	 - Manage notifications
* [ttn-lw-cli organizations]({{< relref "ttn-lw-cli_organizations" >}})	 - Organization commands
* [ttn-lw-cli packetbroker]({{< relref "ttn-lw-cli_packetbroker" >}})	 - Packet Broker commands
* [ttn-lw-cli simulate]({{< relref "ttn-lw-cli_simulate" >}})	 - Simulation commands
* [ttn-lw-cli templates]({{< relref "ttn-lw-cli_templates" >}})	 - End Device template commands
* [ttn-lw-cli tenants]({{< relref "ttn-lw-cli_tenants" >}})	 - Tenant commands
* [ttn-lw-cli use]({{< relref "ttn-lw-cli_use" >}})	 - Generate client configuration for The Things Stack
* [ttn-lw-cli users]({{< relref "ttn-lw-cli_users" >}})	 - User commands
* [ttn-lw-cli version]({{< relref "ttn-lw-cli_version" >}})	 - Print version information


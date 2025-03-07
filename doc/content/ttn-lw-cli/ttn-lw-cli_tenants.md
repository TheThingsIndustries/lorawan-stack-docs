---
title: "ttn-lw-cli tenants"
slug: ttn-lw-cli_tenants
---

## ttn-lw-cli tenants

Tenant commands

### Options

```
  -h, --help                      help for tenants
      --tenant-admin-key string   Tenant admin key
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
* [ttn-lw-cli tenants create]({{< relref "ttn-lw-cli_tenants_create" >}})	 - Create a tenant
* [ttn-lw-cli tenants delete]({{< relref "ttn-lw-cli_tenants_delete" >}})	 - Delete a tenant
* [ttn-lw-cli tenants get]({{< relref "ttn-lw-cli_tenants_get" >}})	 - Get a tenant
* [ttn-lw-cli tenants get-identifiers-for-billing-identifiers]({{< relref "ttn-lw-cli_tenants_get-identifiers-for-billing-identifiers" >}})	 - Get tenant identifiers for billing identifiers
* [ttn-lw-cli tenants get-identifiers-for-end-device-euis]({{< relref "ttn-lw-cli_tenants_get-identifiers-for-end-device-euis" >}})	 - Get tenant identifiers for Device EUIs
* [ttn-lw-cli tenants get-identifiers-for-gateway-eui]({{< relref "ttn-lw-cli_tenants_get-identifiers-for-gateway-eui" >}})	 - Get tenant identifiers for a Gateway EUI
* [ttn-lw-cli tenants get-registry-totals]({{< relref "ttn-lw-cli_tenants_get-registry-totals" >}})	 - Get registry totals of a tenant
* [ttn-lw-cli tenants list]({{< relref "ttn-lw-cli_tenants_list" >}})	 - List tenants
* [ttn-lw-cli tenants search]({{< relref "ttn-lw-cli_tenants_search" >}})	 - Search for tenants
* [ttn-lw-cli tenants support-login-token]({{< relref "ttn-lw-cli_tenants_support-login-token" >}})	 - Generate a login token associated with the unique 'support' user
* [ttn-lw-cli tenants update]({{< relref "ttn-lw-cli_tenants_update" >}})	 - Update a tenant


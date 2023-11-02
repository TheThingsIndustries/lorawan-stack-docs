---
title: "ttn-lw-cli gateways"
slug: ttn-lw-cli_gateways
---

## ttn-lw-cli gateways

Gateway commands

### Options

```
  -h, --help   help for gateways
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
* [ttn-lw-cli gateways api-keys]({{< relref "ttn-lw-cli_gateways_api-keys" >}})	 - Manage gateway API keys
* [ttn-lw-cli gateways batch-delete]({{< relref "ttn-lw-cli_gateways_batch-delete" >}})	 - Delete a batch of gateways (EXPERIMENTAL).
* [ttn-lw-cli gateways claim]({{< relref "ttn-lw-cli_gateways_claim" >}})	 - Claim a gateway (EXPERIMENTAL)
* [ttn-lw-cli gateways collaborators]({{< relref "ttn-lw-cli_gateways_collaborators" >}})	 - Manage gateway collaborators
* [ttn-lw-cli gateways contact-info]({{< relref "ttn-lw-cli_gateways_contact-info" >}})	 - Manage gateway contact info (DEPRECATED. Instead, use administrative_contact and technical_contact fields of gateway)
* [ttn-lw-cli gateways create]({{< relref "ttn-lw-cli_gateways_create" >}})	 - Create a gateway
* [ttn-lw-cli gateways delete]({{< relref "ttn-lw-cli_gateways_delete" >}})	 - Delete a gateway
* [ttn-lw-cli gateways get]({{< relref "ttn-lw-cli_gateways_get" >}})	 - Get a gateway
* [ttn-lw-cli gateways get-connection-stats]({{< relref "ttn-lw-cli_gateways_get-connection-stats" >}})	 - Get connection stats for a (group of) gateway(s).
* [ttn-lw-cli gateways list]({{< relref "ttn-lw-cli_gateways_list" >}})	 - List gateways
* [ttn-lw-cli gateways list-frequency-plans]({{< relref "ttn-lw-cli_gateways_list-frequency-plans" >}})	 - List available frequency plans for gateways
* [ttn-lw-cli gateways purge]({{< relref "ttn-lw-cli_gateways_purge" >}})	 - Purge a gateway
* [ttn-lw-cli gateways restore]({{< relref "ttn-lw-cli_gateways_restore" >}})	 - Restore a gateway
* [ttn-lw-cli gateways rights]({{< relref "ttn-lw-cli_gateways_rights" >}})	 - List the rights to a gateway
* [ttn-lw-cli gateways search]({{< relref "ttn-lw-cli_gateways_search" >}})	 - Search for gateways
* [ttn-lw-cli gateways set]({{< relref "ttn-lw-cli_gateways_set" >}})	 - Set properties of a gateway


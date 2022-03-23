---
title: "ttn-lw-cli templates map"
slug: ttn-lw-cli_templates_map
---

## ttn-lw-cli templates map

Map end device templates (EXPERIMENTAL)

### Synopsis

Map end device templates (EXPERIMENTAL)

This command matches the input templates with the mapping file to create new
templates. The mapping file contains end device templates in the same format
as input.

The matching from input to a mapping template is, in order, by mapping key, end
device identifiers and DevEUI. If you don't specify a mapping key, end device
identifiers nor DevEUI, the mapping entry always matches. This is useful for
mapping many end device templates with a generic template.

Typical use cases are:

1. Assigning identifiers from a mapping file to device templates matching on
   mapping key.
2. Mapping a device profile (i.e. MAC and PHY versions, frequency plan and class
   B/C support) from a mapping file to many end device templates.

Use the create command to create a mapping file and (optionally) the assign-euis
command to assign EUIs to map to end device templates.

```
ttn-lw-cli templates map [flags]
```

### Options

```
      --fail-not-found              fail if no matching mapping is found
  -h, --help                        help for map
      --input-local-file string     input file (local file name)
      --mapping-local-file string   mapping file (local file name)
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
      --retry-config.default-timeout duration           Default timeout between retry attempts (default 100ms)
      --retry-config.enable-metadata                    Use request response metadata to dynamically calculate timeout between retry attempts (default true)
      --retry-config.jitter float                       Fraction that creates a deviation of the timeout used between retry attempts
      --retry-config.max uint                           Maximum amount of times that a request can be reattempted
      --skip-version-check                              Do not perform version checks
```

### SEE ALSO

* [ttn-lw-cli templates]({{< relref "ttn-lw-cli_templates" >}})	 - End Device template commands


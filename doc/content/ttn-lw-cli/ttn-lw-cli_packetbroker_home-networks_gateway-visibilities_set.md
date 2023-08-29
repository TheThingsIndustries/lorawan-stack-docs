---
title: "ttn-lw-cli packetbroker home-networks gateway-visibilities set"
slug: ttn-lw-cli_packetbroker_home-networks_gateway-visibilities_set
---

## ttn-lw-cli packetbroker home-networks gateway-visibilities set

Set a Home Network gateway visibility

### Synopsis

Set a Home Network gateway visibility

Specify default to configure the default gateway visibility.

```
ttn-lw-cli packetbroker home-networks gateway-visibilities set default [flags]
```

### Examples

```

  To set the default gateway visibility to show location and online status:
    $ ttn-lw-cli packetbroker home-network gateway-visibilities set default \
      --location --status

  To set the default gateway visibility to show all fields:
    $ ttn-lw-cli packetbroker home-network gateway-visibilities set default \
      --all
```

### Options

```
      --all                 
      --antenna-count       
      --antenna-placement   
      --contact-info        
      --fine-timestamps     
      --frequency-plan      
  -h, --help                help for set
      --location            
      --packet-rates        
      --status              
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

* [ttn-lw-cli packetbroker home-networks gateway-visibilities]({{< relref "ttn-lw-cli_packetbroker_home-networks_gateway-visibilities" >}})	 - Manage Home Network gateway visibilities


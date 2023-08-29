---
title: "ttn-lw-cli packetbroker home-networks policies set"
slug: ttn-lw-cli_packetbroker_home-networks_policies_set
---

## ttn-lw-cli packetbroker home-networks policies set

Set a Home Network routing policy

### Synopsis

Set a Home Network routing policy

Specify default to configure the default routing policy. The default routing
policy is a fallback routing policy when no specific policy has been defined
for the Home Network (by NetID and tenant ID).

```
ttn-lw-cli packetbroker home-networks policies set [default|[net-id] [tenant-id]] [flags]
```

### Examples

```

  To set the default routing policy to pass join, MAC and application data,
  signal quality and gateway locations:
    $ ttn-lw-cli packetbroker home-network policy set default \
      --join --mac-data --application-data --signal-quality --localization

  To set the routing policy with NetID 000013 and tenant ID ttn (The Things
  Network), allowing all data:
    $ ttn-lw-cli packetbroker home-network policy set 000013 ttn --all

  To set the routing policy with NetID C00001 to allow only uplink:
    $ ttn-lw-cli packetbroker home-network policy set C00001 \
      --mac-data-up --application-data-up --signal-quality --localization
```

### Options

```
      --all                     enable all data
      --application-data        application data uplink and downlink (FPort > 0)
      --application-data-down   
      --application-data-up     
      --default                 
  -h, --help                    help for set
      --join                    join-request and join-accept
      --join-accept             
      --join-request            
      --localization            
      --mac-data                MAC data uplink and downlink (FPort = 0)
      --mac-data-down           
      --mac-data-up             
      --net-id string           (hex)
      --signal-quality          
      --tenant-id string        
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

* [ttn-lw-cli packetbroker home-networks policies]({{< relref "ttn-lw-cli_packetbroker_home-networks_policies" >}})	 - Manage Home Network routing policies


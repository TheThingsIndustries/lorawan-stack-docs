---
title: "ttn-lw-cli end-devices downlink push"
slug: ttn-lw-cli_end-devices_downlink_push
type: "commands"
---

## ttn-lw-cli end-devices downlink push

Push to the application downlink queue

```
ttn-lw-cli end-devices downlink push [application-id] [device-id] [flags]
```

### Options

```
      --application-id string              
      --class-b-c.absolute-time string     (YYYY-MM-DDTHH:MM:SSZ)
      --class-b-c.gateways strings         
      --confirmed                          
      --correlation-ids strings            
      --decoded-payload-warnings strings   
      --dev-eui string                     (hex)
      --device-id string                   
      --f-cnt uint32                       
      --f-port uint32                      
      --frm-payload string                 (hex)
  -h, --help                               help for push
      --join-eui string                    (hex)
      --priority string                    allowed values: ABOVE_NORMAL, BELOW_NORMAL, HIGH, HIGHEST, LOW, LOWEST, NORMAL
      --session-key-id string              (hex)
```

### Options inherited from parent commands

```
      --allow-unknown-hosts                             Allow sending credentials to unknown hosts
      --application-server-enabled                      Application Server enabled (default true)
      --application-server-grpc-address string          Application Server address (default "localhost:8884")
      --ca string                                       CA certificate file
  -c, --config strings                                  Location of the config files (default [.ttn-lw-cli.yml,$HOME/.ttn-lw-cli.yml,$HOME/Library/Application Support/.ttn-lw-cli.yml])
      --credentials-id string                           Credentials ID (if using multiple configurations)
      --device-claiming-server-grpc-address string      Device Claiming Server address (default "localhost:8884")
      --device-template-converter-grpc-address string   Device Template Converter address (default "localhost:8884")
      --dump-requests                                   When log level is set to debug, also dump request payload as JSON
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
      --skip-version-check                              Do not perform version checks
```

### SEE ALSO

* [ttn-lw-cli end-devices downlink]({{< relref "ttn-lw-cli_end-devices_downlink" >}})	 - Application downlink commands


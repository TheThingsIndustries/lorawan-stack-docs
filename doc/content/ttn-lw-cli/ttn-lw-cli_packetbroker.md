---
title: "ttn-lw-cli packetbroker"
slug: ttn-lw-cli_packetbroker
type: "commands"
---

## ttn-lw-cli packetbroker

Packet Broker commands

### Options

```
  -h, --help   help for packetbroker
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
      --skip-version-check                              Do not perform version checks
```

### SEE ALSO

* [ttn-lw-cli]({{< relref "ttn-lw-cli" >}})	 - The Things Industries Command-line Interface
* [ttn-lw-cli packetbroker deregister]({{< relref "ttn-lw-cli_packetbroker_deregister" >}})	 - Deregister from Packet Broker
* [ttn-lw-cli packetbroker forwarders]({{< relref "ttn-lw-cli_packetbroker_forwarders" >}})	 - Forwarder commands
* [ttn-lw-cli packetbroker home-networks]({{< relref "ttn-lw-cli_packetbroker_home-networks" >}})	 - Home Network commands
* [ttn-lw-cli packetbroker info]({{< relref "ttn-lw-cli_packetbroker_info" >}})	 - Show Packet Broker info
* [ttn-lw-cli packetbroker networks]({{< relref "ttn-lw-cli_packetbroker_networks" >}})	 - Network commands
* [ttn-lw-cli packetbroker register]({{< relref "ttn-lw-cli_packetbroker_register" >}})	 - Register with Packet Broker


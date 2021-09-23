---
title: "ttn-lw-cli applications link get"
slug: ttn-lw-cli_applications_link_get
type: "commands"
---

## ttn-lw-cli applications link get

Get the properties of an application link

```
ttn-lw-cli applications link get [application-id] [flags]
```

### Options

```
      --all                                           select all application link fields
      --application-id string                         
      --default-formatters                            select the default_formatters field and all allowed sub-fields
      --default-formatters.down-formatter             select the default_formatters.down_formatter field
      --default-formatters.down-formatter-parameter   select the default_formatters.down_formatter_parameter field
      --default-formatters.up-formatter               select the default_formatters.up_formatter field
      --default-formatters.up-formatter-parameter     select the default_formatters.up_formatter_parameter field
  -h, --help                                          help for get
      --skip-payload-crypto                           select the skip_payload_crypto field
      --tls                                           select the tls field
```

### Options inherited from parent commands

```
      --allow-unknown-hosts                             Allow sending credentials to unknown hosts
      --application-server-enabled                      Application Server enabled (default true)
      --application-server-grpc-address string          Application Server address (default "localhost:8884")
      --ca string                                       CA certificate file
  -c, --config strings                                  Location of the config files (default [.ttn-lw-cli.yml,/Users/ben/.ttn-lw-cli.yml,/Users/ben/Library/Application Support/.ttn-lw-cli.yml])
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

* [ttn-lw-cli applications link]({{< relref "ttn-lw-cli_applications_link" >}})	 - Application link commands


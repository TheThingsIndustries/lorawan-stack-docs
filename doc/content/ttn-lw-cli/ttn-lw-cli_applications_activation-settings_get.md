---
title: "ttn-lw-cli applications activation-settings get"
slug: ttn-lw-cli_applications_activation-settings_get
type: "commands"
---

## ttn-lw-cli applications activation-settings get

Get application activation settings

```
ttn-lw-cli applications activation-settings get [application-id] [flags]
```

### Options

```
      --all                     select all application activation settings fields
      --application-id string   
      --application-server-id   select the application_server_id field
  -h, --help                    help for get
      --home-net-id             select the home_net_id field
      --kek                     select the kek field and all allowed sub-fields
      --kek-label               select the kek_label field
      --kek.encrypted-key       select the kek.encrypted_key field
      --kek.kek-label           select the kek.kek_label field
      --kek.key                 select the kek.key field
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

* [ttn-lw-cli applications activation-settings]({{< relref "ttn-lw-cli_applications_activation-settings" >}})	 - Application activation settings commands


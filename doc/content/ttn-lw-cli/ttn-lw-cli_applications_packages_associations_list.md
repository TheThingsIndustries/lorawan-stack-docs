---
title: "ttn-lw-cli applications packages associations list"
slug: ttn-lw-cli_applications_packages_associations_list
type: "commands"
---

## ttn-lw-cli applications packages associations list

List application package associations

```
ttn-lw-cli applications packages associations list [application-id] [device-id] [flags]
```

### Options

```
      --all                     select all application package association fields
      --application-id string   
      --data                    select the data field and all allowed sub-fields
      --dev-eui string          (hex)
      --device-id string        
  -h, --help                    help for list
      --join-eui string         (hex)
      --limit uint32            maximum number of results to get (default 50)
      --package-name            select the package_name field
      --page uint32             results page number (default 1)
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

* [ttn-lw-cli applications packages associations]({{< relref "ttn-lw-cli_applications_packages_associations" >}})	 - Application packages associations commands


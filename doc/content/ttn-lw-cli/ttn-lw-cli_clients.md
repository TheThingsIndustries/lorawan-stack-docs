---
title: "ttn-lw-cli clients"
slug: ttn-lw-cli_clients
type: "commands"
---

## ttn-lw-cli clients

Client commands

### Options

```
  -h, --help   help for clients
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

* [ttn-lw-cli]({{< relref "ttn-lw-cli" >}})	 - The Things Network Command-line Interface
* [ttn-lw-cli clients collaborators]({{< relref "ttn-lw-cli_clients_collaborators" >}})	 - Manage client collaborators
* [ttn-lw-cli clients contact-info]({{< relref "ttn-lw-cli_clients_contact-info" >}})	 - Manage client contact info
* [ttn-lw-cli clients create]({{< relref "ttn-lw-cli_clients_create" >}})	 - Create a client
* [ttn-lw-cli clients delete]({{< relref "ttn-lw-cli_clients_delete" >}})	 - Delete a client
* [ttn-lw-cli clients get]({{< relref "ttn-lw-cli_clients_get" >}})	 - Get a client
* [ttn-lw-cli clients list]({{< relref "ttn-lw-cli_clients_list" >}})	 - List clients
* [ttn-lw-cli clients purge]({{< relref "ttn-lw-cli_clients_purge" >}})	 - Purge an client
* [ttn-lw-cli clients restore]({{< relref "ttn-lw-cli_clients_restore" >}})	 - Restore a client
* [ttn-lw-cli clients rights]({{< relref "ttn-lw-cli_clients_rights" >}})	 - List the rights to a client
* [ttn-lw-cli clients search]({{< relref "ttn-lw-cli_clients_search" >}})	 - Search for clients
* [ttn-lw-cli clients set]({{< relref "ttn-lw-cli_clients_set" >}})	 - Set properties of a client


---
title: "ttn-lw-cli clients list"
slug: ttn-lw-cli_clients_list
type: "commands"
---

## ttn-lw-cli clients list

List clients

```
ttn-lw-cli clients list [flags]
```

### Options

```
      --all                      select all client fields
      --attributes               select the attributes field
      --contact-info             select the contact_info field
      --deleted                  return recently deleted
      --deleted-at               select the deleted_at field
      --description              select the description field
      --endorsed                 select the endorsed field
      --grants                   select the grants field
  -h, --help                     help for list
      --limit uint32             maximum number of results to get (default 50)
      --logout-redirect-uris     select the logout_redirect_uris field
      --name                     select the name field
      --order string             order by this field
      --organization-id string   
      --page uint32              results page number (default 1)
      --redirect-uris            select the redirect_uris field
      --rights                   select the rights field
      --secret                   select the secret field
      --skip-authorization       select the skip_authorization field
      --state                    select the state field
      --state-description        select the state_description field
      --user-id string           
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

* [ttn-lw-cli clients]({{< relref "ttn-lw-cli_clients" >}})	 - Client commands


---
title: "ttn-lw-cli organizations"
slug: ttn-lw-cli_organizations
---

## ttn-lw-cli organizations

Organization commands

### Options

```
  -h, --help   help for organizations
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
```

### SEE ALSO

* [ttn-lw-cli]({{< relref "ttn-lw-cli" >}})	 - The Things Industries Command-line Interface
* [ttn-lw-cli organizations api-keys]({{< relref "ttn-lw-cli_organizations_api-keys" >}})	 - Manage organization API keys
* [ttn-lw-cli organizations collaborators]({{< relref "ttn-lw-cli_organizations_collaborators" >}})	 - Manage organization collaborators
* [ttn-lw-cli organizations contact-info]({{< relref "ttn-lw-cli_organizations_contact-info" >}})	 - Manage organization contact info (DEPRECATED. Instead, use administrative_contact and technical_contact fields of organization)
* [ttn-lw-cli organizations create]({{< relref "ttn-lw-cli_organizations_create" >}})	 - Create an organization
* [ttn-lw-cli organizations delete]({{< relref "ttn-lw-cli_organizations_delete" >}})	 - Delete an organization
* [ttn-lw-cli organizations get]({{< relref "ttn-lw-cli_organizations_get" >}})	 - Get an organization
* [ttn-lw-cli organizations list]({{< relref "ttn-lw-cli_organizations_list" >}})	 - List organizations
* [ttn-lw-cli organizations purge]({{< relref "ttn-lw-cli_organizations_purge" >}})	 - Purge an organization
* [ttn-lw-cli organizations restore]({{< relref "ttn-lw-cli_organizations_restore" >}})	 - Restore an organization
* [ttn-lw-cli organizations rights]({{< relref "ttn-lw-cli_organizations_rights" >}})	 - List the rights to an organization
* [ttn-lw-cli organizations search]({{< relref "ttn-lw-cli_organizations_search" >}})	 - Search for organizations
* [ttn-lw-cli organizations set]({{< relref "ttn-lw-cli_organizations_set" >}})	 - Set properties of an organization


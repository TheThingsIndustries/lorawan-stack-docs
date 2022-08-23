---
title: "ttn-lw-cli applications search"
slug: ttn-lw-cli_applications_search
---

## ttn-lw-cli applications search

Search for applications

```
ttn-lw-cli applications search [flags]
```

### Options

```
      --administrative-contact                                        select the administrative_contact field and all allowed sub-fields
      --administrative-contact.ids.organization-ids                   select the administrative_contact.ids.organization_ids field and all allowed sub-fields
      --administrative-contact.ids.organization-ids.organization-id   select the administrative_contact.ids.organization_ids.organization_id field
      --administrative-contact.ids.user-ids                           select the administrative_contact.ids.user_ids field and all allowed sub-fields
      --administrative-contact.ids.user-ids.user-id                   select the administrative_contact.ids.user_ids.user_id field
      --all                                                           select all application fields
      --application-server-address                                    select the application_server_address field
      --attributes                                                    select the attributes field
      --attributes-contain stringToString                             
      --contact-info                                                  select the contact_info field
      --deleted                                                       
      --deleted-at                                                    select the deleted_at field
      --description                                                   select the description field
      --description-contains string                                   
      --dev-eui-counter                                               select the dev_eui_counter field
      --end-device-limit                                              select the end_device_limit field
      --field-mask strings                                            
  -h, --help                                                          help for search
      --id-contains string                                            
      --join-server-address                                           select the join_server_address field
      --limit uint32                                                  
      --name                                                          select the name field
      --name-contains string                                          
      --network-server-address                                        select the network_server_address field
      --order string                                                  
      --page uint32                                                   
      --query string                                                  
      --technical-contact                                             select the technical_contact field and all allowed sub-fields
      --technical-contact.ids.organization-ids                        select the technical_contact.ids.organization_ids field and all allowed sub-fields
      --technical-contact.ids.organization-ids.organization-id        select the technical_contact.ids.organization_ids.organization_id field
      --technical-contact.ids.user-ids                                select the technical_contact.ids.user_ids field and all allowed sub-fields
      --technical-contact.ids.user-ids.user-id                        select the technical_contact.ids.user_ids.user_id field
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

* [ttn-lw-cli applications]({{< relref "ttn-lw-cli_applications" >}})	 - Application commands


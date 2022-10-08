---
title: "ttn-lw-cli clients create"
slug: ttn-lw-cli_clients_create
---

## ttn-lw-cli clients create

Create a client

```
ttn-lw-cli clients create [client-id] [flags]
```

### Options

```
      --administrative-contact.ids.organization-ids.organization-id string   
      --administrative-contact.ids.user-ids.user-id string                   
      --attributes stringToString                                            
      --client-id string                                                     
      --description string                                                   
      --endorsed                                                             
      --grants strings                                                       allowed values: GRANT_AUTHORIZATION_CODE, GRANT_PASSWORD, GRANT_REFRESH_TOKEN
  -h, --help                                                                 help for create
      --logout-redirect-uris strings                                         
      --name string                                                          
      --organization-id string                                               
      --redirect-uris strings                                                
      --rights strings                                                       allowed values: right_invalid, RIGHT_USER_INFO, RIGHT_USER_SETTINGS_BASIC, RIGHT_USER_SETTINGS_API_KEYS, RIGHT_USER_DELETE, RIGHT_USER_AUTHORIZED_CLIENTS, RIGHT_USER_APPLICATIONS_LIST, RIGHT_USER_APPLICATIONS_CREATE, RIGHT_USER_GATEWAYS_LIST, RIGHT_USER_GATEWAYS_CREATE, RIGHT_USER_CLIENTS_LIST, RIGHT_USER_CLIENTS_CREATE, RIGHT_USER_ORGANIZATIONS_LIST, RIGHT_USER_ORGANIZATIONS_CREATE, RIGHT_USER_ALL, RIGHT_APPLICATION_INFO, RIGHT_APPLICATION_SETTINGS_BASIC, RIGHT_APPLICATION_SETTINGS_API_KEYS, RIGHT_APPLICATION_SETTINGS_COLLABORATORS, RIGHT_APPLICATION_DELETE, RIGHT_APPLICATION_DEVICES_READ, RIGHT_APPLICATION_DEVICES_WRITE, RIGHT_APPLICATION_DEVICES_READ_KEYS, RIGHT_APPLICATION_DEVICES_WRITE_KEYS, RIGHT_APPLICATION_TRAFFIC_READ, RIGHT_APPLICATION_TRAFFIC_UP_WRITE, RIGHT_APPLICATION_TRAFFIC_DOWN_WRITE, RIGHT_APPLICATION_LINK, RIGHT_APPLICATION_ALL, RIGHT_CLIENT_ALL, RIGHT_GATEWAY_INFO, RIGHT_GATEWAY_SETTINGS_BASIC, RIGHT_GATEWAY_SETTINGS_API_KEYS, RIGHT_GATEWAY_SETTINGS_COLLABORATORS, RIGHT_GATEWAY_DELETE, RIGHT_GATEWAY_TRAFFIC_READ, RIGHT_GATEWAY_TRAFFIC_DOWN_WRITE, RIGHT_GATEWAY_LINK, RIGHT_GATEWAY_STATUS_READ, RIGHT_GATEWAY_LOCATION_READ, RIGHT_GATEWAY_ALL, RIGHT_ORGANIZATION_INFO, RIGHT_ORGANIZATION_SETTINGS_BASIC, RIGHT_ORGANIZATION_SETTINGS_API_KEYS, RIGHT_ORGANIZATION_SETTINGS_MEMBERS, RIGHT_ORGANIZATION_DELETE, RIGHT_ORGANIZATION_APPLICATIONS_LIST, RIGHT_ORGANIZATION_APPLICATIONS_CREATE, RIGHT_ORGANIZATION_GATEWAYS_LIST, RIGHT_ORGANIZATION_GATEWAYS_CREATE, RIGHT_ORGANIZATION_CLIENTS_LIST, RIGHT_ORGANIZATION_CLIENTS_CREATE, RIGHT_ORGANIZATION_ADD_AS_COLLABORATOR, RIGHT_ORGANIZATION_ALL, RIGHT_SEND_INVITES, RIGHT_ALL, RIGHT_APPLICATION_SETTINGS_PACKAGES, RIGHT_GATEWAY_WRITE_SECRETS, RIGHT_GATEWAY_READ_SECRETS, RIGHT_USER_NOTIFICATIONS_READ, RIGHT_CLIENT_INFO, RIGHT_CLIENT_SETTINGS_BASIC, RIGHT_CLIENT_SETTINGS_COLLABORATORS, RIGHT_CLIENT_DELETE
      --secret string                                                        
      --skip-authorization                                                   
      --state string                                                         allowed values: STATE_REQUESTED, STATE_APPROVED, STATE_REJECTED, STATE_FLAGGED, STATE_SUSPENDED
      --state-description string                                             
      --technical-contact.ids.organization-ids.organization-id string        
      --technical-contact.ids.user-ids.user-id string                        
      --user-id string                                                       
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

* [ttn-lw-cli clients]({{< relref "ttn-lw-cli_clients" >}})	 - Client commands


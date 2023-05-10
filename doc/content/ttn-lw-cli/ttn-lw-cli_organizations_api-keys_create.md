---
title: "ttn-lw-cli organizations api-keys create"
slug: ttn-lw-cli_organizations_api-keys_create
---

## ttn-lw-cli organizations api-keys create

Create an organization API key

```
ttn-lw-cli organizations api-keys create [organization-id] [flags]
```

### Options

```
      --api-key-expiry timestamp                   (YYYY-MM-DDTHH:MM:SSZ)
  -h, --help                                       help for create
      --name string                                
      --right-application-all                      
      --right-application-delete                   
      --right-application-devices-read             
      --right-application-devices-read-keys        
      --right-application-devices-write            
      --right-application-devices-write-keys       
      --right-application-info                     
      --right-application-link                     
      --right-application-settings-api-keys        
      --right-application-settings-basic           
      --right-application-settings-collaborators   
      --right-application-settings-packages        
      --right-application-traffic-down-write       
      --right-application-traffic-read             
      --right-application-traffic-up-write         
      --right-client-all                           
      --right-client-delete                        
      --right-client-info                          
      --right-client-settings-basic                
      --right-client-settings-collaborators        
      --right-gateway-all                          
      --right-gateway-delete                       
      --right-gateway-info                         
      --right-gateway-link                         
      --right-gateway-location-read                
      --right-gateway-read-secrets                 
      --right-gateway-settings-api-keys            
      --right-gateway-settings-basic               
      --right-gateway-settings-collaborators       
      --right-gateway-status-read                  
      --right-gateway-traffic-down-write           
      --right-gateway-traffic-read                 
      --right-gateway-write-secrets                
      --right-organization-add-as-collaborator     
      --right-organization-all                     
      --right-organization-applications-create     
      --right-organization-applications-list       
      --right-organization-clients-create          
      --right-organization-clients-list            
      --right-organization-delete                  
      --right-organization-gateways-create         
      --right-organization-gateways-list           
      --right-organization-info                    
      --right-organization-settings-api-keys       
      --right-organization-settings-basic          
      --right-organization-settings-members        
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
      --organization-id string                          
      --output-format string                            Output format (default "json")
      --packet-broker-agent-grpc-address string         Packet Broker Agent address (default "localhost:8884")
      --qr-code-generator-grpc-address string           QR Code Generator address (default "localhost:8884")
      --retry.default-timeout duration                  Default timeout between retry attempts (default 100ms)
      --retry.enable-metadata                           Use request response metadata to dynamically calculate timeout between retry attempts (default true)
      --retry.jitter float                              Fraction that creates a deviation of the timeout used between retry attempts
      --retry.max uint                                  Maximum amount of times that a request can be reattempted
      --skip-version-check                              Do not perform version checks
      --telemetry.enable                                Enables telemetry for CLI
      --telemetry.target string                         Target to which the information will be sent to
```

### SEE ALSO

* [ttn-lw-cli organizations api-keys]({{< relref "ttn-lw-cli_organizations_api-keys" >}})	 - Manage organization API keys


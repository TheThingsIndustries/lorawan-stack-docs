---
title: "ttn-lw-cli gateways create"
slug: ttn-lw-cli_gateways_create
---

## ttn-lw-cli gateways create

Create a gateway

```
ttn-lw-cli gateways create [gateway-id] [flags]
```

### Options

```
      --administrative-contact.ids.organization-ids.organization-id string   
      --administrative-contact.ids.user-ids.user-id string                   
      --alert-notification-profile-ids.profile-id string                     
      --antenna.attributes stringToString                                    
      --antenna.gain float32                                                 
      --antenna.location.accuracy int32                                      
      --antenna.location.altitude int32                                      
      --antenna.location.latitude float                                      
      --antenna.location.longitude float                                     
      --antenna.placement string                                             allowed values: PLACEMENT_UNKNOWN, INDOOR, OUTDOOR
      --attributes stringToString                                            
      --auto-update                                                          
      --claim-authentication-code.secret.key-id string                       
      --claim-authentication-code.secret.value bytesHex                      
      --claim-authentication-code.valid-from timestamp                       
      --claim-authentication-code.valid-to timestamp                         
      --defaults                                                             configure gateway with defaults (default true)
      --description string                                                   
      --disable-packet-broker-forwarding                                     
      --downlink-path-constraint string                                      allowed values: DOWNLINK_PATH_CONSTRAINT_NONE, DOWNLINK_PATH_CONSTRAINT_PREFER_OTHER, DOWNLINK_PATH_CONSTRAINT_NEVER
      --enforce-duty-cycle                                                   
      --frequency-plan-id string                                             
      --frequency-plan-ids strings                                           
      --gateway-eui string                                                   
      --gateway-id string                                                    
      --gateway-server-address string                                        
  -h, --help                                                                 help for create
      --label-ids strings                                                    
      --lbs-lns-secret.key-id string                                         
      --lbs-lns-secret.value bytesHex                                        
      --location-public                                                      
      --lrfhss.supported                                                     
      --name string                                                          
      --organization-id string                                               
      --require-authenticated-connection                                     
      --schedule-anytime-delay duration                                      
      --schedule-downlink-late                                               
      --status-public                                                        
      --target-cups-key.key-id string                                        
      --target-cups-key.value bytesHex                                       
      --target-cups-uri string                                               
      --technical-contact.ids.organization-ids.organization-id string        
      --technical-contact.ids.user-ids.user-id string                        
      --update-channel string                                                
      --update-location-from-status                                          
      --user-id string                                                       
      --version-ids.brand-id string                                          
      --version-ids.firmware-version string                                  
      --version-ids.hardware-version string                                  
      --version-ids.model-id string                                          
      --version-ids.runtime-version string                                   
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
      --telemetry.enable                                Enables telemetry for CLI (default true)
      --telemetry.target string                         Target to which the information will be sent to (default "https://telemetry.thethingsstack.io/collect")
```

### SEE ALSO

* [ttn-lw-cli gateways]({{< relref "ttn-lw-cli_gateways" >}})	 - Gateway commands


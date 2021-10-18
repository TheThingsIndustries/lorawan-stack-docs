---
title: "ttn-lw-cli gateways set"
slug: ttn-lw-cli_gateways_set
type: "commands"
---

## ttn-lw-cli gateways set

Set properties of a gateway

```
ttn-lw-cli gateways set [gateway-id] [flags]
```

### Options

```
      --antenna.add                                      add an extra antenna
      --antenna.gain float32                             
      --antenna.index int                                index of the antenna to update or remove
      --antenna.location.accuracy int32                  
      --antenna.location.altitude int32                  
      --antenna.location.latitude float                  
      --antenna.location.longitude float                 
      --antenna.location.source string                   allowed values: SOURCE_BT_RSSI_GEOLOCATION, SOURCE_COMBINED_GEOLOCATION, SOURCE_GPS, SOURCE_IP_GEOLOCATION, SOURCE_LORA_RSSI_GEOLOCATION, SOURCE_LORA_TDOA_GEOLOCATION, SOURCE_REGISTRY, SOURCE_UNKNOWN, SOURCE_WIFI_RSSI_GEOLOCATION
      --antenna.placement string                         allowed values: INDOOR, OUTDOOR, PLACEMENT_UNKNOWN
      --antenna.remove                                   remove an antenna
      --attributes strings                               key=value
      --auto-update                                      
      --claim-authentication-code.secret.key-id string   
      --claim-authentication-code.secret.value string    (hex)
      --claim-authentication-code.valid-from string      (YYYY-MM-DDTHH:MM:SSZ)
      --claim-authentication-code.valid-to string        (YYYY-MM-DDTHH:MM:SSZ)
      --deleted-at string                                (YYYY-MM-DDTHH:MM:SSZ)
      --description string                               
      --disable-packet-broker-forwarding                 
      --downlink-path-constraint string                  allowed values: DOWNLINK_PATH_CONSTRAINT_NEVER, DOWNLINK_PATH_CONSTRAINT_NONE, DOWNLINK_PATH_CONSTRAINT_PREFER_OTHER
      --enforce-duty-cycle                               
      --frequency-plan-id string                         
      --frequency-plan-ids strings                       
      --gateway-eui string                               
      --gateway-id string                                
      --gateway-server-address string                    
  -h, --help                                             help for set
      --lbs-lns-secret.key-id string                     
      --lbs-lns-secret.value string                      (hex)
      --location-public                                  
      --lrfhss.supported                                 
      --name string                                      
      --require-authenticated-connection                 
      --schedule-anytime-delay duration                  (1h2m3s)
      --schedule-downlink-late                           
      --status-public                                    
      --target-cups-key.key-id string                    
      --target-cups-key.value string                     (hex)
      --target-cups-uri string                           
      --update-channel string                            
      --update-location-from-status                      
      --version-ids.brand-id string                      
      --version-ids.firmware-version string              
      --version-ids.hardware-version string              
      --version-ids.model-id string                      
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

* [ttn-lw-cli gateways]({{< relref "ttn-lw-cli_gateways" >}})	 - Gateway commands


---
title: "ttn-lw-cli simulate application-uplink"
slug: ttn-lw-cli_simulate_application-uplink
type: "commands"
---

## ttn-lw-cli simulate application-uplink

Simulate an application-layer uplink message from an end device, sent directly to the Application Server

```
ttn-lw-cli simulate application-uplink [application-id] [device-id] [flags]
```

### Options

```
      --app-s-key.encrypted-key string                                        (hex)
      --app-s-key.kek-label string                                            
      --app-s-key.key string                                                  (hex)
      --application-id string                                                 
      --confirmed                                                             
      --consumed-airtime duration                                             (1h2m3s)
      --decoded-payload-warnings strings                                      
      --dev-eui string                                                        (hex)
      --device-id string                                                      
      --f-cnt uint32                                                          
      --f-port uint32                                                         
      --frm-payload string                                                    (hex)
  -h, --help                                                                  help for application-uplink
      --join-eui string                                                       (hex)
      --last-a-f-cnt-down uint32                                              
      --network-ids.cluster-id string                                         
      --network-ids.net-id string                                             (hex)
      --network-ids.tenant-id string                                          
      --received-at string                                                    (YYYY-MM-DDTHH:MM:SSZ)
      --session-key-id string                                                 (hex)
      --settings.coding-rate string                                           
      --settings.data-rate-index string                                       allowed values: 0, 1, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6, 7, 8, 9, DATA_RATE_0, DATA_RATE_1, DATA_RATE_10, DATA_RATE_11, DATA_RATE_12, DATA_RATE_13, DATA_RATE_14, DATA_RATE_15, DATA_RATE_2, DATA_RATE_3, DATA_RATE_4, DATA_RATE_5, DATA_RATE_6, DATA_RATE_7, DATA_RATE_8, DATA_RATE_9
      --settings.data-rate.modulation.fsk.bit-rate uint32                     
      --settings.data-rate.modulation.lora.bandwidth uint32                   
      --settings.data-rate.modulation.lora.spreading-factor uint32            
      --settings.data-rate.modulation.lrfhss.coding-rate string               
      --settings.data-rate.modulation.lrfhss.modulation-type uint32           
      --settings.data-rate.modulation.lrfhss.operating-channel-width uint32   
      --settings.downlink.antenna-index uint32                                
      --settings.downlink.invert-polarization                                 
      --settings.downlink.tx-power float32                                    
      --settings.enable-crc                                                   
      --settings.frequency uint                                               
      --settings.time string                                                  (YYYY-MM-DDTHH:MM:SSZ)
      --settings.timestamp uint32                                             
      --version-ids.band-id string                                            
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
      --skip-version-check                              Do not perform version checks
```

### SEE ALSO

* [ttn-lw-cli simulate]({{< relref "ttn-lw-cli_simulate" >}})	 - Simulation commands


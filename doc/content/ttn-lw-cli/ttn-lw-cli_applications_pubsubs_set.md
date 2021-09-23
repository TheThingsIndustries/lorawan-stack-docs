---
title: "ttn-lw-cli applications pubsubs set"
slug: ttn-lw-cli_applications_pubsubs_set
type: "commands"
---

## ttn-lw-cli applications pubsubs set

Set the properties of an application pub/sub

```
ttn-lw-cli applications pubsubs set [application-id] [pubsub-id] [flags]
```

### Options

```
      --application-id string                                    
      --base-topic string                                        
      --downlink-ack.topic string                                
      --downlink-failed.topic string                             
      --downlink-nack.topic string                               
      --downlink-push.topic string                               
      --downlink-queue-invalidated.topic string                  
      --downlink-queued.topic string                             
      --downlink-replace.topic string                            
      --downlink-sent.topic string                               
      --format string                                            
  -h, --help                                                     help for set
      --join-accept.topic string                                 
      --location-solved.topic string                             
      --provider.aws-iot.access-key.access-key-id string         
      --provider.aws-iot.access-key.secret-access-key string     
      --provider.aws-iot.access-key.session-token string         
      --provider.aws-iot.assume-role.arn string                  
      --provider.aws-iot.assume-role.external-id string          
      --provider.aws-iot.assume-role.session-duration duration   (1h2m3s)
      --provider.aws-iot.deployment.default.stack-name string    
      --provider.aws-iot.endpoint-address string                 
      --provider.aws-iot.region string                           
      --provider.mqtt.client-id string                           
      --provider.mqtt.password string                            
      --provider.mqtt.publish-qos string                         allowed values: AT_LEAST_ONCE, AT_MOST_ONCE, EXACTLY_ONCE
      --provider.mqtt.server-url string                          
      --provider.mqtt.subscribe-qos string                       allowed values: AT_LEAST_ONCE, AT_MOST_ONCE, EXACTLY_ONCE
      --provider.mqtt.tls-ca string                              (hex)
      --provider.mqtt.tls-client-cert string                     (hex)
      --provider.mqtt.tls-client-key string                      (hex)
      --provider.mqtt.use-tls                                    
      --provider.mqtt.username string                            
      --provider.nats.server-url string                          
      --pubsub-id string                                         
      --service-data.topic string                                
      --uplink-message.topic string                              
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

* [ttn-lw-cli applications pubsubs]({{< relref "ttn-lw-cli_applications_pubsubs" >}})	 - Application pub/sub commands


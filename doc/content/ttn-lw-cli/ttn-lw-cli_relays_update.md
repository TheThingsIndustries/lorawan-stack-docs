---
title: "ttn-lw-cli relays update"
slug: ttn-lw-cli_relays_update
---

## ttn-lw-cli relays update

Update a relay (EXPERIMENTAL)

```
ttn-lw-cli relays update [application-id] [device-id] [flags]
```

### Options

```
  -h, --help                                                     help for update
      --mode.served                                              
      --mode.served.backoff uint32                               
      --mode.served.mode.always                                  
      --mode.served.mode.dynamic                                 
      --mode.served.mode.dynamic.smart-enable-level string       allowed values: RELAY_SMART_ENABLE_LEVEL_8, RELAY_SMART_ENABLE_LEVEL_16, RELAY_SMART_ENABLE_LEVEL_32, RELAY_SMART_ENABLE_LEVEL_64
      --mode.served.mode.end-device-controlled                   
      --mode.served.second-channel                               
      --mode.served.second-channel.ack-offset string             allowed values: RELAY_SECOND_CH_ACK_OFFSET_0, RELAY_SECOND_CH_ACK_OFFSET_200, RELAY_SECOND_CH_ACK_OFFSET_400, RELAY_SECOND_CH_ACK_OFFSET_800, RELAY_SECOND_CH_ACK_OFFSET_1600, RELAY_SECOND_CH_ACK_OFFSET_3200
      --mode.served.second-channel.data-rate-index string        allowed values: 0, DATA_RATE_0, 1, DATA_RATE_1, 2, DATA_RATE_2, 3, DATA_RATE_3, 4, DATA_RATE_4, 5, DATA_RATE_5, 6, DATA_RATE_6, 7, DATA_RATE_7, 8, DATA_RATE_8, 9, DATA_RATE_9, 10, DATA_RATE_10, 11, DATA_RATE_11, 12, DATA_RATE_12, 13, DATA_RATE_13, 14, DATA_RATE_14, 15, DATA_RATE_15
      --mode.served.second-channel.frequency uint                
      --mode.served.serving-device-id string                     
      --mode.serving                                             
      --mode.serving.cad-periodicity string                      allowed values: RELAY_CAD_PERIODICITY_1_SECOND, RELAY_CAD_PERIODICITY_500_MILLISECONDS, RELAY_CAD_PERIODICITY_250_MILLISECONDS, RELAY_CAD_PERIODICITY_100_MILLISECONDS, RELAY_CAD_PERIODICITY_50_MILLISECONDS, RELAY_CAD_PERIODICITY_20_MILLISECONDS
      --mode.serving.default-channel-index uint32                
      --mode.serving.limits.join-requests.bucket-size string     allowed values: RELAY_LIMIT_BUCKET_SIZE_1, RELAY_LIMIT_BUCKET_SIZE_2, RELAY_LIMIT_BUCKET_SIZE_4, RELAY_LIMIT_BUCKET_SIZE_12
      --mode.serving.limits.join-requests.reload-rate uint32     
      --mode.serving.limits.notifications.bucket-size string     allowed values: RELAY_LIMIT_BUCKET_SIZE_1, RELAY_LIMIT_BUCKET_SIZE_2, RELAY_LIMIT_BUCKET_SIZE_4, RELAY_LIMIT_BUCKET_SIZE_12
      --mode.serving.limits.notifications.reload-rate uint32     
      --mode.serving.limits.overall.bucket-size string           allowed values: RELAY_LIMIT_BUCKET_SIZE_1, RELAY_LIMIT_BUCKET_SIZE_2, RELAY_LIMIT_BUCKET_SIZE_4, RELAY_LIMIT_BUCKET_SIZE_12
      --mode.serving.limits.overall.reload-rate uint32           
      --mode.serving.limits.reset-behavior string                allowed values: RELAY_RESET_LIMIT_COUNTER_ZERO, RELAY_RESET_LIMIT_COUNTER_RELOAD_RATE, RELAY_RESET_LIMIT_COUNTER_MAX_VALUE, RELAY_RESET_LIMIT_COUNTER_NO_RESET
      --mode.serving.limits.uplink-messages.bucket-size string   allowed values: RELAY_LIMIT_BUCKET_SIZE_1, RELAY_LIMIT_BUCKET_SIZE_2, RELAY_LIMIT_BUCKET_SIZE_4, RELAY_LIMIT_BUCKET_SIZE_12
      --mode.serving.limits.uplink-messages.reload-rate uint32   
      --mode.serving.second-channel.ack-offset string            allowed values: RELAY_SECOND_CH_ACK_OFFSET_0, RELAY_SECOND_CH_ACK_OFFSET_200, RELAY_SECOND_CH_ACK_OFFSET_400, RELAY_SECOND_CH_ACK_OFFSET_800, RELAY_SECOND_CH_ACK_OFFSET_1600, RELAY_SECOND_CH_ACK_OFFSET_3200
      --mode.serving.second-channel.data-rate-index string       allowed values: 0, DATA_RATE_0, 1, DATA_RATE_1, 2, DATA_RATE_2, 3, DATA_RATE_3, 4, DATA_RATE_4, 5, DATA_RATE_5, 6, DATA_RATE_6, 7, DATA_RATE_7, 8, DATA_RATE_8, 9, DATA_RATE_9, 10, DATA_RATE_10, 11, DATA_RATE_11, 12, DATA_RATE_12, 13, DATA_RATE_13, 14, DATA_RATE_14, 15, DATA_RATE_15
      --mode.serving.second-channel.frequency uint               
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

* [ttn-lw-cli relays]({{< relref "ttn-lw-cli_relays" >}})	 - Relay commands (EXPERIMENTAL)


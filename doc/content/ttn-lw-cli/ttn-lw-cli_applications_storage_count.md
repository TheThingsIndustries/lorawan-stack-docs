---
title: "ttn-lw-cli applications storage count"
slug: ttn-lw-cli_applications_storage_count

---

## ttn-lw-cli applications storage count

Count stored upstream messages

```
ttn-lw-cli applications storage count [application-id] [flags]
```

### Options

```
      --after string            query upstream messages after specified timestamp (format: '2006-01-02 15:04:05')
      --after-utc string        query upstream messages after specified timestamp (format: '2006-01-02 15:04:05') (UTC)
      --application-id string   
      --before string           query upstream messages before specified timestamp (format: '2006-01-02 15:04:05')
      --before-utc string       query upstream messages before specified timestamp (format: '2006-01-02 15:04:05') (UTC)
      --f-port uint32           query upstream messages with specific FPort
  -h, --help                    help for count
      --last duration           query upstream messages in the last hours or minutes
      --type string             message type (allowed values: , downlink_ack, downlink_failed, downlink_nack, downlink_queue_invalidated, downlink_queued, downlink_sent, join_accept, location_solved, service_data, uplink_message)
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
      --retry-config.default-timeout duration           Default timeout between retry attempts (default 100ms)
      --retry-config.enable-metadata                    Use request response metadata to dynamically calculate timeout between retry attempts (default true)
      --retry-config.jitter float                       Fraction that creates a deviation of the timeout used between retry attempts
      --retry-config.max uint                           Maximum amount of times that a request can be reattempted
      --skip-version-check                              Do not perform version checks
```

### SEE ALSO

* [ttn-lw-cli applications storage]({{< relref "ttn-lw-cli_applications_storage" >}})	 - Storage Integration


---
title: "ttn-lw-cli relays get"
slug: ttn-lw-cli_relays_get
---

## ttn-lw-cli relays get

Get a relay (EXPERIMENTAL)

```
ttn-lw-cli relays get [application-id] [device-id] [flags]
```

### Options

```
  -h, --help                                              help for get
      --mode.served                                       select the mode.served field and all allowed sub-fields
      --mode.served.backoff                               select the mode.served.backoff field
      --mode.served.mode.always                           select the mode.served.mode.always field and all allowed sub-fields
      --mode.served.mode.dynamic                          select the mode.served.mode.dynamic field and all allowed sub-fields
      --mode.served.mode.dynamic.smart-enable-level       select the mode.served.mode.dynamic.smart_enable_level field
      --mode.served.mode.end-device-controlled            select the mode.served.mode.end_device_controlled field and all allowed sub-fields
      --mode.served.second-channel                        select the mode.served.second_channel field and all allowed sub-fields
      --mode.served.second-channel.ack-offset             select the mode.served.second_channel.ack_offset field
      --mode.served.second-channel.data-rate-index        select the mode.served.second_channel.data_rate_index field
      --mode.served.second-channel.frequency              select the mode.served.second_channel.frequency field
      --mode.served.serving-device-id                     select the mode.served.serving_device_id field
      --mode.serving                                      select the mode.serving field and all allowed sub-fields
      --mode.serving.cad-periodicity                      select the mode.serving.cad_periodicity field
      --mode.serving.default-channel-index                select the mode.serving.default_channel_index field
      --mode.serving.limits                               select the mode.serving.limits field and all allowed sub-fields
      --mode.serving.limits.join-requests                 select the mode.serving.limits.join_requests field and all allowed sub-fields
      --mode.serving.limits.join-requests.bucket-size     select the mode.serving.limits.join_requests.bucket_size field
      --mode.serving.limits.join-requests.reload-rate     select the mode.serving.limits.join_requests.reload_rate field
      --mode.serving.limits.notifications                 select the mode.serving.limits.notifications field and all allowed sub-fields
      --mode.serving.limits.notifications.bucket-size     select the mode.serving.limits.notifications.bucket_size field
      --mode.serving.limits.notifications.reload-rate     select the mode.serving.limits.notifications.reload_rate field
      --mode.serving.limits.overall                       select the mode.serving.limits.overall field and all allowed sub-fields
      --mode.serving.limits.overall.bucket-size           select the mode.serving.limits.overall.bucket_size field
      --mode.serving.limits.overall.reload-rate           select the mode.serving.limits.overall.reload_rate field
      --mode.serving.limits.reset-behavior                select the mode.serving.limits.reset_behavior field
      --mode.serving.limits.uplink-messages               select the mode.serving.limits.uplink_messages field and all allowed sub-fields
      --mode.serving.limits.uplink-messages.bucket-size   select the mode.serving.limits.uplink_messages.bucket_size field
      --mode.serving.limits.uplink-messages.reload-rate   select the mode.serving.limits.uplink_messages.reload_rate field
      --mode.serving.second-channel                       select the mode.serving.second_channel field and all allowed sub-fields
      --mode.serving.second-channel.ack-offset            select the mode.serving.second_channel.ack_offset field
      --mode.serving.second-channel.data-rate-index       select the mode.serving.second_channel.data_rate_index field
      --mode.serving.second-channel.frequency             select the mode.serving.second_channel.frequency field
      --mode.serving.uplink-forwarding-rules              select the mode.serving.uplink_forwarding_rules field
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


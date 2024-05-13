---
title: "ttn-lw-cli applications webhooks get"
slug: ttn-lw-cli_applications_webhooks_get
---

## ttn-lw-cli applications webhooks get

Get the properties of an application webhook

```
ttn-lw-cli applications webhooks get [application-id] [webhook-id] [flags]
```

### Options

```
      --all                                                          select all application webhook fields
      --application-id string                                        
      --base-url                                                     select the base_url field
      --downlink-ack                                                 select the downlink_ack field and all allowed sub-fields
      --downlink-ack.path                                            select the downlink_ack.path field
      --downlink-api-key                                             select the downlink_api_key field
      --downlink-failed                                              select the downlink_failed field and all allowed sub-fields
      --downlink-failed.path                                         select the downlink_failed.path field
      --downlink-nack                                                select the downlink_nack field and all allowed sub-fields
      --downlink-nack.path                                           select the downlink_nack.path field
      --downlink-queue-invalidated                                   select the downlink_queue_invalidated field and all allowed sub-fields
      --downlink-queue-invalidated.path                              select the downlink_queue_invalidated.path field
      --downlink-queued                                              select the downlink_queued field and all allowed sub-fields
      --downlink-queued.path                                         select the downlink_queued.path field
      --downlink-sent                                                select the downlink_sent field and all allowed sub-fields
      --downlink-sent.path                                           select the downlink_sent.path field
      --field-mask                                                   select the field_mask field
      --format                                                       select the format field
      --headers                                                      select the headers field
      --health-status                                                select the health_status field and all allowed sub-fields
      --health-status.status.healthy                                 select the health_status.status.healthy field and all allowed sub-fields
      --health-status.status.unhealthy                               select the health_status.status.unhealthy field and all allowed sub-fields
      --health-status.status.unhealthy.failed-attempts               select the health_status.status.unhealthy.failed_attempts field
      --health-status.status.unhealthy.last-failed-attempt-at        select the health_status.status.unhealthy.last_failed_attempt_at field
      --health-status.status.unhealthy.last-failed-attempt-details   select the health_status.status.unhealthy.last_failed_attempt_details field and all allowed sub-fields
  -h, --help                                                         help for get
      --join-accept                                                  select the join_accept field and all allowed sub-fields
      --join-accept.path                                             select the join_accept.path field
      --location-solved                                              select the location_solved field and all allowed sub-fields
      --location-solved.path                                         select the location_solved.path field
      --queue                                                        select the queue field and all allowed sub-fields
      --queue.enabled                                                select the queue.enabled field
      --service-data                                                 select the service_data field and all allowed sub-fields
      --service-data.path                                            select the service_data.path field
      --template-fields                                              select the template_fields field
      --template-ids                                                 select the template_ids field and all allowed sub-fields
      --template-ids.template-id                                     select the template_ids.template_id field
      --uplink-message                                               select the uplink_message field and all allowed sub-fields
      --uplink-message.path                                          select the uplink_message.path field
      --uplink-normalized                                            select the uplink_normalized field and all allowed sub-fields
      --uplink-normalized.path                                       select the uplink_normalized.path field
      --webhook-id string                                            
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

* [ttn-lw-cli applications webhooks]({{< relref "ttn-lw-cli_applications_webhooks" >}})	 - Application webhooks commands


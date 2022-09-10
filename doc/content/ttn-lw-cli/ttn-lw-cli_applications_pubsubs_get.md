---
title: "ttn-lw-cli applications pubsubs get"
slug: ttn-lw-cli_applications_pubsubs_get
---

## ttn-lw-cli applications pubsubs get

Get the properties of an application pub/sub

```
ttn-lw-cli applications pubsubs get [application-id] [pubsub-id] [flags]
```

### Options

```
      --all                                              select all application pub/sub fields
      --application-id string                            
      --base-topic                                       select the base_topic field
      --downlink-ack                                     select the downlink_ack field and all allowed sub-fields
      --downlink-ack.topic                               select the downlink_ack.topic field
      --downlink-failed                                  select the downlink_failed field and all allowed sub-fields
      --downlink-failed.topic                            select the downlink_failed.topic field
      --downlink-nack                                    select the downlink_nack field and all allowed sub-fields
      --downlink-nack.topic                              select the downlink_nack.topic field
      --downlink-push                                    select the downlink_push field and all allowed sub-fields
      --downlink-push.topic                              select the downlink_push.topic field
      --downlink-queue-invalidated                       select the downlink_queue_invalidated field and all allowed sub-fields
      --downlink-queue-invalidated.topic                 select the downlink_queue_invalidated.topic field
      --downlink-queued                                  select the downlink_queued field and all allowed sub-fields
      --downlink-queued.topic                            select the downlink_queued.topic field
      --downlink-replace                                 select the downlink_replace field and all allowed sub-fields
      --downlink-replace.topic                           select the downlink_replace.topic field
      --downlink-sent                                    select the downlink_sent field and all allowed sub-fields
      --downlink-sent.topic                              select the downlink_sent.topic field
      --format                                           select the format field
  -h, --help                                             help for get
      --join-accept                                      select the join_accept field and all allowed sub-fields
      --join-accept.topic                                select the join_accept.topic field
      --location-solved                                  select the location_solved field and all allowed sub-fields
      --location-solved.topic                            select the location_solved.topic field
      --provider.aws-iot                                 select the provider.aws_iot field and all allowed sub-fields
      --provider.aws-iot.access-key                      select the provider.aws_iot.access_key field and all allowed sub-fields
      --provider.aws-iot.access-key.access-key-id        select the provider.aws_iot.access_key.access_key_id field
      --provider.aws-iot.access-key.secret-access-key    select the provider.aws_iot.access_key.secret_access_key field
      --provider.aws-iot.access-key.session-token        select the provider.aws_iot.access_key.session_token field
      --provider.aws-iot.assume-role                     select the provider.aws_iot.assume_role field and all allowed sub-fields
      --provider.aws-iot.assume-role.arn                 select the provider.aws_iot.assume_role.arn field
      --provider.aws-iot.assume-role.external-id         select the provider.aws_iot.assume_role.external_id field
      --provider.aws-iot.assume-role.session-duration    select the provider.aws_iot.assume_role.session_duration field
      --provider.aws-iot.deployment.default              select the provider.aws_iot.deployment.default field and all allowed sub-fields
      --provider.aws-iot.deployment.default.stack-name   select the provider.aws_iot.deployment.default.stack_name field
      --provider.aws-iot.endpoint-address                select the provider.aws_iot.endpoint_address field
      --provider.aws-iot.region                          select the provider.aws_iot.region field
      --provider.mqtt                                    select the provider.mqtt field and all allowed sub-fields
      --provider.mqtt.client-id                          select the provider.mqtt.client_id field
      --provider.mqtt.headers                            select the provider.mqtt.headers field
      --provider.mqtt.password                           select the provider.mqtt.password field
      --provider.mqtt.publish-qos                        select the provider.mqtt.publish_qos field
      --provider.mqtt.server-url                         select the provider.mqtt.server_url field
      --provider.mqtt.subscribe-qos                      select the provider.mqtt.subscribe_qos field
      --provider.mqtt.tls-ca                             select the provider.mqtt.tls_ca field
      --provider.mqtt.tls-client-cert                    select the provider.mqtt.tls_client_cert field
      --provider.mqtt.tls-client-key                     select the provider.mqtt.tls_client_key field
      --provider.mqtt.use-tls                            select the provider.mqtt.use_tls field
      --provider.mqtt.username                           select the provider.mqtt.username field
      --provider.nats                                    select the provider.nats field and all allowed sub-fields
      --provider.nats.server-url                         select the provider.nats.server_url field
      --pubsub-id string                                 
      --service-data                                     select the service_data field and all allowed sub-fields
      --service-data.topic                               select the service_data.topic field
      --uplink-message                                   select the uplink_message field and all allowed sub-fields
      --uplink-message.topic                             select the uplink_message.topic field
      --uplink-normalized                                select the uplink_normalized field and all allowed sub-fields
      --uplink-normalized.topic                          select the uplink_normalized.topic field
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

* [ttn-lw-cli applications pubsubs]({{< relref "ttn-lw-cli_applications_pubsubs" >}})	 - Application pub/sub commands


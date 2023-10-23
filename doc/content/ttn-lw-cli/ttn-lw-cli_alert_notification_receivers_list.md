---
title: "ttn-lw-cli alert-notification-receivers list"
slug: ttn-lw-cli_alert_notification_receivers_list
---

## ttn-lw-cli alert-notification-receivers list

List an alert notification receiver (EXPERIMENTAL)

```
ttn-lw-cli alert-notification-receivers list [flags]
```

## Aliases:
```
list, ls
```

### Options
```
      --contact-method.email              select the contact_method.email field and all allowed sub-fields
      --contact-method.email.recipient    select the contact_method.email.recipient field
      --contact-method.sms                select the contact_method.sms field and all allowed sub-fields
      --contact-method.sms.phone-number   select the contact_method.sms.phone_number field
      --contact-method.webhook            select the contact_method.webhook field and all allowed sub-fields
      --contact-method.webhook.headers    select the contact_method.webhook.headers field
      --contact-method.webhook.url        select the contact_method.webhook.url field
  -h, --help                              help for list
      --limit uint32                      maximum number of results to get (default 50)
      --name                              select the name field
      --order string                      order by this field
      --page uint32                       results page number (default 1)
      --receiver-id                       select the receiver_id field
```

### Options inherited from parent commands

```
      --allow-unknown-hosts                             Allow sending credentials to unknown hosts
      --application-server-enabled                      Application Server enabled (default true)
      --application-server-grpc-address string          Application Server address (default "localhost:8884")
      --ca string                                       CA certificate file
  -c, --config strings                                  Location of the config files (default [.ttn-lw-cli.yml,/home/nick/.ttn-lw-cli.yml,/home/nick/.config/.ttn-lw-cli.yml])
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
      --retry.jitter float                              Fraction that deletes a deviation of the timeout used between retry attempts
      --retry.max uint                                  Maximum amount of times that a request can be reattempted
      --skip-version-check                              Do not perform version checks
      --telemetry.enable                                Enables telemetry for CLI (default true)
      --telemetry.target string                         Target to which the information will be sent to (default "https://telemetry.thethingsstack.io/collect")
```

### SEE ALSO

* [ttn-lw-cli]({{< relref "ttn-lw-cli" >}})	 - The Things Industries Command-line Interface
* [ttn-lw-cli alert-notification-receivers create]({{< relref "ttn-lw-cli_alert_notification_receivers_create" >}})	 - Alert notification receiver create command
* [ttn-lw-cli alert-notification-receivers get]({{< relref "ttn-lw-cli_alert_notification_receivers_get" >}})	 - Alert notification receiver get command
* [ttn-lw-cli alert-notification-receivers list]({{< relref "ttn-lw-cli_alert_notification_receivers_list" >}})	 - Alert notification receiver list command
* [ttn-lw-cli alert-notification-receivers update]({{< relref "ttn-lw-cli_alert_notification_receivers_update" >}})	 - Alert notification receiver update command
* [ttn-lw-cli alert-notification-receivers delete]({{< relref "ttn-lw-cli_alert_notification_receivers_delete" >}})	 - Alert notification receiver delete command

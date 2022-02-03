---
title: "ttn-lw-cli end-devices list"
slug: ttn-lw-cli_end-devices_list
type: "commands"
---

## ttn-lw-cli end-devices list

List end devices

```
ttn-lw-cli end-devices list [application-id] [flags]
```

### Options

```
      --activated-at                   select the activated_at field
      --all                            select all end devices fields
      --application-id string          
      --application-server-address     select the application_server_address field
      --attributes                     select the attributes field
      --description                    select the description field
  -h, --help                           help for list
      --join-server-address            select the join_server_address field
      --limit uint32                   maximum number of results to get (default 50)
      --locations                      select the locations field
      --name                           select the name field
      --network-server-address         select the network_server_address field
      --order string                   order by this field
      --page uint32                    results page number (default 1)
      --picture                        select the picture field
      --service-profile-id             select the service_profile_id field
      --version-ids                    select the version_ids field and all allowed sub-fields
      --version-ids.band-id            select the version_ids.band_id field
      --version-ids.brand-id           select the version_ids.brand_id field
      --version-ids.firmware-version   select the version_ids.firmware_version field
      --version-ids.hardware-version   select the version_ids.hardware_version field
      --version-ids.model-id           select the version_ids.model_id field
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

* [ttn-lw-cli end-devices]({{< relref "ttn-lw-cli_end-devices" >}})	 - End Device commands


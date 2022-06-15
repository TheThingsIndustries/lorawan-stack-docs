---
title: "ttn-lw-cli end-devices get-default-mac-settings"
slug: ttn-lw-cli_end-devices_get-default-mac-settings
---

## ttn-lw-cli end-devices get-default-mac-settings

Get Network Server default MAC settings for frequency plan and LoRaWAN version

```
ttn-lw-cli end-devices get-default-mac-settings [flags]
```

### Options

```
      --frequency-plan-id string     
  -h, --help                         help for get-default-mac-settings
      --lorawan-phy-version string   allowed values: PHY_UNKNOWN, unknown, PHY_V1_0, TS001_V1_0, 1.0, V1_0, 1.0.0, PHY_V1_0_1, TS001_V1_0_1, 1.0.1, V1_0_1, PHY_V1_0_2_REV_A, RP001_V1_0_2, 1.0.2-a, 1.0.2, V1_0_2, V1_0_2_REV_A, RP001_V1_0_2_REV_B, PHY_V1_0_2_REV_B, 1.0.2-b, V1_0_2_REV_B, PHY_V1_1_REV_A, RP001_V1_1_REV_A, 1.1-a, V1_1_REV_A, 1.1.0-a, RP001_V1_1_REV_B, PHY_V1_1_REV_B, 1.1-b, 1.1.0-b, V1_1_REV_B, RP001_V1_0_3_REV_A, PHY_V1_0_3_REV_A, 1.0.3-a, V1_0_3_REV_A, RP002_V1_0_0, RP002_V1_0_1, RP002_V1_0_2, RP002_V1_0_3
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


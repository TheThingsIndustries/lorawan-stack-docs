---
title: "ttn-lw-cli end-devices generate-qr"
slug: ttn-lw-cli_end-devices_generate-qr
type: "commands"
---

## ttn-lw-cli end-devices generate-qr

Generate an end device QR code (EXPERIMENTAL)

### Synopsis

Generate an end device QR code (EXPERIMENTAL)

This command saves a QR code in PNG format in the given folder. The filename is
the device ID.

This command may take end device identifiers from stdin.

```
ttn-lw-cli end-devices generate-qr [application-id] [device-id] [flags]
```

### Examples

```

  To generate a QR code for a single end device:
    $ ttn-lw-cli end-devices generate-qr app1 dev1

  To generate a QR code for multiple end devices:
    $ ttn-lw-cli end-devices list app1 \
      | ttn-lw-cli end-devices generate-qr
```

### Options

```
      --application-id string   
      --dev-eui string          (hex)
      --device-id string        
      --folder string           folder to write the QR code image to
      --format-id string        
  -h, --help                    help for generate-qr
      --join-eui string         (hex)
      --size uint32             size of the image in pixels (default 300)
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

* [ttn-lw-cli end-devices]({{< relref "ttn-lw-cli_end-devices" >}})	 - End Device commands


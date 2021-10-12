---
title: "ttn-lw-cli end-devices"
slug: ttn-lw-cli_end-devices
type: "commands"
---

## ttn-lw-cli end-devices

End Device commands

### Options

```
  -h, --help   help for end-devices
```

### Options inherited from parent commands

```
      --allow-unknown-hosts                             Allow sending credentials to unknown hosts
      --application-server-enabled                      Application Server enabled (default true)
      --application-server-grpc-address string          Application Server address (default "localhost:8884")
      --ca string                                       CA certificate file
  -c, --config strings                                  Location of the config files (default [.ttn-lw-cli.yml,$HOME/.ttn-lw-cli.yml,$HOME/Library/Application Support/.ttn-lw-cli.yml])
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

* [ttn-lw-cli]({{< relref "ttn-lw-cli" >}})	 - The Things Industries Command-line Interface
* [ttn-lw-cli end-devices claim]({{< relref "ttn-lw-cli_end-devices_claim" >}})	 - Claim an end device (EXPERIMENTAL)
* [ttn-lw-cli end-devices create]({{< relref "ttn-lw-cli_end-devices_create" >}})	 - Create an end device
* [ttn-lw-cli end-devices delete]({{< relref "ttn-lw-cli_end-devices_delete" >}})	 - Delete an end device
* [ttn-lw-cli end-devices downlink]({{< relref "ttn-lw-cli_end-devices_downlink" >}})	 - Application downlink commands
* [ttn-lw-cli end-devices generate-qr]({{< relref "ttn-lw-cli_end-devices_generate-qr" >}})	 - Generate an end device QR code (EXPERIMENTAL)
* [ttn-lw-cli end-devices get]({{< relref "ttn-lw-cli_end-devices_get" >}})	 - Get an end device
* [ttn-lw-cli end-devices get-default-mac-settings]({{< relref "ttn-lw-cli_end-devices_get-default-mac-settings" >}})	 - Get Network Server default MAC settings for frequency plan and LoRaWAN version
* [ttn-lw-cli end-devices list]({{< relref "ttn-lw-cli_end-devices_list" >}})	 - List end devices
* [ttn-lw-cli end-devices list-frequency-plans]({{< relref "ttn-lw-cli_end-devices_list-frequency-plans" >}})	 - List available frequency plans for end devices
* [ttn-lw-cli end-devices list-qr-formats]({{< relref "ttn-lw-cli_end-devices_list-qr-formats" >}})	 - List QR code formats (EXPERIMENTAL)
* [ttn-lw-cli end-devices provision]({{< relref "ttn-lw-cli_end-devices_provision" >}})	 - Provision end devices using vendor-specific data
* [ttn-lw-cli end-devices reset]({{< relref "ttn-lw-cli_end-devices_reset" >}})	 - Reset state of an end device to factory defaults
* [ttn-lw-cli end-devices search]({{< relref "ttn-lw-cli_end-devices_search" >}})	 - Search for end devices
* [ttn-lw-cli end-devices set]({{< relref "ttn-lw-cli_end-devices_set" >}})	 - Set properties of an end device
* [ttn-lw-cli end-devices storage]({{< relref "ttn-lw-cli_end-devices_storage" >}})	 - Storage Integration
* [ttn-lw-cli end-devices templates]({{< relref "ttn-lw-cli_templates" >}})	 - End Device template commands
* [ttn-lw-cli end-devices use-external-join-server]({{< relref "ttn-lw-cli_end-devices_use-external-join-server" >}})	 - Disassociate and delete the device from Join Server


---
title: "ttn-lw-cli end-devices claim"
slug: ttn-lw-cli_end-devices_claim

---

## ttn-lw-cli end-devices claim

Claim an end device (EXPERIMENTAL)

### Synopsis

Claim an end device (EXPERIMENTAL)

The claiming procedure transfers devices from the source application to the
target application using the Device Claiming Server, thereby transferring
ownership of the device.

Authentication of device claiming is by the device's JoinEUI, DevEUI and claim
authentication code as stored in the Join Server. This information is typically
encoded in a QR code. This command supports claiming by QR code (via stdin), as
well as providing the claim information through the flags --source-join-eui,
--source-dev-eui, --source-authentication-code.

Claim authentication code validity is controlled by the owner of the device by
setting the value and optionally a time window when the code is valid. As part
of the claiming, the claim authentication code is invalidated by default to
block subsequent claiming attempts. You can keep the claim authentication code
valid by specifying --invalidate-authentication-code=false.

As part of claiming, you can optionally provide the target NetID, Network Server
KEK label and Application Server ID and KEK label. The Network Server and
Application Server addresses will be taken from the CLI configuration. These
values will be stored in the Join Server.

```
ttn-lw-cli end-devices claim [application-id] [flags]
```

### Options

```
      --application-id string                        
  -h, --help                                         help for claim
      --invalidate-authentication-code               invalidate the claim authentication code to block subsequent claiming attempts (default true)
      --source-authentication-code string            (hex)
      --source-dev-eui string                        (hex)
      --source-join-eui string                       (hex)
      --target-application-server-id string          
      --target-application-server-kek-label string   
      --target-device-id string                      
      --target-net-id string                         (hex)
      --target-network-server-kek-label string       
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


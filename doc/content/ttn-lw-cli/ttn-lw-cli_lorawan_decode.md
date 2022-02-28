---
title: "ttn-lw-cli lorawan decode"
slug: ttn-lw-cli_lorawan_decode

---

## ttn-lw-cli lorawan decode

Decode LoRaWAN frames

```
ttn-lw-cli lorawan decode [flags]
```

### Examples

```

  Join Request:
    $ echo 'AFP6A9B+1bNwFgIcAAujBABERDaumME=' | ttn-lw-cli lorawan decode --input-format base64
    $ echo '0053fa03d07ed5b37016021c000ba30400444436ae98c1' | ttn-lw-cli lorawan decode --input-format hex

  Join Accept:
    $ echo 'IAUNJTHDK7t2zM+eeFmGIyjAlSyqfNfAWPzZTjhcVfAg' | ttn-lw-cli lorawan decode --input-format base64
    $ echo 'IAUNJTHDK7t2zM+eeFmGIyjAlSyqfNfAWPzZTjhcVfAg' | ttn-lw-cli lorawan decode --input-format base64 --app-key 5CF2BD4810FD92E9271050D2541A0F2B
    $ echo 'IAUNJTHDK7t2zM+eeFmGIyjAlSyqfNfAWPzZTjhcVfAg' | ttn-lw-cli lorawan decode --input-format base64 --lorawan-version 1.1 --nwk-key 5CF2BD4810FD92E9271050D2541A0F2B

  Example Network Uplink:
    $ echo 'QL8AACeFAQADBwb/CP6z6aY=' | ttn-lw-cli lorawan decode --input-format base64

  Example Data Uplink:
    $ echo 'QD7U3QEAEgABK7VS98g=' | ttn-lw-cli lorawan decode --input-format base64
    $ echo 'QD7U3QEAEgABK7VS98g=' | ttn-lw-cli lorawan decode --input-format base64 --app-s-key CAE4B67DA7EA96144AFD687CD1EF1F23
		
```

### Options

```
      --app-key string               LoRaWAN AppKey
      --app-s-key string             LoRaWAN AppSKey
      --band string                  LoRaWAN Band ID (default "EU_863_870")
      --f-nwk-s-int-key string       LoRaWAN FNwkSIntKey (LoRaWAN 1.1+)
  -h, --help                         help for decode
      --lorawan-phy-version string   LoRaWAN Regional Parameters version (default "1.0.2-b")
      --lorawan-version string       LoRaWAN version (default "1.0.2")
      --nwk-key string               LoRaWAN NwkKey
      --nwk-s-enc-key string         LoRaWAN NwkSEncKey (LoRaWAN 1.1+)
      --nwk-s-key string             LoRaWAN NwkSKey
      --s-nwk-s-int-key string       LoRaWAN SNwkSIntKey (LoRaWAN 1.1+)
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

* [ttn-lw-cli lorawan]({{< relref "ttn-lw-cli_lorawan" >}})	 - LoRaWAN commands


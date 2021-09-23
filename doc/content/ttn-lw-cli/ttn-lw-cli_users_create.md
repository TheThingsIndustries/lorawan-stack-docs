---
title: "ttn-lw-cli users create"
slug: ttn-lw-cli_users_create
type: "commands"
---

## ttn-lw-cli users create

Create a user

```
ttn-lw-cli users create [user-id] [flags]
```

### Options

```
      --admin                                       
      --attributes strings                          key=value
      --deleted-at string                           (YYYY-MM-DDTHH:MM:SSZ)
      --description string                          
  -h, --help                                        help for create
      --invitation-token string                     
      --name string                                 
      --password string                             
      --primary-email-address string                
      --primary-email-address-validated-at string   (YYYY-MM-DDTHH:MM:SSZ)
      --profile-picture string                      upload the profile picture from this file
      --require-password-update                     
      --state string                                allowed values: STATE_APPROVED, STATE_FLAGGED, STATE_REJECTED, STATE_REQUESTED, STATE_SUSPENDED (default "STATE_APPROVED")
      --state-description string                    
      --temporary-password string                   
      --temporary-password-expires-at string        (YYYY-MM-DDTHH:MM:SSZ)
      --user-id string                              
```

### Options inherited from parent commands

```
      --allow-unknown-hosts                             Allow sending credentials to unknown hosts
      --application-server-enabled                      Application Server enabled (default true)
      --application-server-grpc-address string          Application Server address (default "localhost:8884")
      --ca string                                       CA certificate file
  -c, --config strings                                  Location of the config files (default [.ttn-lw-cli.yml,/Users/ben/.ttn-lw-cli.yml,/Users/ben/Library/Application Support/.ttn-lw-cli.yml])
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

* [ttn-lw-cli users]({{< relref "ttn-lw-cli_users" >}})	 - User commands


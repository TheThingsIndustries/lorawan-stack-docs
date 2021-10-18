---
title: "ttn-lw-cli users get"
slug: ttn-lw-cli_users_get
type: "commands"
---

## ttn-lw-cli users get

Get a user

```
ttn-lw-cli users get [user-id] [flags]
```

### Options

```
      --admin                                select the admin field
      --all                                  select all user fields
      --attributes                           select the attributes field
      --contact-info                         select the contact_info field
      --deleted-at                           select the deleted_at field
      --description                          select the description field
  -h, --help                                 help for get
      --name                                 select the name field
      --password                             select the password field
      --password-updated-at                  select the password_updated_at field
      --primary-email-address                select the primary_email_address field
      --primary-email-address-validated-at   select the primary_email_address_validated_at field
      --profile-picture                      select the profile_picture field
      --require-password-update              select the require_password_update field
      --state                                select the state field
      --state-description                    select the state_description field
      --temporary-password                   select the temporary_password field
      --temporary-password-created-at        select the temporary_password_created_at field
      --temporary-password-expires-at        select the temporary_password_expires_at field
      --user-id string                       
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

* [ttn-lw-cli users]({{< relref "ttn-lw-cli_users" >}})	 - User commands


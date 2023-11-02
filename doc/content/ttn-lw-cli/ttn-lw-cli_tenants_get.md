---
title: "ttn-lw-cli tenants get"
slug: ttn-lw-cli_tenants_get
---

## ttn-lw-cli tenants get

Get a tenant

```
ttn-lw-cli tenants get [tenant-id] [flags]
```

### Options

```
      --attributes                                                                               select the attributes field
      --billing                                                                                  select the billing field and all allowed sub-fields
      --billing-identifiers                                                                      select the billing_identifiers field and all allowed sub-fields
      --billing-identifiers.billing-id                                                           select the billing_identifiers.billing_id field
      --billing.counting                                                                         select the billing.counting field and all allowed sub-fields
      --billing.counting.end-devices                                                             select the billing.counting.end_devices field
      --billing.provider.aws-saas-marketplace                                                    select the billing.provider.aws_saas_marketplace field and all allowed sub-fields
      --billing.provider.aws-saas-marketplace.customer-identifier                                select the billing.provider.aws_saas_marketplace.customer_identifier field
      --billing.provider.aws-saas-marketplace.product-code                                       select the billing.provider.aws_saas_marketplace.product_code field
      --billing.provider.stripe                                                                  select the billing.provider.stripe field and all allowed sub-fields
      --billing.provider.stripe.customer-id                                                      select the billing.provider.stripe.customer_id field
      --billing.provider.stripe.plan-id                                                          select the billing.provider.stripe.plan_id field
      --billing.provider.stripe.subscription-id                                                  select the billing.provider.stripe.subscription_id field
      --billing.provider.stripe.subscription-item-id                                             select the billing.provider.stripe.subscription_item_id field
      --capabilities                                                                             select the capabilities field
      --configuration                                                                            select the configuration field and all allowed sub-fields
      --configuration.clusters                                                                   select the configuration.clusters field
      --configuration.default-cluster                                                            select the configuration.default_cluster field and all allowed sub-fields
      --configuration.default-cluster.is                                                         select the configuration.default_cluster.is field and all allowed sub-fields
      --configuration.default-cluster.is.admin-rights                                            select the configuration.default_cluster.is.admin_rights field and all allowed sub-fields
      --configuration.default-cluster.is.admin-rights.all                                        select the configuration.default_cluster.is.admin_rights.all field
      --configuration.default-cluster.is.application-limits                                      select the configuration.default_cluster.is.application_limits field and all allowed sub-fields
      --configuration.default-cluster.is.email                                                   select the configuration.default_cluster.is.email field and all allowed sub-fields
      --configuration.default-cluster.is.email.network                                           select the configuration.default_cluster.is.email.network field and all allowed sub-fields
      --configuration.default-cluster.is.email.network.branding-base-url                         select the configuration.default_cluster.is.email.network.branding_base_url field
      --configuration.default-cluster.is.end-device-picture                                      select the configuration.default_cluster.is.end_device_picture field and all allowed sub-fields
      --configuration.default-cluster.is.end-device-picture.disable-upload                       select the configuration.default_cluster.is.end_device_picture.disable_upload field
      --configuration.default-cluster.is.organization-limits                                     select the configuration.default_cluster.is.organization_limits field and all allowed sub-fields
      --configuration.default-cluster.is.profile-picture                                         select the configuration.default_cluster.is.profile_picture field and all allowed sub-fields
      --configuration.default-cluster.is.profile-picture.disable-upload                          select the configuration.default_cluster.is.profile_picture.disable_upload field
      --configuration.default-cluster.is.profile-picture.use-gravatar                            select the configuration.default_cluster.is.profile_picture.use_gravatar field
      --configuration.default-cluster.is.user-limits                                             select the configuration.default_cluster.is.user_limits field and all allowed sub-fields
      --configuration.default-cluster.is.user-login                                              select the configuration.default_cluster.is.user_login field and all allowed sub-fields
      --configuration.default-cluster.is.user-login.disable-credentials-login                    select the configuration.default_cluster.is.user_login.disable_credentials_login field
      --configuration.default-cluster.is.user-registration                                       select the configuration.default_cluster.is.user_registration field and all allowed sub-fields
      --configuration.default-cluster.is.user-registration.admin-approval                        select the configuration.default_cluster.is.user_registration.admin_approval field and all allowed sub-fields
      --configuration.default-cluster.is.user-registration.admin-approval.required               select the configuration.default_cluster.is.user_registration.admin_approval.required field
      --configuration.default-cluster.is.user-registration.contact-info-validation               select the configuration.default_cluster.is.user_registration.contact_info_validation field and all allowed sub-fields
      --configuration.default-cluster.is.user-registration.contact-info-validation.required      select the configuration.default_cluster.is.user_registration.contact_info_validation.required field
      --configuration.default-cluster.is.user-registration.enabled                               select the configuration.default_cluster.is.user_registration.enabled field
      --configuration.default-cluster.is.user-registration.invitation                            select the configuration.default_cluster.is.user_registration.invitation field and all allowed sub-fields
      --configuration.default-cluster.is.user-registration.invitation.required                   select the configuration.default_cluster.is.user_registration.invitation.required field
      --configuration.default-cluster.is.user-registration.invitation.token-ttl                  select the configuration.default_cluster.is.user_registration.invitation.token_ttl field
      --configuration.default-cluster.is.user-registration.password-requirements                 select the configuration.default_cluster.is.user_registration.password_requirements field and all allowed sub-fields
      --configuration.default-cluster.is.user-registration.password-requirements.max-length      select the configuration.default_cluster.is.user_registration.password_requirements.max_length field
      --configuration.default-cluster.is.user-registration.password-requirements.min-digits      select the configuration.default_cluster.is.user_registration.password_requirements.min_digits field
      --configuration.default-cluster.is.user-registration.password-requirements.min-length      select the configuration.default_cluster.is.user_registration.password_requirements.min_length field
      --configuration.default-cluster.is.user-registration.password-requirements.min-special     select the configuration.default_cluster.is.user_registration.password_requirements.min_special field
      --configuration.default-cluster.is.user-registration.password-requirements.min-uppercase   select the configuration.default_cluster.is.user_registration.password_requirements.min_uppercase field
      --configuration.default-cluster.is.user-rights                                             select the configuration.default_cluster.is.user_rights field and all allowed sub-fields
      --configuration.default-cluster.is.user-rights.create-applications                         select the configuration.default_cluster.is.user_rights.create_applications field
      --configuration.default-cluster.is.user-rights.create-clients                              select the configuration.default_cluster.is.user_rights.create_clients field
      --configuration.default-cluster.is.user-rights.create-gateways                             select the configuration.default_cluster.is.user_rights.create_gateways field
      --configuration.default-cluster.is.user-rights.create-organizations                        select the configuration.default_cluster.is.user_rights.create_organizations field
      --configuration.default-cluster.is.user-rights.update-name                                 select the configuration.default_cluster.is.user_rights.update_name field
      --configuration.default-cluster.is.user-rights.update-primary-email-address                select the configuration.default_cluster.is.user_rights.update_primary_email_address field
      --configuration.default-cluster.js                                                         select the configuration.default_cluster.js field and all allowed sub-fields
      --configuration.default-cluster.js.join-eui-prefixes                                       select the configuration.default_cluster.js.join_eui_prefixes field
      --configuration.default-cluster.noc                                                        select the configuration.default_cluster.noc field and all allowed sub-fields
      --configuration.default-cluster.noc.access                                                 select the configuration.default_cluster.noc.access field and all allowed sub-fields
      --configuration.default-cluster.noc.access.extended                                        select the configuration.default_cluster.noc.access.extended field
      --configuration.default-cluster.ns                                                         select the configuration.default_cluster.ns field and all allowed sub-fields
      --configuration.default-cluster.ns.cooldown-window                                         select the configuration.default_cluster.ns.cooldown_window field
      --configuration.default-cluster.ns.deduplication-window                                    select the configuration.default_cluster.ns.deduplication_window field
      --configuration.default-cluster.ns.dev-addr-prefixes                                       select the configuration.default_cluster.ns.dev_addr_prefixes field
      --configuration.default-cluster.ns.net-id                                                  select the configuration.default_cluster.ns.net_id field
      --configuration.default-cluster.ns.ns-id                                                   select the configuration.default_cluster.ns.ns_id field
      --configuration.default-cluster.ui                                                         select the configuration.default_cluster.ui field and all allowed sub-fields
      --configuration.default-cluster.ui.branding-base-url                                       select the configuration.default_cluster.ui.branding_base_url field
      --configuration.pb                                                                         select the configuration.pb field and all allowed sub-fields
      --configuration.pb.listed                                                                  select the configuration.pb.listed field
      --contact-info                                                                             select the contact_info field
      --description                                                                              select the description field
  -h, --help                                                                                     help for get
      --max-applications                                                                         select the max_applications field
      --max-clients                                                                              select the max_clients field
      --max-end-devices                                                                          select the max_end_devices field
      --max-gateways                                                                             select the max_gateways field
      --max-organizations                                                                        select the max_organizations field
      --max-users                                                                                select the max_users field
      --name                                                                                     select the name field
      --state                                                                                    select the state field
      --state-description                                                                        select the state_description field
      --tenant-id string                                                                         
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
      --telemetry.enable                                Enables telemetry for CLI (default true)
      --telemetry.target string                         Target to which the information will be sent to (default "https://telemetry.thethingsstack.io/collect")
      --tenant-admin-key string                         Tenant admin key
```

### SEE ALSO

* [ttn-lw-cli tenants]({{< relref "ttn-lw-cli_tenants" >}})	 - Tenant commands


---
title: "ttn-lw-cli tenants create"
slug: ttn-lw-cli_tenants_create
---

## ttn-lw-cli tenants create

Create a tenant

```
ttn-lw-cli tenants create [tenant-id] [flags]
```

### Options

```
      --attributes stringToString                                                                       
      --billing-identifiers.billing-id string                                                           
      --billing.counting.end-devices string                                                             allowed values: ALL, ONLY_ACTIVATED
      --billing.provider.aws-saas-marketplace.customer-identifier string                                
      --billing.provider.aws-saas-marketplace.product-code string                                       
      --billing.provider.stripe.customer-id string                                                      
      --billing.provider.stripe.plan-id string                                                          
      --billing.provider.stripe.subscription-id string                                                  
      --billing.provider.stripe.subscription-item-id string                                             
      --configuration.default-cluster.is.admin-rights.all                                               
      --configuration.default-cluster.is.email.network.branding-base-url string                         
      --configuration.default-cluster.is.end-device-picture.disable-upload                              
      --configuration.default-cluster.is.profile-picture.disable-upload                                 
      --configuration.default-cluster.is.profile-picture.use-gravatar                                   
      --configuration.default-cluster.is.user-login.disable-credentials-login                           
      --configuration.default-cluster.is.user-registration.admin-approval.required                      
      --configuration.default-cluster.is.user-registration.contact-info-validation.required             
      --configuration.default-cluster.is.user-registration.enabled                                      
      --configuration.default-cluster.is.user-registration.invitation.required                          
      --configuration.default-cluster.is.user-registration.invitation.token-ttl duration                
      --configuration.default-cluster.is.user-registration.password-requirements.max-length uint32      
      --configuration.default-cluster.is.user-registration.password-requirements.min-digits uint32      
      --configuration.default-cluster.is.user-registration.password-requirements.min-length uint32      
      --configuration.default-cluster.is.user-registration.password-requirements.min-special uint32     
      --configuration.default-cluster.is.user-registration.password-requirements.min-uppercase uint32   
      --configuration.default-cluster.is.user-rights.create-applications                                
      --configuration.default-cluster.is.user-rights.create-clients                                     
      --configuration.default-cluster.is.user-rights.create-gateways                                    
      --configuration.default-cluster.is.user-rights.create-organizations                               
      --configuration.default-cluster.is.user-rights.update-name                                        
      --configuration.default-cluster.is.user-rights.update-primary-email-address                       
      --configuration.default-cluster.js.join-eui-prefixes strings                                      
      --configuration.default-cluster.noc.access.extended                                               
      --configuration.default-cluster.ns.cooldown-window duration                                       
      --configuration.default-cluster.ns.deduplication-window duration                                  
      --configuration.default-cluster.ns.dev-addr-prefixes strings                                      
      --configuration.default-cluster.ns.net-id 3-bytes                                                 
      --configuration.default-cluster.ns.ns-id bytesBase64                                              
      --configuration.default-cluster.ui.branding-base-url string                                       
      --configuration.pb.listed                                                                         
      --description string                                                                              
  -h, --help                                                                                            help for create
      --initial-user                                                                                    create initial tenant user (default true)
      --initial-user.admin                                                                              
      --initial-user.application-limit uint                                                             
      --initial-user.attributes stringToString                                                          
      --initial-user.client-limit uint                                                                  
      --initial-user.description string                                                                 
      --initial-user.gateway-limit uint                                                                 
      --initial-user.ids.user-id string                                                                 
      --initial-user.name string                                                                        
      --initial-user.organization-limit uint                                                            
      --initial-user.password string                                                                    
      --initial-user.primary-email-address string                                                       
      --initial-user.primary-email-address-validated-at timestamp                                       
      --initial-user.require-password-update                                                            
      --initial-user.state string                                                                       allowed values: STATE_REQUESTED, STATE_APPROVED, STATE_REJECTED, STATE_FLAGGED, STATE_SUSPENDED
      --initial-user.state-description string                                                           
      --initial-user.temporary-password string                                                          
      --max-applications uint                                                                           
      --max-clients uint                                                                                
      --max-end-devices uint                                                                            
      --max-gateways uint                                                                               
      --max-organizations uint                                                                          
      --max-users uint                                                                                  
      --name string                                                                                     
      --state string                                                                                    allowed values: STATE_REQUESTED, STATE_APPROVED, STATE_REJECTED, STATE_FLAGGED, STATE_SUSPENDED
      --state-description string                                                                        
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


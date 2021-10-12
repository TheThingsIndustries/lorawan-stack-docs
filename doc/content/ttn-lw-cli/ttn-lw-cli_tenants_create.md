---
title: "ttn-lw-cli tenants create"
slug: ttn-lw-cli_tenants_create
type: "commands"
---

## ttn-lw-cli tenants create

Create a tenant

```
ttn-lw-cli tenants create [tenant-id] [flags]
```

### Options

```
      --attributes strings                                                                              key=value
      --billing-identifiers.billing-id string                                                           
      --billing.counting.end-devices int32                                                              
      --billing.provider.aws-saas-marketplace.customer-identifier string                                
      --billing.provider.aws-saas-marketplace.product-code string                                       
      --billing.provider.stripe.customer-id string                                                      
      --billing.provider.stripe.plan-id string                                                          
      --billing.provider.stripe.subscription-id string                                                  
      --billing.provider.stripe.subscription-item-id string                                             
      --configuration.default-cluster.is.admin-rights.all                                               
      --configuration.default-cluster.is.end-device-picture.disable-upload                              
      --configuration.default-cluster.is.profile-picture.disable-upload                                 
      --configuration.default-cluster.is.profile-picture.use-gravatar                                   
      --configuration.default-cluster.is.user-login.disable-credentials-login                           
      --configuration.default-cluster.is.user-registration.admin-approval.required                      
      --configuration.default-cluster.is.user-registration.contact-info-validation.required             
      --configuration.default-cluster.is.user-registration.enabled                                      
      --configuration.default-cluster.is.user-registration.invitation.required                          
      --configuration.default-cluster.is.user-registration.invitation.token-ttl duration                (1h2m3s)
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
      --configuration.default-cluster.ns.cooldown-window duration                                       (1h2m3s)
      --configuration.default-cluster.ns.deduplication-window duration                                  (1h2m3s)
      --configuration.default-cluster.ns.dev-addr-prefixes strings                                      
      --configuration.default-cluster.ui.branding-base-url string                                       
      --configuration.pb.listed                                                                         
      --description string                                                                              
  -h, --help                                                                                            help for create
      --initial-user                                                                                    create initial tenant user
      --initial-user.admin                                                                              
      --initial-user.created-at string                                                                  (YYYY-MM-DDTHH:MM:SSZ)
      --initial-user.deleted-at string                                                                  (YYYY-MM-DDTHH:MM:SSZ)
      --initial-user.description string                                                                 
      --initial-user.ids.email string                                                                   
      --initial-user.ids.user-id string                                                                 
      --initial-user.name string                                                                        
      --initial-user.password string                                                                    
      --initial-user.password-updated-at string                                                         (YYYY-MM-DDTHH:MM:SSZ)
      --initial-user.primary-email-address string                                                       
      --initial-user.primary-email-address-validated-at string                                          (YYYY-MM-DDTHH:MM:SSZ)
      --initial-user.require-password-update                                                            
      --initial-user.state string                                                                       allowed values: STATE_APPROVED, STATE_FLAGGED, STATE_REJECTED, STATE_REQUESTED, STATE_SUSPENDED (default "STATE_APPROVED")
      --initial-user.state-description string                                                           
      --initial-user.temporary-password string                                                          
      --initial-user.temporary-password-created-at string                                               (YYYY-MM-DDTHH:MM:SSZ)
      --initial-user.temporary-password-expires-at string                                               (YYYY-MM-DDTHH:MM:SSZ)
      --initial-user.updated-at string                                                                  (YYYY-MM-DDTHH:MM:SSZ)
      --max-applications uint                                                                           
      --max-clients uint                                                                                
      --max-end-devices uint                                                                            
      --max-gateways uint                                                                               
      --max-organizations uint                                                                          
      --max-users uint                                                                                  
      --name string                                                                                     
      --state string                                                                                    allowed values: STATE_APPROVED, STATE_FLAGGED, STATE_REJECTED, STATE_REQUESTED, STATE_SUSPENDED
      --state-description string                                                                        
      --tenant-id string                                                                                
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
      --tenant-admin-key string                         Tenant Admin Key
```

### SEE ALSO

* [ttn-lw-cli tenants]({{< relref "ttn-lw-cli_tenants" >}})	 - Tenant commands


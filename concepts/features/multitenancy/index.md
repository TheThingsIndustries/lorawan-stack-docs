# Multi-tenancy

> Multi-tenancy is at the core of what make The Things Stack a production-grade, enterprise level LoRaWAN Network software.

Source: https://www.thethingsindustries.com/docs/concepts/features/multitenancy/


Multi-tenancy is at the core of what make The Things Stack a production-grade, enterprise level LoRaWAN Network software.

This means that you can create multiple _tenants_, each of which operates as a separate logically isolated namespace with its own entities (ex: users, organisations, devices, gateways etc) but uses a shared underlying infrastructure.

## Key Features

### 1. Tenant Isolation

- Each tenant has its own namespace which forces data isolation.
- Users/organizations of one tenant cannot access other tenants making the system secure by default.

### 2. Extensibility

- Creating multiple tenants makes it easy for users to manage their LoRaWAN Fleet.
- Tenants can be used for logical separation of environments (e.g., development, staging, production) allowing for maximum flexibility.

### 3. Custom Configurations

- Tenants flexibility to customize their tenant configurations (ex: custom branding, user rights etc).

### 4. Centralized Administration

- Users can easily administer tenants (create/delete/update) using a Tenant Admin Key (which is available for enterprise deployments).
- But tenant-specific admins control their respective environments.


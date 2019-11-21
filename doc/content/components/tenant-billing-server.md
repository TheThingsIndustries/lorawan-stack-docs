---
title: "Tenant Billing Server"
description: ""
weight: 12
---

The Tenant Billing Server manages the creation, suspension and billing of tenants using different payment backends. 

<!--more-->

## Backends

The Tenant Billing Server backends allow the Tenant Billing Server to manage multiple payment service providers at the same time. The backends themselves are stateless, and maintain tenant information using the tenant attributes. 

### Stripe

The [Stripe](https://stripe.com/) backend provides billing and tenant management support using Stripe's pricing plans using Stripe's webhook functionality. 

Tenants are created when a customer subscribes to a pricing plan which is enabled in the backend configuration. As long as the customer maintains his subscription and his payments are up to date, the tenant remains active. As soon as the subscription ends, the tenant is suspended until another subscription is created for the same customer. If the customer subscription is changed to a different pricing plan, the tenant will be upgraded automatically as well.

#### Pricing plans

Both metered and and recurring plans are supported by the backend. The metered plans will report the number of registered devices as part of the billing, while the recurring plans are meant to be used as fixed cost plans.

##### Tenant entity limits

It is possible to limit the number of entities that a tenant can own using Stripe's pricing plan metadata.

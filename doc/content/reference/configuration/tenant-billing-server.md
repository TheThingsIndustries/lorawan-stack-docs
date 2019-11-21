---
title: "Tenant Billing Server Options"
description: ""
weight: 10
---

## General options

- `tenant-admin-key` : The tenant administration key configured in the Identity Server.
- `reporter-address-regexps` : Regular expressions representing addresses which can report tenant metering totals.

### Stripe configuration

- `enable` : Enable the Stripe backend
- `api-key` : The API secret key used for Stripe operations. Can be found in the `API keys` menu of the `Developers` section of the Stripe dashboard.
- `endpoint-secret-key` : The endpoint secret key used to verify the signature of the Stripe webhooks. Can be found in the `Webhooks` menu of the `Developers` section of the Stripe dashboard.
- `skip-signature-validation` : If enabled, the backend will no longer validate the signature of the Stripe webhooks. Do not use in production environments.
- `recurring-plan-ids` : The IDs of the recurring pricing plans which are managed by the backend. Can be found in the main page of the pricing plan.
- `metered-plan-ids` : The IDs of the metered pricing plans which are managed by the backend. Can be found in the main page of the pricing plan.

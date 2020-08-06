---
title: "Tenant Billing Server Options"
description: ""
weight: 10
distribution: "Multi Tenant"
---

## General options

- `tbs.tenant-admin-key` : The tenant administration key configured in the Identity Server.
- `tbs.pull-interval` : How frequently to pull the metering data.
- `tbs.reporter-address-regexps` : Regular expressions representing addresses which can report tenant metering totals.

### Stripe configuration

- `tbs.stripe.enable` : Enable the Stripe backend
- `tbs.stripe.api-key` : The API secret key used for Stripe operations. Can be found in the **API keys** menu of the **Developers** section of the Stripe [dashboard](https://dashboard.stripe.com/).
- `tbs.stripe.endpoint-secret-key` : The endpoint secret key used to verify the signature of the Stripe webhooks. Can be found in the **Webhooks** menu of the **Developers** section of the Stripe dashboard.
- `tbs.stripe.skip-signature-validation` : If enabled, the backend will no longer validate the signature of the Stripe webhooks. Do **not** use in production environments.
- `tbs.stripe.recurring-plan-ids` : The IDs of the recurring pricing plans which are managed by the backend. Can be found in the main page of the pricing plan.
- `tbs.stripe.metered-plan-ids` : The IDs of the metered pricing plans which are managed by the backend. Can be found in the main page of the pricing plan.

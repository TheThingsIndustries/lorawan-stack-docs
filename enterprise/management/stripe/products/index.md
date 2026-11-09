# Products and Pricing Plans

> Creating a Product and the Initial Pricing Plan In order to create a product, first login into the Stripe dashboard and click on the Products menu on the right. …

Source: https://www.thethingsindustries.com/docs/enterprise/management/stripe/products/


## Creating a Product and the Initial Pricing Plan

In order to create a product, first login into the Stripe [dashboard](https://dashboard.stripe.com/) and click on the **Products** menu on the right. The products list will now open.

![Product list](https://www.thethingsindustries.com/docs/enterprise/management/stripe/products/product-list.png)


You can now click on the **+ New** button in order to add a new product.

![Product creation](https://www.thethingsindustries.com/docs/enterprise/management/stripe/products/product-create.png)


After specifying the name and the unit label, you can add a new pricing plan by clicking on **Add pricing plan**.

![Pricing plan creation](https://www.thethingsindustries.com/docs/enterprise/management/stripe/products/plan-create.png)


After setting up the plan, scroll down and click **Add pricing plan**. Your product will be created with the given pricing plan and you can now provide the pricing plan ID in the [configuration](https://www.thethingsindustries.com/docs/enterprise/management/configuration/tenant-billing-server/).

![Created product](https://www.thethingsindustries.com/docs/enterprise/management/stripe/products/product-created.png)


## Adding Tenant Entity Limitations to a Pricing Plan

It is possible to limit the number of entities a customer can create when subscribed to a specific pricing plan. In order to achieve this, click on the pricing plan you would like to modify. The pricing plan description page will open.

![Pricing plan](https://www.thethingsindustries.com/docs/enterprise/management/stripe/products/plan-information.png)


Entity limits can be specified using metadata fields. The following fields are supported:

| Field name          | Description                                                                              |
| ------------------- | ---------------------------------------------------------------------------------------- |
| `max-applications`  | The maximum number of registered applications a tenant can have concurrently. Optional.  |
| `max-clients`       | The maximum number of registered clients a tenant can have concurrently. Optional.       |
| `max-end-devices`   | The maximum number of registered end devices a tenant can have concurrently. Optional.   |
| `max-gateways`      | The maximum number of registered gateways a tenant can have concurrently. Optional.      |
| `max-organizations` | The maximum number of registered organizations a tenant can have concurrently. Optional. |
| `max-users`         | The maximum number of registered users a tenant can have concurrently. Optional.         |

In order to add one (or more) of these limits, click on the **Edit** button of the **Metadata** section and fill in the limits.

![Plan metadata configuration](https://www.thethingsindustries.com/docs/enterprise/management/stripe/products/plan-metadata-edit.png)


After filling in the limits, click on **Save**. The plan will now be updated with the new limits.

![Plan metadata](https://www.thethingsindustries.com/docs/enterprise/management/stripe/products/plan-metadata.png)



---
title: "Subscription and Billing Management"
description: ""
weight: 1
aliases: [/getting-started/billing-and-subscription-management/]
---

This section shows how to buy {{% tts %}} subscription, and to perform subscription and billing management for your business accounts with The Things Industries.

<!--more-->

## Purchasing {{% tts %}} Subscription

Navigate to the [{{% tts %}} Plans](https://accounts.thethingsindustries.com/fee-calculator) page.

First, you need to choose your entry level.

If you are just exploring {{% tts %}} functionalities and performance, we suggest you pick **{{% tts %}} Discovery**.

If you are already a user of {{% tts %}} and want to scale up, you can choose between **Standard** and **Plus** plans, both of which have different levels of offered support (**Standard**, **Priority**, **Consulting** and **Free**). You can follow [this link](https://www.thethingsindustries.com/support/) to compare support plans.

On the top of the page, you can also choose between monthly and annual billing plan.

{{< figure src="plans-and-billing-period.png" alt="Plans and billing period" >}}

Every subscription and support plan have details listed on the Plans page. If you are not sure which plan to choose, you can scroll down and calculate an approximate price for your fleet of devices, and check out our answers to frequently asked questions about {{% tts %}} plans. On the bottom of the page you can also request a demo or contact an expert.

{{< figure src="faq-and-price-estimation.png" alt="Price estimation and FAQ" >}}

To sign up for any of the above mentioned plans, just click on the button on the plan to sign up and you will be redirected to the checkout page, where you will be requested to enter your personal and billing info.

If you are not looking for a cloud but for an enterprise solution, make sure to check out [self-hosted {{% tts %}} options](https://www.thethingsindustries.com/deployment/).

{{< note >}} Some deployments (e.g. **{{% tts %}} Dedicated Cloud**) and some support plans (e.g. **Consulting**) are not available for purchase through the platform. Instead, you need to [contact The Things Industries](mailto:info@thethingsindustries.com) to proceed. {{</ note >}}

## Creating a Tenant and a Billing Account

Once you're finished with the purchase, you'll be directed to enter your Network Server and Billing Account details.

First, you need to provide a **Tenant name** and a **Tenant ID** for the tenant you want to create.

{{< figure src="tenant-name-and-id.png" alt="Tenant name and ID" >}}

Then, you need to choose clusters you want to use. You can also determine if you want to list your network on [Packet Broker]({{< ref "/the-things-stack/packet-broker" >}}).

Add the **Administrator email**, **Administrator username** and **Administrator full name** for your Billing Account.

{{< figure src="cluster-and-administrator-info.png" alt="Cluster and administrator info" >}}

Finish with tenant settings by clicking the **Proceed to Billing Information** button.

Next, you need to enter your **Company name**, as well as the **Billing email** and **Billing password**.

{{< figure src="billing-email-and-password.png" alt="Billing account info" >}}

You also need to provide some personal info like **Phone number**, **Address**, **City**, **Zip** and **Country**.

The last step is related to payment details. Under **Recap** you'll be able to see the price for {{% tts %}} deployment and support plan you've chosen, excluding VAT/tax. 

If you have a discount coupon, you can use it here.

{{< figure src="recap-and-coupon.png" alt="Price and coupon" >}}

Finally, you have to provide the **Payment method** info. You will need to add your credit card details here.

{{< note >}} Keep in mind that if you chose {{% tts %}} Discovery tier, The Things Industries won't charge you anything until you scale up with one of {{% tts %}} deployments. The Things Industries also doesn't see or store your credit card details you provide under **Payment method** step. {{</ note >}}

## Manage your Subscriptions, Support and Billing Plans

After you purchased {{% tts %}} subscription and created your Billing Account, you'll receive some emails in the inbox of the administrator email address.

Among other info, you'll be provided with a URL to access your newly created tenant's Console. In this example, the URL is `https://docs-demo.eu1.cloud.thethings.industries/`. Use the administrator username you provided in previous steps to access it. You might be asked to change your administrator password to log into your tenant.

Navigate to the [Billing Account login page](https://accounts.thethingsindustries.com/login). Use the Billing Account administrator email and password you created in previous steps. Click on **Log in**.

{{< figure src="billing-account-login.png" alt="Billing-account-login" >}}

To check your current subscriptions, open the **Current subscriptions** tab.

To add a new subscription, click the **Add a subscription** button at the bottom of the page and follow steps that will be identical to the ones described in sections above.

You can also edit existing subscriptions. To do this, click on a single subscription. You'll be able to see usage tier, support and pricing details, as well as credit card info.

{{< figure src="subscription-details.png" alt="Subscription details" >}}

To upgrade your subscription and be able to add more entities and enjoy full {{% tts %}} service, click the **Upgrade** button and follow instructions.

Here you can also edit your support plan. Having a support lets you contact The Things Industries support team via [email](mailto:support@thethingsindustries.com) or via the [Support portal](https://thethingsindustries.atlassian.net/servicedesk/customer/portal/1).

Scroll down to the bottom of the page to **Cancel subscription**.

To access your invoices and billing information, switch to the **Invoices** tab.

{{< figure src="invoices.png" alt="Invoices overview" >}}

Under **Invoice Information** you can see the billing info you provided and you can edit it if you like so.

Your past invoices will be available for download under **Invoice History**.

{{< note >}} If you change your billing information, it will be applied only on newly created invoices. Invoices that have been created before that cannot be changed. {{</ note >}}

## FAQ

### How can I reset my Billing Account password?

Please submit your Billing Account email address via the [password reset form](https://accounts.thethingsindustries.com/reset-password) and follow the instructions that will land in your email inbox.

### I forgot my Billing Account email address. What now?

Please contact our [sales team](mailto:sales@thethingsindustries.com).

### I canceled my subscription so my tenant is suspended. Can I reactivate it?

Please reach out to our [sales team](mailto:sales@thethingsindustries.com) and reference your tenant ID.

### Can multiple users access a single Billing Account?

No, {{% tts %}} Billing Account can only be accessed by one person (i.e. one email address). However, you can change the email address which receives payment reminders and appears on the invoices. To edit this email addess, navigate to **Invoices** tab in your Billing Account, then click **Edit billing information** under the **Invoice Information** section and change it.

### I'm facing an error that says I reached a limit for adding devices/gateways. What do I do?

If you've reached a limit for adding devices and/or gateways, you'll be facing the `error:pkg/identityserver:tenant_entity_limit` error. For example, if you're using {{% tts %}} Discovery plan (which allows 10 devices, 1 application and 1 gateway to be registered) and you try adding a second gateway, you'll see something like this:

```JSON
{
  "code": 9,
  "message": "error:pkg/identityserver:tenant_entity_limit (limit for gateway entities in tenant reached, upgrade at )",
  "details": [
    {
      "@type": "type.googleapis.com/ttn.lorawan.v3.ErrorDetails",
      "namespace": "pkg/identityserver",
      "name": "tenant_entity_limit",
      "message_format": "limit for {entity_type} entities in tenant reached, upgrade at {subscription_upgrade_url}",
      "attributes": {
        "entity_type": "gateway",
        "limit": 1,
        "subscription_upgrade_url": ""
      },
      "correlation_id": "abfd8647852947c4889b850f7736ca7b",
      "code": 9
    }
  ]
}
```

If you want to add more entities than your current limit allows you to, you will need to upgrade your subscription plan. For example above, you could upgrade your plan from Discovery to Standard or Plus. If you face any difficulties with upgrading your plan, feel free to reach [The Things Industries sales team](mailto:sales@thethingsindustries.com).
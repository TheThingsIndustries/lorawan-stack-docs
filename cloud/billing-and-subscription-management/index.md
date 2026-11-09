# Subscription and billing

> This section shows how to buy The Things Stack subscription, and to perform subscription and billing management for your business accounts with The Things …

Source: https://www.thethingsindustries.com/docs/cloud/billing-and-subscription-management/


This section shows how to buy The Things Stack subscription, and to perform subscription and billing management for your business accounts with The Things Industries.

## Purchasing The Things Stack Subscription

Navigate to the [The Things Stack Plans](https://www.thethingsindustries.com/stack/plans/) page.

First, you need to choose your entry level.

If you are just exploring The Things Stack functionalities and performance, we suggest you pick **The Things Stack Discovery**.

If you are already a user of The Things Stack and want to scale up, you can choose between **Standard** and **Plus** plans, both of which have different levels of offered support (**Standard**, **Priority**, **Consulting** and **Free**). You can follow [this link](https://www.thethingsindustries.com/support/) to compare support plans.

On the top of the page, you can switch between monthly and annual billing plan in order to compare the prices for The Things Stack plan you're planning to buy.

![Plans and billing period](https://www.thethingsindustries.com/docs/cloud/billing-and-subscription-management/plans-and-billing-period.png)


Every subscription and support plan have details listed on the Plans page. If you are not sure which plan to choose, you can scroll down and calculate an approximate price for your fleet of devices, and check out our answers to frequently asked questions about The Things Stack plans. On the bottom of the page you can also request a demo or contact an expert.

![Price estimation and FAQ](https://www.thethingsindustries.com/docs/cloud/billing-and-subscription-management/faq-and-price-estimation.png)


To sign up for any of the above mentioned plans, just click on the button on the plan to sign up and you will be redirected to the checkout page, where you will be requested to enter your personal and billing info. Under **Summary** section you will see the final price for The Things Stack deployment and support plan you've chosen, excluding VAT/tax. This is also a place to apply a discount coupon if you have one.

> **Note:** Keep in mind that if you chose The Things Stack Discovery tier, The Things Industries won't charge you anything until you scale up with one of The Things Stack deployments. The Things Industries also doesn't see or store your credit card details you provide under **Payment method** step.


![Personal and billing info](https://www.thethingsindustries.com/docs/cloud/billing-and-subscription-management/billing-info.png)


If you are not looking for a cloud but for an enterprise solution, make sure to check out [self-hosted The Things Stack options](https://www.thethingsindustries.com/deployment/).

> **Note:** Some deployments and some support plans (e.g. **Consulting**) are not available for purchase through the platform. Instead, you need to [contact The Things Industries](mailto:info@thethingsindustries.com) to proceed.


## Creating Your Network

Once you're finished with the purchase, you will be redirected to network creation page. In order to create your custom The Things Stack Cloud tenant, you will need to provide details such as name and ID for your network, choose region where you want it deployed, and enter network administrator info.

![Enter network name](https://www.thethingsindustries.com/docs/cloud/billing-and-subscription-management/network-name.png)


![Enter network ID](https://www.thethingsindustries.com/docs/cloud/billing-and-subscription-management/network-id.png)


![Choose cluster](https://www.thethingsindustries.com/docs/cloud/billing-and-subscription-management/cluster.png)


![Provide admin info](https://www.thethingsindustries.com/docs/cloud/billing-and-subscription-management/admin.png)


Finally, click the **Launch The Things Stack Cloud** button to create your network.

## Manage your Subscriptions, Support and Billing Plans

After you purchased The Things Stack subscription, you'll receive some emails in the inbox of the administrator email address you provided previously. In one of the emails, you will get a link for creating an admin account password.

Among other info, you'll be provided with a URL to access your newly created tenant's Console. The Console will be available on:

`https://<your-network-id>.<your-cluster>.cloud.thethings.industries`

e.g. `https://docs-test-network.eu1.cloud.thethings.industries` for above shown example.

Use the administrator username you provided in previous steps, and the password that you created via magic link to access it.

To manage your subscriptions, log in [here](https://accounts.thethingsindustries.com/login) with the administrator email and password you created in previous steps.

To check your current subscriptions, open the **Subscriptions** tab.

![Subscriptions overview](https://www.thethingsindustries.com/docs/cloud/billing-and-subscription-management/subscriptions.png)


To add a new subscription, click the **Add a subscription** button and follow steps that will be identical to the ones described in sections above.

You can also edit existing subscriptions. To do this, click on your previously created subscription. You'll be able to see subscription details such as payment due date, payment method, usage tier and invoice history.

![Edit existing subscription](https://www.thethingsindustries.com/docs/cloud/billing-and-subscription-management/edit-subscription.png)


To edit customer info or default payment method, click the **Change** button next to **Payment method**. There you can also set a purchase number (PO).

> **Note:** The same customer info and payment method settings are available under the **Payment Settings** tab.


![Payment settings](https://www.thethingsindustries.com/docs/cloud/billing-and-subscription-management/payment-settings.png)


To upgrade your subscription and be able to add more entities and enjoy full The Things Stack service, click the **Change plan** button and choose your desired subscription, then finish with **Upgrade cloud**. You can also apply a discount coupon here.

![Upgrade existing subscription](https://www.thethingsindustries.com/docs/cloud/billing-and-subscription-management/upgrade.png)


You can also upgrade your support plan (or add one if you haven't done so previously).

![Upgrade support plan](https://www.thethingsindustries.com/docs/cloud/billing-and-subscription-management/upgrade-support.png)


In a similar manner, you can also choose to downgrade your subscription or support plan.

To downgrade your subscription, e.g. from **Plus** to **Standard** plan, click the **Change plan** button and choose **Downgrading to Cloud Standard** option.

![Downgrade TTS plan](https://www.thethingsindustries.com/docs/cloud/billing-and-subscription-management/downgrade-plan.png)


> **Note:** Keep in mind that you can upgrade from **Discovery** tier to **Standard** and **Plus** using these options, and you can downgrade from **Plus** to **Standard**, but you cannot downgrade from **Standard** to **Discovery**.


To downgrade your support plan, click the **Change support plan** button. You will be able to downgrade your support plan, e.g. from **Priority** to **Standard**, or to completely **Remove support**.

![Downgrade support plan](https://www.thethingsindustries.com/docs/cloud/billing-and-subscription-management/downgrade-support.png)


Under **Invoice History** section on the bottom, you will be able to see and download invoices and receipts for your subscription. To access your invoices for all purchased subscriptions, switch to the **Invoices** tab.

![Invoices overview](https://www.thethingsindustries.com/docs/cloud/billing-and-subscription-management/invoice-history.png)


> **Note:** If you change your billing information, it will be applied only on newly created invoices. Invoices that have been created before that cannot be changed.


If you want to cancel your subscription, click the **Cancel subscription** button in the upper right of your subscription preview (below **Expected next invoice amount**).

> **Warning:** Please note that the action of cancelling subscription cannot be undone. You will loose access to your tenant/network and all the data stored in it. It will also not be possible to reuse the associated Network ID. All registered end devices and gateways will be **locked** to this tenant unless deregistered/unclaimed and purged first.


## FAQ

### How can I reset my Billing Account password?

Please submit your Billing Account email address via the [password reset form](https://accounts.thethingsindustries.com/reset-password) and follow the instructions that will land in your email inbox.

### I forgot my Billing Account email address. What now?

Please contact our [sales team](mailto:sales@thethingsindustries.com).

### Can multiple users access a single Billing Account?

No, The Things Stack Billing Account can only be accessed by one person (i.e. one email address).

### Is it possible to add other people to the billing section?

No, unfortunately, this is not possible at the moment. If you have questions about accessing billing info, please send an email to [TTI finance department](mailto:finance@thethingsindustries.com).

### My payment failed, so I updated my credit card details - is charging automatically retried?

Yes, charging will be automatically retried in the following 7 days after the failed payment occurred.

### I'm facing an error that says I reached a limit for adding devices/gateways. What do I do?

If you've reached a limit for adding devices and/or gateways, you'll be facing the `error:pkg/identityserver:tenant_entity_limit` error. For example, if you're using The Things Stack Discovery plan (which allows 10 devices, 1 application and 1 gateway to be registered) and you try adding a second gateway, you'll see something like this:

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

If you want to add more entities than your current limit allows you to, you will need to upgrade your subscription plan. For example above, you could upgrade your plan from Discovery to Standard or Plus. If you want to upgrade make sure to check sections above, and if you face any difficulties, feel free to reach [The Things Industries sales team](mailto:sales@thethingsindustries.com).

### My VAT ID is showing as `VAT ID is not valid` while subscribing to The Things Stack.

Generally, the first two letters of the VAT ID represent the country code, but The Things Stack doesn't require it during the subscription process. Therefore, please remove the first two letters at the beginning of the VAT ID and enter the remaining digits as the VAT ID while filling in the details.

For example, if the VAT ID is `AB12312312312`, enter `12312312312` and try subscribing to The Things Stack again.

### What happens if my subscription is past due?

If your The Things Stack tenant subscription payment is overdue, it enters the flagged state. First, you will first receive the `Stripe subscription past due` warning upon any action in your tenant's Console, and when using API or CLI. You will probably also receive an email notifying you about overdue payment.

> **Warning:** If the payment is 3 weeks past due, automatic tenant deactivation will follow.


Once you clear all overdue pending invoices, your tenant will automatically be reactivated.

## How many devices can I add in an application?

In The Things Stack Cloud tenant, there's no restriction on registering number of devices within an application. This means you can register all of your devices under a single application without any data routing issues. For efficient management, group devices and register in multiple applications based on deployment sites or clients. This helps to streamline permissions and manage organizations, especially when handling multiple clients.


## Pages in this section

- [Subscription via AWS Marketplace](https://www.thethingsindustries.com/docs/cloud/billing-and-subscription-management/subscribe-tts-via-aws-marketplace/index.md): This section shows how to subscribe a tenant in The Things Stack Cloud deployment via AWS Marketplace.


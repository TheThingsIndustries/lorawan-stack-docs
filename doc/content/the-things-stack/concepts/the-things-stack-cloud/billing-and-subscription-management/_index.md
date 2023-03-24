---
title: "Subscription and Billing Management"
description: ""
weight: 1
aliases: [/getting-started/billing-and-subscription-management/]
---

This section shows how to buy {{% tts %}} subscription, and to perform subscription and billing management for your business accounts with The Things Industries.

<!--more-->

## Purchasing {{% tts %}} Subscription

Navigate to the [{{% tts %}} fee calculator](https://accounts.thethingsindustries.com/fee-calculator) page.

First, you need to choose your entry level. If you are just exploring {{% tts %}} functionalities and performance, we suggest you pick **{{% tts %}} Discovery**. If you are already a user of {{% tts %}} and want to scale up, **{{% tts %}}** is the right choice for you.

If you choose {{% tts %}} entry level, you'll also need to choose your deployment and device bundle. If you want to learn more about available {{% tts %}} deployments, check 

TODO: ADd the link

Next, you need to pick your support plan. Available plans are **DIY**, **Standard** and **Priority**, but keep in mind that all plans are not available for all {{% tts %}} deployments. You can follow [this link](https://www.thethingsindustries.com/support/) to compare support plans.

{{< note >}} Some deployments (e.g. **{{% tts %}} Dedicated Cloud**) and some support plans (e.g. **Consulting**) are not available for purchase through the platform. Instead, you need to [contact The Things Industries](mailto:info@thethingsindustries.com). {{</ note >}}

If you choose one of {{% tts %}} deployments, you might also need to choose between monthly and yearly pre-paid plan for your contract period and billing preferences.

## Creating a Tenant and a Billing Account

Once you're finished with the purchase, you'll be directed to enter your Network Server and Billing Account details.

First, you need to provide a **Tenant name** and a **Tenant ID** for the tenant you want to create.

{{< figure src="tenant-name-and-id.png" alt="Tenant name and ID" >}}

Then, you need to choose clusters you want to use. You can also determine if you want to list your network on [Packet Broker]({{< ref "/getting-started/packet-broker" >}}).

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

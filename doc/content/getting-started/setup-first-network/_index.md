---
title: "Setup Your First LoRaWAN Network"
description: ""
weight: 1
---

This guide walks you through setting up your first LoRaWAN Network.

<!--more-->

## Prerequisites

1. A valid credit card. This card will not be charged for the free `Discovery` plan that we setup in this guide.
2. An email address.

## Setup

Head over to [thethingsindustries.com](https://thethingsindustries.com) and click on the **Get Started** button.

This leads to the `plans` page which shows the different plans supported by {{% tts %}} Cloud.

For this example, we will choose the `Discovery` plan.

{{< note  "At the time of writing this documentation, this plan allows you free access to use 10 devices and 10 gateways on The Things Stack Cloud. For updates on these limits, check the plans page." />}}

Click on the **Get Started for Free** button.

In the subsequent page, create an account by filling in an _email address_ and a _strong password_.

{{< note  "This will send out a verification email to the specified address. Make sure that the email is verified either before or soon after completing the rest of this setup." />}}

This email address is used as the contact point for all billing related operations.

{{< figure src="ttsc-signup.png" alt="Sign up for The Things Stack Cloud" >}}

Now you can fill in the relevant details to create a Subscription.

{{< figure src="ttsc-create-account.png" alt="Complete Information" >}}

This page asks you for a **Payment method**. Fill in the relevant card details.

{{< figure src="ttsc-signup-card.png" alt="Payment information" >}}

{{< warning >}}
Please note that this is used only for verifying legitimacy and you will only be charged once you exceed the device limits of the `Discovery` plan.
{{</ warning >}}

If your details are correct and verified successfully, you will reach the [`Accounts`](https://accounts.thethingsindustries.com) page.

Click on **Set up my deployment** to proceed.

In the subsequent window, choose a **Network Name**. This field supports valid alpha numeric characters with dashes/underscores and spaces.

{{< figure src="ttsc-setup-1" alt="Choose Network Name" >}}

Choose a name for your network that can be easily understood by both administrators and regular users. This name will be used in the Console and in automated system emails sent to them.

Next Choose a **Network ID**. {{% tts %}} Cloud is a multi-tenant shared infrastructure and this is also referred to as your `Tenant ID`.

{{< figure src="ttsc-signup-tenant-id.png" alt="Choose Tenant ID" >}}

This field has some constraints. The **Network ID** field has to be between 3 and 36 characters and can contain only lower-case letters, numbers and dashes. Multiple, leading and/or trailing dashes are not allowed.

Next choose the geographical **Cluster** from the dropdown closest to your geographical region.

{{< figure src="ttsc-create-cluster.png" alt="Choose Cluster" >}}

{{< note  "The Things Stack Cloud is a multi-region (cluster) deployment. Your account automatically provides you access to all the clusters. This cluster selection here is only the initial cluster to which the first gateways are connected for reducing geographical latency." />}}

In the subsequent window, select the details of the admin user. This user has full administrator access to your tenant.

{{< note  "The email ID chosen here can be the same as the billing email for individuals. For organizations, we recommend using separate emails for finance and the technical administrators." />}}

{{< figure src="ttsc-admin-user.png" alt="Choose Admin User settings" >}}

Click on **Launch The Things Stack Cloud**.

Now before proceeding, please make sure to check the admin email for two emails that you received from {{% tts %}} Cloud.
- The first one is used to validate the admin email address. Follow the instructions in the email to validate it.
- The second email contains a link to create the password for the admin user. Make sure to choose a strong password.

Back on the signup flow, click on **Go to the console** to head to the {{% tts %}} Cloud Console, which is the web UI that is used to interact with {{% tts %}}.

{{< figure src="ttsc-complete.png" alt="Complete setup" >}}

Use the `Admin username (or email)` and the `password` that you setup earlier to login.

Congratulations!!! You now have your own production-grade LoRaWAN Network.

{{< figure src="ttsc-console.png" alt="Console" >}}

---
title: "Amazon Cognito"
description: ""
weight:
---

This sections contains instructions to configure Amazon Cognito to work with {{% tts %}}.

<!-- more -->

Configuring OpenID Connect with Amazon Cognito will allow single sign-on from any account within a Cognito user pool.

## Create a User Pool

From the [Amazon Cognito Management Page](https://console.aws.amazon.com/cognito/), choose **Manage User Pools**.

{{< figure src="manage-user-pools.png" >}}

Click **Create User Pool** in the top right.

{{< figure src="create-user-pool.png" >}}

Give the user pool a name of your choosing. You will not need this later, you may pick any name.

Click **Review Defaults**.

{{< figure src="name.png" >}}

Leave all default settings, but click **Add App Client**.

{{< figure src="add-app-client.png" >}}

Click **Add an app client**.

{{< figure src="add-app-client-2.png" >}}

Give the App Client a name and leave all settings default. Click **Create App Client**.

{{< figure src="add-app-client-3.png" >}}

You will be taken back to the App Clients screen, where you should see the App Client you just added. Click **Return to pool details**.

{{< figure src= "app-clients.png" >}}

Verify that the App Client you added is listed in the pool. Click **Create Pool**.

{{< figure src= "create-pool.png" >}}

In the left hand menu, choose **App client settings**.

Ensure that **Cognito User Pool** is checked for **Enabled Identity Providers**.

{{< figure src="app-client-settings.png" >}}

For the **Callback URL**, enter the **OAuth Callback URL** of your {{% tts %}} deployment. This is the [Server Address]({{< ref "getting-started/server-addresses" >}}) followed by the OAuth endpoint, which includes an **Authentication Provider ID** of your choosing:

`
/oauth/login/<authentication-provider-id>/callback
`

You will actually create the Authentication Provider in {{% tts %}} using this Authentication Provider ID, so remember it.

For example, with a tenant `tenant1` in the `eu1` cluster and an Authentication Provider ID of `aws-cog`, the OAuth Callback URL is:

`
https://tenant1.eu1.cloud.thethings.industries/oauth/login/aws-cog/callback
`

Additionally, ensure the following **Allowed OAuth Scopes** are checked:

- email
- openid
- profile

Finally, click **Save changes**.

{{< figure src="callback.png" >}}

Choose **Domain name** from the left hand menu.

Choose a domain name. You will not need to remember it, but **login will fail if no domain is configured**.

Click **Save changes**.

{{< figure src="domain.png" >}}

Finally, go to **App Clients** and choose your **App Client** to view your Client ID and Client Secret.

{{< figure src="secret.png" >}}

Proceed to [Configure {{% tts %}} for SSO]({{< relref "../../sso#configure-the-things-stack-for-sso" >}}) using the following information:

- **Client ID**: Provided by Cognito
- **Client Secret**: Provided by Cognito
- **Authentication Provider ID**: Of your choosing, above
- **OpenID Discovery Address**: https://cognito-idp.{REGION_ID}.amazonaws.com/{POOL_ID}. That should look like https://cognito-idp.eu-west-2.amazonaws.com/eu-west-2_KcLwCelr7. Your Pool Id is visible in **General Settings**.

## Troubleshooting Amazon Cognito

If you receive an error when logging in with Cognito, check the following:

- Did you configure a **Domain Name** in Cognito?
- Did you enable **email**, **profile**, and **openid** scopes?
- Did you ensure **Cognito User Pool** is checked for **Enabled Identity Providers**?

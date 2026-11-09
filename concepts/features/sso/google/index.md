# Google OpenID Connect

> This section contains instructions to configure Google OpenID Connect to work with The Things Stack. Configuring OpenID Connect with your Google account will …

Source: https://www.thethingsindustries.com/docs/concepts/features/sso/google/


This section contains instructions to configure Google OpenID Connect to work with The Things Stack.

<!-- more -->

Configuring OpenID Connect with your Google account will allow single sign-on from any account within your Google organization. This requires administrator rights to that organization.

## Create an OAuth Client ID

From the [Google Cloud Console](https://console.cloud.google.com/apis/credentials), navigate to **APIs and Services**, and choose **Credentials** in the left hand menu.

Click **Create Credentials** and choose **OAuth client ID**.

![Google Cloud Platform Credentials page with the Create credentials menu and the OAuth client ID option](https://www.thethingsindustries.com/docs/concepts/features/sso/google/oauth-client-id.png)


Choose **Web application** for the **Application type**.

![Google Cloud Platform Create OAuth client ID page with Web application selected as the application type](https://www.thethingsindustries.com/docs/concepts/features/sso/google/web-app.png)


Give the Application a **Name** of your choosing, and enter the **Redirect URI** of your The Things Stack deployment. The URI is the [Server Address](https://www.thethingsindustries.com/docs/concepts/server-addresses/) followed by the OAuth endpoint, which includes an **Authentication Provider ID** of your choosing:

```
/oauth/login/<authentication-provider-id>/callback
```

You will actually create the Authentication Provider in The Things Stack using this Authentication Provider ID, so remember it.

For example, with a tenant `tenant1` in the `eu1` cluster and an Authentication Provider ID of `goog`, the OAuth Callback URL is:

```
https://tenant1.eu1.cloud.thethings.industries/oauth/login/goog/callback
```

![Google Cloud Platform OAuth client ID form with the authorized redirect URI for The Things Stack](https://www.thethingsindustries.com/docs/concepts/features/sso/google/callback.png)


Click **Create** and you will be presented with the **Client ID** and **Client Secret** for this provider.

Proceed to [Configure The Things Stack for SSO](https://www.thethingsindustries.com/docs/concepts/features/sso/#configure-the-things-stack-for-sso) using the following information:

- **Client ID**: Provided by Google
- **Client Secret**: Provided by Google
- **Authentication Provider ID**: Of your choosing (see above)
- **Callback URL**: Includes your Authentication Provider ID (see above)
- **OpenID Discovery Address**: `https://accounts.google.com`


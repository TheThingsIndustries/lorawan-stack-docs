---
title: "Single Sign-On"
description: ""
weight: 
distributions: ["Cloud", "Enterprise"]
weight: 11
---

{{% tts %}} supports [OpenID Connect](https://openid.net/connect/) for single sign-on. This section contains instructions for connecting an OpenID provider to your {{% tts %}} deployment to allow users to sign in with their existing credentials.

<!--more-->

{{< cli-only >}}

## Requirements

1. Access to an OpenID Connect provider such as Google or Amazon Cognito
2. Administrator access to your {{% tts %}} deployment
3. [`tti-lw-cli`]({{< ref "getting-started/cli" >}})

## Configure Your OpenID Connect Provider

First, you must configure your OpenID Connect Provider to accept login requests from {{% tts %}} and to forward authentication to the callback address of your {{% tts %}} deployment.

{{% tts %}} requires the following from the OpenID Connect Provider:

- OpenID Discovery Address
- Client ID
- Client Secret

And you must enter the following in the OpenID Connect Provider configuration:

- Callback URL

See instructions for configuring [Google]({{< relref "google" >}}) and [Amazon Cognito]({{< relref "cognito" >}}) OpenID Connect Providers.

### Callback URL

The callback URL (or Redirect URI in Google terminology) of your {{% tts %}} deployment is the [Server Address]({{< ref "getting-started/server-addresses" >}}) followed by the OAuth endpoint, which includes an **Authentication Provider ID** of your choosing:

`
/oauth/login/<authentication-provider-id>/callback
`

You will actually create the Authentication Provider in {{% tts %}} using this Authentication Provider ID, so remember it.

For example, with a tenant `tenant1` in the `eu1` cluster and an Authentication Provider ID of `auth-provider`, the OAuth Callback URL is:

`
https://tenant1.eu1.cloud.thethings.industries/oauth/login/auth-provider/callback
`

## Configure {{% tts %}} for SSO

Once your OpenID Connect provider is configured, you can configure {{% tts %}}.

Use the following command (note that Authentication Provider commands are only available in `tti-lw-cli`):

```bash
$ tti-lw-cli authentication-providers create <authentication-provider-id> \
--allow-registrations \
--configuration.provider.oidc.client-id <client-id> \
--configuration.provider.oidc.client-secret <client-secret> \
--configuration.provider.oidc.provider-url <provider-url> \
--name <display-name>
```

The `name` is what will appear on {{% tts %}} login screen. For example, to register a Google OpenID Authentication Provider, using the `id` goog and `name` Goog:

```bash
$ tti-lw-cli authentication-providers create goog \
--allow-registrations \
--configuration.provider.oidc.client-id xxxxx-vq3v4e2ha7c1668mr92iiqu0bd1spct2.apps.googleusercontent.com \
--configuration.provider.oidc.client-secret GOCSPX-Vxxxxxxx \
--configuration.provider.oidc.provider-url https://accounts.google.com \
--name Goog
```

A list of provider discovery URLs is available from AWS [here](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-oidc-idp.html#cognito-user-pools-oidc-idp-step-1).

If succesful, `tti-lw-cli` will return a list of Authentication Providers. When you go to login, you will see the login option using the `name` you registered the Authentication Provider with.

{{< figure src="login-screen.png" >}}

## Troubleshooting

### I get the `email not verified` error when logging in using SSO.

{{% tts %}} checks if the email address included in the JWT token has been verified by the OIDC provider (e.g. The Things ID or SSO DB), so the JWT token that the OIDC provider provides should contain the `email_verified` field. If this field is not present, the user might face the following error upon logging in with SSO:

```
{
"code": 7,
"message": "error:pkg/account/oidc:unverified_email (email not verified)",
"details": [
    {
        "@type": "type.googleapis.com/ttn.lorawan.v3.ErrorDetails",
        "namespace": "pkg/account/oidc",
        "name": "unverified_email",
        "message_format": "email not verified",
        "correlation_id": "43c2ea63620d4487b64723d03195953e",
        "code": 7
    }]
}
```

To fix this error, users should ask their OIDC provider to include the `email_verified` field in the JWT token to be used with {{% tts %}} SSO.
---
title: "Google Single Sign On"
description: ""
distributions: ["Enterprise"]
---

[Google's OAuth 2.0 APIs](https://developers.google.com/identity/openid-connect/openid-connect) are OpenID certified and can be used to log into {{% tts %}}.
This page guides you with the necessary steps to login to {{% tts %}} using your Google account.

<!--more-->

## Prerequisites

1. A [Google Cloud](https://cloud.google.com/) account with access to create credentials.
2. A {{% tts %}} account with admin rights.
3. The Things Stack Enterprise command line interface (`tti-lw-cli`).
4. Choose a Provider ID (ex: `google`). It must be between 3 and 36 characters and can only contain lower-case alphanumeric letters and dashes. Multiple, leading and/or trailing dashes are not allowed.

## Configuring the Provider in Google Cloud Console

Log into the [Google Cloud Console](https://console.cloud.google.com) and switch to the the required project.

Setup an [OAuth Consent Screen](https://console.cloud.google.com/apis/credentials/consent) if you don't have one already. Follow the instructions provided. Only the mandatory fields are required to be filled here.

Create [API credentials](https://console.developers.google.com/apis/credentials) of type **Oauth Client ID**. The values are

- **Application Type**: `Web Application`.
- **Name**: A descriptive name.
- **Redirect URL**: This should be of the form `https://<server-address>/oauth/login/<provider-id>/callback`. `server-address` is the address where {{% tts %}} is hosted.

Once the client is created, Google will create a Client ID and Client Secret and will display that on the screen. Copy these values somewhere safely. You can also access these values at a later point

We can now use this information to register the provider in {{% tts %}}.

## Registering the Provider in The Things Stack

Login to {{% tts %}} via the CLI.

Register the provider. Set the following values

```bash
OIDC_PROVIDER_ID="provider ID"                  # Provider ID from above.
OIDC_PROVIDER_NAME="My OIDC Provider"           # Name used to display on the Console.
OIDC_CLIENT_ID="client123"                      # Client ID from the previous step.
OIDC_CLIENT_SECRET="secret123"                  # Client Secret from the previous step.
```

```bash
$ tti-lw-cli ap create $OIDC_PROVIDER_ID \
    --name $OIDC_PROVIDER_NAME \
    --allow-registrations true \
    --configuration.provider.oidc.client-id $OIDC_CLIENT_ID \
    --configuration.provider.oidc.client-secret $OIDC_CLIENT_SECRET \
    --configuration.provider.oidc.provider-url https://accounts.google.com
```

Note that the ` --configuration.provider.oidc.provider-url` is hardcoded to `https://accounts.google.com`.

An example response is shown below.

```bash
{
  "ids": {
    "provider_id": "provider ID"
  },
  "created_at": "2023-10-05T05:18:11.685215Z",
  "updated_at": "2023-10-05T05:18:11.685215Z",
  "name": "My OIDC Provider",
  "allow_registrations": true,
  "configuration": {
    "oidc": {
      "client_id": "client123",
      "client_secret": "secret123",
      "provider_url": "https://accounts.google.com"
    }
  }
}
```

Head to the Login page of {{% tts %}} console. A button **Login to \<name\>** should be present, where `<name>` is the same as the `OIDC_PROVIDER_NAME`.

Click on this button. This will redirect you to the Google Sign in page. You will be asked to authorize {{% tts %}} to read some basic user information. Select `Allow`. This is only for the first login attempt.

If all your configuration is correct, you will now be redirected to {{% tts %}} console and you will be logged in. The username is chosen based on the rules explained in the [generating usernames]({{< ref "/reference/federated-auth/oidc#generating-usernames" >}}) section.

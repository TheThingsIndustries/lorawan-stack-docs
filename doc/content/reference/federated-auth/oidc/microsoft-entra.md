---
title: "Microsoft Entra"
description: ""
distributions: ["Enterprise"]
new_in_version: "3.28.0"
---

[Microsoft Entra](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-protocols-oidc) supports OpenID 1.0 authorization flow and can be used to log into {{% tts %}}.
This page guides you with the necessary steps to login to {{% tts %}} using your Microsoft Entra account.

<!--more-->

## Prerequisites

1. A [Microsoft Entra](https://entra.microsoft.com/) account with access to create credentials.
2. The Microsoft Entra account used to login must have an email set in their user info panel.
3. A {{% tts %}} account with admin rights.
4. The Things Stack Enterprise command line interface (`tti-lw-cli`).
5. Choose a Provider ID (ex: `microsoft-entra`). It must be between 3 and 36 characters and can only contain lower-case alphanumeric letters and dashes. Multiple, leading and/or trailing dashes are not allowed.

## Disclaimer

The Open ID implementation of [Microsoft Entra](https://entra.microsoft.com/) does not require the email ID of the microsoft to be verified.
This could lead to potential security issues since the user's email is not verified.
Admins must make sure that users who login to {{% tts %}} do not have access to update their email so that the email cannot be spoofed.

## Configuring the Provider in Microsoft Entra

Log in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

Navigate to the [App Registrations](https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/RegisteredApps) panel.

Add a new registration with the following values.

- **Name**: A user-facing name.
- **Supported account types**: **Accounts in this organizational directory only(Single Tenant)**
- **Redirect URI**: From the dropdown choose **Web** as the type and for the value use `https://<server-address>/oauth/login/<provider-id>/callback`. `server-address` is the address where {{% tts %}} is hosted.

Select **Register**.

Open your app registration. Note the **Directory (tenant) ID**. This will be of the format `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`.

In the registration, navigate to the **Authentication** panel. For the `Select the tokens you would like to be issued by the authorization endpoint:` section, choose `ID tokens (used for implicit and hybrid flows)`.

In the **Certificates and Secrets** panel, select the **Client Secrets** tab and select **+ New Client Secret**. Add a description and an expiry date. Note the **Secret ID** and **Value**.

In the **Token Configuration** tab, click **+ Add Optional Claim**, Select **ID** as the **Token type** and select the **email** field.

## Registering the Provider in The Things Stack

Login to {{% tts %}} via the CLI.

Register the provider. Set the following values

```bash
OIDC_PROVIDER_ID="provider ID"                                # Provider ID from above.
OIDC_PROVIDER_NAME="My OIDC Provider"                         # Name used to display on the Console.
OIDC_CLIENT_ID="client123"                                    # Client ID is the Secret ID above.
OIDC_CLIENT_SECRET="secret123"                                # Client Secret is the secret Value from above..
OIDC_MICROSOFT_TENANT="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
OIDC_ALLOWED_EMAIL_DOMAINS="example.com"                      # This is a required field to skip email verification.
```

```bash
$ tti-lw-cli ap create $OIDC_PROVIDER_ID \
    --name $OIDC_PROVIDER_NAME \
    --allow-registrations true \
    --allowed-email-domains  $OIDC_ALLOWED_EMAIL_DOMAINS \
    --configuration.provider.oidc.client-id $OIDC_CLIENT_ID \
    --configuration.provider.oidc.client-secret $OIDC_CLIENT_SECRET \
    --configuration.provider.oidc.provider-url https://login.microsoftonline.com/$OIDC_MICROSOFT_TENANT/v2.0
```

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
      "provider_url": "https://login.microsoftonline.com/$MICROSOFT_TENANT/v2.0"
    }
  },
  "allowed_email_domains": [
    "example.com"
  ]
}
```

Head to the Login page of {{% tts %}} console. A button **Login to \<name\>** should be present, where `<name>` is the same as the `OIDC_PROVIDER_NAME`.

Click on this button. This will redirect you to the Microsoft Sign in page. You will be asked to authorize {{% tts %}} to read some basic user information. Select `Allow`. This is only for the first login attempt.

If all your configuration is correct, you will now be redirected to {{% tts %}} console and you will be logged in. The username is chosen based on the rules explained in the [generating usernames]({{< ref "/reference/federated-auth/oidc#generating-usernames" >}}) section.

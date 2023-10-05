---
title: "OpenID Connect"
description: ""
distributions: ["Enterprise"]
---

[OpenID Connect](https://openid.net/connect/) 1.0 is a simple identity layer on top of the OAuth 2.0 protocol. It allows the Identity Server to verify the identity of the End-User based on the authentication performed by an Authorization Server, as well as to obtain basic profile information about the End-User in an interoperable and REST-like manner.

## Requirements

A new OAuth 2.0 client must be created in the provider and the client ID and client secret must be noted down. While creating the OAuth2 client, you will be asked to provide a redirect URL, which should have the following format:

```
https://thethings.example.com/oauth/login/<oidc-provider-id>/callback
```

Replace `<oidc-provider-id>` with the ID that you have chosen for this OpenID Connect provider, for example `my-oidc-provider`.

## Registering an Authentication Provider

We first define some user parameters used below:

```bash
OIDC_PROVIDER_ID="my-oidc-provider"
OIDC_PROVIDER_NAME="My OIDC Provider"
OIDC_CLIENT_ID="client123"
OIDC_CLIENT_SECRET="secret123"
OIDC_PROVIDER_URL="https://oidc.example.com"
```

Make sure you modify these according to your setup and use the following command to register the provider.

```bash
$ tti-lw-cli ap create $OIDC_PROVIDER_ID \
    --name $OIDC_PROVIDER_NAME \
    --allow-registrations true \
    --configuration.provider.oidc.client-id $OIDC_CLIENT_ID \
    --configuration.provider.oidc.client-secret $OIDC_CLIENT_SECRET \
    --configuration.provider.oidc.provider-url OIDC_PROVIDER_URL
```

## Generating Usernames

External users are being automatically registered when they login using the OpenID Connect provider. Their username is automatically generated based on the information provided by the provider. The following username variants are used:

- The preferred username (`preferred_username` in the OIDC claim token).
- The email address local-part. This means that a user whose email is `j.doe@example.com` will receive the username `j-doe`.
- The concatenation of the given and family name. This means that a user called `John Doe` will receive the username `john-doe`.
- The email address local-part concatenated with the provider ID. Following the above example with the address `j.doe@example.com`, the resulting username is `j-doe-my-oidc-provider`.
- The concatenation of the given name, family name and the provider ID. Following the example with the user `John Doe`, the resulting username is `john-doe-my-oidc-provider`.

Excepting the preferred username, the stack will attempt to concatenate up to 5 random characters at the end of the username in order to obtain a unique username.

You may have also observed that the `.` used in the email addresses was converted into a `-`. This is intended, and is part of the normalization process of the stack, which ensures that generated usernames are valid. The procedure is as follows:

- Turn every character into its lowercase variant. This means `John.Doe` becomes `john.doe`.
- Replace all of the non-alphanumeric characters with `-`. This means that `john.doe` becomes `john-doe`.
- Remove all of the duplicate `-`. This means that `john---doe` becomes `john-doe`.
- Remove any leading or trailing `-`. This means that `-john-` becomes `john`.

---
title: "OAuth access tokens"
description: ""
weight: 1
aliases:
  [ /api/concepts/auth/oauth-access-tokens ]
---

<!--more-->

To use this authentication method, you first need to [register an **OAuth client**]({{<ref "/the-things-stack/interact/adding-oauth-clients">}}) . After the registration is complete and accepted, you can **request authorization** by sending the user to the **authorization URL**:

```
https://<HOSTNAME>/oauth/authorize?client_id=<CLIENT-ID>&redirect_uri=<REDIRECT-URI>&state=<STATE>&response_type=code
```

- The `HOSTNAME` is the hostname of the Identity Server.
- The `client_id` is the **client ID** of your OAuth client.
- The `response_type` is always `code`.
- The `redirect_uri` must exactly match the **redirect URI** of your OAuth client registration if supplied.
  - We allow multiple **redirect URIs** in your OAuth client registration in the future, in which case the `REDIRECT-URI` must exactly match one of those.
- The optional `scope` is ignored by the Identity Server. All scopes defined in your OAuth client registration will be requested.
- The optional `state` can be used to mitigate CSRF attacks. It is recommended to supply this.

The Identity Server will prompt the user with a view asking to authorize your OAuth client. They will see the **client ID**, **description**, requested **scope** and **redirect URI**. If they accept the authorization, they will be redirected to your **redirect URI** with an **authorization code**:

```
https://<REDIRECT-URI>/?code=<AUTHORIZATION-CODE>
```

Your OAuth client can exchange this **authorization code**, which is valid for 5 minutes, for an **OAuth access token** by making a `POST` request to the **token URL**:

```
https://<HOSTNAME>/oauth/token
```

The request must use **Basic Auth** ([RFC7617](https://tools.ietf.org/html/rfc7617)) with the **client ID** as username and the **client secret** as password.

The **authorization code** is sent in the request payload:

```json
{
  "code": "<AUTHORIZATION-CODE>",
  "grant_type": "authorization_code"
}
```

The response contains the **OAuth access token**, which is valid for 60 minutes. If the network admin gave your OAuth client the **refresh token** grant, the response also contains a **refresh token**.

```json
{
  "access_token": "XXXXX",
  "token_type": "bearer",
  "expires_in": "3600",
  "refresh_token": "YYYYY"
}
```

You can now use the **OAuth access token** until it expires.

If you have a **refresh token**, you can exchange this for a new **OAuth access token** after the old one expires by making another `POST` request to the **token URL**, similar to the exchange of the **authorization code** you did before:

```
https://<HOSTNAME>/oauth/token
```

The request must use **Basic Auth** ([RFC7617](https://tools.ietf.org/html/rfc7617)) with the **client ID** as username and the **client secret** as password.

The **refresh token** is sent in the request payload:

```json
{
  "code": "<REFRESH-TOKEN>",
  "grant_type": "refresh_token"
}
```

The response again contains the **OAuth access token** and an indication of when it expires. The response also contains a new **refresh token**.

```json
{
  "access_token": "XXXXX",
  "token_type": "bearer",
  "expires_in": "3600",
  "refresh_token": "YYYYY"
}
```

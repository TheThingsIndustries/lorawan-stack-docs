---
title: "Authentication"
description: ""
weight: -1
---

API calls can be authorized either by providing an **API key**, **OAuth access token** or a **Session cookie**.

- Usage with HTTP `Authorization` Header: `Bearer XXXXX`
- Usage with HTTP `_session` Cookie, containing a session secret `XXXXX`
- Usage with gRPC [call credentials](https://grpc.io/docs/guides/auth.html#authentication-api) (in the `authorization` header): `Bearer XXXXX`
- Usage with MQTT: Password: `XXXXX`

Here, `XXXXX` is either a valid **API key**, a valid **OAuth access token** or a valid **session secret**.

API keys and OAuth access tokens in {{% tts %}} have the following format: `<token-type>.<token-id>.<token-secret>`. **Token type** defines if the token is an API key (`NNSXS`) or an OAuth access token (`MFRWG`).

> An example of a valid API key is `NNSXS.U4H3ZFFCMSR42BUAZPW2UWGFBV4WCNI5EXDJXDY.SHIF3PP5PBMJNZESN5XLR5TZJTJUIGKVUTM2I22IVBUVCD6VIQIA`, where `U4H3ZFFCMSR42BUAZPW2UWGFBV4WCNI5EXDJXDY` is a **token ID** and `SHIF3PP5PBMJNZESN5XLR5TZJTJUIGKVUTM2I22IVBUVCD6VIQIA` is a **token secret**.

{{< warning >}} When authorizing an API call, make sure to use the whole token (including token type, ID and secret) and not only the token ID. Otherwise, you might face an error resembling `error:pkg/auth:token (invalid token)`. {{</ warning >}}

{{< note >}} Please be careful not to expose your token secrets, so always censor the `<token-secret>` part of your token when posting examples, screenshots, etc. in public space. {{</ note >}}

## API keys

API keys are the simplest way of authorization. API keys do not expire, are revokable, and they are scoped to the entity they were generated from:

- User API keys
- Application API keys
- Gateway API keys
- Organization API keys

## OAuth access tokens

The Things Network uses the [OAuth 2.0 protocol](https://oauth.net/) for authentication and authorization. 

To use this method, you first need an **OAuth client registration**:

- The **client ID** uniquely identifies the OAuth client. Its restrictions are the same as for any other ID in TTN.
- The **description** is shown to the user when you request authorization.
- The **scope** indicates what actions your OAuth client is allowed to perform. This is shown to the user when you request authorization. You can select the actions your OAuth client needs on registration, a full list can also be found in our [source code]({{< tts-repo-file-url "blob" "api/rights.proto" >}}).
- The **redirect URI** is where the user is redirected after authorizing your OAuth client.
- The **client secret** is issued when your OAuth client Registration is accepted by a network admin.

After your OAuth client Registration is accepted, you can **request authorization** by sending the user to the **authorization URL**:

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

## Session cookies

Session cookies provide a way to authorize API usage using the session cookie obtained during authentication with the OAuth provider (`/oauth/login`). Since cookies are domain-scoped, this will only work for requests originating from the same domain as the API. Session cookies authorize full access to all owned resources of the user associated with the session. Any other means of authorization will take precedence if present in the request (e.g. a session cookie will be disregarded if an `Authorization` header is already present in the request).

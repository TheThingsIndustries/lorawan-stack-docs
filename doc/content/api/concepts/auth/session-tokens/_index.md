---
title: "Session tokens"
description: ""
weight: 2
---

Session cookies provide a way to authorize API usage using the session cookie obtained during authentication with the OAuth provider (`/oauth/login`).

<!--more-->

Since cookies are domain-scoped, this will only work for requests originating from the same domain as the API. Session cookies authorize full access to all owned resources of the user associated with the session. Any other means of authorization will take precedence if present in the request (e.g. a session cookie will be disregarded if an `Authorization` header is already present in the request).
